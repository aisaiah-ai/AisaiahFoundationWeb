output "project_name" {
  description = "Cloudflare Pages project name"
  value       = cloudflare_pages_project.site.name
}

output "pages_url" {
  description = "Default Cloudflare Pages URL"
  value       = "https://${cloudflare_pages_project.site.name}.pages.dev"
}

output "custom_domain_url" {
  description = "Custom domain URL (if configured)"
  value       = var.custom_domain != "" ? "https://${var.custom_domain}" : ""
}

output "subdomain" {
  description = "Pages subdomain"
  value       = "${cloudflare_pages_project.site.name}.pages.dev"
}
