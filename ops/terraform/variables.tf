# AWS
variable "iam-user-access-key" {
  type        = string
  description = "Access key of the IAM user"
  sensitive   = true
}

variable "iam-user-secret-access-key" {
  type        = string
  description = "Secret access key of the IAM user"
  sensitive   = true
}

variable "region" {
  type        = string
  description = "Region to which the app will be deployed"
  default     = "eu-west-3"
}
