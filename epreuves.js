/* ============ GÉNÉRATEUR D'ÉPREUVES (onglet « Épreuves ») ============
   Format des épreuves officielles (BEPC, compositions régionales, DST) :
   partie A situation d'évaluation (8 pts, ou deux situations de 4 pts comme au BEPC), partie B questions objectives (6 pts),
   partie C questions traditionnelles (6 pts).
   Les questions viennent des réserves epreuves-<niveau>.js (questions neuves, tirées des traces).
   Une épreuve tirée est décrite par des « blocs » (titre, paragraphe, liste, cadre, tableau) : les mêmes blocs
   donnent l'aperçu à l'écran et les deux fichiers Word (sujet, corrigé type). */
const BANQUES_EPREUVES = {
  '6e': typeof EPREUVES_6E !== 'undefined' ? EPREUVES_6E : null,
  '5e': typeof EPREUVES_5E !== 'undefined' ? EPREUVES_5E : null,
  '4e': typeof EPREUVES_4E !== 'undefined' ? EPREUVES_4E : null,
  '3e': typeof EPREUVES_3E !== 'undefined' ? EPREUVES_3E : null
};
// Leçons de chaque trimestre, d'après la progression annuelle des guides d'exécution 2024 (mois indiqués par le guide ;
// 1er trimestre = septembre-décembre, 2e = janvier-mars). La composition du 3e trimestre porte sur toute l'année
// (demande de l'enseignante) : 'tout' = toutes les leçons du niveau. La composition du 2e trimestre mélange un peu :
// situations et partie B sur les leçons du 2e trimestre, questions de cours (partie C) sur le 1er et le 2e trimestre.
const TRIMESTRES = {
  '6e': { '1er': ['g1', 'g2', 'g3', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], '2e': ['g4', 'g5', 'g6', 'g7', 'h7', 'h8', 'h9'], '3e': 'tout' }
};
const LS_EPREUVES = 'ftg_epreuves'; // leçons cochées et options, par niveau (commodité sur cet appareil seulement)
const ep = { level: '6e', choix: {}, epreuve: null };

function lireChoixEpreuves(){ try{ return JSON.parse(localStorage.getItem(LS_EPREUVES)) || {}; }catch(e){ return {}; } }
function garderChoixEpreuves(){ try{ localStorage.setItem(LS_EPREUVES, JSON.stringify(ep.choix)); }catch(e){} }
ep.choix = lireChoixEpreuves();
function choixNiveau(lv){
  if(!ep.choix[lv]) ep.choix[lv] = { lecons: [], type: 'dst', trimestre: '1er', duree: (lv === '6e' || lv === '5e') ? '1 h 30' : '2 h' };
  return ep.choix[lv];
}

// hx (échappement HTML), chargerScript, showToast, classeDe, state, LEVELS et ALL_FICHES viennent d'index.html
const melange = a => { const b = a.slice(); for(let i = b.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const unAuHasard = a => a[Math.floor(Math.random() * a.length)];
// 4 éléments au hasard, en gardant leur ordre d'origine
const quatreDansLOrdre = (a, n = 4) => melange(a.map((x, i) => i)).slice(0, n).sort((x, y) => x - y).map(i => a[i]);
const pts = n => String(n).replace('.', ',') + (n >= 2 ? ' pts' : ' pt');
const LETTRES = 'abcdefgh';

/* ---------- Tirage ----------
   Équilibre des épreuves officielles : 10 pts de géographie et 10 pts d'histoire quand les deux matières sont cochées.
   - une situation (DST, compositions régionales) : situation (8 pts) dans une matière X, partie B = 1 exercice en X
     et 2 dans l'autre matière Y, partie C en Y ;
   - deux situations (BEPC) : situation 1 en histoire et situation 2 en géographie (4 pts chacune, grille 1,5/1/1/0,5),
     partie B dans une matière, partie C dans l'autre. */
const MATIERES = { geo: 'géographie', hist: 'histoire' };
const matiereDe = id => id[0] === 'g' ? 'geo' : 'hist';
function planEpreuve(lecons, nbSituations){
  const mats = ['hist', 'geo'].filter(m => lecons.some(id => matiereDe(id) === m));
  if(mats.length === 2 && nbSituations === 2){ const m = unAuHasard(mats), autre = mats.find(x => x !== m); return { sit: ['hist', 'geo'], b: [m, m, m], c: autre }; }
  const X = unAuHasard(mats);
  if(mats.length === 2){ const Y = mats.find(x => x !== X); return { sit: [X], b: melange([X, Y, Y]), c: Y }; }
  return { sit: [X], b: [X, X, X], c: X };
}
// e.recentes (composition du 2e trimestre) : leçons du trimestre, pour les parties A et B ; la partie C prend toutes les leçons
// cochées. Si une matière n'a aucune leçon récente, on prend toutes ses leçons cochées.
const leconsDe = (e, m, toutes) => {
  const r = (!toutes && e.recentes ? e.recentes : e.lecons).filter(id => matiereDe(id) === m);
  return r.length ? r : e.lecons.filter(id => matiereDe(id) === m);
};
function leconsRecentes(lv, lecons, ch){
  const t = TRIMESTRES[lv] && TRIMESTRES[lv]['2e'];
  if(ch.type !== 'compo' || ch.trimestre !== '2e' || !Array.isArray(t)) return null;
  const r = lecons.filter(id => t.includes(id));
  return r.length && r.length < lecons.length ? r : null;
}
function tirerSituation(lecons, B){
  const pool = lecons.flatMap(id => (B[id].sit || []).map(s => ({ id, s })));
  return pool.length ? unAuHasard(pool) : null;
}
function tirerPartieA(e, B){
  return e.plan.sit.map(m => { const t = tirerSituation(leconsDe(e, m), B); return t && Object.assign(t, { mat: m, pts: e.plan.sit.length === 2 ? 4 : 8 }); }).filter(Boolean);
}
// Exercices possibles de la partie B (chacun sur 2 pts : 4 réponses à 0,5 pt)
function exercicesPossibles(lecons, B){
  const pool = k => lecons.flatMap(id => (B[id][k] || []).map(x => ({ id, x })));
  const ex = {};
  ['vf', 'choix', 'defs'].forEach(k => { const p = pool(k); if(p.length >= 4) ex[k] = () => ({ type: k, items: melange(p).slice(0, 4).map(o => o.x) }); });
  // l'ordre d'affichage (séries, mots) est tiré une fois pour toutes : l'aperçu et le fichier Word restent identiques
  const intr = pool('intrus'); if(intr.length >= 4) ex.intrus = () => ({ type: 'intrus', items: melange(intr).slice(0, 4).map(o => [melange(o.x[0]), o.x[1], o.x[2]]) });
  const comp = pool('comp'); if(comp.length) ex.comp = () => { const x = unAuHasard(comp).x; return { type: 'comp', x, motsAffiches: melange(x.mots) }; };
  const rel = pool('relier').filter(o => o.x.A.length >= 4);
  if(rel.length) ex.relier = () => { const r = unAuHasard(rel).x, idx = melange(r.A.map((a, i) => i)).slice(0, 4); return { type: 'relier', consigne: r.consigne, A: idx.map(i => r.A[i]), B: idx.map(i => r.B[i]), ordreB: melange([0, 1, 2, 3]) }; };
  const ord = pool('ordre').filter(o => o.x.elements.length >= 4);
  if(ord.length) ex.ordre = () => { const o = unAuHasard(ord).x, bons = quatreDansLOrdre(o.elements); return { type: 'ordre', consigne: o.consigne, bons, affiches: melange(bons) }; };
  const cla = pool('classer').filter(o => o.x.elts.length >= 4);
  if(cla.length) ex.classer = () => {
    const c = unAuHasard(cla).x; let elts;
    for(let essai = 0; essai < 20; essai++){ elts = melange(c.elts).slice(0, 4); if(new Set(elts.map(e => e[1])).size >= Math.min(2, c.cats.length)) break; }
    const cats = c.cats.filter((n, i) => elts.some(e => e[1] === i));
    return { type: 'classer', consigne: c.consigne, cats, elts: elts.map(([e, i]) => [e, cats.indexOf(c.cats[i])]) };
  };
  return ex;
}
// Trois exercices de types différents, chacun dans la matière prévue par le plan
function tirerPartieB(e, B){
  const pris = new Set(), res = [];
  e.plan.b.forEach(m => {
    const ex = exercicesPossibles(leconsDe(e, m), B), libres = Object.keys(ex).filter(k => !pris.has(k));
    const k = unAuHasard(libres.length ? libres : Object.keys(ex));
    if(k){ pris.add(k); res.push(Object.assign(ex[k](), { mat: m })); }
  });
  return res;
}
// Questions de cours dont le total fait exactement 6 pts (3 à 5 questions)
function tirerPartieC(e, B){
  const pool = melange(leconsDe(e, e.plan.c, true).flatMap(id => (B[id].cours || []).map(q => ({ id, q }))));
  let trouve = null;
  (function cherche(i, choisies, total){
    if(trouve) return;
    if(Math.abs(total - 6) < 1e-9){ if(choisies.length >= 3) trouve = choisies.slice(); return; }
    if(i >= pool.length || total > 6 || choisies.length >= 5) return;
    choisies.push(pool[i]); cherche(i + 1, choisies, total + pool[i].q[1]); choisies.pop();
    cherche(i + 1, choisies, total);
  })(0, [], 0);
  return (trouve || []).map(o => o.q);
}
function tirerEpreuve(){
  const lv = ep.level, B = BANQUES_EPREUVES[lv], ch = choixNiveau(lv);
  const lecons = ch.lecons.filter(id => B[id]);
  if(!lecons.length){ showToast('Coche au moins une leçon'); return; }
  const e = { lv, lecons, recentes: leconsRecentes(lv, lecons, ch), plan: planEpreuve(lecons, ch.situations === 2 ? 2 : 1) };
  e.A = tirerPartieA(e, B); e.B = tirerPartieB(e, B); e.C = tirerPartieC(e, B);
  ep.epreuve = e;
  renderEpreuves();
}
// « Autre … » : nouveau tirage d'une partie, dans les mêmes matières
function retirer(partie){
  const e = ep.epreuve, B = BANQUES_EPREUVES[e.lv];
  if(partie === 'A') e.A = tirerPartieA(e, B);
  if(partie === 'B') e.B = tirerPartieB(e, B);
  if(partie === 'C') e.C = tirerPartieC(e, B);
  renderEpreuves();
}
// Points par matière (affichés sous les boutons)
function repartition(e){
  const r = { geo: 0, hist: 0 };
  e.A.forEach(a => r[a.mat] += a.pts); e.B.forEach(x => r[x.mat] += 2); r[e.plan.c] += e.C.reduce((s, q) => s + q[1], 0);
  return r;
}

/* ---------- Blocs du sujet et du corrigé ---------- */
const CONSIGNES_B = {
  vf: 'Réponds par Vrai ou Faux aux affirmations suivantes :',
  choix: 'Choisis la bonne réponse :',
  defs: 'Trouve le mot ou l\'expression qui correspond à chaque définition :',
  intrus: 'Dans chaque série, relève l\'intrus et justifie ton choix :'
};
function enteteEpreuve(e, corrige){
  const s = state.settings, o = choixNiveau(e.lv);
  const nom = o.type === 'compo' ? 'COMPOSITION DU ' + ({ '1er': 'PREMIER', '2e': 'DEUXIÈME', '3e': 'TROISIÈME' }[o.trimestre] || '') + ' TRIMESTRE' : 'DEVOIR SURVEILLÉ';
  const b = [];
  if(s.etablissement) b.push({ k: 'p', txt: s.etablissement, b: true });
  b.push({ k: 'titre', txt: (corrige ? 'CORRIGÉ TYPE ' + (o.type === 'compo' ? 'DE LA ' : 'DU ') : '') + nom + ' D\'HISTOIRE-GÉOGRAPHIE' });
  b.push({ k: 'centre', txt: 'Classe : ' + classeDe(e.lv) + '          Année scolaire : ' + (s.annee || '') + '          Durée : ' + (o.duree || '') });
  return b;
}
function exerciceB(x, n, corrige){
  const b = [];
  if(x.type === 'vf' || x.type === 'choix' || x.type === 'defs'){
    b.push({ k: 'p', txt: n + '. ' + CONSIGNES_B[x.type] + ' (2 pts)', b: true });
    x.items.forEach((it, i) => {
      const l = LETTRES[i] + ') ';
      if(!corrige) b.push({ k: 'p', txt: l + it[0] });
      else if(x.type === 'vf') b.push({ k: 'p', txt: l + (it[1] ? 'Vrai' : 'Faux : ' + it[2]) });
      else b.push({ k: 'p', txt: l + it[1] });
    });
  } else if(x.type === 'intrus'){
    b.push({ k: 'p', txt: n + '. ' + CONSIGNES_B.intrus + ' (2 pts)', b: true });
    x.items.forEach((it, i) => b.push({ k: 'p', txt: LETTRES[i] + ') ' + (corrige ? it[1] + ' : ' + it[2] : it[0].join(' – ')) }));
  } else if(x.type === 'comp'){
    const mots = corrige ? x.x.mots : x.motsAffiches;
    b.push({ k: 'p', txt: n + '. Complète le texte avec les mots suivants : ' + mots.join(', ') + ' : (2 pts)', b: true });
    if(corrige) b.push({ k: 'p', txt: x.x.mots.map((m, i) => LETTRES[i] + ') ' + m).join(' ; ') });
    else b.push({ k: 'p', txt: x.x.texte.replace(/\{([a-d])\}/g, '……$1……') });
  } else if(x.type === 'relier'){
    b.push({ k: 'p', txt: n + '. ' + x.consigne + ' (2 pts)', b: true });
    const lettreDe = i => LETTRES[x.ordreB.indexOf(i)];
    if(corrige) b.push({ k: 'p', txt: x.A.map((a, i) => (i + 1) + ' → ' + lettreDe(i)).join(' ; ') + '  (' + x.A.map((a, i) => a + ' : ' + x.B[i]).join(' ; ') + ')' });
    else b.push({ k: 'table', entetes: ['Liste A', 'Liste B'], lignes: x.A.map((a, i) => [(i + 1) + '. ' + a, LETTRES[i] + ') ' + x.B[x.ordreB[i]]]) });
  } else if(x.type === 'ordre'){
    b.push({ k: 'p', txt: n + '. ' + x.consigne + ' Écris les lettres dans le bon ordre. (2 pts)', b: true });
    if(corrige) b.push({ k: 'p', txt: x.bons.map(el => LETTRES[x.affiches.indexOf(el)]).join(', ') + '  (' + x.bons.join(' → ') + ')' });
    else x.affiches.forEach((el, i) => b.push({ k: 'p', txt: LETTRES[i] + ') ' + el }));
  } else if(x.type === 'classer'){
    b.push({ k: 'p', txt: n + '. ' + x.consigne + ' (2 pts)', b: true });
    if(!corrige) b.push({ k: 'p', txt: 'Éléments à classer : ' + x.elts.map(e => e[0]).join(' ; ') + '.' });
    const lignes = corrige ? [x.cats.map((c, i) => x.elts.filter(e => e[1] === i).map(e => e[0]).join('\n'))] : [x.cats.map(() => '\n\n')];
    b.push({ k: 'table', entetes: x.cats, lignes });
  }
  if(corrige) b.push({ k: 'p', txt: x.type === 'ordre' ? 'Barème : 0,5 pt par élément bien placé.' : 'Barème : 0,5 pt par réponse juste' + (x.type === 'intrus' ? ' (0,25 pt pour l\'intrus, 0,25 pt pour la justification).' : '.'), i: true });
  return b;
}
// Une situation : partie A sur 8 pts (grille 2/2/2/2). Deux situations (BEPC) : 4 pts chacune (grille 1,5/1/1/0,5).
const titreSituation = (e, i) => e.A.length === 2 ? 'Situation d\'évaluation ' + (i + 1) + ' (4 pts)' : null;
function blocsSujet(e){
  const b = enteteEpreuve(e, false);
  b.push({ k: 'h', txt: e.A.length === 2 ? 'PARTIE A : SITUATIONS D\'ÉVALUATION (8 pts)' : 'PARTIE A : SITUATION D\'ÉVALUATION (8 pts)' });
  e.A.forEach(({ s: A }, i) => {
    if(titreSituation(e, i)) b.push({ k: 'p', txt: titreSituation(e, i), b: true, u: true });
    b.push({ k: 'p', txt: A.texte });
    // une consigne qui commence par « À partir de tes connaissances… » (forme du BEPC) n'a pas besoin de la phrase d'amorce
    if(!/^(À partir|En t'appuyant)/.test(A.consigne)) b.push({ k: 'p', txt: A.amorce || (A.doc ? 'En t\'appuyant sur tes connaissances et sur le document ci-après :' : 'En t\'appuyant sur tes connaissances :') });
    b.push({ k: 'p', txt: 'Consigne : ' + A.consigne, b: true });
    if(A.doc) b.push({ k: 'cadre', titre: A.doc.titre, texte: A.doc.texte, liste: A.doc.liste, image: A.doc.image, tableau: A.doc.tableau });
    b.push({ k: 'p', txt: 'Grille de notation', b: true });
    b.push(e.A.length === 2
      ? { k: 'table', entetes: ['Pertinence', 'Correction', 'Cohérence', 'Perfectionnement', 'Total'], lignes: [['1,5 pt', '1 pt', '1 pt', '0,5 pt', '4 pts']] }
      : { k: 'table', entetes: ['', 'Pertinence', 'Correction', 'Cohérence', 'Perfectionnement', 'Total'], lignes: [['Consigne', '2 pts', '2 pts', '2 pts', '2 pts', '8 pts']] });
  });
  const totalB = e.B.length * 2;
  b.push({ k: 'h', txt: 'PARTIE B : QUESTIONS OBJECTIVES (' + totalB + ' pts)' });
  e.B.forEach((x, i) => b.push(...exerciceB(x, i + 1, false)));
  b.push({ k: 'h', txt: 'PARTIE C : QUESTIONS TRADITIONNELLES (' + pts(e.C.reduce((s, q) => s + q[1], 0)) + ')' });
  e.C.forEach((q, i) => b.push({ k: 'p', txt: (i + 1) + '. ' + q[0] + ' (' + pts(q[1]) + ')' }));
  return b;
}
function blocsCorrige(e){
  const b = enteteEpreuve(e, true);
  b.push({ k: 'h', txt: e.A.length === 2 ? 'PARTIE A : SITUATIONS D\'ÉVALUATION (8 pts)' : 'PARTIE A : SITUATION D\'ÉVALUATION (8 pts)' });
  e.A.forEach(({ s: A }, i) => {
    // barème de la grille de correction : sur 8 pts, ou sur 4 pts quand il y a deux situations
    const g = e.A.length === 2 ? ['0,25 pt', '0,25 pt', '1 pt', '0,5 pt', '0,5 pt', '1 pt', '0,5 pt', '4 pts'] : ['0,5 pt', '0,5 pt', '1 pt', '1 pt', '1 pt', '2 pts', '2 pts', '8 pts'];
    if(titreSituation(e, i)) b.push({ k: 'p', txt: titreSituation(e, i), b: true, u: true });
    // même présentation que les corrigés des intégrations : introduction qui reprend la situation, développement
    // ouvert par une formule d'adresse et mené avec des connecteurs, conclusion « En définitive… »
    b.push({ k: 'p', txt: 'Production attendue', b: true });
    if(A.titreProd) b.push({ k: 'p', txt: A.titreProd, b: true, u: true }); // titre d'un article
    b.push({ k: 'p', txt: 'INTRODUCTION', b: true }, { k: 'p', txt: A.intro });
    b.push({ k: 'p', txt: 'DÉVELOPPEMENT', b: true }, ...(A.adresse ? [{ k: 'p', txt: A.adresse }] : []), ...A.dev.map(t => ({ k: 'p', txt: t })));
    b.push({ k: 'p', txt: 'CONCLUSION', b: true }, { k: 'p', txt: A.concl }, ...(A.signature ? [{ k: 'p', txt: A.signature }] : []));
    b.push({ k: 'p', txt: 'Grille de correction', b: true });
    b.push({ k: 'table', entetes: ['Critères', 'Indicateurs', 'Indices', 'Barème'], lignes: [
      ['PERTINENCE', 'Production conforme au support', A.support || 'Informations du document-support exploitées', g[0]],
      ['', 'Production conforme à la consigne', A.indConsigne || A.consigne, g[1]],
      ['', 'Justesse des réponses au regard de la consigne', A.justesse.map(j => '– ' + j).join('\n'), g[2]],
      ['CORRECTION', 'Concepts et outils de la discipline bien utilisés', A.concepts, g[3]],
      ['', 'Justesse des réponses au regard des concepts utilisés', 'À apprécier par le professeur selon la production de l\'élève', g[4]],
      ['COHÉRENCE', 'Enchaînement logique des idées', 'Introduction, développement, conclusion ; idées bien agencées ; connecteurs logiques (d\'abord, ensuite, enfin, en définitive…)', g[5]],
      ['PERFECTIONNEMENT', 'Qualité de la langue et présentation', 'Phrases correctes ; grammaire, orthographe et ponctuation respectées ; bonne présentation ; lisibilité ; absence de ratures', g[6]],
      ['TOTAL', '', '', g[7]]] });
  });
  b.push({ k: 'h', txt: 'PARTIE B : QUESTIONS OBJECTIVES (' + (e.B.length * 2) + ' pts)' });
  e.B.forEach((x, i) => b.push(...exerciceB(x, i + 1, true)));
  b.push({ k: 'h', txt: 'PARTIE C : QUESTIONS TRADITIONNELLES (' + pts(e.C.reduce((s, q) => s + q[1], 0)) + ')' });
  e.C.forEach((q, i) => { b.push({ k: 'p', txt: (i + 1) + '. ' + q[0] + ' (' + pts(q[1]) + ')', b: true }); b.push({ k: 'p', txt: q[2] }); });
  return b;
}

/* ---------- Aperçu à l'écran ---------- */
function blocsHTML(blocs){
  return blocs.map(x => {
    if(x.k === 'titre') return `<p class="ep-titre">${hx(x.txt)}</p>`;
    if(x.k === 'centre') return `<p class="ep-centre">${hx(x.txt)}</p>`;
    if(x.k === 'h') return `<p class="ep-h">${hx(x.txt)}</p>`;
    if(x.k === 'p') return `<p class="ep-p${x.b ? ' b' : ''}${x.i ? ' i' : ''}${x.u ? ' u' : ''}">${hx(x.txt)}</p>`;
    if(x.k === 'cadre') return `<div class="ep-cadre"><p class="ep-p b">${hx(x.titre)}</p>${x.texte ? `<p class="ep-p">${hx(x.texte)}</p>` : ''}${x.liste ? x.liste.map(l => `<p class="ep-p">– ${hx(l)}</p>`).join('') : ''}${x.image ? `<img class="ep-img" src="${hx(x.image)}" alt="${hx(x.titre)}">` : ''}${x.tableau ? blocsHTML([Object.assign({ k: 'table' }, x.tableau)]) : ''}</div>`;
    if(x.k === 'table') return `<div class="ep-tablewrap"><table class="grid ep-table"><tr>${x.entetes.map(t => `<th>${hx(t)}</th>`).join('')}</tr>${x.lignes.map(l => `<tr>${l.map(c => `<td class="pre">${hx(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
    return '';
  }).join('');
}

/* ---------- Fichiers Word ---------- */
// Images des documents (PNG rendus à 2 fois la taille) : lues avant de fabriquer le Word, avec leur taille d'affichage
// (au plus 15 cm de large et 11 cm de haut, pour économiser le papier). lire(src) rend les octets du fichier (fetch dans l'appli, fs dans les essais).
async function imagesDesBlocs(blocs, lire = src => fetch(src).then(r => { if(!r.ok) throw new Error('image introuvable : ' + src); return r.arrayBuffer(); })){
  const imgs = {};
  for(const x of blocs) if(x.k === 'cadre' && x.image && !imgs[x.image]){
    const data = new Uint8Array(await lire(x.image)), v = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let w = v.getUint32(16) / 2, h = v.getUint32(20) / 2; // largeur et hauteur lues dans l'en-tête PNG
    const k = Math.min(1, 560 / w, 420 / h); imgs[x.image] = { data, w: Math.round(w * k), h: Math.round(h * k) };
  }
  return imgs;
}
function blocsDocx(blocs, imgs = {}){
  const d = window.docx, T = (txt, o = {}) => new d.TextRun(Object.assign({ text: txt }, o));
  const para = (txt, o = {}, p = {}) => new d.Paragraph(Object.assign({ children: String(txt).split('\n').flatMap((l, i) => i ? [T(l, Object.assign({ break: 1 }, o))] : [T(l, o)]), spacing: { after: 80 } }, p));
  const cellule = (txt, entete) => new d.TableCell({ children: String(txt).split('\n').map(l => para(l, entete ? { bold: true } : {}, { spacing: { after: 0 } })), shading: entete ? { fill: 'E4EDE9' } : undefined, margins: { top: 60, bottom: 60, left: 80, right: 80 } });
  const tableau = lignes => new d.Table({ width: { size: 100, type: d.WidthType.PERCENTAGE }, rows: lignes });
  const out = [];
  blocs.forEach(x => {
    if(x.k === 'titre') out.push(para(x.txt, { bold: true, size: 26 }, { alignment: d.AlignmentType.CENTER, spacing: { after: 60 } }));
    else if(x.k === 'centre') out.push(para(x.txt, {}, { alignment: d.AlignmentType.CENTER, spacing: { after: 200 } }));
    else if(x.k === 'h') out.push(para(x.txt, { bold: true, underline: {} }, { spacing: { before: 240, after: 120 } }));
    else if(x.k === 'p') out.push(para(x.txt, Object.assign({ bold: !!x.b, italics: !!x.i }, x.u ? { underline: {} } : {})));
    else if(x.k === 'cadre') out.push(tableau([new d.TableRow({ children: [new d.TableCell({ margins: { top: 100, bottom: 100, left: 120, right: 120 }, children:
      [para(x.titre, { bold: true })].concat(x.texte ? [para(x.texte, { italics: true })] : [], (x.liste || []).map(l => para('– ' + l)),
        x.image && imgs[x.image] ? [new d.Paragraph({ alignment: d.AlignmentType.CENTER, children: [new d.ImageRun({ data: imgs[x.image].data, transformation: { width: imgs[x.image].w, height: imgs[x.image].h } })] })] : [],
        x.tableau ? [new d.Table({ width: { size: 100, type: d.WidthType.PERCENTAGE }, rows: [new d.TableRow({ tableHeader: true, children: x.tableau.entetes.map(t => cellule(t, true)) })].concat(x.tableau.lignes.map(l => new d.TableRow({ children: l.map(c => cellule(c, false)) }))) }), para('', {}, { spacing: { after: 0 } })] : []) })] })]), para(''));
    else if(x.k === 'table') out.push(tableau([new d.TableRow({ tableHeader: true, children: x.entetes.map(t => cellule(t, true)) })].concat(x.lignes.map(l => new d.TableRow({ children: l.map(c => cellule(c, false)) })))), para(''));
  });
  return out;
}
const nomWord = (e, quoi) => ('HG ' + e.lv + ' ' + (choixNiveau(e.lv).type === 'compo' ? 'Composition ' + choixNiveau(e.lv).trimestre + ' trimestre' : 'DST') + ' - ' + quoi).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9 _-]+/g, ' ').replace(/\s+/g, ' ').trim() + '.docx';
async function telechargerWord(quoi){
  const e = ep.epreuve; if(!e) return;
  try{
    await chargerScript('lib/docx.umd.js');
    const d = window.docx, blocs = quoi === 'Sujet' ? blocsSujet(e) : blocsCorrige(e);
    const doc = new d.Document({
      creator: state.settings.professeur || 'Professeur', title: nomWord(e, quoi).replace('.docx', ''),
      styles: { default: { document: { run: { font: 'Times New Roman', size: 24 } } } },
      sections: [{ properties: { page: { margin: { top: 1000, bottom: 1000, left: 1100, right: 1100 } } }, children: blocsDocx(blocs, await imagesDesBlocs(blocs)) }]
    });
    const blob = await d.Packer.toBlob(doc);
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nomWord(e, quoi);
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    showToast(quoi + ' enregistré (dossier Téléchargements) ✓');
  }catch(err){ showToast('Le fichier Word n\'a pas pu être fabriqué : ' + err.message); }
}

/* ---------- Vue ---------- */
function renderEpreuves(){
  const el = document.getElementById('viewEpreuves'); if(!el) return;
  const lv = ep.level, B = BANQUES_EPREUVES[lv], ch = choixNiveau(lv);
  let h = `<div class="subject-toggle">${['6e', '5e', '4e', '3e'].map(l => `<button data-lv="${l}" class="${l === lv ? 'active' : ''}">${l}</button>`).join('')}</div>`;
  if(!B){
    el.innerHTML = h + `<div class="savedlist-empty">La réserve de questions de la ${lv} est en préparation.<br>Le générateur marche pour l'instant en 6e.</div>`;
    el.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { ep.level = b.dataset.lv; ep.epreuve = null; renderEpreuves(); });
    return;
  }
  h += `<div class="card"><h3>1. Leçons déjà faites</h3><p class="note">Coche les leçons sur lesquelles porte l'épreuve.</p>
    ${TRIMESTRES[lv] ? `<div class="actions" style="margin-bottom:4px">${Object.keys(TRIMESTRES[lv]).map(t => `<button class="btn btn-clay" data-trim="${t}">${t} trimestre</button>`).join('')}</div>
    <p class="note">Ces boutons cochent les leçons du trimestre selon la progression du guide du programme ; pour une composition, le 2e trimestre coche aussi le 1er (situations et partie B sur le 2e trimestre, questions de cours sur les deux) et le 3e trimestre coche toute l'année.</p>` : ''}
    <div class="actions" style="margin-bottom:6px"><button class="btn btn-ghost" data-tout="1">Tout cocher</button><button class="btn btn-ghost" data-tout="0">Tout décocher</button></div>`;
  ['geo', 'hist'].forEach(sj => {
    LEVELS[lv][sj].themes.forEach(t => {
      h += `<div class="theme-title">${hx(LEVELS[lv][sj].label)} — ${hx(t.theme.replace(/^Thème \d+ — /, ''))}</div>`;
      t.ids.forEach(id => { h += `<label class="ep-lecon"><input type="checkbox" data-id="${id}" ${ch.lecons.includes(id) ? 'checked' : ''}> ${hx(ALL_FICHES[id].leconTitre)}${B[id] ? '' : ' <small>(pas encore de questions)</small>'}</label>`; });
    });
  });
  h += `</div><div class="card"><h3>2. L'épreuve</h3>
    <label class="field-label">Type</label><select id="epType" class="ep-select"><option value="dst" ${ch.type === 'dst' ? 'selected' : ''}>Devoir surveillé</option><option value="compo" ${ch.type === 'compo' ? 'selected' : ''}>Composition</option></select>
    <div id="epTrim" style="${ch.type === 'compo' ? '' : 'display:none'}"><label class="field-label">Trimestre</label><select id="epTrimestre" class="ep-select">${['1er', '2e', '3e'].map(t => `<option ${ch.trimestre === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
    <label class="field-label">Partie A</label><select id="epSit" class="ep-select"><option value="1" ${ch.situations === 2 ? '' : 'selected'}>Une situation (8 pts)</option><option value="2" ${ch.situations === 2 ? 'selected' : ''}>Deux situations, une en histoire et une en géographie (4 pts chacune)</option></select>
    <label class="field-label">Durée</label><input id="epDuree" class="ep-select" value="${hx(ch.duree)}">
    <p class="note" style="margin-top:8px">Classe, année scolaire et établissement : ceux des Réglages (${hx(classeDe(lv))}, ${hx(state.settings.annee || 'année non réglée')}).</p>
    <div class="actions" style="margin:10px 0 0"><button class="btn btn-primary" id="epGenerer">${ep.epreuve ? 'Autre tirage' : 'Générer l\'épreuve'}</button></div></div>`;
  const e = ep.epreuve;
  if(e && e.lv === lv){
    const totalB = e.B.length * 2, totalC = e.C.reduce((s, q) => s + q[1], 0);
    const alertes = [], r = repartition(e);
    if(!e.A.length) alertes.push('aucune situation pour ces leçons');
    if(ch.situations === 2 && e.A.length < 2) alertes.push('deux situations demandées, mais une seule matière est cochée : coche aussi des leçons de l\'autre matière, puis « Autre tirage »');
    if(totalB < 6) alertes.push('partie B incomplète (' + totalB + ' pts) : coche plus de leçons');
    if(Math.abs(totalC - 6) > 1e-9) alertes.push('partie C incomplète : coche plus de leçons');
    h += `<div class="card"><h3>3. Sujet</h3>${alertes.length ? `<p class="note" style="color:var(--clay)">⚠ ${alertes.join(' ; ')}.</p>` : ''}
      <p class="note">Répartition : géographie ${pts(r.geo)}, histoire ${pts(r.hist)}.${e.recentes ? ' Situation(s) et partie B sur les leçons du 2e trimestre ; questions de cours sur toutes les leçons cochées.' : ''}</p>
      <div class="actions"><button class="btn btn-primary" data-word="Sujet">⬇ Sujet (Word)</button><button class="btn btn-primary" data-word="Corrige">⬇ Corrigé type (Word)</button></div>
      <div class="actions"><button class="btn btn-ghost" data-re="A">↻ ${e.A.length === 2 ? 'Autres situations' : 'Autre situation'}</button><button class="btn btn-ghost" data-re="B">↻ Autre partie B</button><button class="btn btn-ghost" data-re="C">↻ Autre partie C</button></div>
      <div class="ep-feuille">${blocsHTML(blocsSujet(e))}</div>
      <details class="corrige"><summary>Voir le corrigé type</summary><div class="ep-feuille">${blocsHTML(blocsCorrige(e))}</div></details></div>`;
  }
  el.innerHTML = h;
  el.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => { ep.level = b.dataset.lv; ep.epreuve = null; renderEpreuves(); });
  el.querySelectorAll('[data-id]').forEach(c => c.onchange = () => {
    const s = new Set(ch.lecons); c.checked ? s.add(c.dataset.id) : s.delete(c.dataset.id);
    ch.lecons = Object.values(LEVELS[lv]).flatMap(m => m.themes.flatMap(t => t.ids)).filter(id => s.has(id)); garderChoixEpreuves();
  });
  // un bouton de trimestre coche ses leçons et règle aussi le trimestre de la composition
  el.querySelectorAll('[data-trim]').forEach(b => b.onclick = () => { const T = TRIMESTRES[lv], t = T[b.dataset.trim];
    ch.lecons = (t === 'tout' ? Object.values(LEVELS[lv]).flatMap(m => m.themes.flatMap(x => x.ids)) : ch.type === 'compo' && b.dataset.trim === '2e' ? T['1er'].concat(t) : t).filter(id => B[id]); ch.trimestre = b.dataset.trim; garderChoixEpreuves(); renderEpreuves(); });
  el.querySelectorAll('[data-tout]').forEach(b => b.onclick = () => { ch.lecons = b.dataset.tout === '1' ? Object.values(LEVELS[lv]).flatMap(m => m.themes.flatMap(t => t.ids)).filter(id => B[id]) : []; garderChoixEpreuves(); renderEpreuves(); });
  // le type, le trimestre et la durée changent l'en-tête de l'épreuve déjà tirée, sans nouveau tirage
  el.querySelector('#epType').onchange = ev => { ch.type = ev.target.value; garderChoixEpreuves(); renderEpreuves(); };
  el.querySelector('#epTrimestre').onchange = ev => { ch.trimestre = ev.target.value; garderChoixEpreuves(); renderEpreuves(); };
  // une ou deux situations change toute l'organisation de l'épreuve : nouveau tirage
  el.querySelector('#epSit').onchange = ev => { ch.situations = +ev.target.value; garderChoixEpreuves(); if(ep.epreuve) tirerEpreuve(); else renderEpreuves(); };
  el.querySelector('#epDuree').onchange = ev => { ch.duree = ev.target.value; garderChoixEpreuves(); renderEpreuves(); };
  el.querySelector('#epGenerer').onclick = tirerEpreuve;
  el.querySelectorAll('[data-re]').forEach(b => b.onclick = () => retirer(b.dataset.re));
  el.querySelectorAll('[data-word]').forEach(b => b.onclick = () => telechargerWord(b.dataset.word === 'Sujet' ? 'Sujet' : 'Corrigé'));
}
