const CACHE = "linux-foundations-travel-v16";
const SHELL = ["./", "index.html", "styles.css", "app.js", "content.js", "manifest.webmanifest", "assets/icon.svg", "assets/slides/slide-1.png"];

self.addEventListener("install", event => event.waitUntil(
  caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
));

self.addEventListener("activate", event => event.waitUntil(
  caches.keys()
    .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
    .then(() => self.clients.claim())
));

function requiresFreshCopy(request) {
  const pathname = new URL(request.url).pathname;
  const filename = pathname.split("/").pop();
  return request.mode === "navigate"
    || ["index.html", "styles.css", "app.js", "content.js"].includes(filename)
    || /\/assets\/slides\/slide-\d+\.png$/.test(pathname)
    || /\/downloads\/linux-foundations-interleaved-workshop\.(pptx|pdf)$/.test(pathname);
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
