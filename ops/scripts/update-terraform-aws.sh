cd ops/terraform

# make .env variables available
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo ".env file not found"
fi

# create resources in AWS
tofu plan -out main.tfplan
tofu apply main.tfplan

cd -
