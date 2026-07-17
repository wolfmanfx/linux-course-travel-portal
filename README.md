# Temporary course portal

This directory is a static, mobile-friendly companion for the Linux Foundations
course. It can be hosted from the repository's `docs/` directory with GitHub
Pages, Netlify, Cloudflare Pages, or any basic web server.

Rebuild its packaged deck, slide images, downloads, bilingual narration
previews, browser playback videos, captions, and video manifest from the
repository root:

```bash
node tools/build-course-site.mjs
```

Preview locally:

```bash
python3 -m http.server 4173 --directory docs
```

Then open `http://127.0.0.1:4173`.

When bilingual solution MP4 files exist under
`browser-lab-platform/videos/output/final/`, rebuilding copies the dual-track
master plus the English and German browser-safe variants into the portal. The
modal's EN/DE selector switches between the single-language variants and keeps
external WebVTT captions synchronized. Generated media is cached on first use
by the service worker, while the portal shell remains available offline.
