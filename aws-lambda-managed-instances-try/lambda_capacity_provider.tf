resource "aws_lambda_capacity_provider" "main" {
  name = local.identifier

  vpc_config {
    subnet_ids         = module.vpc.public_subnets
    security_group_ids = [aws_security_group.lambda.id]
  }

  permissions_config {
    capacity_provider_operator_role_arn = aws_iam_role.lambda_operator.arn
  }

  instance_requirements {
    architectures = ["arm64"]
    # allowed_instance_types = ["m8g.large"]
  }
}
