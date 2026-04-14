# Dev Environment Configuration
# Usage: terraform plan -var-file=environments/dev.tfvars

# Cloudflare — set via environment variables or terraform.tfvars
# cloudflare_api_token  = "" # Set via TF_VAR_cloudflare_api_token
# cloudflare_account_id = ""
# cloudflare_zone_id    = ""

domain = "aisaiah.org"

# Firebase Dev — replace with your dev Firebase project values
firebase_api_key_dev              = ""
firebase_auth_domain_dev          = ""
firebase_project_id_dev           = ""
firebase_storage_bucket_dev       = ""
firebase_messaging_sender_id_dev  = ""
firebase_app_id_dev               = ""
