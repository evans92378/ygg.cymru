# YGG Cymru Website

Clean launch workspace for the Ysgol Gymraeg Llundain static site.

## Production Site

The deployable website lives in:

```text
site/
```

Cloudflare Pages or another static host should publish that folder directly. There is no build step.

## Folder Layout

- `site/` - live static website files: HTML, CSS, JavaScript, logo, favicon and image assets.
- `docs/` - launch and deployment notes.
- `_local/` - local-only experiments, CMS prototypes, installers, screenshots, archives and VM files. This folder is ignored by Git.

## Domains

The intended launch domains are:

- `ygg.cymru`
- `ygg.wales`

See `docs/DEPLOYMENT.md` for the GitHub and Cloudflare connection checklist.
