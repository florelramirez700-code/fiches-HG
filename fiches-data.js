const FICHES_DATA = {

/* ================= GÉOGRAPHIE ================= */

g1: {
  leconTitre: "À la découverte de la géographie : définition, domaines, démarche et utilité",
  theme: "Thème 1 — Maîtriser son espace de vie",
  competence: "Résoudre des situations de vie liées à la compréhension des faits géographiques de son milieu et à la maîtrise de son espace de vie.",
  documentation: ["Géographie 6e, collection Hatier", "Géographie 6e, collection IPAM, p. 4 à 9", "Dictionnaire Larousse"],
  supportsDidactiques: "Carte, globe terrestre, boussole, planisphère",
  preRequis: "Citer les différentes leçons étudiées au CM2 (histoire, géographie, ECM, EDUSIVIP)",
  capacitesContenus: [
    ["Définir la géographie","Définition de la géographie, objet d'étude de la géographie"],
    ["Identifier les domaines","Domaines : géographie physique, géographie humaine, géographie économique"],
    ["Utiliser la démarche","Démarche géographique : OBLODEXCO (Observer, Localiser, Décrire, Expliquer, Comparer)"],
    ["Énumérer les outils","Outils : carte, croquis, diagramme, photo, boussole, GPS…"],
    ["Donner l'utilité de la géographie","Utilité de la géographie pour le citoyen et pour l'État"]
  ],
  situationProbleme: "En regardant le journal télévisé avec sa famille, Essowè voit un reportage qui décrit avec précision le relief, le climat et les activités des habitants d'une région du Togo qu'il ne connaît pas. Il s'étonne : comment peut-on connaître et expliquer aussi bien un lieu qu'on n'a jamais visité ? Il demande à la classe de l'aider à comprendre quelle discipline permet cela, comment elle procède et à quoi elle sert.",
  consignes: [
    "Dites et définissez la discipline qui permet de décrire la Terre.",
    "Quels sont ses domaines d'étude ?",
    "Quelle est sa méthode de travail ?",
    "De quels outils fait-elle usage ?",
    "Quelle est son utilité pour l'homme ?"
  ],
  strategies: ["Observation du globe terrestre", "Observation du cadre de vie de l'établissement", "Travail en petits groupes", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Demande aux élèves de citer les disciplines étudiées au CM2.", activiteEleve:"Citent : calcul, ECM, histoire, géographie…", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Lit la SP et la fait reformuler.", activiteEleve:"Écoutent et reformulent la SP.", support:"Texte au tableau"},
    {phase:"Appropriation de la tâche / organisation du travail", duree:"10 min", activiteProf:"Organise la classe en petits groupes ; distribue les consignes.", activiteEleve:"S'approprient les consignes en groupes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (travail de groupe)", duree:"30 min", activiteProf:"Circule, oriente les recherches à partir des documents.", activiteEleve:"Recherchent, discutent, préparent une restitution.", support:"Manuels, dictionnaire"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer les groupes, corrige et structure les réponses.", activiteEleve:"Exposent leurs solutions ; comparent avec les autres groupes.", support:"Tableau, production des élèves"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte / fait copier le résumé structuré.", activiteEleve:"Copient le résumé dans le cahier.", support:"Cahier de cours"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Pose des questions courtes de vérification.", activiteEleve:"Répondent individuellement.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. Définition", texte:"La géographie est la science qui étudie la Terre dans ses aspects physiques, humains et économiques."},
    {titre:"2. Les domaines de la géographie", texte:"La géographie physique, la géographie humaine et la géographie économique."},
    {titre:"3. La démarche du géographe (OBLODEXCO)", texte:"Observer — Localiser — Décrire — Expliquer — Comparer."},
    {titre:"4. Les outils du géographe", texte:"La carte, le croquis, le diagramme, la photo, la boussole, le GPS…"},
    {titre:"5. L'utilité de la géographie", texte:"Elle permet de connaître son milieu de vie, de le protéger et de comprendre les phénomènes naturels et humains à la surface de la Terre."}
  ],
  evaluation: "1) Donnez la définition de la géographie. 2) Citez les trois domaines de la géographie et les cinq étapes de la démarche du géographe.",
  devoirMaison: "Recherchez un exemple de phénomène géographique observé dans votre quartier ou votre village et indiquez à quel domaine de la géographie il appartient."
},

g2: {
  leconTitre: "Se repérer dans son espace de vie",
  theme: "Thème 1 — Maîtriser son espace de vie",
  competence: "Résoudre des situations de vie liées à la compréhension des faits géographiques de son milieu et à la maîtrise de son espace de vie.",
  documentation: ["Géographie 6e, collection Hatier", "Géographie 6e, collection IPAM"],
  supportsDidactiques: "Boussole, rose des vents, croquis de l'établissement",
  preRequis: "Rappeler la définition et les domaines de la géographie",
  capacitesContenus: [
    ["S'orienter avec les points cardinaux et les coordonnées géographiques","Points cardinaux ; coordonnées géographiques"],
    ["Situer / localiser un lieu sur une carte","Localisation sur la carte d'un lieu, d'une région"],
    ["Situer / localiser un lieu par rapport à un repère fixe","Situation et localisation d'un lieu par rapport à un repère fixe"]
  ],
  situationProbleme: "Un cousin d'Ayélé, venu de Kara pour la première fois à Lomé, se perd en cherchant l'établissement de sa cousine alors qu'il connaît pourtant l'adresse. Ayélé se rend compte qu'il ne sait ni utiliser les points cardinaux ni situer un lieu par rapport à un repère connu. Elle vous demande de l'aider à expliquer comment on se repère correctement dans un espace.",
  consignes: [
    "Qu'appelle-t-on points cardinaux et comment les identifie-t-on ?",
    "Que sont les coordonnées géographiques ?",
    "Comment localiser un lieu sur une carte ?",
    "Comment situer un lieu par rapport à un repère fixe ?"
  ],
  strategies: ["Observation directe (sortie dans la cour)", "Exercices pratiques", "Travail en petits groupes"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la démarche du géographe (leçon précédente).", activiteEleve:"Rappellent OBLODEXCO.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Écoutent et reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Constitue les groupes ; distribue les consignes.", activiteEleve:"Lisent et discutent les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème — observation directe", duree:"40 min", activiteProf:"Conduit une sortie dans la cour pour situer des repères fixes.", activiteEleve:"Identifient les points cardinaux et situent des repères de l'établissement.", support:"Boussole, cour de l'école"},
    {phase:"Mise en commun, correction, structuration", duree:"25 min", activiteProf:"Fait restituer les observations ; corrige.", activiteEleve:"Présentent leurs repérages.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Fait construire la rose des vents et copier le résumé.", activiteEleve:"Réalisent la rose des vents ; copient le résumé.", support:"Cahier, règle"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Propose un exercice de repérage.", activiteEleve:"Localisent un point sur un croquis simple.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. Les points cardinaux", texte:"Nord, Sud, Est, Ouest, et les points intermédiaires (Nord-Est, Nord-Ouest, Sud-Est, Sud-Ouest), représentés par la rose des vents."},
    {titre:"2. Les coordonnées géographiques", texte:"La latitude et la longitude permettent de localiser précisément un lieu sur la Terre grâce au réseau de méridiens et de parallèles."},
    {titre:"3. Localiser un lieu sur une carte", texte:"On utilise le titre, l'échelle, la légende et les coordonnées pour situer un lieu ou une région sur une carte."},
    {titre:"4. Se situer par rapport à un repère fixe", texte:"On indique la position d'un lieu en le comparant à un élément connu et stable de l'espace (un bâtiment, un carrefour, un cours d'eau)."}
  ],
  evaluation: "1) Citez les quatre points cardinaux principaux. 2) En vous servant du plan de votre établissement, situez la classe de 6e par rapport à la direction.",
  devoirMaison: "Réalisez le croquis de votre trajet habituel de la maison à l'école en indiquant au moins deux repères fixes et l'orientation générale (nord)."
},

g3: {
  leconTitre: "De l'espace réel à l'espace schématisé",
  theme: "Thème 1 — Maîtriser son espace de vie",
  competence: "Résoudre des situations de vie liées à la compréhension des faits géographiques de son milieu et à la maîtrise de son espace de vie.",
  documentation: ["Géographie 6e, collection Hatier", "Carte administrative du Togo"],
  supportsDidactiques: "Cartes murales, croquis du Togo, règle graduée, mètre ruban",
  preRequis: "Rappeler les points cardinaux et les coordonnées géographiques",
  capacitesContenus: [
    ["Présenter les éléments d'une carte","Définition de la carte géographique ; éléments d'une carte"],
    ["Lire une carte","Démarche de lecture d'une carte ; lecture d'une carte"]
  ],
  situationProbleme: "Le maire du village de Kodjo a affiché un plan de lotissement pour la construction d'un nouveau marché, mais Kodjo ne comprend ni l'échelle, ni la légende, ni les signes utilisés sur ce plan. Il aimerait comprendre comment lire un tel document afin de savoir où sera implanté le futur marché par rapport à sa maison.",
  consignes: [
    "Qu'est-ce qu'une carte géographique ?",
    "Quels sont les éléments qui composent une carte ?",
    "Comment calcule-t-on et utilise-t-on l'échelle ?",
    "Quelle démarche suivre pour lire une carte ?"
  ],
  strategies: ["Exploitation de documents cartographiques", "Exercices pratiques de mesure et de calcul d'échelle", "Travail individuel et en petits groupes"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur les points cardinaux et les coordonnées.", activiteEleve:"Répondent oralement.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP et le plan du marché.", activiteEleve:"Observent le plan, reformulent la SP.", support:"Plan de lotissement (image)"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Constitue les groupes.", activiteEleve:"Discutent des consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème — identification des éléments d'une carte", duree:"40 min", activiteProf:"Fait observer une carte du Togo ; guide l'identification du titre, de la légende, de l'orientation, de l'échelle.", activiteEleve:"Identifient et notent les éléments observés.", support:"Carte murale du Togo"},
    {phase:"Résolution du problème — calcul d'échelle et mesures", duree:"60 min", activiteProf:"Propose des exercices de calcul d'échelle (numérique et graphique).", activiteEleve:"Calculent des distances réelles à partir de la carte.", support:"Règle graduée, carte"},
    {phase:"Mise en commun, correction, structuration", duree:"60 min", activiteProf:"Corrige les exercices ; fait construire le plan de la classe.", activiteEleve:"Réalisent le plan de la classe à l'échelle donnée.", support:"Mètre ruban, cahier de brouillon"},
    {phase:"Institutionnalisation (trace écrite)", duree:"20 min", activiteProf:"Fait reproduire le croquis du Togo ; dicte le résumé.", activiteEleve:"Reproduisent le croquis ; copient le résumé.", support:"Cahier, crayon de couleur"},
    {phase:"Évaluation formative", duree:"20 min", activiteProf:"Fait lire une carte simple donnée en exercice.", activiteEleve:"Répondent aux questions de lecture de carte.", support:"Extrait de carte, cahier d'exercices"}
  ],
  resume: [
    {titre:"1. Définition de la carte", texte:"La carte géographique est une représentation réduite, simplifiée et conventionnelle de tout ou partie de la surface terrestre."},
    {titre:"2. Les éléments d'une carte", texte:"Le titre, l'échelle (numérique ou graphique), la légende, l'orientation et les figurés conventionnels."},
    {titre:"3. Calculer une échelle", texte:"L'échelle indique le rapport entre une distance sur la carte et la distance réelle correspondante sur le terrain."},
    {titre:"4. Lire une carte", texte:"On observe d'abord le titre, puis l'échelle et la légende, avant d'analyser les figurés pour comprendre les informations représentées."}
  ],
  evaluation: "1) Citez les éléments indispensables d'une carte. 2) Une distance de 5 cm sur une carte à l'échelle 1/100 000 correspond à quelle distance réelle ?",
  devoirMaison: "Réalisez le plan de votre chambre ou de votre salon en choisissant vous-même une échelle adaptée, avec titre, légende et orientation."
},

g4: {
  leconTitre: "Ménager l'atmosphère",
  theme: "Thème 2 — L'homme et son environnement",
  competence: "Résoudre les problèmes liés à l'interaction entre l'homme et son environnement.",
  documentation: ["Géographie 6e, collection Hatier", "Documents sur la pollution atmosphérique"],
  supportsDidactiques: "Schéma des couches de l'atmosphère, images de pollution",
  preRequis: "Rappeler les éléments et la lecture d'une carte",
  capacitesContenus: [
    ["Réaliser la coupe verticale de l'atmosphère","Coupe verticale de l'atmosphère : les différentes couches"],
    ["Relever le rôle de l'atmosphère","Rôle de l'atmosphère terrestre"],
    ["Identifier les menaces sur l'atmosphère","Menaces sur l'atmosphère : pollution, destruction"],
    ["Adopter des comportements civiques et citoyens","Comportements en faveur de la protection de l'atmosphère"]
  ],
  situationProbleme: "Dans le quartier d'Afi, un atelier de mécanique brûle chaque jour des pneus usés, dégageant une épaisse fumée noire. Plusieurs habitants se plaignent de maux de tête et de toux persistante. Afi se demande pourquoi cette fumée dérange autant et ce que cela peut changer dans l'air qu'ils respirent tous.",
  consignes: [
    "Comment se présente l'atmosphère terrestre ?",
    "Quel est le rôle de l'atmosphère pour les êtres vivants ?",
    "Quelles sont les menaces qui pèsent sur l'atmosphère ?",
    "Quels comportements adopter pour la protéger ?"
  ],
  strategies: ["Exploitation d'images et de schémas", "Discussion dirigée", "Brainstorming", "Travail en petits groupes"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur le thème 1.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent la SP.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait observer le schéma des couches de l'atmosphère et des images de pollution.", activiteEleve:"Analysent les documents, identifient rôle et menaces.", support:"Schéma, images"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer, corrige, structure les réponses.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Fait reproduire le schéma de la coupe verticale ; dicte le résumé.", activiteEleve:"Copient le schéma et le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Propose un mini-débat sur des gestes civiques.", activiteEleve:"Proposent des actions concrètes.", support:"Oral"}
  ],
  resume: [
    {titre:"1. La coupe verticale de l'atmosphère", texte:"L'atmosphère comprend plusieurs couches superposées, dont la troposphère (où se produisent les phénomènes météorologiques), la stratosphère (qui contient la couche d'ozone), puis les couches plus hautes."},
    {titre:"2. Le rôle de l'atmosphère", texte:"Elle protège la Terre des rayons solaires nocifs, permet la respiration des êtres vivants et régule le climat."},
    {titre:"3. Les menaces sur l'atmosphère", texte:"La pollution par les fumées industrielles et domestiques, les gaz d'échappement, les feux de brousse et la déforestation."},
    {titre:"4. Comportements civiques pour la protéger", texte:"Éviter de brûler les déchets, planter des arbres, limiter les fumées, sensibiliser son entourage."}
  ],
  evaluation: "1) Citez deux rôles de l'atmosphère. 2) Proposez deux actions civiques pour lutter contre la pollution de l'air dans votre quartier.",
  devoirMaison: "Observez votre quartier pendant deux jours et notez une source de pollution de l'air que vous y trouvez, en proposant une solution."
},

g5: {
  leconTitre: "L'eau, une ressource indispensable",
  theme: "Thème 2 — L'homme et son environnement",
  competence: "Résoudre les problèmes liés à l'interaction entre l'homme et son environnement.",
  documentation: ["Géographie 6e, collection Hatier", "Documents sur la gestion de l'eau au Togo"],
  supportsDidactiques: "Cartes des points d'eau du Togo, images de sources d'eau",
  preRequis: "Rappeler le rôle et les menaces sur l'atmosphère",
  capacitesContenus: [
    ["Présenter la répartition des eaux","Répartition des eaux : eaux de surface, eaux souterraines"],
    ["Montrer l'importance de l'eau","Importance de l'eau"],
    ["Identifier les menaces sur l'eau","Menaces sur l'eau : pollution, rareté, gaspillage"],
    ["Adopter des comportements responsables","Bonne gestion et économie de l'eau"]
  ],
  situationProbleme: "Dans le village de Séléyo, le seul forage tombe souvent en panne et certains habitants se rabattent alors sur l'eau d'un marigot proche, sans la traiter. Plusieurs enfants souffrent régulièrement de maladies liées à l'eau. Les habitants demandent aux élèves de la classe de 6e de les aider à comprendre l'importance de l'eau et comment mieux la gérer.",
  consignes: [
    "Comment les eaux sont-elles réparties sur la Terre et au Togo ?",
    "Pourquoi l'eau est-elle importante ?",
    "Quelles sont les menaces qui pèsent sur l'eau ?",
    "Quels comportements adopter pour bien gérer l'eau ?"
  ],
  strategies: ["Observation directe", "Discussion dirigée", "Exploitation de documents", "Jeu de rôle / sketch"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la leçon précédente.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait exploiter des documents sur la répartition et les usages de l'eau.", activiteEleve:"Identifient répartition, importance et menaces.", support:"Documents, images"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation / élaboration d'un mini-code de conduite", duree:"10 min", activiteProf:"Anime l'élaboration collective d'un mini-code de bonne gestion de l'eau.", activiteEleve:"Proposent des règles pour la classe.", support:"Affiche de classe"}
  ],
  resume: [
    {titre:"1. Répartition des eaux", texte:"On distingue les eaux de surface (mers, fleuves, lacs) et les eaux souterraines (nappes phréatiques, sources)."},
    {titre:"2. Importance de l'eau", texte:"L'eau est indispensable à la vie, à l'agriculture, à l'élevage, à l'hygiène et à de nombreuses activités économiques."},
    {titre:"3. Menaces sur l'eau", texte:"La pollution, le gaspillage et la rareté saisonnière menacent la disponibilité de l'eau."},
    {titre:"4. Comportements responsables", texte:"Économiser l'eau, éviter de la polluer, entretenir les points d'eau, sensibiliser la communauté."}
  ],
  evaluation: "1) Distinguez eaux de surface et eaux souterraines. 2) Proposez deux gestes pour économiser l'eau à l'école.",
  devoirMaison: "Enquêtez auprès de votre famille sur les sources d'eau utilisées à la maison et notez une menace qui pèse sur cette source."
},

g6: {
  leconTitre: "Découvrir le relief",
  theme: "Thème 2 — L'homme et son environnement",
  competence: "Résoudre les problèmes liés à l'interaction entre l'homme et son environnement.",
  documentation: ["Géographie 6e, collection Hatier", "Carte physique du Togo"],
  supportsDidactiques: "Carte physique du Togo, images de formes de relief",
  preRequis: "Rappeler l'importance et les menaces sur l'eau",
  capacitesContenus: [
    ["Présenter le relief","Définition du relief ; types de relief"],
    ["Identifier les différentes formes de relief","Formes du relief continental et du relief océanique"],
    ["Identifier les risques liés au relief","Érosion, coulées de boue, éboulement, chute de blocs"],
    ["Participer à la protection contre les risques liés au relief","Actions individuelles et communautaires de protection"]
  ],
  situationProbleme: "Après de fortes pluies, un pan de colline s'est effondré près du village de Bassar, endommageant deux maisons construites au pied de la pente. Les habitants s'interrogent sur les causes de cet éboulement et sur les précautions à prendre pour l'avenir.",
  consignes: [
    "Qu'est-ce que le relief et quels en sont les types ?",
    "Quelles sont les principales formes du relief ?",
    "Quels risques sont liés au relief ?",
    "Comment se protéger de ces risques ?"
  ],
  strategies: ["Observation de documents visuels", "Discussion dirigée", "Exploitation de la carte physique du Togo", "Sensibilisation"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la leçon précédente.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte, image de l'éboulement"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait observer la carte physique et des images des différentes formes de relief.", activiteEleve:"Identifient les formes de relief et les risques associés.", support:"Carte physique du Togo, images"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Fait proposer des mesures de protection.", activiteEleve:"Proposent des actions concrètes.", support:"Oral"}
  ],
  resume: [
    {titre:"1. Définition et types de relief", texte:"Le relief désigne l'ensemble des formes de la surface terrestre. On distingue le relief continental et le relief océanique."},
    {titre:"2. Les formes du relief continental", texte:"Les montagnes, les plaines, les plateaux et les collines."},
    {titre:"3. Les formes du relief océanique", texte:"Le plateau continental, la fosse océanique et la dorsale océanique."},
    {titre:"4. Risques et protection", texte:"L'érosion, les éboulements et les coulées de boue peuvent être limités par le reboisement des versants et l'évitement des constructions sur les pentes instables."}
  ],
  evaluation: "1) Citez deux formes du relief continental. 2) Proposez une mesure pour limiter les risques d'éboulement.",
  devoirMaison: "Décrivez en quelques lignes le relief observé dans votre localité (plaine, colline, montagne…) et un risque éventuel lié à ce relief."
},

g7: {
  leconTitre: "Protéger le sol de son milieu",
  theme: "Thème 2 — L'homme et son environnement",
  competence: "Résoudre les problèmes liés à l'interaction entre l'homme et son environnement.",
  documentation: ["Géographie 6e, collection Hatier", "Documents sur l'érosion des sols au Togo"],
  supportsDidactiques: "Images d'érosion du sol, échantillons de sol",
  preRequis: "Rappeler les formes de relief et les risques associés",
  capacitesContenus: [
    ["Définir sol et érosion de sol","Notions de sol et d'érosion de sol"],
    ["Énumérer les facteurs d'érosion du sol","Facteurs d'érosion : eau, vent, actions anthropiques"],
    ["Relever les conséquences de l'érosion du sol","Conséquences de l'érosion du sol"],
    ["Proposer des mesures de protection du sol","Mesures de protection du sol contre l'érosion"]
  ],
  situationProbleme: "Le champ de maïs du père d'Ama, cultivé plusieurs années sans précaution sur une pente, perd chaque saison des pluies une bonne partie de sa terre fertile emportée vers le bas-fond. Le rendement baisse d'année en année. Ama souhaite comprendre pourquoi et comment protéger le sol du champ familial.",
  consignes: [
    "Qu'est-ce que le sol et l'érosion du sol ?",
    "Quels sont les facteurs qui provoquent l'érosion du sol ?",
    "Quelles conséquences a l'érosion du sol ?",
    "Quelles mesures prendre pour protéger le sol ?"
  ],
  strategies: ["Observation directe", "Exploitation de documents", "Discussion dirigée", "Témoignages"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur le relief.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte, image d'un champ érodé"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait observer des images d'érosion et des échantillons de sol.", activiteEleve:"Identifient facteurs et conséquences de l'érosion.", support:"Images, échantillons de sol"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation / mini-projet", duree:"10 min", activiteProf:"Propose d'esquisser un mini-projet de protection de la cour contre l'érosion.", activiteEleve:"Proposent des actions concrètes.", support:"Oral, affiche"}
  ],
  resume: [
    {titre:"1. Définitions", texte:"Le sol est la couche superficielle et fertile de la terre. L'érosion du sol est son usure et son entraînement progressif sous l'effet de différents facteurs."},
    {titre:"2. Facteurs de l'érosion", texte:"L'eau (ruissellement), le vent, et les actions humaines (déboisement, mauvaises pratiques agricoles)."},
    {titre:"3. Conséquences", texte:"Perte de fertilité, baisse des rendements agricoles, ensablement des cours d'eau, aggravation de la pauvreté rurale."},
    {titre:"4. Mesures de protection", texte:"Le reboisement, les cultures en courbes de niveau, les diguettes anti-érosives, la jachère et la lutte contre les feux de brousse."}
  ],
  evaluation: "1) Citez deux facteurs de l'érosion du sol. 2) Proposez une mesure de protection adaptée à un champ en pente.",
  devoirMaison: "Observez un endroit érodé près de chez vous et décrivez ce qui, selon vous, en est la cause principale."
},

g8: {
  leconTitre: "Préserver la végétation",
  theme: "Thème 2 — L'homme et son environnement",
  competence: "Résoudre les problèmes liés à l'interaction entre l'homme et son environnement.",
  documentation: ["Géographie 6e, collection Hatier", "Documents sur la déforestation au Togo"],
  supportsDidactiques: "Images de types de végétation, carte de la végétation du Togo",
  preRequis: "Rappeler les facteurs et conséquences de l'érosion du sol",
  capacitesContenus: [
    ["Distinguer les grands types de végétation","Définition et types de végétation"],
    ["Déterminer le rôle de la végétation","Rôle de la végétation : protection, alimentation, soins, ornement, stabilisation du climat"],
    ["Identifier les menaces sur la végétation","Menaces : destruction, contamination"],
    ["Proposer des actions de protection de la végétation","Actions de protection de la végétation"]
  ],
  situationProbleme: "Depuis quelques années, la forêt qui bordait le village de Yao a presque disparu à cause des coupes de bois pour le charbon. Les anciens racontent qu'il y faisait autrefois plus frais et que le gibier y était abondant. Yao veut comprendre le rôle de cette végétation disparue et ce qui pourrait être fait pour la faire revenir.",
  consignes: [
    "Qu'est-ce que la végétation et quels sont ses types ?",
    "Quel est le rôle de la végétation ?",
    "Quelles sont les menaces qui pèsent sur elle ?",
    "Quelles actions mener pour la protéger ?"
  ],
  strategies: ["Observation de documents visuels", "Discussion dirigée", "Exploitation de la carte de végétation"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur l'érosion du sol.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte, image de zone déboisée"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait observer des images de types de végétation et de déforestation.", activiteEleve:"Identifient types, rôle et menaces de la végétation.", support:"Images, carte de végétation"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation / plan d'action", duree:"10 min", activiteProf:"Fait proposer un mini plan de reboisement de la cour.", activiteEleve:"Proposent des actions concrètes.", support:"Oral, affiche"}
  ],
  resume: [
    {titre:"1. Définition et types de végétation", texte:"La végétation est l'ensemble des plantes qui couvrent un espace. On distingue la végétation naturelle et la végétation artificielle, selon le milieu (terrestre, aquatique) et le climat."},
    {titre:"2. Rôle de la végétation", texte:"Elle protège le sol, fournit alimentation, bois et remèdes, embellit le cadre de vie et contribue à stabiliser le climat."},
    {titre:"3. Menaces sur la végétation", texte:"La déforestation, les feux de brousse, la surexploitation du bois et la pollution."},
    {titre:"4. Actions de protection", texte:"Le reboisement, la lutte contre les feux de brousse, la sensibilisation et l'exploitation raisonnée des forêts."}
  ],
  evaluation: "1) Citez deux rôles de la végétation. 2) Proposez deux actions pour lutter contre la déforestation dans votre milieu.",
  devoirMaison: "Plantez ou observez un jeune arbre près de chez vous et notez, en quelques lignes, son évolution au fil de la semaine."
},

/* ================= HISTOIRE ================= */

h1: {
  leconTitre: "L'histoire : définition, objet",
  theme: "Thème 1 — Introduction à la science historique",
  competence: "Résoudre une situation-problème qui fait appel à la connaissance de la méthodologie de la science historique.",
  documentation: ["Histoire 6e, collection Hatier", "Histoire 6e, collection IPAM"],
  supportsDidactiques: "Textes, images d'archives",
  preRequis: "Citer les disciplines étudiées au CM2",
  capacitesContenus: [
    ["Déterminer l'objet de l'histoire","Définition de l'histoire ; notion d'événement ; étude des faits et civilisations passés"],
    ["Expliquer l'intérêt de l'histoire","Connaissance de la vie des hommes du passé ; utilité pour corriger le présent et préparer le futur"],
    ["Définir la notion d'esprit critique","Définition de l'esprit critique (EPEV)"]
  ],
  situationProbleme: "Le grand-père d'Edem raconte souvent des histoires anciennes de leur famille et de leur région, mais Edem se demande pourquoi il faudrait s'intéresser à des faits aussi anciens alors que le monde a tellement changé. Il aimerait comprendre à quoi sert vraiment de connaître le passé.",
  consignes: [
    "Que signifie le mot histoire pour un scientifique ?",
    "Quel est l'objet d'étude de l'histoire ?",
    "En quoi la connaissance du passé est-elle utile aujourd'hui ?",
    "Qu'est-ce que l'esprit critique face à un document ?"
  ],
  strategies: ["Exposé", "Discussion dirigée", "Brainstorming", "Exploitation de documents"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur les disciplines vues au CM2.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"7 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"13 min", activiteProf:"Fait exploiter un court texte définissant l'histoire.", activiteEleve:"Recherchent définition et intérêt de l'histoire.", support:"Texte"},
    {phase:"Mise en commun, correction, structuration", duree:"15 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"7 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"3 min", activiteProf:"Pose une question rapide de vérification.", activiteEleve:"Répondent oralement.", support:"Oral"}
  ],
  resume: [
    {titre:"1. Définition de l'histoire", texte:"L'histoire est la science qui étudie les faits et les événements passés des hommes et des civilisations."},
    {titre:"2. L'objet de l'histoire", texte:"Elle a pour objet la connaissance de la vie des hommes du passé, à partir de leurs événements marquants."},
    {titre:"3. Intérêt de l'histoire", texte:"Connaître le passé permet de comprendre le présent, d'en tirer des leçons et de mieux préparer l'avenir."},
    {titre:"4. L'esprit critique (EPEV)", texte:"C'est la capacité à examiner, questionner et vérifier une information avant de l'accepter comme vraie."}
  ],
  evaluation: "1) Donnez la définition de l'histoire. 2) Expliquez en une phrase pourquoi il est utile de connaître le passé.",
  devoirMaison: "Demandez à un membre âgé de votre famille de vous raconter un événement ancien de votre localité et résumez-le en cinq lignes."
},

h2: {
  leconTitre: "Les sources de l'histoire",
  theme: "Thème 1 — Introduction à la science historique",
  competence: "Résoudre une situation-problème qui fait appel à la connaissance de la méthodologie de la science historique.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Extraits d'archives, objets anciens (images), enregistrement de tradition orale",
  preRequis: "Rappeler la définition et l'intérêt de l'histoire",
  capacitesContenus: [
    ["Distinguer les différentes sources de l'histoire","Sources écrites (archives, journaux, correspondances) ; sources orales (traditions, chansons, contes, rituels) ; sources muettes (vestiges archéologiques)"]
  ],
  situationProbleme: "Pour un exposé sur l'histoire de son village, Akouvi ne trouve aucun livre écrit à ce sujet. Un vieux sage du village lui propose de lui raconter ce qu'il sait, tandis qu'un archéologue de passage lui montre des poteries retrouvées sous terre. Akouvi se demande si ces informations, différentes d'un livre, peuvent aussi être considérées comme des sources fiables pour écrire l'histoire.",
  consignes: [
    "Qu'appelle-t-on source de l'histoire ?",
    "Quelles sont les sources écrites de l'histoire ?",
    "Quelles sont les sources orales de l'histoire ?",
    "Quelles sont les sources muettes de l'histoire ?"
  ],
  strategies: ["Exposé", "Discussion dirigée", "Enquête-découverte", "Exploitation de documents"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la définition de l'histoire.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"7 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"13 min", activiteProf:"Fait classer des exemples de sources en trois catégories.", activiteEleve:"Classent les sources.", support:"Exemples imagés"},
    {phase:"Mise en commun, correction, structuration", duree:"15 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs classements.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"7 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"3 min", activiteProf:"Pose une question de vérification.", activiteEleve:"Répondent.", support:"Oral"}
  ],
  resume: [
    {titre:"1. Notion de source historique", texte:"Une source de l'histoire est tout document ou témoignage qui permet de connaître le passé."},
    {titre:"2. Les sources écrites", texte:"Documents d'archives, journaux, correspondances, actes officiels."},
    {titre:"3. Les sources orales", texte:"Traditions orales, chansons, contes, proverbes, rituels transmis de génération en génération."},
    {titre:"4. Les sources muettes", texte:"Vestiges archéologiques : outils, poteries, ruines, monuments retrouvés sur un site."}
  ],
  evaluation: "1) Citez les trois catégories de sources de l'histoire. 2) Donnez un exemple togolais pour chaque catégorie.",
  devoirMaison: "Trouvez chez vous ou dans votre entourage un exemple de source orale (conte, chanson, proverbe) et notez-en le contenu en quelques lignes."
},

h3: {
  leconTitre: "La notion de chronologie",
  theme: "Thème 1 — Introduction à la science historique",
  competence: "Résoudre une situation-problème qui fait appel à la connaissance de la méthodologie de la science historique.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Frise chronologique vierge, règle graduée",
  preRequis: "Rappeler les sources de l'histoire",
  capacitesContenus: [
    ["Identifier les unités de mesure du temps","Millénaire, siècle, décennie, année, mois, semaine, jour, heure"],
    ["Construire une frise chronologique","Définition de la chronologie et d'une frise ; lecture et construction d'une frise chronologique"]
  ],
  situationProbleme: "Dans un livre d'histoire, Kossi lit que l'indépendance du Togo a eu lieu au XXe siècle, mais il ne comprend pas ce que représente un siècle ni comment situer cet événement par rapport à d'autres dates qu'il connaît. Il souhaite apprendre à organiser les événements du passé dans le temps.",
  consignes: [
    "Quelles sont les unités de mesure du temps utilisées en histoire ?",
    "Qu'est-ce qu'une frise chronologique ?",
    "Comment construit-on une frise chronologique ?"
  ],
  strategies: ["Exposé", "Exercices pratiques", "Enquête-découverte"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur les sources de l'histoire.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"7 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"13 min", activiteProf:"Fait convertir des dates en siècles et millénaires.", activiteEleve:"S'exercent à la conversion.", support:"Exercices, cahier de brouillon"},
    {phase:"Mise en commun, correction, structuration", duree:"15 min", activiteProf:"Corrige et fait construire une frise chronologique.", activiteEleve:"Construisent une frise simple.", support:"Règle, cahier"},
    {phase:"Institutionnalisation (trace écrite)", duree:"7 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"3 min", activiteProf:"Pose une question de conversion rapide.", activiteEleve:"Répondent.", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les unités de mesure du temps", texte:"Le millénaire (1000 ans), le siècle (100 ans), la décennie (10 ans), l'année, le mois, la semaine, le jour et l'heure."},
    {titre:"2. La chronologie et la frise", texte:"La chronologie est l'étude de la succession des événements dans le temps. La frise chronologique est une ligne représentant cette succession, graduée selon une échelle de temps."},
    {titre:"3. Construire une frise", texte:"On trace une ligne horizontale, on choisit une échelle de temps régulière, puis on y place les dates et événements dans l'ordre."}
  ],
  evaluation: "1) Combien d'années comptent un siècle et un millénaire ? 2) Placez sur une frise simple deux dates de votre choix.",
  devoirMaison: "Construisez une petite frise chronologique de votre propre vie en y plaçant trois événements marquants avec leur date."
},

h4: {
  leconTitre: "Les grandes divisions du temps à l'échelle humaine",
  theme: "Thème 1 — Introduction à la science historique",
  competence: "Résoudre une situation-problème qui fait appel à la connaissance de la méthodologie de la science historique.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Frise chronologique des grandes périodes de l'histoire",
  preRequis: "Rappeler les unités de mesure du temps et la frise chronologique",
  capacitesContenus: [
    ["Distinguer les grandes divisions du temps historique","La Préhistoire ; l'Histoire"],
    ["Identifier les grandes périodes de chaque division","Paléolithique, Néolithique ; Antiquité, Moyen-Âge, Temps modernes, Époque contemporaine"],
    ["Situer les grandes périodes sur un axe chronologique","Construction d'une frise des grandes périodes de l'histoire"]
  ],
  situationProbleme: "En visitant un musée à Lomé, Sena entend un guide parler de la « Préhistoire » et de « l'Antiquité » comme de deux périodes très différentes, sans que le guide précise clairement ce qui les distingue. Sena voudrait comprendre comment le temps humain est découpé en grandes périodes.",
  consignes: [
    "Quelles sont les deux grandes divisions du temps historique ?",
    "Quelles sont les périodes qui composent chacune de ces divisions ?",
    "Comment situer ces grandes périodes sur un axe chronologique ?"
  ],
  strategies: ["Exposé", "Discussion dirigée", "Travail en petits groupes"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la frise chronologique.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"7 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"13 min", activiteProf:"Fait distinguer Préhistoire et Histoire à partir d'un texte.", activiteEleve:"Identifient le critère de séparation (l'écriture).", support:"Texte"},
    {phase:"Mise en commun, correction, structuration", duree:"15 min", activiteProf:"Corrige et fait construire la frise des grandes périodes.", activiteEleve:"Construisent la frise.", support:"Règle, cahier"},
    {phase:"Institutionnalisation (trace écrite)", duree:"7 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"3 min", activiteProf:"Pose une question de vérification.", activiteEleve:"Répondent.", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les deux grandes divisions", texte:"La Préhistoire (des origines de l'humanité jusqu'à l'invention de l'écriture) et l'Histoire (depuis l'invention de l'écriture)."},
    {titre:"2. Les périodes de la Préhistoire", texte:"Le Paléolithique (âge de la pierre taillée) et le Néolithique (âge de la pierre polie)."},
    {titre:"3. Les périodes de l'Histoire", texte:"L'Antiquité, le Moyen-Âge, les Temps modernes et l'Époque contemporaine."}
  ],
  evaluation: "1) Quel événement marque le passage de la Préhistoire à l'Histoire ? 2) Citez les quatre grandes périodes de l'Histoire.",
  devoirMaison: "Construisez une frise chronologique plaçant les six grandes périodes étudiées, de la Préhistoire à l'Époque contemporaine."
},

h5: {
  leconTitre: "L'apparition de l'Homme en Afrique. Les vestiges préhistoriques en Afrique",
  theme: "Thème 2 — La Préhistoire",
  competence: "Résoudre une situation-problème faisant appel à la connaissance de la vie des hommes de la Préhistoire.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Carte de l'Afrique avec les sites préhistoriques, images d'outils préhistoriques",
  preRequis: "Rappeler les grandes divisions du temps historique",
  capacitesContenus: [
    ["Localiser les premiers sites d'habitat de l'Homme","Sites : Oldoway, Asselar, Vallée du Rift, lac Tchad (Tumaï)"],
    ["Relever l'importance de l'apparition de l'Homme en Afrique","L'Afrique, berceau de l'humanité ; les premiers hommes étaient Noirs"],
    ["Caractériser la Préhistoire","Paléolithique et Néolithique : définitions et modes de vie"],
    ["Identifier des vestiges du Paléolithique et du Néolithique en Afrique","Carte des vestiges en Afrique"]
  ],
  situationProbleme: "Lors d'une émission scolaire, Nadège entend dire que « l'Afrique est le berceau de l'humanité ». Elle ne comprend pas bien ce que cela signifie ni comment les scientifiques peuvent affirmer une chose aussi ancienne. Elle demande à la classe de l'aider à comprendre où et comment l'Homme est apparu en Afrique.",
  consignes: [
    "Où se trouvent les premiers sites d'habitat de l'Homme en Afrique ?",
    "Pourquoi dit-on que l'Afrique est le berceau de l'humanité ?",
    "Quelles sont les caractéristiques du Paléolithique et du Néolithique ?",
    "Quels vestiges témoignent de cette période en Afrique ?"
  ],
  strategies: ["Exposé", "Exploitation de documents cartographiques", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur Préhistoire/Histoire.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait localiser les sites sur la carte d'Afrique et caractériser Paléolithique/Néolithique.", activiteEleve:"Localisent les sites, comparent les deux périodes.", support:"Carte d'Afrique, images"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Pose des questions de vérification.", activiteEleve:"Répondent.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. Les premiers sites d'habitat", texte:"Les plus anciens sites connus se trouvent notamment à Oldoway, Asselar, dans la Vallée du Rift et près du lac Tchad (site de Toumaï)."},
    {titre:"2. L'Afrique, berceau de l'humanité", texte:"Les fossiles humains les plus anciens ont été découverts en Afrique, ce qui en fait le continent d'origine de l'humanité ; les premiers hommes étaient noirs."},
    {titre:"3. Le Paléolithique et le Néolithique", texte:"Au Paléolithique (pierre taillée), l'homme vivait de chasse et de cueillette. Au Néolithique (pierre polie), il découvre l'agriculture, l'élevage et se sédentarise."},
    {titre:"4. Les vestiges", texte:"Outils en pierre taillée et polie, ossements et sites archéologiques retrouvés à travers l'Afrique."}
  ],
  evaluation: "1) Pourquoi dit-on que l'Afrique est le berceau de l'humanité ? 2) Donnez une différence entre le mode de vie au Paléolithique et au Néolithique.",
  devoirMaison: "Recherchez le nom d'un site préhistorique africain autre que ceux étudiés en classe et notez ce que l'on y a découvert."
},

h6: {
  leconTitre: "Archéologie et Préhistoire du Togo",
  theme: "Thème 2 — La Préhistoire",
  competence: "Résoudre une situation-problème faisant appel à la connaissance de la vie des hommes de la Préhistoire.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Carte du Togo avec les sites archéologiques (Bassar, Tado, Notsè, Aného, Nano, Sogou, Namoudjoga)",
  preRequis: "Rappeler les caractéristiques du Paléolithique et du Néolithique",
  capacitesContenus: [
    ["Localiser les sites archéologiques du Togo","Définition de l'archéologie ; localisation sur une carte du Togo"],
    ["Identifier les vestiges archéologiques du Togo","Bassar et Tado (fer), pavements de Notsè, coquillages d'Aného, grottes de Nano, dessins rupestres de Sogou, abri sous roche de Namoudjoga"],
    ["Décrire la vie des hommes du Paléolithique et du Néolithique au Togo","Modes de vie comparés"]
  ],
  situationProbleme: "Lors d'une sortie scolaire, la classe apprend que des vestiges très anciens ont été retrouvés à Bassar et à Notsè. Un élève demande comment les archéologues savent que ces objets sont anciens et ce qu'ils nous apprennent sur la vie des premiers habitants du Togo.",
  consignes: [
    "Qu'est-ce que l'archéologie ?",
    "Où se trouvent les principaux sites archéologiques du Togo ?",
    "Quels vestiges y a-t-on découverts ?",
    "Comment vivaient les hommes de la Préhistoire au Togo ?"
  ],
  strategies: ["Exposé", "Exploitation de la carte du Togo", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur le Paléolithique/Néolithique.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait localiser les sites togolais sur la carte et identifier les vestiges.", activiteEleve:"Localisent et identifient les vestiges.", support:"Carte du Togo, images"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Pose des questions de vérification.", activiteEleve:"Répondent.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. L'archéologie", texte:"L'archéologie est l'étude des civilisations disparues à partir des vestiges qu'elles ont laissés."},
    {titre:"2. Les sites archéologiques du Togo", texte:"Bassar et Tado (travail du fer), Notsè (pavements), Aného (coquillages), Nano (grottes), Sogou (dessins rupestres), Namoudjoga (abri sous roche)."},
    {titre:"3. La vie au Togo pendant la Préhistoire", texte:"Au Paléolithique : nomadisme, chasse et cueillette. Au Néolithique : sédentarisation, agriculture et élevage."}
  ],
  evaluation: "1) Définissez l'archéologie. 2) Citez deux sites archéologiques du Togo et ce qu'on y a découvert.",
  devoirMaison: "Sur un fond de carte du Togo, placez et nommez trois sites archéologiques étudiés en classe."
},

h7: {
  leconTitre: "L'Égypte ancienne : présentation (le pays, les hommes, les grandes périodes)",
  theme: "Thème 3 — Les civilisations de l'Afrique",
  competence: "Résoudre des situations-problèmes de la vie courante faisant appel à la connaissance des civilisations de l'Afrique.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Carte de l'Afrique avec l'Égypte ancienne, images des pyramides et temples",
  preRequis: "Rappeler la vie des hommes de la Préhistoire au Togo",
  capacitesContenus: [
    ["Localiser l'Égypte ancienne sur une carte d'Afrique","Carte de l'Afrique comportant l'Égypte ancienne"],
    ["Décrire la société égyptienne","Rôle du pharaon, des prêtres/scribes, des paysans, des esclaves"],
    ["Déterminer les grandes périodes de l'histoire égyptienne","Périodes et pharaons marquants"],
    ["Relever les grands monuments de l'histoire égyptienne","Pyramides et temples égyptiens, leur rôle"]
  ],
  situationProbleme: "En feuilletant un magazine, Kékéli découvre des photos impressionnantes des pyramides d'Égypte et se demande qui a pu construire de tels monuments il y a des milliers d'années, et comment la société égyptienne était organisée pour réussir un tel exploit.",
  consignes: [
    "Où se situe l'Égypte ancienne sur la carte d'Afrique ?",
    "Comment était organisée la société égyptienne ?",
    "Quelles sont les grandes périodes de l'histoire égyptienne ?",
    "Quels sont les grands monuments de cette civilisation ?"
  ],
  strategies: ["Discussion dirigée", "Exploitation de la carte et d'images", "Exposé"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la Préhistoire au Togo.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte, image des pyramides"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"30 min", activiteProf:"Fait localiser l'Égypte, décrire la société et les monuments.", activiteEleve:"Analysent la carte et les images.", support:"Carte d'Afrique, images"},
    {phase:"Mise en commun, correction, structuration", duree:"35 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"15 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"10 min", activiteProf:"Pose des questions de vérification.", activiteEleve:"Répondent.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. Localisation", texte:"L'Égypte ancienne se situe au nord-est de l'Afrique, le long de la vallée du Nil."},
    {titre:"2. La société égyptienne", texte:"Le pharaon dirige le pays et est considéré comme un dieu vivant ; les prêtres et les scribes occupent des positions importantes ; les paysans et les esclaves constituent la majorité de la population et assurent les travaux."},
    {titre:"3. Les grandes périodes", texte:"L'histoire égyptienne se divise en plusieurs grandes périodes marquées par différents pharaons célèbres."},
    {titre:"4. Les grands monuments", texte:"Les pyramides, tombeaux monumentaux des pharaons, et les temples, dédiés au culte des divinités."}
  ],
  evaluation: "1) Où se situe l'Égypte ancienne ? 2) Quel était le rôle du pharaon dans la société égyptienne ?",
  devoirMaison: "Dessinez ou décrivez une pyramide égyptienne et expliquez en trois lignes à quoi elle servait."
},

h8: {
  leconTitre: "L'héritage de la civilisation égyptienne",
  theme: "Thème 3 — Les civilisations de l'Afrique",
  competence: "Résoudre des situations-problèmes de la vie courante faisant appel à la connaissance des civilisations de l'Afrique.",
  documentation: ["Histoire 6e, collection Hatier"],
  supportsDidactiques: "Images d'art égyptien, documents sur la religion égyptienne",
  preRequis: "Rappeler la société et les monuments de l'Égypte ancienne",
  capacitesContenus: [
    ["Décrire les traits principaux de la civilisation égyptienne","Art égyptien, activités économiques, place du Nil, religion égyptienne"],
    ["Montrer l'importance de l'héritage de la civilisation égyptienne","Momification, croyance en l'au-delà, écriture, irrigation, géométrie"]
  ],
  situationProbleme: "En cours de mathématiques, le professeur explique que certaines notions de géométrie utilisées aujourd'hui viennent de l'Égypte ancienne. Les élèves s'étonnent qu'une civilisation aussi ancienne ait pu laisser une influence encore visible de nos jours et veulent en savoir plus sur cet héritage.",
  consignes: [
    "Quels sont les traits principaux de la civilisation égyptienne (art, économie, religion) ?",
    "Quelle place occupait le Nil dans la vie des Égyptiens ?",
    "Quels aspects de la civilisation égyptienne ont été transmis jusqu'à aujourd'hui ?"
  ],
  strategies: ["Discussion dirigée", "Exploitation de documents et d'images"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur la société égyptienne.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"45 min", activiteProf:"Fait analyser des documents sur l'art, l'économie, le Nil et la religion égyptienne.", activiteEleve:"Recherchent et relèvent les traits de la civilisation.", support:"Documents, images"},
    {phase:"Mise en commun, correction, structuration", duree:"50 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"25 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"25 min", activiteProf:"Propose des questions de synthèse.", activiteEleve:"Répondent individuellement.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. Traits de la civilisation égyptienne", texte:"Un art marqué par l'architecture monumentale, la sculpture et la peinture ; une économie fondée sur l'agriculture irriguée et le commerce ; une religion polythéiste centrée sur le culte des morts."},
    {titre:"2. Le Nil, don de l'Égypte", texte:"Le Nil, par ses crues régulières, permettait l'irrigation des terres et fut essentiel à la prospérité agricole de l'Égypte ancienne."},
    {titre:"3. L'héritage égyptien", texte:"La momification, la croyance en la vie après la mort, l'écriture, les techniques d'irrigation et la géométrie comptent parmi les apports durables de cette civilisation."}
  ],
  evaluation: "1) Pourquoi dit-on que « l'Égypte est un don du Nil » ? 2) Citez deux éléments hérités de la civilisation égyptienne encore présents aujourd'hui.",
  devoirMaison: "Recherchez un exemple actuel (au Togo ou ailleurs) où l'on utilise encore une notion de géométrie héritée des Égyptiens anciens."
},

h9: {
  leconTitre: "La métallurgie du fer au Togo et ses conséquences",
  theme: "Thème 3 — Les civilisations de l'Afrique",
  competence: "Résoudre des situations-problèmes de la vie courante faisant appel à la connaissance des civilisations de l'Afrique.",
  documentation: ["Histoire 6e, collection Hatier", "Documents sur la métallurgie ancienne à Bassar"],
  supportsDidactiques: "Carte du Togo avec les sites métallurgiques, schéma d'un fourneau de réduction du fer",
  preRequis: "Rappeler l'héritage de la civilisation égyptienne",
  capacitesContenus: [
    ["Localiser les sites de la métallurgie ancienne du fer au Togo","Définition de la métallurgie ; carte des sites (Bassar…)"],
    ["Décrire les étapes du travail du fer","Réduction du minerai, forge, schéma d'un fourneau"],
    ["Présenter les conséquences de la métallurgie du fer au Togo","Conséquences techniques, sociales, économiques, politiques"]
  ],
  situationProbleme: "En visitant la région de Bassar, la classe découvre les vestiges d'anciens fourneaux ayant servi à fabriquer des outils en fer il y a plusieurs siècles. Les élèves s'interrogent sur la façon dont ce travail du fer se faisait autrefois et sur ce qu'il a changé dans la vie des populations de cette région.",
  consignes: [
    "Où se trouvaient les sites de la métallurgie ancienne du fer au Togo ?",
    "Comment se déroulait le travail du fer ?",
    "Quelles conséquences la métallurgie du fer a-t-elle eues au Togo ?"
  ],
  strategies: ["Discussion dirigée", "Exploitation de la carte et de schémas"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Interroge sur l'héritage égyptien.", activiteEleve:"Répondent.", support:"Oral"},
    {phase:"Présentation de la situation-problème", duree:"5 min", activiteProf:"Présente la SP.", activiteEleve:"Reformulent.", support:"Texte, image de fourneau"},
    {phase:"Appropriation et organisation du travail", duree:"10 min", activiteProf:"Forme les groupes.", activiteEleve:"S'approprient les consignes.", support:"Fiche de consignes"},
    {phase:"Résolution du problème (recherche en groupe)", duree:"45 min", activiteProf:"Fait localiser les sites et analyser le schéma du fourneau.", activiteEleve:"Localisent les sites, décrivent les étapes du travail du fer.", support:"Carte du Togo, schéma"},
    {phase:"Mise en commun, correction, structuration", duree:"50 min", activiteProf:"Fait exposer et corrige.", activiteEleve:"Exposent leurs solutions.", support:"Tableau"},
    {phase:"Institutionnalisation (trace écrite)", duree:"25 min", activiteProf:"Dicte le résumé.", activiteEleve:"Copient le résumé.", support:"Cahier"},
    {phase:"Évaluation formative", duree:"25 min", activiteProf:"Propose des questions de synthèse.", activiteEleve:"Répondent individuellement.", support:"Cahier d'exercices"}
  ],
  resume: [
    {titre:"1. La métallurgie et ses sites", texte:"La métallurgie est la transformation du minerai brut en fer. Au Togo, les principaux sites anciens se trouvent notamment à Bassar."},
    {titre:"2. Les étapes du travail du fer", texte:"Le minerai est réduit en loupe de fer dans un fourneau, puis travaillé à la forge pour fabriquer des outils et des armes."},
    {titre:"3. Les conséquences", texte:"Sur le plan technique, des outils plus résistants ; sur le plan économique, l'enrichissement des forgerons ; sur le plan social, l'émergence de groupes spécialisés ; sur le plan politique, la formation d'États puissants comme Bassar."}
  ],
  evaluation: "1) Définissez la métallurgie du fer. 2) Citez une conséquence économique et une conséquence sociale de la métallurgie du fer au Togo.",
  devoirMaison: "Expliquez en quelques lignes pourquoi la maîtrise du fer a pu donner du pouvoir et de la richesse à une communauté."
}

};
