// Offline support: keeps a copy of the app on the tablet.
// Change VERSION (and APP_VERSION in index.html) whenever you upload new files.
const VERSION = 'tamales-v6';
const FILES = ['./', 'index.html', 'xlsx.mini.min.js', 'jspdf.umd.min.js', 'jspdf.plugin.autotable.min.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  // cache:'reload' skips the browser's own cache so we always save the newest files
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const sameOrigin = new URL(e.request.url).origin === location.origin;
  // Network first, always asking the server for the newest copy (cache:'no-cache'),
  // and falling back to the saved copy when there is no internet.
  const req = sameOrigin ? new Request(e.request, {cache: 'no-cache'}) : e.request;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && sameOrigin) {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('index.html')))
  );
});
