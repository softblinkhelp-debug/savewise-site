# SaveWise YouTube helper

## Included
- Browser-side YouTube URL validation.
- YouTube embedded preview.
- Official links for downloading videos uploaded by the account owner and supported offline viewing.
- Privacy and terms pages.

## Deploy to your existing Cloudflare Pages project
1. Download and unzip this package.
2. Open the GitHub repository `softblinkhelp-debug/savewise-site`.
3. Replace/add these files in the repository root.
4. Replace `REPLACE_WITH_YOUR_SUPPORT_EMAIL` in privacy.html, terms.html, and contact.html with your support email.
5. Find the stable production hostname in Cloudflare Pages (not a one-off preview URL). Replace `YOUR-PRODUCTION-DOMAIN` in robots.txt and sitemap.xml with it, e.g. `savewise-site.pages.dev`.
6. Commit the files to `main`; Cloudflare Pages should deploy automatically. Keep build command blank and output directory `.` for the current static setup.
7. Test a standard YouTube URL, a youtu.be short link, a Shorts URL, and a non-YouTube URL.

## Important
This project intentionally does not scrape YouTube streams or download arbitrary videos. YouTube developer policies prohibit API clients from downloading or storing copies of audiovisual content without prior written approval. YouTube's official Help Center explains how to download videos you uploaded through YouTube Studio:
- https://developers.google.com/youtube/terms/developer-policies
- https://support.google.com/youtube/answer/56100

This is a static site and needs no API key or backend. Review Cloudflare's current plan limits before adding server-side features.
