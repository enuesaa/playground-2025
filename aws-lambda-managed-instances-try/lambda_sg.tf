resource "aws_security_group" "lambda" {
  name        = "${local.identifier}-sg"

  vpc_id      = module.vpc.vpc_id
  description = "sg for Lambda Managed Instances"

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
