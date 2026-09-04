const FICHES_DATA_3E = {

g3_1: {
  leconTitre: "Togo : Presentation et Cartographie",
  theme: "Thème 1 — Togo, milieu physique et problèmes environnementaux majeurs",
  competence: "Mobiliser des ressources en géographie pour résoudre des situations d'apprentissage liées au milieu physique",
  documentation: ["Géographie 3e, [collection à préciser]", "Carte administrative du Togo, atlas du Togo"],
  supportsDidactiques: "carte d'Afrique, carte administrative du Togo, quadrillage",
  preRequis: "Notions vues en 4e sur le continent africain",
  capacitesContenus: [
    ["Présenter le Togo", "Localisation ; coordonnées géographiques ; limites ; autres informations (dimensions, superficie, population, monnaie, niveau de développement)"],
    ["Réaliser le croquis cartographique du Togo à partir d'un quadrillage", "Croquis cartographique du Togo"]
  ],
  situationProbleme: "Pour un projet d'échange scolaire, la classe doit présenter le Togo à des correspondants étrangers qui ne connaissent presque rien du pays. Les élèves se rendent compte qu'ils ont eux-mêmes du mal à donner des informations précises sur la localisation, les limites et les principales caractéristiques du Togo. Ils décident de mener des recherches pour bien présenter leur pays.",
  consignes: ["Où se situe le Togo en Afrique ? Quelles sont ses coordonnées géographiques ?", "Quelles sont ses limites ?", "Quelles autres informations permettent de présenter le pays ?"],
  strategies: ["Exploitation de cartes et de documents", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle la localisation de l'Afrique et de ses régions (vu en 4e)", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait observer la carte d'Afrique et la carte administrative du Togo ; fait relever localisation, limites et informations générales", activiteEleve:"Observent, analysent les cartes, échangent en groupe", support:"Carte d'Afrique, carte administrative du Togo"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; fait réaliser le croquis du Togo à partir d'un quadrillage", activiteEleve:"Exposent ; participent à la structuration ; reproduisent le croquis", support:"Tableau, quadrillage, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Localisation du Togo", texte:"Le Togo est un pays d'Afrique de l'Ouest, situé dans la zone intertropicale, en forme de couloir étroit orienté nord-sud, avec une faible façade maritime sur le golfe de Guinée au sud."},
    {titre:"2. Limites du Togo", texte:"Le Togo est limité au nord par le Burkina Faso, à l'est par le Bénin, à l'ouest par le Ghana, et au sud par l'océan Atlantique (golfe de Guinée)."},
    {titre:"3. Autres informations", texte:"Le Togo s'étend sur environ 56 600 km². Selon le 5e Recensement général de la population et de l'habitat (RGPH-5, INSEED, novembre 2022), sa population résidente est de 8 095 498 habitants (3 944 510 hommes et 4 150 988 femmes). Sa capitale est Lomé et sa monnaie le franc CFA."},
    {titre:"4. Repères cartographiques à retenir", texte:"Sur le croquis du Togo réalisé à partir d'un quadrillage, il faut savoir situer et nommer : les quatre pays limitrophes (Burkina Faso, Bénin, Ghana, océan Atlantique), la capitale Lomé, et la forme allongée caractéristique du territoire togolais."}
  ],
  evaluation: "1) Citez les pays limitrophes du Togo. 2) Donnez la superficie approximative du Togo.",
  devoirMaison: "Réalisez le croquis du Togo à partir du quadrillage vu en classe.",
  croquis: {titre: "Croquis du Togo", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\"/></clipPath>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"#EDEAE0\" stroke=\"none\"/>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n</svg>", legende: "Contour réel simplifié du Togo, avec ses pays limitrophes et l'océan Atlantique."}
},

g3_2: {
  leconTitre: "Togo : Relief et Hydrographie",
  theme: "Thème 1 — Togo, milieu physique et problèmes environnementaux majeurs",
  competence: "Mobiliser des ressources en géographie pour résoudre des situations d'apprentissage liées au milieu physique",
  documentation: ["Géographie 3e, [collection à préciser]", "Cartes physiques du Togo"],
  supportsDidactiques: "carte physique du Togo, quadrillage",
  preRequis: "Présentation générale du Togo (leçon précédente)",
  capacitesContenus: [
    ["Présenter les grands ensembles de relief et les principaux éléments hydrographiques du Togo", "Grands ensembles de relief ; principaux éléments hydrographiques"],
    ["Montrer l'importance du relief et de l'hydrographie au Togo", "Importance du relief et de l'hydrographie"],
    ["Sensibiliser sur les risques de catastrophes liés au relief et à l'hydrographie au Togo", "Risques de catastrophes ; projets pédagogiques"]
  ],
  situationProbleme: "Après de fortes pluies, un village situé près d'un cours d'eau subit une inondation qui endommage des maisons. Les habitants se demandent si le relief et l'organisation du réseau hydrographique du Togo peuvent expliquer ce genre de catastrophe, et comment mieux s'en protéger.",
  consignes: ["Quels sont les grands ensembles de relief et d'hydrographie du Togo ?", "Quelle est leur importance pour le pays ?", "Quels risques de catastrophes y sont liés et comment s'en protéger ?"],
  strategies: ["Exploitation de cartes physiques", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle la présentation générale du Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait exploiter la carte physique pour identifier reliefs et cours d'eau ; fait relever leur importance et les risques associés", activiteEleve:"Observent la carte, réalisent les croquis du relief et de l'hydrographie, échangent en groupe", support:"Carte physique, quadrillage"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; conduit un projet pédagogique de sensibilisation", activiteEleve:"Exposent ; participent à la structuration ; proposent des mesures de prévention", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Le relief du Togo", texte:"Le relief togolais est globalement peu élevé. Il comprend une plaine côtière au sud, des plateaux au centre, et surtout la chaîne montagneuse de l'Atakora (appelée aussi chaîne des monts Togo/Kabyè selon les tronçons), qui traverse le pays en diagonale du sud-ouest au nord-est. Le point culminant est le mont Agou, avec environ 986 mètres d'altitude."},
    {titre:"2. L'hydrographie du Togo", texte:"Le réseau hydrographique togolais est organisé autour de deux grands bassins : le bassin du Mono à l'est (avec le fleuve Mono, qui marque en partie la frontière avec le Bénin) et le bassin de la Volta à l'ouest et au nord (avec l'Oti, principal affluent togolais de la Volta). Le lac Togo, proche du littoral, est un plan d'eau important pour la pêche et le tourisme."},
    {titre:"3. Repères cartographiques à retenir", texte:"Sur le croquis de l'hydrographie togolaise, il faut savoir situer : le fleuve Mono à l'est, le fleuve Oti au nord, le lac Togo près du littoral, ainsi que la chaîne montagneuse traversant le pays du sud-ouest au nord-est."}
  ],
  evaluation: "1) Citez deux grands ensembles de relief du Togo. 2) Nommez deux fleuves ou cours d'eau importants du Togo.",
  devoirMaison: "Proposez une mesure pour prévenir les inondations dans votre localité.",
  croquis: null
},

g3_3: {
  leconTitre: "Togo : Climat",
  theme: "Thème 1 — Togo, milieu physique et problèmes environnementaux majeurs",
  competence: "Mobiliser des ressources en géographie pour résoudre des situations d'apprentissage liées au milieu physique",
  documentation: ["Géographie 3e, [collection à préciser]", "Données climatiques (température, précipitations) de localités togolaises"],
  supportsDidactiques: "cartes climatiques, données de précipitation et de température",
  preRequis: "Notions vues sur le relief et l'hydrographie du Togo (leçon précédente)",
  capacitesContenus: [
    ["Présenter le climat togolais", "Grands types climatiques et leurs caractéristiques"],
    ["Expliquer l'anomalie climatique du Bas-Togo", "Présentation de l'anomalie ; causes et conséquences"],
    ["Analyser un diagramme ombrothermique", "Réalisation et analyse d'un diagramme ombrothermique"]
  ],
  situationProbleme: "Les élèves remarquent qu'il pleut beaucoup plus à Kpalimé qu'à Lomé, pourtant les deux villes sont proches. Ils veulent comprendre les différents types de climat au Togo et pourquoi la région de Lomé (le Bas-Togo) connaît un climat particulier, plus sec que ses voisines.",
  consignes: ["Quels sont les grands types de climat du Togo et leurs caractéristiques ?", "Qu'est-ce que l'anomalie climatique du Bas-Togo et quelles en sont les causes ?", "Comment lire et analyser un diagramme ombrothermique ?"],
  strategies: ["Exploitation de documents écrits et visuels", "Exercice pratique de réalisation d'un diagramme"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions de relief et d'hydrographie du Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait présenter les types climatiques ; fait expliquer l'anomalie du Bas-Togo ; fait réaliser un diagramme ombrothermique d'une localité", activiteEleve:"Observent les documents, réalisent et analysent le diagramme, échangent en groupe", support:"Données climatiques, papier millimétré"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les types de climat au Togo", texte:"Le Togo connaît une transition climatique du sud au nord : un climat subéquatorial (guinéen) au sud, marqué par deux saisons des pluies et deux saisons sèches, et un climat tropical soudanien au nord, avec une seule saison des pluies et une longue saison sèche."},
    {titre:"2. Les éléments du climat", texte:"Les températures restent globalement élevées toute l'année (entre 24°C et 30°C en moyenne), tandis que les précipitations sont plus abondantes dans la région des Plateaux (climat le plus humide) et diminuent vers le nord et vers le littoral immédiat, qui connaît un microclimat plus sec malgré sa position côtière."},
    {titre:"3. Conséquences pour les activités humaines", texte:"Cette diversité climatique explique la variété des cultures pratiquées selon les régions : cultures pluviales à cycle court dans le nord, cultures de rente (café, cacao) dans les zones plus humides du centre-sud, et cultures maraîchères et vivrières variées dans le sud."}
  ],
  evaluation: "1) Citez les deux grands types de climat du Togo. 2) Expliquez brièvement l'anomalie climatique du Bas-Togo.",
  devoirMaison: "A partir de données fournies, réalisez le diagramme ombrothermique de votre localité.",
  croquis: null
},

g3_4: {
  leconTitre: "Togo : Sol et Vegetation",
  theme: "Thème 1 — Togo, milieu physique et problèmes environnementaux majeurs",
  competence: "Mobiliser des ressources en géographie pour résoudre des situations d'apprentissage liées au milieu physique",
  documentation: ["Géographie 3e, [collection à préciser]", "Carte des sols et carte de végétation du Togo"],
  supportsDidactiques: "carte de végétation, documents sur les types de sols, quadrillage",
  preRequis: "Notions vues sur le climat du Togo (leçon précédente)",
  capacitesContenus: [
    ["Présenter les types de sols et de végétation du Togo", "Types de sols (ferrugineux, ferralitiques, hydromorphes) ; carte de végétation"],
    ["Dégager les qualités culturales des sols du Togo", "Qualités culturales des sols"],
    ["Sensibiliser sur les risques de catastrophes liés au sol et à la végétation", "Risques liés au sol et à la végétation ; adoption de comportements civiques"]
  ],
  situationProbleme: "Le père de Kokou cultive du café dans la région des Plateaux tandis que son oncle cultive du riz dans une zone marécageuse. Kokou remarque que le sol et les plantations ne sont pas les mêmes selon les régions du Togo. Il veut comprendre les différents types de sols et de végétation du pays, et les risques qui les menacent.",
  consignes: ["Quels sont les différents types de sols et de végétation du Togo ?", "Quelles sont les qualités culturales de ces sols ?", "Quels risques de catastrophes menacent le sol et la végétation, et comment les protéger ?"],
  strategies: ["Exploitation de documents écrits et visuels", "Discussion dirigée, brainstorming"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions de climat du Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait identifier les types de sols ; fait réaliser le croquis de la végétation ; fait mettre en relation sols et cultures ; fait identifier les risques de catastrophes", activiteEleve:"Observent, analysent les documents, réalisent le croquis, échangent en groupe", support:"Cartes de sols et de végétation, quadrillage"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; amène à proposer des actions de protection", activiteEleve:"Exposent ; participent à la structuration ; proposent des actions civiques", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les types de sols du Togo", texte:"On distingue au Togo trois grandes catégories de sols : les sols ferrugineux (dominants au nord, moyennement fertiles), les sols ferralitiques (au sud et au centre, plus lessivés) et les sols hydromorphes (dans les zones basses et humides, propices au riz)."},
    {titre:"2. La végétation du Togo", texte:"La végétation togolaise varie du nord au sud : savane arborée et arbustive dans les Savanes et la Kara, forêts claires et zones de transition dans la région Centrale, et reliques de forêt dense semi-décidue dans la région des Plateaux et le long des cours d'eau (forêts-galeries)."},
    {titre:"3. Repères cartographiques à retenir", texte:"Sur la carte des sols et de la végétation, il faut savoir situer les grandes zones de sols dominants selon les régions, ainsi que la répartition nord-sud de la végétation, de la savane sahélienne au nord aux reliques de forêt dense au sud."}
  ],
  evaluation: "1) Citez trois types de sols du Togo. 2) Associez un type de sol à une culture adaptée.",
  devoirMaison: "Proposez deux actions pour protéger le sol et la végétation dans votre localité.",
  croquis: {titre: "Carte des sols et de la végétation du Togo", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\"/></clipPath>\n<g clip-path=\"url(#togoClip)\"><rect x=\"0\" y=\"10\" width=\"300\" height=\"65\" fill=\"#D9C48A\"/></g>\n<g clip-path=\"url(#togoClip)\"><rect x=\"0\" y=\"75\" width=\"300\" height=\"99\" fill=\"#B7CFC2\"/></g>\n<g clip-path=\"url(#togoClip)\"><rect x=\"0\" y=\"174\" width=\"300\" height=\"91\" fill=\"#E8C9B0\"/></g>\n<g clip-path=\"url(#togoClip)\"><rect x=\"0\" y=\"265\" width=\"300\" height=\"108\" fill=\"#BFD8C8\"/></g>\n<g clip-path=\"url(#togoClip)\"><rect x=\"0\" y=\"373\" width=\"300\" height=\"97\" fill=\"#A9C9D9\"/></g>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<g clip-path=\"url(#togoClip)\"><line x1=\"0\" y1=\"75\" x2=\"300\" y2=\"75\" stroke=\"#153F38\" stroke-width=\"1\" stroke-dasharray=\"4,3\" opacity=\"0.6\"/></g>\n<g clip-path=\"url(#togoClip)\"><line x1=\"0\" y1=\"174\" x2=\"300\" y2=\"174\" stroke=\"#153F38\" stroke-width=\"1\" stroke-dasharray=\"4,3\" opacity=\"0.6\"/></g>\n<g clip-path=\"url(#togoClip)\"><line x1=\"0\" y1=\"265\" x2=\"300\" y2=\"265\" stroke=\"#153F38\" stroke-width=\"1\" stroke-dasharray=\"4,3\" opacity=\"0.6\"/></g>\n<g clip-path=\"url(#togoClip)\"><line x1=\"0\" y1=\"373\" x2=\"300\" y2=\"373\" stroke=\"#153F38\" stroke-width=\"1\" stroke-dasharray=\"4,3\" opacity=\"0.6\"/></g>\n<circle cx=\"103\" cy=\"23\" r=\"4\" fill=\"#153F38\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"111\" y=\"27\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Dapaong</text>\n<circle cx=\"167\" cy=\"143\" r=\"4\" fill=\"#153F38\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"175\" y=\"147\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Kara</text>\n<circle cx=\"163\" cy=\"194\" r=\"4\" fill=\"#153F38\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"171\" y=\"198\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Sokodé</text>\n<circle cx=\"163\" cy=\"325\" r=\"4\" fill=\"#153F38\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"171\" y=\"329\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Atakpamé</text>\n<circle cx=\"169\" cy=\"452\" r=\"4\" fill=\"#153F38\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"177\" y=\"456\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Lomé</text>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n</svg>", legende: "Les grandes zones de sols et de végétation varient du nord au sud du Togo."}
},

g3_5: {
  leconTitre: "Togo : Mouvements et Repartition de la Population",
  theme: "Thème 2 — Dynamique de la population togolaise et ses enjeux",
  competence: "Résoudre des situations d'apprentissage liées à la dynamique de la population togolaise",
  documentation: ["Géographie 3e, [collection à préciser]", "Données démographiques du Togo (recensements)"],
  supportsDidactiques: "carte de répartition de la population ou carte des densités, données statistiques",
  preRequis: "Notions vues au thème 1 (milieu physique du Togo)",
  capacitesContenus: [
    ["Présenter les mouvements de la population togolaise", "Mouvements internes/naturels ; migrations internes ; migrations internationales"],
    ["Expliquer l'inégale répartition de la population du Togo", "Différentes zones de peuplement ; causes de l'inégale répartition"]
  ],
  situationProbleme: "En observant une carte de densité de population du Togo, Abra remarque que certaines zones sont très peuplées (comme Lomé) alors que d'autres le sont beaucoup moins. Elle apprend aussi que des membres de sa famille ont quitté leur village pour la ville, et que certains sont même partis à l'étranger. Elle veut comprendre ces mouvements de population et pourquoi elle n'est pas répartie de la même façon partout au Togo.",
  consignes: ["Quels sont les différents mouvements de la population togolaise ?", "Comment la population togolaise est-elle répartie sur le territoire ?", "Quelles sont les causes de cette répartition inégale ?"],
  strategies: ["Exploitation de données démographiques", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions vues sur le milieu physique du Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait décrire mouvements naturels et migratoires (internes et internationaux) ; fait identifier les zones de peuplement et leurs causes sur la carte des densités", activiteEleve:"Observent, analysent les données et la carte, échangent en groupe", support:"Données démographiques, carte des densités"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les mouvements de population", texte:"Le Togo connaît d'importants mouvements internes de population, notamment un exode rural des campagnes du nord et du centre vers les villes du sud (Lomé en particulier), ainsi que des migrations saisonnières liées au travail agricole."},
    {titre:"2. La répartition de la population", texte:"La population togolaise est très inégalement répartie : elle est concentrée dans la région Maritime (autour de Lomé) et dans certaines zones densément peuplées de la région de la Kara (pays kabyè), tandis que de vastes espaces du nord et du centre restent faiblement peuplés."},
    {titre:"3. Facteurs de cette répartition", texte:"Cette répartition s'explique par la fertilité des sols, la présence d'infrastructures et d'emplois (surtout autour de la capitale), ainsi que par des facteurs historiques et climatiques."}
  ],
  evaluation: "1) Citez les trois types de mouvements de la population togolaise. 2) Nommez une zone densément peuplée et une zone faiblement peuplée du Togo.",
  devoirMaison: "Expliquez pourquoi les causes économiques sont importantes dans la répartition de la population aujourd'hui.",
  croquis: null
},

g3_6: {
  leconTitre: "Togo : Composition et Structure de la Population",
  theme: "Thème 2 — Dynamique de la population togolaise et ses enjeux",
  competence: "Résoudre des situations d'apprentissage liées à la dynamique de la population togolaise",
  documentation: ["Géographie 3e, [collection à préciser]", "Carte des groupes socio-culturels du Togo, pyramide des âges du Togo"],
  supportsDidactiques: "carte des groupes socio-culturels, pyramide des âges",
  preRequis: "Notions vues sur les mouvements et la répartition de la population (leçon précédente)",
  capacitesContenus: [
    ["Présenter les avantages et les défis liés à la diversité socio-culturelle au Togo", "Principaux groupes socio-culturels ; avantages ; défis"],
    ["Décrire la structure de la population togolaise", "Structure par âge ; structure par sexe ; pyramide des âges"],
    ["Dégager les enjeux de l'extrême jeunesse de la population togolaise", "Enjeux sociaux, économiques, environnementaux"]
  ],
  situationProbleme: "Dans sa classe, Yaovi remarque que ses camarades viennent de groupes socio-culturels différents (Ewé, Kabyè, Kotokoli, Mina...) et parlent parfois d'autres langues à la maison. Il veut comprendre la diversité socio-culturelle du Togo, comment la population est structurée par âge et par sexe, et pourquoi on parle souvent de « l'extrême jeunesse » de la population togolaise.",
  consignes: ["Quels sont les principaux groupes socio-culturels du Togo ? Quels avantages et défis cette diversité présente-t-elle ?", "Comment est structurée la population togolaise par âge et par sexe ?", "Quels sont les enjeux de l'extrême jeunesse de la population togolaise ?"],
  strategies: ["Exploitation de cartes et de la pyramide des âges", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les mouvements et la répartition de la population togolaise", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait identifier les groupes socio-culturels sur une carte ; fait décrire et expliquer la pyramide des âges ; fait dégager les enjeux de l'extrême jeunesse", activiteEleve:"Observent, analysent carte et pyramide, échangent en groupe", support:"Carte des groupes socio-culturels, pyramide des âges"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. La composition ethnique", texte:"Le Togo compte une quarantaine de groupes ethniques, dont les plus importants sont les Éwé, Mina et Aja au sud, et les Kabyè et Tem (Kotokoli) au centre et au nord, aux côtés de nombreux autres groupes."},
    {titre:"2. La structure de la population", texte:"La population togolaise est très jeune (l'âge médian se situe autour de 20 ans), avec une natalité élevée, ce qui se traduit par une pyramide des âges à base large, typique des pays en développement."},
    {titre:"3. Enjeux liés à la structure de la population", texte:"Cette jeunesse de la population représente un potentiel important pour le développement du pays (main-d'œuvre, dynamisme), mais exige aussi des investissements soutenus en éducation, en santé et en création d'emplois."}
  ],
  evaluation: "1) Citez trois groupes socio-culturels du Togo. 2) Qu'est-ce qu'une pyramide des âges à base large ?",
  devoirMaison: "Citez un enjeu économique de l'extrême jeunesse de la population togolaise.",
  croquis: null
},

g3_7: {
  leconTitre: "Togo : Agriculture",
  theme: "Thème 3 — Une économie togolaise en pleine expansion",
  competence: "Résoudre des situations d'apprentissage liées à l'économie du Togo",
  documentation: ["Géographie 3e, [collection à préciser]", "Cartes physiques du Togo, carte agricole (cultures de rente)"],
  supportsDidactiques: "cartes physiques, carte agricole, quadrillage",
  preRequis: "Notions vues sur le milieu physique du Togo (thème 1)",
  capacitesContenus: [
    ["Présenter les conditions naturelles de l'agriculture togolaise", "Conditions liées au relief, à l'hydrographie, au climat, au sol et à la végétation togolais"],
    ["Identifier les caractéristiques générales de l'agriculture togolaise", "Outillage, techniques culturales, productivité"],
    ["Montrer l'importance de l'agriculture dans l'économie", "Importance dans l'économie togolaise ; carte agricole"],
    ["Dégager les enjeux de l'agriculture togolaise", "Efforts de modernisation ; défis de l'agriculture"]
  ],
  situationProbleme: "Le Togo est souvent présenté comme un pays « à vocation agricole ». Pourtant, Sena remarque que ses parents agriculteurs travaillent dur mais gagnent peu. Elle veut comprendre les caractéristiques de l'agriculture togolaise, son importance réelle pour l'économie du pays, ainsi que les efforts et défis pour la moderniser.",
  consignes: ["Quelles sont les caractéristiques générales de l'agriculture togolaise ?", "Quelle est son importance dans l'économie du pays ?", "Quels sont les efforts de modernisation et les défis de cette agriculture ?"],
  strategies: ["Exploitation de cartes et de documents", "Travail en petits groupes, discussion dirigée, brainstorming"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les conditions naturelles du Togo (relief, climat, sol)", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait identifier caractéristiques, importance et enjeux de l'agriculture togolaise ; fait réaliser le croquis des cultures de rente", activiteEleve:"Observent, analysent les documents, réalisent le croquis, échangent en groupe", support:"Cartes physiques, carte agricole, quadrillage"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les conditions naturelles de l'agriculture togolaise", texte:"L'agriculture togolaise dépend étroitement du relief (plaines, plateaux), de l'hydrographie (Mono, Zio, Oti et leurs affluents), du climat (zones plus humides au sud, plus sèches au nord), des sols (ferrugineux, ferralitiques, hydromorphes) et de la végétation, qui varient selon les régions."},
    {titre:"2. Une agriculture dominante dans l'économie", texte:"L'agriculture emploie la majorité de la population active togolaise et reste le principal secteur économique du pays, combinant agriculture vivrière (maïs, sorgho, igname, manioc) et agriculture de rente (coton, café, cacao)."},
    {titre:"3. Les grandes cultures selon les régions", texte:"Le coton est cultivé principalement dans les Savanes et la Kara ; le café et le cacao dans la région des Plateaux (climat plus humide) ; les cultures vivrières sont présentes dans l'ensemble du pays, avec une intensité particulière dans les zones les plus peuplées."},
    {titre:"4. Importance et défis de l'agriculture", texte:"L'agriculture contribue fortement au PIB et aux exportations togolaises (notamment le coton), mais reste confrontée à la faible mécanisation, à la dépendance aux aléas climatiques et à la nécessité de moderniser les techniques de production."},
    {titre:"5. Repères cartographiques à retenir", texte:"Sur la carte agricole du Togo, il faut savoir situer les principales zones de production : le coton dans le nord, le café/cacao dans la région des Plateaux, et les cultures vivrières réparties sur l'ensemble du territoire."}
  ],
  evaluation: "1) Citez deux caractéristiques de l'agriculture togolaise. 2) Nommez deux cultures de rente du Togo.",
  devoirMaison: "Citez un défi de l'agriculture togolaise et une piste de solution.",
  croquis: {titre: "Carte agricole du Togo", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\"/></clipPath>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"#EDEAE0\" stroke=\"none\"/>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n<g transform=\"translate(90,20)\">\n<circle cx=\"102.9\" cy=\"23.4\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"110.9\" y=\"27.4\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Coton</text>\n<circle cx=\"166.6\" cy=\"142.7\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"174.6\" y=\"146.7\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Coton</text>\n<circle cx=\"162.7\" cy=\"325.3\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"170.7\" y=\"329.3\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Café, cacao</text>\n<circle cx=\"168.5\" cy=\"451.8\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"176.5\" y=\"455.8\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\"><tspan x=\"176.5\" dy=\"0\">Cultures</tspan><tspan x=\"176.5\" dy=\"13\">vivrières</tspan></text>\n</g></svg>", legende: "Répartition schématique des grandes cultures togolaises."}
},

g3_8: {
  leconTitre: "Togo : Industrialisation",
  theme: "Thème 3 — Une économie togolaise en pleine expansion",
  competence: "Résoudre des situations d'apprentissage liées à l'économie du Togo",
  documentation: ["Géographie 3e, [collection à préciser]", "Carte minière et énergétique du Togo"],
  supportsDidactiques: "carte minière et énergétique, données statistiques",
  preRequis: "Notions vues sur l'agriculture togolaise (leçon précédente)",
  capacitesContenus: [
    ["Présenter les potentialités de l'industrie togolaise", "Ressources énergétiques, minières, agricoles ; main d'œuvre"],
    ["Identifier les caractéristiques générales de l'industrie togolaise", "Niveau d'industrialisation, types d'industries, main-d'œuvre, production, gestion"],
    ["Montrer l'importance de l'industrie dans l'économie togolaise", "Importance dans l'économie"],
    ["Dégager les enjeux de l'industrie togolaise", "Efforts d'industrialisation ; défis"]
  ],
  situationProbleme: "En passant près de Tabligbo, Edem découvre une grande cimenterie qui exploite le calcaire local. Il apprend que le Togo possède aussi des phosphates et d'autres ressources. Il se demande pourquoi, malgré ces ressources, l'industrie togolaise reste peu développée, et ce qui est fait pour la renforcer.",
  consignes: ["Quelles sont les potentialités industrielles du Togo ?", "Quelles sont les caractéristiques de son industrie et son importance économique ?", "Quels sont les efforts et les défis de l'industrialisation togolaise ?"],
  strategies: ["Exploitation de cartes et de données statistiques", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle l'importance de l'agriculture dans l'économie togolaise", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait exploiter la carte minière et énergétique ; fait identifier caractéristiques, importance et enjeux de l'industrie togolaise ; fait réaliser le croquis des ressources minières", activiteEleve:"Observent, analysent, réalisent le croquis, échangent en groupe", support:"Carte minière et énergétique, quadrillage"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les industries togolaises", texte:"L'industrie togolaise reste modeste et repose principalement sur la transformation de matières premières locales : cimenteries (à partir du calcaire), industries agroalimentaires (huileries, brasseries), et surtout l'extraction et la transformation des phosphates, une ressource minière majeure du pays."},
    {titre:"2. Localisation des activités industrielles", texte:"Les principales unités industrielles sont concentrées autour de Lomé et de la zone portuaire, ainsi que dans les zones d'extraction minière comme Hahotoé et Kpogamé pour les phosphates."},
    {titre:"3. Défis de l'industrialisation togolaise", texte:"Le Togo cherche à diversifier son industrie, en développant notamment une zone industrielle (la zone franche de Lomé) destinée à attirer les investissements et à créer de la valeur ajoutée locale plutôt que d'exporter uniquement des matières premières brutes."}
  ],
  evaluation: "1) Citez deux ressources minières du Togo. 2) Quelle est l'importance de l'industrie dans l'économie togolaise ?",
  devoirMaison: "Citez un défi de l'industrialisation au Togo.",
  croquis: null
},

g3_9: {
  leconTitre: "Togo : Echanges Commerciaux",
  theme: "Thème 3 — Une économie togolaise en pleine expansion",
  competence: "Résoudre des situations d'apprentissage liées à l'économie du Togo",
  documentation: ["Géographie 3e, [collection à préciser]", "Statistiques du commerce extérieur togolais"],
  supportsDidactiques: "documents écrits et visuels, données statistiques",
  preRequis: "Notions vues sur l'agriculture et l'industrie togolaises (leçons précédentes)",
  capacitesContenus: [
    ["Présenter les caractéristiques générales du commerce togolais", "Echanges sur le plan national ; échanges avec les autres pays"],
    ["Montrer l'importance du commerce dans l'économie togolaise", "Importance dans l'économie"],
    ["Relever les problèmes liés au développement du commerce togolais", "Problèmes du commerce intérieur ; problèmes du commerce extérieur"]
  ],
  situationProbleme: "Au grand marché d'Assigamé à Lomé, Afi observe une intense activité commerciale : vendeurs locaux, produits venus d'autres pays d'Afrique, mais aussi des marchandises importées d'Asie et d'Europe. Elle veut comprendre comment fonctionne le commerce togolais, son importance pour l'économie et les problèmes qu'il rencontre.",
  consignes: ["Quelles sont les caractéristiques du commerce togolais à l'intérieur du pays et avec l'étranger ?", "Quelle est l'importance du commerce dans l'économie togolaise ?", "Quels problèmes rencontre ce commerce ?"],
  strategies: ["Exploitation de documents et de statistiques", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les productions agricoles et industrielles du Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait exploiter documents et statistiques sur les échanges nationaux et internationaux du Togo ; fait relever importance et problèmes du commerce", activiteEleve:"Observent, analysent, échangent en groupe", support:"Documents, données statistiques"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Le commerce intérieur", texte:"Le commerce togolais s'appuie sur un réseau dense de marchés (dont le grand marché de Lomé, historiquement animé par les célèbres « Nana Benz », commerçantes de tissus), reliant les zones de production rurales aux centres de consommation urbains."},
    {titre:"2. Le commerce extérieur", texte:"Le Togo exporte principalement du coton, des phosphates, du ciment et des produits agricoles, et importe des produits manufacturés, des hydrocarbures et des biens de consommation."},
    {titre:"3. Le rôle du port de Lomé", texte:"Le port autonome de Lomé, l'un des plus profonds d'Afrique de l'Ouest, joue un rôle de plateforme régionale pour le commerce, desservant non seulement le Togo mais aussi des pays de l'hinterland comme le Burkina Faso, le Mali et le Niger."}
  ],
  evaluation: "1) Citez une caractéristique du commerce intérieur togolais. 2) Pourquoi la balance commerciale du Togo est-elle souvent déficitaire ?",
  devoirMaison: "Citez un problème du commerce extérieur togolais.",
  croquis: null
},

g3_10: {
  leconTitre: "Togo : Economie Bleue",
  theme: "Thème 3 — Une économie togolaise en pleine expansion",
  competence: "Résoudre des situations d'apprentissage liées à l'économie du Togo",
  documentation: ["Géographie 3e, [collection à préciser]", "Documents sur le Port autonome de Lomé et les activités maritimes"],
  supportsDidactiques: "documents écrits et visuels sur les activités maritimes togolaises",
  preRequis: "Notions vues sur le commerce togolais (leçon précédente)",
  capacitesContenus: [
    ["Présenter brièvement l'économie bleue au Togo", "Définition de l'économie bleue ; atouts au Togo"],
    ["Identifier les activités liées à l'économie bleue au Togo", "Transport et logistique maritime, pêche, industrie, services, tourisme, sport nautique"],
    ["Montrer l'importance de l'économie bleue dans l'économie togolaise", "Importance dans l'économie"]
  ],
  situationProbleme: "En visitant le Port autonome de Lomé, la classe découvre d'immenses porte-conteneurs et une activité intense. Le guide leur parle « d'économie bleue ». Les élèves n'ont jamais entendu ce terme et veulent comprendre ce qu'il recouvre et son importance pour le Togo.",
  consignes: ["Qu'est-ce que l'économie bleue et quels sont ses atouts au Togo ?", "Quelles activités relèvent de l'économie bleue au Togo ?", "Quelle est son importance pour l'économie togolaise ?"],
  strategies: ["Discussion dirigée, exploitation de documents visuels"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions vues sur le commerce togolais", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait définir l'économie bleue ; fait identifier ses atouts et ses activités au Togo ; fait relever son importance économique", activiteEleve:"Observent les documents, échangent en groupe", support:"Documents visuels sur le port et les activités maritimes"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Qu'est-ce que l'économie bleue ?", texte:"L'économie bleue désigne l'ensemble des activités économiques liées à la mer et aux ressources aquatiques, exploitées de manière durable : pêche, aquaculture, transport maritime, tourisme côtier et exploitation des ressources marines."},
    {titre:"2. Les activités de l'économie bleue au Togo", texte:"Au Togo, l'économie bleue s'appuie notamment sur la pêche maritime et lagunaire (lac Togo), le transport maritime via le port autonome de Lomé, et un tourisme balnéaire encore en développement le long du littoral."},
    {titre:"3. Importance pour l'économie togolaise", texte:"L'économie bleue représente un potentiel de croissance et d'emplois pour le Togo, notamment à travers le port de Lomé (plateforme régionale majeure) et le développement de la pêche, tout en posant des défis de préservation des ressources marines et de lutte contre l'érosion côtière."}
  ],
  evaluation: "1) Définissez l'économie bleue. 2) Citez trois activités liées à l'économie bleue au Togo.",
  devoirMaison: "Quelle est l'importance du Port autonome de Lomé pour l'économie togolaise ?",
  croquis: null
},

g3_11: {
  leconTitre: "Togo : Transports et Telecommunications",
  theme: "Thème 3 — Une économie togolaise en pleine expansion",
  competence: "Résoudre des situations d'apprentissage liées à l'économie du Togo",
  documentation: ["Géographie 3e, [collection à préciser]", "Cartes des réseaux de transport et de télécommunications du Togo"],
  supportsDidactiques: "cartes des réseaux, données statistiques",
  preRequis: "Notions vues sur l'économie bleue (leçon précédente)",
  capacitesContenus: [
    ["Présenter les caractéristiques générales des transports et des télécommunications au Togo", "Caractéristiques des transports ; caractéristiques des télécommunications"],
    ["Montrer l'importance des transports et des télécommunications dans l'économie togolaise", "Importance des transports ; importance des télécommunications"],
    ["Dégager les enjeux des transports et télécommunications au Togo", "Efforts de modernisation ; défis"]
  ],
  situationProbleme: "Mawuli remarque que la route entre Lomé et Kara a été récemment refaite, facilitant les déplacements, alors que d'autres pistes rurales restent difficiles à emprunter. Il constate aussi que le réseau mobile est excellent à Lomé mais faible dans certains villages. Il veut comprendre les caractéristiques et les enjeux des transports et télécommunications au Togo.",
  consignes: ["Quelles sont les caractéristiques générales des transports et des télécommunications au Togo ?", "Quelle est leur importance dans l'économie togolaise ?", "Quels sont les efforts de modernisation et les défis dans ces domaines ?"],
  strategies: ["Exploitation de cartes et de documents", "Travail en petits groupes, discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions vues sur l'économie bleue et le commerce", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait exploiter les cartes des réseaux de transport et de télécommunications ; fait relever importance et enjeux (efforts et défis)", activiteEleve:"Observent, analysent les cartes et statistiques, échangent en groupe", support:"Cartes des réseaux, données statistiques"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les transports au Togo", texte:"Le Togo dispose d'un réseau routier reliant les principales villes du pays, d'un chemin de fer limité hérité de la période coloniale, du port autonome de Lomé (infrastructure majeure) et de l'aéroport international de Lomé-Tokoin."},
    {titre:"2. Les télécommunications au Togo", texte:"Le pays a connu un développement rapide de la téléphonie mobile et de l'accès à Internet, avec plusieurs opérateurs, ce qui facilite les échanges commerciaux et l'inclusion financière (paiement mobile) même dans les zones rurales."},
    {titre:"3. Importance dans l'économie togolaise", texte:"Ces infrastructures sont essentielles au commerce intérieur et régional, notamment grâce à la position stratégique du Togo comme point d'entrée pour les pays enclavés du Sahel (Burkina Faso, Mali, Niger)."},
    {titre:"4. Efforts de modernisation et défis", texte:"Des efforts sont menés pour moderniser les routes et étendre la couverture numérique, mais certaines zones rurales et enclavées restent difficiles d'accès, freinant leur développement économique."}
  ],
  evaluation: "1) Citez une caractéristique des transports au Togo. 2) Quelle est l'importance des télécommunications dans l'économie togolaise ?",
  devoirMaison: "Citez un défi des transports ou des télécommunications au Togo.",
  croquis: null
},

g3_12: {
  leconTitre: "Togo : Tourisme",
  theme: "Thème 3 — Une économie togolaise en pleine expansion",
  competence: "Résoudre des situations d'apprentissage liées à l'économie du Togo",
  documentation: ["Géographie 3e, [collection à préciser]", "Carte touristique du Togo"],
  supportsDidactiques: "carte touristique, quadrillage, documents visuels sur les sites touristiques",
  preRequis: "Notions vues sur les transports et télécommunications (leçon précédente)",
  capacitesContenus: [
    ["Présenter les potentialités du tourisme au Togo", "Définition du tourisme ; potentialités touristiques ; carte touristique"],
    ["Identifier les caractéristiques générales du tourisme au Togo", "Types de touristes, attractivité, accessibilité, infrastructures d'accueil"],
    ["Dégager l'importance du tourisme dans l'économie togolaise", "Importance dans l'économie"],
    ["Dégager les enjeux du tourisme au Togo", "Efforts de valorisation ; défis"]
  ],
  situationProbleme: "Pendant les vacances, la famille de Nafissatou visite les chutes de Kpimé et les maisons Tata Somba dans la région des Savanes. Elle se demande pourquoi ces sites, pourtant magnifiques, attirent peu de visiteurs étrangers comparés à d'autres pays voisins. Elle veut comprendre les potentialités et les enjeux du tourisme togolais.",
  consignes: ["Quelles sont les potentialités touristiques du Togo ?", "Quelles sont les caractéristiques générales et l'importance du tourisme dans l'économie togolaise ?", "Quels sont les efforts de valorisation et les défis du tourisme togolais ?"],
  strategies: ["Discussion dirigée, exploitation de documents visuels", "Travail en petits groupes"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions vues sur les transports et télécommunications", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait définir le tourisme et identifier les potentialités togolaises ; fait réaliser le croquis des sites touristiques ; fait relever caractéristiques, importance et enjeux", activiteEleve:"Observent les documents, réalisent le croquis, échangent en groupe", support:"Carte touristique, quadrillage, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure", activiteEleve:"Exposent ; participent à la structuration", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène à dégager l'essentiel", activiteEleve:"Formulent la synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les potentialités touristiques du Togo", texte:"Le Togo dispose d'atouts touristiques variés : plages du littoral, lac Togo, chutes d'eau et montagnes de la région des Plateaux (Kloto, Klouto), sites historiques (Notsè, Aného, Glidji) et richesse culturelle (fêtes traditionnelles, artisanat)."},
    {titre:"2. Le tourisme dans l'économie togolaise", texte:"Le tourisme reste un secteur encore modeste mais en développement, source de devises et d'emplois, notamment dans l'hôtellerie, la restauration et l'artisanat."},
    {titre:"3. Efforts de valorisation et défis", texte:"Le pays investit dans la promotion de ses sites et dans l'amélioration des infrastructures touristiques, mais fait face à des défis comme l'insuffisance des équipements d'accueil et la nécessité de mieux faire connaître ses atouts à l'international."},
    {titre:"4. Repères cartographiques à retenir", texte:"Sur la carte touristique du Togo, il faut savoir situer les principaux sites : les plages de Lomé et Aného, le lac Togo, les monts de Kpalimé (Kloto), ainsi que les sites historiques de Notsè et Glidji."}
  ],
  evaluation: "1) Citez deux sites touristiques du Togo. 2) Quelle est l'importance du tourisme dans l'économie togolaise ?",
  devoirMaison: "Citez un défi du tourisme togolais et une piste de solution.",
  croquis: {titre: "Carte touristique du Togo", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\"/></clipPath>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"#EDEAE0\" stroke=\"none\"/>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n<g transform=\"translate(90,20)\">\n<circle cx=\"168.5\" cy=\"451.8\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"176.5\" y=\"455.8\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Plages de Lomé</text>\n<circle cx=\"192.9\" cy=\"442.8\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"200.9\" y=\"446.8\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Aného</text>\n<circle cx=\"130.5\" cy=\"382.2\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"138.5\" y=\"386.2\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Kpalimé / Kloto</text>\n<circle cx=\"164.0\" cy=\"374.1\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"172.0\" y=\"378.1\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Notsè</text>\n</g></svg>", legende: "Principaux sites touristiques du Togo."}
},

h3_1: {
  leconTitre: "L'imperialisme Dans le Monde et en Afrique : Definition, Causes, Moyens D'action",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Histoire 3e, [collection à préciser]", "Manuel d'Histoire du Togo des origines à 2005", "Atlas historique, carte du monde colonisé", "Internet – Wikipédia"],
  supportsDidactiques: "documents textuels, carte du monde colonisé, images d'explorateurs et de missionnaires",
  preRequis: "Notions de colonisation et de conquête vues en classes antérieures (4e)",
  capacitesContenus: [
    ["Enoncer les causes de l'impérialisme dans le monde", "Définition de l'impérialisme ; les causes de l'impérialisme dans le monde (causes stratégiques, économiques, militaires, démographiques)"],
    ["Montrer le caractère universel de l'impérialisme", "Caractère universel de l'impérialisme (exemples de colonies égyptiennes, grecques, romaines, européennes)"],
    ["Décrire les moyens d'action de l'impérialisme en Afrique à la fin du XIXe siècle", "Moyens d'action de l'impérialisme en Afrique à la fin du XIXe siècle : politiques, explorateurs, missionnaires, militaires, commerçants, banques"]
  ],
  situationProbleme: "Au cours d'une visite au musée, Kokou découvre une exposition sur la conquête coloniale de l'Afrique. Il est surpris d'apprendre que ce phénomène ne s'est pas limité à l'Afrique, mais qu'il a touché le monde entier à travers l'histoire. Il se demande ce qu'est réellement l'impérialisme, pourquoi les grandes puissances ont voulu conquérir d'autres territoires, et par quels moyens elles y sont parvenues en Afrique. Avec ses camarades, il décide de mener une recherche pour mieux comprendre ce phénomène.",
  consignes: ["Qu'est-ce que l'impérialisme ? Quelles en sont les causes ?", "Pourquoi peut-on dire que l'impérialisme a un caractère universel ?", "Par quels moyens les puissances impérialistes ont-elles agi en Afrique à la fin du XIXe siècle ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les notions de colonisation vues en 4e", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur l'impérialisme", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait définir l'impérialisme et énoncer ses causes ; fait donner des exemples de colonies à travers l'histoire (égyptiennes, grecques, romaines, européennes) pour montrer le caractère universel ; fait décrire les moyens d'action en Afrique", activiteEleve:"Observent les documents, échangent en groupe, formulent des réponses provisoires", support:"Documents textuels, carte du monde colonisé, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure avec la classe", activiteEleve:"Exposent leurs conclusions ; participent à la correction collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Définition et causes de l'impérialisme", texte:"L'impérialisme est la politique par laquelle une puissance étend sa domination politique, économique et militaire sur d'autres territoires. Ses causes sont multiples : stratégiques (contrôle de routes et de positions), économiques (recherche de matières premières et de débouchés), militaires (besoin de troupes et de bases) et démographiques (recherche de terres pour l'émigration)."},
    {titre:"2. Caractère universel de l'impérialisme", texte:"L'impérialisme s'est manifesté à toutes les époques et sur tous les continents : colonies égyptiennes et romaines dans l'Antiquité, puis colonisation européenne moderne en Afrique, en Asie et en Amérique à partir du XVe siècle, qui s'intensifie considérablement à la fin du XIXe siècle (période dite du « partage de l'Afrique »)."},
    {titre:"3. Moyens d'action en Afrique à la fin du XIXe siècle", texte:"Les puissances impérialistes agissent d'abord par des moyens pacifiques : explorateurs (cartographie du territoire), missionnaires (évangélisation) et commerçants/banques (traités commerciaux), avant de recourir aux moyens militaires (invasions et conquêtes) pour imposer et consolider leur domination."}
  ],
  evaluation: "1) Définissez l'impérialisme et citez deux de ses causes. 2) Donnez deux exemples montrant le caractère universel de l'impérialisme.",
  devoirMaison: "Citez trois moyens d'action de l'impérialisme en Afrique à la fin du XIXe siècle.",
  croquis: null
},

h3_2: {
  leconTitre: "Les Resistances des Peuples A L'imperialisme au Togo",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005", "Carte des foyers de résistance au Togo", "Histoire 3e, [collection à préciser]"],
  supportsDidactiques: "carte du Togo (foyers de résistance), documents textuels",
  preRequis: "Moyens d'action de l'impérialisme en Afrique (leçon précédente)",
  capacitesContenus: [
    ["Présenter les formes de résistances à l'occupation coloniale", "Principales causes des résistances ; différentes formes de résistance : résistance des peuples, résistance des souverains"],
    ["Décrire les résistances des peuples du Togo", "Résistances des peuples du Togo ; carte des foyers de résistances"]
  ],
  situationProbleme: "Lors d'une sortie pédagogique, les élèves de la classe de 3e visitent un site où, selon leur guide, un peuple togolais aurait résisté à l'occupation coloniale. Surpris, ils se demandent si les peuples du Togo ont accepté sans réagir la domination étrangère ou s'ils s'y sont opposés, et comment ces résistances se sont manifestées à travers le pays.",
  consignes: ["Quelles sont les causes des résistances à l'occupation coloniale ?", "Quelles sont les différentes formes de résistance ?", "Où se situaient les principaux foyers de résistance des peuples du Togo ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les moyens d'action de l'impérialisme en Afrique", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; amène les élèves à s'exprimer sur les difficultés d'occuper des terres appartenant à autrui", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait énumérer les causes des résistances ; fait décrire les différentes formes de résistance ; fait identifier et localiser les peuples résistants sur la carte du Togo", activiteEleve:"Observent la carte, échangent en groupe, formulent des réponses", support:"Manuel d'Histoire du Togo, carte des foyers de résistance"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; fait établir une carte des foyers de résistance", activiteEleve:"Exposent leurs conclusions ; reproduisent la carte", support:"Tableau, carte, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Une résistance quasi générale", texte:"Face à la conquête coloniale, la plupart des peuples et royaumes du territoire togolais opposent une résistance, sous des formes variées : résistance armée, refus de collaborer, ou fuite vers des zones plus difficiles d'accès pour échapper à l'autorité coloniale."},
    {titre:"2. Des foyers de résistance dans tout le pays", texte:"Des foyers de résistance apparaissent aussi bien dans le nord (chez les Anoufo de Mango, les Kabyè) que dans le centre (royaume de Tchaoudjo) et le sud (royaume de Tado chez les Aja), montrant que l'opposition à la colonisation ne se limitait pas à une seule région."},
    {titre:"3. Des résistances finalement vaincues", texte:"Malgré leur détermination, ces résistances sont progressivement matées par la supériorité militaire des puissances coloniales (armes à feu modernes, effectifs organisés), aboutissant à la soumission de l'ensemble du territoire togolais à la fin du XIXe siècle."},
    {titre:"4. Repères cartographiques à retenir", texte:"Sur la carte des foyers de résistance au Togo, il faut savoir situer : Mango (résistance anoufo), la région de Sokodé/Tchaoudjo, le pays kabyè, et Tado/la région d'Athiémé (résistance aja), qui constituent les principaux foyers de résistance à travers le pays."}
  ],
  evaluation: "1) Citez deux causes des résistances à l'occupation coloniale. 2) Distinguez résistance des peuples et résistance des souverains.",
  devoirMaison: "Localisez sur une carte du Togo deux foyers de résistance étudiés en classe.",
  croquis: {titre: "Foyers de résistance au Togo", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\"/></clipPath>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"#EDEAE0\" stroke=\"none\"/>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n<g transform=\"translate(90,20)\">\n<circle cx=\"120.2\" cy=\"69.5\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"128.2\" y=\"73.5\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Mango (Anoufo)</text>\n<circle cx=\"162.7\" cy=\"194.2\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"170.7\" y=\"198.2\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Tchaoudjo</text>\n<circle cx=\"166.6\" cy=\"142.7\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"174.6\" y=\"146.7\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Pays kabyè</text>\n<circle cx=\"187.1\" cy=\"379.5\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"195.1\" y=\"383.5\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Tado (Aja)</text>\n</g></svg>", legende: "Principaux foyers de résistance à l'impérialisme au Togo."}
},

h3_3: {
  leconTitre: "Les Resistances des Souverains A L'imperialisme au Togo : Cas D'aja Kpoyizoun et de Na Biema Asabie",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005", "Histoire 3e, [collection à préciser]", "Cartes de localisation de Tado et de Mango"],
  supportsDidactiques: "carte du Togo, portraits/documents biographiques, documents textuels",
  preRequis: "Formes de résistance des peuples du Togo (leçon précédente)",
  capacitesContenus: [
    ["Décrire la résistance du souverain Na Biéma Asabiè de Mango", "Présentation du souverain Na Biéma Asabiè ; résistance du souverain Na Biéma Asabiè de Mango"],
    ["Décrire la résistance du souverain Aja Kpoyizoun de Tado", "Présentation du souverain Aja Kpoyizoun ; résistance du souverain Aja Kpoyizoun de Tado"]
  ],
  situationProbleme: "Dans un livre d'histoire locale emprunté à la bibliothèque du collège, Ayélé découvre les noms de deux souverains togolais, Aja Kpoyizoun de Tado et Na Biéma Asabiè de Mango, présentés comme des figures de la résistance à la colonisation. Curieuse, elle veut en savoir davantage sur qui étaient ces souverains et comment ils se sont opposés à l'occupation coloniale.",
  consignes: ["Qui était Na Biéma Asabiè de Mango et comment a-t-il résisté à l'impérialisme ?", "Qui était Aja Kpoyizoun de Tado et comment a-t-il résisté à l'impérialisme ?", "Localisez Mango et Tado sur la carte du Togo."],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les formes de résistance des peuples du Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; attire l'attention sur la résistance organisée d'un souverain", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait localiser les foyers de résistance des deux souverains ; fait donner un aperçu biographique de chacun ; fait décrire sommairement leur résistance", activiteEleve:"Observent la carte, lisent les documents biographiques, échangent en groupe", support:"Manuel d'Histoire du Togo, carte, documents biographiques"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; amène les élèves à louer la bravoure de ces résistants", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Aja Kpoyizoun, chef du royaume de Tado", texte:"Aja Kpoyizoun, souverain (Anyigbafio) du royaume de Tado dans le sud du Togo, refuse de se soumettre à l'autorité coloniale française. Pourchassé, il est finalement arrêté puis déporté et interné à N'Djolé, au Gabon, où il termine sa vie loin de son royaume."},
    {titre:"2. Na Biéma Asabiè, souverain des Anoufo de Mango", texte:"Na Biéma Asabiè, douzième roi (fémè) de la lignée fondée par Na Biéma Bonsafo à la tête du royaume anoufo de Mango, s'oppose à la pénétration coloniale allemande dans le nord du Togo à la fin du XIXe siècle. Il trouve la mort lors d'affrontements avec les troupes allemandes."},
    {titre:"3. Le sens de ces résistances", texte:"Ces deux exemples, dans deux régions différentes du pays (le sud aja et le nord anoufo), montrent que des souverains togolais de tradition et de culture différentes ont, chacun à leur manière, refusé la domination étrangère, au prix de leur liberté ou de leur vie."}
  ],
  evaluation: "1) Présentez brièvement le souverain Na Biéma Asabiè de Mango. 2) Présentez brièvement le souverain Aja Kpoyizoun de Tado.",
  devoirMaison: "Que retenez-vous de la bravoure de ces deux résistants ?",
  croquis: null
},

h3_4: {
  leconTitre: "L'imperialisme en Afrique et la Mise Sous Tutelle : Exploitation Economique des Colonies",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Histoire 3e, [collection à préciser]", "Manuel d'Histoire du Togo des origines à 2005", "Statistiques et documents sur l'économie coloniale"],
  supportsDidactiques: "documents statistiques, images, textes sur l'économie de traite",
  preRequis: "Les résistances des peuples et souverains du Togo (leçons précédentes)",
  capacitesContenus: [
    ["Présenter les moyens de mise en valeur des colonies", "Moyens de mise en valeur des colonies (autofinancement : impôts, travaux forcés, patentes, taxes)"],
    ["Analyser les différents domaines d'exploitation des colonies", "Système de l'économie de traite, le pacte colonial ; différents domaines d'exploitation économique des colonies (agriculture, industrie, commerce)"],
    ["Dresser un bilan de la colonisation", "Bilan de la colonisation (aspects positifs, aspects négatifs)"]
  ],
  situationProbleme: "En discutant avec son grand-père, Komi apprend que, pendant la colonisation, les populations devaient payer des impôts et fournir des travaux forcés. Il se demande pourquoi les puissances coloniales exigeaient cela des populations colonisées et comment elles exploitaient économiquement les colonies. Avec ses camarades, il décide de mener une recherche pour comprendre ce système.",
  consignes: ["Par quels moyens les puissances coloniales finançaient-elles la mise en valeur des colonies ?", "Qu'est-ce que l'économie de traite et le pacte colonial ?", "Quel bilan peut-on dresser de la colonisation ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les résistances étudiées précédemment", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur l'autofinancement des colonies", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait expliquer l'autofinancement de la mise en valeur des colonies ; fait expliquer l'économie de traite et le pacte colonial ; fait montrer le développement des cultures d'exportation, des industries extractives et des compagnies commerciales au profit de la métropole", activiteEleve:"Observent les documents, échangent en groupe, formulent des réponses", support:"Documents statistiques, textes, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; fait dresser le bilan de la colonisation ; amène à désapprouver l'impérialisme sous toutes ses formes", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. La logique de la mise sous tutelle", texte:"Une fois la conquête achevée, les puissances coloniales organisent l'exploitation économique de leurs colonies : celles-ci doivent fournir des matières premières à la métropole et constituer des marchés pour ses produits manufacturés (« pacte colonial »)."},
    {titre:"2. Les moyens de l'exploitation économique", texte:"Cette exploitation passe par l'imposition de cultures de rente (coton, cacao, café), le travail forcé, la construction d'infrastructures orientées vers l'exportation (routes et voies ferrées reliant les zones de production aux ports), et la levée d'impôts sur les populations colonisées."},
    {titre:"3. Conséquences pour les colonies", texte:"Cette exploitation économique enrichit les métropoles européennes mais freine le développement autonome des colonies, dont les économies sont structurées pour répondre aux besoins extérieurs plutôt qu'aux besoins locaux — une dépendance dont les effets se font sentir bien après les indépendances."}
  ],
  evaluation: "1) Citez trois moyens d'autofinancement de la mise en valeur des colonies. 2) Expliquez ce qu'est le pacte colonial.",
  devoirMaison: "Dressez un bref bilan (positif et négatif) de la colonisation.",
  croquis: null
},

h3_5: {
  leconTitre: "Le Togo Sous Domination Coloniale Allemande",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005, pp. 115-117", "Histoire 3e, [collection à préciser]", "Carte administrative du Togo allemand, carte des divisions administratives et centres de santé (1914)"],
  supportsDidactiques: "carte administrative du Togo allemand, documents statistiques et textuels",
  preRequis: "Exploitation économique des colonies (leçon précédente)",
  capacitesContenus: [
    ["Décrire l'organisation administrative du Togo allemand", "Présentation du Togo allemand ; carte administrative du Togo allemand ; organisation administrative (centrale et régionale) du Togo colonial allemand"],
    ["Dresser le bilan de l'action allemande dans le domaine économique au Togo", "Bilan de l'action allemande dans le domaine de l'agriculture, de l'industrie, des voies de communication et du commerce"],
    ["Analyser les différentes formes d'action sociale des Allemands au Togo", "Différentes formes d'action sociale des Allemands au Togo (santé, enseignement)"]
  ],
  situationProbleme: "En visitant Lomé, Afi remarque d'anciens bâtiments qu'on lui présente comme datant de « l'époque allemande ». Étonnée d'apprendre que le Togo a été administré par l'Allemagne avant de l'être par la France, elle veut comprendre comment cette colonie était organisée et ce que les Allemands y ont réalisé dans les domaines économique et social.",
  consignes: ["Comment était organisée l'administration du Togo allemand ?", "Quel bilan peut-on dresser de l'action économique allemande au Togo ?", "Quelles actions sociales les Allemands ont-ils menées au Togo ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle l'exploitation économique des colonies", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur l'administration coloniale", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait localiser le Togo allemand sur la carte d'Afrique ; fait décrire l'administration centrale et régionale (cercles, postes administratifs) ; fait localiser les réalisations économiques sur une carte ; fait décrire les réalisations dans l'agriculture, l'industrie, les voies de communication, le commerce ; fait décrire les actions sociales (santé, enseignement)", activiteEleve:"Observent les cartes, lisent les documents, échangent en groupe, formulent des réponses", support:"Manuel d'Histoire du Togo, cartes, documents statistiques"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; amène les élèves à apprécier les réalisations allemandes au Togo", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. La mise en place de la colonie allemande", texte:"Le 5 juillet 1884, l'explorateur allemand Gustav Nachtigal signe un traité de protectorat avec le chef Mlapa III à Baguida, sur la côte togolaise, donnant naissance au « Togoland », première colonie allemande d'Afrique."},
    {titre:"2. L'organisation administrative du Togo allemand", texte:"Les Allemands mettent en place une administration centralisée dirigée par un gouverneur, avec des subdivisions régionales confiées à des administrateurs, tout en s'appuyant parfois sur des chefferies traditionnelles pour asseoir leur autorité."},
    {titre:"3. Le développement économique sous domination allemande", texte:"Le Togoland est présenté par les Allemands comme leur « colonie modèle » (Musterkolonie) : construction de routes, de voies ferrées reliant Lomé à Aného, Kpalimé et Atakpamé, développement des cultures de rente (coton, café, cacao) et de la station radiotélégraphique de Kamina."},
    {titre:"4. Repères cartographiques à retenir", texte:"Sur la carte administrative du Togo allemand, il faut savoir situer : Lomé (capitale et port), Baguida (lieu du traité de 1884), Kamina (station radio stratégique) et les principales voies ferrées construites vers Aného, Kpalimé et Atakpamé."}
  ],
  evaluation: "1) Décrivez l'organisation administrative du Togo allemand. 2) Citez deux réalisations économiques des Allemands au Togo.",
  devoirMaison: "Quelles actions sociales les Allemands ont-ils menées au Togo ?",
  croquis: {titre: "Le Togo sous administration allemande", svg: "<svg viewBox=\"0 0 460 540\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Public Sans, sans-serif\">\n<rect width=\"460\" height=\"540\" fill=\"#F3F0E6\"/>\n<g transform=\"translate(90,20)\">\n<line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"40\" y1=\"0\" x2=\"40\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"280\" y1=\"0\" x2=\"280\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"40\" x2=\"300\" y2=\"40\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"80\" x2=\"300\" y2=\"80\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"200\" x2=\"300\" y2=\"200\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"280\" x2=\"300\" y2=\"280\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"320\" x2=\"300\" y2=\"320\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"360\" x2=\"300\" y2=\"360\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"400\" x2=\"300\" y2=\"400\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"440\" x2=\"300\" y2=\"440\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<line x1=\"0\" y1=\"480\" x2=\"300\" y2=\"480\" stroke=\"#8C9A94\" stroke-width=\"0.5\" opacity=\"0.35\"/>\n<clipPath id=\"togoClip\"><path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\"/></clipPath>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"#EDEAE0\" stroke=\"none\"/>\n<path d=\"M 210.0,450.7 L 158.2,470.0 L 143.8,438.3 L 126.7,380.9 L 121.6,336.0 L 135.8,254.6 L 119.7,221.6 L 113.5,150.4 L 105.7,137.3 L 90.0,84.6 L 93.2,37.9 L 113.5,12.9 L 123.2,11.9 L 135.8,10.0 L 139.8,59.5 L 170.2,102.2 L 170.1,145.1 L 170.0,438.1 L 210.0,450.7 Z\" fill=\"none\" stroke=\"#153F38\" stroke-width=\"2.5\"/>\n<text x=\"150\" y=\"-4\" font-size=\"10\" fill=\"#202A3C\" font-weight=\"700\" text-anchor=\"middle\">BURKINA FASO</text>\n<text x=\"-14\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(-90,-14,250)\">GHANA</text>\n<text x=\"318\" y=\"250\" font-size=\"10\" fill=\"#202A3C\" text-anchor=\"middle\" font-weight=\"700\" transform=\"rotate(90,318,250)\">BÉNIN</text>\n<text x=\"150\" y=\"500\" font-size=\"10\" fill=\"#1F5C52\" font-weight=\"700\" text-anchor=\"middle\">OCÉAN ATLANTIQUE</text>\n</g>\n<g transform=\"translate(90,20)\">\n<circle cx=\"168.5\" cy=\"451.8\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"176.5\" y=\"455.8\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Lomé (capitale)</text>\n<circle cx=\"174.3\" cy=\"450.0\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"182.3\" y=\"454.0\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Baguida (traité 1884)</text>\n<circle cx=\"162.7\" cy=\"194.2\" r=\"6\" fill=\"#A6472B\" stroke=\"#fff\" stroke-width=\"1.5\"/><text x=\"170.7\" y=\"198.2\" font-size=\"11\" fill=\"#202A3C\" font-weight=\"600\" text-anchor=\"start\">Kamina (station radio)</text>\n</g></svg>", legende: "Repères de l'administration allemande au Togo."}
},

h3_6: {
  leconTitre: "Le Togo Sous Domination Coloniale Française",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005", "Histoire 3e, [collection à préciser]", "Carte politique de l'Afrique, carte du Togo français, planisphère"],
  supportsDidactiques: "cartes, documents statistiques et textuels",
  preRequis: "Organisation et bilan du Togo sous domination allemande (leçon précédente)",
  capacitesContenus: [
    ["Décrire l'organisation administrative du Togo français", "Présentation du Togo français ; organisation administrative du Togo français"],
    ["Dresser le bilan de l'action française dans le domaine économique au Togo", "Bilan de l'action française dans le domaine économique au Togo"],
    ["Analyser les différentes formes d'action sociale des Français au Togo", "Différentes formes d'action sociale des Français au Togo (santé, enseignement)"]
  ],
  situationProbleme: "Dans son manuel d'histoire, Yao lit que le Togo, après avoir été une colonie allemande, est passé sous administration française à partir de 1919. Il veut comprendre comment cette nouvelle administration a été organisée et ce que la France a réalisé dans le pays sur les plans économique et social, avant de comparer avec ce qu'il a appris sur la période allemande.",
  consignes: ["Comment était organisée l'administration du Togo français ?", "Quel bilan peut-on dresser de l'action économique française au Togo ?", "Quelles actions sociales les Français ont-ils menées au Togo ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle l'organisation et le bilan du Togo allemand", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur le passage du Togo allemand au Togo français", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait localiser le Togo français sur la carte d'Afrique ; fait décrire l'administration centrale et régionale ; fait décrire les réalisations économiques (agriculture, industrie, voies de communication, commerce) ; fait décrire les actions sociales (santé, enseignement)", activiteEleve:"Observent les cartes, lisent les documents, échangent en groupe, formulent des réponses", support:"Manuel d'Histoire du Togo, cartes, documents"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure ; amène les élèves à apprécier les réalisations françaises au Togo", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Le passage sous administration française", texte:"Après la défaite allemande d'août 1914, le Togoland est occupé conjointement par la France et la Grande-Bretagne, puis partagé entre les deux puissances en 1919-1922 : la partie orientale (le futur Togo) devient un territoire sous mandat de la Société des Nations confié à la France."},
    {titre:"2. L'administration coloniale française", texte:"La France administre le Togo à travers un système de gouverneurs et de cercles administratifs, en s'appuyant sur le travail forcé, l'indigénat (un régime juridique discriminatoire envers les populations colonisées) et le développement des cultures d'exportation (café, cacao)."},
    {titre:"3. De la tutelle SDN à la tutelle ONU", texte:"Après la Seconde Guerre mondiale, le mandat de la Société des Nations est remplacé par une tutelle de l'Organisation des Nations unies (1946), qui prévoit un accompagnement du territoire vers l'autonomie, ouvrant progressivement la voie aux revendications d'indépendance."}
  ],
  evaluation: "1) Décrivez l'organisation administrative du Togo français. 2) Citez deux réalisations économiques des Français au Togo.",
  devoirMaison: "Comparez brièvement l'action sociale des Allemands et des Français au Togo.",
  croquis: null
},

h3_7: {
  leconTitre: "Les Causes des Luttes de Liberation du Joug Colonial en Afrique",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Histoire 3e, [collection à préciser]", "Manuel d'Histoire du Togo des origines à 2005", "Textes et images sur la décolonisation"],
  supportsDidactiques: "documents textuels, images",
  preRequis: "Bilan des dominations coloniales allemande et française au Togo (leçons précédentes)",
  capacitesContenus: [
    ["Expliquer le rôle des facteurs internes dans le processus de la décolonisation", "Définition de la décolonisation ; facteurs internes de la décolonisation ; rôle de ces facteurs dans le processus de la décolonisation"],
    ["Expliquer le rôle des facteurs externes de la décolonisation dans le processus de la décolonisation", "Facteurs externes de la décolonisation ; rôle de ces facteurs dans le processus de la décolonisation"]
  ],
  situationProbleme: "Dans un exposé, un camarade de classe de Sena affirme que « les colonies africaines ont obtenu leur indépendance uniquement parce que les puissances coloniales l'ont bien voulu ». Sena n'est pas convaincue et pense qu'il existe aussi des raisons propres aux peuples colonisés eux-mêmes. Elle décide, avec ses camarades, de rechercher les véritables causes qui ont conduit à la décolonisation de l'Afrique.",
  consignes: ["Qu'est-ce que la décolonisation ?", "Quels sont les facteurs internes qui ont favorisé la décolonisation ?", "Quels sont les facteurs externes qui ont favorisé la décolonisation ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle le bilan des dominations coloniales étudiées", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur le sens du mot « décolonisation »", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait définir la décolonisation ; fait énumérer, à partir d'un texte, les facteurs internes de la décolonisation et leur rôle ; fait énumérer les facteurs externes et leur rôle", activiteEleve:"Lisent les documents, échangent en groupe, formulent des réponses", support:"Documents textuels, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure avec la classe", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les causes politiques", texte:"L'essor des idées de démocratie et d'autodétermination des peuples, diffusées notamment par la Charte de l'Atlantique (1941) et la création de l'ONU, encourage les colonisés à revendiquer leur droit à disposer d'eux-mêmes."},
    {titre:"2. Les causes économiques et sociales", texte:"L'exploitation économique coloniale (travail forcé, impôts, cultures imposées) nourrit un profond ressentiment parmi les populations colonisées, tandis que l'émergence d'une élite africaine formée à l'école coloniale lui donne les moyens intellectuels de structurer des revendications."},
    {titre:"3. Le rôle de la Seconde Guerre mondiale", texte:"La participation de nombreux Africains à la Seconde Guerre mondiale aux côtés des puissances coloniales renforce leur conscience politique et leur sentiment d'avoir droit, en retour, à plus de liberté et de reconnaissance."}
  ],
  evaluation: "1) Définissez la décolonisation. 2) Citez deux facteurs internes de la décolonisation.",
  devoirMaison: "Citez deux facteurs externes de la décolonisation.",
  croquis: null
},

h3_8: {
  leconTitre: "Les Luttes de Liberation du Joug Colonial au Togo",
  theme: "Thème 1 — L'impérialisme et ses conséquences en Afrique (fin XIXe siècle-1960)",
  competence: "Résoudre une situation d'apprentissage en rapport avec l'impérialisme et ses conséquences en Afrique de la fin du XIXe siècle à 1960",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005", "Histoire 3e, [collection à préciser]", "Images et documents sur les partis politiques togolais"],
  supportsDidactiques: "documents textuels, images, portraits des acteurs politiques",
  preRequis: "Causes internes et externes de la décolonisation (leçon précédente)",
  capacitesContenus: [
    ["Décrire les débuts de la vie politique au Togo", "Les débuts de la vie politique au Togo (après la Seconde Guerre mondiale)"],
    ["Identifier les principaux acteurs de la lutte anticoloniale", "Les partis politiques ; les principaux personnages, acteurs de la lutte anticoloniale"],
    ["Décrire les événements politiques de 1950 à 1958", "Les événements politiques de 1950 à 1958"],
    ["Expliquer le rôle de l'ONU dans la décolonisation du Togo", "Le rôle de l'ONU dans la décolonisation du Togo"]
  ],
  situationProbleme: "Le 27 avril est célébré chaque année comme fête de l'indépendance du Togo. Lors des préparatifs de cette fête à l'école, Edem entend parler de partis politiques et de personnalités qui auraient lutté pour l'indépendance du pays. Il souhaite comprendre comment a commencé la vie politique au Togo, qui étaient ces acteurs, et quel rôle a joué l'ONU dans l'accession du Togo à l'indépendance.",
  consignes: ["Comment ont débuté la vie politique et les partis politiques au Togo ?", "Quels sont les principaux acteurs de la lutte anticoloniale au Togo ?", "Quels événements politiques marquent la période 1950-1958 ?", "Quel rôle l'ONU a-t-elle joué dans la décolonisation du Togo ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les facteurs de la décolonisation en Afrique", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur les partis et acteurs politiques togolais", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait décrire les débuts de la vie politique au Togo après la Seconde Guerre mondiale ; fait citer les partis politiques et leurs dates de création ; fait citer les principaux acteurs de la lutte anticoloniale et relater brièvement leurs actions ; fait décrire les événements politiques de 1950 à 1958 (élections de 1955, proclamation de la République autonome du Togo en 1956, élections législatives de 1958) ; fait ressortir le rôle de l'ONU dans le processus d'indépendance", activiteEleve:"Observent les documents, échangent en groupe, formulent des réponses", support:"Manuel d'Histoire du Togo, images, portraits"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure avec la classe", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Les acteurs de la lutte au Togo", texte:"Au Togo, la lutte pour l'indépendance est portée notamment par le Comité de l'unité togolaise (CUT), fondé en 1941 et dirigé par des figures comme Sylvanus Olympio, qui revendique la réunification des deux Togo (français et britannique) et l'indépendance."},
    {titre:"2. Les étapes vers l'indépendance", texte:"Sous tutelle de l'ONU, le Togo obtient une autonomie interne croissante dans les années 1950, marquée par la domination de la vie politique nationale par les partis progressistes, les élections de 1955, la montée des partis nationalistes, la proclamation de la République autonome du Togo en 1956 et les élections législatives de 1958, ouvrant la voie à la proclamation de l'indépendance le 27 avril 1960."},
    {titre:"3. Les limites de cette indépendance", texte:"La partition entre Togo français et Togo britannique n'ayant pas été résolue par un référendum favorable à la réunification (1956), une partie du Togoland britannique reste rattachée au Ghana, une question qui marque durablement les relations entre les deux pays."}
  ],
  evaluation: "1) Décrivez brièvement les débuts de la vie politique au Togo. 2) Citez deux événements politiques marquants entre 1950 et 1958.",
  devoirMaison: "Expliquez le rôle de l'ONU dans la décolonisation du Togo.",
  croquis: null
},

h3_9: {
  leconTitre: "La Premiere Guerre Mondiale au Togo et Ses Consequences",
  theme: "Thème 2 — Les deux guerres mondiales et leurs conséquences",
  competence: "Résoudre une situation d'apprentissage ayant trait à la connaissance des conséquences des deux guerres mondiales",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005", "Carte : les opérations d'août 1914 au Togo", "Histoire 3e, [collection à préciser]"],
  supportsDidactiques: "carte des opérations d'août 1914, textes, images",
  preRequis: "Le Togo sous domination coloniale allemande (leçon 5)",
  capacitesContenus: [
    ["Enoncer les causes de la Première Guerre mondiale au Togo", "Causes de la Première Guerre mondiale au Togo"],
    ["Décrire brièvement les étapes de la guerre au Togo", "Différentes étapes de la guerre au Togo"],
    ["Dégager les conséquences de la guerre au Togo", "Conséquences de la guerre au Togo ; désapprobation de la guerre et promotion de la culture de la paix"],
    ["Promouvoir les valeurs de la paix, de la non-violence et de la tolérance (EPEV)", "Promotion des valeurs de la paix, de la non-violence et de la tolérance à travers les comportements quotidiens"],
    ["S'engager à lutter contre l'extrémisme violent (EPEV)", "Les comportements en collectivité : le vivre ensemble, la politesse, la civilité, le civisme, les responsabilités des citoyens"]
  ],
  situationProbleme: "En feuilletant un livre d'histoire, Ama découvre qu'en août 1914, des combats ont eu lieu au Togo entre Allemands et forces françaises et britanniques, alors même que le pays était encore colonie allemande. Surprise que la Première Guerre mondiale, souvent présentée comme une guerre européenne, ait touché le Togo, elle veut comprendre pourquoi et comment cette guerre s'est déroulée dans son pays et quelles en furent les conséquences.",
  consignes: ["Quelles sont les causes de la Première Guerre mondiale au Togo ?", "Quelles ont été les principales étapes de la guerre au Togo ?", "Quelles conséquences cette guerre a-t-elle eues sur le Togo ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle l'organisation du Togo allemand", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; rappelle les circonstances du départ des Allemands du Togo", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"123 min", activiteProf:"Fait relever les causes de la guerre au Togo à partir d'un texte ; fait décrire, à partir de la carte des opérations d'août 1914, les étapes de la guerre et localiser les foyers de combat ; fait relever les conséquences (pertes en vies humaines, destructions matérielles, modifications territoriales) ; sensibilise à la désapprobation de la guerre et à la promotion de la paix ; sensibilise, à travers des échanges, à la lutte contre l'extrémisme violent (vivre ensemble, civisme)", activiteEleve:"Observent la carte, lisent les textes, échangent en groupe, formulent des réponses", support:"Carte des opérations, textes, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure avec la classe", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Le Togo, premier théâtre de la Première Guerre mondiale en Afrique", texte:"Dès août 1914, les forces françaises (depuis le Dahomey) et britanniques (depuis la Gold Coast) envahissent le Togoland allemand. Après des combats à Agbélouvé et à Khra (Chra), les Allemands, en infériorité numérique, capitulent le 26 août 1914 — l'une des toutes premières victoires alliées de la Première Guerre mondiale."},
    {titre:"2. Le partage du Togoland", texte:"À l'issue de la guerre, le Togoland allemand est partagé entre la France et la Grande-Bretagne, sous mandat de la Société des Nations à partir de 1922 : la partie orientale devient le Togo sous administration française, la partie occidentale (Togoland britannique) est rattachée à la colonie de la Gold Coast."},
    {titre:"3. Conséquences pour le Togo", texte:"Ce partage sépare durablement des populations togolaises de même origine ethnique et culturelle, une fracture dont les effets se ressentent encore aujourd'hui, notamment lors du référendum manqué de réunification de 1956."}
  ],
  evaluation: "1) Citez une cause de la Première Guerre mondiale au Togo. 2) Décrivez brièvement le déroulement de la guerre au Togo.",
  devoirMaison: "Citez deux conséquences de la guerre pour le Togo.",
  croquis: null
},

h3_10: {
  leconTitre: "La Deuxieme Guerre Mondiale : L'onu et la Culture de la Paix",
  theme: "Thème 2 — Les deux guerres mondiales et leurs conséquences",
  competence: "Résoudre une situation d'apprentissage ayant trait à la connaissance des conséquences des deux guerres mondiales",
  documentation: ["Histoire 3e, [collection à préciser]", "Documents sur la SDN et l'ONU", "Internet – site officiel de l'ONU"],
  supportsDidactiques: "documents textuels, organigramme des organes de l'ONU, images",
  preRequis: "Conséquences de la Première Guerre mondiale au Togo (leçon précédente)",
  capacitesContenus: [
    ["Expliquer les raisons de la création de l'ONU", "Définition de l'ONU ; raisons ayant motivé sa création (échec de la SDN)"],
    ["Montrer le rôle et l'influence de l'ONU dans le monde", "Organes de l'ONU ; rôle et influence de l'ONU dans le monde ; rôle des institutions spécialisées (UNESCO, UNICEF, OMS, PNUD, FAO, HCR, FMI, Banque mondiale)"],
    ["Montrer les forces et les faiblesses de l'ONU", "Forces et faiblesses de l'ONU"],
    ["Adhérer aux dispositions citoyennes en faveur de la paix, de la cohésion et de l'inclusion sociales (EPEV)", "Contribution à la paix et à la cohésion sociale (relations sociales, interdépendance, orientation vers le bien commun, égalité) ; contribution à la promotion de l'inclusion sociale"],
    ["S'engager à résoudre pacifiquement les conflits (EPEV)", "Types de conflits : conflits intra-personnels, conflits intra-groupes"]
  ],
  situationProbleme: "Lors d'une émission télévisée, Kossi entend parler d'une réunion du Conseil de sécurité de l'ONU au sujet d'un conflit dans le monde. Il se demande ce qu'est réellement l'ONU, pourquoi elle a été créée après la Seconde Guerre mondiale, quel est son rôle, mais aussi pourquoi certains critiquent son incapacité à empêcher tous les conflits.",
  consignes: ["Pourquoi l'ONU a-t-elle été créée ?", "Quel est le rôle de l'ONU et de ses institutions spécialisées dans le monde ?", "Quelles sont les forces et les faiblesses de l'ONU ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé", "Discussion dirigée"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les conséquences de la Première Guerre mondiale", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; part de l'échec de la SDN pour introduire la création de l'ONU", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait définir l'ONU et ses raisons de création ; fait citer les principaux organes de l'ONU et relever son rôle en faveur de la paix (Conseil de sécurité, Casques bleus) et le rôle des institutions spécialisées ; fait relever les forces et les faiblesses de l'ONU ; sensibilise, par des échanges-débats, à la contribution à la paix, à la cohésion et à l'inclusion sociales, et à la résolution pacifique des conflits", activiteEleve:"Observent les documents, échangent en groupe, formulent des réponses", support:"Documents, organigramme, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure avec la classe", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. La Seconde Guerre mondiale et l'Afrique", texte:"Bien que se déroulant principalement en Europe, en Asie et en Afrique du Nord, la Seconde Guerre mondiale (1939-1945) mobilise aussi les colonies d'Afrique subsaharienne, dont le Togo, à travers l'envoi de tirailleurs et la contribution économique à l'effort de guerre des métropoles."},
    {titre:"2. La création de l'ONU", texte:"À l'issue de la guerre, l'Organisation des Nations unies est créée en 1945 à San Francisco, avec pour mission le maintien de la paix internationale et la prévention de nouveaux conflits mondiaux. Elle remplace le système des mandats de la SDN par celui de la tutelle internationale, dont bénéficie le Togo à partir de 1946."},
    {titre:"3. La culture de la paix", texte:"La culture de la paix désigne l'ensemble des valeurs, attitudes et comportements qui rejettent la violence et favorisent le dialogue, la tolérance et la coopération entre les peuples — un objectif central des Nations unies depuis leur création."}
  ],
  evaluation: "1) Expliquez pourquoi l'ONU a été créée. 2) Citez deux institutions spécialisées de l'ONU et leur rôle.",
  devoirMaison: "Citez une force et une faiblesse de l'ONU.",
  croquis: null
},

h3_11: {
  leconTitre: "Le Togo, Une Nation en Devenir",
  theme: "Thème 3 — L'Afrique postcoloniale",
  competence: "Traiter une situation d'apprentissage relative à l'évolution de l'Afrique de 1960 à nos jours",
  documentation: ["Manuel d'Histoire du Togo des origines à 2005, pp. 237-239", "Histoire 3e, [collection à préciser]"],
  supportsDidactiques: "documents textuels, images illustrant la diversité ethnique du Togo",
  preRequis: "Les luttes de libération du joug colonial au Togo (leçon 8)",
  capacitesContenus: [
    ["Dire ce qu'on entend par peuple togolais", "Définition de peuple ; définition de nation ; sens de « peuple togolais »"],
    ["Dire à partir de quand est né le peuple togolais", "Naissance du peuple togolais (1884)"],
    ["Promouvoir l'entente et la concorde entre les divers groupes ethniques du Togo", "Promotion du vivre ensemble ; sensibilisation"],
    ["S'engager à lutter contre l'extrémisme violent (EPEV)", "Lutte contre l'extrémisme violent"],
    ["Exploiter les alternatives appropriées dans le cadre de la prévention de l'extrémisme violent (EPEV)", "Alternatives de lutte contre l'extrémisme violent"]
  ],
  situationProbleme: "A la veille de la fête de l'indépendance, la maîtresse d'Efoe lui demande de préparer un exposé sur « le peuple togolais ». En cherchant, Efoe se rend compte que le Togo regroupe plusieurs ethnies aux langues et cultures différentes, et il se demande ce qui fait, malgré cette diversité, l'unité d'un même peuple togolais, depuis quand ce peuple existe, et comment chacun peut contribuer à préserver l'entente entre tous les Togolais.",
  consignes: ["Que signifient les mots « peuple » et « nation » ? Que veut-on dire par « peuple togolais » ?", "A partir de quand peut-on parler de la naissance du peuple togolais ?", "Comment promouvoir l'entente entre les différents groupes ethniques du Togo ?"],
  strategies: ["Travail individuel et/ou travail de groupe", "Brainstorming, exposé, discussion dirigée", "Jeu de rôle"],
  deroulement: [
    {phase:"Remobilisation des prérequis", duree:"5 min", activiteProf:"Rappelle les luttes de libération du joug colonial au Togo", activiteEleve:"Répondent oralement", support:"Oral"},
    {phase:"Présentation de la SA", duree:"2 min", activiteProf:"Présente et lit la SA", activiteEleve:"Suivent attentivement", support:"Copier au tableau"},
    {phase:"Appropriation de la SA, organisation du travail", duree:"10 min", activiteProf:"Relit la SA ; organise les groupes ; questionne sur le sens des mots « peuple » et « nation »", activiteEleve:"S'approprient les questions, s'organisent en groupes", support:"Idem SA"},
    {phase:"Exploration et construction des savoirs (plusieurs phases)", duree:"68 min", activiteProf:"Fait définir peuple et nation, puis « peuple togolais » ; fait dire à partir de quelle date (1884) est né le peuple togolais ; à partir du vécu quotidien, éveille la conscience des élèves sur la nécessité de l'entente entre les groupes ethniques ; par des échanges et un jeu de rôle, sensibilise à l'engagement contre l'extrémisme violent et aux alternatives de prévention", activiteEleve:"Échangent en groupe, formulent des réponses, participent au jeu de rôle", support:"Documents textuels, images"},
    {phase:"Mise en commun, correction, structuration, entraînement", duree:"20 min", activiteProf:"Fait exposer les groupes ; corrige et structure avec la classe", activiteEleve:"Exposent leurs conclusions ; participent à la structuration collective", support:"Tableau, production des élèves"},
    {phase:"Synthèse et bilan du travail", duree:"5 min", activiteProf:"Amène les élèves à dégager l'essentiel", activiteEleve:"Formulent une synthèse orale", support:"Oral"}
  ],
  resume: [
    {titre:"1. Une indépendance conquise", texte:"Le Togo accède à l'indépendance le 27 avril 1960, sous la présidence de Sylvanus Olympio, mettant fin à plusieurs décennies de domination coloniale allemande puis française."},
    {titre:"2. Les défis de la construction nationale", texte:"Après l'indépendance, le jeune État togolais doit construire une administration nationale, une économie autonome et une unité entre ses nombreux groupes ethniques, tout en gérant l'héritage de la partition coloniale avec le Ghana voisin."},
    {titre:"3. Une nation en devenir", texte:"Comme de nombreux pays africains nouvellement indépendants, le Togo connaît des turbulences politiques (dont l'assassinat de Sylvanus Olympio en 1963), mais poursuit sa construction en tant que nation, à travers ses institutions, sa culture partagée et son développement économique et social."}
  ],
  evaluation: "1) Définissez peuple et nation. 2) A partir de quelle date peut-on parler de la naissance du peuple togolais ?",
  devoirMaison: "Proposez deux actions pour promouvoir l'entente entre les groupes ethniques du Togo.",
  croquis: null
}

};
