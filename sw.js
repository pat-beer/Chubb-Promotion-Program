/* Chubb Life Calculator – Service Worker v5.0 | 13 Jul 2026 */
const CACHE = 'chubb-calc-v5.0';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    e.respondWith(fetch(e.request).then(r => { const c=r.clone(); caches.open(CACHE).then(cache=>cache.put(e.request,c)); return r; }).catch(()=>caches.match(e.request)));
});
