# Stackmint

Vue 3 + Vite marketing site for Stackmint apps (Multichoice and Sprout), deployed to GitHub Pages.

## Live Site

- **Production**: [stackmint.app](https://stackmint.app)
- **GitHub Pages**: [zandercowboy.github.io/stackmint](https://zandercowboy.github.io/stackmint)

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## DNS Configuration

The site is configured for the custom domain `stackmint.app`. To complete DNS setup in GoDaddy:

### Apex Domain (stackmint.app)

Add these `A` records:

```
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

### Subdomains (Optional)

For subdomain routing (privacy/sprout/multichoice.stackmint.app), add `CNAME` records pointing to the apex:

```
privacy      CNAME  stackmint.app
sprout       CNAME  stackmint.app
multichoice  CNAME  stackmint.app
```

> **Note**: All paths are handled by the SPA router. Subdomains will resolve to the same site and use client-side routing.

### Verification

After DNS propagation (can take up to 48 hours):

1. Go to **Settings → Pages** in the GitHub repository
2. Under "Custom domain", verify `stackmint.app` is saved
3. Enable "Enforce HTTPS" once the certificate is issued

## Routes

- `/` — Stackmint studio hub (Multichoice + Sprout)
- `/multichoice` — Multichoice app page with Google Play link
- `/sprout` — Sprout app page (coming soon, Instagram follow CTA)
- `/privacy` — Privacy policy

## Related

Closes #1
