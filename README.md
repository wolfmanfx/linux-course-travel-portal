# Temporary course portal

This directory is a static, mobile-friendly companion for the Linux Foundations
course. It can be hosted from the repository's `docs/` directory with GitHub
Pages, Netlify, Cloudflare Pages, or any basic web server.

Rebuild its packaged deck, slide images, downloads, narration previews, and
video manifest from the repository root:

```bash
node tools/build-course-site.mjs
```

Preview locally:

```bash
python3 -m http.server 4173 --directory docs
```

Then open `http://127.0.0.1:4173`.

When real solution MP4 files exist under
`browser-lab-platform/videos/output/final/`, rebuilding copies them into the
portal and changes their cards from **Narration ready** to **Video ready**.
