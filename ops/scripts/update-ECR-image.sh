# get the repository url from terraform output
cd ops/terraform
REPOSITORY_URL=$(terraform output -raw repository_url)
cd -

# Build and push the web-app image to ECR
cd web-app
aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin $REPOSITORY_URL
docker build --platform linux/amd64 -t horror-house-web-app-repo .
docker tag horror-house-web-app-repo:latest $REPOSITORY_URL:latest
docker push $REPOSITORY_URL:latest

# go back to the root directory
cd -
