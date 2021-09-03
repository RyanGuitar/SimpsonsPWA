const staticBackground = "background-v1.1";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/main.js",
  "/favicon.jpg",
  "/images/background.jpeg",
  "/images/bart.webp",
  "/images/dog.webp",
  "/images/homer.webp",
  "/images/lisa.webp",
];



self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBackground).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});