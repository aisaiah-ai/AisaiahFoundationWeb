terraform {
  required_version = ">= 1.5.0"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }

  # Local backend for now. Migrate to Terraform Cloud or S3 for team use.
  backend "local" {
    path = "terraform.tfstate"
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# --------------------------------------------------------------------------
# Dev Environment
# --------------------------------------------------------------------------
module "dev" {
  source = "./modules/cloudflare-pages"

  account_id        = var.cloudflare_account_id
  project_name      = "aisaiah-foundation-dev"
  production_branch = "dev"
  environment       = "dev"
  zone_id           = var.cloudflare_zone_id
  custom_domain     = "dev.${var.domain}"
}

# --------------------------------------------------------------------------
# Production Environment
# --------------------------------------------------------------------------
module "prod" {
  source = "./modules/cloudflare-pages"

  account_id        = var.cloudflare_account_id
  project_name      = "aisaiah-foundation-web"
  production_branch = "main"
  environment       = "prod"
  zone_id           = var.cloudflare_zone_id
  custom_domain     = var.domain
}
