/* SIRKANA PWA: cache hanya halaman informasi offline dan aset logo. Tidak cache API atau data bisnis. */
const CACHE_NAME = 'sirkana-offline-shell-v1';
const OFFLINE_URL = '/offline.html';
const STATIC_ASSETS = [OFFLINE_URL, '/pwa-192.png', '/pwa-512.png', '/sirkana-mark.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key.startsWith('sirkana-offline-shell-') && key !== CACHE_NAME).map((key) => caches.delete(key)),
    )).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/auth/')) return;

  // Cache-first only for the small, explicit, non-sensitive asset allowlist.
  if (STATIC_ASSETS.includes(url.pathname) && request.mode !== 'navigate') {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request)),
    );
    return;
  }

  // Navigation is always network-first; offline fallback contains no POS functions or business data.
  if (request.mode !== 'navigate') return;
  event.respondWith(
    fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(OFFLINE_URL)) || Response.error();
    }),
  );
});
