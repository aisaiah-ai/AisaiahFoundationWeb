---
name: Firebase project mapping
description: Which Firebase projects map to which environments for AIsaiah Foundation
type: reference
---

- **Development:** AIsaiah App - Development (`aisaiah-app-dev`)
- **Production:** AIsaiah App - Production (`aisaiah-app`)
- **NOT used for web:** AIsaiah SFA Dev (that's the old/separate project)

The CI/CD workflows inject the right credentials per environment:
- `deploy-dev.yml` → `NEXT_PUBLIC_FIREBASE_*_DEV` secrets
- `deploy-prod.yml` → `NEXT_PUBLIC_FIREBASE_*_PROD` secrets
