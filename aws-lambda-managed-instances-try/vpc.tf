module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = local.identifier

  cidr = "10.2.0.0/16"
  azs             = ["ap-northeast-1a", "ap-northeast-1c"]
  private_subnets = []
  public_subnets  = ["10.2.1.0/24", "10.2.2.0/24"]
}
