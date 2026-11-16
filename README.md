# Metro Studio website

Live at **https://metro-studio.co.uk**. Built with [Eleventy](https://www.11ty.dev/), hosted free on GitHub Pages, and edited through a free CMS at **https://metro-studio.co.uk/admin/**.

## Adding and editing projects (the CMS)

1. Go to **metro-studio.co.uk/admin/** and choose **Sign In Using Access Token**.
2. The first time only, you'll need a GitHub access token:
   - The sign-in box links straight to GitHub's token page. Or go to GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - **Repository access:** *Only select repositories* → `metro-studio-site`.
   - **Permissions:** *Contents* → **Read and write**.
   - Generate it, copy it and paste it into the CMS. Your browser remembers it, so you won't need it again on that device.
3. Click **Projects → New Project**, fill in the fields, upload screenshots, then **Save**.
4. About a minute later the website updates itself. You can follow progress on the repository's **Actions** tab.

Tips:
- **Order** controls the running order (1 first). The first three appear on the home page, and the first six in the Projects menu.
- **Services** ticks decide which service pages a project appears on.
- **Status: Concept** marks work that didn't launch. The "Visit the website" button is hidden for concept projects.
- Uploaded photos are resized and converted to WebP automatically.
- It's all free: Sveltia CMS is open source, content is stored in this GitHub repository, and GitHub Pages hosts the site.

## How it's organised

```
src/
├── index.njk                 Home
├── projects/                 One .md file per project (this is what the CMS edits)
│   └── index.njk             The /projects page
├── apps/                     /apps, /apps/enroute, /apps/mywashingline
├── services/                 /services plus one page per service
├── about/                    /about, /about/skills, /about/contact
├── privacy.njk, 404.njk
├── _data/                    site.json (email, URL), serviceList.json, apps.json
├── _includes/                layouts (base, project, service) and partials (nav, footer, cards)
├── admin/                    The CMS: index.html and config.yml
└── assets/                   CSS, JS, images (project screenshots in assets/img/projects)
brand/                        The M mark as SVG (black, white, current colour) and the original logo
eleventy.config.js            Build settings
.github/workflows/pages.yml   Builds and publishes on every push to main
```

The old `/enroute/` and `/mywashingline/` addresses redirect to their new homes under `/apps/`.

## Working on your Mac

```bash
cd path/to/metro-studio-site && npm install
```

```bash
cd path/to/metro-studio-site && npm start
```

Then open http://localhost:4173. The page reloads as you edit. `npm run build` writes the finished site to `_site.nosync/`. The `.nosync` names, here and on `node_modules.nosync`, stop iCloud from offloading those folders, which otherwise freezes the build.

## Hosting and domain

- **GitHub Pages:** the workflow in `.github/workflows/pages.yml` runs `npm ci && npm run build` and publishes `_site.nosync/`. It's free, and HTTPS is enforced.
- **Domain:** `metro-studio.co.uk` is registered and its DNS is managed at **GoDaddy**. Four `A` records point `@` to GitHub (185.199.108–111.153), and `www` is a `CNAME` to `danehamiltonn.github.io`. Microsoft 365 email records (MX, SPF, Autodiscover, Teams) are separate. Don't change them. A backup of the records from before the switch is kept on the Mac as `dns-backup-2026-11-16.md` (not in this public repo).

## Still to swap in

- **App Store badges:** replace "Tell me when it launches" / "Join the beta" once each app is live.
- **MyWashingLine screenshots:** the phone screens are built in HTML. Swap in real screenshots when you have them.
- **Enroute Lock Screen screenshot:** retake it without the *Allow Live Activities?* prompt.
- **Project images:** the five case studies use screenshots of each live site's home page. Add more through the CMS gallery: logos, print work, before-and-afters.
