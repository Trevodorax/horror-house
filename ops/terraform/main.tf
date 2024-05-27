terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "4.45.0"
    }
  }
}

provider "aws" {
  region  = "${var.region}"
  access_key = "${var.iam-user-access-key}"
  secret_key = "${var.iam-user-secret-access-key}"
}

# repo to store the web app image
resource "aws_ecr_repository" "app_ecr_repo" {
  name = "horror-house-web-app-repo"

  image_scanning_configuration {
    scan_on_push = true
  }
}

# cluster to run the web app
resource "aws_ecs_cluster" "horror_house_web_app_cluster" {
  name = "horror-house-web-app-cluster"
}

# task definition for the web app
resource "aws_ecs_task_definition" "app_task" {
  family                   = "horror-house-web-app-task"
  container_definitions    = <<DEFINITION
  [
    {
      "name": "horror-house-web-app-task",
      "image": "${aws_ecr_repository.app_ecr_repo.repository_url}",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 8080,
          "hostPort": 8080
        }
      ],
      "memory": 512,
      "cpu": 256
    }
  ]
  DEFINITION
  requires_compatibilities = ["FARGATE"] # use Fargate as the launch type
  network_mode             = "awsvpc"    # add the AWS VPN network mode as this is required for Fargate
  memory                   = 512         # Specify the memory the container requires
  cpu                      = 256         # Specify the CPU the container requires
  execution_role_arn       = "${aws_iam_role.ecsTaskExecutionRole.arn}"
}

# IAM role for the ECS task execution
resource "aws_iam_role" "ecsTaskExecutionRole" {
  name               = "ecsTaskExecutionRole"
  assume_role_policy = "${data.aws_iam_policy_document.assume_role_policy.json}"
}

# Policy document for the ECS task execution role
data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ecs-tasks.amazonaws.com"]
    }
  }
}

# Attach the Amazon ECS task execution policy to the role
resource "aws_iam_role_policy_attachment" "ecsTaskExecutionRole_policy" {
  role       = "${aws_iam_role.ecsTaskExecutionRole.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# Provide a reference to default VPC
resource "aws_default_vpc" "default_vpc" {
}

# Provide references to default subnets
resource "aws_default_subnet" "default_subnet_a" {
  availability_zone = "${var.region}a"
}
resource "aws_default_subnet" "default_subnet_b" {
  availability_zone = "${var.region}b"
}

# Load balancer for the web app
resource "aws_alb" "application_load_balancer" {
  name               = "horror-house-web-app-lb"
  load_balancer_type = "application"
  subnets = [
    "${aws_default_subnet.default_subnet_a.id}",
    "${aws_default_subnet.default_subnet_b.id}"
  ]
  security_groups = ["${aws_security_group.load_balancer_security_group.id}"]
}

# Security group for the load balancer
resource "aws_security_group" "load_balancer_security_group" {
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow traffic in from all sources
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow traffic in from all sources
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# target group for the load balancer
resource "aws_lb_target_group" "target_group" {
  name        = "target-group"
  port        = 80
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = "${aws_default_vpc.default_vpc.id}"
}

# DNS records for the whole app
data "aws_route53_zone" "dns_zone" {
  name         = "horror-house.trevodorax.fr"
  private_zone = false
}

# certificate for the web app
resource "aws_acm_certificate" "cert" {
  domain_name       = "app.horror-house.trevodorax.fr"
  validation_method = "DNS"

  tags = {
    Environment = "test"
  }

  lifecycle {
    create_before_destroy = true
  }
}

# DNS records for the certificate validation
resource "aws_route53_record" "dns_record" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.dns_zone.zone_id
}

# certificate validation
resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.dns_record : record.fqdn]
}

# listeners for the load balancer
resource "aws_lb_listener" "listener_https" {
  load_balancer_arn = "${aws_alb.application_load_balancer.arn}"
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "${aws_acm_certificate_validation.cert_validation.certificate_arn}"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.target_group.arn
  }
}
resource "aws_lb_listener" "listener" {
  load_balancer_arn = "${aws_alb.application_load_balancer.arn}"
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

# service for the web app
resource "aws_ecs_service" "web_app_service" {
  name            = "horror-house-web-app-first-service"
  cluster         = "${aws_ecs_cluster.horror_house_web_app_cluster.id}"
  task_definition = "${aws_ecs_task_definition.app_task.arn}"
  launch_type     = "FARGATE"
  desired_count   = 3

  load_balancer {
    target_group_arn = "${aws_lb_target_group.target_group.arn}" # Reference the target group
    container_name   = "${aws_ecs_task_definition.app_task.family}"
    container_port   = 8080 # port exposed by the container
  }

  network_configuration {
    subnets          = ["${aws_default_subnet.default_subnet_a.id}", "${aws_default_subnet.default_subnet_b.id}"]
    assign_public_ip = true
    security_groups  = ["${aws_security_group.service_security_group.id}"]
  }
}

# Security group for the service
resource "aws_security_group" "service_security_group" {
  ingress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    # Only allowing traffic in from the load balancer security group
    security_groups = ["${aws_security_group.load_balancer_security_group.id}"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# pretty redirect to the load balancer
resource "aws_route53_record" "cname" {
  zone_id = data.aws_route53_zone.dns_zone.zone_id
  name    = "app.horror-house.trevodorax.fr"
  type    = "CNAME"
  ttl     = "3600"
  records = ["${aws_alb.application_load_balancer.dns_name}"]
}

# output the repository URL
output "repository_url" {
  value = aws_ecr_repository.app_ecr_repo.repository_url
}
