# Code with Vijay — Static Site
Multi-page static website for GitHub Pages / Cloudflare Pages / Netlify / Vercel.

## Pages
- `/index.html` — Home
- `/about.html` — About
- `/contact.html` — Contact (uses Formspree by default; replace `action` with your endpoint or use `mailto:`)

## Deploy (GitHub Pages)
1. Push files to `main` branch of your repo.
2. Settings → Pages → Build from branch (`main`, root).
3. Custom domain: `codewithvijay.online`.
4. Add DNS at Cloudflare as documented earlier.

## Optional
- Add redirect of `www` → root using Cloudflare Rules.
- Replace social links in footer.
