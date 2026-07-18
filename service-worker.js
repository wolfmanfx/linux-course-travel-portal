const CACHE = "linux-foundations-travel-v10";
const SHELL = ["./", "index.html", "styles.css", "app.js", "content.js", "manifest.webmanifest", "assets/icon.svg", "assets/slides/slide-1.png", "media/slide-narration-manifest.json"];

self.addEventListener("install", event => event.waitUntil(
  caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
));

self.addEventListener("activate", event => event.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim())
));

function requiresFreshCopy(request) {
  const filename = new URL(request.url).pathname.split("/").pop();
  return request.mode === "navigate" || ["index.html", "app.js", "content.js"].includes(filename);
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  if (requiresFreshCopy(event.request)) {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || caches.match("index.html"))));
    return;
  }

  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok && response.status === 200) {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
    }
    return response;
  })));
});
