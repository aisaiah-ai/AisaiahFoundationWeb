# -----------------------------------------------------------------------------
# Dev Environment
# -----------------------------------------------------------------------------

output "dev_pages_url" {
  description = "Dev environment Cloudflare Pages URL"
  value       = module.dev.pages_url
}

output "dev_custom_domain" {
  description = "Dev environment custom domain"
  value       = module.dev.custom_domain_url
}

output "dev_project_name" {
  description = "Dev Cloudflare Pages project name"
  value       = module.dev.project_name
}

# -----------------------------------------------------------------------------
# Production Environment
# -----------------------------------------------------------------------------

output "prod_pages_url" {
  description = "Production Cloudflare Pages URL"
  value       = module.prod.pages_url
}

output "prod_custom_domain" {
  description = "Production custom domain"
  value       = module.prod.custom_domain_url
}

output "prod_project_name" {
  description = "Prod Cloudflare Pages project name"
  value       = module.prod.project_name
}

# -----------------------------------------------------------------------------
# Firebase Environment Templates
# -----------------------------------------------------------------------------

output "dev_env_template" {
  description = "Environment variable template for dev builds"
  value       = <<-EOT
    NEXT_PUBLIC_FIREBASE_API_KEY=${var.firebase_api_key_dev}
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${var.firebase_auth_domain_dev}
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=${var.firebase_project_id_dev}
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${var.firebase_storage_bucket_dev}
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${var.firebase_messaging_sender_id_dev}
    NEXT_PUBLIC_FIREBASE_APP_ID=${var.firebase_app_id_dev}
  EOT
  sensitive   = true
}

output "prod_env_template" {
  description = "Environment variable template for production builds"
  value       = <<-EOT
    NEXT_PUBLIC_FIREBASE_API_KEY=${var.firebase_api_key_prod}
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${var.firebase_auth_domain_prod}
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=${var.firebase_project_id_prod}
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${var.firebase_storage_bucket_prod}
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${var.firebase_messaging_sender_id_prod}
    NEXT_PUBLIC_FIREBASE_APP_ID=${var.firebase_app_id_prod}
  EOT
  sensitive   = true
}
