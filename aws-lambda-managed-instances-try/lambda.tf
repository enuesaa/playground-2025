data "archive_file" "lambda" {
  type        = "zip"
  source_file = "./lambda/main.py"
  output_path = "./lambda.zip"
}

resource "aws_lambda_function" "main" {
  function_name    = "${local.identifier}-app"

  filename         = data.archive_file.lambda.output_path
  source_code_hash = data.archive_file.lambda.output_base64sha256
  handler          = "main.handler"
  role             = aws_iam_role.lambda.arn

  runtime     = "python3.13"
  memory_size = 2048
  timeout     = 30
  architectures = ["arm64"]

  publish    = true
  publish_to = "LATEST_PUBLISHED"

  capacity_provider_config {
    lambda_managed_instances_capacity_provider_config {
      capacity_provider_arn = aws_lambda_capacity_provider.main.arn
    }
  }
}
