# Deployment Checklist

## GitHub

1. Create a new GitHub repository for the website.
2. Upload or push this workspace after the tidy-up.
3. Make sure the repository includes `site/`, `docs/`, `README.md`, `.gitignore` and `.vercelignore`.
4. Do not upload `_local/`, `.npm-cache/`, `.agents/`, VM files, old CMS workspaces, or installer scripts.

## Cloudflare Pages

Current Pages project:

- Project name: `ygg-cymru`
- Project URL: `https://ygg-cymru.pages.dev`
- Current deployment: `https://77d91cf2.ygg-cymru.pages.dev`
- Deployment method used: Wrangler direct upload from `site/`

The GitHub repository is still the source of truth for the cleaned site files. Future deployments can either be direct uploads with Wrangler or connected to Git through the Cloudflare dashboard.

For a Git-connected setup, use Cloudflare Pages with the GitHub repository.

- Framework preset: `None` or static site
- Build command: leave empty; if Cloudflare requires a command, use `exit 0`
- Build output directory: `site`

Once deployed, add the custom domains in the Pages project:

- `ygg.cymru`
- `www.ygg.cymru`
- `ygg.wales`
- `www.ygg.wales`

Add the domains through the Pages project's Custom domains screen first. Cloudflare should then create or suggest the needed DNS records. Keep the apex domains (`ygg.cymru`, `ygg.wales`) pointed at the Pages project, then choose which one should be canonical later.

## Current Domain Status

`ygg.cymru` and `www.ygg.cymru` have been added to the `ygg-cymru` Pages project, but Cloudflare reports them as pending until DNS records are set.

Required DNS records in the `ygg.cymru` zone:

```text
Type: CNAME
Name: @
Target: ygg-cymru.pages.dev
Proxy: on

Type: CNAME
Name: www
Target: ygg-cymru.pages.dev
Proxy: on
```

The current Wrangler OAuth login can deploy Pages and add custom domains, but it does not include DNS edit permission. To finish DNS from PowerShell, use a Cloudflare API token with DNS edit permission for the `ygg.cymru` zone.

`ygg.wales` did not appear as an active zone in the logged-in Cloudflare account during setup. Add or activate the `ygg.wales` zone in Cloudflare before wiring it to Pages.

## Pre-Launch Checks

- Confirm image usage permissions for all school photos in `site/assets/`.
- Replace placeholder policy, privacy, safeguarding and accessibility links.
- Connect the contact form to a real form handler, or make the page email-only before launch.
- Decide whether `ygg.cymru` or `ygg.wales` is the main public address.
