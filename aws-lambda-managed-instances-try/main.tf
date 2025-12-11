terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-1"

  default_tags {
    tags = {
      terraform = "lambdaonec2-test"
    }
  }
}

data "aws_caller_identity" "main" {}
data "aws_region" "main" {}

locals {
  identifier = "lambdaonec2-test"
}
