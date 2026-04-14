variable "project_name" {
  description = "Cloudflare Pages project name"
  type        = string
}

variable "production_branch" {
  description = "Git branch that triggers production deployments"
  type        = string
  default     = "main"
}

variable "account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "zone_id" {
  description = "Cloudflare zone ID for DNS records"
  type        = string
  default     = ""
}

variable "custom_domain" {
  description = "Custom domain to attach to the Pages project (e.g., aisaiah.org or dev.aisaiah.org)"
  type        = string
  default     = ""
}

variable "environment" {
  description = "Environment name (dev or prod)"
  type        = string
  validation {
    condition     = contains(["dev", "prod"], var.environment)
    error_message = "Environment must be 'dev' or 'prod'."
  }
}
