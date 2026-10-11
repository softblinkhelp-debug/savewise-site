# SaveWise — Social Media Save Guide

A static, mobile-responsive starter website for Instagram, TikTok, Facebook, and YouTube links. The link checker runs in the browser and directs users to official platform help/options. It does **not** download or scrape media, bypass restrictions, or send entered URLs to an application server.

## Files
- `index.html` — homepage and SEO metadata
- `styles.css` — responsive modern green design
- `app.js` — local URL validation and platform recognition
- `privacy.html`, `terms.html`, `contact.html` — policy templates (customize before launch)
- `robots.txt`, `sitemap.xml` — basic crawler files
- `favicon.svg` — simple original icon
- `_headers` — basic security headers supported by Cloudflare Pages

## Publish using GitHub + Cloudflare Pages
1. Create a GitHub account or sign in.
2. Create a new repository at https://github.com/new, e.g. `savewise-site`.
3. Upload the **contents** of this folder to the repository root. Ensure `index.html` is at the root, not inside another nested folder.
4. Open https://dash.cloudflare.com/ and sign in or create an account.
5. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** (wording may vary).
6. Authorize GitHub and select the `savewise-site` repository.
7. Set production branch to `main`, build command to `exit 0` (or leave blank if accepted), and build output directory to `/` or the repository root as the dashboard requests for static HTML.
8. Deploy. Cloudflare will provide a `*.pages.dev` URL. New pushes to the connected branch deploy automatically.
9. Replace every `YOUR-PROJECT.pages.dev` in `index.html`, `robots.txt`, and `sitemap.xml` with your real Pages hostname. Commit the changes to trigger another deployment.
10. Edit `privacy.html`, `terms.html`, and `contact.html`: add the actual site operator and a support email. Do not claim practices you have not implemented.
11. Open the site on a phone and desktop. Test each platform URL, invalid URLs, keyboard navigation, and external links.

Official deployment guide: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## SEO launch checklist
- Use a unique, stable project name.
- Replace canonical URL and sitemap placeholders after deployment.
- Submit the sitemap URL in Google Search Console.
- Write original platform-specific guides that accurately describe the current official options.
- Add no fake reviews, keyword stuffing, or copied platform branding.
- Search indexing and traffic are not guaranteed.

## Scope and legal notes
This is a **front-end starter**, not a working media extraction service. Direct downloading for each platform requires a permitted source/API and must comply with its current terms, copyright law, and user permissions. YouTube's terms restrict downloading except where authorized by the service or rights holders. For YouTube uploads you own, see https://support.google.com/youtube/answer/56100.

No analytics, advertising, login, or third-party JS are included. If you later add any of these, review privacy disclosures, consent requirements, security, and applicable laws first.
