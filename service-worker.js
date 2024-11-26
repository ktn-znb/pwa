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
