// Changer ce numéro à chaque mise à jour importante force le rechargement de tous les fichiers.
const CACHE = 'fiches-hg-v31';
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
  './images/h6_abou_simbel_frith.jpg',
  './images/h6_pesee_du_coeur_hunefer.jpg',
  './images/h6_pyramides_gizeh_bonfils.jpg',
  './images/h6_vendange_tombe_nakht.jpg',
  './photos/g3_12_tourisme_togo.jpg',
  './photos/h3_5_togo_allemand.jpg',
  './photos/h3_8_sylvanus_olympio.jpg',
  './photos/h4_1_memorial_esclavage.jpg',
  './photos/h4_2_memorial_esclavage.jpg',
  './photos/h4_4_ashanti_kente.jpg',
  './photos/h4_5_art_africain.jpg',
  './photos/h5_3_empire_ghana.jpg',
  './photos/h5_4_empire_mali.jpg',
  './photos/h5_5_empire_songhai.jpg',
  './photos/h5_8_grandes_decouvertes.jpg',
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
  './photos_hg/g4_1_afrique_politique.jpeg',
  './photos_hg/g4_2_migration_clandestine.jpg',
  './photos_hg/g4_2_routes_migratoires.jpg',
  './photos_hg/g4_3_sols_afrique.jpeg',
  './photos_hg/g4_5_ressources_minerales.jpeg',
  './photos_hg/g4_6_echanges_internationaux.jpg',
  './photos_hg/g4_6_exports_importations.jpg',
  './photos_hg/g4_7_etat_route_africaine.jpg',
  './photos_hg/g4_7_fibre_optique.jpg',
  './photos_hg/g5_10_ciments_togo.jpg',
  './photos_hg/g5_10_plateforme_industrielle_adetiokope.jpg',
  './photos_hg/g5_1_savanes_relief_hydro.jpg',
  './photos_hg/g5_2_culture_attelee.jpg',
  './photos_hg/g5_2_pintades_savanes.jpg',
  './photos_hg/g5_2_repiquage_riz.jpg',
  './photos_hg/g5_3_kara_relief_hydro.jpg',
  './photos_hg/g5_4_lutte_evala_kozah.jpg',
  './photos_hg/g5_4_marche_ketao.jpg',
  './photos_hg/g5_5_centrale_relief_hydro.jpg',
  './photos_hg/g5_6_artisans_sokode.jpg',
  './photos_hg/g5_6_fete_adossa_gadao.jpg',
  './photos_hg/g5_7_plateaux_sols.jpg',
  './photos_hg/g5_8_cacaoyer.jpg',
  './photos_hg/g5_8_chateau_viale.jpg',
  './photos_hg/g5_9_maritime_hydrographie.jpg',
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
  './photos_hg/h3_9_carte_militaire_1914.png',
  './photos_hg/h4_10_migrations_notse.jpg',
  './photos_hg/h4_10_muraille_agbogbo.jpg',
  './photos_hg/h4_11_royaume_glidji.jpeg',
  './photos_hg/h4_1_commerce_triangulaire.jpeg',
  './photos_hg/h4_3_caravane_sokode.jpg',
  './photos_hg/h4_3_route_kola_1800s.jpg',
  './photos_hg/h4_3_voies_bassin_oti.jpg',
  './photos_hg/h4_4_empire_ashanti.png',
  './photos_hg/h4_6_royaume_anoufo_mango.jpg',
  './photos_hg/h4_7_lutte_kabye.jpg',
  './photos_hg/h4_8_royaume_tchaoudjo.jpg',
  './photos_hg/h4_9_aire_ajatado.jpg',
  './photos_hg/h5_1_diffusion_christianisme.jpg',
  './photos_hg/h5_3_empire_ghana_reel.jpg',
  './photos_hg/h5_4_empire_mali_reel.jpeg',
  './photos_hg/h5_5_empire_songhai_reel.png',
  './photos_hg/h5_6_ethnies_togo_reel.png'
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
