# Stiwdio Editor Subdomain

`stiwdio.ygg.cymru` should host the private editing experience for the YGG Cymru website platform.

## Important Distinction

The public `ygg.cymru` site is currently a static Cloudflare Pages site.

The Stiwdio editor is different: it is a WordPress plugin in `_local/wordpress/stiwdio-editor/` and expects:

- a running WordPress site,
- the YGG school theme,
- the Stiwdio Editor plugin,
- logged-in editor or publisher users.

Cloudflare Pages cannot run this editor directly because Pages is for static output and frontend apps, not PHP/WordPress.

## Recommended Setup

Use:

- `ygg.cymru` for the public static site,
- `stiwdio.ygg.cymru` for the private WordPress/Stiwdio editor.

Protect `stiwdio.ygg.cymru` with Cloudflare Access before the WordPress login screen.

## Practical Routes

### Route A: Production Editor

Use a managed WordPress host or VPS.

1. Install WordPress.
2. Install the YGG school theme from `_local/wordpress/ygg-school-theme/`.
3. Install the Stiwdio plugin from `_local/wordpress/stiwdio-editor/`.
4. Set the WordPress site URL to `https://stiwdio.ygg.cymru`.
5. Point `stiwdio.ygg.cymru` DNS to the WordPress host.
6. Add a Cloudflare Access application for `stiwdio.ygg.cymru`.
7. Restrict access to approved school/admin email addresses.

### Route B: Temporary Private Preview

Use Cloudflare Tunnel to expose a local WordPress instance.

1. Run the local WordPress/Stiwdio stack.
2. Install and authenticate `cloudflared` on the machine running WordPress.
3. Create a tunnel in Cloudflare Zero Trust.
4. Add a public hostname:
   - hostname: `stiwdio.ygg.cymru`
   - service: `http://localhost:8080`
5. Add Cloudflare Access protection for `stiwdio.ygg.cymru`.

This is useful for demos and testing, but it depends on the local machine staying online.

## Editor Path

Once WordPress and Stiwdio are running, the editor route is:

```text
https://stiwdio.ygg.cymru/school-admin
```

The subdomain root can redirect there later.
