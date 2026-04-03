/* ══════════════════════════════════════════════════════════
   Chubb Life Calculator — Service Worker
   Version: 4.0 | Updated: 2026-04-03
══════════════════════════════════════════════════════════ */

const CACHE_NAME  = 'chubb-calc-v4.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
];

/* ── Install: cache core assets ── */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

/* ── Activate: remove old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch: Network-first, fallback to cache ── */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone and cache fresh response
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
