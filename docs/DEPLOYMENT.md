# Deployment Checklist

## GitHub

1. Create a new GitHub repository for the website.
2. Upload or push this workspace after the tidy-up.
3. Make sure the repository includes `site/`, `docs/`, `README.md`, `.gitignore` and `.vercelignore`.
4. Do not upload `_local/`, `.npm-cache/`, `.agents/`, VM files, old CMS workspaces, or installer scripts.

## Cloudflare Pages

Use Cloudflare Pages with the GitHub repository.

- Framework preset: `None` or static site
- Build command: leave empty; if Cloudflare requires a command, use `exit 0`
- Build output directory: `site`

Once deployed, add the custom domains in the Pages project:

- `ygg.cymru`
- `www.ygg.cymru`
- `ygg.wales`
- `www.ygg.wales`

Add the domains through the Pages project's Custom domains screen first. Cloudflare should then create or suggest the needed DNS records. Keep the apex domains (`ygg.cymru`, `ygg.wales`) pointed at the Pages project, then choose which one should be canonical later.

## Pre-Launch Checks

- Confirm image usage permissions for all school photos in `site/assets/`.
- Replace placeholder policy, privacy, safeguarding and accessibility links.
- Connect the contact form to a real form handler, or make the page email-only before launch.
- Decide whether `ygg.cymru` or `ygg.wales` is the main public address.
