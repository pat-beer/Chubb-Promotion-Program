// Service Worker for Chubb Life Calculator PWA
// Version: 2.0.0
// Last Updated: 2025-10-02 14:30:00

// IMPORTANT: เปลี่ยน CACHE_VERSION ทุกครั้งที่ update ไฟล์
const CACHE_VERSION = 'chubb-calc-v2.0.0-20251002-1430';
const CACHE_NAME = CACHE_VERSION;

// ไฟล์ที่จะ cache
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install Event - Cache files
self.addEventListener('install', function(event) {
  console.log('[SW] Installing Service Worker...', CACHE_VERSION);
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[SW] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        // Force the waiting service worker to become the active service worker
        return self.skipWaiting();
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', function(event) {
  console.log('[SW] Activating Service Worker...', CACHE_VERSION);
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});

// Fetch Event - Serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response from cache
        if (response) {
          console.log('[SW] Serving from cache:', event.request.url);
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function(response) {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache the new response
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(function(error) {
          console.log('[SW] Fetch failed:', error);
          // You can return a custom offline page here
          return caches.match('./index.html');
        });
      })
  );
});

// Listen for messages from the client
self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Periodic sync for checking updates (optional)
self.addEventListener('sync', function(event) {
  if (event.tag === 'check-update') {
    event.waitUntil(checkForUpdates());
  }
});

function checkForUpdates() {
  return self.registration.update();
}

console.log('[SW] Service Worker loaded:', CACHE_VERSION);