# Production Environment Configuration
# Usage: terraform plan -var-file=environments/prod.tfvars

# Cloudflare — set via environment variables or terraform.tfvars
# cloudflare_api_token  = "" # Set via TF_VAR_cloudflare_api_token
# cloudflare_account_id = ""
# cloudflare_zone_id    = ""

domain = "aisaiah.org"

# Firebase Prod — replace with your production Firebase project values
firebase_api_key_prod             = ""
firebase_auth_domain_prod         = ""
firebase_project_id_prod          = ""
firebase_storage_bucket_prod      = ""
firebase_messaging_sender_id_prod = ""
firebase_app_id_prod              = ""
