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
    {titre:"Définition", texte:"La géographie est la science qui étudie la Terre dans ses aspects physiques, humains et économiques."},
    {titre:"L’objet de la géographie", texte:"Son objet d’étude est la Terre."},
    {titre:"Les domaines d’étude de la géographie", texte:"La géographie physique- la géographie humaine- la géographie économique."},
    {titre:"Pour étudier les faits, le géographe adopte la démarche suivante", texte:"-Observation -Localisation -Description -Explication -Comparaison"},
    {titre:"Les outils du géographe", texte:"Le géographe utilise les outils suivants : les cartes, les croquis, la boussole, le globe terrestre, le thermomètre, le baromètre, la girouette…"},
    {titre:"L’étude de la géographie nous permet de", texte:"- connaitre les milieux de vie, - protéger notre environnement, - comprendre les phénomènes naturels et biologiques qui se déroulent à la surface de la Terre, - développer l’esprit de tolérance. - connaitre les autres peuples et leurs modes de vie."}
  ],
  evaluation: "1) Donnez la définition de la géographie. 2) Citez les trois domaines de la géographie et les cinq étapes de la démarche du géographe.",
  devoirMaison: "Recherchez un exemple de phénomène géographique observé dans votre quartier ou votre village et indiquez à quel domaine de la géographie il appartient.",
  croquis: null,
  photo: null
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
    {titre:"Qu’est-ce que s’orienter ?", texte:"S’orienter c’est retrouver son chemin ou repère grâce aux quatre points cardinaux qui sont: Nord, Sud, Est, Ouest. Les repères du milieu qui servent à se situer sont ; la route, le pont, le marché, l’école, la pompe, le puits, un gros arbre, la rivière, la maison, commissariat, panneau, terrain de jeu, carrefour …"},
    {titre:"Les outils d’orientation", texte:"Pendant le jour, on s’oriente à l’aide du soleil. Pendant la nuit, on s’oriente à l’aide de l’étoile polaire. En tout temps, on s’oriente à l’aide de la boussole, la carte, les points cardinaux, la girouette, le GPS (Géo localisation sur Satellite)."},
    {titre:"Qu’est-ce que la localisation ?", texte:"La localisation : c’est le fait de situer un point, un lieu, une localité par rapport aux repères."},
    {titre:"Exemples", texte:"Le Lycée de Lavié est situé au Nord de Kpalimé. Le terrain de sport est situé à l’Est du mât. La direction est située au Sud de la classe de 6èB. Le mât est situé à l’Ouest de la classe 6è B. Localisation/ situation de Kpalimé et la région des Plateaux sur un croquis de carte du Togo. Croquis simplifié de la rose des vents."},
    {titre:"Les coordonnées géographiques", texte:"Ce sont la latitude et la longitude. Pour situer un point quelconque sur le globe ou une carte, on utilise la latitude et la longitude. - La latitude : c’est la distance qui sépare un point quelconque sur le globe par rapport à l’équateur. - La longitude : c’est la distance qui sépare un point quelconque sur le globe par rapport au méridien d’origine (Greenwich)."},
    {titre:"Exemples : Lavié (7° N ; 0°4’E)", texte:"A (20°N ; 30 E) 20° latitude Nord et 30° longitude Est. B (15 S ; 20 W) 15° latitude Sud et 20° longitude Ouest."}
  ],
  evaluation: "1) Citez les quatre points cardinaux principaux. 2) En vous servant du plan de votre établissement, situez la classe de 6e par rapport à la direction.",
  devoirMaison: "Réalisez le croquis de votre trajet habituel de la maison à l'école en indiquant au moins deux repères fixes et l'orientation générale (nord).",
  croquis: {titre: "Rose des vents et repérage", svg: "<svg viewBox=\"0 0 260 260\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"260\" height=\"260\" fill=\"#F3F0E6\"/>\n<circle cx=\"130.0\" cy=\"130.0\" r=\"104.0\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"130.0\" y2=\"26.0\" stroke=\"#C68A2E\" stroke-width=\"2.5\"/>\n<text x=\"130.0\" y=\"12.0\" font-size=\"14\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">N</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"203.53910524340097\" y2=\"56.46089475659906\" stroke=\"#8C9A94\" stroke-width=\"1.2\"/>\n<text x=\"216.2670273047588\" y=\"47.732972695241216\" font-size=\"11\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">NE</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"234.0\" y2=\"130.0\" stroke=\"#C68A2E\" stroke-width=\"2.5\"/>\n<text x=\"252.0\" y=\"134.0\" font-size=\"14\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">E</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"203.53910524340097\" y2=\"203.53910524340094\" stroke=\"#8C9A94\" stroke-width=\"1.2\"/>\n<text x=\"216.2670273047588\" y=\"220.26702730475878\" font-size=\"11\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">SE</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"130.0\" y2=\"234.0\" stroke=\"#C68A2E\" stroke-width=\"2.5\"/>\n<text x=\"130.0\" y=\"256.0\" font-size=\"14\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">S</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"56.46089475659906\" y2=\"203.53910524340097\" stroke=\"#8C9A94\" stroke-width=\"1.2\"/>\n<text x=\"43.732972695241216\" y=\"220.2670273047588\" font-size=\"11\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">SW</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"26.0\" y2=\"130.0\" stroke=\"#C68A2E\" stroke-width=\"2.5\"/>\n<text x=\"8.0\" y=\"133.99999999999997\" font-size=\"14\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">W</text>\n<line x1=\"130.0\" y1=\"130.0\" x2=\"56.46089475659906\" y2=\"56.460894756599046\" stroke=\"#8C9A94\" stroke-width=\"1.2\"/>\n<text x=\"43.732972695241216\" y=\"47.7329726952412\" font-size=\"11\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">NW</text>\n<circle cx=\"130.0\" cy=\"130.0\" r=\"4\" fill=\"#A6472B\"/>\n</svg>", legende: "Rose des vents à huit branches : les quatre points cardinaux et les quatre points intermédiaires."},
  photo: null
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
    ["Lire une carte", "Démarche de lecture d'une carte ; lecture d'une carte"],
    ["Réaliser un plan et un croquis cartographique", "Plan de la classe à partir d'une échelle donnée ; croquis du Togo"]
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
    {titre:"Qu’est-ce qu’une carte ?", texte:"C’est une représentation plane à l’échelle réduite de la terre ou d’une partie de la terre ?"},
    {titre:"Quels sont les éléments d’une carte ?", texte:"Ce sont : titre, échelle, orientation, légende, les figurés conventionnels. Ils permettent de mieux lire la carte. -Titre : C’est un mot ou une phrase qui décrit le sujet ou le thème de la carte. -L’échelle : c’est le rapport entre les dimensions mesurées sur a carte et les dimensions réelles sur le terrain. On distingue deux types d’échelle qui sont : l’échelle graphique et l’échelle numérique -La légende : c’est un ensemble de signes conventionnels ou de de couleurs permettant la lecture d’une carte. -L’orientation : c’est le fait de trouver la position d’un lieu à ‘ aide des points cardinaux. -Les figurées conventionnels : c’est un ensemble de signes ou symboles connus et utilisés pour représenter les réalités géographiques sur une carte."},
    {titre:"Comment peut-on réalisé une carte ?", texte:"Pour réaliser une carte, on utilise l’échelle en réduisant les dimensions."}
  ],
  evaluation: "1) Citez les éléments indispensables d'une carte. 2) Une distance de 5 cm sur une carte à l'échelle 1/100 000 correspond à quelle distance réelle ?",
  devoirMaison: "Réalisez le plan de votre chambre ou de votre salon en choisissant vous-même une échelle adaptée, avec titre, légende et orientation.",
  croquis: [
    {titre: "Croquis du Togo (espace schématisé)", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 159.5,470.0 L 145.6,438.3 L 128.9,380.9 L 123.9,336.0 L 137.7,254.6 L 122.0,221.6 L 116.0,150.4 L 116.2,84.8 L 90.0,38.2 L 94.6,10.0 L 149.5,11.9 L 141.5,59.5 L 160.7,86.2 L 182.4,117.8 L 184.8,162.2 L 197.4,180.8 L 194.6,388.4 L 210.0,450.7 Z\"/></clipPath>\n<path d=\"M 210.0,450.7 L 159.5,470.0 L 145.6,438.3 L 128.9,380.9 L 123.9,336.0 L 137.7,254.6 L 122.0,221.6 L 116.0,150.4 L 116.2,84.8 L 90.0,38.2 L 94.6,10.0 L 149.5,11.9 L 141.5,59.5 L 160.7,86.2 L 182.4,117.8 L 184.8,162.2 L 197.4,180.8 L 194.6,388.4 L 210.0,450.7 Z\" fill=\"#EDEAE0\" stroke=\"none\"/>\n<path d=\"M 210.0,450.7 L 159.5,470.0 L 145.6,438.3 L 128.9,380.9 L 123.9,336.0 L 137.7,254.6 L 122.0,221.6 L 116.0,150.4 L 116.2,84.8 L 90.0,38.2 L 94.6,10.0 L 149.5,11.9 L 141.5,59.5 L 160.7,86.2 L 182.4,117.8 L 184.8,162.2 L 197.4,180.8 L 194.6,388.4 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n</svg>", legende: "Contour réel simplifié du Togo avec les pays limitrophes (Burkina Faso au nord, Ghana à l'ouest, Bénin à l'est) et l'océan Atlantique au sud. À reproduire à partir d'un quadrillage."},
    {titre: "Exemple de plan de la classe", svg: "<svg viewBox=\"0 0 400 320\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"400\" height=\"320\" fill=\"#F3F0E6\"/>\n<rect x=\"40\" y=\"30\" width=\"300\" height=\"220\" fill=\"#fff\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<rect x=\"300\" y=\"246\" width=\"35\" height=\"8\" fill=\"#C68A2E\"/>\n<text x=\"318\" y=\"268\" font-size=\"9\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"middle\">Porte</text>\n<rect x=\"36\" y=\"70\" width=\"8\" height=\"50\" fill=\"#1F5C52\"/>\n<text x=\"30\" y=\"60\" font-size=\"9\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"middle\">Fenêtre</text>\n<rect x=\"60\" y=\"45\" width=\"60\" height=\"25\" fill=\"#E8C9B0\" stroke=\"#153F38\"/>\n<text x=\"90\" y=\"61\" font-size=\"8\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"middle\">Bureau</text>\n<rect x=\"70\" y=\"100\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"130\" y=\"100\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"190\" y=\"100\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"250\" y=\"100\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"70\" y=\"145\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"130\" y=\"145\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"190\" y=\"145\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"250\" y=\"145\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"70\" y=\"190\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"130\" y=\"190\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"190\" y=\"190\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<rect x=\"250\" y=\"190\" width=\"40\" height=\"25\" fill=\"#BFD8C8\" stroke=\"#153F38\"/>\n<text x=\"190.0\" y=\"290\" font-size=\"10\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">Échelle : 1 cm = 1 m (exemple)</text>\n<line x1=\"40\" y1=\"305\" x2=\"90\" y2=\"305\" stroke=\"#202A3C\" stroke-width=\"2\"/>\n<text x=\"65\" y=\"320\" font-size=\"9\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"middle\">5 m</text>\n</svg>", legende: "Exemple de plan d'une salle de classe réalisé à partir d'une échelle donnée, avec le bureau du professeur, les tables-bancs, la porte et la fenêtre."}
  ],
  photo: null
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
    {titre:"L’atmosphère : définition et composition", texte:"-L’atmosphère est l’épaisse couche d’air qui entoure le globe terrestre. -Les gaz qui la composent sont : l’azote (78%), l’oxygène (21%), le gaz carbonique et d’autres gaz."},
    {titre:"Les différentes couches de l’atmosphère", texte:"Ce sont : la troposphère, la stratosphère, la mésosphère et la thermosphère (Ionosphère)."},
    {titre:"Le rôle de l’atmosphère", texte:"Sans l’atmosphère, la vie sur terre ne serait pas possible. Elle contient l’air que nous respirons (oxygène). Elle contient aussi l’ozone qui bloque les rayons ultraviolets du soleil les empêchant de nous brûler."},
    {titre:"Les menaces qui pèsent sur l’atmosphère", texte:"Ce sont : destruction de la couche d’ozone ; la pollution industrielle ; les feux de brousse ; la fumée des automobiles ; les chauffages domestiques ; la déforestation ; la pollution de l’eau et de l’air. Si nous continuons à détruire l’atmosphère il y aura comme conséquences : le réchauffement climatique, le cancer de la peau, la rareté des pluies, …"},
    {titre:"Les comportements citoyens pour préserver l’atmosphère", texte:"-Planter les arbres et les entretenir. -Faire les besoin dans les latrines. -Réduire l’émission des gaz à effet de serre….."}
  ],
  evaluation: "1) Citez deux rôles de l'atmosphère. 2) Proposez deux actions civiques pour lutter contre la pollution de l'air dans votre quartier.",
  devoirMaison: "Observez votre quartier pendant deux jours et notez une source de pollution de l'air que vous y trouvez, en proposant une solution.",
  croquis: {titre: "Coupe verticale de l'atmosphère", svg: "<svg viewBox=\"0 0 420 380\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"420\" height=\"380\" fill=\"#F3F0E6\"/>\n<rect x=\"60\" y=\"10\" width=\"260\" height=\"60\" fill=\"#7FA8C9\" stroke=\"#153F38\" stroke-width=\"1\"/>\n<text x=\"190\" y=\"44.0\" font-size=\"11\" fill=\"#153F38\" font-weight=\"600\" text-anchor=\"middle\">Thermosphère</text>\n<rect x=\"60\" y=\"70\" width=\"260\" height=\"70\" fill=\"#9CBFD8\" stroke=\"#153F38\" stroke-width=\"1\"/>\n<text x=\"190\" y=\"109.0\" font-size=\"11\" fill=\"#153F38\" font-weight=\"600\" text-anchor=\"middle\">Mésosphère</text>\n<rect x=\"60\" y=\"140\" width=\"260\" height=\"100\" fill=\"#BFD8E8\" stroke=\"#153F38\" stroke-width=\"1\"/>\n<text x=\"190\" y=\"194.0\" font-size=\"11\" fill=\"#153F38\" font-weight=\"600\" text-anchor=\"middle\">Stratosphère (couche d'ozone)</text>\n<rect x=\"60\" y=\"240\" width=\"260\" height=\"110\" fill=\"#E3EEF5\" stroke=\"#153F38\" stroke-width=\"1\"/>\n<text x=\"190\" y=\"299.0\" font-size=\"11\" fill=\"#153F38\" font-weight=\"600\" text-anchor=\"middle\">Troposphère</text>\n<rect x=\"60\" y=\"345\" width=\"260\" height=\"18\" fill=\"#8B5E3C\"/>\n<text x=\"190\" y=\"358\" font-size=\"10\" fill=\"#fff\" font-weight=\"700\" text-anchor=\"middle\">Surface terrestre</text>\n<text x=\"190\" y=\"25\" font-size=\"1\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"middle\"></text>\n</svg>", legende: "De la surface terrestre vers le haut : troposphère, stratosphère, mésosphère, thermosphère."},
  photo: {fichier: "g4_atmosphere_reelle.jpg", legende: "Coupe réelle de l'atmosphère (document authentique)"}
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
    {titre:"La répartition des eaux", texte:"L'eau est distribuée partout à travers l'hydrosphère de la Terre. Selon l'emplacement des eaux par rapport à la surface du sol, on distingue les eaux de surface (fleuves, rivières, océans, mers, lacs, eaux de ruissellement) et les eaux souterraines (nappes phréatiques et nappes actives), utilisées pour l'irrigation, l'eau potable et l'industrie."},
    {titre:"Importance de l'eau", texte:"L'eau sert à la boisson, à la préparation des repas, à la lessive et à la toilette (usages domestiques), à irriguer les champs et jardins, à abreuver les animaux, à pratiquer la pêche, à la construction, ainsi qu'à laver les minerais et refroidir les machines industrielles."},
    {titre:"Les menaces faites sur l'eau", texte:"Ce sont la pollution (déchets et produits chimiques jetés dans l'eau), le gaspillage (mauvaise gestion) et la rareté des pluies."},
    {titre:"Comportements responsables ou civiques", texte:"Pour protéger l'eau, il faut planter des arbres, encourager sa conservation, sensibiliser la population sur les risques de pénurie, éviter la pollution (ne pas déféquer dans la nature, limiter les produits chimiques) et faire l'économie de l'eau au quotidien."}
  ],
  evaluation: "1) Distinguez eaux de surface et eaux souterraines. 2) Proposez deux gestes pour économiser l'eau à l'école.",
  devoirMaison: "Enquêtez auprès de votre famille sur les sources d'eau utilisées à la maison et notez une menace qui pèse sur cette source.",
  croquis: null,
  photo: {fichier: "g5_cycle_eau_reel.jpg", legende: "Le cycle de l'eau : évaporation, ruissellement, infiltration (document authentique)"}
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
    ["Participer à la protection contre les risques liés au relief", "Actions individuelles et communautaires de protection"],
    ["Réaliser le croquis du relief continental et du relief océanique", "Croquis du relief continental ; croquis du relief océanique"]
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
    {titre:"1-Definition", texte:"Le relief est l’ensemble des inégalités observées à la surface de la terre."},
    {titre:"On distingue deux types de relief", texte:"-le relief continental -le relief océanique Ce sont . -La plaine : grande étendue de terre plate et unie -Plateau : élévation de terre plate -Colline = petite élévation de terre aux sommets arrondis -Montagne : grande élévation de la terre -Vallée : un creux profond entre deux montagnes ou plateaux 2-2-Les formes de relief océanique. Ce sont : le plateau continental, la plaine abysale,la fosse sous-marine ,la montagne sous-marine."},
    {titre:"Les risques (dangers) liés aux différentes formes de relief", texte:"Ce sont : le déboisement (abattage des arbres) ; les feux de végétation, érosion, coulée de boue, éboulement (chute des blocs), glissement de terrains"},
    {titre:"Pour protéger le relief contre les risques ou menaces, nous devons", texte:"- éviter les feux de végétation (de brousse), - faire le reboisement, - promouvoir le reboisement des versants, - participer aux travaux communautaires de protection contre les risques - monter des mini-projets de protection contre les risques liés au relief - sensibiliser la population sur les risques (danger)."}
  ],
  evaluation: "1) Citez deux formes du relief continental. 2) Proposez une mesure pour limiter les risques d'éboulement.",
  devoirMaison: "Décrivez en quelques lignes le relief observé dans votre localité (plaine, colline, montagne…) et un risque éventuel lié à ce relief.",
  croquis: [
    {titre: "Croquis du relief continental (document authentique)", svg: null, img: "photos_hg/g6_relief_continental_reel.png", legende: "Croquis réel montrant la plaine, la colline, le plateau, la vallée et la montagne."},
    {titre: "Croquis du relief sous-marin (document authentique)", svg: null, img: "photos_hg/g6_relief_oceanique_reel.png", legende: "Croquis réel montrant le plateau continental (200m), la plaine abyssale (4000-6000m), la fosse sous-marine (10 000m) et une montagne sous-marine."}
  ],
  photo: null
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
    {titre:"Définitions", texte:"-Le sol est la partie meuble et superficielle de la terre -L’érosion du sol est la dégradation ou l’usure du sol Ce sont . -L’action de l’eau (érosion hydrique) -L’action du vent (érosion éolienne) -L’action des animaux (surpâturage) -L’action de l’homme (érosion anthropique)"},
    {titre:"Les conséquences de l’érosion du sol", texte:"-Dégradations des sols -Diminution de la fertilité du sol -L’envasement, Le ravinement, Le déchaussement"},
    {titre:"Les mesures de protection du sol contre l’érosion", texte:"-Reboisement -Orientation dans la construction des bâtiments -Construire des haies vives -Privilégier les feux de brousse précoces -Eviter les feux de brousse tardifs -Constructions des digues, des cordons pierreux -Faire des cultures en terrasse dans les montagnes"}
  ],
  evaluation: "1) Citez deux facteurs de l'érosion du sol. 2) Proposez une mesure de protection adaptée à un champ en pente.",
  devoirMaison: "Observez un endroit érodé près de chez vous et décrivez ce qui, selon vous, en est la cause principale.",
  croquis: null,
  photo: null
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
    {titre:"Définition", texte:"La végétation est l’ensemble des arbres et des plantes."},
    {titre:"On distingue deux types végétation", texte:"-la végétation naturelle composée de plantes sauvages dites spontanées"},
    {titre:"EX : le néré, le kapokier,", texte:"-la végétation artificialisée composée de plantes cultivées. EX : orangers ; manguiers; bananiers… NB : On distingue au Togo les forêts et les savanes."},
    {titre:"Le rôle de la végétation", texte:"La végétation nous permet de : protéger le sol ; d’avoir la pluie ; d’avoir l’ombre ; d’avoir les plantes médicinales ; d’avoir de l’humus ; Elle fournit du bois et des fruits."},
    {titre:"Les menaces qui pèsent sur la végétation", texte:"Les menaces qui pèsent sur la végétation sont : les feux de végétation, la pollution des plantes par les pesticides, le déboisement, le surpâturage, la perte des micro-organismes"},
    {titre:"Pour protéger la végétation, il faut", texte:"-Eviter les feux de végétation -Créer des réserves forestières -Faire le reboisement -Eviter l’usage des pesticides -Sensibiliser la population sur l’importance de protéger la végétation"}
  ],
  evaluation: "1) Citez deux rôles de la végétation. 2) Proposez deux actions pour lutter contre la déforestation dans votre milieu.",
  devoirMaison: "Plantez ou observez un jeune arbre près de chez vous et notez, en quelques lignes, son évolution au fil de la semaine.",
  croquis: null,
  photo: null
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
    {titre:"Définitions", texte:"L’histoire est le récit de la vie des hommes du passé. C’est aussi, la science de l’étude des évènements, des faits et des civilisations du passé. L’évènement est un fait historique marquant la vie d’un peuple. Exemple : L’indépendance du Togo, la signature du traité de protectorat…"},
    {titre:"L’objet de l’étude de l’histoire", texte:"L’histoire a pour objet d’étude : les faits passés des hommes ou encore l’étude des civilisations passées."},
    {titre:"L’utilité de l’histoire", texte:"-Connaître le passé -Corriger le présent -Cultiver la paix, l’amour du prochain, la tolérance, l’acceptation de l’autre -Préparer le futur"},
    {titre:"Notion de l’esprit critique", texte:"L’esprit critique : c’est le fait d’analyser les faits ou les opinions des autres avant tout jugement. C’est aussi la manière de distinguer les faits, des opinions et apporter son point de vue. L’esprit de critique : c’est le fait de rejeter les faits ou opinions des autres sans une raison valable et fondée. L’esprit critique est différent de l’esprit de critique."}
  ],
  evaluation: "1) Donnez la définition de l'histoire. 2) Expliquez en une phrase pourquoi il est utile de connaître le passé.",
  devoirMaison: "Demandez à un membre âgé de votre famille de vous raconter un événement ancien de votre localité et résumez-le en cinq lignes.",
  croquis: null,
  photo: null
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
    {titre:"Définition d’une source de l’histoire", texte:"Les sources de l’histoire sont l’ensemble de documents (sources)dont se servent les historiens pour reconstituer l’histoire."},
    {titre:"Ceux sont des textes écrits", texte:"Exemples : Les archives ; les journaux ; correspondances etc. 2-2-Les sources orales. Ceux sont des témoignages transmis oralement. Exemples : Témoignage historiques, les chansons ; les contes ; les rituels etc."},
    {titre:"Ceux sont des traces laissées par les hommes du passé", texte:"Exemples :(Tessons ; poteries ; objets d’arts, statuettes, monuments ; ..."}
  ],
  evaluation: "1) Citez les trois catégories de sources de l'histoire. 2) Donnez un exemple togolais pour chaque catégorie.",
  devoirMaison: "Trouvez chez vous ou dans votre entourage un exemple de source orale (conte, chanson, proverbe) et notez-en le contenu en quelques lignes.",
  croquis: null,
  photo: null
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
    {titre:"Les calendriers", texte:"Pour compter le temps, on utilise plusieurs calendriers. Les plus utilisés et les plus connus sont : le calendrier grégorien (chrétien) et le calendrier musulman (Islamique). Le calendrier chrétien commence à l’an 0 avec la naissance de Jésus Christ tandis que le calendrier musulman a débuté en l’an 622 ; il correspond à l’Hégire du prophète MAHOMED."},
    {titre:"Les unités de mesure du temps", texte:"Pour évaluer le temps qui passe, on l’a découpé en millénaire (1000 ans), en siècle (100 ans), en décennie (10 an), en génération (25à30 ans), en trimestre (3 mois), en semestre (6mois) etc... Dans une année, on a 12 mois qui fait 52 semaines qui est égale à365 jours. Un jour fait 24 heures et une heure égale 60 minutes."},
    {titre:"Définition de la chronologie et de la frise chronologique", texte:"-La chronologie est l’étude des dates et leurs ordres de successions/ c’est la science de la fixation des dates et des évènements. -Une frise chronologique est une ligne horizontale qui situe les événements, les époques les uns par rapport aux autres."}
  ],
  evaluation: "1) Combien d'années comptent un siècle et un millénaire ? 2) Placez sur une frise simple deux dates de votre choix.",
  devoirMaison: "Construisez une petite frise chronologique de votre propre vie en y plaçant trois événements marquants avec leur date.",
  croquis: {titre: "Frise chronologique (exemple)", svg: "<svg viewBox=\"0 0 700 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"700\" height=\"180\" fill=\"#F3F0E6\"/>\n<line x1=\"40\" y1=\"90\" x2=\"660\" y2=\"90\" stroke=\"#153F38\" stroke-width=\"3\"/>\n<polygon points=\"660,84 674,90 660,96\" fill=\"#153F38\"/>\n<line x1=\"133.0\" y1=\"85\" x2=\"133.0\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"133.0\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"133.0\" y=\"68\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">An 0</text>\n<text x=\"133.0\" y=\"82\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"400\" text-anchor=\"middle\">Repère</text>\n<line x1=\"319.0\" y1=\"85\" x2=\"319.0\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"319.0\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"319.0\" y=\"120\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">Xe siècle</text>\n<line x1=\"505.0\" y1=\"85\" x2=\"505.0\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"505.0\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"505.0\" y=\"68\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">XXe siècle</text>\n</svg>", legende: "Exemple de frise graduée sur une échelle de temps régulière."},
  photo: null
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
    {titre:"Les grandes divisions du temps historique", texte:"Les grandes divisions du temps historique sont : La préhistoire et l’histoire : 2.1. Les grandes périodes de la préhistoire. -le paléolithique -Le néolithique 2.2. Les grandes périodes de l’histoire. -L’Antiquité -le Moyen-âge -les temps modernes -l’Epoque contemporaine"},
    {titre:"Les grandes périodes de l’histoire sur un axe chronologique", texte:"-3500 0 476 1492 1789"}
  ],
  evaluation: "1) Quel événement marque le passage de la Préhistoire à l'Histoire ? 2) Citez les quatre grandes périodes de l'Histoire.",
  devoirMaison: "Construisez une frise chronologique plaçant les six grandes périodes étudiées, de la Préhistoire à l'Époque contemporaine.",
  croquis: {titre: "Frise des grandes périodes de l'Histoire", svg: "<svg viewBox=\"0 0 760 180\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"760\" height=\"180\" fill=\"#F3F0E6\"/>\n<line x1=\"40\" y1=\"90\" x2=\"720\" y2=\"90\" stroke=\"#153F38\" stroke-width=\"3\"/>\n<polygon points=\"720,84 734,90 720,96\" fill=\"#153F38\"/>\n<line x1=\"94.4\" y1=\"85\" x2=\"94.4\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"94.4\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"94.4\" y=\"68\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">Préhistoire</text>\n<text x=\"94.4\" y=\"82\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"400\" text-anchor=\"middle\">Paléo. / Néo.</text>\n<line x1=\"278.0\" y1=\"85\" x2=\"278.0\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"278.0\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"278.0\" y=\"120\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">Antiquité</text>\n<line x1=\"414.00000000000006\" y1=\"85\" x2=\"414.00000000000006\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"414.00000000000006\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"414.00000000000006\" y=\"68\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">Moyen Âge</text>\n<line x1=\"550.0\" y1=\"85\" x2=\"550.0\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"550.0\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"550.0\" y=\"120\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\">Temps modernes</text>\n<line x1=\"665.6\" y1=\"85\" x2=\"665.6\" y2=\"95\" stroke=\"#153F38\" stroke-width=\"2\"/>\n<circle cx=\"665.6\" cy=\"90\" r=\"5\" fill=\"#C68A2E\" stroke=\"#153F38\" stroke-width=\"1.5\"/>\n<text x=\"665.6\" y=\"68\" font-size=\"12\" fill=\"#153F38\" font-weight=\"700\" text-anchor=\"middle\"><tspan x=\"665.6\" dy=\"0\">Époque</tspan><tspan x=\"665.6\" dy=\"14\">contemporaine</tspan></text>\n</svg>", legende: "Frise des grandes divisions et périodes du temps historique."},
  photo: {fichier: "h4_frise_periodes_reelle.png", legende: "Frise chronologique officielle des grandes périodes de l'Histoire"}
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
    {titre:"L’importance de l’apparition de l’Homme en Afrique", texte:"Les plus anciens ossements humains ont été retrouvés en Afrique. C’est pourquoi On dit que l’Afrique est le berceau de l’humanité c’est-à-dire que les premiers hommes sont apparus en Afrique. Donc les premiers hommes étaient des Noires. 3.1- Définition. La Préhistoire est la longue période qui s’est écoulée depuis l’apparition de l’homme jusqu’à l’invention de l’écriture. Elle est subdivisée en 2 périodes qui sont : le Paléolithique et le Néolithique 3.2- Les caractéristiques de la préhistoire. La majeure caractéristique de la préhistoire est l’absence de l’écriture"},
    {titre:"Mode de vie au paléolithique : âge de la pierre taillée", texte:"L’homme était nomade, sans abri fixe et vivait dans des huttes de bois, sous des tentes, dans des grottes et cavernes. Il vivait de la chasse, de la pêche et de la cueillette. Il mangeait des aliments crus. Il taillait des pierres pour fabriquer des outils. Ils s’habillaient avec les peaux des animaux."},
    {titre:"Mode de vie au néolithique : âge de la pierre polie", texte:"L’homme devient sédentaire, découvre l’agriculture et l’élevage ; il fabrique des outils adoptés à l’agriculture et à l’élevage (meule, faucille, houe). Il prépare ses aliments et vit en communauté. Il invente la poterie, la vannerie et le tissage. 4 Carte de l’Afrique avec les vestiges du Paléolithique et du Néolithique (à faire par le professeur)"}
  ],
  evaluation: "1) Pourquoi dit-on que l'Afrique est le berceau de l'humanité ? 2) Donnez une différence entre le mode de vie au Paléolithique et au Néolithique.",
  devoirMaison: "Recherchez le nom d'un site préhistorique africain autre que ceux étudiés en classe et notez ce que l'on y a découvert.",
  croquis: [
    {titre: "L'arbre de l'évolution humaine (document authentique)", svg: null, img: "photos_hg/h5_arbre_evolution.png", legende: "Schéma de l'évolution humaine : Orrorin, Australopithèque, Homo habilis, Homme de Néandertal, Homo sapiens."},
    {titre: "Carte des sites préhistoriques en Afrique (document authentique)", svg: null, img: "photos_hg/h5_sites_prehistoriques_afrique.jpg", legende: "Localisation précise des grands fossiles découverts en Afrique : Toumaï (Tchad), Lucy (Éthiopie), l'Homme de Jebel Irhoud (Maroc), etc."}
  ],
  photo: {fichier: "h5_prehistoire_afrique.jpg", legende: "Site préhistorique d'Oldoway (Tanzanie)"}
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
    {titre:"Définitions", texte:"- L’archéologie : est la science qui étudie des civilisations disparues à partir des vestiges - Un vestige est tout objet des hommes du passé enfoui ou à la surface de la terre."},
    {titre:"Localisation des sites archéologique du Togo sur une carte", texte:"fer à Bassaret de tado,les pavements de Notsè, les coquillages d’ Aneho,les grottes de Nano, les dessins rupestres de Sogou, abri sous roche à Namoudjoga Les sites archéologiques du Togo sont : Dapaong, Nano, Sogou, Namoudjoga, Bassar, Bandjéli, Sokodé, Atakpamé, Dayi, Tado, Notsè, Bè. 4.1- Mode de vie au paléolithique. Au Paléolithique, les hommes étaient des nomades : ils vivaient de la chasse et de la cueillette Ils mangeaient des aliments crus. Les outils de travail étaient en os, en pierre taillée. 4.2- Mode de vie au Néolithique. Au Néolithique, les hommes pratiquaient de l’agriculture, de l’élevage et de la pêche. Ils sont devenus sédentaires. Pour conserver leurs récoltes, la poterie nait et ils l’utilisaient comme greniers. Les outils étaient alors en pierre polie. Pour surveiller les récoltes et les troupeaux, les premiers villages s’organisèrent"}
  ],
  evaluation: "1) Définissez l'archéologie. 2) Citez deux sites archéologiques du Togo et ce qu'on y a découvert.",
  devoirMaison: "Sur un fond de carte du Togo, placez et nommez trois sites archéologiques étudiés en classe.",
  croquis: [
    {titre: "Carte des vestiges archéologiques du Togo (document authentique)", svg: null, img: "photos_hg/h6_carte_vestiges_togo_manuscrite.jpg", legende: "Carte manuscrite localisant les sites archéologiques du Togo : Bassar et Tado (fer), Notsè (pavements), Aného (coquillages), Nano (grottes), Sogou (dessins rupestres), Namoudjoga (abri sous roche)."}
  ],
  photo: {fichier: "h6_art_rupestre.png", legende: "Comparaison de dessins et peintures rupestres préhistoriques"}
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
    {titre:"Localisation de l’Egypte ancienne sur une carte d’Afrique", texte:"L’Egypte ancienne est située au Nord-Est de l’Afrique le long du Nil. Elle est limitée au Nord par la mer Méditerranée, au sud par la première cataracte, à l’ouest par le désert de Libye et à l’Est par le désert d’Arabie."},
    {titre:"La société égyptienne était hiérarchisée", texte:"- Les privilégiés : le pharaon, le vizir, les gouverneurs, les scribes, les prêtres, les officiers… - Le bas-peuple : les soldats, les artisans, les commerçants, les paysans - Les esclaves (prisonniers de guerre)"},
    {titre:"Le rôle des différents composants de la société égyptienne", texte:"-Le pharaon : c'est le roi de l'Egypte -Les scribes : administrateurs, qui savent lire et écrire -Les prêtres : ils sont chargés de recevoir des offrandes et de rendre le culte aux dieux dans les temples. -Les paysans : s'occupent des travaux champêtres -Les esclaves : ils étaient soumis aux travaux durs (dans les mines, construction des temples et des pyramides)"},
    {titre:"L'histoire égyptienne est subdivisée en trois périodes qui sont", texte:"-L'ancien empire (2800 à 2200 av. J-C). Sa capitale était Memphis. C'est à cette époque que sont construites les grandes pyramides. Il a connu le règne de pharaons comme Ménès. -Le moyen empire (2200 à 1650 av. J-C). Sa capitale est Thèbes. Période de calme. Elle a connu le règne des pharaons comme Aménophis, les Sésostris, Ougaf. -Le nouvel empire (1650 à 1150 av. J-C). Sa capitale est Thèbes. Elle est marquée par le règne de pharaons tels que Thoutmosis III, Toutankhamon, Akhenaton, Ramsès II."},
    {titre:"Les principales pyramides de l'Egypte ancienne", texte:"Les plus célèbres pyramides sont celles de Khéops, Mykérinos, Khephren. Elles sont des gigantesques monuments qui servaient de tombeaux pour les pharaons et les riches."},
    {titre:"Les grands temples égyptiens et leur rôle", texte:"Les temples les plus impressionnants sont ceux de Médinet, Horus, Isis, Hatchepsout, Karnak, le temple-caverne d'Abou Simbel, et le temple de Louxor. Les temples étaient des édifices consacrés au culte des divinités."}
  ],
  evaluation: "1) Où se situe l'Égypte ancienne ? 2) Quel était le rôle du pharaon dans la société égyptienne ?",
  devoirMaison: "Dessinez ou décrivez une pyramide égyptienne et expliquez en trois lignes à quoi elle servait.",
  croquis: {titre: "Carte de l'Égypte ancienne (document authentique)", svg: null, img: "photos_hg/h7_carte_egypte.jpeg", legende: "Carte détaillée de l'Égypte ancienne : Basse et Haute Égypte, le Nil, Memphis, Thèbes, la Vallée des Rois, Karnak, Louxor, Abou Simbel, gisements d'or."},
  photo: {fichier: "h7_egypte_pyramides.jpg", legende: "Les pyramides de Gizeh, Égypte"}
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
    {titre:"Les principales activités économiques", texte:"Les égyptiens pratiquaient les activités économiques telles que l’agriculture, l’élevage, la pêche, l’artisanat et le commerce"},
    {titre:"Sans le Nil l’Egypte serait un désert", texte:"Vue l’importance du Nil, l’historien HERODOTE affirme : « l’Egypte est un don du Nil »"},
    {titre:"Les principaux aspects de la religion égyptienne", texte:"Les égyptiens étaient des polythéistes car ils adoraient plusieurs dieux."},
    {titre:"Isis : déesse de la maternité, protectrice de la famille", texte:"Les égyptiens croyaient à l’immortalité de l’âme dans l’au-delà. Ils faisaient le culte et la momification des morts. Les morts étaient enterrés dans les pyramides, les hypogées"}
  ],
  evaluation: "1) Pourquoi dit-on que « l'Égypte est un don du Nil » ? 2) Citez deux éléments hérités de la civilisation égyptienne encore présents aujourd'hui.",
  devoirMaison: "Recherchez un exemple actuel (au Togo ou ailleurs) où l'on utilise encore une notion de géométrie héritée des Égyptiens anciens.",
  croquis: null,
  photo: {fichier: "h8_egypte_heritage.jpg", legende: "Hiéroglyphes égyptiens"}
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
    {titre:"Définition : La métallurgie", texte:"La métallurgie est la transformation du minerai brut en loupe de fer."},
    {titre:"Pour l’obtention du fer un ordre est à respecter", texte:"-La recherche du minerai, effectuée par les femmes. Elles réduisent le tout en petits morceaux ; -La construction du fourneau par des spécialistes avec de l’argile, des pierres et du bois ; -La recherche du bois ; -La fabrication du charbon de bois ; -La disposition de ces différents éléments dans le fourneau, selon un ordre précis (charbon, bois vert, charbon, minerai, charbon incandescent, charbon). L’aération du fourneau se fait avec des tuyères pour favoriser la combustion du charbon qui va entrainer la fonte du minerai. Les deux catégories d’activités complémentaires : la réduction du fer (la loupe) et la forge. Ces activités permettent d’avoir les outils agricoles tels que : dabas, houes, coupe-coupe…, les armes en fer. 5.1. Conséquences techniques . Le travail du fer a engendré le perfectionnement des outils de travail : instruments en fer plus résistants que ceux en pierre, en os et en bois. 5.2- conséquences économiques. La vente des objets en fer fait des forgerons et de leurs sociétés, des sociétés riches et puissantes. 5.3. Conséquences politiques. Le travail du fer a permis de créer des Etats puissants (Bassar et Tado) 5.4. Conséquences sociales. Emergence de groupes spécialisés : Koli, Bessib et des villages spécialisés dans la forge ou de fonte 5.5- Sur le plan ésotérique. La maîtrise du feu confère aux forgerons une puissance mystique qui les fait craindre par la population"}
  ],
  evaluation: "1) Définissez la métallurgie du fer. 2) Citez une conséquence économique et une conséquence sociale de la métallurgie du fer au Togo.",
  devoirMaison: "Expliquez en quelques lignes pourquoi la maîtrise du fer a pu donner du pouvoir et de la richesse à une communauté.",
  croquis: [
    {titre: "Carte des sites métallurgiques du Togo (document authentique)", svg: null, img: "photos_hg/h9_carte_sites_metallurgiques.jpg", legende: "Localisation précise des sites métallurgiques togolais : Bassar, Akpafou, Tado."},
    {titre: "Coupe longitudinale d'un fourneau rempli, Bassar (document authentique)", svg: null, img: "photos_hg/h9_coupe_fourneau_bassar.jpg", legende: "Schéma détaillé montrant l'agencement réel du charbon, du minerai de fer, du bois frais et des tuyères dans un fourneau de Bassar."}
  ],
  photo: {fichier: "h9_fourneau_fer.jpg", legende: "Fourneau traditionnel de réduction du fer"}
}

};
