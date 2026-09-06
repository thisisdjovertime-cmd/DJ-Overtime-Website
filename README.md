# THISISOVERTIME — official site

Marketing site for DJ **THISISOVERTIME** (DJ Overtime) — Resident DJ at Stadium Club
(Caribe Royale Orlando). Built with [Astro](https://astro.build), deployed on Netlify.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # preview the production build
```

Node 20+ recommended (Netlify is pinned to 20 in `netlify.toml`).

## Structure

| Path | What |
| --- | --- |
| `src/data/site.ts` | **Single source of truth** — contact details, social links, music/video links, partners, service copy. Edit here first. |
| `src/layouts/Base.astro` | `<head>`, SEO meta, Open Graph, JSON-LD structured data. |
| `src/components/Nav.astro` / `Footer.astro` | Shared chrome. |
| `src/pages/index.astro` | The one-page homepage (hero, marquee, about, services, media, featured, CTA). |
| `src/pages/booking.astro` | Booking form page. |
| `src/pages/booking/success.astro` | Post-submit confirmation page. |
| `src/pages/sitemap.xml.ts` | Generated sitemap. |
| `public/assets/` | Images and logo files served as-is. |

## Booking form (Netlify Forms)

The form on `/booking` uses **Netlify Forms** — no backend. On deploy Netlify detects
the `name="booking"` form automatically.

**After first deploy, in the Netlify dashboard:**

1. **Forms → booking → Settings & notifications → Add notification → Email notification**
   → send to `bookings@thisisovertime.com`.
2. (Optional) add reCAPTCHA / spam filtering.
3. (Optional) auto-reply to the submitter via a Netlify email integration or function.

Submissions are also stored in the Netlify dashboard as a backup.

## Deploy (Netlify)

- Build command: `npm run build`  •  Publish directory: `dist`  (already in `netlify.toml`)
- Connect the GitHub repo in Netlify → it deploys on every push to the default branch.

### Custom domain (GoDaddy → Netlify)

1. Netlify → Domain management → **Add domain** → `thisisovertime.com`.
2. Easiest: change the domain's **nameservers** at GoDaddy to Netlify's, and let Netlify
   manage DNS (auto HTTPS, `www` + apex handled).
   Alternative (keep GoDaddy DNS): add an `A` record for `@` → Netlify load balancer
   `75.2.60.5`, and a `CNAME` for `www` → `<your-site>.netlify.app`.
3. Netlify → **HTTPS → Verify / provision certificate**.
4. Confirm `site` in `astro.config.mjs` matches the final URL (currently
   `https://www.thisisovertime.com`) — it drives canonical URLs, OG tags and the sitemap.

## Security notes

This repo is **public** but proprietary (see `LICENSE`). It contains no secrets — the
booking form runs through Netlify Forms, there is no backend or `.env`.

- Image EXIF/GPS metadata is stripped before commit.
- Security headers (CSP, HSTS, etc.) are set in `netlify.toml`.
- The CSP `script-src` includes a sha256 hash for the one inline script Astro bundles
  from `src/scripts/nav.js`. **If you edit that script**, regenerate the hash:
  ```bash
  npm run build
  node -e "const fs=require('fs'),c=require('crypto');const m=fs.readFileSync('dist/index.html','utf8').match(/<script type=\"module\">([\s\S]*?)<\/script>/);console.log('sha256-'+c.createHash('sha256').update(m[1]).digest('base64'))"
  ```
  Paste the result into the `Content-Security-Policy` line in `netlify.toml`.

Recommended GitHub repo settings (Settings → …):
- **Code security**: enable Secret scanning + Push protection, Dependabot alerts.
- **General**: turn off Wiki / Projects if unused; consider disabling Issues.
- **Branches**: protect `main` (require PR review before merge) once more than one person commits.

## Post-launch SEO checklist

- [ ] Point `astro.config.mjs` `site` at the real domain (affects canonical + sitemap).
- [ ] Google Search Console: add property, submit `https://www.thisisovertime.com/sitemap.xml`.
- [ ] Google Business Profile for the DJ (name, area served, booking link).
- [ ] Replace `/public/og/default.jpg` with a purpose-made 1200×630 share image.
- [ ] Add `apple-touch-icon.png` (180×180) to `/public`.
- [ ] Confirm all outbound links (Instagram, YouTube, DistroKid) are correct.

## Assets still needed / TODO

- Real **YouTube channel URL** (footer link is a guess: `youtube.com/@thisisovertime`).
- Correct **Mosconi Cup** video link (currently duplicates FL Pool Open's ID).
- Vector logo (SVG) for crisp rendering at all sizes.
- Individual transparent partner logos (Peacock, FOX 35, etc.) for the "Featured" section.
- Client testimonials / quotes, if available.
- A proper press headshot crop (press-1/press-2 are in `public/assets`, not yet placed on a page).
