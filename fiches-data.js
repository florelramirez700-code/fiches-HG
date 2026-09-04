const FICHES_DATA = {

g1: {
  leconTitre: "À la découverte de la géographie : définition, domaines, démarche et utilité",
  theme: "Thème 1 — Maîtriser son espace de vie",
  competence: "Résoudre des situations de vie liées à la compréhension des faits géographiques de son milieu et à la maîtrise de son espace de vie.",
  documentation: ["Géographie 6e, collection Hatier", "Géographie 6e, collection IPAM, p. 4 à 9", "Dictionnaire Larousse"],
  supportsDidactiques: "Carte, globe terrestre, boussole, planisphère",
  preRequis: "Citer les différentes leçons étudiées au CM2 (histoire, géographie, ECM, EDUSIVIP)",
  capacitesContenus: [
    ["Définir la géographie", "Définition de la géographie, objet d'étude de la géographie"],
    ["Identifier les domaines", "Domaines : géographie physique, géographie humaine, géographie économique"],
    ["Utiliser la démarche", "Démarche géographique : OBLODEXCO (Observer, Localiser, Décrire, Expliquer, Comparer)"],
    ["Énumérer les outils", "Outils : carte, croquis, diagramme, photo, boussole, GPS…"],
    ["Donner l'utilité de la géographie", "Utilité de la géographie pour le citoyen et pour l'État"]
  ],
  situationProbleme: "En regardant le journal télévisé avec sa famille, Essowè voit un reportage qui décrit avec précision le relief, le climat et les activités des habitants d'une région du Togo qu'il ne connaît pas. Il s'étonne : comment peut-on connaître et expliquer aussi bien un lieu qu'on n'a jamais visité ? Il demande à la classe de l'aider à comprendre quelle discipline permet cela, comment elle procède et à quoi elle sert.",
  consignes: ["Dites et définissez la discipline qui permet de décrire la Terre.", "Quels sont ses domaines d'étude ?", "Quelle est sa méthode de travail ?", "De quels outils fait-elle usage ?", "Quelle est son utilité pour l'homme ?"],
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
    {titre:"1. Définition", texte:"La géographie est la science qui étudie la Terre dans ses aspects physiques (relief, climat, eaux), humains (population) et économiques (activités)."},
    {titre:"2. Les domaines de la géographie", texte:"On distingue la géographie physique (étude du milieu naturel), la géographie humaine (étude des populations) et la géographie économique (étude des activités et des richesses)."},
    {titre:"3. La démarche du géographe (OBLODEXCO)", texte:"Pour étudier un fait géographique, le géographe suit une démarche en cinq étapes : Observer, Localiser, Décrire, Expliquer, Comparer (OBLODEXCO)."},
    {titre:"4. Les outils du géographe", texte:"Le géographe utilise différents outils pour son travail : la carte, le croquis, le diagramme, la photographie, la boussole, le globe terrestre et le GPS."},
    {titre:"5. L'utilité de la géographie", texte:"La géographie permet de connaître son milieu de vie, de mieux le protéger, et de comprendre les phénomènes naturels, humains et économiques qui s'y déroulent."}
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
    ["S'orienter avec les points cardinaux et les coordonnées géographiques", "Points cardinaux ; coordonnées géographiques"],
    ["Situer / localiser un lieu sur une carte", "Localisation sur la carte d'un lieu, d'une région"],
    ["Situer / localiser un lieu par rapport à un repère fixe", "Situation et localisation d'un lieu par rapport à un repère fixe"]
  ],
  situationProbleme: "Un cousin d'Ayélé, venu de Kara pour la première fois à Lomé, se perd en cherchant l'établissement de sa cousine alors qu'il connaît pourtant l'adresse. Ayélé se rend compte qu'il ne sait ni utiliser les points cardinaux ni situer un lieu par rapport à un repère connu. Elle vous demande de l'aider à expliquer comment on se repère correctement dans un espace.",
  consignes: ["Qu'appelle-t-on points cardinaux et comment les identifie-t-on ?", "Que sont les coordonnées géographiques ?", "Comment localiser un lieu sur une carte ?", "Comment situer un lieu par rapport à un repère fixe ?"],
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
    {titre:"1. Les points cardinaux", texte:"Les quatre points cardinaux principaux sont le Nord, le Sud, l'Est et l'Ouest ; on y ajoute les points intermédiaires (Nord-Est, Nord-Ouest, Sud-Est, Sud-Ouest) représentés sur la rose des vents."},
    {titre:"2. Les coordonnées géographiques", texte:"La latitude (distance par rapport à l'équateur) et la longitude (distance par rapport au méridien de Greenwich) permettent de localiser précisément n'importe quel point sur la Terre grâce au réseau de parallèles et de méridiens."},
    {titre:"3. Localiser un lieu sur une carte", texte:"Pour localiser un lieu sur une carte, on utilise son titre, sa légende, son échelle et, si besoin, ses coordonnées géographiques."},
    {titre:"4. Se situer par rapport à un repère fixe", texte:"On peut aussi situer un lieu en le comparant à un élément stable et connu de l'espace environnant (un bâtiment, un carrefour, un cours d'eau), ce qui est utile dans la vie quotidienne."}
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
    ["Présenter les éléments d'une carte", "Définition de la carte géographique ; éléments d'une carte"],
    ["Lire une carte", "Démarche de lecture d'une carte ; lecture d'une carte"]
  ],
  situationProbleme: "Le maire du village de Kodjo a affiché un plan de lotissement pour la construction d'un nouveau marché, mais Kodjo ne comprend ni l'échelle, ni la légende, ni les signes utilisés sur ce plan. Il aimerait comprendre comment lire un tel document afin de savoir où sera implanté le futur marché par rapport à sa maison.",
  consignes: ["Qu'est-ce qu'une carte géographique ?", "Quels sont les éléments qui composent une carte ?", "Comment calcule-t-on et utilise-t-on l'échelle ?", "Quelle démarche suivre pour lire une carte ?"],
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
    {titre:"1. Définition de la carte", texte:"La carte géographique est une représentation réduite, simplifiée et conventionnelle de tout ou partie de la surface terrestre, vue du dessus."},
    {titre:"2. Les éléments d'une carte", texte:"Toute carte comporte un titre (ce qu'elle représente), une échelle numérique ou graphique (le rapport entre distances réelles et distances sur la carte), une légende (l'explication des figurés utilisés), une orientation (généralement le nord en haut) et des figurés conventionnels (symboles, couleurs, lignes)."},
    {titre:"3. Calculer une échelle", texte:"L'échelle indique le rapport entre une distance mesurée sur la carte et la distance réelle correspondante sur le terrain. Par exemple, à l'échelle 1/100 000, 1 cm sur la carte représente 1 km dans la réalité."},
    {titre:"4. La démarche de lecture d'une carte", texte:"Pour lire une carte, on observe d'abord son titre pour savoir ce qu'elle représente, puis son échelle et sa légende, avant d'analyser les figurés pour en tirer les informations recherchées."},
    {titre:"5. Repères cartographiques à retenir", texte:"Le plan de la classe (ou d'un espace connu), réalisé à partir d'une échelle donnée, et le croquis cartographique du Togo doivent permettre de repérer les grands repères administratifs du pays (frontières, capitale) tout en respectant les règles de construction d'une carte (titre, échelle, légende, orientation)."}
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
    ["Réaliser la coupe verticale de l'atmosphère", "Coupe verticale de l'atmosphère : les différentes couches"],
    ["Relever le rôle de l'atmosphère", "Rôle de l'atmosphère terrestre"],
    ["Identifier les menaces sur l'atmosphère", "Menaces sur l'atmosphère : pollution, destruction"],
    ["Adopter des comportements civiques et citoyens", "Comportements en faveur de la protection de l'atmosphère"]
  ],
  situationProbleme: "Dans le quartier d'Afi, un atelier de mécanique brûle chaque jour des pneus usés, dégageant une épaisse fumée noire. Plusieurs habitants se plaignent de maux de tête et de toux persistante. Afi se demande pourquoi cette fumée dérange autant et ce que cela peut changer dans l'air qu'ils respirent tous.",
  consignes: ["Comment se présente l'atmosphère terrestre ?", "Quel est le rôle de l'atmosphère pour les êtres vivants ?", "Quelles sont les menaces qui pèsent sur l'atmosphère ?", "Quels comportements adopter pour la protéger ?"],
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
    {titre:"1. La coupe verticale de l'atmosphère", texte:"L'atmosphère est composée de plusieurs couches superposées : la troposphère (où se produisent les phénomènes météorologiques, jusqu'à environ 10-15 km d'altitude), la stratosphère (qui contient la couche d'ozone protectrice), puis des couches plus hautes (mésosphère, thermosphère)."},
    {titre:"2. Le rôle de l'atmosphère", texte:"L'atmosphère protège la Terre des rayons solaires nocifs et des météorites, permet la respiration des êtres vivants grâce à l'oxygène qu'elle contient, et régule le climat en retenant une partie de la chaleur (effet de serre naturel)."},
    {titre:"3. Les menaces sur l'atmosphère", texte:"L'atmosphère est menacée par la pollution issue des fumées industrielles, domestiques et des gaz d'échappement, ainsi que par les feux de brousse et la déforestation qui réduisent sa capacité naturelle de régulation."},
    {titre:"4. Comportements civiques pour la protéger", texte:"Chacun peut agir en évitant de brûler les déchets à l'air libre, en plantant des arbres, en limitant les fumées et en sensibilisant son entourage à la protection de l'air que nous respirons tous."}
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
    ["Présenter la répartition des eaux", "Répartition des eaux : eaux de surface, eaux souterraines"],
    ["Montrer l'importance de l'eau", "Importance de l'eau"],
    ["Identifier les menaces sur l'eau", "Menaces sur l'eau : pollution, rareté, gaspillage"],
    ["Adopter des comportements responsables", "Bonne gestion et économie de l'eau"]
  ],
  situationProbleme: "Dans le village de Séléyo, le seul forage tombe souvent en panne et certains habitants se rabattent alors sur l'eau d'un marigot proche, sans la traiter. Plusieurs enfants souffrent régulièrement de maladies liées à l'eau. Les habitants demandent aux élèves de la classe de 6e de les aider à comprendre l'importance de l'eau et comment mieux la gérer.",
  consignes: ["Comment les eaux sont-elles réparties sur la Terre et au Togo ?", "Pourquoi l'eau est-elle importante ?", "Quelles sont les menaces qui pèsent sur l'eau ?", "Quels comportements adopter pour bien gérer l'eau ?"],
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
    {titre:"1. Répartition des eaux", texte:"On distingue les eaux de surface (mers, fleuves, lacs, retenues) et les eaux souterraines (nappes phréatiques, sources), qui constituent ensemble les ressources en eau disponibles pour l'homme."},
    {titre:"2. Importance de l'eau", texte:"L'eau est indispensable à la vie humaine, à l'agriculture, à l'élevage, à l'hygiène et à de nombreuses activités économiques (industrie, transport, production d'énergie)."},
    {titre:"3. Menaces sur l'eau", texte:"L'eau est menacée par la pollution (déchets, produits chimiques), le gaspillage et, dans certaines régions, sa rareté saisonnière liée aux variations climatiques."},
    {titre:"4. Comportements responsables", texte:"Économiser l'eau au quotidien, éviter de la polluer, entretenir les points d'eau et sensibiliser la communauté sont des gestes essentiels pour une gestion durable de cette ressource."}
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
    ["Présenter le relief", "Définition du relief ; types de relief"],
    ["Identifier les différentes formes de relief", "Formes du relief continental et du relief océanique"],
    ["Identifier les risques liés au relief", "Érosion, coulées de boue, éboulement, chute de blocs"],
    ["Participer à la protection contre les risques liés au relief", "Actions individuelles et communautaires de protection"]
  ],
  situationProbleme: "Après de fortes pluies, un pan de colline s'est effondré près du village de Bassar, endommageant deux maisons construites au pied de la pente. Les habitants s'interrogent sur les causes de cet éboulement et sur les précautions à prendre pour l'avenir.",
  consignes: ["Qu'est-ce que le relief et quels en sont les types ?", "Quelles sont les principales formes du relief ?", "Quels risques sont liés au relief ?", "Comment se protéger de ces risques ?"],
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
    {titre:"1. Définition et types de relief", texte:"Le relief désigne l'ensemble des formes que présente la surface terrestre. On distingue le relief continental (sur les terres émergées) et le relief océanique (sous les mers et océans)."},
    {titre:"2. Les formes du relief continental", texte:"Le relief continental comprend principalement les montagnes (fortes altitudes et pentes), les plateaux (surfaces relativement planes en altitude), les plaines (surfaces basses et planes) et les collines (reliefs modérés)."},
    {titre:"3. Les formes du relief océanique", texte:"Sous l'océan, on distingue le plateau continental (prolongement peu profond des continents), la fosse océanique (les zones les plus profondes) et la dorsale océanique (chaîne de montagnes sous-marine)."},
    {titre:"4. Risques et protection", texte:"Le relief peut être à l'origine de risques (érosion, éboulements, coulées de boue), que l'on peut limiter par le reboisement des versants et en évitant les constructions sur des pentes instables."}
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
    ["Définir sol et érosion de sol", "Notions de sol et d'érosion de sol"],
    ["Énumérer les facteurs d'érosion du sol", "Facteurs d'érosion : eau, vent, actions anthropiques"],
    ["Relever les conséquences de l'érosion du sol", "Conséquences de l'érosion du sol"],
    ["Proposer des mesures de protection du sol", "Mesures de protection du sol contre l'érosion"]
  ],
  situationProbleme: "Le champ de maïs du père d'Ama, cultivé plusieurs années sans précaution sur une pente, perd chaque saison des pluies une bonne partie de sa terre fertile emportée vers le bas-fond. Le rendement baisse d'année en année. Ama souhaite comprendre pourquoi et comment protéger le sol du champ familial.",
  consignes: ["Qu'est-ce que le sol et l'érosion du sol ?", "Quels sont les facteurs qui provoquent l'érosion du sol ?", "Quelles conséquences a l'érosion du sol ?", "Quelles mesures prendre pour protéger le sol ?"],
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
    {titre:"1. Notions de sol et d'érosion", texte:"Le sol est la couche superficielle et fertile de la terre, qui permet la croissance des plantes. L'érosion du sol est son usure progressive et son entraînement sous l'effet de différents facteurs."},
    {titre:"2. Facteurs de l'érosion", texte:"L'érosion du sol est provoquée par l'eau (ruissellement des pluies), le vent, et les actions humaines (déboisement, mauvaises pratiques agricoles, surpâturage)."},
    {titre:"3. Conséquences de l'érosion", texte:"L'érosion entraîne une perte de fertilité des terres, une baisse des rendements agricoles, l'ensablement des cours d'eau et, à terme, un appauvrissement des populations rurales."},
    {titre:"4. Mesures de protection", texte:"Pour protéger le sol, on peut pratiquer le reboisement, les cultures en courbes de niveau, installer des diguettes anti-érosives, pratiquer la jachère et lutter contre les feux de brousse."}
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
    ["Distinguer les grands types de végétation", "Définition et types de végétation"],
    ["Déterminer le rôle de la végétation", "Rôle de la végétation : protection, alimentation, soins, ornement, stabilisation du climat"],
    ["Identifier les menaces sur la végétation", "Menaces : destruction, contamination"],
    ["Proposer des actions de protection de la végétation", "Actions de protection de la végétation"]
  ],
  situationProbleme: "Depuis quelques années, la forêt qui bordait le village de Yao a presque disparu à cause des coupes de bois pour le charbon. Les anciens racontent qu'il y faisait autrefois plus frais et que le gibier y était abondant. Yao veut comprendre le rôle de cette végétation disparue et ce qui pourrait être fait pour la faire revenir.",
  consignes: ["Qu'est-ce que la végétation et quels sont ses types ?", "Quel est le rôle de la végétation ?", "Quelles sont les menaces qui pèsent sur elle ?", "Quelles actions mener pour la protéger ?"],
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
    {titre:"1. Définition et types de végétation", texte:"La végétation est l'ensemble des plantes qui couvrent un espace. On distingue la végétation naturelle et la végétation artificielle (plantée par l'homme), ainsi que différents types selon le climat et le milieu (forêt, savane, etc.)."},
    {titre:"2. Rôle de la végétation", texte:"La végétation protège le sol contre l'érosion, fournit alimentation, bois et remèdes, embellit le cadre de vie, abrite la faune et contribue à réguler le climat."},
    {titre:"3. Menaces sur la végétation", texte:"La déforestation, les feux de brousse, la surexploitation du bois de chauffe et la pollution constituent les principales menaces qui pèsent sur la végétation."},
    {titre:"4. Actions de protection", texte:"Le reboisement, la lutte contre les feux de brousse, la sensibilisation des populations et une exploitation raisonnée des forêts permettent de préserver la végétation pour les générations futures."}
  ],
  evaluation: "1) Citez deux rôles de la végétation. 2) Proposez deux actions pour lutter contre la déforestation dans votre milieu.",
  devoirMaison: "Plantez ou observez un jeune arbre près de chez vous et notez, en quelques lignes, son évolution au fil de la semaine."
},

h1: {
  leconTitre: "L'histoire : définition, objet",
  theme: "Thème 1 — Introduction à la science historique",
  competence: "Résoudre une situation-problème qui fait appel à la connaissance de la méthodologie de la science historique.",
  documentation: ["Histoire 6e, collection Hatier", "Histoire 6e, collection IPAM"],
  supportsDidactiques: "Textes, images d'archives",
  preRequis: "Citer les disciplines étudiées au CM2",
  capacitesContenus: [
    ["Déterminer l'objet de l'histoire", "Définition de l'histoire ; notion d'événement ; étude des faits et civilisations passés"],
    ["Expliquer l'intérêt de l'histoire", "Connaissance de la vie des hommes du passé ; utilité pour corriger le présent et préparer le futur"],
    ["Définir la notion d'esprit critique", "Définition de l'esprit critique (EPEV)"]
  ],
  situationProbleme: "Le grand-père d'Edem raconte souvent des histoires anciennes de leur famille et de leur région, mais Edem se demande pourquoi il faudrait s'intéresser à des faits aussi anciens alors que le monde a tellement changé. Il aimerait comprendre à quoi sert vraiment de connaître le passé.",
  consignes: ["Que signifie le mot histoire pour un scientifique ?", "Quel est l'objet d'étude de l'histoire ?", "En quoi la connaissance du passé est-elle utile aujourd'hui ?", "Qu'est-ce que l'esprit critique face à un document ?"],
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
    {titre:"1. Définition de l'histoire", texte:"L'histoire est la science qui étudie les faits et les événements passés des hommes et des civilisations, à partir de traces laissées par le passé."},
    {titre:"2. L'objet de l'histoire", texte:"L'histoire a pour objet la connaissance de la vie des hommes du passé : leurs actions, leurs sociétés et les grands événements qui les ont marqués."},
    {titre:"3. Intérêt de l'histoire", texte:"Connaître le passé permet de mieux comprendre le présent, d'en tirer des enseignements et de mieux préparer l'avenir, en créant aussi un lien de solidarité entre les générations passées, présentes et futures."},
    {titre:"4. L'esprit critique (EPEV)", texte:"L'esprit critique est la capacité à examiner, questionner et vérifier une information avant de l'accepter comme vraie, une qualité essentielle face aux nombreuses informations reçues au quotidien."}
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
    ["Distinguer les différentes sources de l'histoire", "Sources écrites (archives, journaux, correspondances) ; sources orales (traditions, chansons, contes, rituels) ; sources muettes (vestiges archéologiques)"]
  ],
  situationProbleme: "Pour un exposé sur l'histoire de son village, Akouvi ne trouve aucun livre écrit à ce sujet. Un vieux sage du village lui propose de lui raconter ce qu'il sait, tandis qu'un archéologue de passage lui montre des poteries retrouvées sous terre. Akouvi se demande si ces informations, différentes d'un livre, peuvent aussi être considérées comme des sources fiables pour écrire l'histoire.",
  consignes: ["Qu'appelle-t-on source de l'histoire ?", "Quelles sont les sources écrites de l'histoire ?", "Quelles sont les sources orales de l'histoire ?", "Quelles sont les sources muettes de l'histoire ?"],
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
    {titre:"1. Notion de source historique", texte:"Une source de l'histoire est tout document ou témoignage qui permet aux historiens de reconstituer et de connaître le passé."},
    {titre:"2. Les sources écrites", texte:"Elles regroupent les documents d'archives, les journaux et les correspondances, qui existent depuis l'invention de l'écriture."},
    {titre:"3. Les sources orales", texte:"Elles comprennent les traditions orales, les chansons, les contes et les rituels, transmis de génération en génération, particulièrement importants pour l'histoire des sociétés sans écriture."},
    {titre:"4. Les sources muettes", texte:"Ce sont les vestiges archéologiques (outils, poteries, ruines, ossements) retrouvés sur un site et étudiés par les archéologues pour reconstituer la vie des populations anciennes."}
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
    ["Identifier les unités de mesure du temps", "Millénaire, siècle, décennie, année, mois, semaine, jour, heure"],
    ["Construire une frise chronologique", "Définition de la chronologie et d'une frise ; lecture et construction d'une frise chronologique"]
  ],
  situationProbleme: "Dans un livre d'histoire, Kossi lit que l'indépendance du Togo a eu lieu au XXe siècle, mais il ne comprend pas ce que représente un siècle ni comment situer cet événement par rapport à d'autres dates qu'il connaît. Il souhaite apprendre à organiser les événements du passé dans le temps.",
  consignes: ["Quelles sont les unités de mesure du temps utilisées en histoire ?", "Qu'est-ce qu'une frise chronologique ?", "Comment construit-on une frise chronologique ?"],
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
    {titre:"1. Les unités de mesure du temps", texte:"Le temps historique se mesure en millénaire (1000 ans), siècle (100 ans), décennie (10 ans), année, mois, semaine, jour et heure."},
    {titre:"2. La chronologie et la frise chronologique", texte:"La chronologie est l'étude de la succession des événements passés. La frise chronologique est une ligne horizontale graduée selon une échelle de temps régulière, sur laquelle on situe des événements ou des périodes les uns par rapport aux autres."},
    {titre:"3. Construire et lire une frise", texte:"Pour construire une frise, on choisit une échelle de temps adaptée, puis on y place les dates et les événements dans l'ordre chronologique ; la lire consiste à identifier les événements représentés et leur ordre de succession."}
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
    ["Distinguer les grandes divisions du temps historique", "La Préhistoire ; l'Histoire"],
    ["Identifier les grandes périodes de chaque division", "Paléolithique, Néolithique ; Antiquité, Moyen-Âge, Temps modernes, Époque contemporaine"],
    ["Situer les grandes périodes sur un axe chronologique", "Construction d'une frise des grandes périodes de l'histoire"]
  ],
  situationProbleme: "En visitant un musée à Lomé, Sena entend un guide parler de la « Préhistoire » et de « l'Antiquité » comme de deux périodes très différentes, sans que le guide précise clairement ce qui les distingue. Sena voudrait comprendre comment le temps humain est découpé en grandes périodes.",
  consignes: ["Quelles sont les deux grandes divisions du temps historique ?", "Quelles sont les périodes qui composent chacune de ces divisions ?", "Comment situer ces grandes périodes sur un axe chronologique ?"],
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
    {titre:"1. Les deux grandes divisions du temps historique", texte:"On distingue la Préhistoire (des origines de l'humanité jusqu'à l'invention de l'écriture) et l'Histoire (depuis l'invention de l'écriture, qui permet de conserver des traces écrites du passé)."},
    {titre:"2. Les périodes de la Préhistoire", texte:"La Préhistoire se divise en deux grandes périodes : le Paléolithique (âge de la pierre taillée, période du nomadisme, de la chasse et de la cueillette) et le Néolithique (âge de la pierre polie, marqué par l'agriculture, l'élevage et la sédentarisation)."},
    {titre:"3. Les périodes de l'Histoire", texte:"L'Histoire se divise traditionnellement en quatre grandes périodes : l'Antiquité, le Moyen Âge, les Temps modernes et l'Époque contemporaine."}
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
    ["Localiser les premiers sites d'habitat de l'Homme", "Sites : Oldoway, Asselar, Vallée du Rift, lac Tchad (Tumaï)"],
    ["Relever l'importance de l'apparition de l'Homme en Afrique", "L'Afrique, berceau de l'humanité ; les premiers hommes étaient Noirs"],
    ["Caractériser la Préhistoire", "Paléolithique et Néolithique : définitions et modes de vie"],
    ["Identifier des vestiges du Paléolithique et du Néolithique en Afrique", "Carte des vestiges en Afrique"]
  ],
  situationProbleme: "Lors d'une émission scolaire, Nadège entend dire que « l'Afrique est le berceau de l'humanité ». Elle ne comprend pas bien ce que cela signifie ni comment les scientifiques peuvent affirmer une chose aussi ancienne. Elle demande à la classe de l'aider à comprendre où et comment l'Homme est apparu en Afrique.",
  consignes: ["Où se trouvent les premiers sites d'habitat de l'Homme en Afrique ?", "Pourquoi dit-on que l'Afrique est le berceau de l'humanité ?", "Quelles sont les caractéristiques du Paléolithique et du Néolithique ?", "Quels vestiges témoignent de cette période en Afrique ?"],
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
    {titre:"1. Les premiers sites d'habitat de l'Homme", texte:"Les plus anciens sites connus d'habitat humain se trouvent notamment à Oldoway (Tanzanie), Asselar (Mali), dans la Vallée du Rift (Afrique de l'Est) et près du lac Tchad, où fut découvert le célèbre fossile de Toumaï, l'un des plus anciens ancêtres connus de l'humanité."},
    {titre:"2. L'Afrique, berceau de l'humanité", texte:"C'est en Afrique qu'ont été découverts les fossiles humains les plus anciens, ce qui fait de ce continent le berceau de l'humanité ; les tout premiers hommes qui y sont apparus étaient noirs."},
    {titre:"3. Le Paléolithique et le Néolithique", texte:"Au Paléolithique, longue période marquée par l'absence d'écriture, l'homme vivait de chasse, de pêche et de cueillette, en utilisant des outils de pierre taillée. Au Néolithique, il découvre l'agriculture et l'élevage, se sédentarise, et perfectionne ses outils en polissant la pierre."},
    {titre:"4. Repères cartographiques à retenir", texte:"Sur la carte de l'Afrique, il faut savoir situer les principaux sites et vestiges du Paléolithique et du Néolithique : Oldoway en Afrique de l'Est, Asselar au Mali, la Vallée du Rift, et le site du lac Tchad où fut trouvé Toumaï."}
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
    ["Localiser les sites archéologiques du Togo", "Définition de l'archéologie ; localisation sur une carte du Togo"],
    ["Identifier les vestiges archéologiques du Togo", "Bassar et Tado (fer), pavements de Notsè, coquillages d'Aného, grottes de Nano, dessins rupestres de Sogou, abri sous roche de Namoudjoga"],
    ["Décrire la vie des hommes du Paléolithique et du Néolithique au Togo", "Modes de vie comparés"]
  ],
  situationProbleme: "Lors d'une sortie scolaire, la classe apprend que des vestiges très anciens ont été retrouvés à Bassar et à Notsè. Un élève demande comment les archéologues savent que ces objets sont anciens et ce qu'ils nous apprennent sur la vie des premiers habitants du Togo.",
  consignes: ["Qu'est-ce que l'archéologie ?", "Où se trouvent les principaux sites archéologiques du Togo ?", "Quels vestiges y a-t-on découverts ?", "Comment vivaient les hommes de la Préhistoire au Togo ?"],
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
    {titre:"1. L'archéologie", texte:"L'archéologie est l'étude des civilisations disparues à partir des vestiges matériels qu'elles ont laissés (outils, poteries, constructions, ossements)."},
    {titre:"2. Les sites archéologiques du Togo", texte:"Le Togo compte plusieurs sites archéologiques majeurs : les vestiges du travail du fer à Bassar et à Tado, les pavements de Notsè, les amas de coquillages d'Aného, les grottes de Nano, les dessins rupestres de Sogou et l'abri sous roche de Namoudjoga."},
    {titre:"3. La vie au Togo pendant la Préhistoire", texte:"Au Paléolithique, les populations vivaient au Togo de nomadisme, de chasse et de cueillette. Au Néolithique, elles se sédentarisent progressivement et développent l'agriculture et l'élevage."},
    {titre:"4. Repères cartographiques à retenir", texte:"Sur la carte du Togo, il faut savoir localiser les principaux sites archéologiques : Bassar et Tado (métallurgie du fer), Notsè (pavements), Aného (coquillages), Nano (grottes), Sogou (dessins rupestres) et Namoudjoga (abri sous roche)."}
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
    ["Localiser l'Égypte ancienne sur une carte d'Afrique", "Carte de l'Afrique comportant l'Égypte ancienne"],
    ["Décrire la société égyptienne", "Rôle du pharaon, des prêtres/scribes, des paysans, des esclaves"],
    ["Déterminer les grandes périodes de l'histoire égyptienne", "Périodes et pharaons marquants"],
    ["Relever les grands monuments de l'histoire égyptienne", "Pyramides et temples égyptiens, leur rôle"]
  ],
  situationProbleme: "En feuilletant un magazine, Kékéli découvre des photos impressionnantes des pyramides d'Égypte et se demande qui a pu construire de tels monuments il y a des milliers d'années, et comment la société égyptienne était organisée pour réussir un tel exploit.",
  consignes: ["Où se situe l'Égypte ancienne sur la carte d'Afrique ?", "Comment était organisée la société égyptienne ?", "Quelles sont les grandes périodes de l'histoire égyptienne ?", "Quels sont les grands monuments de cette civilisation ?"],
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
    {titre:"1. Localisation de l'Égypte ancienne", texte:"L'Égypte ancienne se situe au nord-est de l'Afrique, le long de la vallée du Nil, entre le désert du Sahara à l'ouest et la mer Rouge à l'est."},
    {titre:"2. La société égyptienne", texte:"La société égyptienne était fortement hiérarchisée : le pharaon, considéré comme un dieu vivant, dirigeait le pays ; les prêtres géraient les temples et la religion ; les scribes, formés à l'écriture hiéroglyphique, tenaient l'administration ; les paysans et les esclaves constituaient la majorité de la population et assuraient les travaux agricoles et de construction."},
    {titre:"3. Les grandes périodes de l'histoire égyptienne", texte:"L'histoire de l'Égypte ancienne se divise en plusieurs grandes périodes (Ancien Empire, Moyen Empire, Nouvel Empire), marquées par des pharaons célèbres comme Khéops, Khephren ou Ramsès II."},
    {titre:"4. Les grands monuments", texte:"Les pyramides (dont celles de Khéops, Khephren et Mykérinos, à Gizeh) servaient de tombeaux monumentaux aux pharaons ; les grands temples, comme celui d'Abou Simbel, étaient consacrés au culte des divinités égyptiennes."},
    {titre:"5. Repères cartographiques à retenir", texte:"Sur la carte d'Afrique, il faut savoir situer l'Égypte ancienne le long de la vallée du Nil, ainsi que le site des grandes pyramides près du Caire actuel (Gizeh)."}
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
    ["Décrire les traits principaux de la civilisation égyptienne", "Art égyptien, activités économiques, place du Nil, religion égyptienne"],
    ["Montrer l'importance de l'héritage de la civilisation égyptienne", "Momification, croyance en l'au-delà, écriture, irrigation, géométrie"]
  ],
  situationProbleme: "En cours de mathématiques, le professeur explique que certaines notions de géométrie utilisées aujourd'hui viennent de l'Égypte ancienne. Les élèves s'étonnent qu'une civilisation aussi ancienne ait pu laisser une influence encore visible de nos jours et veulent en savoir plus sur cet héritage.",
  consignes: ["Quels sont les traits principaux de la civilisation égyptienne (art, économie, religion) ?", "Quelle place occupait le Nil dans la vie des Égyptiens ?", "Quels aspects de la civilisation égyptienne ont été transmis jusqu'à aujourd'hui ?"],
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
    {titre:"1. Les traits de la civilisation égyptienne", texte:"L'art égyptien se caractérise par une architecture monumentale (pyramides, temples), une sculpture et une peinture codifiées. L'économie reposait sur l'agriculture irriguée par le Nil et sur le commerce. La religion, polythéiste, accordait une place centrale au culte des morts."},
    {titre:"2. La place du Nil", texte:"Comme l'écrivait l'historien grec Hérodote, « l'Égypte est un don du Nil » : les crues régulières du fleuve déposaient un limon fertile qui permettait une agriculture prospère malgré l'aridité du désert environnant."},
    {titre:"3. L'héritage de la civilisation égyptienne", texte:"L'Égypte ancienne a laissé un héritage durable : la momification et la croyance en la vie après la mort, l'écriture (hiéroglyphes), les techniques d'irrigation, et d'importantes connaissances en géométrie utilisées notamment pour la construction des pyramides."}
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
    ["Localiser les sites de la métallurgie ancienne du fer au Togo", "Définition de la métallurgie ; carte des sites (Bassar…)"],
    ["Décrire les étapes du travail du fer", "Réduction du minerai, forge, schéma d'un fourneau"],
    ["Présenter les conséquences de la métallurgie du fer au Togo", "Conséquences techniques, sociales, économiques, politiques"]
  ],
  situationProbleme: "En visitant la région de Bassar, la classe découvre les vestiges d'anciens fourneaux ayant servi à fabriquer des outils en fer il y a plusieurs siècles. Les élèves s'interrogent sur la façon dont ce travail du fer se faisait autrefois et sur ce qu'il a changé dans la vie des populations de cette région.",
  consignes: ["Où se trouvaient les sites de la métallurgie ancienne du fer au Togo ?", "Comment se déroulait le travail du fer ?", "Quelles conséquences la métallurgie du fer a-t-elle eues au Togo ?"],
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
    {titre:"1. La métallurgie du fer", texte:"La métallurgie du fer est la transformation du minerai de fer brut en métal utilisable, par un procédé de réduction dans un four à haute température."},
    {titre:"2. Les sites de la métallurgie ancienne au Togo", texte:"Le Togo compte d'importants sites anciens de production du fer, notamment dans la région de Bassar, où subsistent des vestiges de fourneaux de réduction."},
    {titre:"3. Les étapes du travail du fer", texte:"Le travail du fer comprenait deux grandes étapes complémentaires : la réduction du minerai en une masse de fer brut (la « loupe ») dans un fourneau, puis la forge, qui permettait de transformer cette loupe en outils et en armes."},
    {titre:"4. Les conséquences de la métallurgie du fer au Togo", texte:"Sur le plan technique, elle a permis de fabriquer des outils plus résistants. Sur le plan économique, elle a enrichi les forgerons et leurs communautés grâce au commerce du fer. Sur le plan social, elle a fait émerger des groupes spécialisés dans la forge. Sur le plan politique, elle a contribué à la formation d'États plus puissants, comme celui de Bassar."},
    {titre:"5. Repères cartographiques à retenir", texte:"Sur la carte du Togo, il faut savoir situer les principaux sites de la métallurgie ancienne du fer, en particulier la région de Bassar, foyer historique majeur de cette activité."}
  ],
  evaluation: "1) Définissez la métallurgie du fer. 2) Citez une conséquence économique et une conséquence sociale de la métallurgie du fer au Togo.",
  devoirMaison: "Expliquez en quelques lignes pourquoi la maîtrise du fer a pu donner du pouvoir et de la richesse à une communauté."
}

};
