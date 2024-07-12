cd ops/terraform

# create resources in AWS
tofu plan -out main.tfplan
tofu apply main.tfplan

cd -
