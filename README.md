# Temporary course portal

This directory is a static, mobile-friendly companion for the Linux Foundations
course. It can be hosted from the repository's `docs/` directory with GitHub
Pages, Netlify, Cloudflare Pages, or any basic web server.

Generate the 38 English slide tracks with the self-hosted GPU environment, then
rebuild the packaged deck, slide images, downloads, English narration, browser
playback videos, captions, and timing manifest:

```bash
cd browser-lab-platform/videos
npm run narrate:slides
cd ../../..
node tools/build-course-site.mjs
```

Preview locally:

```bash
python3 -m http.server 4173 --directory docs
```

Then open `http://127.0.0.1:4173`.

When verified English solution MP4 files exist under
`browser-lab-platform/videos/output/final/`, rebuilding copies the English
browser file as both the playback asset and canonical downloadable master. It
also packages one MP3 per slide, the continuous full-deck MP3, the timing
manifest, and the ASR audit. Generated media is cached on first use by the
service worker, while the portal shell remains available offline.
