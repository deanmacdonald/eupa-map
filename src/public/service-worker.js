self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // You can add pre-caching logic here if needed
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  // You can add logic to clean up old caches here if needed
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is found in the cache, return it; otherwise, fetch it from the network
      return response || fetch(event.request);
    })
  );
});
