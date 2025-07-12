terraform {
  required_providers {
    coderd = {
      source = "coder/coderd"
    }
  }
}

variable "token" {
  description = "Coder authentication token"
  type        = string
  sensitive   = true
}

provider "coderd" {
  url   = "http://127.0.0.1:3000"
  token = var.token
}

resource "coderd_template" "dockermultiple" {
  name = "dockermultiple"

  description = "run multiple container"

  versions = [{
    name      = "main"
    directory = "dockermultiple"
    active    = true
  }]
}
