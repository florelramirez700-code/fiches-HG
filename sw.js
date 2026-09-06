const CACHE = 'fiches-hg-v19';
const ASSETS = ['./index.html','./manifest.json','./fiches-data.js','./fiches-data-5e.js','./fiches-data-4e.js','./fiches-data-3e.js','./integrations.js','./icon-192.png','./icon-512.png',
  './photos/g3_12_tourisme_togo.jpg','./photos/h3_5_togo_allemand.jpg','./photos/h3_8_sylvanus_olympio.jpg','./photos/h4_1_memorial_esclavage.jpg','./photos/h4_2_memorial_esclavage.jpg','./photos/h4_4_ashanti_kente.jpg','./photos/h4_5_art_africain.jpg','./photos/h5_3_empire_ghana.jpg','./photos/h5_4_empire_mali.jpg','./photos/h5_5_empire_songhai.jpg','./photos/h5_8_grandes_decouvertes.jpg','./photos/h5_prehistoire_afrique.jpg','./photos/h6_prehistoire_togo.jpg','./photos/h7_egypte_pyramides.jpg','./photos/h8_egypte_heritage.jpg','./photos/h9_fourneau_fer.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
