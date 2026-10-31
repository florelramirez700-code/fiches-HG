// Changer ce numéro à chaque mise à jour importante force le rechargement de tous les fichiers.
const CACHE = 'fiches-hg-v42';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './fiches-data.js',
  './fiches-data-5e.js',
  './fiches-data-4e.js',
  './fiches-data-3e.js',
  './integrations.js',
  './epreuves-6e.js',
  './epreuves.js',
  './lib/docx.umd.js',
  './lib/html2canvas.min.js',
  './lib/jspdf.umd.min.js',
  './images/epreuves/6e_g2.png',
  './images/epreuves/6e_g3.png',
  './images/epreuves/6e_g5.png',
  './images/epreuves/6e_g6.png',
  './images/epreuves/6e_h5.png',
  './images/epreuves/6e_h6.png',
  './images/epreuves/6e_h9.png',
  './images/g4_lac_tchad.jpg',
  './images/g4_outils_agricoles.jpg',
  './images/g5_cacaoyer_cafeier.jpg',
  './images/h3_bandung.jpg',
  './images/h3_jules_ferry.jpg',
  './images/h3_kamina.jpg',
  './images/h3_nachtigal.jpg',
  './images/h3_olympio.jpg',
  './images/h3_samori_behanzin.jpg',
  './images/h3_wharf_lome.jpg',
  './images/h4_art_croix_ethiopie.jpg',
  './images/h4_art_djenne.jpg',
  './images/h4_art_masque_baoule.jpg',
  './images/h4_caravane.jpg',
  './images/h4_fort_traite.jpg',
  './images/h4_kumasi_1817.jpg',
  './images/h4_medaillon_wedgwood.jpg',
  './images/h4_navire_brookes.jpg',
  './images/h5_astrolabe.jpg',
  './images/h5_caravelle.jpg',
  './images/h5_sermon_montagne_bloch.jpg',
  './images/h6_abou_simbel_frith.jpg',
  './images/h6_pesee_du_coeur_hunefer.jpg',
  './images/h6_pyramides_gizeh_bonfils.jpg',
  './images/h6_vendange_tombe_nakht.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// On n'efface que les anciennes copies de l'HG : l'appli ECM (et d'autres) sont à la même adresse
// (florelramirez700-code.github.io) et partagent les mêmes caches ; tout effacer supprimait leur copie hors ligne.
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('fiches-hg-') && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// Réseau d'abord : avec une connexion, on reçoit toujours la dernière version des fiches (et on met la copie
// hors ligne à jour) ; sans connexion, on sert la copie gardée sur le téléphone.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(r => {
      if (r && r.status === 200 && r.type === 'basic') { const copie = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copie)); }
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(m => m || caches.match('./index.html')))
  );
});
