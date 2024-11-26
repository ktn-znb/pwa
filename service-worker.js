var cacheName = "petstore";
var cahceFiles = [
  "week4_example_continued.html",
  "product.js",
  "petstore.webmanifest",
  "image.png",
  "kitty.jpg",
  "kitty2.jpg",
  "kitty3.jpg",
  "kitty4.jpg",
  "kitty5.jpg",
  "kitty6.jpg",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all the files");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      // Download the file if it is not in the cache,
      return (
        r ||
        fetch(e.request).then(function (response) {
          // add the new file to cache
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
