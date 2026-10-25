// Ancienne copie de l'appli ECM, retirée le 25/10/2026 (l'appli est maintenant dans fiches-ecm).
// Sur un téléphone où elle était installée, ce service worker remplace l'ancien puis se retire tout seul :
// il efface la vieille copie hors ligne (ecm-v16) et rien d'autre, puis se désinscrit.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(caches.delete('ecm-v16').then(() => self.registration.unregister()));
});
