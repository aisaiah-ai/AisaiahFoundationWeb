# Cloudflare Pages Project
resource "cloudflare_pages_project" "site" {
  account_id        = var.account_id
  name              = var.project_name
  production_branch = var.production_branch

  build_config {
    build_command   = ""
    destination_dir = ""
  }

  deployment_configs {
    production {
      compatibility_date = "2024-11-27"
    }

    preview {
      compatibility_date = "2024-11-27"
    }
  }
}

# Custom domain attachment (only if custom_domain is provided)
resource "cloudflare_pages_domain" "custom" {
  count      = var.custom_domain != "" ? 1 : 0
  account_id = var.account_id
  project_name = cloudflare_pages_project.site.name
  domain       = var.custom_domain
}

# CNAME DNS record for custom domain (only if zone_id and custom_domain are provided)
resource "cloudflare_record" "pages_cname" {
  count   = var.zone_id != "" && var.custom_domain != "" ? 1 : 0
  zone_id = var.zone_id
  name    = var.custom_domain
  content = "${cloudflare_pages_project.site.name}.pages.dev"
  type    = "CNAME"
  proxied = true
  ttl     = 1
}
