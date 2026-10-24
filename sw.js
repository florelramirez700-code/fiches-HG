// Changer ce numéro à chaque mise à jour importante force le rechargement de tous les fichiers.
const CACHE = 'fiches-hg-v33';
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
  './images/g4_lac_tchad.jpg',
  './images/g4_outils_agricoles.jpg',
  './images/g5_cacaoyer_cafeier.jpg',
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
  './images/h6_vendange_tombe_nakht.jpg',
  './photos/g3_12_tourisme_togo.jpg',
  './photos/h3_5_togo_allemand.jpg',
  './photos/h3_8_sylvanus_olympio.jpg',
  './photos_hg/g3_10_peche_port.jpg',
  './photos_hg/g3_11_port_conteneurs.jpg',
  './photos_hg/g3_12_danse_traditionnelle_ewe.jpg',
  './photos_hg/g3_12_hauts_fourneaux_bassar.jpg',
  './photos_hg/g3_12_restaurant_attrayant.jpg',
  './photos_hg/g3_1_togo_afrique.jpg',
  './photos_hg/g3_2_population_pyramide_2020.jpeg',
  './photos_hg/g3_2_relief_togo.jpg',
  './photos_hg/g3_4_types_sols.jpg',
  './photos_hg/g3_6_pyramide_ages.jpg',
  './photos_hg/g3_7_agriculture_reel.png',
  './photos_hg/g3_8_ressources_minieres.jpeg',
  './photos_hg/g3_9_dix_premiers_clients.jpg',
  './photos_hg/h3_10_sdn_vs_onu.jpg',
  './photos_hg/h3_11_diversite_culturelle.jpg',
  './photos_hg/h3_1_carte_coloniale_1914.jpg',
  './photos_hg/h3_2_behanzin_samori.jpg',
  './photos_hg/h3_2_foyers_resistance.jpg',
  './photos_hg/h3_3_deux_souverains.jpg',
  './photos_hg/h3_4_exploitation_colonies.jpg',
  './photos_hg/h3_5_togo_allemand_francais.png',
  './photos_hg/h3_6_gouverneurs_francais.jpg',
  './photos_hg/h3_7_contestation_anticoloniale.jpg',
  './photos_hg/h3_9_carte_militaire_1914.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
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
