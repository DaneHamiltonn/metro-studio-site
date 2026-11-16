# Metro Studio website

The site is plain HTML and CSS, with no build step and nothing to install. Everything that goes online is in **`site/`**.

```
site/
├── index.html              Home: studio, apps, services, story, contact
├── enroute/index.html      Enroute product page
├── mywashingline/          MyWashingLine product page
├── privacy/                Privacy page for the website and both apps (App Store needs this URL)
├── 404.html
├── favicon.svg             The M mark; switches to white in dark mode
├── robots.txt, sitemap.xml
└── assets/
    ├── css/site.css        All styles. Colours are tokens at the top
    ├── js/site.js          Nav and scroll animations (the site works without it)
    └── img/                Mark, app icons, Enroute screenshots
brand/
├── metro-mark-black.svg    The M mark, redrawn as vector from your logo
├── metro-mark-white.svg
├── metro-mark-current.svg  Takes the colour of the surrounding text (for web use)
└── metro-studio-logo-original.png
```

## Preview it on your Mac

```bash
cd "/Users/danehamilton/Documents/Metro Studio/Metro Brand" && python3 -m http.server 4173 --directory site
```

Then open http://localhost:4173.

## Hosting: GitHub Pages

The site is published by GitHub Pages from this repository. Every push to `main` runs `.github/workflows/pages.yml`, which publishes **only the `site/` folder**. It's free, and GitHub provides the HTTPS certificate.

**Updating the site:** edit the files, then commit and push to `main`. The live site updates a minute or two later; progress shows on the repository's **Actions** tab.

### Connecting metro-studio.co.uk

Your Microsoft 365 records (MX, Autodiscover, SPF, DKIM, DMARC, SRV) are **not touched**. You only add these, wherever your DNS is managed (Microsoft 365 admin centre → Settings → Domains → DNS records, or your registrar):

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | danehamiltonn.github.io |

1. Screenshot or export your current DNS records first, as a backup.
2. If there's already an `@` A record or a `www` record (for example from an old website), remove only those.
3. In the repository, go to **Settings → Pages → Custom domain**, enter `metro-studio.co.uk` and save.
4. When the certificate is ready (usually within an hour), tick **Enforce HTTPS**.

Links inside the site are relative, so it works both at the github.io address and at your own domain.

## Things to swap in when you have them

- **App Store links:** when each app is live, replace the "Tell me when it launches" / "Join the beta" buttons with Apple's official *Download on the App Store* badge (from developer.apple.com/app-store/marketing/guidelines).
- **MyWashingLine screenshots:** the phone screens on that page are built in HTML from the app's real features and scoring bands. Once you have real simulator screenshots (460×1000 like Enroute's), they can replace them.
- **Enroute Lock Screen screenshot:** `live-activity.png` shows the *Allow Live Activities?* prompt. Retake it after tapping **Allow** for a cleaner image.
- **Privacy page:** this is a plain-English summary based on how the apps work today. Review it before you submit to the App Store, and update it if the apps start collecting anything new.
- **Social preview image:** a 1200×630 image at `assets/img/og.png`, added as `og:image` on the home page, would make shared links look better.
