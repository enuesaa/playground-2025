resource "aws_appconfig_application" "main" {
  name = var.identifier
}

resource "aws_appconfig_environment" "main" {
  application_id = aws_appconfig_application.main.id
  name = "dev"
}

resource "aws_appconfig_configuration_profile" "main" {
  application_id = aws_appconfig_application.main.id
  name = "main"
  location_uri = "hosted"
}

resource "aws_appconfig_hosted_configuration_version" "default" {
  application_id           = aws_appconfig_application.main.id
  configuration_profile_id = aws_appconfig_configuration_profile.main.configuration_profile_id
  content_type             = "application/json"

  content = jsonencode({
    foo = "bar"
  })
}

resource "aws_appconfig_deployment" "default" {
  application_id           = aws_appconfig_application.main.id
  environment_id           = aws_appconfig_environment.main.environment_id
  configuration_profile_id = aws_appconfig_configuration_profile.main.configuration_profile_id
  configuration_version    = "1"
  deployment_strategy_id   = "AppConfig.AllAtOnce"
}
