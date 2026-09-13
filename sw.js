const CACHE = 'fiches-hg-v22';
const ASSETS = ['./index.html','./manifest.json','./fiches-data.js','./fiches-data-5e.js','./fiches-data-4e.js','./fiches-data-3e.js','./integrations.js','./icon-192.png','./icon-512.png',
  './photos_hg/g3_2_population_pyramide_2020.jpeg','./photos_hg/g3_7_agriculture_reel.png','./photos_hg/g3_8_ressources_minieres.jpeg','./photos_hg/g4_1_afrique_politique.jpeg','./photos_hg/g4_3_sols_afrique.jpeg','./photos_hg/g4_5_ressources_minerales.jpeg','./photos_hg/g4_atmosphere_reelle.jpg','./photos_hg/g5_1_savanes_relief_hydro.jpg','./photos_hg/g5_3_kara_relief_hydro.jpg','./photos_hg/g5_5_centrale_relief_hydro.jpg','./photos_hg/g5_7_plateaux_sols.jpg','./photos_hg/g5_cycle_eau_reel.jpg','./photos_hg/g6_relief_continental_reel.png','./photos_hg/g6_relief_oceanique_reel.png','./photos_hg/h3_5_togo_allemand_francais.png','./photos_hg/h3_9_carte_militaire_1914.png','./photos_hg/h4_11_royaume_glidji.jpeg','./photos_hg/h4_1_commerce_triangulaire.jpeg','./photos_hg/h4_4_empire_ashanti.png','./photos_hg/h4_frise_periodes_reelle.png','./photos_hg/h5_3_empire_ghana_reel.jpg','./photos_hg/h5_4_empire_mali_reel.jpeg','./photos_hg/h5_5_empire_songhai_reel.png','./photos_hg/h5_6_ethnies_togo_reel.png','./photos_hg/h5_arbre_evolution.png','./photos_hg/h5_empires_compares.png','./photos_hg/h5_sites_prehistoriques_afrique.jpg','./photos_hg/h6_art_rupestre.png','./photos_hg/h6_carte_vestiges_togo_manuscrite.jpg','./photos_hg/h6_carte_vestiges_togo_pro.jpg','./photos_hg/h7_carte_egypte.jpeg','./photos_hg/h9_carte_sites_metallurgiques.jpg','./photos_hg/h9_coupe_fourneau_bassar.jpg',
  './photos/g3_12_tourisme_togo.jpg','./photos/g4_atmosphere_reelle.jpg','./photos/g5_cycle_eau_reel.jpg','./photos/h3_5_togo_allemand.jpg','./photos/h3_8_sylvanus_olympio.jpg','./photos/h4_1_memorial_esclavage.jpg','./photos/h4_2_memorial_esclavage.jpg','./photos/h4_4_ashanti_kente.jpg','./photos/h4_5_art_africain.jpg','./photos/h4_frise_periodes_reelle.png','./photos/h5_3_empire_ghana.jpg','./photos/h5_4_empire_mali.jpg','./photos/h5_5_empire_songhai.jpg','./photos/h5_8_grandes_decouvertes.jpg','./photos/h5_prehistoire_afrique.jpg','./photos/h6_art_rupestre.png','./photos/h6_prehistoire_togo.jpg','./photos/h7_egypte_pyramides.jpg','./photos/h8_egypte_heritage.jpg','./photos/h9_fourneau_fer.jpg'];

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
