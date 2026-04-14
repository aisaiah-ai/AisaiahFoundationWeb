# -----------------------------------------------------------------------------
# Cloudflare
# -----------------------------------------------------------------------------

variable "cloudflare_api_token" {
  description = "Cloudflare API token with Pages and DNS permissions"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "Cloudflare zone ID for the domain (required for DNS records)"
  type        = string
}

variable "domain" {
  description = "Root domain for the site"
  type        = string
  default     = "aisaiah.org"
}

# -----------------------------------------------------------------------------
# Firebase — Dev Environment
# -----------------------------------------------------------------------------

variable "firebase_api_key_dev" {
  description = "Firebase API key for dev environment"
  type        = string
  default     = ""
}

variable "firebase_auth_domain_dev" {
  description = "Firebase auth domain for dev environment"
  type        = string
  default     = ""
}

variable "firebase_project_id_dev" {
  description = "Firebase project ID for dev environment"
  type        = string
  default     = ""
}

variable "firebase_storage_bucket_dev" {
  description = "Firebase storage bucket for dev environment"
  type        = string
  default     = ""
}

variable "firebase_messaging_sender_id_dev" {
  description = "Firebase messaging sender ID for dev environment"
  type        = string
  default     = ""
}

variable "firebase_app_id_dev" {
  description = "Firebase app ID for dev environment"
  type        = string
  default     = ""
}

# -----------------------------------------------------------------------------
# Firebase — Production Environment
# -----------------------------------------------------------------------------

variable "firebase_api_key_prod" {
  description = "Firebase API key for prod environment"
  type        = string
  default     = ""
}

variable "firebase_auth_domain_prod" {
  description = "Firebase auth domain for prod environment"
  type        = string
  default     = ""
}

variable "firebase_project_id_prod" {
  description = "Firebase project ID for prod environment"
  type        = string
  default     = ""
}

variable "firebase_storage_bucket_prod" {
  description = "Firebase storage bucket for prod environment"
  type        = string
  default     = ""
}

variable "firebase_messaging_sender_id_prod" {
  description = "Firebase messaging sender ID for prod environment"
  type        = string
  default     = ""
}

variable "firebase_app_id_prod" {
  description = "Firebase app ID for prod environment"
  type        = string
  default     = ""
}
