# Code with Vijay — static site
This is a minimal, production-ready static site you can deploy for free with **GitHub Pages**, **Netlify**, **Vercel**, or **Cloudflare Pages**.

## Quick start (GitHub Pages)
1. Create a repo named `codewithvijay.online` (or any name).
2. Upload the files in this folder.
3. Go to **Settings → Pages**, choose **Deploy from branch**, branch `main`, folder `/root`.
4. Add the custom domain: `codewithvijay.online` (kept also in the `CNAME` file).
5. In your domain DNS, point:
   - `www` CNAME → `<your-username>.github.io`
   - Apex A → GitHub Pages IPs (or use your host's recommended values).
6. Wait a few minutes. HTTPS will auto-issue.

You can also drag-drop this folder into Netlify/Vercel dashboards.
