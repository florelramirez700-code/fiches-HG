// Réserve de questions pour le générateur d'épreuves — 3e (questions neuves, tirées des traces écrites ;
// ni les évaluations ni les devoirs des fiches, déjà faits en classe, ni les situations des intégrations).
// Même format que epreuves-4e.js. En 3e, une situation peut avoir deux consignes (jamais plus) :
// consignes [consigne 1, consigne 2] et prods [production 1, production 2], chaque production avec ses propres
// intro, dev, concl, support, indConsigne, justesse et concepts. Les situations à une consigne servent aussi
// pour l'épreuve à deux situations (forme du BEPC : une situation d'histoire et une de géographie, 4 pts chacune).
// Par leçon : sit (situations de la partie A), puis exercices de la partie B
//   vf [affirmation, vrai?, correction], choix [phrase avec (x / y / z), bonne réponse], defs [définition, mot],
//   intrus [[série], intrus, raison], comp {texte avec {a}…{d}, mots}, relier {consigne, A, B} (A[i] va avec B[i]),
//   ordre {consigne, elements dans le bon ordre}, classer {consigne, cats, elts [élément, n° de catégorie]},
// et cours [question, points, réponse] pour la partie C.
// Document d'une situation (doc) : titre + texte, liste, tableau {entetes, lignes} ou image (PNG fabriqué par
// outils/epreuves/images_docs.js à partir des croquis des traces de 3e) ou photo du domaine public déjà dans images/.
var EPREUVES_3E = {
  g3_1: {
    sit: [{
      texte: "Ton correspondant Lamboni vit à Ouagadougou, au Burkina Faso. Dans sa dernière lettre, il t'écrit : « Mon professeur dit que le Togo est notre voisin, mais je ne sais presque rien de ton pays : est-il grand ? combien êtes-vous ? parlez-vous la même langue que nous ? » Pour lui répondre, tu recopies dans ton cahier la fiche ci-dessous.",
      consigne: "Écris à Lamboni une lettre dans laquelle tu lui présentes le Togo : sa localisation et ses limites, ses dimensions et sa superficie, sa population, sa langue, sa monnaie et son niveau de développement.",
      doc: { titre: "Document : fiche d'identité du Togo", tableau: { entetes: ["Rubrique", "Information"], lignes: [["Latitudes", "entre 6° et 11° nord"], ["Longitudes", "entre 0° et 1°47' est"], ["Longueur nord-sud", "environ 560 km"], ["Superficie", "56 600 km²"], ["Population (RGPH-5, 2022)", "8 095 498 habitants"], ["IDH", "0,571 (161e rang sur 193)"]] } },
      intro: "Mon correspondant Lamboni, qui vit au Burkina Faso, ne connaît presque rien du Togo, le pays voisin du sien. À l'aide de la fiche d'identité de mon pays, je vais lui présenter sa localisation et ses limites, sa taille, sa population, sa langue, sa monnaie et son niveau de développement.",
      adresse: "Cher Lamboni,",
      support: "La fiche d'identité : latitudes 6° à 11° N, longitudes 0° à 1°47' E, 560 km, 56 600 km², 8 095 498 habitants, IDH 0,571 (161e sur 193) ; informations du document exploitées",
      indConsigne: "Lettre à Lamboni : localisation et limites ; dimensions et superficie ; population ; langue et monnaie ; niveau de développement",
      dev: ["D'abord, le Togo se trouve en Afrique occidentale, au bord du golfe de Guinée. Il s'étend entre 6° et 11° de latitude nord et entre 0° et 1°47' de longitude est. Il est limité au nord par ton pays, le Burkina Faso, à l'est par le Bénin, à l'ouest par le Ghana et au sud par l'océan Atlantique. Sa capitale est Lomé.",
        "Ensuite, mon pays n'est pas grand : il couvre 56 600 km². Il est étroit et allongé : il mesure environ 560 km du nord au sud, mais sa largeur ne dépasse pas 50 km sur la côte et près de Mango ; elle atteint environ 150 km au niveau de Kambolé. Au recensement de 2022 (RGPH-5), nous étions 8 095 498 habitants, soit 143 habitants au km².",
        "Enfin, comme chez toi, la langue officielle est le français et la monnaie est le franc CFA, que nous partageons avec les autres pays de l'UEMOA. Le Togo fait partie des pays les moins avancés (PMA) : son indice de développement humain est de 0,571, ce qui le place au 161e rang sur 193."],
      concl: "En définitive, cher Lamboni, le Togo est un petit pays étroit et allongé du golfe de Guinée, peuplé de plus de 8 millions d'habitants, qui parle français et paie en franc CFA comme toi : viens le découvrir !",
      signature: "Ton correspondant de Lomé.",
      justesse: ["Localisation : Afrique occidentale, golfe de Guinée ; 6° à 11° N, 0° à 1°47' E ; capitale Lomé.", "Limites : Burkina Faso (nord), Bénin (est), Ghana (ouest), océan Atlantique (sud).", "Dimensions : 560 km du nord au sud, 50 km au plus sur la côte et près de Mango, environ 150 km à Kambolé ; 56 600 km² ; 8 095 498 habitants (RGPH-5, 2022), 143 hab./km².", "Langue officielle : français ; monnaie : franc CFA (UEMOA) ; PMA, IDH 0,571 (161e sur 193)."],
      concepts: "Localisation, latitude, longitude, limites, superficie, population, densité, monnaie, PMA, IDH."
    }],
    vf: [["Le Togo a une façade maritime sur le golfe de Guinée.", true], ["Le Ghana limite le Togo à l'est.", false, "Le Ghana limite le Togo à l'ouest ; à l'est, c'est le Bénin."], ["La largeur du Togo atteint environ 150 km au niveau de Kambolé.", true], ["Le Togo s'étend entre 0° et 11° de longitude est.", false, "Il s'étend entre 0° et 1°47' de longitude est (et entre 6° et 11° de latitude nord)."], ["Le Togo partage le franc CFA avec les autres pays de l'UEMOA.", true], ["Le Togo occupe le 161e rang sur 193 pour l'indice de développement humain.", true]],
    choix: [["La capitale du Togo est (Kara / Lomé / Atakpamé).", "Lomé"], ["Le Togo mesure environ (360 / 560 / 960) km du nord au sud.", "560"], ["Au nord, le Togo est limité par (le Burkina Faso / le Niger / le Mali).", "le Burkina Faso"], ["Au recensement de 2022, la densité du Togo est de (43 / 143 / 243) habitants au km².", "143"]],
    defs: [["Nombre moyen d'habitants par km².", "la densité de population"], ["Indice qui mesure le niveau de développement d'un pays.", "l'indice de développement humain (IDH)"], ["Groupe des pays les plus pauvres du monde, dont fait partie le Togo.", "les pays les moins avancés (PMA)"]],
    intrus: [[["le Bénin", "le Ghana", "le Burkina Faso", "le Nigeria"], "le Nigeria", "il n'a pas de frontière avec le Togo ; les autres sont ses voisins."], [["la latitude", "la longitude", "la capitale", "le golfe de Guinée"], "la capitale", "ce n'est pas un élément de localisation sur le globe ; les autres servent à situer le Togo."]],
    comp: [{ texte: "Pour dessiner le Togo, on trace d'abord le rectangle ABCD : AB mesure {a} carreaux et BC en mesure {b}. On prolonge DC jusqu'à G pour avoir CG = {c} carreaux, puis on trace au-dessus le carré {d}.", mots: ["4", "10", "6", "GCEF"] }],
    ordre: [{ consigne: "Range dans l'ordre les étapes de la réalisation du croquis du Togo à partir d'un quadrillage.", elements: ["tracer le rectangle ABCD", "tracer le carré GCEF au-dessus", "tracer IH et KJ, qui se croisent en O", "placer N et M sur IH", "tracer le contour carreau par carreau", "effacer le quadrillage et écrire le titre, la légende et l'échelle"] }],
    cours: [["Montre, avec des chiffres, que le Togo est un pays étroit et allongé.", 1.5, "Il mesure environ 560 km du nord au sud (0,5 pt), mais sa largeur ne dépasse pas 50 km sur la côte et près de Mango (0,5 pt) et n'atteint qu'environ 150 km à Kambolé (0,5 pt)."],
      ["Donne les coordonnées géographiques du Togo.", 1, "Entre 6° et 11° de latitude nord (0,5 pt) et entre 0° et 1°47' de longitude est (0,5 pt)."],
      ["Quelle est la langue officielle du Togo ?", 0.5, "Le français (0,5 pt)."],
      ["Que nous apprend le recensement de 2022 (RGPH-5) sur la population du Togo ?", 1, "Le Togo comptait 8 095 498 habitants (0,5 pt), soit 143 habitants au km² (0,5 pt)."],
      ["Qu'est-ce qui montre que le Togo est un pays peu développé ?", 1, "Il fait partie des pays les moins avancés (PMA) (0,5 pt) ; son IDH est de 0,571, au 161e rang sur 193 (0,5 pt)."],
      ["Où se trouvent les points F et L quand on trace le contour du Togo sur le quadrillage ?", 1, "F est le coin nord-ouest du cadre (0,5 pt) ; L est sur AB, sur la côte, près de Lomé (0,5 pt)."],
      ["Après avoir tracé le contour du Togo, que faut-il faire pour terminer le croquis ?", 1.5, "Effacer le quadrillage (0,5 pt) ; écrire les pays voisins, l'océan Atlantique et Lomé (0,5 pt) ; écrire le titre, la flèche du nord et l'échelle (0,5 pt)."]]
  },
  g3_2: {
    sit: [{
      texte: "Le club de géographie de ton collège prépare une sortie de découverte qui conduira les élèves de 6e de Lomé jusqu'à Dapaong. Le président du club te charge de présenter aux voyageurs, avant le départ, les paysages et les cours d'eau qu'ils traverseront. Il te remet la carte ci-dessous.",
      consignes: ["À l'aide de la carte, présente aux élèves de 6e les grands ensembles du relief du Togo.",
        "Présente-leur ensuite les trois ensembles de cours d'eau du Togo et montre-leur à quoi servent ces cours d'eau."],
      doc: { titre: "Document : le relief du Togo", image: "images/epreuves/3e_g3_2.png" },
      prods: [{
        intro: "Le club de géographie de mon collège emmène les élèves de 6e de Lomé à Dapaong. Avant le départ, je vais leur présenter, à l'aide de la carte, les grands ensembles du relief qu'ils vont traverser.",
        adresse: "Chers jeunes camarades,",
        support: "La carte du relief : montagnes (chaîne de l'Atakora, mont Agou 986 m, Danyi, plateau akposso, Fazao, Malfakassa, monts kabyè, Défale, Alédjo) ; plateau de Dapaong ; plaines de l'Oti, du Mô, du Mono ; plateau de terre de barre ; plaine côtière ; informations du document exploitées",
        indConsigne: "Présentation des trois grands ensembles du relief : montagnes, plateaux, plaines, avec des exemples tirés de la carte",
        dev: ["D'abord, la carte montre que le Togo est traversé du sud-ouest au nord-est par une chaîne de montagnes, l'Atakora. Elle est formée de plusieurs massifs : monts Défalé, monts Kabyè, monts Bassar, Fazao, Malfakassa, Alédjo. Il existe aussi des monts isolés, comme l'Ahito. Le mont Agou, haut de 986 m, est le plus haut sommet du pays.",
          "Ensuite, vous verrez des plateaux : au nord, ceux de Dapaong et de Bombouaka ; au sud-ouest, ceux de Danyi, de l'Akposso et du Kloto ; et, dès la sortie de Lomé, le plateau de terre de barre.",
          "Enfin, de part et d'autre de l'Atakora s'étendent des plaines : la plaine côtière au sud, la grande plaine du Mono à l'est, la petite plaine du Mô au centre-ouest et la plaine de l'Oti au nord, que nous traverserons avant d'arriver à Dapaong."],
        concl: "En définitive, de Lomé à Dapaong, vous traverserez les trois grands ensembles du relief togolais : plaines, plateaux et montagnes de l'Atakora.",
        justesse: ["Montagnes : chaîne de l'Atakora (sud-ouest/nord-est), massifs Défalé, Kabyè, Bassar, Fazao, Malfakassa, Alédjo ; monts isolés (Ahito) ; mont Agou, 986 m, point culminant.", "Plateaux : Dapaong et Bombouaka (nord) ; Danyi, Akposso, Kloto (sud-ouest) ; terre de barre (sud).", "Plaines : Oti (nord), Mono (est), Mô (centre-ouest), plaine côtière (sud)."],
        concepts: "Relief, chaîne de montagnes, massif, sommet, plateau, plaine."
      }, {
        intro: "Pendant le voyage, les élèves de 6e franchiront de nombreux cours d'eau. Je vais leur présenter les trois ensembles de cours d'eau du Togo, puis leur montrer à quoi servent ces cours d'eau.",
        adresse: "Chers jeunes camarades,",
        support: "La carte : cours d'eau tracés de part et d'autre de l'Atakora ; plaines de l'Oti et du Mono ; informations du document exploitées",
        indConsigne: "Présentation des trois ensembles hydrographiques (bassin de la Volta, bassin du Mono, cours d'eau côtiers) et de l'utilité des cours d'eau",
        dev: ["D'abord, au nord, le bassin de la Volta : l'Oti, qui vient du Bénin où on l'appelle Pendjari, coule sur environ 170 km au Togo avant de se jeter dans la Volta ; il reçoit la Koumongou, la Kéran, la Kara et le Mô.",
          "Ensuite, le bassin du Mono : le Mono, le plus long cours d'eau du pays (environ 560 km), naît dans le massif du Tchaoudjo et se jette dans l'océan à Grand-Popo, au Bénin ; ses affluents sont l'Anié, l'Ogou, l'Amou et le Wahala. Les cours d'eau côtiers, le Zio (environ 176 km) et le Haho (environ 140 km), se jettent dans le lac Togo, relié à la lagune d'Aného ; à Lomé, il y a la lagune de Bè.",
          "Enfin, ces cours d'eau sont très utiles : ils produisent de l'électricité (barrages de Nangbéto sur le Mono et de Kpimé) ; ils servent à la pêche, à la pisciculture, à l'irrigation, aux cultures maraîchères et de contre-saison ; ils abreuvent le bétail, fournissent l'eau des ménages, le sable et le gravier ; on y circule même en pirogue sur le lac Togo et le Mono."],
        concl: "En définitive, nos cours d'eau forment trois ensembles et sont une vraie richesse : il faut les protéger.",
        justesse: ["Bassin de la Volta : Oti (Pendjari, environ 170 km au Togo) ; affluents Koumongou, Kéran, Kara, Mô.", "Bassin du Mono : environ 560 km, source dans le Tchaoudjo, embouchure à Grand-Popo ; affluents Anié, Ogou, Amou, Wahala. Côtiers : Zio, Haho → lac Togo ; lagunes d'Aného et de Bè.", "Utilité : électricité (Nangbéto, Kpimé), pêche, pisciculture, irrigation, cultures de contre-saison, bétail, ménages, sable et gravier, transport en pirogue."],
        concepts: "Cours d'eau, bassin, affluent, source, embouchure, lagune, barrage, irrigation."
      }]
    }],
    vf: [["La chaîne de l'Atakora traverse le Togo du sud-ouest au nord-est.", true], ["Le Mono se jette dans la mer à Lomé.", false, "Le Mono se jette dans l'océan à Grand-Popo, au Bénin."], ["Au Bénin, l'Oti s'appelle la Pendjari.", true], ["Le Zio et le Haho se jettent dans le lac Togo.", true], ["La plaine du Mô est la plus grande plaine du pays.", false, "C'est une petite plaine du centre-ouest ; la grande plaine est celle du Mono."], ["Le barrage de Nangbéto est construit sur le Mono.", true]],
    choix: [["Le plus haut sommet du Togo est (le mont Agou / l'Ahito / le Kloto).", "le mont Agou"], ["Le Mono prend sa source dans le massif (de Fazao / du Tchaoudjo / de Danyi).", "du Tchaoudjo"], ["L'Oti fait partie du bassin (du Mono / de la Volta / du Zio).", "de la Volta"], ["Le plateau de terre de barre se trouve (au nord / au centre / au sud) du pays.", "au sud"]],
    defs: [["Cours d'eau qui se jette dans un autre cours d'eau.", "un affluent"], ["Ensemble de montagnes alignées, comme l'Atakora.", "une chaîne de montagnes"], ["Ouvrage qui retient l'eau d'un cours d'eau, par exemple pour produire de l'électricité.", "un barrage"]],
    intrus: [[["l'Anié", "l'Ogou", "l'Amou", "la Kéran"], "la Kéran", "c'est un affluent de l'Oti ; les autres sont des affluents du Mono."], [["éboulements", "glissements de terrain", "inondations", "chutes de blocs"], "inondations", "c'est un risque lié aux cours d'eau ; les autres sont liés au relief."]],
    comp: [{ texte: "Pour protéger les versants, il faut les {a} et éviter les feux de brousse, puis cultiver en {b}. Pour protéger les cours d'eau, il faut planter des arbres le long des {c}, construire des {d} et ne pas bâtir dans les zones inondables.", mots: ["reboiser", "terrasses", "berges", "digues"] }],
    classer: [{ consigne: "Classe ces lieux selon l'ensemble du relief auquel ils appartiennent.", cats: ["montagnes", "plateaux", "plaines"], elts: [["Fazao", 0], ["Malfakassa", 0], ["Alédjo", 0], ["Dapaong", 1], ["Danyi", 1], ["Bombouaka", 1], ["l'Oti", 2], ["le Mono", 2]] }],
    cours: [["Où trouve-t-on les plateaux du Togo ? Donne un exemple pour chaque zone.", 1.5, "Au nord : Dapaong ou Bombouaka (0,5 pt) ; au sud-ouest : Danyi, Akposso ou Kloto (0,5 pt) ; au sud : le plateau de terre de barre (0,5 pt)."],
      ["Présente le Mono.", 1.5, "C'est le plus long cours d'eau du pays (environ 560 km) (0,5 pt) ; il naît dans le massif du Tchaoudjo et se jette dans l'océan à Grand-Popo (0,5 pt) ; ses affluents sont l'Anié, l'Ogou, l'Amou et le Wahala (0,5 pt)."],
      ["Montre que les montagnes humides du sud-ouest sont utiles à l'agriculture.", 1, "Elles portent le café et le cacao (0,5 pt) et l'agroforesterie (0,5 pt)."],
      ["Quels paysages du relief attirent les visiteurs (écotourisme) ?", 1, "Deux au choix (0,5 pt chacun) : le mont Agou, le Kloto, la faille d'Alédjo."],
      ["Quels dégâts provoquent les catastrophes liées aux cours d'eau ?", 1, "Elles détruisent les champs, les maisons et les routes (0,5 pt) ; elles provoquent des maladies et peuvent faire des morts (0,5 pt)."],
      ["Quel projet pédagogique une classe peut-elle mener pour protéger le relief et les cours d'eau ?", 1, "Une campagne de sensibilisation, une journée de reboisement ou une journée de nettoyage (1 pt pour un projet bien présenté)."],
      ["Où se jettent l'Oti et le Mono ?", 1, "L'Oti se jette dans la Volta (0,5 pt) ; le Mono se jette dans l'océan à Grand-Popo (0,5 pt)."]]
  },
  g3_3: {
    sit: [{
      texte: "Ton cousin Sitou, élève de 4e, a trouvé dans un livre le graphique ci-dessous. Il voit des colonnes, une courbe et des zones colorées, mais il ne sait pas comment le lire ni ce qu'il apprend sur le climat de la station. Il te demande de l'aider à le comprendre.",
      consigne: "Explique à Sitou ce qu'est un diagramme ombrothermique et comment on le construit, puis analyse avec lui ce diagramme pour dire de quel climat il s'agit.",
      doc: { titre: "Document : diagramme ombrothermique d'une station du Togo", image: "images/epreuves/3e_g3_3.png" },
      intro: "Mon cousin Sitou a trouvé un graphique avec des colonnes et une courbe, mais il ne sait pas le lire. Je vais lui expliquer ce qu'est un diagramme ombrothermique et comment on le construit, puis l'analyser avec lui pour trouver le climat de la station.",
      adresse: "Cher Sitou,",
      support: "Le diagramme : colonnes des précipitations, courbe des températures, échelle 10 °C = 20 mm (P = 2T), mois secs en couleur (décembre, janvier, février) ; informations du document exploitées",
      indConsigne: "Explication à Sitou : définition et construction du diagramme ombrothermique ; analyse (températures, amplitude, mois secs et humides, total des pluies) ; type de climat",
      dev: ["D'abord, un diagramme ombrothermique est un graphique qui réunit, mois par mois, les précipitations d'une station, en colonnes, et ses températures, en courbe. On place les 12 mois sur l'axe horizontal, les températures sur un axe vertical et les précipitations sur l'autre, avec l'échelle de Gaussen : P = 2T, c'est-à-dire 10 °C pour 20 mm, comme l'indique le titre.",
        "Ensuite, on l'analyse en trois étapes. La température la plus haute est de 29 °C (avril) et la plus basse de 24 °C (janvier) : l'amplitude thermique, la différence entre les deux, est donc de 5 °C, ce qui est faible. Les mois secs sont ceux où la courbe passe au-dessus de la colonne (P ≤ 2T) : ici décembre, janvier et février, en couleur sur le graphique ; tous les autres mois sont humides. En additionnant les colonnes, on trouve 1 638 mm de pluie dans l'année.",
        "Enfin, une station chaude toute l'année, avec une faible amplitude, seulement trois mois secs et plus de 1 500 mm de pluie a un climat tropical humide, très arrosé, comme celui des montagnes du sud-ouest du Togo."],
      concl: "En définitive, Sitou, le diagramme ombrothermique permet de lire le climat d'une station : celui-ci montre un climat tropical humide, chaud et très arrosé.",
      justesse: ["Définition : graphique des précipitations (colonnes) et des températures (courbe), mois par mois, d'une station.", "Construction : 12 mois en abscisse ; échelle de Gaussen P = 2T (10 °C pour 20 mm).", "Analyse : maximum 29 °C (avril), minimum 24 °C (janvier), amplitude 5 °C ; mois secs : décembre, janvier, février (P ≤ 2T) ; total 1 638 mm.", "Conclusion : climat tropical humide, très arrosé."],
      concepts: "Diagramme ombrothermique, précipitations, températures, échelle de Gaussen, amplitude thermique, mois sec, mois humide, climat tropical humide."
    }],
    vf: [["Le climat tropical sec règne au nord du 8e parallèle.", true], ["Le climat tropical humide n'a que deux saisons.", false, "Il a quatre saisons : deux saisons des pluies et deux saisons sèches."], ["Dans le climat tropical sec, les pluies diminuent vers le nord.", true], ["Aného reçoit environ 884 mm de pluie par an.", true], ["Dans le Bas-Togo, l'harmattan ne descend jamais jusqu'à la côte.", false, "De décembre à février, l'harmattan descend jusqu'à la côte."], ["En août, la remontée d'eaux froides réduit l'évaporation au large du Togo.", true]],
    choix: [["Le climat tropical sec est aussi appelé climat (guinéen / soudanien / équatorial).", "soudanien"], ["Dans le nord, la saison sèche dure de novembre à (février / avril / juin).", "avril"], ["La petite saison sèche du sud a lieu en (août / décembre / mars).", "août"], ["Abidjan reçoit plus de (800 / 1 200 / 1 800) mm de pluie par an.", "1 800"]],
    defs: [["Différence entre la température la plus haute et la plus basse d'une station.", "l'amplitude thermique"], ["Zone de rencontre de la mousson et de l'harmattan.", "le front intertropical (FIT)"], ["Climat local particulier, comme celui, plus frais et plus pluvieux, des montagnes.", "un microclimat"]],
    intrus: [[["Sokodé", "Kara", "Mango", "Kpalimé"], "Kpalimé", "elle a un climat tropical humide ; les autres villes ont un climat tropical sec."], [["pénurie d'eau", "récoltes incertaines", "savane à la place de la forêt", "harmattan"], "harmattan", "c'est une cause de l'anomalie ; les autres en sont des conséquences."]],
    comp: [{ texte: "Le Bas-Togo est moins arrosé que les autres côtes du golfe de Guinée : Lomé reçoit environ {a} mm de pluie par an, contre {b} mm à Notsé. C'est l'{c} climatique du Bas-Togo ; elle touche toute la côte, d'Accra à {d}.", mots: ["930", "1 212", "anomalie", "Cotonou"] }],
    relier: [{ consigne: "Relie chaque station (liste A) à sa pluie moyenne annuelle (liste B).", A: ["Lomé", "Tsévié", "Notsé", "Dapaong", "Mango"], B: ["environ 930 mm", "1 046 mm", "1 212 mm", "environ 1 000 mm", "environ 1 100 mm"] }],
    cours: [["Décris les saisons du climat tropical sec.", 1, "Une saison des pluies de mai à octobre (mousson) (0,5 pt) et une saison sèche de novembre à avril (harmattan) (0,5 pt)."],
      ["Décris les quatre saisons du climat tropical humide.", 2, "Une grande saison des pluies de mars à juillet (0,5 pt), une petite saison sèche en août (0,5 pt), une petite saison des pluies en septembre-octobre (0,5 pt) et une grande saison sèche de novembre à février (0,5 pt)."],
      ["Cite deux localités du Togo qui ont un microclimat de montagne.", 1, "Kouma-Konda, dans le Kloto (0,5 pt) ; Kpéwa, à Alédjo (0,5 pt)."],
      ["Pourquoi la position de la côte explique-t-elle en partie l'anomalie climatique du Bas-Togo ?", 1, "La côte est presque parallèle à la mousson (0,5 pt), qui la longe sans y verser beaucoup de pluie (0,5 pt)."],
      ["Comment la destruction de la végétation agit-elle sur l'anomalie climatique ?", 0.5, "Elle aggrave la sécheresse (0,5 pt)."],
      ["Quel paysage végétal l'anomalie climatique a-t-elle fait apparaître dans le sud du Togo ?", 1, "Une savane, la clairière du sud (0,5 pt), à la place de la forêt (0,5 pt)."],
      ["Comment reconnaît-on un mois humide sur un diagramme ombrothermique ?", 1, "La colonne des pluies dépasse la courbe des températures (1 pt)."]]
  },
  g3_4: {
    sit: [{
      texte: "Au retour d'une excursion de Lomé à Dapaong, ta camarade Akouvi relit son carnet de route (document). Elle a noté les sols et les plantes qu'elle a vus, mais elle ne sait pas les nommer avec les mots de la géographie, et elle se demande pourquoi les paysans ne cultivent pas partout les mêmes plantes. Elle te demande de l'aider à rédiger le compte rendu de l'excursion.",
      consignes: ["Présente à Akouvi les principaux types de sols et de végétation du Togo, en t'appuyant sur ce qu'elle a observé.",
        "Explique-lui pourquoi les paysans ne cultivent pas les mêmes plantes sur tous les sols : montre les qualités culturales de chaque sol."],
      doc: { titre: "Document : le carnet de route d'Akouvi", liste: ["Au bord du lac Togo : des cocotiers, des fourrés et, dans l'eau, des arbres aux racines en échasses.", "Vers Tsévié : une terre rouge, bien cultivée, avec des palmiers à huile.", "Au sud de Tabligbo : une terre noire et collante, qui se fend en saison sèche.", "Dans la plaine du Mono : de hautes herbes, des rôniers et des arbres isolés.", "Le long des rivières : un étroit rideau de grands arbres.", "Vers Kara et Dapaong : des karités, des nérés, des baobabs au milieu de petits arbustes."] },
      prods: [{
        intro: "Ma camarade Akouvi a noté dans son carnet les sols et les plantes vus pendant notre excursion de Lomé à Dapaong, mais elle ne sait pas les nommer. Je vais lui présenter les principaux types de sols et de végétation du Togo, en partant de ses observations.",
        adresse: "Chère Akouvi,",
        support: "Le carnet de route : mangrove et cocotiers du lac Togo, terre rouge de Tsévié, terre noire au sud de Tabligbo, savane du Mono, rideau d'arbres le long des rivières, karités et nérés du nord ; informations du document exploitées",
        indConsigne: "Présentation des types de sols (ferralitiques, ferrugineux, vertisols, hydromorphes, peu évolués) et de la végétation (savanes, forêts, littoral), reliés aux observations",
        dev: ["D'abord, les sols. Le sol est la couche superficielle et meuble de la terre, où poussent les plantes. La terre rouge vue vers Tsévié est un sol ferralitique, la terre de barre du sud et du sud-ouest humides. La terre noire et collante du sud de Tabligbo est un vertisol (argile noire), qu'on trouve aussi le long du Mono, de l'Ogou et de la Binah. Dans les savanes du centre et du nord s'étendent les sols ferrugineux tropicaux ; dans les vallées gorgées d'eau, les sols hydromorphes ; sur les montagnes et le littoral, des sols peu évolués et pauvres.",
          "Ensuite, la végétation. Les hautes herbes et les rôniers de la plaine du Mono forment la savane guinéenne, boisée et herbeuse ; les karités, nérés et baobabs du nord appartiennent à la savane soudanienne, arborée et arbustive. Le rideau de grands arbres le long des rivières est une forêt galerie ; il existe aussi des forêts de montagne et des forêts sacrées.",
          "Enfin, au bord du lac Togo, tu as vu la végétation du littoral : fourrés, cocotiers et mangrove, ces arbres aux racines en échasses qui poussent dans l'eau des lagunes."],
        concl: "En définitive, Akouvi, notre excursion a traversé presque tous les sols et toutes les formations végétales du Togo : tu peux maintenant les nommer dans ton compte rendu.",
        justesse: ["Sol : couche superficielle et meuble où poussent les plantes.", "Sols : ferralitiques (terre de barre, sud et sud-ouest) ; ferrugineux tropicaux (centre et nord) ; vertisols (sud de Tabligbo, Mono, Ogou, Binah) ; hydromorphes (vallées) ; peu évolués (montagnes, littoral).", "Végétation : savane guinéenne (Mono) et soudanienne (nord) ; forêts galeries, de montagne, sacrées ; littoral : fourrés, cocotiers, mangrove."],
        concepts: "Sol, sol ferralitique, sol ferrugineux, vertisol, sol hydromorphe, savane, forêt galerie, mangrove."
      }, {
        intro: "Akouvi se demande aussi pourquoi les paysans ne cultivent pas partout les mêmes plantes. Je vais lui expliquer que chaque sol a ses qualités culturales, c'est-à-dire qu'il convient à certaines cultures.",
        adresse: "Chère Akouvi,",
        support: "Le carnet : palmiers à huile sur la terre rouge de Tsévié ; terre noire de Tabligbo ; sols des vallées ; informations du document exploitées",
        indConsigne: "Explication des qualités culturales : cultures adaptées à chaque type de sol",
        dev: ["D'abord, les sols ferralitiques, comme la terre rouge de Tsévié, conviennent au café, au cacao et au palmier à huile : c'est pourquoi tu as vu des palmiers à huile. Les vertisols, comme la terre noire de Tabligbo, sont parmi les meilleures terres : on y cultive le maïs, le coton, le sorgho et le riz.",
          "Ensuite, les sols hydromorphes des vallées, gorgés d'eau, portent le riz, la canne à sucre et les cultures maraîchères. Les sols ferrugineux des savanes du nord donnent le mil, le sorgho, l'arachide et le coton, mais ils s'épuisent vite.",
          "Enfin, les sols peu évolués des montagnes et du littoral sont pauvres : ils ne portent que des cultures peu exigeantes, comme le manioc."],
        concl: "En définitive, si les paysans ne cultivent pas partout les mêmes plantes, c'est parce que chaque sol a ses qualités culturales : bien les connaître permet de mieux produire.",
        justesse: ["Ferralitiques : café, cacao, palmier à huile.", "Vertisols (meilleures terres) : maïs, coton, sorgho, riz ; hydromorphes : riz, canne à sucre, cultures maraîchères.", "Ferrugineux : mil, sorgho, arachide, coton, mais épuisement rapide ; peu évolués : pauvres, manioc."],
        concepts: "Qualités culturales, fertilité, sol, culture vivrière, culture de rente."
      }]
    }],
    vf: [["Les sols ferrugineux tropicaux couvrent environ la moitié du pays.", true], ["Les sols hydromorphes se trouvent sur les sommets des montagnes.", false, "Ils se trouvent dans les vallées (Zio, Haho, Mono, Oti) ; les montagnes ont des sols peu évolués."], ["La savane soudanienne se trouve au nord du Togo.", true], ["Les forêts galeries poussent le long des cours d'eau.", true], ["Entre 2000 et 2010, environ 4 % du territoire togolais a été dégradé.", true], ["Le surpâturage est un risque pour les sols ferralitiques seulement.", false, "Le surpâturage menace la végétation, partout où le bétail est trop nombreux."]],
    choix: [["La terre de barre est un sol (ferralitique / hydromorphe / peu évolué).", "ferralitique"], ["Les argiles noires sont aussi appelées (vertisols / sols ferrugineux / sols hydromorphes).", "vertisols"], ["Le rônier, l'iroko et l'acajou sont des arbres de la savane (soudanienne / guinéenne / littorale).", "guinéenne"], ["Pour enrichir la terre, on utilise (le fumier et le compost / le charbon de bois / les feux de brousse).", "le fumier et le compost"]],
    defs: [["Couche superficielle et meuble de la terre, où poussent les plantes.", "le sol"], ["Végétation de palétuviers qui pousse au bord des lagunes et du lac Togo.", "la mangrove"], ["Disparition des forêts, coupées ou brûlées par l'homme.", "la déforestation"]],
    intrus: [[["le néré", "le karité", "le baobab", "l'acajou"], "l'acajou", "c'est un arbre de la savane guinéenne ; les autres sont des arbres de la savane soudanienne."], [["l'érosion", "le lessivage", "le cuirassement", "les feux de brousse"], "les feux de brousse", "c'est un risque pour la végétation ; les autres sont des risques pour les sols."]],
    comp: [{ texte: "Pour protéger les sols et la végétation, il faut cultiver en courbes de niveau et en terrasses, pratiquer l'{a} et planter des {b} vives. Il faut aussi protéger les parcs et les {c}, et utiliser le {d} plutôt que le charbon de bois.", mots: ["agroforesterie", "haies", "réserves", "gaz"] }],
    classer: [{ consigne: "Classe ces formations végétales selon le milieu où on les trouve.", cats: ["savanes", "forêts", "littoral"], elts: [["la savane arborée et arbustive du nord", 0], ["la savane boisée et herbeuse du Mono", 0], ["les forêts galeries", 1], ["les forêts sacrées", 1], ["les forêts de montagne", 1], ["la mangrove", 2], ["les fourrés et les cocotiers", 2]] }],
    cours: [["Où trouve-t-on les sols hydromorphes et pourquoi portent-ils ce nom ?", 1, "Dans les vallées du Zio, du Haho, du Mono et de l'Oti (0,5 pt) ; ce sont des sols gorgés d'eau (0,5 pt)."],
      ["Pourquoi les sols peu évolués ne portent-ils que des cultures peu exigeantes ? Donne un exemple.", 1, "Parce qu'ils sont pauvres (0,5 pt) ; exemple : le manioc (0,5 pt)."],
      ["Décris les forêts de montagne du Togo.", 1, "Elles sont claires et sèches au centre (0,5 pt) et humides au sud-ouest (0,5 pt)."],
      ["Quelles régions ont été les plus touchées par la dégradation du territoire entre 2000 et 2010 ?", 1.5, "Les Savanes (0,5 pt), la Maritime (0,5 pt) et la Kara (0,5 pt)."],
      ["Cite quatre risques qui menacent les sols du Togo.", 2, "Quatre au choix (0,5 pt chacun) : érosion, lessivage, tassement, cuirassement, encroûtement, perte de fertilité."],
      ["Comment peut-on sensibiliser son entourage à la protection des sols et de la végétation ?", 1, "Deux moyens au choix (0,5 pt chacun) : affiches, slogans, sketches, poèmes."],
      ["Quels sols conviennent le mieux au riz ?", 1, "Les sols hydromorphes (0,5 pt) et les vertisols (0,5 pt)."]]
  },
  g3_5: {
    sit: [{
      texte: "Ton grand-père Koami s'étonne : « Quand le Togo est devenu indépendant, nous n'étions même pas deux millions ; aujourd'hui, nous sommes plus de huit millions, et pourtant beaucoup de jeunes partent à Lomé ou à l'étranger. » Il te demande de lui expliquer ce changement. Tu t'appuies sur le tableau ci-dessous.",
      consigne: "Dans un exposé que tu feras devant ton grand-père, explique comment la population togolaise a évolué grâce à ses mouvements naturels, puis présente les migrations internes et internationales des Togolais.",
      doc: { titre: "Document : quelques chiffres de la population togolaise", tableau: { entetes: ["Indicateur", "Vers 1960", "Aujourd'hui"], lignes: [["Population", "environ 1,4 million", "8 095 498 (2022)"], ["Mortalité", "29 ‰", "environ 8 ‰ (vers 2020)"], ["Natalité", "élevée", "environ 33 ‰ (vers 2020)"], ["Accroissement naturel", "—", "2,5 à 3 % par an"]] } },
      intro: "Mon grand-père Koami s'étonne que la population togolaise soit passée de moins de deux millions à plus de huit millions d'habitants, alors que beaucoup de jeunes s'en vont. À l'aide du tableau, je vais lui expliquer l'évolution de la population par ses mouvements naturels, puis lui présenter les migrations des Togolais.",
      adresse: "Cher grand-père,",
      support: "Le tableau : population d'environ 1,4 million vers 1960 et de 8 095 498 en 2022 ; mortalité de 29 ‰ à environ 8 ‰ ; natalité d'environ 33 ‰ ; accroissement de 2,5 à 3 % par an ; informations du document exploitées",
      indConsigne: "Exposé : mouvements naturels (natalité, mortalité, accroissement naturel) et causes de la croissance ; migrations internes (exode rural, terres de plantation) ; migrations internationales (émigration, immigration, solde migratoire)",
      dev: ["D'abord, la population dépend des mouvements naturels, c'est-à-dire des naissances et des décès. La natalité reste élevée, environ 33 ‰ vers 2020, alors que la mortalité a beaucoup baissé, de 29 ‰ vers 1960 à environ 8 ‰, grâce aux soins et à l'hygiène. L'accroissement naturel est donc fort, 2,5 à 3 % par an : c'est pourquoi nous sommes passés d'environ 1,4 million d'habitants en 1960 à 8 095 498 en 2022. Les mariages précoces, le faible usage de la contraception, certaines croyances, la polygamie et la jeunesse de la population expliquent aussi cette croissance.",
        "Ensuite, à l'intérieur du pays, l'exode rural pousse beaucoup de jeunes des campagnes, surtout de la Kara et des Savanes, vers Lomé et la région Maritime, pour chercher du travail. Des paysans partent aussi vers les terres de plantation des Plateaux et de la Centrale.",
        "Enfin, des Togolais émigrent vers les pays voisins (Nigeria, Côte d'Ivoire, Ghana, Gabon), vers l'Europe (France, Allemagne) et vers l'Amérique du Nord. Le Togo reçoit aussi des immigrés, Nigérians, Ghanéens, Burkinabè, Béninois, Libanais ou Chinois, surtout dans le commerce. Mais il part plus de personnes qu'il n'en arrive : le solde migratoire est négatif. Ces départs ne compensent pas le fort accroissement naturel."],
      concl: "En définitive, grand-père, la population togolaise augmente vite parce qu'il naît beaucoup plus d'enfants qu'il ne meurt de personnes, même si beaucoup de Togolais se déplacent dans le pays ou partent à l'étranger.",
      justesse: ["Natalité environ 33 ‰ ; mortalité de 29 ‰ (1960) à 8 ‰ (soins, hygiène) ; accroissement naturel 2,5 à 3 % par an ; de 1,4 million (1960) à 8 095 498 (2022).", "Autres causes : mariages précoces, faible contraception, croyances, polygamie, jeunesse.", "Migrations internes : exode rural (Kara, Savanes → Lomé, Maritime) ; vers les terres de plantation (Plateaux, Centrale).", "Migrations internationales : émigration (pays voisins, Europe, Amérique du Nord) ; immigration (commerce) ; solde migratoire négatif."],
      concepts: "Mouvement naturel, natalité, mortalité, accroissement naturel, exode rural, émigration, immigration, solde migratoire."
    }],
    vf: [["L'accroissement naturel est la différence entre la natalité et la mortalité.", true], ["L'exode rural conduit surtout les jeunes du nord vers Lomé et la région Maritime.", true], ["La région Centrale est la plus densément peuplée du Togo.", false, "C'est la moins densément peuplée (60 hab./km²) ; la plus peuplée est la région Maritime avec le Grand Lomé."], ["Le Grand Lomé et la région Maritime occupent 11 % du territoire.", true], ["La colonisation a surtout équipé le nord du Togo.", false, "Elle a surtout équipé le sud et la côte."], ["Autrefois, les montagnes servaient de refuges contre les guerres et les razzias.", true]],
    choix: [["Vers 1960, le Togo comptait environ (1,4 / 4 / 8) millions d'habitants.", "1,4"], ["La densité des Savanes est d'environ (60 / 135 / 580) habitants au km².", "135"], ["L'onchocercose est une maladie qui a repoussé les hommes de certaines (vallées / villes / côtes).", "vallées"], ["Le Togo accueille beaucoup d'immigrés dans (le commerce / l'agriculture / l'armée).", "le commerce"]],
    defs: [["Départ des habitants des campagnes vers les villes.", "l'exode rural"], ["Différence entre les personnes qui arrivent dans un pays et celles qui en partent.", "le solde migratoire"], ["Nombre de décès pour 1 000 habitants en un an.", "la mortalité"]],
    intrus: [[["les sols fertiles", "l'eau", "un climat favorable", "l'onchocercose"], "l'onchocercose", "elle repousse les hommes ; les autres attirent la population."], [["le Nigeria", "le Ghana", "le Gabon", "le Burkina Faso"], "le Burkina Faso", "c'est un pays d'où viennent des immigrés ; les autres sont des pays où émigrent des Togolais."]],
    comp: [{ texte: "En 2022, la densité moyenne du Togo est de 143 habitants au km². La région Maritime avec le Grand Lomé atteint {a} hab./km² et rassemble près de {b} % des Togolais. Les Plateaux ont {c} hab./km² et la Kara {d}.", mots: ["580", "44", "96", "84"] }],
    relier: [{ consigne: "Relie chaque région (liste A) à sa densité en 2022 (liste B).", A: ["Maritime avec le Grand Lomé", "Savanes", "Plateaux", "Kara", "Centrale"], B: ["580 hab./km²", "135 hab./km²", "96 hab./km²", "84 hab./km²", "60 hab./km²"] }],
    classer: [{ consigne: "Classe ces causes de l'inégale répartition de la population selon leur nature.", cats: ["physiques", "historiques", "économiques"], elts: [["les sols fertiles et l'eau", 0], ["les zones sèches aux sols pauvres", 0], ["les montagnes refuges contre les razzias", 1], ["l'équipement du sud par la colonisation", 1], ["le port et les industries de Lomé", 2], ["les mines", 2], ["les écoles et les hôpitaux des villes", 2]] }],
    cours: [["Qu'est-ce qui a fait baisser la mortalité au Togo depuis 1960 ?", 1, "Les soins (0,5 pt) et l'hygiène (0,5 pt)."],
      ["Où partent les paysans qui cherchent des terres de plantation ?", 1, "Vers les Plateaux (0,5 pt) et la Centrale (0,5 pt)."],
      ["Vers quels continents, en dehors de l'Afrique, émigrent des Togolais ? Donne un pays d'Europe.", 1, "Vers l'Europe et l'Amérique du Nord (0,5 pt) ; la France ou l'Allemagne (0,5 pt)."],
      ["Montre que la population togolaise est concentrée dans le sud.", 1.5, "La région Maritime avec le Grand Lomé a 580 hab./km² (0,5 pt) ; elle rassemble près de 44 % des Togolais (0,5 pt) sur 11 % du territoire (0,5 pt)."],
      ["Pourquoi certaines montagnes, comme le pays kabyè, sont-elles très peuplées ?", 1, "Autrefois, les montagnes servaient de refuges (0,5 pt) contre les guerres et les razzias (0,5 pt)."],
      ["Explique pourquoi les zones mal équipées se vident.", 1, "Les hommes partent vers les villes, le port, les industries, les mines et les services (écoles, hôpitaux) (0,5 pt), qui offrent du travail et une vie meilleure (0,5 pt)."],
      ["Cite trois facteurs, autres que les soins, qui expliquent la croissance rapide de la population.", 1.5, "Trois au choix (0,5 pt chacun) : mariages précoces, faible usage de la contraception, certaines croyances, polygamie, jeunesse de la population."]]
  },
  g3_6: {
    sit: [{
      texte: "L'association des parents d'élèves de ton collège organise une journée de réflexion sur l'avenir des jeunes. Le président, M. Djobo, te demande de préparer deux interventions : l'une sur la structure de la population togolaise, à partir de la pyramide des âges ci-dessous ; l'autre sur les nombreux peuples qui composent le pays.",
      consignes: ["À partir de la pyramide des âges, décris la structure de la population togolaise par âge et par sexe, et explique la forme de cette pyramide.",
        "Présente les grands groupes de peuples du Togo, puis montre les avantages et les défis de cette diversité."],
      doc: { titre: "Document : la pyramide des âges du Togo (2022)", image: "images/epreuves/3e_g3_6.png" },
      prods: [{
        intro: "L'association des parents d'élèves réfléchit à l'avenir des jeunes. Pour ma première intervention, je vais décrire, à partir de la pyramide des âges, la structure de la population togolaise par âge et par sexe, et expliquer la forme de cette pyramide.",
        adresse: "Monsieur le Président, chers parents,",
        support: "La pyramide des âges de 2022 : hommes à gauche, femmes à droite, tranches de 5 ans ; base large (7,2 % et 7,4 % pour les 0-4 ans), sommet très étroit ; 40,9 % de moins de 15 ans, 4,7 % de 65 ans et plus, 51,3 % de femmes ; informations du document exploitées",
        indConsigne: "Description de la structure par âge et par sexe ; définition et explication de la forme de la pyramide",
        dev: ["D'abord, une pyramide des âges est un graphique qui montre la répartition d'une population par âge et par sexe : les hommes à gauche, les femmes à droite. Celle-ci montre que la population togolaise est très jeune : au recensement de 2022, 40,9 % des Togolais ont moins de 15 ans et seulement 4,7 % ont 65 ans ou plus.",
          "Ensuite, pour le sexe, il y a un peu plus de femmes que d'hommes : 51,3 % de femmes et 48,7 % d'hommes ; sur la pyramide, les barres de droite sont légèrement plus longues.",
          "Enfin, la pyramide a une base large, car il naît beaucoup d'enfants (forte natalité), et un sommet étroit et effilé, car il y a peu de personnes âgées : l'espérance de vie est encore faible. C'est la pyramide d'un pays jeune."],
        concl: "En définitive, la pyramide des âges montre une population très jeune, avec un peu plus de femmes que d'hommes : l'avenir du Togo, ce sont ses jeunes.",
        justesse: ["Définition : répartition par âge et par sexe (hommes à gauche, femmes à droite).", "Âge : 40,9 % de moins de 15 ans ; 4,7 % de 65 ans et plus (RGPH-5, 2022).", "Sexe : 51,3 % de femmes, 48,7 % d'hommes.", "Forme : base large (forte natalité), sommet étroit (espérance de vie faible) : pays jeune."],
        concepts: "Pyramide des âges, structure par âge, structure par sexe, natalité, espérance de vie, population jeune."
      }, {
        intro: "Pour ma seconde intervention, je vais présenter les grands groupes de peuples qui composent le Togo, puis montrer les avantages et les défis de cette diversité.",
        adresse: "Monsieur le Président, chers parents,",
        support: "La journée de réflexion de l'association des parents sur l'avenir des jeunes ; informations de la situation exploitées",
        indConsigne: "Présentation des groupes (adja-éwé, kabyè-tem, para-gourma, autres) ; avantages et défis de la diversité",
        dev: ["D'abord, le Togo compte une quarantaine d'ethnies, classées selon leurs liens de langue et de culture. Au sud, dans la Maritime et les Plateaux, vit le groupe adja-éwé (Éwé, Ouatchi, Mina, Guin, Adja…). Au centre et dans la Kara, le groupe kabyè-tem (Kabyè, Tem ou Kotokoli, Lamba, Nawdba…). Au nord, le groupe para-gourma (Moba, Gourma, Bassar, Konkomba, Tamberma, Ngam-ngam…). D'autres peuples, comme les Akposso, les Akébou, les Ana-Ifè ou les Anoufo, n'ont pas de lien avec ces groupes.",
          "Ensuite, cette diversité est un avantage : elle enrichit la culture nationale par ses langues, ses fêtes, ses danses et ses savoir-faire ; elle favorise les échanges et le brassage des populations, par les mariages et la vie dans les villes ; elle nous apprend le vivre-ensemble.",
          "Enfin, elle pose aussi des défis : mal acceptée, elle peut entraîner le tribalisme, le favoritisme, le repli sur soi et des conflits. Il faut donc respecter chaque culture et dialoguer pour faire de cette diversité une force qui unit."],
        concl: "En définitive, nos nombreux peuples sont une richesse pour le Togo, à condition que chacun respecte l'autre et choisisse l'unité.",
        justesse: ["Une quarantaine d'ethnies classées par la langue et la culture.", "Groupes : adja-éwé (sud) ; kabyè-tem (centre, Kara) ; para-gourma (nord) ; autres (Akposso, Akébou, Ana-Ifè, Anoufo).", "Avantages : culture enrichie, échanges et brassage, vivre-ensemble.", "Défis : tribalisme, favoritisme, repli sur soi, conflits ; respect et dialogue."],
        concepts: "Ethnie, groupe ethnique, diversité, brassage, tribalisme, vivre-ensemble, unité nationale."
      }]
    }],
    vf: [["Le Togo compte une quarantaine d'ethnies.", true], ["Les Moba et les Konkomba appartiennent au groupe adja-éwé.", false, "Ils appartiennent au groupe para-gourma, au nord."], ["Le secteur primaire est le plus important au Togo.", true], ["Les Tem sont aussi appelés Kotokoli.", true], ["Au RGPH-5, il y a plus d'hommes que de femmes au Togo.", false, "Il y a 51,3 % de femmes et 48,7 % d'hommes."], ["La croissance de la population augmente la pression sur les terres, l'eau et les forêts.", true]],
    choix: [["Les Mina et les Guin font partie du groupe (adja-éwé / kabyè-tem / para-gourma).", "adja-éwé"], ["Les Lamba et les Nawdba font partie du groupe (adja-éwé / kabyè-tem / para-gourma).", "kabyè-tem"], ["Le commerce, les transports et les banques relèvent du secteur (primaire / secondaire / tertiaire).", "tertiaire"], ["Au RGPH-5, les 65 ans et plus représentent (4,7 / 14,7 / 40,9) % des Togolais.", "4,7"]],
    defs: [["Graphique qui montre la répartition d'une population par âge et par sexe.", "la pyramide des âges"], ["Attitude qui consiste à favoriser les membres de son ethnie et à rejeter les autres.", "le tribalisme"], ["Secteur d'activité qui regroupe l'industrie, l'artisanat et le bâtiment.", "le secteur secondaire"]],
    intrus: [[["les Akposso", "les Akébou", "les Ana-Ifè", "les Bassar"], "les Bassar", "ils appartiennent au groupe para-gourma ; les autres sont des peuples sans lien avec les trois grands groupes."], [["l'agriculture", "la pêche", "les mines", "le tourisme"], "le tourisme", "il appartient au secteur tertiaire ; les autres relèvent du secteur primaire."]],
    comp: [{ texte: "L'extrême jeunesse de la population est un enjeu social : il faut assez d'{a}, de centres de formation, de centres de {b} et de logements. C'est aussi un enjeu économique : les jeunes forment une {c} abondante et un grand marché de {d}.", mots: ["écoles", "santé", "main-d'œuvre", "consommation"] }],
    classer: [{ consigne: "Classe ces activités selon leur secteur.", cats: ["primaire", "secondaire", "tertiaire"], elts: [["l'élevage", 0], ["la pêche", 0], ["l'artisanat", 1], ["le bâtiment", 1], ["l'industrie", 1], ["l'administration", 2], ["les transports", 2], ["les banques", 2]] }],
    cours: [["Selon quels critères classe-t-on les ethnies du Togo ?", 1, "Selon leurs liens de langue (0,5 pt) et de culture (0,5 pt)."],
      ["Où vit le groupe para-gourma ? Cite deux de ses peuples.", 1.5, "Au nord, dans les Savanes et l'ouest de la Kara (0,5 pt) ; deux au choix (0,5 pt chacun) : Moba, Gourma, Bassar, Konkomba, Tamberma, Ngam-ngam."],
      ["Comment la diversité des peuples favorise-t-elle le brassage des populations ?", 1, "Par les mariages (0,5 pt) et la vie commune dans les villes (0,5 pt)."],
      ["Que faut-il faire pour que la diversité soit une force qui unit ?", 1, "Respecter chaque culture (0,5 pt) et dialoguer (0,5 pt)."],
      ["Que se passera-t-il si les jeunes ne trouvent ni école, ni formation, ni emploi ?", 1.5, "Le chômage (0,5 pt), la pauvreté (0,5 pt) et le départ des jeunes menaceront la paix sociale (0,5 pt)."],
      ["Pourquoi le sommet de la pyramide des âges du Togo est-il étroit ?", 1, "Il y a peu de personnes âgées (0,5 pt), car l'espérance de vie est encore faible (0,5 pt)."],
      ["Quel est l'enjeu environnemental de la croissance de la population ?", 1, "Elle augmente la pression (0,5 pt) sur les terres, l'eau, les forêts et la faune (0,5 pt)."]]
  },
  g3_7: {
    sit: [{
      texte: "Ton oncle Tchilabalo, qui vit près de Kara, a économisé un peu d'argent. Il veut se lancer dans une culture de rente, mais il hésite : il a entendu dire que le café et le cacao rapportent bien, et il se demande si le Togo a vraiment de bonnes conditions pour l'agriculture. Il t'écrit pour te demander conseil. Tu ouvres ton cahier à la carte ci-dessous.",
      consigne: "Réponds à ton oncle par une lettre dans laquelle tu lui montres les conditions naturelles favorables à l'agriculture togolaise, puis tu lui expliques, à l'aide de la carte, où sont cultivées les principales cultures de rente, afin qu'il choisisse celle qui convient à sa région.",
      doc: { titre: "Document : les principales cultures de rente du Togo", image: "images/epreuves/3e_g3_7.png" },
      intro: "Mon oncle Tchilabalo, qui vit près de Kara, veut se lancer dans une culture de rente et pense au café et au cacao. Je vais lui montrer les conditions naturelles favorables à l'agriculture togolaise, puis lui expliquer, à l'aide de la carte, où se font les principales cultures de rente, pour qu'il choisisse celle qui convient à sa région.",
      adresse: "Cher oncle,",
      support: "La carte : café et cacao dans les Plateaux-Ouest (Kpalimé, Badou) ; coton dans les savanes ; palmier à huile et cocotier dans la région Maritime ; soja et anacarde au centre et au nord (Kara, Sokodé) ; informations du document exploitées",
      indConsigne: "Lettre à l'oncle : conditions naturelles de l'agriculture ; localisation des cultures de rente à l'aide de la carte ; conseil adapté à la région de Kara",
      dev: ["D'abord, le Togo a de bonnes conditions naturelles pour l'agriculture : un relief peu accidenté, avec de vastes plaines comme celles de l'Oti et du Mono ; de nombreux cours d'eau pour l'irrigation et les cultures de contre-saison ; des climats variés, avec 800 à plus de 1 500 mm de pluie par an ; beaucoup de terres cultivables, environ 3,4 millions d'hectares, dont une partie seulement est exploitée ; des sols et une végétation variés, qui permettent des productions très diverses.",
        "Ensuite, la carte montre que chaque culture de rente a sa région. Le café et le cacao poussent dans les montagnes humides des Plateaux-Ouest (Kloto, Danyi, Agou, Wawa, Amou), autour de Kpalimé et de Badou. Le palmier à huile et le cocotier sont cultivés dans la région Maritime. Le coton occupe les savanes du centre et du nord, et le soja, l'anacarde et le sésame s'étendent au centre et au nord.",
        "Enfin, dans ta région de Kara, il ne pleut pas assez pour le café et le cacao, qui ont besoin des montagnes humides du sud-ouest. Tu ferais mieux de choisir le coton, le soja ou l'anacarde, que la carte place justement près de Kara et qui sont en expansion."],
      concl: "En définitive, cher oncle, le Togo a de bonnes conditions pour l'agriculture, mais chaque culture de rente a sa région : chez toi, choisis plutôt le coton, le soja ou l'anacarde.",
      signature: "Ton neveu qui te souhaite de bonnes récoltes.",
      justesse: ["Conditions naturelles : plaines (Oti, Mono) ; cours d'eau ; 800 à plus de 1 500 mm de pluie ; environ 3,4 millions d'hectares cultivables ; sols et végétation variés.", "Café et cacao : montagnes humides des Plateaux-Ouest (Kloto, Danyi, Agou, Wawa, Amou).", "Coton : savanes du centre et du nord ; palmier à huile et cocotier : Maritime ; soja, anacarde, sésame : centre et nord.", "Conseil : à Kara, coton, soja ou anacarde plutôt que café et cacao."],
      concepts: "Conditions naturelles, terres cultivables, irrigation, culture de rente, culture vivrière, carte agricole."
    }],
    vf: [["L'agriculture togolaise est surtout pluviale et extensive.", true], ["Le coton est une culture vivrière.", false, "Le coton est une culture de rente, destinée à la vente."], ["Le Togo a environ 3,4 millions d'hectares de terres cultivables.", true], ["Les groupes d'entraide font partie des atouts humains de l'agriculture.", true], ["La plaine de Djagblé se trouve dans la région des Savanes.", false, "Elle se trouve dans la région Maritime."], ["Le soja, l'anacarde et le sésame sont des cultures en expansion au centre et au nord.", true]],
    choix: [["Le palmier à huile et le cocotier sont cultivés surtout dans la région (Maritime / des Savanes / de la Kara).", "Maritime"], ["La houe ou daba est un outil (moderne / rudimentaire / mécanisé).", "rudimentaire"], ["Le programme agricole de l'État qui a suivi le PNIASA s'appelle (le PNIASAN / la MIFA / l'ICAT).", "le PNIASAN"], ["Les périmètres irrigués de la Kara produisent surtout (du riz / du cacao / du café).", "du riz"]],
    defs: [["Culture destinée à nourrir la famille du paysan.", "une culture vivrière"], ["Technique qui consiste à brûler la végétation avant de cultiver.", "la culture sur brûlis"], ["Situation d'un pays qui produit assez pour nourrir toute sa population.", "la sécurité alimentaire"]],
    intrus: [[["le maïs", "l'igname", "le manioc", "le cacao"], "le cacao", "c'est une culture de rente ; les autres sont des cultures vivrières."], [["l'ITRA", "l'ICAT", "la MIFA", "la CEDEAO"], "la CEDEAO", "c'est une organisation régionale ; les autres sont des structures d'appui à l'agriculture togolaise."]],
    comp: [{ texte: "Pour moderniser l'agriculture, l'État aménage des périmètres {a} et des zones d'aménagement agricole planifiées (ZAAP). Il finance les agriculteurs par la {b}, et l'{c} leur apporte conseils, semences et engrais. Les producteurs se regroupent en {d}.", mots: ["irrigués", "MIFA", "ICAT", "coopératives"] }],
    classer: [{ consigne: "Classe ces atouts de l'agriculture togolaise selon leur nature.", cats: ["humains", "techniques", "financiers et institutionnels"], elts: [["une main-d'œuvre nombreuse et jeune", 0], ["le dynamisme des femmes", 0], ["les semences améliorées et les engrais", 1], ["la culture attelée", 1], ["les centres de recherche et de conseil", 1], ["la subvention des engrais", 2], ["les crédits aux agriculteurs", 2], ["la stabilité de la monnaie", 2]] }],
    cours: [["Pourquoi les récoltes togolaises sont-elles souvent incertaines ?", 1, "Les rendements sont faibles (0,5 pt) et les récoltes sont à la merci du climat (0,5 pt)."],
      ["Quelles matières premières l'agriculture fournit-elle aux industries ?", 1.5, "Le coton (0,5 pt), le soja (0,5 pt) et la palme (0,5 pt)."],
      ["Cite deux cultures de rente et deux cultures vivrières du Togo.", 2, "Rente (0,5 pt chacune) : coton, café, cacao, soja, anacarde ; vivrières (0,5 pt chacune) : maïs, sorgho, mil, igname, manioc, riz."],
      ["Montre que l'agriculture togolaise repose surtout sur de petites exploitations traditionnelles.", 1, "Ce sont de petites exploitations familiales (0,5 pt) qui pratiquent une agriculture pluviale et extensive, parfois sur brûlis (0,5 pt)."],
      ["Quels défis l'agriculture doit-elle relever face au climat et aux sols ?", 1, "S'adapter aux changements climatiques (0,5 pt) et protéger les sols (0,5 pt)."],
      ["Pourquoi faut-il construire des magasins de stockage et des usines de transformation ?", 1, "Pour conserver les récoltes (0,5 pt) et donner plus de valeur aux produits agricoles (0,5 pt)."],
      ["Cite deux structures financières qui accordent des crédits aux agriculteurs.", 1, "La MIFA (0,5 pt) et le FNFI (0,5 pt)."]]
  },
  g3_8: {
    sit: [{
      texte: "Une journaliste de la radio scolaire, Kafui, prépare une émission sur le thème « Le Togo peut-il devenir un pays industriel ? ». Elle t'invite comme élève de 3e et te remet la carte ci-dessous pour préparer tes réponses.",
      consignes: ["À l'aide de la carte, présente aux auditeurs les ressources dont dispose le Togo pour son industrie.",
        "Montre-leur ensuite l'importance de l'industrie pour le Togo et les défis qu'elle doit encore relever."],
      doc: { titre: "Document : les ressources minières et énergétiques du Togo", image: "images/epreuves/3e_g3_8.png" },
      prods: [{
        intro: "La radio scolaire se demande si le Togo peut devenir un pays industriel. Je vais présenter aux auditeurs, à l'aide de la carte, les ressources dont dispose le pays pour son industrie.",
        adresse: "Chers auditeurs,",
        support: "La carte : phosphates de Hahotoé-Kpogamé et usine de Kpémé ; calcaire et clinker de Tabligbo ; marbre de Gnaoulou (Pagala) ; fer de Bandjéli, manganèse, chromite du mont Ahito, bauxite du mont Agou peu ou pas exploités ; barrages de Nangbéto et de Kpimé ; centrales thermiques de Lomé ; centrale solaire de Blitta ; or (orpaillage) ; informations du document exploitées",
        indConsigne: "Présentation des ressources : énergie, minerais exploités et non exploités, matières premières agricoles",
        dev: ["D'abord, l'énergie : la carte montre deux barrages hydroélectriques, Nangbéto sur le Mono et Kpimé dans le Kloto, les centrales thermiques de Lomé et la centrale solaire de Blitta. Mais le Togo importe tout son pétrole et une partie de son électricité.",
          "Ensuite, les minerais : les gisements exploités sont surtout dans le sud, les phosphates de Hahotoé-Kpogamé, traités à Kpémé, et le calcaire de la région de Tabligbo, qui donne le clinker et le ciment ; on exploite aussi le marbre de Gnaoulou, près de Pagala, et l'or par orpaillage. D'autres gisements des montagnes du centre et du nord sont peu ou pas exploités : le fer de Bandjéli, le manganèse de Nayéga, la chromite du mont Ahito et la bauxite du mont Agou.",
          "Enfin, l'agriculture fournit des matières premières : coton, palme, soja, anacarde, café, cacao et canne à sucre."],
        concl: "En définitive, avec son énergie, ses minerais et ses produits agricoles, le Togo a de réelles ressources pour s'industrialiser.",
        justesse: ["Énergie : Nangbéto (Mono), Kpimé (Kloto), centrales thermiques de Lomé, centrale solaire de Blitta ; pétrole importé.", "Minerais exploités : phosphates (Hahotoé-Kpogamé, Kpémé), calcaire (Tabligbo), marbre (Gnaoulou), or.", "Peu ou pas exploités : fer (Bandjéli), manganèse (Nayéga), chromite (Ahito), bauxite (Agou).", "Matières premières agricoles : coton, palme, soja, anacarde, café, cacao, canne à sucre."],
        concepts: "Ressource, gisement, minerai, énergie hydroélectrique, énergie solaire, matière première."
      }, {
        intro: "L'émission veut aussi savoir à quoi sert l'industrie et ce qui la freine. Je vais montrer aux auditeurs l'importance de l'industrie pour le Togo et les défis qu'elle doit encore relever.",
        adresse: "Chers auditeurs,",
        support: "La carte : gisements exploités surtout dans le sud, nombreux gisements non exploités ; informations du document exploitées",
        indConsigne: "Importance de l'industrie (emplois, valeur ajoutée, exportations, intrants, impôts) ; défis à relever",
        dev: ["D'abord, l'industrie est importante : elle crée des emplois, surtout pour les jeunes ; elle transforme les produits agricoles et miniers, ce qui leur donne plus de valeur ; elle fournit des produits au commerce et à l'exportation, comme les phosphates, le clinker et le ciment.",
          "Ensuite, elle procure aux paysans des engrais, des outils et des machines, et elle rapporte des impôts à l'État.",
          "Enfin, elle doit relever de nombreux défis : elle dépend des techniques et des machines étrangères ; elle manque de capitaux et de crédits ; l'électricité est insuffisante et chère ; le marché intérieur est étroit et les produits importés lui font concurrence ; la main-d'œuvre qualifiée manque. Il faut surtout transformer davantage sur place au lieu d'exporter des matières premières, et exploiter les nombreux gisements que la carte montre encore inutilisés."],
        concl: "En définitive, l'industrie peut enrichir le Togo et donner du travail aux jeunes, à condition de surmonter ses faiblesses.",
        justesse: ["Emplois (jeunes) ; transformation qui donne de la valeur ; exportations (phosphates, clinker, ciment).", "Engrais, outils et machines pour les paysans ; impôts pour l'État.", "Défis : dépendance technique, capitaux, électricité chère, marché étroit, concurrence, main-d'œuvre qualifiée, transformation sur place."],
        concepts: "Industrie, transformation, valeur ajoutée, exportation, capitaux, main-d'œuvre qualifiée, marché intérieur."
      }]
    }],
    vf: [["Le Togo produit tout le pétrole dont il a besoin.", false, "Le Togo importe tout son pétrole et une partie de son électricité."], ["La SNPT extrait les phosphates.", true], ["La zone franche a été créée en 1989.", true], ["La Plateforme industrielle d'Adétikopé a été inaugurée en 2021.", true], ["L'industrie togolaise est bien répartie sur tout le territoire.", false, "Elle est concentrée à Lomé et dans le sud."], ["Le fer de Bandjéli est l'un des gisements peu ou pas exploités.", true]],
    choix: [["Les phosphates de Hahotoé-Kpogamé sont traités à (Kpémé / Tabligbo / Blitta).", "Kpémé"], ["WACEM produit (le marbre / le clinker / l'huile) à Tabligbo.", "le clinker"], ["La centrale solaire du Togo se trouve à (Blitta / Lomé / Kpimé).", "Blitta"], ["La chromite se trouve au mont (Agou / Ahito / Kloto).", "Ahito"]],
    defs: [["Zone où les entreprises s'installent avec des avantages pour produire et exporter, créée au Togo en 1989.", "la zone franche"], ["Endroit du sous-sol où se trouve un minerai en quantité.", "un gisement"], ["Industrie qui tire du sol les minerais.", "l'industrie extractive"]],
    intrus: [[["NIOTO", "BB", "SNB", "SOTOMA"], "SOTOMA", "elle travaille le marbre ; les autres sont des industries agroalimentaires."], [["Notsé", "Atakpamé", "Kara", "Tabligbo"], "Tabligbo", "on y produit le clinker ; dans les autres villes, on égrène le coton."]],
    comp: [{ texte: "À la Plateforme industrielle d'{a}, on transforme sur place le coton, le soja, l'{b} et le bois. Le Togo a aussi une politique nationale de l'industrie pour {c}, et il coopère avec les autres pays de la CEDEAO et de l'{d}.", mots: ["Adétikopé", "anacarde", "2024-2040", "UEMOA"] }],
    relier: [{ consigne: "Relie chaque entreprise (liste A) à son activité (liste B).", A: ["SNPT", "WACEM", "SOTOMA", "NIOTO", "SGMT", "CIMTOGO"], B: ["phosphates", "clinker", "marbre", "huile", "farine", "ciment"] }],
    cours: [["Pourquoi l'industrie togolaise dépend-elle de l'étranger pour l'énergie ?", 1, "Le Togo importe tout son pétrole (0,5 pt) et une partie de son électricité (0,5 pt)."],
      ["Où se trouvent la plupart des gisements exploités du Togo ? Donne deux exemples.", 1.5, "Dans le sud (0,5 pt) : les phosphates de Hahotoé-Kpogamé (0,5 pt) et le calcaire de Tabligbo (0,5 pt)."],
      ["Cite deux usines textiles ou lieux de l'industrie textile au Togo.", 1, "Deux au choix (0,5 pt chacun) : égrenage du coton à Notsé, Atakpamé, Kara ou Dapaong ; confection à Adétikopé."],
      ["Pourquoi dit-on que l'industrie togolaise dépend des mines et des matières premières ?", 1, "Elle exploite surtout des minerais (phosphates, clinker) (0,5 pt) et transforme peu les produits agricoles (0,5 pt)."],
      ["En quoi l'industrie est-elle utile aux paysans ?", 1, "Elle leur procure des engrais, des outils et des machines (0,5 pt) et achète leurs produits pour les transformer (0,5 pt)."],
      ["Que fait l'État pour améliorer l'électricité et les routes de l'industrie ?", 0.5, "Il a construit la centrale solaire de Blitta et améliore les routes (0,5 pt)."],
      ["Pourquoi le Togo doit-il transformer davantage sur place ses matières premières ?", 1.5, "Pour leur donner plus de valeur (0,5 pt), créer des emplois (0,5 pt) et moins dépendre des exportations de produits bruts (0,5 pt)."]]
  },
  g3_9: {
    sit: [{
      texte: "Ta tante Yawa vend des tomates au détail au grand marché de Lomé. Chaque matin, elle achète ses paniers à une demi-grossiste qui se fournit elle-même chez une grossiste venue d'Aklakou. Elle te raconte sa journée (document). Le journal de ton collège prépare un numéro spécial sur les femmes du marché et te demande un article.",
      consigne: "Rédige pour le journal de ton collège un article, avec un titre, dans lequel tu présentes les caractéristiques du commerce intérieur togolais, son importance et les problèmes qu'il rencontre, en t'appuyant sur le récit de ta tante.",
      doc: { titre: "Document : la journée de tante Yawa", texte: "« Je me lève à quatre heures. La demi-grossiste m'attend avec les paniers de tomates d'Aklakou ; je paie une partie, le reste ce soir. Au marché, je vends par petits tas. Mes clientes achètent peu : l'argent manque. Je n'ai pas de magasin : quand les tomates pourrissent, je perds tout. Sur la route d'Aklakou, il y a beaucoup de barrages, et chacun réclame quelque chose. Avec ce que je gagne, je paie l'école de mes enfants. Ma fille me livre aussi des clientes qui commandent par téléphone et paient avec leur portable. »" },
      intro: "Le journal de mon collège consacre un numéro spécial aux femmes du marché. À partir du récit de ma tante Yawa, revendeuse de tomates au grand marché de Lomé, je vais présenter les caractéristiques du commerce intérieur togolais, son importance et ses problèmes.",
      titreProd: "Tante Yawa et les reines du marché",
      support: "Le récit de tante Yawa : vente au détail par petits tas, chaîne grossiste-demi-grossiste-détaillante, tomates d'Aklakou, clientes qui achètent peu, pas de magasin, barrages sur la route, école des enfants payée, commandes et paiements par téléphone ; informations du document exploitées",
      indConsigne: "Article avec un titre : caractéristiques du commerce intérieur ; importance ; problèmes",
      dev: ["D'abord, le commerce intérieur togolais est dominé par l'informel et animé surtout par les femmes, comme tante Yawa. Il est hiérarchisé : la grossiste d'Aklakou vend à la demi-grossiste, qui vend à des détaillantes comme ma tante, et celle-ci vend par petits tas, comme une micro-détaillante. Les marchés sont aussi hiérarchisés : grands marchés comme Lomé, Vogan, Anié ou Kétao, marchés régionaux comme Kara, Bassar ou Aklakou, et marchés de village. Certains sont spécialisés : Aklakou pour la tomate, Tsévié pour l'huile de palme, Agou pour les fruits, Sotouboua pour l'igname, Dapaong pour les pintades. Le commerce en ligne se développe aussi : la fille de tante Yawa livre des clientes qui commandent et paient par téléphone.",
        "Ensuite, ce commerce est très important : il occupe beaucoup d'actifs et fait vivre des milliers de familles ; avec ce qu'elle gagne, tante Yawa paie l'école de ses enfants. Il écoule les produits des campagnes, approvisionne la population et rapporte des recettes à l'État.",
        "Enfin, il rencontre des problèmes, que le récit montre bien : le marché est étroit et le pouvoir d'achat faible, car les clientes achètent peu ; le commerce reste informel ; il manque de marchés modernes, de magasins de stockage, si bien que les tomates pourrissent, et de routes rurales ; enfin, les tracasseries sur les routes, avec leurs nombreux barrages, coûtent cher aux commerçantes."],
      concl: "En définitive, animé par des femmes courageuses comme tante Yawa, le commerce intérieur fait vivre des milliers de familles togolaises ; pour mieux les servir, il doit se moderniser.",
      justesse: ["Caractéristiques : informel, animé par les femmes ; hiérarchie grossistes, demi-grossistes, détaillants, micro-détaillants ; grands marchés (Lomé, Vogan, Anié, Kétao), régionaux, de village ; marchés spécialisés (Aklakou, Tsévié, Agou, Sotouboua, Dapaong) ; commerce en ligne.", "Importance : emplois, familles, écoulement des produits, approvisionnement, recettes de l'État.", "Problèmes : marché étroit, faible pouvoir d'achat, informel, manque de marchés modernes, de magasins et de routes rurales, tracasseries routières."],
      concepts: "Commerce intérieur, informel, grossiste, détaillant, marché spécialisé, pouvoir d'achat, stockage."
    }],
    vf: [["Le Togo réexporte des marchandises vers le Burkina Faso, le Niger et le Mali.", true], ["Le Togo importe surtout des produits agricoles bruts comme le coton.", false, "Il exporte le coton ; il importe des produits alimentaires (riz, blé, sucre, huile), des produits manufacturés et des produits pétroliers."], ["Kara, Bassar et Aklakou sont des marchés régionaux.", true], ["L'Inde fait partie des partenaires commerciaux du Togo.", true], ["Les ports voisins font concurrence au port de Lomé pour le transit.", true], ["Le commerce intérieur togolais est surtout animé par de grandes entreprises étrangères.", false, "Il est dominé par l'informel et animé surtout par les femmes."]],
    choix: [["Le marché d'Agou est spécialisé dans (les fruits / l'igname / les pintades).", "les fruits"], ["Le premier fournisseur du Togo est (la France / la Chine / le Ghana).", "la Chine"], ["Le marché de Kétao est (un grand marché / un marché de village / un marché en ligne).", "un grand marché"], ["Les droits de douane sont des recettes pour (l'État / les détaillants / les clients).", "l'État"]],
    defs: [["Commerçant qui vend par très petites quantités, au plus près des consommateurs.", "un micro-détaillant"], ["Situation d'un pays dont les importations dépassent les exportations.", "une balance commerciale déficitaire"], ["Taxes payées sur les marchandises qui entrent dans un pays ou qui en sortent.", "les droits de douane"]],
    intrus: [[["le coton", "le café", "les phosphates", "le riz"], "le riz", "le Togo l'importe ; les autres sont des produits exportés."], [["Vogan", "Anié", "Kétao", "Aklakou"], "Aklakou", "c'est un marché régional ; les autres sont des grands marchés."]],
    comp: [{ texte: "Le commerce extérieur togolais a des problèmes : les exportations sont peu {a} et faites surtout de produits {b} ; les produits togolais sont peu {c} ; le pays dépend fortement des {d}.", mots: ["variées", "bruts", "compétitifs", "importations"] }],
    ordre: [{ consigne: "Range ces commerçants du plus grand au plus petit, selon la hiérarchie du commerce intérieur.", elements: ["le grossiste", "le demi-grossiste", "le détaillant", "le micro-détaillant"] }],
    cours: [["Cite trois sortes de produits que le Togo importe, avec un exemple pour chacune.", 1.5, "Produits alimentaires : riz, blé, sucre ou huile (0,5 pt) ; produits manufacturés : véhicules, machines, appareils ou tissus (0,5 pt) ; produits pétroliers (0,5 pt)."],
      ["Comment le commerce en ligne se développe-t-il au Togo ?", 1, "Par les livraisons (0,5 pt) et les paiements par téléphone (0,5 pt)."],
      ["Quels pays voisins et du Sahel sont des partenaires du Togo ? Cite-en trois.", 1.5, "Trois au choix (0,5 pt chacun) : Burkina Faso, Bénin, Mali, Ghana, Niger."],
      ["Montre que le commerce fait travailler d'autres secteurs de l'économie.", 1, "Il fait travailler le port et les transports (0,5 pt) et les banques (0,5 pt)."],
      ["Quelles normes internationales gênent les exportations togolaises ?", 1, "Celles de l'OMC (0,5 pt) et de l'AGOA (0,5 pt)."],
      ["Pourquoi dit-on que le commerce ouvre le Togo sur le monde ?", 1, "Il vend les produits togolais à l'étranger (0,5 pt) et fait venir des produits du monde entier (0,5 pt)."],
      ["Cite deux marchés spécialisés du Togo avec leur produit.", 1, "Deux au choix (0,5 pt chacun) : Aklakou (tomate), Tsévié (huile de palme), Agou (fruits), Sotouboua (igname), Dapaong (pintades)."]]
  },
  g3_10: {
    sit: [{
      texte: "Ton frère Kafui vient d'obtenir son BEPC. Il aime la mer et voudrait y trouver son futur métier, mais il pense qu'au Togo, la mer ne sert qu'aux pêcheurs. Votre père lui montre un article de journal qui donne les chiffres ci-dessous et te demande de lui expliquer ce qu'est l'économie bleue.",
      consignes: ["Explique à Kafui ce qu'est l'économie bleue et présente-lui les atouts du Togo dans ce domaine.",
        "Présente-lui les activités et les métiers de l'économie bleue, puis montre-lui, à l'aide du document, qu'elle compte beaucoup dans l'économie du Togo."],
      doc: { titre: "Document : l'économie bleue au Togo en chiffres", tableau: { entetes: ["Indicateur", "Valeur"], lignes: [["Trafic du port de Lomé en 2019", "22,6 millions de tonnes"], ["Trafic du port de Lomé en 2023-2024", "environ 30 millions de tonnes"], ["Conteneurs traités par an", "environ 2 millions (EVP)"], ["Personnes qui vivent de la pêche", "plus de 20 000"], ["Part de la pêche dans le PIB", "environ 4,5 %"], ["Part de l'économie bleue dans le PIB", "environ 5 à 7 %"]] } },
      prods: [{
        intro: "Mon frère Kafui aime la mer, mais il croit qu'elle ne sert qu'aux pêcheurs. Je vais lui expliquer ce qu'est l'économie bleue et lui présenter les atouts du Togo dans ce domaine.",
        adresse: "Cher Kafui,",
        support: "L'article de journal : port de Lomé, conteneurs, pêche ; informations du document exploitées",
        indConsigne: "Définition de l'économie bleue ; atouts du Togo",
        dev: ["D'abord, l'économie bleue est l'ensemble des activités économiques liées à la mer, au littoral, aux lacs et aux lagunes, menées en protégeant ces milieux. Elle ne concerne donc pas seulement la pêche.",
          "Ensuite, le Togo n'a qu'une petite côte, d'environ 55 km sur le golfe de Guinée, mais il a de grands atouts : le port autonome de Lomé, port en eau profonde, au cœur des échanges avec les pays du Sahel ; une zone franche ; le lac Togo et les lagunes ; des plages ; des ressources de pêche.",
          "Enfin, le document montre que le port est très actif : il traite environ 2 millions de conteneurs par an."],
        concl: "En définitive, Kafui, l'économie bleue regroupe toutes les activités de la mer et des eaux du littoral, et le Togo, malgré sa petite côte, a de vrais atouts.",
        justesse: ["Définition : activités liées à la mer, au littoral, aux lacs et aux lagunes, en protégeant ces milieux.", "Atouts : côte d'environ 55 km ; port autonome de Lomé en eau profonde, lien avec le Sahel ; zone franche ; lac Togo et lagunes ; plages ; pêche."],
        concepts: "Économie bleue, littoral, lagune, port en eau profonde, zone franche."
      }, {
        intro: "Kafui veut trouver un métier lié à la mer. Je vais lui présenter les activités et les métiers de l'économie bleue, puis lui montrer, avec les chiffres de l'article, son importance pour le Togo.",
        adresse: "Cher Kafui,",
        support: "Les chiffres : trafic de 22,6 millions de tonnes (2019) à environ 30 millions (2023-2024) ; environ 2 millions de conteneurs ; plus de 20 000 personnes dans la pêche ; pêche 4,5 % du PIB ; économie bleue 5 à 7 % du PIB ; informations du document exploitées",
        indConsigne: "Activités et métiers de l'économie bleue ; importance chiffrée (port, pêche, tourisme, PIB, emplois)",
        dev: ["D'abord, l'économie bleue offre beaucoup d'activités : la logistique maritime (transport des marchandises, transit, manutention), avec les métiers d'agent de transit, de consignataire, de docker, de magasinier, de courtier et d'assureur maritimes ou de réparateur de conteneurs ; la surveillance de la mer par la préfecture maritime ; la pêche, l'aquaculture, la transformation et la vente du poisson ; les industries de la zone franche ; le tourisme balnéaire et l'hôtellerie à Lomé, Agbodrafo et Aného ; les sports nautiques.",
          "Ensuite, le document montre son importance : le trafic du port de Lomé est passé de 22,6 millions de tonnes en 2019 à environ 30 millions en 2023-2024, et ses droits de douane forment une grande part des recettes de l'État. La pêche fait vivre plus de 20 000 personnes et compterait pour environ 4,5 % du PIB, et le tourisme balnéaire fait entrer des devises.",
          "Enfin, au total, l'économie bleue apporte environ 5 à 7 % du PIB et crée des milliers d'emplois directs et indirects : tu as donc le choix entre de nombreux métiers."],
        concl: "En définitive, Kafui, la mer ne fait pas vivre que les pêcheurs : le port, la pêche et le tourisme font de l'économie bleue un pilier du Togo, riche en métiers.",
        justesse: ["Activités : logistique maritime et ses métiers ; surveillance (préfecture maritime) ; pêche, aquaculture ; zone franche ; tourisme balnéaire ; sports nautiques.", "Port : 22,6 Mt (2019) → environ 30 Mt (2023-2024), 2 millions d'EVP ; droits de douane.", "Pêche : plus de 20 000 personnes, environ 4,5 % du PIB ; tourisme : devises.", "Économie bleue : 5 à 7 % du PIB, milliers d'emplois."],
        concepts: "Logistique maritime, transit, manutention, aquaculture, tourisme balnéaire, PIB, emploi."
      }]
    }],
    vf: [["L'économie bleue concerne aussi les lacs et les lagunes.", true], ["La côte togolaise mesure environ 550 km.", false, "Elle mesure environ 55 km."], ["Le docker charge et décharge les navires.", true], ["La préfecture maritime est le bras opérationnel de l'ONAEM.", true], ["Les droits de douane du port forment une petite part des recettes de l'État.", false, "Ils forment une grande part des recettes de l'État."], ["Agbodrafo est un lieu de tourisme balnéaire.", true]],
    choix: [["Le port de Lomé est un port (en eau profonde / fluvial / de plaisance).", "en eau profonde"], ["Le port de Lomé traite environ (2 / 20 / 200) millions de conteneurs (EVP) par an.", "2"], ["L'élevage de poissons s'appelle (l'aquaculture / l'agroforesterie / la manutention).", "l'aquaculture"], ["En 2019, le trafic du port de Lomé était de (2,6 / 22,6 / 62,6) millions de tonnes.", "22,6"]],
    defs: [["Ensemble des activités économiques liées à la mer, au littoral, aux lacs et aux lagunes, menées en protégeant ces milieux.", "l'économie bleue"], ["Ensemble des opérations de chargement, de déchargement et de déplacement des marchandises.", "la manutention"], ["Tourisme pratiqué au bord de la mer.", "le tourisme balnéaire"]],
    intrus: [[["agent de transit", "consignataire", "docker", "agent de l'ICAT"], "agent de l'ICAT", "il travaille pour l'agriculture ; les autres sont des métiers de la logistique maritime."], [["la natation", "le surf", "la voile", "le football"], "le football", "ce n'est pas un sport nautique."]],
    comp: [{ texte: "Le port de Lomé est le {a} de l'économie : il est au cœur des échanges avec les pays du {b}. La pêche fait vivre plus de {c} personnes, et le tourisme balnéaire fait entrer des {d}.", mots: ["moteur", "Sahel", "20 000", "devises"] }],
    classer: [{ consigne: "Classe ces éléments selon qu'ils sont des atouts ou des activités de l'économie bleue.", cats: ["atouts", "activités"], elts: [["une côte d'environ 55 km", 0], ["le lac Togo et les lagunes", 0], ["des plages", 0], ["la transformation du poisson", 1], ["la manutention", 1], ["l'hôtellerie", 1], ["la surveillance de la mer", 1]] }],
    cours: [["Pourquoi le port de Lomé est-il au cœur des échanges avec les pays du Sahel ?", 1, "C'est un port en eau profonde (0,5 pt) par où passent les marchandises des pays sans littoral (transit) (0,5 pt)."],
      ["Quel organisme surveille la mer au Togo ?", 1, "La préfecture maritime (0,5 pt), bras opérationnel de l'ONAEM (0,5 pt)."],
      ["Cite trois activités liées à la pêche.", 1.5, "La pêche en mer et dans les lagunes (0,5 pt), l'aquaculture (0,5 pt), la transformation et la vente du poisson (0,5 pt)."],
      ["Cite les trois lieux de tourisme balnéaire et d'hôtellerie du Togo.", 1.5, "Lomé (0,5 pt), Agbodrafo (0,5 pt) et Aného (0,5 pt)."],
      ["Quelle part du PIB l'économie bleue apporte-t-elle ?", 0.5, "Environ 5 à 7 % du PIB (0,5 pt)."],
      ["Quelles menaces pèsent sur le littoral togolais ?", 1, "L'érosion (0,5 pt) et la pollution (0,5 pt)."],
      ["Que fait la logistique maritime ?", 1, "Elle assure le transport des marchandises et le transit (0,5 pt) et leur manutention (0,5 pt)."]]
  },
  g3_11: {
    sit: [{
      texte: "Ton camarade Ibrahim vient d'arriver de Niamey pour poursuivre ses études à Lomé. Son père est camionneur : il transporte des marchandises du port de Lomé jusqu'au Niger. Ibrahim veut savoir comment on se déplace et comment on communique au Togo. Au club de géographie, on te demande de lui présenter, à l'aide de la carte, les transports et les télécommunications du pays.",
      consigne: "À l'aide de la carte, présente à Ibrahim les différents types de transport du Togo et leurs caractéristiques, puis montre-lui l'importance des transports et des télécommunications pour le pays.",
      doc: { titre: "Document : les transports au Togo", image: "images/epreuves/3e_g3_11.png" },
      intro: "Mon camarade Ibrahim, arrivé du Niger, veut savoir comment on se déplace et comment on communique au Togo. À l'aide de la carte, je vais lui présenter les types de transport et leurs caractéristiques, puis lui montrer l'importance des transports et des télécommunications.",
      adresse: "Cher Ibrahim,",
      support: "La carte : RN1 de Lomé à Cinkassé, route côtière, routes bitumées, voies ferrées du sud (Lomé-Aného, Lomé-Kpalimé, Lomé-Blitta, lignes de Tabligbo et de Kpémé), aéroports internationaux de Lomé et de Niamtougou, port autonome de Lomé ; informations du document exploitées",
      indConsigne: "Présentation des types de transport et de leurs caractéristiques à l'aide de la carte ; importance des transports et des télécommunications",
      dev: ["D'abord, la route est le transport le plus utilisé : le réseau compte environ 11 000 km, avec la route nationale n° 1, qui va de Lomé à Cinkassé, et la route côtière d'Aflao à Hillacondji. Les voies ferrées, toutes dans le sud sur la carte, datent de l'époque coloniale : Lomé-Aného, Lomé-Kpalimé et Lomé-Blitta sont presque abandonnées ; seules fonctionnent les lignes industrielles des phosphates (Hahotoé vers Kpémé) et du clinker (Tabligbo vers Lomé). Le port autonome de Lomé est à la fois port de commerce, port de pêche, quai minéralier et appontement pétrolier. Enfin, il y a deux aéroports internationaux, à Lomé et à Niamtougou.",
        "Ensuite, la carte montre les caractéristiques de ce réseau : la route et le port dominent, le chemin de fer décline, le réseau est concentré dans le sud et le long de l'axe nord-sud, et le transport aérien, centré sur Lomé, progresse. Côté télécommunications, le téléphone portable est partout : Yas et Moov Africa offrent la 3G et la 4G presque dans tout le pays, mais l'internet est plus lent à la campagne et coûte encore cher.",
        "Enfin, les transports font circuler les personnes et les marchandises, relient les zones de production aux marchés, désenclavent les régions et font du Togo un pays de transit vers le Sahel, comme le montre le travail de ton père ; ils créent beaucoup d'emplois (chauffeurs, conducteurs de taxis-motos, dockers) et apportent environ 5 à 7 % du PIB. Les télécommunications font circuler l'information, permettent l'argent mobile et le commerce en ligne, relient l'administration à ses services, créent des emplois et des start-up et apportent environ 7 à 8 % du PIB."],
      concl: "En définitive, Ibrahim, la route nationale, le port et les réseaux de téléphonie font du Togo un carrefour entre la mer et le Sahel : ils sont indispensables à l'économie du pays.",
      justesse: ["Types : route (environ 11 000 km, RN1 Lomé-Cinkassé, route côtière Aflao-Hillacondji) ; rail (lignes coloniales presque abandonnées, lignes industrielles Hahotoé-Kpémé et Tabligbo-Lomé) ; port autonome de Lomé ; aéroports de Lomé et de Niamtougou.", "Caractéristiques : domination de la route et du port, déclin du rail, réseau concentré au sud et sur l'axe nord-sud ; téléphone partout, 3G/4G (Yas, Moov Africa), internet lent et cher à la campagne.", "Importance des transports : circulation, désenclavement, transit vers le Sahel, emplois, 5 à 7 % du PIB.", "Importance des télécommunications : information, argent mobile, commerce en ligne, administration, start-up, 7 à 8 % du PIB."],
      concepts: "Réseau routier, voie ferrée, port, aéroport, transit, désenclavement, télécommunications, argent mobile."
    }],
    vf: [["Le réseau routier togolais compte environ 11 000 km.", true], ["La ligne Lomé-Kpalimé transporte aujourd'hui beaucoup de voyageurs.", false, "Les lignes coloniales, comme Lomé-Kpalimé, sont presque abandonnées ; seules les lignes industrielles fonctionnent."], ["La station terrienne de Cacaveli fait partie des télécommunications.", true], ["Le câble sous-marin Equiano est arrivé au Togo en 2022.", true], ["L'Agence nationale de la cybersécurité a été créée en 2019.", true], ["Le réseau de transport togolais est concentré dans le nord.", false, "Il est concentré dans le sud et le long de l'axe nord-sud."]],
    choix: [["La route nationale n° 1 relie Lomé à (Cinkassé / Aného / Kpalimé).", "Cinkassé"], ["Le deuxième aéroport international du Togo est celui de (Niamtougou / Kara / Sokodé).", "Niamtougou"], ["Le premier câble sous-marin cité dans la leçon, WACS, date de (2012 / 2019 / 2022).", "2012"], ["Yas est l'ancien nom de (Moov Africa / Togocom / la SPT).", "Togocom"]],
    defs: [["Fait de rompre l'isolement d'une région en la reliant aux autres par des routes ou des réseaux.", "le désenclavement"], ["Système qui permet de payer et d'envoyer de l'argent avec un téléphone portable.", "l'argent mobile"], ["Protection des ordinateurs, des réseaux et des données contre les attaques.", "la cybersécurité"]],
    intrus: [[["Yas", "Moov Africa", "la SPT", "WACEM"], "WACEM", "c'est une entreprise de clinker ; les autres sont des acteurs des télécommunications."], [["le port de commerce", "le port de pêche", "le quai minéralier", "l'aérogare"], "l'aérogare", "elle appartient à l'aéroport ; les autres sont des parties du port autonome de Lomé."]],
    comp: [{ texte: "Pour moderniser les transports, le Togo construit des voies de contournement de la faille d'{a} et des monts {b}, bitume la route côtière Abidjan-{c} et agrandit le port avec un troisième {d}.", mots: ["Alédjo", "Défalé", "Lagos", "quai"] }],
    relier: [{ consigne: "Relie chaque réalisation (liste A) à sa date (liste B).", A: ["câble sous-marin WACS", "Agence nationale de la cybersécurité", "Agence Togo Digital", "câble sous-marin Equiano"], B: ["2012", "2019", "2021", "2022"] }],
    cours: [["Quelles sont les deux lignes de chemin de fer qui fonctionnent encore au Togo ?", 1, "La ligne des phosphates, de Hahotoé vers Kpémé (0,5 pt) ; la ligne du clinker, de Tabligbo vers Lomé (0,5 pt)."],
      ["Quelles sont les différentes parties du port autonome de Lomé ?", 1, "Port de commerce, port de pêche, quai minéralier, appontement pétrolier (0,25 pt chacune)."],
      ["Quelles sont les faiblesses de l'internet au Togo ?", 1.5, "Débit plus faible et instable à la campagne (0,5 pt) ; internet fixe surtout en ville (0,5 pt) ; coût encore élevé (0,5 pt)."],
      ["Cite deux métiers créés par les transports.", 1, "Deux au choix (0,5 pt chacun) : chauffeur, conducteur de taxi-moto, docker."],
      ["Cite deux efforts de modernisation des télécommunications, en dehors des câbles sous-marins.", 1, "Deux au choix (0,5 pt chacun) : fibre optique jusqu'au domicile, point d'échange internet et centre de données (2021), 4G puis 5G, Agence Togo Digital."],
      ["Cite trois défis des transports au Togo.", 1.5, "Trois au choix (0,5 pt chacun) : relancer le chemin de fer ; entretenir et étendre les routes, surtout les pistes rurales ; améliorer la sécurité routière ; rester compétitif face aux ports voisins."],
      ["Quelle part du PIB apportent les télécommunications ?", 0.5, "Environ 7 à 8 % du PIB (0,5 pt)."]]
  },
  g3_12: {
    sit: [{
      texte: "Le ministère chargé du tourisme lance un concours pour les jeunes : « Fais aimer le Togo aux Togolais ». Ton camarade Essowè constate que peu de vos camarades ont visité un site touristique de leur pays et que presque tous les hôtels qu'ils connaissent sont à Lomé. Vous décidez de participer ensemble et vous partez de la carte ci-dessous.",
      consignes: ["À l'aide de la carte, rédige un discours dans lequel tu présentes les caractéristiques du tourisme au Togo et son importance pour le pays.",
        "Poursuis ton discours en présentant les efforts faits pour valoriser le tourisme et les défis qu'il doit encore relever, surtout celui du tourisme intérieur."],
      doc: { titre: "Document : quelques sites touristiques du Togo", image: "images/epreuves/3e_g3_12.png" },
      prods: [{
        intro: "Pour le concours « Fais aimer le Togo aux Togolais », je vais présenter, à l'aide de la carte, les caractéristiques du tourisme togolais et son importance pour le pays.",
        adresse: "Mesdames et Messieurs les membres du jury, chers camarades,",
        support: "La carte : sites naturels (parcs de la Kéran et de Fazao-Malfakassa, faille d'Alédjo, cascades de Kpimé, Womé et Akloa, mont Agou, lac Togo) et sites historiques et culturels (Koutammakou, hauts fourneaux de Nangbani, monastère de Dzogbégan, musée de Kpalimé, Lomé, Agbodrafo, Togoville) ; plus de 800 sites recensés ; informations du document exploitées",
        indConsigne: "Discours : caractéristiques du tourisme (formes, visiteurs, répartition) ; importance (devises, emplois, artisanat, image du pays)",
        dev: ["D'abord, la carte montre que le Togo a de nombreux sites, naturels et culturels, du Koutammakou et du parc de la Kéran au nord jusqu'aux cascades de Kpimé et de Womé, au mont Agou, au lac Togo et aux plages du sud. Le tourisme y est surtout un tourisme de découverte de la nature et des cultures, de loisirs au bord de la mer et d'affaires, avec les conférences de Lomé.",
          "Ensuite, les visiteurs viennent surtout des pays voisins (Côte d'Ivoire, Burkina Faso, Bénin) et de la diaspora. Les hôtels et les services sont concentrés à Lomé et dans le sud, et peu de Togolais visitent leur propre pays, comme l'a remarqué Essowè.",
          "Enfin, le tourisme est important : il fait entrer des devises, environ 53 milliards de FCFA de recettes en 2019 (19 milliards seulement en 2020, à cause du COVID-19) ; il crée des emplois dans les hôtels, les restaurants, les transports et chez les guides ; il fait vivre l'artisanat et les arts ; il fait connaître le Togo et rapproche les cultures."],
        concl: "En définitive, le Togo a des sites variés et un tourisme utile à son économie, mais encore tourné vers les étrangers et concentré dans le sud.",
        justesse: ["Sites variés, naturels et culturels, dans toutes les régions (carte).", "Formes : découverte (nature, cultures), loisirs balnéaires, affaires (Lomé).", "Visiteurs : pays voisins (Côte d'Ivoire, Burkina Faso, Bénin) et diaspora ; hôtels concentrés à Lomé et au sud ; peu de tourisme intérieur.", "Importance : devises (53 milliards de FCFA en 2019, 19 en 2020), emplois, artisanat, image du pays."],
        concepts: "Tourisme, site touristique, tourisme de découverte, tourisme balnéaire, tourisme d'affaires, devises, diaspora."
      }, {
        intro: "Pour que les Togolais aiment leur pays, il faut aussi savoir ce qui est fait et ce qui reste à faire. Je vais présenter les efforts de valorisation du tourisme et ses défis, surtout celui du tourisme intérieur.",
        adresse: "Mesdames et Messieurs les membres du jury, chers camarades,",
        support: "La carte : sites dispersés dans tout le pays, loin des hôtels de Lomé ; le constat d'Essowè ; informations du document exploitées",
        indConsigne: "Efforts de valorisation ; défis, en particulier le tourisme intérieur",
        dev: ["D'abord, l'État a créé un ministère chargé du tourisme et l'Office national du tourisme ; il aménage et protège les sites, labellise et classe les hôtels et les restaurants par étoiles, et fait la promotion du Togo dans les salons et sur internet. Ce concours en est un exemple.",
          "Ensuite, il reste des défis : construire des infrastructures de qualité, routes et hôtels hors de Lomé, pour atteindre les sites de la carte ; former le personnel ; protéger les sites et la faune ; faire face à la concurrence des pays voisins ; assurer la sécurité, surtout dans le nord.",
          "Enfin, le plus grand défi est le tourisme intérieur : il faut que les Togolais découvrent leur propre pays. Nos écoles peuvent organiser des sorties au mont Agou, à la faille d'Alédjo ou au Koutammakou, et chacun peut faire connaître ces sites autour de lui."],
        concl: "En définitive, le tourisme togolais progresse grâce aux efforts de l'État, mais il ne deviendra une vraie richesse que si les Togolais eux-mêmes partent à la découverte de leur pays.",
        justesse: ["Efforts : ministère, Office national du tourisme ; aménagement et protection des sites ; labellisation et classement des hôtels ; promotion (salons, internet).", "Défis : infrastructures hors de Lomé, formation, protection des sites et de la faune, concurrence, sécurité au nord.", "Tourisme intérieur : faire découvrir le pays aux Togolais."],
        concepts: "Valorisation, labellisation, infrastructure, tourisme intérieur, patrimoine, sécurité."
      }]
    }],
    vf: [["Le Koutammakou est le pays des Batammariba (Tamberma).", true], ["La réserve de Togodo se trouve dans la basse vallée du Mono.", true], ["Le château Viale se trouve à Dapaong.", false, "Le château Viale se trouve à Kpalimé, dans la région des Plateaux."], ["La falaise de Bombouaka se trouve dans la région des Savanes.", true], ["Les recettes du tourisme étaient d'environ 53 milliards de FCFA en 2019.", true], ["Les hôtels du Togo sont surtout concentrés dans le nord.", false, "Ils sont concentrés à Lomé et dans le sud."]],
    choix: [["Les maisons des Batammariba s'appellent (takienta / tata / cases rondes).", "takienta"], ["Le tissage des nattes est une spécialité de (Tchamba / Aného / Kpalimé).", "Tchamba"], ["La fosse aux lions se trouve dans la région (des Savanes / Maritime / Centrale).", "des Savanes"], ["Les hauts fourneaux de Nangbani se trouvent à (Bandjéli / Togoville / Womé).", "Bandjéli"]],
    defs: [["Fait de voyager pour son plaisir, pour découvrir des lieux différents de celui où l'on vit.", "le tourisme"], ["Tourisme des Togolais qui visitent leur propre pays.", "le tourisme intérieur"], ["Classement des hôtels et des restaurants selon leur qualité.", "la labellisation (le classement par étoiles)"]],
    intrus: [[["les cascades de Kpimé", "le mont Agou", "le château Viale", "le Koutammakou"], "le Koutammakou", "il se trouve dans la Kara ; les autres sont dans la région des Plateaux."], [["la découverte", "les loisirs au bord de la mer", "les affaires", "le pèlerinage"], "le pèlerinage", "ce n'est pas une forme de tourisme citée dans la leçon ; les autres sont les trois formes du tourisme togolais."]],
    comp: [{ texte: "Le Koutammakou est inscrit au patrimoine mondial de l'{a}. Dans la Kara, on visite aussi la faille d'{b} et les cultures en {c} du pays kabyè. Dans la région Centrale, on visite le parc national de {d}.", mots: ["UNESCO", "Alédjo", "terrasses", "Fazao-Malfakassa"] }],
    relier: [{ consigne: "Relie chaque site (liste A) à sa région (liste B).", A: ["la réserve de Togodo", "le monastère de Dzogbégan", "le tissage des nattes de Tchamba", "les hauts fourneaux de Nangbani", "les grottes de Nok"], B: ["Maritime", "Plateaux", "Centrale", "Kara", "Savanes"] }],
    cours: [["Cite trois sites touristiques de Lomé.", 1.5, "Trois au choix (0,5 pt chacun) : les plages, le wharf, les monuments coloniaux, le grand marché, le marché des féticheurs."],
      ["Qu'est-ce qui attire les visiteurs au lac Togo ?", 1, "Togoville (0,5 pt) et Agbodrafo (0,5 pt)."],
      ["D'où viennent surtout les visiteurs du Togo ?", 1, "Des pays voisins, comme la Côte d'Ivoire, le Burkina Faso ou le Bénin (0,5 pt), et de la diaspora (0,5 pt)."],
      ["Montre que le tourisme fait vivre beaucoup de Togolais.", 1.5, "Il crée des emplois dans les hôtels et les restaurants (0,5 pt), chez les guides et dans les transports (0,5 pt) ; il fait vivre l'artisanat et les arts (0,5 pt)."],
      ["Pourquoi les recettes du tourisme ont-elles chuté en 2020 ?", 1, "À cause du COVID-19 (0,5 pt) : elles sont tombées de 53 milliards de FCFA en 2019 à 19 milliards (0,5 pt)."],
      ["Quels efforts l'État fait-il pour faire connaître le Togo aux étrangers ?", 1, "La promotion dans les salons (0,5 pt) et sur internet (0,5 pt)."],
      ["Cite deux défis du tourisme liés aux infrastructures et au personnel.", 1, "Construire des infrastructures de qualité (routes, hôtels hors de Lomé) (0,5 pt) ; former le personnel (0,5 pt)."]]
  },
  h3_1: {
    sit: [{
      texte: "Ta classe prépare, pour la bibliothèque du collège, une exposition intitulée « Comment l'Afrique a-t-elle été conquise ? ». Ton groupe est chargé du panneau sur les acteurs de la conquête. Votre professeur vous remet la liste ci-dessous, mais tes camarades ne savent pas quel rôle a joué chacun.",
      consigne: "Rédige le texte du panneau : en t'appuyant sur la liste, explique les moyens d'action que les Européens ont utilisés pour conquérir l'Afrique à la fin du XIXe siècle.",
      doc: { titre: "Document : quelques acteurs de la conquête de l'Afrique", liste: ["Jules Ferry (France), le roi Léopold II (Belgique), Bismarck (Allemagne)", "la conférence de Berlin (1884-1885)", "l'écrivain britannique Rudyard Kipling", "Livingstone, Stanley, Brazza, Nachtigal", "les missionnaires", "les tirailleurs", "les compagnies de commerce et les banques"] },
      intro: "Pour l'exposition de la bibliothèque, mon groupe doit expliquer comment l'Afrique a été conquise. En m'appuyant sur la liste des acteurs remise par notre professeur, je vais expliquer les moyens d'action utilisés par les Européens à la fin du XIXe siècle.",
      support: "La liste : Jules Ferry, Léopold II, Bismarck ; conférence de Berlin (1884-1885) ; Rudyard Kipling ; Livingstone, Stanley, Brazza, Nachtigal ; missionnaires ; tirailleurs ; compagnies et banques ; informations du document exploitées",
      indConsigne: "Texte de panneau : moyens politiques, explorateurs et missionnaires, militaires, commerçants et banques, chacun illustré par les acteurs de la liste",
      dev: ["D'abord, la conquête a été voulue par des hommes politiques favorables à la colonisation : Jules Ferry en France, le roi Léopold II en Belgique et Bismarck en Allemagne votent les crédits et envoient les expéditions. Les puissances européennes se partagent l'Afrique à la conférence de Berlin (1884-1885), et des écrivains comme Rudyard Kipling justifient cette domination.",
        "Ensuite, les explorateurs comme Livingstone, Stanley, Brazza ou Nachtigal reconnaissent les régions inconnues, dressent des cartes et signent des traités avec les chefs africains. Les missionnaires évangélisent, ouvrent des écoles et des dispensaires : ils préparent ainsi les esprits à la domination.",
        "Enfin, les armées coloniales, avec des soldats africains, les tirailleurs, conquièrent les territoires par les armes et écrasent les résistances. Les commerçants et les compagnies achètent les matières premières et vendent les produits européens, tandis que les banques financent les expéditions, les compagnies et les grands travaux comme les ports et les chemins de fer."],
      concl: "En définitive, les Européens ont conquis l'Afrique en combinant la politique, l'exploration, la religion, les armes et l'argent : chaque acteur de la liste a joué son rôle dans cette domination.",
      justesse: ["Moyens politiques : Jules Ferry, Léopold II, Bismarck (crédits, expéditions) ; conférence de Berlin (1884-1885) ; Kipling justifie.", "Explorateurs (Livingstone, Stanley, Brazza, Nachtigal) : cartes, traités avec les chefs ; missionnaires : évangélisation, écoles, dispensaires.", "Militaires : armées coloniales et tirailleurs, conquête et répression.", "Commerçants, compagnies et banques : matières premières, produits européens, financement des expéditions et des grands travaux."],
      concepts: "Impérialisme, conquête, explorateur, missionnaire, traité, tirailleur, compagnie, partage de l'Afrique."
    }],
    vf: [["La colonisation est la forme la plus visible de l'impérialisme.", true], ["La théorie des « trois C » désigne le commerce, le christianisme et la civilisation.", true], ["Le Japon a conquis la Corée au début du XXe siècle.", true], ["Dans l'Antiquité, Rome a conquis la Grèce, la Gaule et l'Afrique du Nord.", true], ["Les missionnaires ont été les seuls acteurs de la conquête militaire de l'Afrique.", false, "Les missionnaires évangélisaient ; la conquête militaire a été faite par les armées coloniales et les tirailleurs."], ["L'impérialisme n'a existé qu'à la fin du XIXe siècle.", false, "Il a existé à toutes les époques et sur tous les continents : on dit qu'il a un caractère universel."]],
    choix: [["Les puissances européennes se partagent l'Afrique à la conférence de (Berlin / Londres / Paris).", "Berlin"], ["Bismarck était un homme politique (français / allemand / belge).", "allemand"], ["Dans l'Antiquité, l'Égypte des pharaons a dominé (la Nubie / la Gaule / la Corée).", "la Nubie"], ["Contrôler les routes commerciales et installer des bases navales est une cause (stratégique / démographique / scientifique).", "stratégique"]],
    defs: [["Politique d'un État qui cherche à dominer d'autres peuples pour les exploiter et leur imposer son autorité et sa culture.", "l'impérialisme"], ["Soldats africains des armées coloniales.", "les tirailleurs"], ["Marchés où les pays industrialisés veulent vendre leurs produits.", "les débouchés"]],
    intrus: [[["Mungo Park", "René Caillié", "Stanley", "Bismarck"], "Bismarck", "c'est un homme politique ; les autres sont des explorateurs."], [["le Mali", "le Songhaï", "Rome", "le Liberia"], "le Liberia", "il est resté indépendant en 1914 ; les autres ont été des puissances impérialistes."]],
    comp: [{ texte: "Les pays industrialisés veulent des {a} premières pour leurs usines, des {b} pour vendre leurs produits et placer leurs {c}, ainsi qu'une {d} bon marché.", mots: ["matières", "débouchés", "capitaux", "main-d'œuvre"] }],
    classer: [{ consigne: "Classe ces causes de l'impérialisme selon leur nature.", cats: ["économiques", "démographiques", "stratégiques et militaires", "politiques"], elts: [["trouver des matières premières", 0], ["placer des capitaux", 0], ["installer une partie de la population sur de nouvelles terres", 1], ["installer des bases navales", 2], ["recruter des soldats", 2], ["accroître sa puissance et son prestige", 3]] }],
    cours: [["Quels pays d'Afrique restent indépendants en 1914 ?", 1, "L'Éthiopie (0,5 pt) et le Liberia (0,5 pt)."],
      ["Qu'est-ce qui pousse les pays européens à vouloir des colonies pour des raisons démographiques ?", 1, "Ils veulent installer une partie de leur population (0,5 pt) sur de nouvelles terres (0,5 pt)."],
      ["Que prétendaient faire les Européens au nom des causes « humanitaires » ?", 1.5, "« Civiliser » les peuples (0,5 pt), les christianiser (0,5 pt) et mettre fin à la traite (0,5 pt)."],
      ["Donne deux exemples d'impérialisme à partir du XVe siècle.", 1, "Deux au choix (0,5 pt chacun) : Portugais, Espagnols, Anglais et Français fondent des empires en Amérique, en Asie et en Afrique ; le Japon conquiert la Corée."],
      ["Quel a été le rôle des explorateurs dans la conquête ?", 1.5, "Ils reconnaissent les régions inconnues (0,5 pt), dressent des cartes (0,5 pt) et signent des traités avec les chefs (0,5 pt)."],
      ["Que financent les banques européennes en Afrique ?", 1, "Les expéditions (0,5 pt), les compagnies et les grands travaux (ports, chemins de fer) (0,5 pt)."],
      ["Quelles sont les causes scientifiques de l'impérialisme ?", 0.5, "Explorer les terres inconnues (0,5 pt)."]]
  },
  h3_2: {
    sit: [{
      texte: "Pour la Journée du souvenir organisée dans ta ville, le comité des fêtes veut afficher un grand panneau en l'honneur des peuples du Togo qui ont résisté à la conquête allemande. Le président du comité, M. Kodjo, te confie la rédaction du texte et te remet le récit ci-dessous.",
      consignes: ["Rédige la première partie du panneau : explique pourquoi les peuples du Togo ont résisté et présente les formes qu'a prises leur résistance.",
        "Rédige la seconde partie du panneau : présente les principales résistances des peuples du Togo au sud et à l'ouest, puis au nord, en t'appuyant sur le récit."],
      doc: { titre: "Document : deux résistances racontées par un ancien", texte: "« En 1898, nos pères akposso ont attaqué les Allemands à Agomé-Koutoukpa. Pour se venger, von Doering a fait tuer onze des nôtres et a brûlé trois villages. Trois ans plus tard, en 1901, les Agotimé ont refusé de faire les travaux forcés : le lieutenant Smend est venu avec ses soldats, et dix-huit personnes sont mortes. On voulait nous prendre nos terres, nous faire travailler pour rien et nous frapper. Nous avons préféré nous battre. »" },
      prods: [{
        intro: "Le comité des fêtes de ma ville veut honorer les peuples du Togo qui ont résisté à la conquête allemande. Pour la première partie du panneau, je vais expliquer pourquoi ces peuples ont résisté et présenter les formes de leur résistance.",
        support: "Le récit de l'ancien : terres prises, travail sans salaire, coups ; « nous avons préféré nous battre » ; informations du document exploitées",
        indConsigne: "Première partie du panneau : causes de la résistance ; obstacles naturels ; formes (résistance des peuples, résistance des souverains)",
        dev: ["D'abord, les peuples du Togo ont résisté pour défendre leurs terres et leur liberté, garder l'autorité de leurs chefs et leurs coutumes. Ils refusaient aussi les abus de la colonisation : les travaux forcés, les impôts et les taxes, les châtiments corporels. C'est ce que dit l'ancien du récit : « On voulait nous prendre nos terres, nous faire travailler pour rien et nous frapper. »",
          "Ensuite, la conquête s'est heurtée à des obstacles naturels qui ont aidé les résistants : le relief, les cours d'eau et les maladies tropicales.",
          "Enfin, la résistance a pris deux formes. Dans la résistance des peuples, des communautés entières, souvent sans roi, refusent toute domination, comme les Kabyè, les Bassar, les Konkomba ou certaines communautés éwé. Dans la résistance des souverains, des rois s'opposent aux colonisateurs, comme Na Biéma Asabiè de Mango et Aja Kpoyizoun de Tado au Togo, ou Samori Touré et Béhanzin ailleurs en Afrique."],
        concl: "En définitive, nos ancêtres ont résisté pour rester libres sur leurs terres, soit en peuples entiers, soit derrière leurs rois.",
        justesse: ["Causes : défense des terres, de la liberté, de l'autorité des chefs et des coutumes ; refus des travaux forcés, des impôts et taxes, des châtiments corporels.", "Obstacles naturels : relief, cours d'eau, maladies tropicales.", "Formes : résistance des peuples (Kabyè, Bassar, Konkomba, communautés éwé) ; résistance des souverains (Asabiè, Kpoyizoun ; Samori Touré, Béhanzin)."],
        concepts: "Résistance, colonisation, travaux forcés, impôt, châtiment corporel, souverain, peuple sans roi."
      }, {
        intro: "Pour la seconde partie du panneau, je vais présenter, en m'appuyant sur le récit de l'ancien, les principales résistances des peuples du Togo, d'abord au sud et à l'ouest, puis au nord.",
        support: "Le récit : attaque akposso à Agomé-Koutoukpa (1898), répression de von Doering (11 morts, trois villages brûlés) ; refus du travail forcé par les Agotimé (1901), répression de Smend (18 morts) ; informations du document exploitées",
        indConsigne: "Seconde partie du panneau : résistances du sud et de l'ouest (Tové, Akposso, Ahépé et Tchèkpo, Agotimé) ; résistances du nord (Bassar, Konkomba, Kabyè, Lamba, Losso, Bafilo, Kambolé, Anoufo, Moba), avec les dates",
        dev: ["D'abord, au sud et à l'ouest : en 1895, les habitants de Tové (Agbessia) se révoltent contre la présence allemande. En 1898, comme le raconte l'ancien, les Akposso attaquent les Allemands à Agomé-Koutoukpa ; von Doering fait tuer 11 Akposso et incendier trois villages. En 1900, Ahépé et Tchèkpo se soulèvent contre le commandant de cercle. En 1901, les Agotimé refusent le travail forcé : la répression du lieutenant Smend fait 18 morts.",
          "Ensuite, au nord : en 1897, les Bassar et les Konkomba attaquent les colonnes allemandes et leur infligent de lourdes pertes ; il faut l'expédition de von Massow, en 1898, pour les soumettre. En 1898, les Kabyè, les Lamba et les Losso combattent ses troupes depuis leurs montagnes, à Tcharè et à Pessidé, et les Lamba blessent le lieutenant Thierry.",
          "Enfin, en 1897-1898, Bafilo et Kambolé résistent à leur tour, et les Anoufo de Mango et les Moba se soulèvent."],
        concl: "En définitive, du sud au nord, les peuples du Togo ont résisté avec courage ; ils ont retardé la conquête, mais la supériorité des armes allemandes l'a emporté. Ils méritent notre souvenir.",
        justesse: ["Sud et ouest : Tové (1895) ; Akposso à Agomé-Koutoukpa (1898, répression de von Doering : 11 morts, trois villages brûlés) ; Ahépé et Tchèkpo (1900) ; Agotimé (1901, Smend, 18 morts).", "Nord : Bassar et Konkomba (1897, soumis par von Massow en 1898) ; Kabyè, Lamba, Losso (1898, Tcharè, Pessidé, Thierry blessé) ; Bafilo, Kambolé, Anoufo, Moba (1897-1898).", "Bilan : conquête retardée, mais armes allemandes supérieures."],
        concepts: "Résistance, révolte, soulèvement, répression, colonne militaire, conquête."
      }]
    }],
    vf: [["En 1895, les habitants de Tové se révoltent contre la présence allemande.", true], ["Les Akposso ont attaqué les Allemands à Pessidé.", false, "Les Akposso ont attaqué à Agomé-Koutoukpa ; Pessidé est le lieu d'une attaque des Kabyè, des Lamba et des Losso."], ["En 1900, Ahépé et Tchèkpo se soulèvent contre le commandant de cercle.", true], ["L'expédition de von Massow a eu lieu en 1898.", true], ["Les maladies tropicales ont gêné la conquête allemande.", true], ["La résistance des peuples était toujours dirigée par un roi.", false, "Ce sont souvent des communautés sans roi qui refusent toute domination."]],
    choix: [["La répression contre les Agotimé est menée par le lieutenant (Smend / Thierry / Gruner).", "Smend"], ["En janvier 1898, les Lamba blessent le lieutenant (von Doering / Thierry / Smend).", "Thierry"], ["Les Bassar et les Konkomba attaquent les colonnes allemandes en (1895 / 1897 / 1901).", "1897"], ["Samori Touré et Béhanzin sont des exemples de résistance (des peuples / des souverains / des missionnaires).", "des souverains"]],
    defs: [["Ensemble des actions menées pour s'opposer à la domination étrangère.", "la résistance"], ["Punition violente pour écraser une révolte.", "la répression"], ["Punitions infligées en frappant le corps.", "les châtiments corporels"]],
    intrus: [[["Tové", "Akposso", "Agotimé", "Kabyè"], "Kabyè", "ils ont résisté au nord ; les autres au sud et à l'ouest."], [["les travaux forcés", "les impôts", "les châtiments corporels", "les maladies tropicales"], "les maladies tropicales", "c'est un obstacle naturel ; les autres sont des abus de la colonisation."]],
    comp: [{ texte: "En 1898, les Kabyè, les Lamba et les {a} combattent les troupes de von {b} depuis leurs montagnes : combats de {c} et attaque de {d}.", mots: ["Losso", "Massow", "Tcharè", "Pessidé"] }],
    ordre: [{ consigne: "Range ces résistances dans l'ordre chronologique.", elements: ["révolte de Tové", "attaque des Bassar et des Konkomba contre les colonnes allemandes", "attaque des Akposso à Agomé-Koutoukpa", "soulèvement d'Ahépé et de Tchèkpo", "refus du travail forcé par les Agotimé"] }],
    cours: [["Pourquoi les peuples du Togo voulaient-ils garder l'autorité de leurs chefs ?", 1, "Pour garder leur liberté (0,5 pt) et leurs coutumes (0,5 pt)."],
      ["Comment von Doering a-t-il réprimé la résistance des Akposso ?", 1, "Il a fait tuer 11 Akposso (0,5 pt), puis incendier trois villages (0,5 pt)."],
      ["Qui a soumis les Bassar et les Konkomba, et quand ?", 1, "L'expédition de von Massow (0,5 pt), en 1898 (0,5 pt)."],
      ["Cite quatre peuples du nord qui ont résisté en 1897-1898, en dehors des Bassar et des Konkomba.", 2, "Quatre au choix (0,5 pt chacun) : les Kabyè, les Lamba, les Losso, les Anoufo de Mango, les Moba."],
      ["Cite deux souverains africains, en dehors du Togo, qui ont résisté à l'impérialisme.", 1, "Samori Touré (0,5 pt) et Béhanzin (0,5 pt)."],
      ["Pourquoi les montagnes ont-elles aidé les Kabyè, les Lamba et les Losso dans leur résistance ?", 1, "Ils combattaient depuis leurs montagnes (0,5 pt), ce qui gênait les troupes allemandes (le relief est un obstacle à la conquête) (0,5 pt)."],
      ["Qu'ont obtenu les peuples du Togo par leur résistance ?", 1, "Ils ont retardé la conquête (1 pt)."]]
  },
  h3_3: {
    sit: [{
      texte: "Pour le journal de ton collège, la rédaction prépare une page « Nos héros oubliés ». Ta camarade Essi a trouvé dans un livre la liste de dates ci-dessous, sur un roi du nord du Togo, mais elle ne sait pas quoi en faire. La rédaction te demande d'écrire l'article.",
      consigne: "Rédige un article, avec un titre, dans lequel tu présentes Na Biéma Asabiè, sa résistance face aux Allemands et les conséquences de sa mort.",
      doc: { titre: "Document : quelques dates de la vie de Na Biéma Asabiè", liste: ["vers 1835-1840 : naissance", "1894 : il devient fémè (roi) des Anoufo de Sansanné-Mango", "janvier 1895 : traité de protectorat signé avec les Allemands Gruner et von Carnap", "1897 : il refuse de répondre à la convocation du lieutenant Gaston Thierry", "2 novembre 1897 : il est abattu sur l'ordre de Thierry"] },
      intro: "Pour la page « Nos héros oubliés » du journal du collège, je vais présenter, à partir des dates trouvées par ma camarade Essi, Na Biéma Asabiè, roi de Mango, sa résistance face aux Allemands et les conséquences de sa mort.",
      titreProd: "Na Biéma Asabiè, le roi de Mango qui refusa de se soumettre",
      support: "La liste de dates : naissance vers 1835-1840 ; roi en 1894 ; traité de janvier 1895 avec Gruner et von Carnap ; refus de la convocation de Thierry ; mort le 2 novembre 1897 ; informations du document exploitées",
      indConsigne: "Article avec un titre : présentation d'Asabiè ; sa résistance ; conséquences de sa mort",
      dev: ["D'abord, Na Biéma Asabiè était le fémè, c'est-à-dire le roi, des Anoufo (ou Tchokossi) du royaume de Sansanné-Mango, dans le bassin de l'Oti. Né vers 1835-1840, il fut le 8e roi depuis Na Biéma Bonsafo, et son règne fut court, de 1894 à 1897. En janvier 1895, il signa un traité de protectorat avec les Allemands Gruner et von Carnap, mais il en avait aussi signé avec les Français et les Britanniques.",
        "Ensuite, il refusa de se soumettre aux Allemands : il cessait de hisser le drapeau allemand quand les officiers étaient absents, et il ne répondit pas à la convocation du lieutenant Gaston Thierry. Celui-ci le fit abattre le 2 novembre 1897 : c'est la « tragédie de Mango ».",
        "Enfin, sa mort eut de lourdes conséquences : ses partisans furent vaincus par les gens de Gamadji et des dizaines d'Anoufo furent tués ; les Allemands imposèrent un nouveau roi, Sérikin Yérima ; l'imam Mahamadou s'enfuit et fut remplacé. Aujourd'hui, Asabiè est considéré comme un héros national."],
      concl: "En définitive, Na Biéma Asabiè a préféré la mort à la soumission : ce héros longtemps oublié mérite sa place dans la mémoire de tous les Togolais.",
      justesse: ["Présentation : fémè des Anoufo (Tchokossi) de Sansanné-Mango, bassin de l'Oti ; né vers 1835-1840 ; 8e roi depuis Na Biéma Bonsafo ; règne 1894-1897 ; traité de janvier 1895 (Gruner, von Carnap), mais aussi traités avec Français et Britanniques.", "Résistance : drapeau allemand non hissé en l'absence des officiers ; refus de la convocation de Thierry ; abattu le 2 novembre 1897 (tragédie de Mango).", "Conséquences : partisans vaincus par les gens de Gamadji, dizaines d'Anoufo tués ; nouveau roi Sérikin Yérima ; fuite et remplacement de l'imam Mahamadou ; héros national."],
      concepts: "Souverain, résistance, traité de protectorat, soumission, héros national."
    }],
    vf: [["Na Biéma Asabiè était le roi des Anoufo de Sansanné-Mango.", true], ["Le règne de Na Biéma Asabiè a duré plus de trente ans.", false, "Son règne fut court : de 1894 à 1897."], ["Aja Kpoyizoun était roi de Tado.", true], ["Le 22 juillet 1889, les représentants d'Aja Kpoyizoun signent un accord avec le Français d'Albéca.", true], ["Aja Kpoyizoun est mort exécuté à Tado.", false, "Il a été déporté au Gabon, à Ndjolé, où il est mort noyé en 1913."], ["Après la déportation d'Aja Kpoyizoun, Alokpéto devient roi de Tado.", true]],
    choix: [["Aja Kpoyizoun portait le titre d'anyigbafio, c'est-à-dire (« roi de la terre » / « roi des eaux » / « chef de guerre »).", "« roi de la terre »"], ["Le traité de 1894 qui place Tado sous l'autorité de la France est signé avec (Victor Ballot / Gaston Thierry / Gruner).", "Victor Ballot"], ["Aja Kpoyizoun se rend en octobre (1894 / 1900 / 1913).", "1900"], ["Après sa reddition, Aja Kpoyizoun est d'abord interné à (Porto-Novo / Lomé / Ndjolé).", "Porto-Novo"]],
    defs: [["Titre du roi des Anoufo de Mango.", "le fémè"], ["Nom donné à l'assassinat de Na Biéma Asabiè, le 2 novembre 1897.", "la « tragédie de Mango »"], ["Envoyer de force quelqu'un loin de son pays, comme Aja Kpoyizoun au Gabon.", "déporter (la déportation)"]],
    intrus: [[["Gruner", "von Carnap", "Gaston Thierry", "Victor Ballot"], "Victor Ballot", "c'est un Français ; les autres sont des Allemands liés à l'histoire d'Asabiè."], [["Dossou", "Alokpéto", "Gbaguidi", "Sérikin Yérima"], "Sérikin Yérima", "il est lié à l'histoire de Mango ; les autres sont liés à celle d'Aja Kpoyizoun."]],
    comp: [{ texte: "Aja Kpoyizoun refuse de lever des {a} pour les Français ; il va jusqu'à jeter sa {b} à terre devant leur représentant. Convoqué, il s'enfuit, et la troupe envoyée contre lui incendie {c}. Pour épargner son {d}, il se rend en octobre 1900.", mots: ["troupes", "canne", "Tado", "peuple"] }],
    ordre: [{ consigne: "Range ces événements de la vie d'Aja Kpoyizoun dans l'ordre chronologique.", elements: ["accord de commerce et d'amitié avec d'Albéca", "traité avec le gouverneur Victor Ballot", "chute du royaume du Dahomey", "reddition d'Aja Kpoyizoun", "mort d'Aja Kpoyizoun à Ndjolé"] }],
    cours: [["Pourquoi le royaume de Tado était-il convoité par deux puissances ?", 1, "Il était partagé entre la zone convoitée par l'Allemagne (0,5 pt) et celle que revendiquait la France (0,5 pt)."],
      ["Que représentait le geste d'Aja Kpoyizoun jetant sa canne à terre devant le représentant de la France ?", 1, "Une vraie déclaration de guerre (1 pt)."],
      ["Comment les Français ont-ils réorganisé le pouvoir à Tado après la déportation d'Aja Kpoyizoun ?", 1.5, "Ils renforcent le pouvoir de Dossou (0,5 pt), chef installé à Tohoun (0,5 pt), et font d'Alokpéto, son frère cadet, le nouveau roi de Tado (0,5 pt)."],
      ["Quel geste d'Asabiè montrait son refus de l'autorité allemande au quotidien ?", 1, "Il cessait de hisser le drapeau allemand (0,5 pt) en l'absence des officiers (0,5 pt)."],
      ["Avec quelles puissances, en dehors de l'Allemagne, Asabiè avait-il signé des traités ?", 1, "Avec les Français (0,5 pt) et avec les Britanniques (0,5 pt)."],
      ["De quel roi Aja Kpoyizoun était-il le successeur ?", 0.5, "De Togbé-Anyi (0,5 pt)."],
      ["Où et comment Aja Kpoyizoun est-il mort ?", 1.5, "Au Gabon (0,5 pt), à Ndjolé, où il a été déporté (0,5 pt) ; il est mort noyé en 1913 (0,5 pt)."]]
  },
  h3_4: {
    sit: [{
      texte: "Au cours d'un débat organisé par le club d'histoire, ton camarade Komi affirme : « La colonisation a développé l'Afrique : sans elle, nous n'aurions ni routes, ni ports, ni écoles. » D'autres élèves protestent, mais ils ne savent pas comment l'économie des colonies était organisée. Le professeur projette le schéma ci-dessous et te donne la parole.",
      consignes: ["À l'aide du schéma, explique à tes camarades comment les colonies étaient exploitées : l'économie de traite, le pacte colonial et les domaines d'exploitation.",
        "Dans un texte argumenté, réponds à Komi en présentant le bilan de la colonisation : ses aspects négatifs et ses aspects positifs."],
      doc: { titre: "Document : le pacte colonial", image: "images/epreuves/3e_h3_4.png" },
      prods: [{
        intro: "Pendant le débat du club d'histoire, mes camarades ne savent pas comment l'économie des colonies était organisée. À l'aide du schéma du pacte colonial, je vais leur expliquer comment les colonies étaient exploitées.",
        adresse: "Chers camarades,",
        support: "Le schéma : la colonie vend à bas prix ses matières premières (coton, café, cacao, arachide, bois, minerais) à la métropole, qui lui vend cher ses produits fabriqués (tissus, outils, alcool, sel, pacotille) ; les trois règles imposées à la colonie ; informations du document exploitées",
        indConsigne: "Explication de l'économie de traite, du pacte colonial et des domaines d'exploitation (agriculture, industrie, commerce)",
        dev: ["D'abord, l'économie de traite consiste à acheter à bas prix aux paysans africains les produits agricoles destinés à l'exportation et à leur vendre cher les produits fabriqués en Europe. Le schéma le montre : le coton, le café, le cacao ou l'arachide partent vers la métropole à bas prix, tandis que les tissus, les outils, l'alcool ou le sel reviennent vendus cher.",
          "Ensuite, le pacte colonial oblige la colonie à fournir des matières premières à la métropole et à n'acheter que ses produits fabriqués ; elle ne doit pas fabriquer elle-même de produits manufacturés. Toutes ses ressources servent donc les intérêts de la métropole.",
          "Enfin, cette exploitation touche tous les domaines. Dans l'agriculture, les colonisateurs confisquent les meilleures terres et imposent les cultures de rente (arachide, cacao, café, coton, hévéa) au détriment des cultures vivrières. Dans l'industrie, ils développent surtout les industries extractives, et les minerais partent en Europe sans être transformés. Dans le commerce, de grandes compagnies comme la SCOA, la CFAO ou l'UAC exportent les matières premières et importent les produits manufacturés, et les ports et les chemins de fer servent d'abord à l'exportation."],
        concl: "En définitive, l'économie des colonies était organisée pour enrichir la métropole : la colonie produisait, la métropole gagnait.",
        justesse: ["Économie de traite : achat à bas prix des produits agricoles, vente cher des produits fabriqués.", "Pacte colonial : matières premières pour la métropole, achat de ses seuls produits, interdiction de fabriquer ; ressources au service de la métropole.", "Domaines : agriculture (terres confisquées, cultures de rente imposées) ; industrie (extractive, minerais non transformés) ; commerce (SCOA, CFAO, UAC ; ports et chemins de fer pour l'exportation)."],
        concepts: "Métropole, colonie, économie de traite, pacte colonial, culture de rente, matière première, produit manufacturé."
      }, {
        intro: "Komi affirme que la colonisation a développé l'Afrique. Dans un texte argumenté, je vais lui répondre en présentant le bilan de la colonisation, avec ses aspects négatifs et ses aspects positifs.",
        adresse: "Cher Komi,",
        support: "L'affirmation de Komi (routes, ports, écoles) ; le schéma du pacte colonial (matières premières vendues à bas prix, produits fabriqués vendus cher) ; informations du document exploitées",
        indConsigne: "Texte argumenté : aspects négatifs ; aspects positifs ; réalisations au service des colonisateurs ; prise de position",
        dev: ["D'abord, tu as raison sur un point : la colonisation a construit des routes, des ports et des chemins de fer, des écoles et des centres de santé ; elle a introduit de nouvelles cultures et la monnaie ; elle a mis fin à la traite et à certaines pratiques comme les sacrifices humains, et elle a ouvert l'Afrique sur le monde.",
          "Ensuite, le bilan négatif est beaucoup plus lourd : pillage des ressources, travail forcé et violences, confiscation des terres et recul des cultures vivrières, pauvreté des populations, découpage arbitraire de l'Afrique (la balkanisation). Comme le montre le schéma, l'économie est devenue extravertie et dépendante, tournée vers l'exportation de produits bruts ; les termes de l'échange se sont détériorés et l'Afrique a pris du retard.",
          "Enfin, les routes, les ports et les écoles dont tu parles servaient d'abord les intérêts des colonisateurs : les ports et les chemins de fer servaient d'abord à faire sortir les matières premières vers la métropole."],
        concl: "En définitive, Komi, la colonisation a laissé quelques équipements, mais elle a surtout exploité l'Afrique et lui a laissé une économie dépendante : on ne peut pas dire qu'elle l'a développée.",
        justesse: ["Aspects positifs : infrastructures (routes, ports, chemins de fer), écoles, santé, nouvelles cultures, monnaie, fin de la traite et des sacrifices humains, ouverture sur le monde.", "Aspects négatifs : pillage, travail forcé, violences, terres confisquées, recul des cultures vivrières, pauvreté, balkanisation, économie extravertie et dépendante, détérioration des termes de l'échange, retard économique.", "Réalisations au service des colonisateurs d'abord ; prise de position argumentée."],
        concepts: "Bilan, balkanisation, économie extravertie, dépendance, termes de l'échange, infrastructure."
      }]
    }],
    vf: [["La métropole est le pays qui possède et exploite une colonie.", true], ["L'impôt de case était levé dans les colonies britanniques.", true], ["Les patentes sont des taxes payées pour exercer certains métiers.", true], ["La SCOA, la CFAO et l'UAC étaient des compagnies minières togolaises.", false, "C'étaient de grandes compagnies de commerce coloniales, qui exportaient les matières premières et importaient les produits manufacturés."], ["La balkanisation désigne le découpage arbitraire de l'Afrique.", true], ["Pour mettre ses colonies en valeur, la métropole y dépensait beaucoup de son propre argent.", false, "Elle les mettait en valeur sans dépenser son argent, grâce aux impôts, aux travaux forcés, aux patentes et aux droits de douane."]],
    choix: [["Dans les colonies françaises, on levait l'impôt (par tête / de case / sur le revenu).", "par tête"], ["L'hévéa est une culture (vivrière / de rente / maraîchère).", "de rente"], ["Une économie tournée vers l'exportation de produits bruts est une économie (extravertie / autonome / industrielle).", "extravertie"], ["Jules Ferry justifie la colonisation en (1885 / 1914 / 1960).", "1885"]],
    defs: [["Territoire occupé, administré et exploité par une puissance étrangère.", "une colonie"], ["Système qui oblige la colonie à fournir des matières premières à la métropole et à n'acheter que ses produits fabriqués.", "le pacte colonial"], ["Taxes sur les marchandises qui entrent dans la colonie ou qui en sortent.", "les droits de douane"]],
    intrus: [[["l'arachide", "le cacao", "le coton", "le mil"], "le mil", "c'est une culture vivrière ; les autres sont des cultures de rente imposées par les colonisateurs."], [["les routes", "les écoles", "les centres de santé", "le travail forcé"], "le travail forcé", "c'est un aspect négatif de la colonisation ; les autres sont des aspects positifs."]],
    comp: [{ texte: "Pour mettre les colonies en valeur, la métropole utilise les {a}, les travaux {b}, les {c} et les droits de {d}.", mots: ["impôts", "forcés", "patentes", "douane"] }],
    classer: [{ consigne: "Classe ces éléments du bilan de la colonisation.", cats: ["aspects négatifs", "aspects positifs"], elts: [["le pillage des ressources", 0], ["la balkanisation", 0], ["la détérioration des termes de l'échange", 0], ["la confiscation des terres", 0], ["l'introduction de la monnaie", 1], ["la fin de la traite", 1], ["la construction de ports et de chemins de fer", 1]] }],
    cours: [["Par quel prétexte Jules Ferry justifiait-il la colonisation ?", 0.5, "Une prétendue « mission civilisatrice » (0,5 pt)."],
      ["Quels travaux faisaient les hommes soumis aux travaux forcés ?", 2, "Ils construisaient des routes et des ponts (0,5 pt), des voies ferrées (0,5 pt) et des bâtiments (0,5 pt) ; ils travaillaient dans les plantations (0,5 pt)."],
      ["Pourquoi les cultures vivrières ont-elles reculé pendant la colonisation ?", 1, "Les colonisateurs ont confisqué les meilleures terres (0,5 pt) et imposé les cultures de rente (0,5 pt)."],
      ["Que devenaient les minerais extraits en Afrique ?", 1, "Ils partaient en Europe (0,5 pt) sans être transformés (0,5 pt)."],
      ["À quoi servaient d'abord les ports et les chemins de fer construits par les colonisateurs ?", 1, "À l'exportation (0,5 pt) des matières premières vers la métropole (0,5 pt)."],
      ["Qu'est-ce qu'une économie extravertie et dépendante ?", 1, "Une économie tournée vers l'exportation de produits bruts (0,5 pt), qui dépend de l'extérieur (0,5 pt)."],
      ["Quelles pratiques la colonisation a-t-elle fait disparaître ?", 1, "La traite (0,5 pt) et certaines pratiques comme les sacrifices humains (0,5 pt)."]]
  },
  h3_5: {
    sit: [{
      texte: "Le musée de ta ville prépare une exposition sur « Le Togo allemand (1884-1914) ». La conservatrice, Mme Ama, demande aux élèves de 3e de rédiger le texte d'accueil qui sera placé à côté de la carte ci-dessous, pour expliquer aux visiteurs comment la colonie était née et comment elle était dirigée.",
      consigne: "Rédige le texte d'accueil de l'exposition : présente la naissance et le territoire du Togo allemand, puis, à l'aide de la carte, son organisation administrative centrale et régionale.",
      doc: { titre: "Document : l'organisation administrative du Togo allemand", image: "images/epreuves/3e_h3_5.png" },
      intro: "Le musée de ma ville prépare une exposition sur le Togo allemand. Pour le texte d'accueil, je vais présenter aux visiteurs la naissance et le territoire de la colonie, puis, à l'aide de la carte, son organisation administrative centrale et régionale.",
      adresse: "Chers visiteurs,",
      support: "La carte : limite du Togo allemand (Gold Coast, Dahomey, Haute-Volta, golfe de Guinée) ; capitale Lomé depuis 1897 ; circonscriptions (Lomé, Aného, Misahöhe, Atakpamé, Kete-Krachi, Sokodé-Bassari, Sansanné-Mango) ; cinq cercles au sud, trois postes au nord ; informations du document exploitées",
      indConsigne: "Texte d'accueil : traité de 1884 ; superficie et limites ; administration centrale (commissaires, gouverneurs, capitales) ; administration régionale (cercles, postes, commandants, chefs traditionnels)",
      dev: ["D'abord, le Togo allemand est né le 5 juillet 1884, à Baguida, quand l'Allemand Gustav Nachtigal a signé un traité de protectorat avec Mlapa III, chef de Togoville. La colonie couvrait environ 90 400 km², car elle comprenait aussi l'actuelle région de la Volta, au Ghana, comme le montre sa limite ouest sur la carte. Elle était limitée au nord par des territoires français (actuel Burkina Faso), au sud par le golfe de Guinée, à l'est par le Dahomey (actuel Bénin) et à l'ouest par la Gold Coast (actuel Ghana).",
        "Ensuite, au centre du pouvoir, après Nachtigal, le commerçant Heinrich Randad représente l'Allemagne (1884-1885). Des commissaires impériaux dirigent ensuite la colonie : Ernst Falkenthal, Jesko von Puttkamer, véritable organisateur de l'administration, et Eugen von Zimmerer. À partir de 1895, elle est dirigée par un gouverneur : August Köhler, Waldemar Horn, le comte Julius von Zech, grand législateur, Edmund Brückner, puis le duc Adolf Friedrich de Mecklembourg ; Hans-Georg von Doering assure l'intérim en 1914. La capitale passe de Baguida (1884-1887) à Aného (1887-1897), puis à Lomé, depuis 1897.",
        "Enfin, la carte montre l'administration régionale : le territoire est divisé en cercles au sud (Lomé, Aného, Misahöhe près de Kpalimé, Atakpamé) et en postes administratifs au nord (Kete-Krachi, Sokodé-Bassari, Sansanné-Mango). Chaque cercle est dirigé par un commandant, chargé de la police, des impôts et des routes, aidé par les chefs traditionnels : c'est une administration indirecte."],
      concl: "En définitive, chers visiteurs, le Togo allemand, né d'un traité signé à Baguida, était une colonie plus vaste que le Togo actuel, dirigée depuis Lomé par des gouverneurs et encadrée par des cercles et des postes.",
      justesse: ["Naissance : 5 juillet 1884, Baguida, traité Nachtigal-Mlapa III (Togoville).", "Territoire : environ 90 400 km² (avec la région de la Volta) ; limites : territoires français (nord), golfe de Guinée (sud), Dahomey (est), Gold Coast (ouest).", "Administration centrale : Randad ; commissaires (Falkenthal, von Puttkamer, von Zimmerer) ; gouverneurs dès 1895 (Köhler, Horn, von Zech, Brückner, Mecklembourg ; intérim von Doering) ; capitales Baguida, Aného, Lomé (1897).", "Administration régionale : cercles (Lomé, Aného, Misahöhe, Atakpamé) et postes (Kete-Krachi, Sokodé-Bassari, Sansanné-Mango) ; commandant ; chefs traditionnels ; administration indirecte."],
      concepts: "Protectorat, colonie, commissaire impérial, gouverneur, cercle, poste administratif, administration indirecte."
    }],
    vf: [["Le Togo allemand comprenait l'actuelle région de la Volta, au Ghana.", true], ["Le comte Julius von Zech est appelé le « grand législateur ».", true], ["L'école d'agriculture de Nuatja ouvre en 1904.", true], ["La ligne Lomé-Aného mesure 119 km.", false, "Elle mesure 44 km ; c'est la ligne Lomé-Kpalimé qui mesure 119 km."], ["La station radio de Kamina date de 1914.", true], ["L'industrie était très développée dans le Togo allemand.", false, "Elle restait faible : quelques usines seulement (égrenage du coton, coprah, palmistes)."]],
    choix: [["À partir de 1897, la capitale du Togo allemand est (Baguida / Aného / Lomé).", "Lomé"], ["Le véritable organisateur de l'administration du Togo allemand est (Jesko von Puttkamer / Heinrich Randad / August Köhler).", "Jesko von Puttkamer"], ["La ligne Lomé-Agbonou est surnommée la ligne (du coton / du cacao / du coprah).", "du coton"], ["La léproserie du Togo allemand se trouvait à (Kagnikopé / Aného / Sokodé).", "Kagnikopé"]],
    defs: [["Système où le colonisateur gouverne en s'appuyant sur les chefs traditionnels.", "l'administration indirecte"], ["Surnom donné au Togo allemand, qui équilibrait son budget sans aide de l'Allemagne.", "la « colonie modèle » (Musterkolonie)"], ["Pont avancé dans la mer, construit à Lomé en 1900, pour charger et décharger les navires.", "le wharf"]],
    intrus: [[["Lomé", "Aného", "Misahöhe", "Sansanné-Mango"], "Sansanné-Mango", "c'était un poste administratif du nord ; les autres étaient des cercles."], [["DTG", "Swanzy", "Vietor", "SNPT"], "SNPT", "c'est une société des phosphates d'aujourd'hui ; les autres étaient des maisons de commerce du Togo allemand."]],
    comp: [{ texte: "Les Allemands construisent l'hôpital Nachtigal d'{a}, l'hôpital de Lomé en {b} et le centre médical de Kpalimé en 1907. Le missionnaire Diedrich {c} écrit une grammaire de l'éwé, et la {d} est traduite en éwé.", mots: ["Aného", "1909", "Westermann", "Bible"] }],
    relier: [{ consigne: "Relie chaque ligne de chemin de fer (liste A) à sa longueur (liste B).", A: ["Lomé-Aného", "Lomé-Kpalimé", "Lomé-Agbonou"], B: ["44 km", "119 km", "167 km"] }],
    cours: [["Quelles cultures d'exportation les Allemands développent-ils au Togo ?", 1.5, "Trois au choix (0,5 pt chacune) : palmier à huile, cocotier, cacao, café, coton."],
      ["Quelles usines les Allemands créent-ils au Togo ?", 1.5, "L'égrenage du coton à Notsé (0,5 pt), le traitement du coprah à Kpémé (0,5 pt) et des palmistes à Agou (0,5 pt)."],
      ["Quelles réalisations allemandes concernent la poste et le télégraphe ?", 1, "Des bureaux de poste, à Aného (1888) et à Lomé (1890) (0,5 pt) ; des lignes télégraphiques et la station radio de Kamina (0,5 pt)."],
      ["Que deviennent l'école d'agriculture de Nuatja en 1912 et à quoi servait-elle ?", 1, "Elle devient un institut agricole (0,5 pt) ; elle servait surtout à répandre le coton (0,5 pt)."],
      ["Quelles élites togolaises les Allemands ont-ils formées ?", 1, "Deux au choix (0,5 pt chacune) : instituteurs, commis, catéchistes."],
      ["Quelles maladies les Allemands combattent-ils au Togo ?", 1, "La variole, par la vaccination (0,5 pt), et la maladie du sommeil (0,5 pt)."],
      ["Quels produits le Togo allemand exporte-t-il ?", 1, "Quatre au choix (0,25 pt chacun) : huile et amandes de palme, coprah, cacao, coton, café."]]
  },
  h3_6: {
    sit: [{
      texte: "Ton grand-père Mawuli a été instituteur au temps du Togo français. Il garde la carte ci-dessous et raconte souvent cette époque. Pour un exposé en classe, tu veux mettre ses souvenirs en ordre, mais tu dois d'abord expliquer comment le territoire était dirigé, puis ce que la France y a fait pour l'économie.",
      consignes: ["À l'aide de la carte, présente l'organisation administrative du Togo sous domination française.",
        "Fais le bilan de l'action économique de la France au Togo : agriculture, industrie, voies de communication et commerce."],
      doc: { titre: "Document : le Togo sous domination française", image: "images/epreuves/3e_h3_6.png" },
      prods: [{
        intro: "Pour un exposé fondé sur les souvenirs de mon grand-père Mawuli, je vais d'abord présenter, à l'aide de sa carte, l'organisation administrative du Togo sous domination française.",
        adresse: "Chers camarades,",
        support: "La carte : six cercles de 1921 (Lomé, Aného, Klouto, Atakpamé, Sokodé, Mango), capitale Lomé, limites avec la Haute-Volta, le Dahomey, le Togo britannique ; informations du document exploitées",
        indConsigne: "Présentation : statut (mandat, tutelle), superficie et limites ; administration centrale ; administration régionale et cantons",
        dev: ["D'abord, après la Première Guerre mondiale, la partie orientale du Togo est confiée à la France, sous mandat de la SDN (1922), puis sous tutelle de l'ONU (1946), jusqu'à l'indépendance en 1960. Le Togo français couvre 56 600 km² : c'est le Togo actuel. Il est limité au nord par la Haute-Volta (actuel Burkina Faso), au sud par l'océan Atlantique, à l'est par le Dahomey (actuel Bénin) et à l'ouest par le Togo britannique, rattaché ensuite à la Gold Coast.",
          "Ensuite, à la tête du territoire, un commissaire de la République représente le gouvernement français et dirige depuis Lomé, aidé d'un conseil privé formé des chefs des services et de notables nommés. Parmi les commissaires : Auguste Bonnecarrère (1922-1931), Léon Geismar, Jean Noutary (1945) et Georges Spénale, le dernier, jusqu'en 1960.",
          "Enfin, la carte montre que le territoire est divisé en six cercles : Lomé, Aného, Klouto, Atakpamé, Sokodé et Mango. Ils sont dirigés par des commandants de cercle et divisés en subdivisions. À la base, les cantons sont confiés à des chefs, comme Lawson V à Aného, Kalipé à Vogan, Ayéva à Sokodé ou Tchédré Palanga à Lama-Kara, chargés de maintenir l'ordre, de lever les impôts et de recruter la main-d'œuvre."],
        concl: "En définitive, le Togo français était dirigé depuis Lomé par un commissaire de la République, avec des cercles, des subdivisions et des cantons qui encadraient toute la population.",
        justesse: ["Statut : mandat de la SDN (1922), tutelle de l'ONU (1946) ; 56 600 km² ; limites : Haute-Volta, océan Atlantique, Dahomey, Togo britannique.", "Centre : commissaire de la République à Lomé, conseil privé ; Bonnecarrère, Geismar, Noutary, Spénale.", "Région : six cercles (Lomé, Aného, Klouto, Atakpamé, Sokodé, Mango), commandants, subdivisions ; cantons et leurs chefs (ordre, impôts, main-d'œuvre)."],
        concepts: "Mandat, tutelle, commissaire de la République, cercle, subdivision, canton, chef de canton."
      }, {
        intro: "Mon grand-père se souvient aussi des routes, des usines et des marchés de son temps. Je vais faire le bilan de l'action économique de la France au Togo.",
        adresse: "Chers camarades,",
        support: "La carte : chemin de fer prolongé d'Agbonou à Blitta, usines (égrenage, huilerie, fécule) à Lomé, Atakpamé, Kpalimé et Lama-Kara ; informations du document exploitées",
        indConsigne: "Bilan économique : agriculture ; industrie ; voies de communication et commerce ; économie au profit de la France",
        dev: ["D'abord, dans l'agriculture, la France crée les Sociétés indigènes de prévoyance (SIP) et des coopératives agricoles ; elle développe les cultures d'exportation, surtout dans le sud (cacao, café, coton, palmistes, kapok, karité, arachide) ; elle installe des paysans kabyè et nawdba entre Atakpamé et Sokodé pour mettre ces terres en valeur.",
          "Ensuite, dans l'industrie, elle construit des usines d'égrenage du coton (Lomé, Atakpamé, Kara…), la féculerie de manioc de Ganavé (1951) et l'huilerie d'Alokoegbé (1952), et crée la Compagnie togolaise des mines du Bénin (CTMB) pour exploiter les phosphates.",
          "Enfin, la route l'emporte sur le rail : de nombreuses routes (Sokodé-Mango, Atakpamé-Badou…) et des ponts, comme celui de la Kara, sont construits ; le chemin de fer est prolongé d'Atakpamé à Blitta (1934), comme le montre la carte ; l'aéroport de Lomé et les aérodromes d'Atakpamé et de Mango sont ouverts. Le commerce est dominé par de grandes compagnies (SCOA, CFAO, UAC…), même si quelques Togolais ont leurs maisons de commerce (Creppy, Lawson à Aného). L'économie reste tournée vers l'exportation de produits bruts, au profit de la France."],
        concl: "En définitive, la France a équipé le Togo en routes, en usines et en voies de communication, mais elle l'a surtout exploité au profit de sa propre économie.",
        justesse: ["Agriculture : SIP, coopératives ; cultures d'exportation (cacao, café, coton, palmistes, kapok, karité, arachide) ; installation de paysans kabyè et nawdba.", "Industrie : égrenage du coton, féculerie de Ganavé (1951), huilerie d'Alokoegbé (1952), CTMB (phosphates).", "Voies et commerce : routes et pont de la Kara, chemin de fer jusqu'à Blitta (1934), aéroport et aérodromes ; SCOA, CFAO, UAC ; maisons togolaises (Creppy, Lawson) ; exportation de produits bruts au profit de la France."],
        concepts: "Bilan, culture d'exportation, coopérative, industrie de transformation, voie de communication, compagnie coloniale."
      }]
    }],
    vf: [["Le Togo français correspond au Togo actuel.", true], ["Georges Spénale a été le dernier commissaire de la République au Togo.", true], ["La polyclinique de Lomé ouvre en 1933.", true], ["L'école des cheminots de Lomé ouvre en 1923.", true], ["Sous l'administration française, l'allemand reste la langue de l'école.", false, "Le français devient la langue de l'école."], ["Le cours normal d'Atakpamé devient l'ENI en 1951.", true]],
    choix: [["La léproserie du Togo français se trouvait à (Kolowaré / Ganavé / Tové).", "Kolowaré"], ["Le centre de lutte contre la trypanosomiase se trouvait à (Pagouda / Aného / Lomé).", "Pagouda"], ["L'huilerie d'Alokoegbé date de (1934 / 1951 / 1952).", "1952"], ["Le chef de canton de Vogan était (Kalipé / Ayéva / Lawson V).", "Kalipé"]],
    defs: [["Représentant du gouvernement français qui dirigeait le Togo depuis Lomé.", "le commissaire de la République"], ["Plus petite division administrative du Togo français, confiée à un chef.", "le canton"], ["Maladie du sommeil, combattue à Pagouda.", "la trypanosomiase"]],
    intrus: [[["Lomé", "Klouto", "Sokodé", "Kpémé"], "Kpémé", "ce n'était pas un cercle ; les autres étaient des cercles du Togo français."], [["SCOA", "CFAO", "UAC", "CTMB"], "CTMB", "elle exploitait les phosphates ; les autres étaient des compagnies de commerce."]],
    comp: [{ texte: "Le français devient la langue de l'école. La France crée des écoles de village, des écoles régionales et le cours complémentaire de {a}, des écoles professionnelles comme celle de {b} en 1922, et l'école d'agriculture de {c}. Les maîtres sont formés au cours normal d'Atakpamé et à l'ENI catholique de {d}.", mots: ["Lomé", "Sokodé", "Tové", "Togoville"] }],
    relier: [{ consigne: "Relie chaque chef de canton (liste A) à son canton (liste B).", A: ["Lawson V", "Kalipé", "Ayéva", "Tchédré Palanga"], B: ["Aného", "Vogan", "Sokodé", "Lama-Kara"] }],
    cours: [["Qui aide le commissaire de la République à diriger le territoire ?", 1, "Un conseil privé (0,5 pt), formé des chefs des services et de notables nommés (0,5 pt)."],
      ["Quelles sont les missions des chefs de canton ?", 1.5, "Maintenir l'ordre (0,5 pt), lever les impôts (0,5 pt) et recruter la main-d'œuvre (0,5 pt)."],
      ["Quelles grandes maladies l'administration française combat-elle ?", 1.5, "Le paludisme (0,5 pt), la variole (0,5 pt) et la maladie du sommeil (0,5 pt)."],
      ["Qu'est devenu l'hôpital de Lomé construit en 1954 ?", 0.5, "L'actuel CHU Sylvanus Olympio (0,5 pt)."],
      ["Cite deux usines construites par la France au Togo, avec leur date.", 1, "La féculerie de manioc de Ganavé (1951) (0,5 pt) ; l'huilerie d'Alokoegbé (1952) (0,5 pt)."],
      ["Montre que la route l'emporte sur le rail dans le Togo français.", 1, "On construit de nombreuses routes (Sokodé-Mango, Atakpamé-Badou…) et des ponts (0,5 pt) ; le chemin de fer est seulement prolongé d'Atakpamé à Blitta (1934) (0,5 pt)."],
      ["Pourquoi dit-on que les écoles et les hôpitaux servaient d'abord la colonie ?", 1, "Ils servaient à former (0,5 pt) et à garder en bonne santé les travailleurs utiles à la colonie (0,5 pt)."]]
  },
  h3_7: {
    sit: [{
      texte: "En classe, votre professeur projette la photographie ci-dessous. Ton camarade Elom s'étonne : « Pourquoi des pays d'Asie et d'Afrique se sont-ils réunis si loin de chez nous ? Et qu'est-ce que cela a à voir avec nos indépendances ? » Le professeur te demande de lui répondre.",
      consigne: "Explique à Elom, dans un texte d'une quinzaine de lignes, comment les facteurs externes, dont la conférence de Bandung, ont favorisé la décolonisation de l'Afrique après 1945.",
      doc: { titre: "Document : l'ouverture de la conférence de Bandung (18 avril 1955)", image: "images/h3_bandung.jpg", credit: "Ouverture de la conférence afro-asiatique de Bandung, 18 avril 1955 — photographie du gouvernement indonésien, domaine public, via Wikimedia Commons" },
      intro: "Mon camarade Elom ne comprend pas le lien entre la réunion de pays d'Asie et d'Afrique à Bandung et nos indépendances. Je vais lui expliquer comment les facteurs externes, dont la conférence de Bandung, ont favorisé la décolonisation de l'Afrique après 1945.",
      adresse: "Cher Elom,",
      support: "La photographie de l'ouverture de la conférence de Bandung, le 18 avril 1955 : délégués de pays d'Asie et d'Afrique réunis ; informations du document exploitées",
      indConsigne: "Texte d'une quinzaine de lignes : Seconde Guerre mondiale ; États-Unis, URSS et ONU ; conférence de Bandung ; panafricanisme",
      dev: ["D'abord, la Seconde Guerre mondiale a accéléré la décolonisation : les soldats africains qui y ont combattu ont découvert les faiblesses des Européens et ont réclamé l'égalité ; la France et le Royaume-Uni sont sortis affaiblis de la guerre, au profit des États-Unis et de l'URSS.",
        "Ensuite, ces deux grandes puissances, hostiles aux empires coloniaux, ont encouragé les luttes de libération. L'ONU, créée en 1945, a proclamé le droit des peuples à disposer d'eux-mêmes ; elle a servi de tribune aux revendications africaines et surveillé les territoires sous tutelle, comme le Togo.",
        "De plus, la photographie montre la conférence de Bandung, en Indonésie : du 18 au 24 avril 1955, 29 pays d'Asie et d'Afrique y ont condamné le colonialisme et affirmé la solidarité des peuples colonisés. C'est la naissance du « tiers-monde » : les colonisés savaient désormais qu'ils n'étaient pas seuls.",
        "Enfin, le panafricanisme, mouvement politique et culturel né chez les Noirs d'Amérique et des Antilles, défendait l'égalité et l'unité des Noirs ; au congrès de Manchester, en 1945, il a réclamé l'indépendance de l'Afrique. Le Ghana, indépendant en 1957, est devenu un exemple pour tout le continent."],
      concl: "En définitive, Elom, la guerre, les grandes puissances, l'ONU, Bandung et le panafricanisme ont créé un contexte mondial favorable : c'est pourquoi la décolonisation de l'Afrique s'accélère après 1945 et triomphe vers 1960.",
      justesse: ["Seconde Guerre mondiale : soldats africains qui réclament l'égalité ; France et Royaume-Uni affaiblis.", "États-Unis et URSS hostiles aux empires ; ONU (1945) : droit des peuples à disposer d'eux-mêmes, tribune, surveillance des territoires sous tutelle.", "Bandung (Indonésie), 18-24 avril 1955 : 29 pays d'Asie et d'Afrique, condamnation du colonialisme, solidarité, naissance du tiers-monde.", "Panafricanisme : égalité et unité des Noirs ; congrès de Manchester (1945) ; Ghana indépendant en 1957, exemple."],
      concepts: "Décolonisation, facteur externe, droit des peuples à disposer d'eux-mêmes, tiers-monde, panafricanisme, colonialisme."
    }],
    vf: [["La décolonisation est le processus par lequel les peuples colonisés accèdent à l'indépendance.", true], ["Le CUT était le parti de Félix Houphouët-Boigny.", false, "Le CUT était le parti de Sylvanus Olympio ; Houphouët-Boigny dirigeait le RDA."], ["La FEANF et la WASU étaient des associations d'étudiants africains en Europe.", true], ["Le Ghana est devenu indépendant en 1957.", true], ["29 pays ont participé à la conférence de Bandung.", true], ["Le panafricanisme est né en Europe chez les colons.", false, "Il est né chez les Noirs d'Amérique et des Antilles."]],
    choix: [["Les Indépendants d'outre-mer (IOM) étaient dirigés par (Léopold Sédar Senghor / Jomo Kenyatta / Sylvanus Olympio).", "Léopold Sédar Senghor"], ["La conférence de Bandung a eu lieu en (Inde / Indonésie / Égypte).", "Indonésie"], ["Le congrès panafricain de Manchester a lieu en (1945 / 1955 / 1957).", "1945"], ["L'UGTAN était (un syndicat / un parti / une association d'étudiants).", "un syndicat"]],
    defs: [["Ensemble des pays d'Asie et d'Afrique qui affirment leur solidarité à Bandung en 1955.", "le tiers-monde"], ["Mouvement qui défend l'égalité et l'unité des Noirs et réclame l'indépendance de l'Afrique.", "le panafricanisme"], ["Partis qui réclament des réformes, puis l'indépendance de leur pays.", "les partis nationalistes"]],
    intrus: [[["le RDA", "le CUT", "la KANU", "la FEANF"], "la FEANF", "c'est une association d'étudiants ; les autres sont des partis politiques."], [["la Seconde Guerre mondiale", "la conférence de Bandung", "l'ONU", "les grèves des syndicats"], "les grèves des syndicats", "c'est un facteur interne ; les autres sont des facteurs externes."]],
    comp: [{ texte: "La colonisation a créé elle-même les conditions de sa fin : l'école coloniale forme des {a}, instituteurs, médecins ou avocats, qui découvrent les idées de {b} et d'égalité. Les impôts, le travail {c} et les {d} provoquent la colère des colonisés.", mots: ["élites", "liberté", "forcé", "injustices"] }],
    relier: [{ consigne: "Relie chaque organisation (liste A) à son dirigeant ou à sa nature (liste B).", A: ["RDA", "IOM", "CUT", "KANU", "UGTAN"], B: ["Félix Houphouët-Boigny", "Léopold Sédar Senghor", "Sylvanus Olympio", "Jomo Kenyatta", "syndicat"] }],
    cours: [["Qu'ont réclamé les soldats africains de retour de la Seconde Guerre mondiale ?", 1, "L'égalité (0,5 pt), car ils avaient découvert les faiblesses des Européens (0,5 pt)."],
      ["Comment les syndicats ont-ils soutenu la lutte pour l'indépendance ? Donne un exemple.", 1, "Par des grèves (0,5 pt) ; exemple : l'UGTAN ou les producteurs de cacao de la Gold Coast (0,5 pt)."],
      ["Quel rôle ont joué les associations d'étudiants africains en Europe ? Cite-en une.", 1, "Elles dénoncent la colonisation et réclament l'indépendance (0,5 pt) ; la FEANF ou la WASU (0,5 pt)."],
      ["Comment l'ONU a-t-elle aidé les peuples colonisés ?", 1.5, "Elle proclame le droit des peuples à disposer d'eux-mêmes (0,5 pt), sert de tribune aux revendications africaines (0,5 pt) et surveille les territoires sous tutelle (0,5 pt)."],
      ["Pourquoi le Ghana est-il devenu un exemple pour l'Afrique ?", 1, "Il est devenu indépendant dès 1957 (0,5 pt), ce qui a montré à tout le continent que l'indépendance était possible (0,5 pt)."],
      ["Quelles puissances sortent affaiblies de la Seconde Guerre mondiale, et lesquelles en sortent renforcées ?", 2, "Affaiblies : la France (0,5 pt) et le Royaume-Uni (0,5 pt) ; renforcées : les États-Unis (0,5 pt) et l'URSS (0,5 pt)."],
      ["Quand la décolonisation de l'Afrique triomphe-t-elle ?", 0.5, "Vers 1960 (0,5 pt)."]]
  },
  h3_8: {
    sit: [{
      texte: "Pour la fête du 27 avril, le directeur de ton collège organise une cérémonie. Il te demande, en tant que meilleur élève d'histoire, de prononcer un discours sur la conquête de notre indépendance. Il place devant la tribune la photographie ci-dessous du « père de l'indépendance ».",
      consignes: ["Dans la première partie de ton discours, présente les débuts de la vie politique au Togo et les acteurs de la lutte anticoloniale.",
        "Dans la seconde partie, montre le rôle de l'ONU dans la décolonisation du Togo, jusqu'à la proclamation de l'indépendance."],
      doc: { titre: "Document : Sylvanus Olympio (1902-1963)", image: "images/h3_olympio.jpg", credit: "Sylvanus Olympio à la Maison-Blanche, 20 mars 1962 — photographie de R. L. Knudsen pour la Maison-Blanche, domaine public, via Wikimedia Commons" },
      prods: [{
        intro: "Pour la fête du 27 avril, je dois prononcer un discours sur la conquête de notre indépendance, devant la photographie de Sylvanus Olympio. Je vais d'abord présenter les débuts de la vie politique togolaise et les acteurs de la lutte anticoloniale.",
        adresse: "Monsieur le Directeur, chers professeurs, chers camarades,",
        support: "La photographie de Sylvanus Olympio (1902-1963), leader du CUT, premier ministre en 1958, qui proclame l'indépendance ; informations du document exploitées",
        indConsigne: "Discours, première partie : conférence de mai 1945 ; premiers partis et premières élections (1946) ; partis nationalistes et progressistes ; autres acteurs",
        dev: ["D'abord, notre vie politique commence avec la conférence des 11 et 12 mai 1945, réunie à Lomé par le commissaire Jean Noutary pour appliquer les décisions de la conférence de Brazzaville. Les délégués refusent de devenir Français : « Nous sommes Togolais ». En 1946 naissent le CUT et le PTP ; le 10 novembre 1946, Martin Aku (CUT) est élu député du Togo à l'Assemblée nationale française et, le 8 décembre, le CUT gagne les élections de l'Assemblée représentative, que préside Sylvanus Olympio, l'homme de la photographie.",
          "Ensuite, deux camps s'opposent. Les nationalistes veulent une indépendance rapide : le CUT (Comité de l'unité togolaise) de Sylvanus Olympio et d'Augustino de Souza, et la JUVENTO, créée en 1951, avec Messan Aithson, Firmin Abalo et Ben Apaloo. Les progressistes, proches de la France, sont le PTP (Parti togolais du progrès) de Nicolas Grunitzky et de Robert Ajavon, et l'UCPN (Union des chefs et des populations du Nord) de Mama Fousseni et d'Antoine Méatchi.",
          "Enfin, d'autres acteurs ont pris part à la lutte : les chefs traditionnels, chefs de canton et de village, les commerçantes de Lomé, les syndicats et les associations d'élèves et d'étudiants."],
        concl: "En définitive, dès 1945, les Togolais ont affirmé leur identité et se sont organisés en partis et en associations pour réclamer leur liberté.",
        justesse: ["Conférence des 11 et 12 mai 1945 (Jean Noutary, suite de Brazzaville) : « Nous sommes Togolais ».", "1946 : naissance du CUT et du PTP ; Martin Aku député (10 novembre) ; victoire du CUT à l'Assemblée représentative (8 décembre), présidée par Olympio.", "Nationalistes : CUT (Olympio, de Souza), JUVENTO (1951 ; Aithson, Abalo, Apaloo) ; progressistes : PTP (Grunitzky, Ajavon), UCPN (Mama Fousseni, Méatchi).", "Autres acteurs : chefs traditionnels, commerçantes de Lomé, syndicats, associations d'élèves et d'étudiants."],
        concepts: "Vie politique, parti politique, nationaliste, progressiste, élection, député, lutte anticoloniale."
      }, {
        intro: "Pour la seconde partie de mon discours, je vais montrer le rôle décisif de l'ONU dans la décolonisation du Togo, jusqu'à la proclamation de l'indépendance.",
        adresse: "Monsieur le Directeur, chers professeurs, chers camarades,",
        support: "La photographie de Sylvanus Olympio, qui a plaidé devant l'ONU à New York ; informations du document exploitées",
        indConsigne: "Discours, seconde partie : statut de territoire sous tutelle ; actions de l'ONU (surveillance, pétitions, missions, plébiscite, refus du référendum, mission King, élections de 1958) ; indépendance du 27 avril 1960",
        dev: ["D'abord, le Togo était un territoire sous tutelle : l'ONU surveillait donc l'administration française et recevait les pétitions des Togolais. Dès 1947, Sylvanus Olympio est allé plaider notre cause devant elle, à New York. Elle envoyait aussi des missions de visite au Togo.",
          "Ensuite, en 1956, l'ONU organise le plébiscite du Togo britannique, qui choisit le rattachement à la Gold Coast. La même année, la France proclame la République autonome du Togo (30 août 1956), avec Nicolas Grunitzky comme Premier ministre, et fait approuver ce statut par le référendum du 28 octobre 1956 ; mais l'ONU refuse de le reconnaître et envoie la mission King (1957).",
          "Enfin, l'ONU fait superviser les élections du 27 avril 1958 : le CUT et la JUVENTO les gagnent avec 29 sièges sur 46, et Sylvanus Olympio devient Premier ministre. La voie est ouverte : le 27 avril 1960, il proclame l'indépendance du Togo."],
        concl: "En définitive, grâce à la lutte des nationalistes et à l'appui de l'ONU, le Togo a conquis son indépendance le 27 avril 1960 : c'est ce que nous fêtons aujourd'hui. Vive le Togo indépendant !",
        justesse: ["Territoire sous tutelle : surveillance de l'administration française, pétitions (Olympio à New York dès 1947), missions de visite.", "1956 : plébiscite du Togo britannique (rattachement à la Gold Coast) ; refus de reconnaître le référendum du 28 octobre 1956 sur la République autonome ; mission King (1957).", "Élections du 27 avril 1958 sous contrôle de l'ONU : CUT et JUVENTO 29 sièges sur 46, Olympio Premier ministre ; indépendance le 27 avril 1960."],
        concepts: "Territoire sous tutelle, ONU, pétition, plébiscite, référendum, élection, indépendance."
      }]
    }],
    vf: [["La conférence de Lomé de mai 1945 devait appliquer les décisions de la conférence de Brazzaville.", true], ["La JUVENTO a été créée en 1951.", true], ["L'UCPN était un parti nationaliste du sud.", false, "L'UCPN (Union des chefs et des populations du Nord) était un parti progressiste, proche de la France."], ["Le 17 juin 1951, Nicolas Grunitzky remplace Martin Aku comme député.", true], ["En 1955, les nationalistes boycottent les élections.", true], ["Le plébiscite de 1956 rattache le Togo britannique à la France.", false, "Le Togo britannique choisit le rattachement à la Gold Coast."]],
    choix: [["Le premier député du Togo à l'Assemblée nationale française, élu en 1946, est (Martin Aku / Nicolas Grunitzky / Robert Ajavon).", "Martin Aku"], ["La République autonome du Togo est proclamée le 30 août (1955 / 1956 / 1958).", "1956"], ["Aux élections de 1958, le CUT et la JUVENTO obtiennent (29 / 23 / 46) sièges.", "29"], ["Mama Fousseni devient conseiller de (l'Union française / la République / l'ONU).", "l'Union française"]],
    defs: [["Vote par lequel la population d'un territoire choisit son avenir, comme celui du Togo britannique en 1956.", "le plébiscite"], ["Demande écrite adressée à une autorité, comme celles que les Togolais envoyaient à l'ONU.", "une pétition"], ["Partis togolais proches de la France, comme le PTP et l'UCPN.", "les partis progressistes"]],
    intrus: [[["Sylvanus Olympio", "Augustino de Souza", "Ben Apaloo", "Nicolas Grunitzky"], "Nicolas Grunitzky", "il était progressiste (PTP) ; les autres étaient nationalistes."], [["le CUT", "la JUVENTO", "le PTP", "la KANU"], "la KANU", "c'est un parti du Kenya ; les autres sont des partis togolais."]],
    comp: [{ texte: "Le 30 août 1956, la République autonome du Togo est proclamée, avec Nicolas {a} comme Premier ministre. L'ONU refuse de reconnaître le {b} du 28 octobre 1956 et envoie la mission {c}. Le 27 avril {d}, Sylvanus Olympio proclame l'indépendance.", mots: ["Grunitzky", "référendum", "King", "1960"] }],
    ordre: [{ consigne: "Range ces événements dans l'ordre chronologique.", elements: ["élection de Martin Aku comme député", "remplacement de Martin Aku par Nicolas Grunitzky", "proclamation de la République autonome du Togo", "envoi de la mission King", "élections du 27 avril 1958", "proclamation de l'indépendance"] }],
    cours: [["Qui a convoqué la conférence de Lomé de mai 1945 et dans quel but ?", 1, "Le commissaire Jean Noutary (0,5 pt), pour appliquer les décisions de la conférence de Brazzaville (0,5 pt)."],
      ["Que se passe-t-il le 8 décembre 1946 ?", 1, "Le CUT remporte les élections de l'Assemblée représentative (0,5 pt), dont Sylvanus Olympio devient président (0,5 pt)."],
      ["Qui sont les dirigeants de la JUVENTO ?", 1.5, "Messan Aithson (0,5 pt), Firmin Abalo (0,5 pt) et Ben Apaloo (0,5 pt)."],
      ["Quels postes Robert Ajavon et Mama Fousseni obtiennent-ils en 1952-1953 ?", 1, "Robert Ajavon devient conseiller de la République (0,5 pt) ; Mama Fousseni, conseiller de l'Union française (0,5 pt)."],
      ["Que font les nationalistes face à la réforme des institutions de 1955 ?", 0.5, "Ils boycottent les élections (0,5 pt)."],
      ["Comment l'ONU réagit-elle au référendum de 1956, et que fait-elle ensuite ?", 1.5, "Elle refuse de le reconnaître (0,5 pt), envoie la mission King en 1957 (0,5 pt), puis fait superviser les élections du 27 avril 1958 (0,5 pt)."],
      ["Qui sont les dirigeants du PTP ?", 1, "Nicolas Grunitzky (0,5 pt) et Robert Ajavon (0,5 pt)."]]
  },
  h3_9: {
    sit: [{
      texte: "La grand-mère de ton ami Edem vit à Kpalimé, mais une partie de sa famille habite Ho, au Ghana. Elle dit souvent : « Avant, nous étions un seul pays ; c'est la guerre des Blancs qui nous a coupés en deux. » Edem ne comprend pas ce qu'elle veut dire et te montre la carte de son livre d'histoire.",
      consigne: "À l'aide de la carte, explique à Edem comment le Togo a été partagé après la Première Guerre mondiale, puis présente-lui les autres conséquences de cette guerre au Togo.",
      doc: { titre: "Document : les partages du Togo allemand (1914-1922)", image: "images/epreuves/3e_h3_9.png" },
      intro: "La grand-mère de mon ami Edem, qui vit à Kpalimé, a de la famille à Ho, au Ghana, et dit que la guerre a coupé le pays en deux. À l'aide de la carte, je vais expliquer à Edem comment le Togo a été partagé après la Première Guerre mondiale, puis lui présenter les autres conséquences de cette guerre au Togo.",
      adresse: "Cher Edem,",
      support: "La carte : Togo britannique et Togo français, zone occupée par les Britanniques en 1914 et rendue à la France en 1919, limite du Togo allemand ; Kpalimé, Ho, Kpando, Kete-Krachi, Lomé ; dates 27 août 1914, 10 juillet 1919, 1922 ; informations du document exploitées",
      indConsigne: "Explication à Edem : les trois étapes du partage (1914, 1919, 1922) à l'aide de la carte ; autres conséquences (morts, destructions, départ des Allemands, familles séparées)",
      dev: ["D'abord, en août 1914, la Première Guerre mondiale atteint le Togo, alors colonie allemande. Les troupes britanniques de la Gold Coast et françaises du Dahomey l'attaquent, et les Allemands capitulent le 26 août. Dès le 27 août 1914, les vainqueurs font un partage provisoire selon les zones qu'ils occupent : Lomé, Misahöhe (Kpalimé) et Kete-Krachi aux Britanniques ; Aného, Atakpamé, Sokodé et Mango aux Français.",
        "Ensuite, le 10 juillet 1919, un accord franco-britannique fixe une nouvelle frontière : la France obtient Lomé et le Kloto, c'est la zone hachurée de la carte, rendue à la France en 1919 ; Ho, Kpando et l'ouest restent britanniques. Enfin, en 1922, la SDN confie le Togo en mandat à la France, à l'est, et au Royaume-Uni, à l'ouest. C'est pourquoi Kpalimé est au Togo et Ho au Ghana : le Togo britannique a ensuite été rattaché à la Gold Coast.",
        "Enfin, la guerre a eu d'autres conséquences : des morts et des blessés ; des destructions, comme la station radio de Kamina, dynamitée par les Allemands eux-mêmes, et le pont sur l'Amou ; le départ des Allemands ; et surtout des familles séparées par la nouvelle frontière entre Togo français et Togo britannique, comme celle de ta grand-mère."],
      concl: "En définitive, Edem, ta grand-mère a raison : la guerre de 1914, brève mais lourde de conséquences, a fait naître deux Togo et séparé des familles qui vivaient ensemble.",
      justesse: ["27 août 1914 : partage provisoire (Lomé, Misahöhe, Kete-Krachi aux Britanniques ; Aného, Atakpamé, Sokodé, Mango aux Français).", "10 juillet 1919 : accord franco-britannique (Lomé et le Kloto à la France ; Ho, Kpando et l'ouest aux Britanniques).", "1922 : mandats de la SDN (France à l'est, Royaume-Uni à l'ouest).", "Autres conséquences : morts et blessés ; destructions (Kamina, pont sur l'Amou) ; départ des Allemands ; familles séparées."],
      concepts: "Guerre mondiale, capitulation, partage, accord, mandat, SDN, frontière."
    }],
    vf: [["Le Togo allemand était entouré de colonies alliées.", true], ["Au début d'août 1914, le gouverneur par intérim von Doering propose la neutralité de la colonie.", true], ["Les Alliés acceptent la neutralité du Togo.", false, "Les Alliés refusent la neutralité proposée par von Doering."], ["Le 7 août 1914, les Allemands abandonnent Lomé.", true], ["La station de Kamina est détruite par les Britanniques.", false, "Elle est dynamitée par les Allemands eux-mêmes, dans la nuit du 24 au 25 août."], ["La capitulation allemande au Togo est la première victoire des Alliés dans la guerre.", true]],
    choix: [["Les Allemands capitulent au Togo le (7 / 22 / 26) août 1914.", "26"], ["Le combat de Chra a lieu sur (l'Amou / le Mono / le Zio).", "l'Amou"], ["La station de Kamina reliait Berlin aux navires allemands de (l'Atlantique Sud / l'océan Indien / la Méditerranée).", "l'Atlantique Sud"], ["Les troupes françaises qui attaquent le Togo viennent (du Dahomey / de la Gold Coast / du Niger).", "du Dahomey"]],
    defs: [["Fait de se rendre à l'ennemi et de cesser le combat.", "la capitulation"], ["Paix réduite à la simple absence de conflit.", "la paix passive"], ["Ensemble des actions qui rendent la vie meilleure pour tous.", "la paix active"]],
    intrus: [[["Lomé", "Misahöhe", "Kete-Krachi", "Atakpamé"], "Atakpamé", "elle revient aux Français en 1914 ; les autres reviennent aux Britanniques."], [["Gandhi", "Martin Luther King", "Nelson Mandela", "von Doering"], "von Doering", "c'est un gouverneur allemand ; les autres sont des modèles de paix."]],
    comp: [{ texte: "Le 15 août 1914 a lieu le combat d'{a}, et le 22 août celui de {b}, sur l'Amou. Dans la nuit du 24 au 25 août, la station de {c} est dynamitée. Le 26 août, les Allemands {d}.", mots: ["Agbéluvhoé", "Chra", "Kamina", "capitulent"] }],
    ordre: [{ consigne: "Range ces événements de la guerre au Togo dans l'ordre chronologique.", elements: ["proposition de neutralité de von Doering", "abandon de Lomé par les Allemands", "combat d'Agbéluvhoé", "combat de Chra", "destruction de la station de Kamina", "capitulation allemande"] }],
    cours: [["Pourquoi les Alliés convoitaient-ils le Togo allemand ? Donne deux raisons.", 1, "Deux au choix (0,5 pt chacune) : enlever le Togo à l'Allemagne (cause politique) ; s'emparer de cette « colonie modèle » (cause économique) ; détruire la station de Kamina (cause stratégique)."],
      ["Quels officiers commandaient les troupes britanniques et françaises en 1914 ?", 1, "Bryant pour les Britanniques de la Gold Coast (0,5 pt) ; Maroix pour les Français du Dahomey (0,5 pt)."],
      ["Où se replient les Allemands après avoir abandonné Lomé ?", 0.5, "Vers Kamina (0,5 pt)."],
      ["Cite quatre valeurs sur lesquelles repose la paix.", 2, "Quatre au choix (0,5 pt chacune) : vérité, justice, tolérance, écoute, maîtrise de soi, acceptation des différences, égalité entre filles et garçons, coopération, esprit critique, non-violence."],
      ["Comment une bonne gestion des affaires publiques et de l'économie favorise-t-elle la paix ?", 1, "Gérer les affaires publiques de façon transparente (0,5 pt) et l'économie de façon honnête évite les injustices et les conflits (0,5 pt)."],
      ["Quelles attitudes chacun doit-il pratiquer dans la vie en collectivité ?", 1, "Le vivre-ensemble, la politesse (0,5 pt), la civilité et le civisme (0,5 pt)."],
      ["Pourquoi faut-il refuser la guerre ?", 1.5, "Elle détruit des vies (0,5 pt) et des biens (0,5 pt) ; au Togo, elle a aussi séparé des familles (0,5 pt)."]]
  },
  h3_10: {
    sit: [{
      texte: "Dans ta classe de 3e, deux groupes ne se parlent plus depuis un match de football perdu : ils s'accusent l'un l'autre de la défaite. De plus, ils refusent de prendre dans leur équipe votre camarade Fousséni, qui marche avec des béquilles. Le professeur principal, inquiet, te demande, à toi le délégué de classe, de prendre la parole (document).",
      consignes: ["Explique à tes camarades ce qu'est un conflit et propose-leur une manière pacifique de régler celui qui divise la classe.",
        "Montre-leur ensuite ce qu'est une société inclusive et ce qui fait la cohésion sociale, puis ce que chacun peut faire pour que personne ne soit exclu."],
      doc: { titre: "Document : la note du professeur principal", texte: "« Depuis le match, la classe est coupée en deux : on s'insulte dans la cour et plus personne ne travaille en groupe. Et j'ai appris que Fousséni est toujours laissé de côté, parce qu'il marche avec des béquilles. Cela ne peut pas continuer. Délégué, prépare une intervention pour vendredi. »" },
      prods: [{
        intro: "Depuis un match perdu, deux groupes de ma classe s'accusent et ne se parlent plus. Comme délégué, je vais expliquer à mes camarades ce qu'est un conflit et leur proposer une manière pacifique de régler celui qui nous divise.",
        adresse: "Chers camarades,",
        support: "La note du professeur principal : classe coupée en deux depuis le match, insultes dans la cour, plus de travail en groupe ; informations du document exploitées",
        indConsigne: "Définition du conflit ; conflit intrapersonnel et intragroupe ; moyens pacifiques (écoute, dialogue, compromis, médiation, refus de la violence) appliqués à la classe",
        dev: ["D'abord, un conflit est un désaccord. Le conflit intrapersonnel se passe à l'intérieur d'une personne, partagée entre deux choix ; le conflit intragroupe oppose des membres d'un même groupe, comme une famille, une équipe ou une classe. Le nôtre est donc un conflit intragroupe : comme le dit le professeur, la classe est coupée en deux depuis le match.",
          "Ensuite, ce conflit peut se régler sans violence. Il faut d'abord s'écouter : chaque groupe dira ce qu'il reproche à l'autre, sans insultes. Il faut ensuite dialoguer et chercher un compromis : la défaite est celle de toute l'équipe, pas d'un seul groupe.",
          "Enfin, si nous n'y arrivons pas seuls, nous ferons appel à un médiateur, par exemple notre professeur principal. Mais une règle doit être respectée par tous : jamais de violence."],
        concl: "En définitive, notre désaccord n'est qu'un conflit intragroupe : en nous écoutant et en dialoguant, nous pouvons le régler et retrouver une classe unie.",
        justesse: ["Conflit : désaccord ; intrapersonnel (deux choix chez une personne) ; intragroupe (membres d'un même groupe).", "Le conflit de la classe est intragroupe.", "Moyens pacifiques : écouter, dialoguer, chercher un compromis, faire appel à un médiateur, ne jamais recourir à la violence."],
        concepts: "Conflit, conflit intrapersonnel, conflit intragroupe, dialogue, compromis, médiation, non-violence."
      }, {
        intro: "Le professeur principal signale aussi que Fousséni est toujours laissé de côté parce qu'il marche avec des béquilles. Je vais montrer à mes camarades ce qu'est une société inclusive et ce qui fait la cohésion sociale, puis ce que chacun peut faire pour que personne ne soit exclu.",
        adresse: "Chers camarades,",
        support: "La note : Fousséni laissé de côté à cause de ses béquilles ; la classe divisée ; informations du document exploitées",
        indConsigne: "Société inclusive (définition, valeurs) ; cohésion sociale (fondements) ; actions de chacun contre l'exclusion",
        dev: ["D'abord, une société inclusive est une société qui n'exclut personne : ni les personnes handicapées, comme Fousséni, ni les pauvres, ni les minorités. Elle repose sur l'équité, l'égalité, la justice sociale, le respect des droits et libertés, la tolérance et l'acceptation de la diversité.",
          "Ensuite, la cohésion sociale repose sur de bonnes relations entre les personnes, sur l'entraide, car nous dépendons les uns des autres, sur le souci du bien commun et sur l'égalité de tous ; la bonne gouvernance et le respect des droits humains la renforcent. Une classe coupée en deux, où l'on s'insulte, a perdu sa cohésion.",
          "Enfin, chacun peut agir : accueillir Fousséni dans les équipes et dans les groupes de travail, en adaptant les jeux pour qu'il y participe ; refuser les moqueries ; s'entraider ; et refuser toute violence, car l'extrémisme violent commence quand on veut imposer ses idées par la force."],
        concl: "En définitive, une classe inclusive et unie, où personne n'est laissé de côté, prépare une société de paix : commençons dès vendredi avec Fousséni.",
        justesse: ["Société inclusive : n'exclut personne (handicapés, pauvres, minorités) ; équité, égalité, justice sociale, droits et libertés, tolérance, acceptation de la diversité.", "Cohésion sociale : bonnes relations, entraide, bien commun, égalité ; renforcée par la bonne gouvernance et les droits humains.", "Actions : inclure Fousséni, refuser moqueries et violence, s'entraider ; refus de l'extrémisme violent."],
        concepts: "Société inclusive, exclusion, équité, cohésion sociale, entraide, bien commun, tolérance."
      }]
    }],
    vf: [["L'ONU a été créée en 1945.", true], ["Le Conseil de sécurité compte 15 membres.", true], ["Le secrétaire général de l'ONU est élu pour 10 ans.", false, "Il est élu pour 5 ans."], ["La Cour internationale de justice siège à La Haye.", true], ["La SDN a su empêcher la Seconde Guerre mondiale.", false, "La SDN, créée en 1919, n'a pas su empêcher la Seconde Guerre mondiale."], ["Le Conseil de tutelle surveillait les territoires sous tutelle, comme le Togo.", true]],
    choix: [["La Charte des Nations unies est signée le 26 juin 1945 à (San Francisco / Yalta / New York).", "San Francisco"], ["L'ONU rassemble aujourd'hui (50 / 193 / 215) États.", "193"], ["Le secrétaire général de l'ONU depuis 2017 est (Kofi Annan / António Guterres / Boutros Boutros-Ghali).", "António Guterres"], ["Le FMI s'occupe de (la monnaie / la santé / l'enfance).", "la monnaie"]],
    defs: [["Droit des membres permanents du Conseil de sécurité de bloquer une décision.", "le droit de veto"], ["Soldats de l'ONU chargés de maintenir ou de rétablir la paix.", "les Casques bleus"], ["Conflit qui oppose des membres d'un même groupe.", "le conflit intragroupe"]],
    intrus: [[["l'UNESCO", "l'OMS", "la FAO", "la SDN"], "la SDN", "c'est l'organisation qui a précédé l'ONU ; les autres sont des institutions spécialisées de l'ONU."], [["les États-Unis", "la Chine", "la Russie", "le Ghana"], "le Ghana", "il n'est pas membre permanent du Conseil de sécurité."]],
    comp: [{ texte: "Pendant la guerre, les Alliés préparent l'ONU à l'initiative du président américain {a} : Charte de l'{b} (1941), Déclaration des Nations unies (1942), conférences de {c} et de San Francisco. L'ONU naît officiellement le {d} octobre 1945.", mots: ["Roosevelt", "Atlantique", "Yalta", "24"] }],
    relier: [{ consigne: "Relie chaque organisme (liste A) à son domaine (liste B).", A: ["le PNUD", "le PAM", "la Banque mondiale", "le Conseil économique et social", "la Cour internationale de justice"], B: ["le développement", "l'aide alimentaire", "la lutte contre la pauvreté", "la coordination de l'action économique et sociale", "les différends entre États"] }],
    cours: [["Quels sont les buts de l'ONU ?", 1.5, "Maintenir la paix et la sécurité (0,5 pt), défendre les droits humains (0,5 pt) et développer la coopération entre les pays (0,5 pt)."],
      ["Cite les deux Africains qui ont été secrétaires généraux de l'ONU, avec leur pays.", 1, "Boutros Boutros-Ghali, Égypte (0,5 pt) ; Kofi Annan, Ghana (0,5 pt)."],
      ["Cite deux massacres que l'ONU n'a pas pu empêcher.", 1, "Le Rwanda, 1994 (0,5 pt) ; Srebrenica, 1995 (0,5 pt)."],
      ["Comment l'ONU règle-t-elle les conflits ?", 1.5, "Par la diplomatie (médiation, négociations) (0,5 pt), par les sanctions (0,5 pt) et par les Casques bleus (0,5 pt)."],
      ["Qu'est-ce qu'un conflit intrapersonnel ?", 1, "Un conflit qui se passe à l'intérieur d'une personne (0,5 pt), partagée entre deux choix (0,5 pt)."],
      ["Sur quoi repose la cohésion sociale ?", 1, "Quatre éléments au choix (0,25 pt chacun) : de bonnes relations, l'entraide, le souci du bien commun, l'égalité de tous."],
      ["Cite deux pays où l'ONU a envoyé des missions de paix.", 1, "Deux au choix (0,5 pt chacun) : Centrafrique, RD Congo, Soudan du Sud."]]
  },
  h3_11: {
    sit: [{
      texte: "Ton cousin Kossi, né en France de parents togolais, passe ses vacances à Lomé. Il remarque qu'on parle chez vous l'éwé, le kabyè, le tem et bien d'autres langues, et il demande : « Comment tous ces peuples différents sont-ils devenus un seul peuple, et comment font-ils pour vivre ensemble ? » De retour en France, il t'écrit pour que tu lui répondes. Ta grand-mère t'a confié le souvenir ci-dessous.",
      consigne: "Écris à Kossi une lettre dans laquelle tu lui expliques ce que sont un peuple, une nation et le peuple togolais, comment est né le peuple togolais, et comment nous pouvons promouvoir le vivre-ensemble.",
      doc: { titre: "Document : le souvenir de grand-mère", texte: "« Dans ma classe, il y avait des enfants de partout : des Éwé, des Kabyè, des Tem, des Moba… Nous apprenions la même langue à l'école, nous obéissions au même commandant. Plus tard, nous avons crié ensemble pour l'indépendance. C'est là que j'ai compris que nous étions tous Togolais. »" },
      intro: "Mon cousin Kossi, né en France, se demande comment les nombreux peuples du Togo sont devenus un seul peuple et comment ils vivent ensemble. À partir du souvenir de ma grand-mère, je vais lui expliquer ce que sont un peuple, une nation et le peuple togolais, comment est né le peuple togolais, et comment promouvoir le vivre-ensemble.",
      adresse: "Cher Kossi,",
      support: "Le souvenir de grand-mère : enfants de peuples différents dans la même classe, même langue à l'école, même commandant, lutte commune pour l'indépendance, conscience d'être Togolais ; informations du document exploitées",
      indConsigne: "Lettre à Kossi : définitions (peuple, nation, peuple togolais) ; naissance du peuple togolais (colonisation, lutte pour l'indépendance, nation en devenir) ; actions pour le vivre-ensemble",
      dev: ["D'abord, un peuple est un ensemble de personnes qui vivent sur un même territoire, ont en commun des coutumes et des institutions et obéissent aux mêmes lois. Une nation est un peuple qui a conscience de former une communauté, unie par une histoire, une culture, parfois une langue, et par la volonté de vivre ensemble. Le peuple togolais, c'est l'ensemble des personnes qui habitent le Togo et sont soumises aux mêmes lois, quelle que soit leur ethnie.",
        "Ensuite, le peuple togolais est né de la colonisation, à partir de 1884 : en traçant les frontières du Togo, les colonisateurs ont réuni des peuples différents dans un même territoire. La colonisation les a rapprochés : une même administration, des chefs supérieurs, les écoles, les nouvelles religions, la médecine moderne, les cultures de rente. Grand-mère le raconte : à l'école, des Éwé, des Kabyè, des Tem et des Moba apprenaient la même langue et obéissaient au même commandant. Puis la lutte commune pour l'indépendance, avec ses partis et ses associations, a renforcé la conscience d'être Togolais. Depuis 1960, la construction de la nation se poursuit : c'est une nation en devenir.",
        "Enfin, pour vivre ensemble malgré nos différences, nous devons renforcer l'entente entre les groupes ethniques : respecter la culture des autres, refuser le tribalisme et les préjugés, travailler et vivre ensemble, participer aux fêtes des autres communautés et sensibiliser notre entourage par des causeries, des sketches ou des affiches."],
      concl: "En définitive, cher Kossi, nos peuples sont devenus le peuple togolais grâce à une histoire commune ; c'est en vivant ensemble dans le respect que nous construisons, jour après jour, notre nation.",
      signature: "Ton cousin de Lomé.",
      justesse: ["Peuple : même territoire, coutumes, institutions, lois ; nation : conscience d'une communauté (histoire, culture, langue, volonté de vivre ensemble) ; peuple togolais : habitants du Togo soumis aux mêmes lois, quelle que soit l'ethnie.", "Naissance : colonisation dès 1884 (frontières, administration, chefs supérieurs, écoles, religions, médecine, cultures de rente) ; lutte commune pour l'indépendance ; nation en devenir depuis 1960.", "Vivre-ensemble : respect des cultures, refus du tribalisme et des préjugés, vie et travail en commun, fêtes des autres communautés, sensibilisation (causeries, sketches, affiches)."],
      concepts: "Peuple, nation, peuple togolais, ethnie, colonisation, nation en devenir, vivre-ensemble, tribalisme."
    }],
    vf: [["Une nation est un peuple qui a conscience de former une communauté.", true], ["La colonisation a rapproché les peuples du Togo par une même administration et par l'école.", true], ["Depuis 1960, la construction de la nation togolaise est terminée.", false, "Elle se poursuit : le Togo est une nation en devenir."], ["Les groupes extrémistes recrutent surtout des jeunes sans emploi, isolés, qui se sentent exclus.", true], ["L'extrémisme violent consiste à imposer des idées radicales par la violence.", true], ["Pour prévenir l'extrémisme violent, il suffit d'envoyer l'armée.", false, "Il faut agir sur les causes : éducation, emploi des jeunes, justice, bonne gouvernance, dialogue, participation de tous, activités pour les jeunes."]],
    choix: [["Le peuple togolais naît de la colonisation, à partir de (1884 / 1914 / 1960).", "1884"], ["Les groupes armés venus du Sahel attaquent des villages des Savanes depuis (2011 / 2021 / 1960).", "2021"], ["Refuser les préjugés et le tribalisme permet de promouvoir (le vivre-ensemble / l'extrémisme / l'exclusion).", "le vivre-ensemble"], ["Signaler les comportements suspects se fait auprès (des autorités / des groupes armés / des réseaux sociaux).", "des autorités"]],
    defs: [["Ensemble des personnes qui vivent sur un même territoire, ont des coutumes et des institutions communes et obéissent aux mêmes lois.", "un peuple"], ["Fait d'adopter des idées radicales et de vouloir les imposer par la violence.", "l'extrémisme violent"], ["Nation dont la construction n'est pas achevée.", "une nation en devenir"]],
    intrus: [[["les attentats", "les enlèvements", "les discours de haine", "les causeries"], "les causeries", "c'est un moyen de sensibilisation ; les autres sont des actes de l'extrémisme violent."], [["l'éducation", "l'emploi des jeunes", "la bonne gouvernance", "le tribalisme"], "le tribalisme", "c'est une menace pour la nation ; les autres sont des alternatives pour prévenir l'extrémisme violent."]],
    comp: [{ texte: "La colonisation a rapproché les peuples du Togo : même {a}, chefs supérieurs, écoles, nouvelles {b}, médecine moderne. La lutte commune pour l'{c} a renforcé la {d} d'être Togolais.", mots: ["administration", "religions", "indépendance", "conscience"] }],
    classer: [{ consigne: "Classe ces éléments selon qu'ils menacent la nation ou qu'ils la renforcent.", cats: ["menacent la nation", "renforcent la nation"], elts: [["le tribalisme", 0], ["les préjugés", 0], ["les discours de haine", 0], ["la participation aux fêtes des autres communautés", 1], ["le dialogue entre les religions", 1], ["l'emploi des jeunes", 1], ["le respect de la culture des autres", 1]] }],
    cours: [["Comment les colonisateurs ont-ils réuni des peuples différents dans un même territoire ?", 1, "En traçant les frontières du Togo (1 pt)."],
      ["Cite trois éléments de la colonisation qui ont rapproché les peuples du Togo.", 1.5, "Trois au choix (0,5 pt chacun) : même administration, chefs supérieurs, écoles, nouvelles religions, médecine moderne, cultures de rente."],
      ["Qu'est-ce que le peuple togolais ?", 1, "L'ensemble des personnes qui habitent le Togo et sont soumises aux mêmes lois (0,5 pt), quelle que soit leur ethnie (0,5 pt)."],
      ["Quelle région du Togo est attaquée par des groupes armés depuis 2021 ?", 0.5, "La région des Savanes (0,5 pt)."],
      ["Que doit faire chacun face à quelqu'un qui veut l'embrigader dans un groupe extrémiste ?", 1, "Refuser la haine et ne pas se laisser embrigader (0,5 pt) ; signaler les comportements suspects aux autorités (0,5 pt)."],
      ["Cite quatre alternatives pour prévenir l'extrémisme violent.", 2, "Quatre au choix (0,5 pt chacune) : l'éducation et la formation, l'emploi des jeunes, la justice et la bonne gouvernance, le dialogue entre communautés et entre religions, la participation de tous, les activités sportives et culturelles."],
      ["Qu'est-ce qui unit une nation ?", 1, "Une histoire, une culture, parfois une langue (0,5 pt) et la volonté de vivre ensemble (0,5 pt)."]]
  }
};

// Situations à deux consignes déjà en réserve (01/11/2026) : un document par consigne.
// Chaque situation reçoit un second document ; le texte, les consignes et les indices « conforme au support » renvoient au bon document.
// remplacements : [n° de production, ancien passage du développement, nouveau passage] (chaque passage doit exister une seule fois).
(function () {
  const S = (id) => EPREUVES_3E[id].sit[0];
  const deuxDocs = (id, docs, texte, consignes, supports, remplacements) => {
    const s = S(id);
    s.docs = docs; delete s.doc;
    s.texte = texte; s.consignes = consignes;
    supports.forEach((x, i) => { if (x) s.prods[i].support = x; });
    (remplacements || []).forEach(([i, avant, apres]) => {
      const p = s.prods[i], n = p.dev.filter(d => d.includes(avant)).length;
      if (n !== 1) throw new Error(id + " : passage introuvable ou répété → " + avant);
      p.dev = p.dev.map(d => d.replace(avant, apres));
    });
  };
  const ancien = (id, titre) => Object.assign({}, S(id).doc, { titre });

  deuxDocs("g3_2", [
    ancien("g3_2", "Document 1 : le relief du Togo"),
    { titre: "Document 2 : les principaux cours d'eau du Togo", image: "images/epreuves/3e_g3_2b.png" }
  ], "Le club de géographie de ton collège prépare une sortie de découverte qui conduira les élèves de 6e de Lomé jusqu'à Dapaong. Le président du club te charge de présenter aux voyageurs, avant le départ, les paysages et les cours d'eau qu'ils traverseront. Il te remet la carte du relief (document 1) et celle des cours d'eau (document 2).",
  ["À l'aide de la carte du document 1, présente aux élèves de 6e les grands ensembles du relief du Togo.",
    "À l'aide de la carte du document 2, présente-leur ensuite les trois ensembles de cours d'eau du Togo et montre-leur à quoi servent ces cours d'eau."],
  [null,
    "La carte des cours d'eau (document 2) : bassin de la Volta (Oti, Kéran, Kara, Mô), bassin du Mono (Anié, Ogou, Amou), cours d'eau côtiers (Zio, Haho) et lac Togo ; barrages de Nangbéto et de Kpimé ; informations du document exploitées"],
  [[1, "D'abord, au nord, le bassin de la Volta :", "D'abord, la carte du document 2 montre, au nord, le bassin de la Volta :"]]);

  deuxDocs("g3_4", [
    ancien("g3_4", "Document 1 : le carnet de route d'Akouvi"),
    { titre: "Document 2 : ce que cultivent les paysans rencontrés", liste: ["Près de Tsévié, sur la terre rouge : des palmiers à huile", "Au sud de Tabligbo, sur la terre noire : du maïs et du coton", "Dans la vallée du Zio, sur une terre gorgée d'eau : du riz et des légumes", "Dans la savane du nord : du mil et de l'arachide, « mais la terre s'épuise vite »", "Sur une pente caillouteuse de l'Akposso : un peu de manioc"] }
  ], "Au retour d'une excursion de Lomé à Dapaong, ta camarade Akouvi relit son carnet de route (document 1) et les propos des paysans rencontrés en chemin (document 2). Elle a noté les sols et les plantes qu'elle a vus, mais elle ne sait pas les nommer avec les mots de la géographie, et elle se demande pourquoi les paysans ne cultivent pas partout les mêmes plantes. Elle te demande de l'aider à rédiger le compte rendu de l'excursion.",
  ["À partir du carnet d'Akouvi (document 1) et de tes connaissances, présente-lui les principaux types de sols et de végétation du Togo.",
    "À partir du document 2 et de tes connaissances, explique-lui pourquoi les paysans ne cultivent pas les mêmes plantes sur tous les sols : montre les qualités culturales de chaque sol."],
  [null,
    "Les propos des paysans (document 2) : palmiers à huile sur la terre rouge de Tsévié ; maïs et coton sur la terre noire de Tabligbo ; riz et légumes dans la vallée du Zio ; mil et arachide dans la savane du nord, terre qui s'épuise ; manioc sur la pente de l'Akposso ; informations du document exploitées"]);

  deuxDocs("g3_6", [
    ancien("g3_6", "Document 1 : la pyramide des âges du Togo (2022)"),
    { titre: "Document 2 : les langues parlées par quelques élèves du collège", tableau: { entetes: ["Élève", "Langue de la famille"], lignes: [["Kossi", "éwé"], ["Ama", "mina"], ["Essowè", "kabyè"], ["Fousséni", "tem"], ["Lardja", "moba"], ["Komlan", "akposso"]] } }
  ], "L'association des parents d'élèves de ton collège organise une journée de réflexion sur l'avenir des jeunes. Le président, M. Djobo, te demande de préparer deux interventions : l'une sur la structure de la population togolaise, à partir de la pyramide des âges (document 1) ; l'autre sur les nombreux peuples qui composent le pays, à partir d'une petite enquête faite au collège (document 2).",
  ["À partir de la pyramide des âges (document 1), décris la structure de la population togolaise par âge et par sexe, et explique la forme de cette pyramide.",
    "À partir du document 2 et de tes connaissances, présente les grands groupes de peuples du Togo, puis montre les avantages et les défis de cette diversité."],
  [null,
    "L'enquête du collège (document 2) : Kossi (éwé) et Ama (mina) du groupe adja-éwé ; Essowè (kabyè) et Fousséni (tem) du groupe kabyè-tem ; Lardja (moba) du groupe para-gourma ; Komlan (akposso), d'un autre groupe ; la journée de réflexion ; informations du document exploitées"],
  [[1, "Au sud, dans la Maritime et les Plateaux, vit le groupe adja-éwé", "Les six élèves de l'enquête en donnent une idée. Au sud, dans la Maritime et les Plateaux, vit le groupe adja-éwé, celui de Kossi et d'Ama,"],
    [1, "Au centre et dans la Kara, le groupe kabyè-tem", "Au centre et dans la Kara, le groupe kabyè-tem, celui d'Essowè et de Fousséni,"],
    [1, "Au nord, le groupe para-gourma", "Au nord, le groupe para-gourma, celui de Lardja,"],
    [1, "D'autres peuples, comme les Akposso,", "D'autres peuples, comme les Akposso, auxquels appartient Komlan,"]]);

  deuxDocs("g3_8", [
    ancien("g3_8", "Document 1 : les ressources minières et énergétiques du Togo"),
    { titre: "Document 2 : ce que dit une ouvrière de la Plateforme industrielle d'Adétikopé", texte: "« Avant, j'étais sans travail ; aujourd'hui, je couds des vêtements avec le coton de chez nous. Mais nos machines viennent de l'étranger, l'électricité coûte cher, et beaucoup de gens préfèrent encore acheter les habits importés. Il nous faudrait aussi plus de techniciens bien formés. »" }
  ], "Une journaliste de la radio scolaire, Kafui, prépare une émission sur le thème « Le Togo peut-il devenir un pays industriel ? ». Elle t'invite comme élève de 3e et te remet la carte des ressources du pays (document 1) ainsi que le témoignage d'une ouvrière (document 2) pour préparer tes réponses.",
  ["À l'aide de la carte du document 1, présente aux auditeurs les ressources dont dispose le Togo pour son industrie.",
    "À partir du document 2 et de tes connaissances, montre-leur ensuite l'importance de l'industrie pour le Togo et les défis qu'elle doit encore relever."],
  [null,
    "Le témoignage de l'ouvrière (document 2) : emploi trouvé, coton du pays transformé en vêtements ; machines étrangères, électricité chère, concurrence des habits importés, manque de techniciens formés ; informations du document exploitées"],
  [[1, "D'abord, l'industrie est importante : elle crée des emplois, surtout pour les jeunes ;", "D'abord, l'industrie est importante : elle crée des emplois, surtout pour les jeunes, comme celui de l'ouvrière d'Adétikopé ;"]]);

  deuxDocs("g3_10", [
    { titre: "Document 1 : le terminal à conteneurs du port autonome de Lomé", image: "images/ep4_port_lome.jpg", credit: "Photo Chado07 — CC0 (Wikimedia Commons)." },
    ancien("g3_10", "Document 2 : l'économie bleue au Togo en chiffres")
  ], "Ton frère Kafui vient d'obtenir son BEPC. Il aime la mer et voudrait y trouver son futur métier, mais il pense qu'au Togo, la mer ne sert qu'aux pêcheurs. Votre père lui montre la photo du port de Lomé (document 1) et un article de journal qui donne les chiffres du document 2, puis te demande de lui expliquer ce qu'est l'économie bleue.",
  ["À partir de la photo du document 1 et de tes connaissances, explique à Kafui ce qu'est l'économie bleue et présente-lui les atouts du Togo dans ce domaine.",
    "Présente-lui les activités et les métiers de l'économie bleue, puis montre-lui, à l'aide du document 2, qu'elle compte beaucoup dans l'économie du Togo."],
  ["La photo du terminal à conteneurs du port autonome de Lomé (document 1) : grues, piles de conteneurs, port très actif ; la croyance de Kafui (« la mer ne sert qu'aux pêcheurs ») ; informations exploitées",
    null],
  [[0, "Enfin, le document montre que le port est très actif : il traite environ 2 millions de conteneurs par an.", "Enfin, la photo du document 1 montre le terminal à conteneurs du port de Lomé, avec ses grues et ses piles de conteneurs : c'est un port très actif."],
    [1, "Ensuite, le document montre son importance", "Ensuite, le document 2 montre son importance"]]);

  deuxDocs("g3_12", [
    ancien("g3_12", "Document 1 : quelques sites touristiques du Togo"),
    { titre: "Document 2 : ce que raconte un guide touristique de Kpalimé", texte: "« Depuis que les hôtels sont classés par étoiles et que l'Office national du tourisme fait connaître nos cascades sur internet, j'ai plus de visiteurs. Mais la piste qui mène à Womé est mauvaise, il n'y a presque pas de bons hôtels hors de Lomé et de Kpalimé, et beaucoup de guides n'ont jamais été formés. Et mes clients sont presque tous étrangers : les Togolais ne visitent pas leur pays. »" }
  ], "Le ministère chargé du tourisme lance un concours pour les jeunes : « Fais aimer le Togo aux Togolais ». Ton camarade Essowè constate que peu de vos camarades ont visité un site touristique de leur pays et que presque tous les hôtels qu'ils connaissent sont à Lomé. Vous décidez de participer ensemble ; vous partez de la carte du document 1 et du témoignage d'un guide de Kpalimé (document 2).",
  ["À l'aide de la carte du document 1, rédige un discours dans lequel tu présentes les caractéristiques du tourisme au Togo et son importance pour le pays.",
    "À partir du document 2 et de tes connaissances, poursuis ton discours en présentant les efforts faits pour valoriser le tourisme et les défis qu'il doit encore relever, surtout celui du tourisme intérieur."],
  [null,
    "Le témoignage du guide de Kpalimé (document 2) : hôtels classés par étoiles, promotion sur internet par l'Office national du tourisme ; piste de Womé en mauvais état, peu de bons hôtels hors de Lomé et de Kpalimé, guides non formés, clients presque tous étrangers ; le constat d'Essowè ; informations du document exploitées"],
  [[1, "Ce concours en est un exemple.", "Le guide de Kpalimé en voit déjà les effets : il reçoit plus de visiteurs. Ce concours en est un autre exemple."]]);

  deuxDocs("h3_2", [
    ancien("h3_2", "Document 1 : deux résistances racontées par un ancien"),
    { titre: "Document 2 : d'autres résistances des peuples du Togo", liste: ["1895 : révolte des habitants de Tové (Agbessia)", "1897 : les Bassar et les Konkomba attaquent les colonnes allemandes", "1898 : expédition de von Massow ; combats de Tcharè et attaque de Pessidé (Kabyè, Lamba, Losso)", "1897-1898 : résistance de Bafilo et de Kambolé ; soulèvement des Anoufo de Mango et des Moba", "1900 : soulèvement d'Ahépé et de Tchèkpo"] }
  ], "Pour la Journée du souvenir organisée dans ta ville, le comité des fêtes veut afficher un grand panneau en l'honneur des peuples du Togo qui ont résisté à la conquête allemande. Le président du comité, M. Kodjo, te confie la rédaction du texte et te remet le récit d'un ancien (document 1) ainsi qu'une liste de dates (document 2).",
  ["À partir du récit de l'ancien (document 1) et de tes connaissances, rédige la première partie du panneau : explique pourquoi les peuples du Togo ont résisté et présente les formes qu'a prises leur résistance.",
    "À partir du document 2 et de tes connaissances, rédige la seconde partie du panneau : présente les principales résistances des peuples du Togo au sud et à l'ouest, puis au nord."],
  [null,
    "La liste du document 2 : Tové (1895) ; Bassar et Konkomba (1897) ; von Massow, Tcharè, Pessidé, Kabyè, Lamba, Losso (1898) ; Bafilo, Kambolé, Anoufo, Moba (1897-1898) ; Ahépé et Tchèkpo (1900) ; le récit de l'ancien pour les Akposso et les Agotimé ; informations exploitées"],
  [[1, "comme le raconte l'ancien,", "comme le raconte l'ancien du document 1,"]]);

  deuxDocs("h3_4", [
    ancien("h3_4", "Document 1 : le pacte colonial"),
    { titre: "Document 2 : la gare de Lomé à l'arrivée d'un train de la ligne de la côte (Lomé-Aného), au temps du Togo allemand", image: "images/ep3_train_cote.jpg", credit: "Photo de la Deutsche Kolonialgesellschaft, vers 1905-1914, Bibliothèque universitaire de Francfort-sur-le-Main — domaine public (Wikimedia Commons)." }
  ], "Au cours d'un débat organisé par le club d'histoire, ton camarade Komi affirme : « La colonisation a développé l'Afrique : sans elle, nous n'aurions ni routes, ni ports, ni écoles. » Il montre, pour le prouver, la photo d'un train de l'époque coloniale (document 2). D'autres élèves protestent, mais ils ne savent pas comment l'économie des colonies était organisée. Le professeur projette le schéma du document 1 et te donne la parole.",
  ["À l'aide du schéma du document 1, explique à tes camarades comment les colonies étaient exploitées : l'économie de traite, le pacte colonial et les domaines d'exploitation.",
    "À partir du document 2 et de tes connaissances, réponds à Komi dans un texte argumenté en présentant le bilan de la colonisation : ses aspects négatifs et ses aspects positifs."],
  [null,
    "L'affirmation de Komi (routes, ports, écoles) ; la photo du train de la côte entre Lomé et Aného (document 2), ligne construite pour transporter les produits vers le port ; informations exploitées"],
  [[1, "D'abord, tu as raison sur un point : la colonisation a construit des routes, des ports et des chemins de fer,", "D'abord, tu as raison sur un point : la colonisation a construit des routes, des ports et des chemins de fer, comme la ligne de la côte entre Lomé et Aného que montre ta photo,"]]);

  deuxDocs("h3_6", [
    ancien("h3_6", "Document 1 : le Togo sous domination française"),
    { titre: "Document 2 : les souvenirs du grand-père Mawuli", texte: "« Je me souviens des camions de la SCOA et de la CFAO chargés de sacs de cacao et de café qui descendaient vers Lomé. On construisait des routes partout ; le train allait jusqu'à Blitta. Mon cousin travaillait à l'huilerie d'Alokoegbé. Au village, on nous poussait à planter le coton plutôt que l'igname. »" }
  ], "Ton grand-père Mawuli a été instituteur au temps du Togo français. Il garde la carte du document 1 et raconte souvent cette époque (document 2). Pour un exposé en classe, tu veux mettre ses souvenirs en ordre, mais tu dois d'abord expliquer comment le territoire était dirigé, puis ce que la France y a fait pour l'économie.",
  ["À l'aide de la carte du document 1, présente l'organisation administrative du Togo sous domination française.",
    "À partir des souvenirs du grand-père (document 2) et de tes connaissances, fais le bilan de l'action économique de la France au Togo : agriculture, industrie, voies de communication et commerce."],
  [null,
    "Les souvenirs du grand-père (document 2) : camions de la SCOA et de la CFAO chargés de cacao et de café vers Lomé ; routes ; train jusqu'à Blitta ; huilerie d'Alokoegbé ; coton plutôt qu'igname ; informations du document exploitées"]);

  deuxDocs("h3_8", [
    ancien("h3_8", "Document 1 : Sylvanus Olympio (1902-1963)"),
    { titre: "Document 2 : l'ONU et le Togo, quelques dates", liste: ["1947 : Sylvanus Olympio plaide la cause du Togo devant l'ONU, à New York", "1956 : plébiscite du Togo britannique, organisé par l'ONU", "28 octobre 1956 : référendum sur la République autonome, que l'ONU refuse de reconnaître", "1957 : mission King", "27 avril 1958 : élections sous le contrôle de l'ONU", "27 avril 1960 : proclamation de l'indépendance"] }
  ], "Pour la fête du 27 avril, le directeur de ton collège organise une cérémonie. Il te demande, en tant que meilleur élève d'histoire, de prononcer un discours sur la conquête de notre indépendance. Il place devant la tribune la photographie du « père de l'indépendance » (document 1) et un panneau de dates (document 2).",
  ["À partir du document 1 et de tes connaissances, présente, dans la première partie de ton discours, les débuts de la vie politique au Togo et les acteurs de la lutte anticoloniale.",
    "À partir du document 2 et de tes connaissances, montre, dans la seconde partie, le rôle de l'ONU dans la décolonisation du Togo, jusqu'à la proclamation de l'indépendance."],
  [null,
    "Le panneau de dates (document 2) : Olympio à l'ONU (1947), plébiscite du Togo britannique (1956), référendum non reconnu (28 octobre 1956), mission King (1957), élections du 27 avril 1958, indépendance (27 avril 1960) ; informations du document exploitées"]);

  deuxDocs("h3_10", [
    ancien("h3_10", "Document 1 : la note du professeur principal"),
    { titre: "Document 2 : le petit mot de Fousséni", texte: "« Je ne peux pas courir vite, c'est vrai, mais je peux garder les buts, compter les points ou arbitrer. Quand personne ne me choisit, je reste seul au bord du terrain, et j'ai l'impression de ne pas faire partie de la classe. »" }
  ], "Dans ta classe de 3e, deux groupes ne se parlent plus depuis un match de football perdu : ils s'accusent l'un l'autre de la défaite. De plus, ils refusent de prendre dans leur équipe votre camarade Fousséni, qui marche avec des béquilles. Le professeur principal, inquiet, te demande, à toi le délégué de classe, de prendre la parole (document 1). Fousséni t'a aussi glissé un petit mot (document 2).",
  ["À partir de la note du professeur (document 1) et de tes connaissances, explique à tes camarades ce qu'est un conflit et propose-leur une manière pacifique de régler celui qui divise la classe.",
    "À partir du mot de Fousséni (document 2) et de tes connaissances, montre-leur ensuite ce qu'est une société inclusive et ce qui fait la cohésion sociale, puis ce que chacun peut faire pour que personne ne soit exclu."],
  [null,
    "Le mot de Fousséni (document 2) : il ne peut pas courir vite mais peut garder les buts, compter les points ou arbitrer ; seul au bord du terrain, il se sent exclu de la classe ; informations du document exploitées"],
  [[1, "accueillir Fousséni dans les équipes et dans les groupes de travail, en adaptant les jeux pour qu'il y participe ;", "accueillir Fousséni dans les équipes et dans les groupes de travail, en adaptant les jeux pour qu'il y participe : il nous propose lui-même de garder les buts, de compter les points ou d'arbitrer ;"]]);
})();

// Situations nouvelles des leçons de géographie de 3e, leçons 1 à 6 (01/11/2026) : 3 situations par leçon en tout, tirées des traces,
// différentes des situations d'apprentissage, des évaluations, des devoirs, des situations compétence, des intégrations
// et des situations déjà en réserve. Deux consignes au plus ; quand il y en a deux, un document par consigne (docs).
EPREUVES_3E.g3_1.sit.push({
  texte: "Pour la journée portes ouvertes de ton collège, le club de cartographie installe un atelier « Dessine ton pays ». Les élèves de 6e qui viendront ne savent pas dessiner la carte du Togo : ils tracent un contour au hasard, trop large ou trop court. Le responsable du club te remet le croquis ci-dessous, réalisé à partir d'un quadrillage, et te charge d'en expliquer la construction.",
  consigne: "Rédige, pour l'atelier, une fiche-méthode qui explique aux élèves de 6e, étape par étape, comment réaliser le croquis du Togo à partir d'un quadrillage, du rectangle de départ jusqu'à l'habillage du croquis.",
  doc: { titre: "Document : le croquis du Togo à partir d'un quadrillage", image: "images/epreuves/3e_g3_1.png" },
  titreProd: "Fiche-méthode : dessiner le Togo à partir d'un quadrillage",
  intro: "Les élèves de 6e qui viendront à l'atelier ne savent pas dessiner la carte du Togo. Cette fiche leur explique, étape par étape, comment tracer le quadrillage, puis le contour du pays, et comment terminer le croquis.",
  support: "L'atelier « Dessine ton pays » ; les contours tracés au hasard par les élèves de 6e ; le croquis du document (rectangle ABCD, carré GCEF, droites IH et KJ, point O, points N, M et R, contour, Lomé, flèche du nord, échelle) ; informations exploitées",
  indConsigne: "Fiche-méthode : le rectangle ABCD (AB = 4 carreaux, BC = 2,5 AB) ; le carré GCEF (CG = 3/2 CD) ; les droites IH et KJ, le point O, les points N et M et leurs verticales ; le tracé du contour (points de contact, frontières) ; l'habillage",
  dev: ["D'abord, on trace le quadrillage. On dessine le rectangle ABCD : AB, en bas, mesure 4 carreaux et BC mesure 2,5 fois AB, soit 10 carreaux. On prolonge DC vers la gauche jusqu'au point G, pour que CG mesure 3/2 de CD, soit 6 carreaux, puis on trace au-dessus le carré GCEF. On trace ensuite IH, qui coupe le carré à mi-hauteur, et KJ, qui le coupe en son milieu : ils se croisent au point O. Sur IH, on place N et M à 1 carreau de I et de H, et l'on trace en pointillés leurs verticales jusqu'à GC (la verticale de N donne le point R).",
    "Ensuite, on trace le contour carreau par carreau. On repère d'abord les points où il touche le cadre : F, le coin nord-ouest ; L, sur AB, à la côte près de Lomé ; et le côté BE, près de B. Au nord, on va de F vers K, le long de la frontière du Burkina Faso ; au nord-est, on descend de K vers O, puis en biais jusqu'à la verticale de M, que l'on suit jusqu'à GC, avant de longer BC jusqu'à la côte : c'est la frontière du Bénin. La côte, de B à L, est très courte. À l'ouest, on remonte le long de AD, puis, à partir de R, le long de la verticale de N jusqu'à F : c'est la frontière du Ghana.",
    "Enfin, on efface le quadrillage et l'on habille le croquis : on écrit le nom des pays voisins (Burkina Faso, Bénin, Ghana) et de l'océan Atlantique, on place Lomé, on ajoute le titre, la flèche du nord et l'échelle."],
  concl: "En définitive, grâce au quadrillage, chacun peut dessiner un Togo aux bonnes proportions : un pays étroit et allongé, bien plus long que large, avec une côte très courte.",
  justesse: ["Quadrillage : ABCD avec AB = 4 carreaux et BC = 2,5 AB (10 carreaux) ; G tel que CG = 3/2 CD (6 carreaux), carré GCEF ; IH à mi-hauteur, KJ au milieu, croisement en O ; IN = MH = 1 carreau, verticales en pointillés jusqu'à GC (point R).",
    "Contour : points F, L (sur AB, près de Lomé) et côté BE ; nord de F vers K (Burkina Faso) ; nord-est de K vers O, verticale de M, puis BC (Bénin) ; côte courte de B à L ; ouest le long de AD puis de la verticale de N jusqu'à F (Ghana).",
    "Habillage : effacer le quadrillage ; pays voisins, océan Atlantique, Lomé, titre, flèche du nord, échelle."],
  concepts: "Croquis, quadrillage, carreau, contour, frontière, échelle, orientation, légende."
});
EPREUVES_3E.g3_1.sit.push({
  texte: "En faisant des recherches pour un exposé, ta camarade Abla tombe sur un site internet étranger qui présente le Togo (document 1). Elle te le montre en riant : « Ils se sont trompés presque partout ! » Votre professeur vous propose d'écrire au site pour corriger ces erreurs, et vous remet le tableau du document 2 pour compléter votre message.",
  consignes: ["À partir du document 1 et de tes connaissances, rédige la première partie du message : corrige les erreurs du site sur la localisation, les limites, les dimensions et la superficie du Togo.",
    "À partir du document 2 et de tes connaissances, rédige la seconde partie du message : présente la population du Togo, sa langue officielle, sa monnaie et son niveau de développement."],
  docs: [{ titre: "Document 1 : ce que dit le site internet", texte: "« Le Togo est un pays d'Afrique centrale, sans accès à la mer. Il est limité au nord par le Niger, à l'est par le Ghana et à l'ouest par la Côte d'Ivoire. C'est un pays presque carré, aussi large que long, d'environ 156 000 km². »" },
    { titre: "Document 2 : le Togo en chiffres", tableau: { entetes: ["Rubrique", "Donnée"], lignes: [["Population au RGPH-5 (2022)", "8 095 498 habitants"], ["Superficie", "56 600 km²"], ["Langue officielle", "français"], ["Monnaie", "franc CFA (UEMOA)"], ["IDH", "0,571 (161e rang sur 193)"]] } }],
  prods: [{
    intro: "Un site internet étranger présente le Togo avec de nombreuses erreurs. Dans cette première partie du message, je vais rétablir la vérité sur la localisation, les limites, les dimensions et la superficie de notre pays.",
    adresse: "Madame, Monsieur,",
    support: "Le texte du site (document 1) : « Afrique centrale », « sans accès à la mer », Niger au nord, Ghana à l'est, Côte d'Ivoire à l'ouest, pays « presque carré », 156 000 km² ; erreurs relevées et corrigées",
    indConsigne: "Message 1 : localisation (Afrique occidentale, golfe de Guinée, 6° à 11° N, 0° à 1°47' E) ; limites (Burkina Faso, Bénin, Ghana, océan Atlantique) ; dimensions (560 km, 50 km, 150 km) ; superficie (56 600 km²)",
    dev: ["D'abord, le Togo n'est pas en Afrique centrale, mais en Afrique occidentale, et il n'est pas privé d'accès à la mer : il a une façade sur le golfe de Guinée. Il s'étend entre 6° et 11° de latitude nord et entre 0° et 1°47' de longitude est ; sa capitale est Lomé.",
      "Ensuite, ses limites sont fausses sur votre site : le Togo est limité au nord par le Burkina Faso, et non par le Niger ; à l'est par le Bénin, et non par le Ghana ; à l'ouest par le Ghana, et non par la Côte d'Ivoire ; au sud par l'océan Atlantique.",
      "Enfin, le Togo n'est pas un pays presque carré : il est étroit et allongé. Il mesure environ 560 km du nord au sud, mais sa largeur ne dépasse pas 50 km sur la côte et près de Mango ; elle atteint environ 150 km au niveau de Kambolé. Sa superficie est de 56 600 km², et non de 156 000 km²."],
    concl: "En définitive, le Togo est un petit pays d'Afrique occidentale, étroit et allongé, ouvert sur le golfe de Guinée : nous vous prions de corriger ces informations.",
    justesse: ["Afrique occidentale (pas centrale) ; façade sur le golfe de Guinée (pas enclavé) ; 6° à 11° N, 0° à 1°47' E ; capitale Lomé.",
      "Limites : Burkina Faso au nord (pas le Niger), Bénin à l'est (pas le Ghana), Ghana à l'ouest (pas la Côte d'Ivoire), océan Atlantique au sud.",
      "Pays étroit et allongé : 560 km du nord au sud ; 50 km au plus sur la côte et près de Mango ; environ 150 km à Kambolé ; 56 600 km² (pas 156 000)."],
    concepts: "Localisation, latitude, longitude, limites, façade maritime, superficie, pays allongé."
  }, {
    intro: "Votre site ne dit rien des habitants du Togo. Dans cette seconde partie, à l'aide du tableau du document 2, je vais présenter la population de notre pays, sa langue officielle, sa monnaie et son niveau de développement.",
    support: "Le tableau du document 2 : 8 095 498 habitants (RGPH-5, 2022), 56 600 km², français, franc CFA (UEMOA), IDH 0,571 (161e sur 193) ; densité calculée ; informations exploitées",
    indConsigne: "Message 2 : population (8 095 498 habitants, RGPH-5 2022) et densité (143 hab./km²) ; langue officielle (français) ; monnaie (franc CFA, UEMOA) ; niveau de développement (PMA, IDH 0,571, 161e sur 193)",
    dev: ["D'abord, au cinquième recensement général de la population et de l'habitat (RGPH-5), en 2022, le Togo comptait 8 095 498 habitants. Si l'on divise ce nombre par la superficie, 56 600 km², on obtient une densité d'environ 143 habitants au km².",
      "Ensuite, la langue officielle du Togo est le français. Sa monnaie est le franc CFA, qu'il partage avec les autres pays de l'UEMOA.",
      "Enfin, le Togo fait partie des pays les moins avancés (PMA) : son indice de développement humain (IDH) est de 0,571, ce qui le place au 161e rang sur 193 pays."],
    concl: "En définitive, le Togo est un pays de plus de 8 millions d'habitants, francophone, qui utilise le franc CFA et qui doit encore relever le défi du développement. Recevez, Madame, Monsieur, nos salutations distinguées.",
    signature: "Les élèves de 3e de ton collège",
    justesse: ["Population : 8 095 498 habitants au RGPH-5 (2022) ; densité : 8 095 498 / 56 600 ≈ 143 hab./km².",
      "Langue officielle : français ; monnaie : franc CFA, partagé avec les pays de l'UEMOA.",
      "Niveau de développement : PMA ; IDH 0,571 ; 161e rang sur 193."],
    concepts: "Recensement, population, densité, langue officielle, monnaie, UEMOA, PMA, IDH."
  }]
});

EPREUVES_3E.g3_2.sit.push({
  texte: "Le club « Environnement » de ton collège, à Kpalimé, prépare une campagne de sensibilisation pour la saison des pluies. Au pied du mont Agou, des familles construisent sur les pentes déboisées, et en ville, des habitants jettent leurs ordures dans les caniveaux. La présidente du club te montre la photo d'un ravin creusé par l'érosion (document) et te charge d'écrire le texte de l'affiche.",
  consigne: "Rédige le texte de l'affiche de la campagne : à partir de la photo et de tes connaissances, présente les risques de catastrophes liés au relief et aux cours d'eau du Togo, puis les comportements responsables que chacun doit adopter.",
  doc: { titre: "Document : un ravin creusé par l'eau de pluie dans une terre sans arbres", image: "images/ep6_ravine_erosion.jpg", credit: "Ravin creusé par l'eau de pluie dans un terrain (États-Unis, 1941). Photo : Archives nationales des États-Unis (NARA), domaine public (Wikimedia Commons)." },
  titreProd: "Pentes et rivières : protégeons-les, protégeons-nous !",
  intro: "À Kpalimé, des familles construisent sur les pentes déboisées du mont Agou et des habitants jettent leurs ordures dans les caniveaux. Cette affiche présente les catastrophes que peuvent causer le relief et les cours d'eau, puis les bons gestes à adopter.",
  support: "La campagne du club à Kpalimé ; maisons sur les pentes déboisées du mont Agou ; ordures dans les caniveaux ; la photo du ravin creusé par l'eau de pluie dans une terre sans arbres ; informations exploitées",
  indConsigne: "Affiche : risques liés au relief (éboulements, chutes de blocs, glissements de terrain, érosion des versants) ; risques liés aux cours d'eau (inondations, pollution, perte de biodiversité) et leurs effets ; comportements responsables (relief et cours d'eau) ; projet pédagogique",
  dev: ["D'abord, le relief peut être dangereux. Sur les versants des monts Agou et Kloto, on peut assister à des éboulements, à des chutes de blocs et à des glissements de terrain. Quand les arbres sont coupés, la pluie emporte la terre et creuse des ravins, comme sur la photo : c'est l'érosion des versants.",
    "Ensuite, les cours d'eau présentent aussi des risques : les inondations, le long du Mono et de l'Oti ou dans les quartiers bas de Lomé ; la pollution des eaux ; la perte de la biodiversité. Ces catastrophes détruisent les champs, les maisons et les routes, provoquent des maladies et peuvent faire des morts.",
    "Enfin, chacun peut agir. Sur les pentes : reboisons les versants et n'y coupons pas les arbres, évitons les feux de brousse, cultivons en terrasses ou en suivant les courbes de niveau. Près des cours d'eau : plantons des arbres le long des berges, ne jetons pas de déchets dans les caniveaux et les rivières, construisons des digues et ne bâtissons pas dans les zones inondables. En classe, participons aux journées de reboisement et de nettoyage."],
  concl: "En définitive, nos montagnes et nos rivières sont des richesses, mais elles deviennent dangereuses quand on les maltraite : protégeons-les pour nous protéger.",
  justesse: ["Relief : éboulements, chutes de blocs, glissements de terrain, érosion des versants (monts Agou et Kloto).",
    "Cours d'eau : inondations (Mono, Oti, quartiers bas de Lomé), pollution des eaux, perte de la biodiversité ; destruction de champs, maisons, routes ; maladies, morts.",
    "Comportements : reboiser, ne pas couper les arbres, éviter les feux de brousse, cultures en terrasses ou en courbes de niveau ; arbres sur les berges, pas de déchets dans caniveaux et rivières, digues, ne pas bâtir en zone inondable ; projets de classe (reboisement, nettoyage)."],
  concepts: "Risque, catastrophe, éboulement, glissement de terrain, érosion, inondation, pollution, reboisement, zone inondable."
});
EPREUVES_3E.g3_2.sit.push({
  texte: "Ta préfecture organise un forum pour attirer des investisseurs. Le préfet a demandé aux élèves de 3e de ton collège de rédiger deux pages d'un dépliant intitulé « Nos montagnes et nos rivières, des richesses à valoriser ». Ton groupe dispose du témoignage d'un planteur de Kpalimé (document 1) et de celui d'un pêcheur du lac de Nangbéto (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, rédige la première page du dépliant : montre l'importance du relief du Togo.",
    "À partir du document 2 et de tes connaissances, rédige la seconde page : montre l'importance des cours d'eau du Togo."],
  docs: [{ titre: "Document 1 : ce que raconte un planteur de Kpalimé", texte: "« Sur nos montagnes humides, mon père a planté le café et le cacao à l'ombre des grands arbres. Mon frère, lui, cultive le maïs et élève des bœufs dans la plaine. Et chaque week-end, des visiteurs montent au mont Agou ou au Kloto pour admirer le paysage. »" },
    { titre: "Document 2 : ce que raconte un pêcheur du lac de Nangbéto", texte: "« Le barrage de Nangbéto, sur le Mono, donne la lumière à nos villes, et son lac nous donne le poisson. En saison sèche, mes voisins arrosent leurs légumes avec l'eau du fleuve et y mènent boire leurs bœufs. Les femmes y lavent le linge, les jeunes y ramassent le sable pour les maçons, et ma pirogue me sert aussi à traverser. »" }],
  prods: [{
    intro: "Les montagnes, les plateaux et les plaines du Togo ne sont pas seulement des paysages : ce sont des richesses. Cette première page du dépliant montre, à partir du témoignage d'un planteur de Kpalimé, l'importance du relief pour notre pays.",
    support: "Le forum de la préfecture ; le témoignage du planteur (document 1 : café et cacao à l'ombre des arbres sur les montagnes humides ; maïs et bœufs dans la plaine ; visiteurs au mont Agou et au Kloto) ; informations exploitées",
    indConsigne: "Page 1 : montagnes et plateaux humides du sud-ouest (café, cacao, agroforesterie) ; plaines (grandes cultures, agrobusiness, élevage) ; paysages de montagne et écotourisme (Agou, Kloto, faille d'Alédjo)",
    dev: ["D'abord, les montagnes et les plateaux humides du sud-ouest, autour de Kpalimé, portent le café et le cacao. Comme le raconte le planteur, ces cultures poussent à l'ombre des grands arbres : c'est l'agroforesterie.",
      "Ensuite, les plaines, comme celles de l'Oti et du Mono, sont favorables aux grandes cultures et à l'agrobusiness, ainsi qu'à l'élevage, comme le maïs et les bœufs du frère du planteur.",
      "Enfin, les paysages de montagne attirent les visiteurs : le mont Agou, le Kloto ou la faille d'Alédjo permettent de développer l'écotourisme."],
    concl: "En définitive, notre relief nourrit l'agriculture et attire les visiteurs : investir dans nos montagnes et nos plaines, c'est investir dans l'avenir du Togo.",
    justesse: ["Montagnes et plateaux humides du sud-ouest : café, cacao, agroforesterie.",
      "Plaines : grandes cultures (agrobusiness), élevage.",
      "Paysages de montagne (Agou, Kloto, faille d'Alédjo) : écotourisme."],
    concepts: "Relief, montagne, plateau, plaine, agroforesterie, agrobusiness, écotourisme."
  }, {
    intro: "Les cours d'eau du Togo sont nombreux. Cette seconde page du dépliant montre, à partir du témoignage d'un pêcheur du lac de Nangbéto, à quoi ils servent et pourquoi ils sont une richesse pour le pays.",
    support: "Le témoignage du pêcheur (document 2) : barrage de Nangbéto qui éclaire les villes, poisson du lac, légumes arrosés en saison sèche, bœufs abreuvés, linge lavé, sable pour les maçons, pirogue pour traverser ; informations du document exploitées",
    indConsigne: "Page 2 : électricité (Nangbéto sur le Mono, Kpimé) ; pêche et pisciculture ; irrigation, cultures maraîchères et de contre-saison ; bétail, ménages, construction (sable, gravier) ; voies de communication (pirogues)",
    dev: ["D'abord, les cours d'eau produisent de l'électricité : le barrage de Nangbéto, sur le Mono, dont parle le pêcheur, et celui de Kpimé, près de Kpalimé.",
      "Ensuite, ils font vivre l'agriculture et la pêche : on y pêche, comme sur le lac de Nangbéto, et on y pratique la pisciculture ; leur eau sert à l'irrigation, aux cultures maraîchères et aux cultures de contre-saison, comme les légumes arrosés en saison sèche, et elle abreuve le bétail.",
      "Enfin, ils répondent aux besoins des ménages, fournissent le sable et le gravier pour la construction, et certains servent de voies de communication : des pirogues circulent sur le lac Togo et sur le Mono."],
    concl: "En définitive, de l'Oti au Mono et du Zio au lac Togo, nos cours d'eau donnent l'énergie, la nourriture et le travail : ils méritent d'être valorisés et protégés.",
    justesse: ["Électricité : barrages de Nangbéto (Mono) et de Kpimé.",
      "Pêche, pisciculture ; irrigation, cultures maraîchères et de contre-saison ; abreuvement du bétail.",
      "Besoins des ménages ; construction (sable, gravier) ; voies de communication (pirogues sur le lac Togo et le Mono)."],
    concepts: "Hydrographie, bassin, barrage hydroélectrique, pisciculture, irrigation, culture de contre-saison."
  }]
});

EPREUVES_3E.g3_3.sit.push({
  texte: "Ta cousine Adjoa vit à Abidjan. En vacances à Lomé en juillet, elle s'étonne : « Chez nous, à Abidjan, il tombe plus de 1 800 mm de pluie par an et tout est vert. Ici, au bord de la même mer, il pleut si peu ! Et ton oncle de Notsé dit qu'il pleut plus chez lui qu'à Lomé. » Rentrée chez elle, elle t'envoie un message avec le tableau ci-dessous.",
  consigne: "Réponds à Adjoa par un message dans lequel tu lui expliques, à partir du tableau et de tes connaissances, ce qu'est l'anomalie climatique du Bas-Togo, ses causes et ses conséquences.",
  doc: { titre: "Document : la pluie moyenne de quelques stations (en mm par an)", tableau: { entetes: ["Station", "Pluie moyenne annuelle"], lignes: [["Abidjan (Côte d'Ivoire)", "plus de 1 800 mm"], ["Lomé", "environ 930 mm"], ["Aného", "884 mm"], ["Tsévié", "1 046 mm"], ["Notsé", "1 212 mm"]] } },
  intro: "Ma cousine Adjoa, qui vit à Abidjan, s'étonne qu'il pleuve si peu à Lomé, au bord du même golfe de Guinée. Je vais lui expliquer ce qu'est l'anomalie climatique du Bas-Togo, puis ses causes et ses conséquences.",
  adresse: "Chère Adjoa,",
  support: "Le séjour d'Adjoa à Lomé en juillet ; le tableau (Abidjan plus de 1 800 mm ; Lomé environ 930 mm ; Aného 884 mm ; Tsévié 1 046 mm ; Notsé 1 212 mm) ; les propos de l'oncle de Notsé ; informations exploitées",
  indConsigne: "Message : présentation de l'anomalie (Bas-Togo moins arrosé que les autres côtes et que l'intérieur ; d'Accra à Cotonou) ; causes (côte parallèle à la mousson, FIT au nord en juillet-août, harmattan, remontée d'eaux froides, destruction de la végétation) ; conséquences",
  dev: ["D'abord, tu as raison : le Bas-Togo, c'est-à-dire le sud du pays, est moins arrosé que les autres côtes du golfe de Guinée et que l'intérieur du pays. Abidjan reçoit plus de 1 800 mm de pluie par an, mais Lomé n'en reçoit qu'environ 930 mm et Aného 884 mm, alors que Tsévié en reçoit 1 046 et Notsé 1 212 : ton oncle a donc raison. Cette relative sécheresse s'appelle l'anomalie climatique du Bas-Togo ; elle touche toute la côte, d'Accra à Cotonou.",
    "Ensuite, elle a plusieurs causes. Notre côte est presque parallèle à la mousson, qui la longe sans y verser beaucoup de pluie. En juillet-août, quand tu étais là, le FIT, la zone où se rencontrent la mousson et l'harmattan, est loin au nord, et la mousson, épaisse mais stable, donne peu de pluie. De décembre à février, l'harmattan descend jusqu'à la côte. En août, les eaux de surface de l'océan se refroidissent, ce qui réduit l'évaporation. Enfin, la destruction de la végétation aggrave la sécheresse.",
    "Enfin, cette anomalie a des conséquences : le manque d'eau, le manque d'herbe pour le bétail, car il n'y a pas de prairies naturelles, des récoltes incertaines et une baisse de la production agricole. Elle explique aussi pourquoi, autour de Lomé, tu as vu une savane, la clairière du sud, à la place de la forêt que tu connais à Abidjan."],
  concl: "En définitive, chère Adjoa, le sud du Togo est une côte sèche au bord d'un golfe pluvieux : c'est l'anomalie climatique du Bas-Togo. Reviens nous voir pendant la grande saison des pluies ! Je t'embrasse.",
  signature: "Ton cousin (ta cousine) de Lomé",
  justesse: ["Présentation : Bas-Togo moins arrosé que les autres côtes du golfe de Guinée (Abidjan plus de 1 800 mm) et que l'intérieur (Lomé environ 930 mm, Aného 884 mm contre Tsévié 1 046 mm, Notsé 1 212 mm) ; d'Accra à Cotonou.",
    "Causes : côte presque parallèle à la mousson ; FIT loin au nord en juillet-août, mousson stable ; harmattan jusqu'à la côte de décembre à février ; eaux de surface refroidies en août, évaporation réduite ; destruction de la végétation.",
    "Conséquences : pénurie d'eau ; manque d'herbe pour le bétail ; récoltes incertaines et baisse de la production ; savane (clairière du sud) à la place de la forêt."],
  concepts: "Anomalie climatique, Bas-Togo, mousson, harmattan, FIT, évaporation, clairière du sud."
});
EPREUVES_3E.g3_3.sit.push({
  texte: "La radio rurale de ta région prépare une émission pour aider les paysans à mieux connaître le climat de leur pays. L'animateur veut deux chroniques : l'une pour les auditeurs du nord, l'autre pour ceux du sud et des montagnes. Il te remet un relevé des pluies de quelques villes du nord (document 1) et la carte des climats du Togo (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, rédige la chronique pour les auditeurs du nord : présente le climat tropical sec et ses caractéristiques.",
    "À partir de la carte du document 2 et de tes connaissances, rédige la chronique pour les auditeurs du sud : présente le climat tropical humide et les microclimats de montagne."],
  docs: [{ titre: "Document 1 : la pluie moyenne de quelques villes du nord", liste: ["Sokodé : environ 1 500 mm par an", "Kara : environ 1 300 mm par an", "Mango : environ 1 100 mm par an", "Dapaong : environ 1 000 mm par an"] },
    { titre: "Document 2 : les climats du Togo", image: "images/epreuves/3e_g3_3b.png" }],
  prods: [{
    intro: "Chers auditeurs du nord, pour bien choisir le moment de vos semis, il faut connaître votre climat. Dans cette chronique, je vais vous présenter le climat tropical sec et ses caractéristiques.",
    adresse: "Chers auditeurs,",
    support: "L'émission de la radio rurale ; le relevé du document 1 (Sokodé environ 1 500 mm, Kara 1 300, Mango 1 100, Dapaong 1 000) : les pluies diminuent vers le nord ; informations exploitées",
    indConsigne: "Chronique 1 : localisation (au nord du 8e parallèle, de Blitta à Cinkassé) ; deux saisons (pluies de mai à octobre, mousson ; saison sèche de novembre à avril, harmattan) ; chaleur, grands écarts de température ; pluies brèves et violentes qui diminuent vers le nord",
    dev: ["D'abord, le climat tropical sec, ou soudanien, règne au nord du 8e parallèle, c'est-à-dire de Blitta à Cinkassé.",
      "Ensuite, il n'a que deux saisons : une saison des pluies de mai à octobre, apportée par la mousson, et une saison sèche de novembre à avril, quand souffle l'harmattan. Il fait chaud toute l'année, mais pendant l'harmattan, l'écart de température entre le jour et la nuit est grand.",
      "Enfin, les pluies sont brèves et violentes, et elles diminuent quand on va vers le nord, comme le montre le relevé : environ 1 500 mm à Sokodé, 1 300 mm à Kara, 1 100 mm à Mango et seulement 1 000 mm à Dapaong."],
    concl: "En définitive, chers auditeurs, votre climat a une seule saison des pluies, de plus en plus courte et faible vers le nord : il faut en profiter au mieux pour vos cultures.",
    justesse: ["Climat tropical sec (soudanien) : au nord du 8e parallèle, de Blitta à Cinkassé.",
      "Deux saisons : pluies de mai à octobre (mousson), saison sèche de novembre à avril (harmattan) ; chaud toute l'année, grands écarts jour-nuit pendant l'harmattan.",
      "Pluies brèves et violentes, en baisse vers le nord : Sokodé environ 1 500 mm, Kara 1 300, Mango 1 100, Dapaong 1 000."],
    concepts: "Climat tropical sec, climat soudanien, saison des pluies, saison sèche, mousson, harmattan, amplitude."
  }, {
    intro: "Chers auditeurs du sud et des montagnes, votre climat est différent de celui du nord. Dans cette seconde chronique, à l'aide de la carte des climats, je vais vous présenter le climat tropical humide et les microclimats de montagne.",
    adresse: "Chers auditeurs,",
    support: "La carte des climats (document 2) : climat tropical humide (guinéen, 4 saisons) au sud de la latitude de Blitta ; microclimat de montagne (hachures, Kpalimé 1 600 mm, monts Alédjo 1 600 mm) ; Notsé 1 212 mm ; informations du document exploitées",
    indConsigne: "Chronique 2 : climat tropical humide (au sud du 8e parallèle) ; quatre saisons et leurs mois ; températures peu variables, pluies plus régulières, plus de 1 500 mm sur les montagnes du sud-ouest ; microclimats (plus frais, plus arrosés : Kouma-Konda, Kpéwa)",
    dev: ["D'abord, le climat tropical humide, ou guinéen, règne au sud du 8e parallèle, comme le montre la carte au sud de la latitude de Blitta.",
      "Ensuite, il a quatre saisons : une grande saison des pluies de mars à juillet, une petite saison sèche en août, une petite saison des pluies en septembre-octobre et une grande saison sèche de novembre à février. Les températures varient peu et les pluies sont plus régulières ; elles dépassent 1 500 mm sur les montagnes du sud-ouest, à Kpalimé ou à Badou.",
      "Enfin, dans les montagnes, il fait plus frais et il pleut davantage : ce sont des microclimats, que la carte signale par des hachures. On les trouve par exemple à Kouma-Konda, sur le Kloto, et à Kpéwa, dans les monts Alédjo."],
    concl: "En définitive, chers auditeurs, le sud profite de deux saisons des pluies, et les montagnes d'un climat plus frais et plus arrosé : c'est une chance pour vos cultures.",
    justesse: ["Climat tropical humide (guinéen) : au sud du 8e parallèle.",
      "Quatre saisons : grande saison des pluies (mars-juillet), petite saison sèche (août), petite saison des pluies (septembre-octobre), grande saison sèche (novembre-février) ; températures peu variables ; pluies plus régulières, plus de 1 500 mm à Kpalimé et Badou.",
      "Microclimats de montagne : plus frais, plus arrosés (Kouma-Konda sur le Kloto, Kpéwa dans les monts Alédjo)."],
    concepts: "Climat tropical humide, climat guinéen, quatre saisons, microclimat, montagne."
  }]
});

EPREUVES_3E.g3_4.sit.push({
  texte: "Le club photo de ton collège prépare une exposition intitulée « Du nord au sud, les paysages verts du Togo ». Les photos sont prêtes, mais il manque le texte de présentation qui guidera les visiteurs d'une région à l'autre. Le responsable du club te remet la carte de la végétation ci-dessous.",
  consigne: "Rédige le texte de présentation de l'exposition : à l'aide de la carte et de tes connaissances, présente aux visiteurs les différentes formations végétales du Togo, du nord au sud.",
  doc: { titre: "Document : la végétation du Togo", image: "images/epreuves/3e_g3_4.png" },
  titreProd: "Du nord au sud, les paysages verts du Togo",
  intro: "Le club photo expose les paysages verts du Togo. Ce texte guide les visiteurs du nord au sud : il présente les savanes, puis les forêts, et enfin la végétation du littoral.",
  support: "L'exposition du club photo ; la carte de la végétation : savane soudanienne au nord (Dapaong), savane guinéenne (Atakpamé, Notsé), forêt sèche, forêt de montagne, forêts-galeries, clairière de la terre de barre, littoral (mangrove, cocotiers) ; informations exploitées",
  indConsigne: "Texte de présentation : savanes (soudanienne au nord et ses arbres ; guinéenne au sud et ses arbres) ; forêts (galeries, montagne claires et sèches au centre, humides au sud-ouest, forêts sacrées) ; littoral (fourrés, cocotiers, mangrove)",
  dev: ["D'abord, le nord et le centre du pays sont couverts de savanes. Au nord, autour de Dapaong, s'étend la savane soudanienne, arborée et arbustive, avec le néré, le karité, le kapokier, le baobab, le tamarinier et l'acacia. Plus au sud, la savane guinéenne, boisée et herbeuse, occupe surtout la plaine du Mono ; on y voit le rônier, l'iroko et l'acajou.",
    "Ensuite, le pays a plusieurs sortes de forêts : les forêts-galeries, qui suivent les cours d'eau ; les forêts de montagne, claires et sèches au centre, humides au sud-ouest ; et les forêts sacrées, protégées par les traditions.",
    "Enfin, sur le littoral, on trouve des fourrés, des cocotiers et, au bord du lac Togo et des lagunes, la mangrove."],
  concl: "En définitive, des savanes du nord à la mangrove de la côte, le Togo offre une végétation très variée, qu'il nous appartient de protéger. Bonne visite !",
  justesse: ["Savane soudanienne (nord), arborée et arbustive : néré, karité, kapokier, baobab, tamarinier, acacia ; savane guinéenne (sud, plaine du Mono), boisée et herbeuse : rônier, iroko, acajou.",
    "Forêts : galeries le long des cours d'eau ; de montagne, claires et sèches au centre, humides au sud-ouest ; forêts sacrées.",
    "Littoral : fourrés, cocotiers, mangrove (lac Togo, lagunes)."],
  concepts: "Végétation, savane soudanienne, savane guinéenne, forêt-galerie, forêt de montagne, forêt sacrée, mangrove."
});
EPREUVES_3E.g3_4.sit.push({
  texte: "Ton cousin Kodjovi, diplômé d'agronomie, veut acheter un terrain pour se lancer dans l'agriculture. Il a relevé quatre annonces (document 1), mais il ne sait pas quelles cultures conviennent à chaque terre. Son voisin, un vieux paysan, l'a mis en garde contre la dégradation des terres (document 2). Kodjovi te demande de l'aider à préparer son projet.",
  consignes: ["À partir des annonces du document 1 et de tes connaissances, montre à Kodjovi les qualités culturales des différents sols du Togo, pour qu'il choisisse les cultures adaptées à chaque terrain.",
    "À partir du document 2 et de tes connaissances, présente-lui les risques qui menacent les sols et la végétation, puis les comportements civiques qui permettent de les protéger."],
  docs: [{ titre: "Document 1 : quatre annonces de terrains à vendre", liste: ["Terrain de terre de barre près de Kouvé", "Terrain d'argile noire au sud de Tabligbo (pays ouatchi)", "Bas-fond gorgé d'eau dans la vallée du Zio", "Terrain caillouteux sur une montagne de l'Akposso"] },
    { titre: "Document 2 : ce que dit le vieux paysan", texte: "« Quand j'étais jeune, cette terre donnait de belles récoltes. Puis on a coupé les arbres, on a brûlé la brousse chaque saison sèche, et les troupeaux ont tout mangé. Maintenant, la pluie emporte la terre, le sol devient dur comme une pierre et il ne produit presque plus rien. »" }],
  prods: [{
    intro: "Mon cousin Kodjovi veut acheter un terrain, mais il ne sait pas quelles cultures conviennent à chaque terre. À partir des quatre annonces, je vais lui montrer les qualités culturales des différents sols du Togo.",
    adresse: "Cher Kodjovi,",
    support: "Le projet de Kodjovi ; les annonces (document 1) : terre de barre près de Kouvé (sol ferralitique), argile noire au sud de Tabligbo (vertisol), bas-fond de la vallée du Zio (sol hydromorphe), terrain caillouteux de l'Akposso (sol peu évolué) ; informations exploitées",
    indConsigne: "Production 1 : sols ferralitiques (café, cacao, palmier à huile) ; vertisols (maïs, coton, sorgho, riz) ; sols hydromorphes (riz, canne à sucre, maraîchage) ; sols peu évolués (manioc) ; sols ferrugineux (mil, sorgho, arachide, coton ; s'épuisent vite)",
    dev: ["D'abord, le terrain de terre de barre près de Kouvé porte un sol ferralitique, comme dans le sud et le sud-ouest humides : il convient au café, au cacao et au palmier à huile. L'argile noire du sud de Tabligbo est un vertisol, l'une des meilleures terres du pays : tu pourras y cultiver le maïs, le coton, le sorgho ou le riz.",
      "Ensuite, le bas-fond de la vallée du Zio a un sol hydromorphe, gorgé d'eau : il est bon pour le riz, la canne à sucre et les cultures maraîchères. En revanche, le terrain caillouteux de l'Akposso a un sol peu évolué, pauvre : il ne portera que des cultures peu exigeantes, comme le manioc.",
      "Enfin, si tu cherches plus tard une terre dans les savanes du centre et du nord, tu trouveras des sols ferrugineux tropicaux : ils conviennent au mil, au sorgho, à l'arachide et au coton, mais ils s'épuisent vite."],
    concl: "En définitive, cher Kodjovi, chaque sol a ses cultures : l'argile noire de Tabligbo ou le bas-fond du Zio me semblent les meilleurs choix pour un jeune agriculteur ambitieux.",
    justesse: ["Sols ferralitiques (terre de barre, sud et sud-ouest) : café, cacao, palmier à huile ; vertisols (argiles noires, pays ouatchi), parmi les meilleures terres : maïs, coton, sorgho, riz.",
      "Sols hydromorphes (vallées du Zio, du Haho, du Mono, de l'Oti) : riz, canne à sucre, cultures maraîchères ; sols peu évolués (montagnes, littoral), pauvres : cultures peu exigeantes (manioc).",
      "Sols ferrugineux tropicaux (savanes du centre et du nord) : mil, sorgho, arachide, coton ; s'épuisent vite."],
    concepts: "Sol, qualité culturale, sol ferralitique, vertisol, sol hydromorphe, sol ferrugineux, sol peu évolué."
  }, {
    intro: "Le vieux paysan a raison de mettre Kodjovi en garde : une bonne terre peut devenir stérile. À partir de son témoignage, je vais présenter les risques qui menacent les sols et la végétation, puis les comportements qui permettent de les protéger.",
    adresse: "Cher Kodjovi,",
    support: "Le témoignage du vieux paysan (document 2) : arbres coupés, brousse brûlée chaque saison sèche, troupeaux qui mangent tout, pluie qui emporte la terre, sol dur comme une pierre, récoltes presque nulles ; informations exploitées",
    indConsigne: "Production 2 : risques pour les sols (érosion, lessivage, tassement, cuirassement, encroûtement, perte de fertilité) ; risques pour la végétation (déforestation, feux de brousse, surpâturage, perte de biodiversité) ; 4 % du territoire dégradé (2000-2010) ; comportements civiques",
    dev: ["D'abord, les sols sont menacés par l'érosion, quand la pluie emporte la terre comme le dit le vieux paysan, par le lessivage, le tassement, le cuirassement et l'encroûtement, qui rendent la terre dure comme une pierre, et par la perte de fertilité.",
      "Ensuite, la végétation recule à cause de la déforestation, des feux de brousse et du surpâturage, que le paysan a vus près de chez lui ; la biodiversité diminue. Entre 2000 et 2010, environ 4 % du territoire a été dégradé, surtout dans les Savanes, la Maritime et la Kara.",
      "Enfin, des gestes civiques permettent de protéger la terre : reboiser et entretenir les arbres ; ne pas couper d'arbres sans raison et lutter contre les feux de brousse ; cultiver en courbes de niveau et en terrasses, pratiquer l'agroforesterie et planter des haies vives ; enrichir la terre avec le fumier et le compost ; réglementer le pâturage, la chasse et la coupe du bois ; protéger les parcs et les réserves ; utiliser le gaz plutôt que le charbon de bois ; sensibiliser son entourage."],
    concl: "En définitive, cher Kodjovi, une terre se protège comme un capital : si tu la soignes, elle te nourrira longtemps. Bon courage pour ton projet !",
    signature: "Ton cousin (ta cousine)",
    justesse: ["Sols : érosion, lessivage, tassement, cuirassement, encroûtement, perte de fertilité.",
      "Végétation : déforestation, feux de brousse, surpâturage, perte de biodiversité ; environ 4 % du territoire dégradé entre 2000 et 2010 (Savanes, Maritime, Kara).",
      "Comportements : reboiser, ne pas couper sans raison, lutter contre les feux, courbes de niveau, terrasses, agroforesterie, haies vives, fumier et compost, réglementation du pâturage, de la chasse et de la coupe, protection des parcs, gaz au lieu du charbon de bois, sensibilisation."],
    concepts: "Érosion, lessivage, cuirassement, déforestation, feux de brousse, surpâturage, biodiversité, agroforesterie, compost."
  }]
});

EPREUVES_3E.g3_5.sit.push({
  texte: "Une organisation humanitaire veut construire des centres de santé au Togo. Sa responsable, Mme Brigitte, venue de Belgique, s'étonne en regardant la carte ci-dessous : « Pourquoi tant de monde dans le sud, et si peu dans la région Centrale ? » Ton père, qui travaille avec elle, te demande de rédiger pour elle une note claire.",
  consigne: "Rédige pour Mme Brigitte une note dans laquelle tu présentes, à l'aide de la carte, les zones de peuplement du Togo, puis tu expliques les causes de l'inégale répartition de la population.",
  doc: { titre: "Document : les densités de population par région (RGPH-5, 2022)", image: "images/epreuves/3e_g3_5.png" },
  intro: "Mme Brigitte veut construire des centres de santé au Togo et s'étonne de voir la population si inégalement répartie. Cette note présente les zones de peuplement du pays, puis les causes de cette inégale répartition.",
  adresse: "Madame,",
  support: "Le projet de centres de santé ; la question de Mme Brigitte ; la carte des densités (Maritime 580 hab./km² avec le Grand Lomé, Savanes 135, Plateaux 96, Kara 84, Centrale 60 ; moyenne nationale 143) ; informations exploitées",
  indConsigne: "Note : densité moyenne (143 hab./km²) ; zone très peuplée (Maritime et Grand Lomé, 580 hab./km², 44 % des Togolais sur 11 % du territoire) ; zone assez peuplée (Savanes) ; zones moins peuplées (Plateaux, Kara, Centrale) ; nuances ; causes physiques, historiques et économiques",
  dev: ["D'abord, en 2022, la densité moyenne du Togo est de 143 habitants au km², mais la population est très inégalement répartie. La région Maritime, avec le Grand Lomé, est très peuplée : 580 habitants au km² ; elle rassemble près de 44 % des Togolais sur 11 % du territoire. Les Savanes sont assez peuplées, avec 135 habitants au km². Les Plateaux (96), la Kara (84) et surtout la Centrale (60) le sont moins. Il faut nuancer : certaines montagnes, comme le pays kabyè, sont très peuplées, et dans chaque région, les villes sont plus peuplées que les campagnes.",
    "Ensuite, cette inégale répartition a des causes physiques : les sols fertiles, l'eau et un climat favorable attirent les hommes, tandis que les zones sèches, aux sols pauvres, ou touchées par des maladies comme l'onchocercose dans certaines vallées, les repoussent. Elle a aussi des causes historiques : autrefois, les montagnes et les forêts servaient de refuges contre les guerres et les razzias, et la colonisation a surtout équipé le sud et la côte.",
    "Enfin, les causes économiques sont importantes : les villes, le port, les industries, les mines et les services, comme les écoles et les hôpitaux, attirent la population, surtout à Lomé, tandis que les zones mal équipées se vident."],
  concl: "En définitive, Madame, la population togolaise se concentre dans le sud, autour de Lomé, pour des raisons naturelles, historiques et économiques ; vos centres de santé seront précieux aussi dans les régions les moins peuplées. Veuillez agréer, Madame, mes salutations respectueuses.",
  justesse: ["Densité moyenne : 143 hab./km² (2022) ; Maritime et Grand Lomé 580 hab./km², près de 44 % des Togolais sur 11 % du territoire ; Savanes 135 ; Plateaux 96, Kara 84, Centrale 60.",
    "Nuances : montagnes très peuplées (pays kabyè) ; villes plus peuplées que les campagnes.",
    "Causes physiques (sols, eau, climat ; zones sèches, sols pauvres, onchocercose) ; historiques (refuges contre guerres et razzias, colonisation équipant le sud) ; économiques (villes, port, industries, mines, services, surtout Lomé)."],
  concepts: "Répartition, densité, zone de peuplement, inégale répartition, refuge, onchocercose, attraction."
});
EPREUVES_3E.g3_5.sit.push({
  texte: "Le club de géographie de ton collège organise une causerie sur le thème « Le Togo, un pays qui bouge ». Tu dois intervenir deux fois. Pour préparer tes interventions, tu as recueilli l'histoire de la famille de ta camarade Massan (document 1) et deux témoignages entendus au marché (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, explique au public pourquoi la population togolaise augmente vite.",
    "À partir du document 2 et de tes connaissances, présente au public les migrations internes et internationales qui concernent le Togo."],
  docs: [{ titre: "Document 1 : l'histoire de la famille de Massan", texte: "« Mon arrière-grand-mère s'est mariée à quinze ans ; elle a eu neuf enfants, mais quatre sont morts avant cinq ans, faute de soins. Ma grand-mère a eu sept enfants, qui ont tous grandi, grâce au dispensaire et aux vaccins. Dans notre famille, on dit qu'un enfant est une richesse, et beaucoup de mes tantes n'ont jamais utilisé de contraception. »" },
    { titre: "Document 2 : deux témoignages entendus au marché", texte: "Yendouban, vendeur d'ignames : « J'ai quitté mon village des Savanes pour Lomé : là-bas, il n'y avait pas de travail. Mon frère, lui, est parti au Gabon. » Mme Adébayo, commerçante : « Je suis nigériane ; je vends des tissus au grand marché de Lomé depuis vingt ans. »" }],
  prods: [{
    intro: "La population togolaise augmente très vite. Dans cette première intervention, à partir de l'histoire de la famille de Massan, je vais expliquer les mouvements naturels de la population et les causes de cette croissance rapide.",
    adresse: "Mesdames, Messieurs, chers camarades,",
    support: "L'histoire de la famille de Massan (document 1) : mariage à quinze ans, neuf enfants dont quatre morts faute de soins, puis sept enfants qui grandissent grâce au dispensaire et aux vaccins, « un enfant est une richesse », pas de contraception ; informations exploitées",
    indConsigne: "Intervention 1 : natalité élevée (environ 33 ‰) ; mortalité en forte baisse (29 ‰ vers 1960, 8 ‰) grâce aux soins et à l'hygiène ; accroissement naturel de 2,5 à 3 % ; de 1,4 million (1960) à 8 095 498 (2022) ; causes (mariages précoces, faible contraception, croyances, polygamie, jeunesse)",
    dev: ["D'abord, la population dépend de ses mouvements naturels : les naissances et les décès. La natalité, c'est-à-dire le nombre de naissances pour 1 000 habitants en un an, reste élevée : environ 33 ‰ vers 2020. La mortalité, le nombre de décès pour 1 000 habitants en un an, a beaucoup baissé : environ 8 ‰, contre 29 ‰ vers 1960, grâce aux soins et à l'hygiène, comme le montrent les enfants de la grand-mère de Massan, sauvés par le dispensaire et les vaccins.",
      "Ensuite, l'accroissement naturel, la différence entre la natalité et la mortalité, est donc fort : 2,5 à 3 % par an. La population est ainsi passée d'environ 1,4 million d'habitants en 1960 à 8 095 498 en 2022.",
      "Enfin, cette croissance rapide s'explique aussi par les mariages précoces, comme celui de l'arrière-grand-mère de Massan, par le faible usage de la contraception, par certaines croyances (« un enfant est une richesse »), par la polygamie et par la jeunesse de la population."],
    concl: "En définitive, on meurt beaucoup moins qu'autrefois, mais on naît encore beaucoup : c'est pourquoi la population togolaise augmente si vite.",
    justesse: ["Natalité environ 33 ‰ (vers 2020) ; mortalité environ 8 ‰ contre 29 ‰ vers 1960 (soins, hygiène).",
      "Accroissement naturel : 2,5 à 3 % par an ; population : environ 1,4 million en 1960, 8 095 498 en 2022.",
      "Causes : mariages précoces, faible contraception, croyances, polygamie, jeunesse de la population."],
    concepts: "Mouvement naturel, natalité, mortalité, accroissement naturel, pour mille, contraception."
  }, {
    intro: "La population togolaise ne fait pas que grandir : elle se déplace. Dans cette seconde intervention, à partir des témoignages entendus au marché, je vais présenter les migrations internes et internationales qui concernent le Togo.",
    adresse: "Mesdames, Messieurs, chers camarades,",
    support: "Les témoignages du marché (document 2) : Yendouban, parti des Savanes vers Lomé faute de travail ; son frère parti au Gabon ; Mme Adébayo, Nigériane, commerçante de tissus à Lomé depuis vingt ans ; informations exploitées",
    indConsigne: "Intervention 2 : migrations internes (exode rural des jeunes du nord vers Lomé et la Maritime ; paysans vers les terres de plantation des Plateaux et de la Centrale) ; émigration (pays voisins, Europe, Amérique du Nord) ; immigration (Nigérians, Ghanéens, Burkinabè, Béninois, Libanais, Chinois…) ; solde migratoire négatif",
    dev: ["D'abord, à l'intérieur du pays, l'exode rural pousse beaucoup de jeunes des campagnes, surtout du nord (Kara, Savanes), vers Lomé et la région Maritime, à la recherche d'un emploi, comme Yendouban. Des paysans partent aussi vers les terres de plantation des Plateaux et de la Centrale.",
      "Ensuite, des Togolais émigrent vers les pays voisins (Nigeria, Côte d'Ivoire, Ghana, Gabon, comme le frère de Yendouban), vers l'Europe (France, Allemagne) et vers l'Amérique du Nord.",
      "Enfin, le Togo accueille aussi des immigrés, Nigérians comme Mme Adébayo, Ghanéens, Burkinabè, Béninois, Libanais, Chinois…, qui travaillent surtout dans le commerce. Mais il part plus de personnes qu'il n'en arrive : le solde migratoire du Togo est négatif."],
    concl: "En définitive, le Togo est un pays qui bouge : ses jeunes partent vers Lomé ou à l'étranger, et il accueille des commerçants venus d'ailleurs ; au total, il perd plus d'habitants qu'il n'en reçoit.",
    justesse: ["Migrations internes : exode rural des jeunes du nord (Kara, Savanes) vers Lomé et la Maritime ; paysans vers les terres de plantation des Plateaux et de la Centrale.",
      "Émigration : Nigeria, Côte d'Ivoire, Ghana, Gabon ; France, Allemagne ; Amérique du Nord.",
      "Immigration : Nigérians, Ghanéens, Burkinabè, Béninois, Libanais, Chinois, surtout dans le commerce ; solde migratoire négatif."],
    concepts: "Migration interne, exode rural, émigration, immigration, solde migratoire."
  }]
});

EPREUVES_3E.g3_6.sit.push({
  texte: "Le conseil municipal des jeunes de ta commune organise un forum sur le thème « Notre jeunesse : chance ou fardeau ? ». Le maire a lu aux participants la lettre ci-dessous, écrite par le directeur d'une école de la commune. Désigné pour représenter ton collège, tu dois prononcer une intervention.",
  consigne: "Rédige ton intervention au forum : à partir de la lettre du directeur et de tes connaissances, montre les enjeux sociaux, économiques et environnementaux de l'extrême jeunesse de la population togolaise.",
  doc: { titre: "Document : la lettre du directeur d'école", texte: "« Monsieur le Maire, cette année encore, nous avons inscrit plus d'enfants que nous n'avons de places : nos classes débordent et il manque des maîtres. Beaucoup de nos anciens élèves, diplômés, restent sans travail et parlent de partir. Et autour de l'école, les derniers arbres disparaissent sous les nouvelles maisons. »" },
  intro: "Plus de quatre Togolais sur dix ont moins de quinze ans. À partir de la lettre du directeur d'école, je vais montrer les enjeux sociaux, économiques et environnementaux de cette extrême jeunesse.",
  adresse: "Monsieur le Maire, chers jeunes conseillers, chers camarades,",
  support: "Le forum « Notre jeunesse : chance ou fardeau ? » ; la lettre du directeur (classes qui débordent, manque de maîtres, diplômés sans travail qui parlent de partir, arbres qui disparaissent sous les maisons) ; informations exploitées",
  indConsigne: "Intervention : population très jeune (40,9 % de moins de 15 ans, 4,7 % de 65 ans et plus) ; enjeux sociaux (écoles, formation, santé, logements ; chômage, pauvreté, départs, paix sociale) ; enjeux économiques (main-d'œuvre, population active, marché, si formation et emploi) ; enjeux environnementaux (pression sur terres, eau, forêts, faune)",
  dev: ["D'abord, la population togolaise est très jeune : au recensement de 2022, 40,9 % des Togolais avaient moins de 15 ans, et seulement 4,7 % avaient 65 ans ou plus. Cette jeunesse pose des défis sociaux : il faut assez d'écoles, de centres de formation, de centres de santé et de logements. Sinon, comme le craint le directeur, le chômage, la pauvreté et le départ des jeunes menacent la paix sociale.",
    "Ensuite, la jeunesse est une chance pour l'économie : les jeunes forment une main-d'œuvre abondante, la future population active et un grand marché de consommation. Mais ce n'est vrai qu'à condition qu'ils soient formés et qu'ils trouvent un emploi, ce qui n'est pas le cas des anciens élèves dont parle la lettre.",
    "Enfin, la croissance de la population a des conséquences sur l'environnement : elle augmente la pression sur les terres, l'eau, les forêts et la faune, comme les arbres qui disparaissent autour de l'école sous les nouvelles maisons."],
  concl: "En définitive, notre jeunesse n'est ni une chance ni un fardeau en elle-même : elle deviendra une force si nous investissons dans l'école, la formation et l'emploi, tout en protégeant notre environnement. Je vous remercie.",
  justesse: ["Population très jeune : 40,9 % de moins de 15 ans, 4,7 % de 65 ans et plus (RGPH-5, 2022).",
    "Enjeux sociaux : écoles, centres de formation, centres de santé, logements ; sinon chômage, pauvreté, départs, menace pour la paix sociale. Enjeux économiques : main-d'œuvre abondante, future population active, grand marché, à condition de formation et d'emploi.",
    "Enjeux environnementaux : pression accrue sur les terres, l'eau, les forêts et la faune."],
  concepts: "Structure par âge, extrême jeunesse, enjeu, population active, chômage, marché de consommation, pression sur l'environnement."
});
EPREUVES_3E.g3_6.sit.push({
  texte: "Pour la semaine culturelle de ton collège, les élèves de 3e préparent une exposition sur « Le visage de la population togolaise ». Ton groupe doit rédiger deux panneaux. Vous disposez d'une petite enquête faite dans votre classe (document 1) et d'un fait survenu pendant un match entre deux classes (document 2).",
  consignes: ["À partir de l'enquête du document 1 et de tes connaissances, rédige le premier panneau : présente la structure de la population togolaise par sexe et par activité.",
    "À partir du document 2 et de tes connaissances, rédige le second panneau : montre les avantages et les défis de la diversité des peuples du Togo."],
  docs: [{ titre: "Document 1 : l'enquête de la classe sur les parents d'élèves", tableau: { entetes: ["Métier des parents", "Nombre"], lignes: [["Agriculteurs, éleveurs, pêcheurs", "21"], ["Maçons, couturières, menuisiers, ouvriers d'usine", "9"], ["Commerçants, chauffeurs, enseignants, infirmiers, employés de banque", "14"]] } },
    { titre: "Document 2 : ce qui s'est passé au match", texte: "« Pendant le match entre la 3e A et la 3e B, quelques supporters se sont mis à insulter les joueurs adverses en se moquant de leur langue et de leur région. Après le match, les deux capitaines, l'un kabyè et l'autre éwé, se sont serré la main ; ils sont amis depuis la 6e et apprennent chacun la langue de l'autre. »" }],
  prods: [{
    intro: "Qui sont les Togolais ? Ce premier panneau présente la structure de la population togolaise par sexe et par activité, en s'appuyant sur l'enquête menée dans notre classe.",
    support: "L'enquête de la classe (document 1) : 21 parents agriculteurs, éleveurs ou pêcheurs ; 9 maçons, couturières, menuisiers ou ouvriers d'usine ; 14 commerçants, chauffeurs, enseignants, infirmiers ou employés de banque ; informations exploitées",
    indConsigne: "Panneau 1 : structure par sexe (51,3 % de femmes, 48,7 % d'hommes) ; structure par activité : secteur primaire (le plus important), secondaire, tertiaire, avec des exemples tirés de l'enquête",
    dev: ["D'abord, au Togo, il y a un peu plus de femmes que d'hommes : 51,3 % de femmes et 48,7 % d'hommes.",
      "Ensuite, les actifs travaillent dans trois secteurs. Le secteur primaire regroupe l'agriculture, l'élevage, la pêche et les mines : c'est le plus important, comme dans notre enquête, où 21 parents sur 44 sont agriculteurs, éleveurs ou pêcheurs. Le secteur secondaire regroupe l'industrie, l'artisanat et le bâtiment : ce sont les maçons, les couturières, les menuisiers et les ouvriers d'usine de l'enquête.",
      "Enfin, le secteur tertiaire regroupe les services : commerce, transports, tourisme, administration, banques… Dans notre classe, 14 parents y travaillent : commerçants, chauffeurs, enseignants, infirmiers et employés de banque."],
    concl: "En définitive, la population togolaise compte un peu plus de femmes que d'hommes, et elle vit encore surtout du secteur primaire, même si les services se développent.",
    justesse: ["Structure par sexe : 51,3 % de femmes, 48,7 % d'hommes.",
      "Secteur primaire (agriculture, élevage, pêche, mines), le plus important : 21 parents sur 44 dans l'enquête ; secteur secondaire (industrie, artisanat, bâtiment) : 9 parents.",
      "Secteur tertiaire (commerce, transports, tourisme, administration, banques) : 14 parents."],
    concepts: "Structure par sexe, population active, secteur primaire, secteur secondaire, secteur tertiaire."
  }, {
    intro: "Le Togo compte une quarantaine d'ethnies. Ce second panneau, à partir de ce qui s'est passé au match, montre les avantages de cette diversité, mais aussi les défis qu'elle pose.",
    support: "Le fait du match (document 2) : insultes de supporters sur la langue et la région des adversaires ; poignée de main des capitaines kabyè et éwé, amis depuis la 6e, qui apprennent la langue de l'autre ; informations exploitées",
    indConsigne: "Panneau 2 : une quarantaine d'ethnies et leurs groupes (adja-éwé, kabyè-tem, para-gourma, autres) ; avantages (culture nationale enrichie, échanges et brassage, vivre-ensemble) ; défis (tribalisme, favoritisme, repli sur soi, conflits) ; respect, dialogue, diversité qui unit",
    dev: ["D'abord, le Togo compte une quarantaine d'ethnies, classées en groupes selon leurs liens de langue et de culture : le groupe adja-éwé au sud, le groupe kabyè-tem au centre et dans la Kara, le groupe para-gourma au nord, et d'autres groupes comme les Akposso, les Akébou, les Ana-Ifè ou les Anoufo.",
      "Ensuite, cette diversité est une richesse : elle enrichit la culture nationale par ses langues, ses fêtes, ses danses et ses savoir-faire ; elle favorise les échanges et le brassage des populations, par les mariages et la vie dans les villes ; elle permet d'apprendre le vivre-ensemble, comme les deux capitaines, l'un kabyè, l'autre éwé, qui apprennent chacun la langue de l'autre.",
      "Enfin, mal acceptée, la diversité peut entraîner le tribalisme, le favoritisme, le repli sur soi et des conflits, comme le montrent les insultes des supporters. Il faut donc respecter chaque culture, dialoguer et faire de la diversité une force qui unit."],
    concl: "En définitive, comme nos deux capitaines, faisons de nos différences une force : la diversité des peuples du Togo unit ceux qui la respectent.",
    justesse: ["Une quarantaine d'ethnies : groupes adja-éwé (sud), kabyè-tem (centre, Kara), para-gourma (nord), autres (Akposso, Akébou, Ana-Ifè, Anoufo…).",
      "Avantages : culture nationale enrichie (langues, fêtes, danses, savoir-faire) ; échanges et brassage (mariages, villes) ; apprentissage du vivre-ensemble.",
      "Défis : tribalisme, favoritisme, repli sur soi, conflits ; respecter chaque culture, dialoguer, faire de la diversité une force qui unit."],
    concepts: "Ethnie, diversité, brassage, vivre-ensemble, tribalisme, favoritisme, repli sur soi."
  }]
});

// Situations nouvelles des leçons de géographie de 3e, leçons 7 à 12 (01/11/2026) : mêmes règles que src3e_2.js.
EPREUVES_3E.g3_7.sit.push({
  texte: "Ta classe a passé une journée dans un village de la région des Plateaux, chez des paysans. Chaque groupe a rempli une grille d'observation (document). De retour au collège, le professeur de géographie demande à chacun un compte rendu de la visite.",
  consigne: "Rédige le compte rendu de la visite : à partir de la grille d'observation et de tes connaissances, présente les caractéristiques de l'agriculture togolaise, puis montre son importance pour l'économie du pays.",
  doc: { titre: "Document : la grille d'observation du groupe", tableau: { entetes: ["Ce que nous avons observé", "Ce que nous avons noté"], lignes: [["Outils", "houes (dabas), coupe-coupe ; aucune charrue, aucun tracteur"], ["Préparation du champ", "les herbes sont brûlées avant les semailles"], ["Taille du champ", "petite parcelle cultivée par la famille"], ["Cultures", "maïs, igname et manioc pour la famille ; coton vendu"], ["Récolte", "l'an dernier, une partie perdue faute de pluie"]] } },
  titreProd: "Compte rendu : une journée chez les paysans",
  intro: "Ma classe a passé une journée chez des paysans d'un village des Plateaux. Ce compte rendu présente, à partir de notre grille d'observation, les caractéristiques de l'agriculture togolaise, puis son importance pour l'économie du pays.",
  support: "La visite dans un village des Plateaux ; la grille d'observation (dabas et coupe-coupe, ni charrue ni tracteur ; herbes brûlées ; petite parcelle familiale ; maïs, igname, manioc pour la famille, coton vendu ; récolte perdue faute de pluie) ; informations exploitées",
  indConsigne: "Compte rendu : outils rudimentaires ; techniques traditionnelles (pluviale, extensive, brûlis, exploitations familiales) ; cultures vivrières et cultures de rente ; rendements faibles, dépendance au climat ; rôle dans l'économie (actifs, richesse, exportations, nourriture, matières premières, revenus, commerce)",
  dev: ["D'abord, l'agriculture que nous avons observée utilise des outils rudimentaires : la houe ou daba, le coupe-coupe, le bâton à fouir. Comme dans le village visité, la charrue attelée et le tracteur restent rares au Togo.",
    "Ensuite, les techniques sont traditionnelles : l'agriculture est pluviale et extensive ; on pratique la culture sur brûlis, comme les paysans qui brûlent les herbes avant de semer, sur de petites exploitations familiales. C'est une agriculture à deux visages : les cultures vivrières (maïs, sorgho, mil, igname, manioc, riz) servent à nourrir la famille, et les cultures de rente (coton, café, cacao, soja, anacarde) sont vendues. Les rendements sont faibles et les récoltes sont à la merci du climat, comme celle que la sécheresse a réduite l'an dernier.",
    "Enfin, malgré ces faiblesses, l'agriculture est la principale activité du pays : elle occupe une grande partie des actifs et fournit une part importante de la richesse nationale et des exportations. Elle nourrit la population, donne des matières premières aux industries (coton, soja, palme), procure des revenus aux paysans et alimente le commerce."],
  concl: "En définitive, l'agriculture togolaise reste traditionnelle et fragile, mais elle fait vivre le pays : la moderniser, c'est nourrir les Togolais et faire reculer la pauvreté.",
  justesse: ["Outils rudimentaires : houe (daba), coupe-coupe, bâton à fouir ; charrue attelée et tracteur rares.",
    "Techniques traditionnelles : agriculture pluviale et extensive, culture sur brûlis, petites exploitations familiales ; cultures vivrières (maïs, sorgho, mil, igname, manioc, riz) et cultures de rente (coton, café, cacao, soja, anacarde) ; rendements faibles, récoltes à la merci du climat.",
    "Importance : principale activité ; grande partie des actifs ; part importante de la richesse nationale et des exportations ; nourriture, matières premières (coton, soja, palme), revenus, commerce."],
  concepts: "Agriculture extensive, agriculture pluviale, culture sur brûlis, culture vivrière, culture de rente, rendement."
});
EPREUVES_3E.g3_7.sit.push({
  texte: "La coopérative de femmes de ton village tient son assemblée générale. La présidente, Mme Afiwa, veut convaincre les membres qu'il est possible de mieux produire, et elle te demande, comme élève de 3e, de préparer deux interventions. Elle te remet l'affiche d'une foire agricole (document 1) et le témoignage d'un riziculteur (document 2).",
  consignes: ["À partir de l'affiche du document 1 et de tes connaissances, présente aux membres de la coopérative les atouts humains, techniques, financiers et institutionnels de l'agriculture togolaise.",
    "À partir du document 2 et de tes connaissances, montre-leur les efforts faits pour moderniser l'agriculture et les défis qu'elle doit encore relever."],
  docs: [{ titre: "Document 1 : l'affiche de la foire agricole", liste: ["Stand de l'ICAT : conseils, semences améliorées", "Stand de l'ITRA : résultats de la recherche agricole", "Stand du MIFA : crédits pour les agriculteurs", "Vente d'engrais subventionnés", "Démonstration de culture attelée", "Coopératives et groupements de femmes"] },
    { titre: "Document 2 : ce que raconte un riziculteur de la plaine de Djagblé", texte: "« Depuis que notre plaine a été aménagée et irriguée, je fais deux récoltes de riz par an au lieu d'une. Nous nous sommes regroupés en coopérative pour acheter une motoculteuse. Mais il nous manque encore un magasin pour stocker le riz, et les acheteurs nous imposent leurs prix. Et la pluie devient de plus en plus capricieuse. »" }],
  prods: [{
    intro: "Mme Afiwa veut montrer aux membres de la coopérative qu'il est possible de mieux produire. Dans cette première intervention, à partir de l'affiche de la foire agricole, je vais présenter les atouts humains, techniques, financiers et institutionnels de l'agriculture togolaise.",
    adresse: "Madame la Présidente, chères mamans,",
    support: "L'assemblée de la coopérative de femmes ; l'affiche de la foire (document 1 : ICAT, ITRA, MIFA, engrais subventionnés, culture attelée, coopératives et groupements de femmes) ; informations exploitées",
    indConsigne: "Intervention 1 : atouts humains (main-d'œuvre nombreuse et jeune, dynamisme des femmes, entraide) ; techniques (début de mécanisation, culture attelée, semences améliorées, engrais, irrigation, ITRA, ICAT) ; financiers et institutionnels (subvention des engrais, MIFA, FNFI, PNIASA puis PNIASAN, monnaie stable, CEDEAO, UEMOA)",
    dev: ["D'abord, l'agriculture togolaise a des atouts humains : une main-d'œuvre nombreuse et jeune, le dynamisme des femmes, comme vous, et les groupes d'entraide.",
      "Ensuite, elle a des atouts techniques : un début de mécanisation et de culture attelée, comme la démonstration de la foire, des semences améliorées et des engrais, l'irrigation, et des centres de recherche et de conseil, l'ITRA et l'ICAT, présents à la foire.",
      "Enfin, elle a des atouts financiers et institutionnels : la subvention des engrais, les crédits aux agriculteurs du MIFA et du FNFI, les programmes de l'État (PNIASA, puis PNIASAN), la stabilité de la monnaie et l'appartenance du Togo à la CEDEAO et à l'UEMOA."],
    concl: "En définitive, chères mamans, nous ne sommes pas seules : des hommes et des femmes nombreux, des techniques et des crédits existent pour nous aider à mieux produire.",
    justesse: ["Atouts humains : main-d'œuvre nombreuse et jeune, dynamisme des femmes, groupes d'entraide.",
      "Atouts techniques : début de mécanisation et de culture attelée, semences améliorées, engrais, irrigation, ITRA, ICAT.",
      "Atouts financiers et institutionnels : subvention des engrais, crédits (MIFA, FNFI), PNIASA puis PNIASAN, stabilité de la monnaie, CEDEAO, UEMOA."],
    concepts: "Atout, main-d'œuvre, mécanisation, culture attelée, semence améliorée, subvention, crédit agricole."
  }, {
    intro: "Le témoignage du riziculteur de Djagblé montre que l'agriculture change, mais aussi qu'il reste beaucoup à faire. Dans cette seconde intervention, je vais présenter les efforts de modernisation de l'agriculture, puis les défis à relever.",
    adresse: "Madame la Présidente, chères mamans,",
    support: "Le témoignage du riziculteur (document 2) : plaine de Djagblé aménagée et irriguée, deux récoltes par an, coopérative et motoculteuse ; pas de magasin de stockage, prix imposés, pluie capricieuse ; informations exploitées",
    indConsigne: "Intervention 2 : efforts (périmètres irrigués de la Kara et de Djagblé, ZAAP, MIFA, ICAT, coopératives, mécanisation) ; défis (sécurité alimentaire, outils et techniques, crédit, magasins de stockage, usines de transformation, changements climatiques, protection des sols)",
    dev: ["D'abord, l'État a engagé des efforts pour moderniser l'agriculture : il aménage des périmètres irrigués, pour le riz dans la Kara ou dans la plaine de Djagblé, dans la Maritime, où le riziculteur fait désormais deux récoltes par an ; il crée des zones d'aménagement agricole planifiées (ZAAP) ; il finance les agriculteurs par le MIFA ; l'ICAT leur apporte conseils, semences et engrais.",
      "Ensuite, les producteurs se regroupent en coopératives et la mécanisation progresse, comme la motoculteuse achetée par la coopérative du riziculteur.",
      "Enfin, de grands défis restent à relever : produire assez pour nourrir une population qui augmente, c'est la sécurité alimentaire ; moderniser les outils et les techniques ; faciliter le crédit ; construire des magasins de stockage et des usines de transformation, qui manquent au riziculteur ; s'adapter aux changements climatiques, comme cette pluie de plus en plus capricieuse ; protéger les sols."],
    concl: "En définitive, chères mamans, l'agriculture togolaise est en pleine mutation : en nous regroupant et en profitant de l'aide de l'État, nous pouvons, nous aussi, relever ces défis.",
    justesse: ["Efforts : périmètres irrigués (riz dans la Kara, plaine de Djagblé), ZAAP, financement (MIFA), conseil, semences et engrais (ICAT).",
      "Coopératives de producteurs ; mécanisation.",
      "Défis : sécurité alimentaire, outils et techniques modernes, crédit, magasins de stockage, usines de transformation, adaptation aux changements climatiques, protection des sols."],
    concepts: "Modernisation, périmètre irrigué, ZAAP, coopérative, mécanisation, sécurité alimentaire, changement climatique."
  }]
});

EPREUVES_3E.g3_8.sit.push({
  texte: "Le journal de ton collège prépare un numéro spécial intitulé « Consommons togolais ! ». En rangeant la cuisine, tu as relevé les produits fabriqués au Togo que ta famille utilise (document). Le rédacteur en chef te demande un article sur l'industrie de notre pays.",
  consigne: "Rédige l'article, avec un titre : à partir du document et de tes connaissances, présente les industries extractives et les industries de transformation du Togo, puis les caractéristiques générales de l'industrie togolaise.",
  doc: { titre: "Document : les produits « made in Togo » de la maison", liste: ["l'huile de cuisine de NIOTO", "la farine de la SGMT", "une bière de la BB ou de la SNB", "le ciment de CIMTOGO qui a servi à construire la cuisine", "une chemise cousue à Adétikopé, avec le coton égrené à Notsé"] },
  titreProd: "« Made in Togo » : que fabrique notre industrie ?",
  intro: "Dans notre cuisine, l'huile, la farine ou le ciment des murs sont fabriqués au Togo. Cet article présente les industries extractives et les industries de transformation de notre pays, puis les caractéristiques de notre industrie.",
  support: "Le numéro spécial « Consommons togolais ! » ; les produits de la maison (huile de NIOTO, farine de la SGMT, bière de la BB ou de la SNB, ciment de CIMTOGO, chemise cousue à Adétikopé avec le coton égrené à Notsé) ; informations exploitées",
  indConsigne: "Article : industries extractives (SNPT, WACEM, SOTOMA) ; industries de transformation (agroalimentaires, textiles, chimiques et de matériaux) ; caractéristiques (peu développée et peu variée, concentrée à Lomé et dans le sud, dépendante des mines et des matières premières)",
  dev: ["D'abord, le Togo a des industries extractives, qui tirent les richesses du sous-sol : la SNPT (Société nouvelle des phosphates du Togo) extrait les phosphates ; WACEM produit le clinker à Tabligbo ; la SOTOMA travaille le marbre.",
    "Ensuite, des industries de transformation fabriquent les produits que nous consommons. Les industries agroalimentaires produisent l'huile (NIOTO), la bière (brasseries BB et SNB) et la farine (SGMT), comme celles de notre cuisine. Les industries textiles égrènent le coton à Notsé, Atakpamé, Kara et Dapaong, et la confection se développe à Adétikopé, d'où vient la chemise. Les industries chimiques et de matériaux fabriquent le ciment, comme CIMTOGO, des plastiques, du savon et du gaz.",
    "Enfin, l'industrie togolaise reste peu développée et peu variée ; elle est concentrée à Lomé et dans le sud, et elle dépend des mines et des matières premières."],
  concl: "En définitive, notre industrie fabrique déjà une partie de ce que nous consommons, mais elle reste jeune : consommer togolais, c'est l'aider à grandir.",
  justesse: ["Industries extractives : SNPT (phosphates), WACEM (clinker, Tabligbo), SOTOMA (marbre).",
    "Industries de transformation : agroalimentaires (NIOTO, BB, SNB, SGMT) ; textiles (égrenage à Notsé, Atakpamé, Kara, Dapaong ; confection à Adétikopé) ; chimiques et de matériaux (CIMTOGO, plastiques, savon, gaz).",
    "Caractéristiques : peu développée, peu variée, concentrée à Lomé et dans le sud, dépendante des mines et des matières premières."],
  concepts: "Industrie extractive, industrie de transformation, agroalimentaire, textile, égrenage, clinker."
});
EPREUVES_3E.g3_8.sit.push({
  texte: "Ton grand frère, étudiant en géographie, prépare un exposé sur le thème « Le Togo peut-il transformer ses richesses sur place ? ». Il te demande de l'aider à rédiger deux parties. Il te remet les notes prises pendant la conférence d'un géologue (document 1) et une petite chronologie (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, rédige la première partie de l'exposé : présente les ressources dont dispose le Togo pour son industrie.",
    "À partir de la chronologie du document 2 et de tes connaissances, rédige la seconde partie : montre les efforts d'industrialisation du Togo et les défis qu'il doit relever."],
  docs: [{ titre: "Document 1 : les notes prises à la conférence du géologue", texte: "« Phosphates de Hahotoé-Kpogamé, traités à Kpémé ; calcaire de la région de Tabligbo ; marbre de Gnaoulou, près de Pagala ; or. Gisements peu ou pas exploités : fer de Bandjéli, manganèse de Nayéga, chromite du mont Ahito, bauxite du mont Agou. Électricité : Nangbéto, Kpimé, Lomé, Blitta ; tout le pétrole est importé. »" },
    { titre: "Document 2 : quelques dates de l'industrialisation du Togo", liste: ["1989 : création de la zone franche", "2021 : inauguration de la Plateforme industrielle d'Adétikopé (PIA)", "centrale solaire de Blitta", "politique nationale de l'industrie pour 2024-2040"] }],
  prods: [{
    intro: "Pour transformer ses richesses sur place, le Togo doit d'abord en avoir. Cette première partie présente, à partir des notes du géologue, les ressources énergétiques, minières et agricoles dont dispose le pays pour son industrie.",
    support: "Les notes du géologue (document 1) : phosphates de Hahotoé-Kpogamé traités à Kpémé, calcaire de Tabligbo, marbre de Gnaoulou, or ; fer de Bandjéli, manganèse de Nayéga, chromite du mont Ahito, bauxite du mont Agou peu ou pas exploités ; électricité de Nangbéto, Kpimé, Lomé, Blitta ; pétrole importé ; informations exploitées",
    indConsigne: "Partie 1 : énergie (Nangbéto, Kpimé, centrales thermiques de Lomé, centrale solaire de Blitta ; pétrole et une partie de l'électricité importés) ; minerais exploités et non exploités ; matières premières agricoles",
    dev: ["D'abord, le Togo produit de l'énergie : l'électricité vient des barrages hydroélectriques de Nangbéto, sur le Mono, et de Kpimé, dans le Kloto, des centrales thermiques de Lomé et de la centrale solaire de Blitta. Mais le pays importe tout son pétrole et une partie de son électricité.",
      "Ensuite, son sous-sol est riche : on exploite les phosphates de Hahotoé-Kpogamé, traités à Kpémé, le calcaire de la région de Tabligbo, qui donne le clinker et le ciment, le marbre de Gnaoulou, près de Pagala, et l'or, par l'orpaillage. D'autres gisements sont peu ou pas exploités : le fer de Bandjéli, dans le Bassar, le manganèse de Nayéga, la chromite du mont Ahito et la bauxite du mont Agou.",
      "Enfin, l'agriculture fournit des matières premières à l'industrie : coton, palme, soja, anacarde, café, cacao et canne à sucre."],
    concl: "En définitive, le Togo possède de l'énergie, des minerais et des produits agricoles : il a les ressources nécessaires pour s'industrialiser, même si une partie reste inexploitée.",
    justesse: ["Énergie : barrages de Nangbéto (Mono) et de Kpimé (Kloto), centrales thermiques de Lomé, centrale solaire de Blitta ; pétrole et une partie de l'électricité importés.",
      "Minerais exploités : phosphates (Hahotoé-Kpogamé, Kpémé), calcaire (Tabligbo), marbre (Gnaoulou), or ; peu ou pas exploités : fer (Bandjéli), manganèse (Nayéga), chromite (mont Ahito), bauxite (mont Agou).",
      "Matières premières agricoles : coton, palme, soja, anacarde, café, cacao, canne à sucre."],
    concepts: "Ressource, énergie hydroélectrique, gisement, minerai, phosphate, matière première."
  }, {
    intro: "Le Togo a des ressources, mais il doit encore apprendre à les transformer. Cette seconde partie montre, à l'aide de la chronologie, les efforts d'industrialisation du pays, puis les défis qu'il doit relever.",
    support: "La chronologie (document 2) : zone franche (1989), PIA (2021), centrale solaire de Blitta, politique nationale de l'industrie 2024-2040 ; informations exploitées",
    indConsigne: "Partie 2 : efforts (zone franche 1989 ; PIA 2021, transformation du coton, du soja, de l'anacarde et du bois ; électricité et routes ; CEDEAO et UEMOA ; politique 2024-2040) ; défis (techniques et machines étrangères, capitaux et crédits, électricité, marché étroit et concurrence, main-d'œuvre qualifiée, transformation sur place)",
    dev: ["D'abord, le Togo a créé en 1989 une zone franche pour attirer les entreprises. En 2021, il a inauguré la Plateforme industrielle d'Adétikopé (PIA), où l'on transforme sur place le coton, le soja, l'anacarde et le bois.",
      "Ensuite, il améliore l'électricité, avec la centrale solaire de Blitta, et les routes ; il coopère avec ses voisins dans la CEDEAO et l'UEMOA ; il s'est doté d'une politique nationale de l'industrie pour 2024-2040.",
      "Enfin, de nombreux défis restent à relever : réduire la dépendance envers les techniques et les machines étrangères ; trouver des capitaux et des crédits ; avoir une électricité suffisante et moins chère ; faire face à l'étroitesse du marché intérieur et à la concurrence des produits importés ; former une main-d'œuvre qualifiée ; transformer davantage sur place au lieu d'exporter des matières premières."],
    concl: "En définitive, le Togo peut transformer ses richesses sur place : la zone franche et la PIA montrent la voie, mais il lui faut encore des capitaux, de l'énergie et des travailleurs qualifiés.",
    justesse: ["Zone franche (1989) ; PIA inaugurée en 2021 (transformation du coton, du soja, de l'anacarde et du bois).",
      "Amélioration de l'électricité (centrale solaire de Blitta) et des routes ; coopération (CEDEAO, UEMOA) ; politique nationale de l'industrie 2024-2040.",
      "Défis : dépendance technique, capitaux et crédits, électricité suffisante et moins chère, marché intérieur étroit, concurrence des importations, main-d'œuvre qualifiée, transformation sur place."],
    concepts: "Industrialisation, zone franche, plateforme industrielle, capitaux, concurrence, main-d'œuvre qualifiée, transformation sur place."
  }]
});

EPREUVES_3E.g3_9.sit.push({
  texte: "Ta classe a visité le port autonome de Lomé (document). Sur les quais, le guide a montré les conteneurs prêts à partir et ceux qui venaient d'arriver, puis il a demandé : « Selon vous, le Togo vend-il plus qu'il n'achète ? » Personne n'a su répondre. Le professeur demande à chaque élève un compte rendu de la visite.",
  consigne: "Rédige le compte rendu de la visite : à partir de la photo et de tes connaissances, présente le commerce extérieur du Togo (exportations, importations, balance commerciale, partenaires), puis les problèmes qu'il rencontre.",
  doc: { titre: "Document : le terminal à conteneurs du port autonome de Lomé", image: "images/ep4_port_lome.jpg", credit: "Photo Chado07 — CC0 (Wikimedia Commons)." },
  titreProd: "Compte rendu : visite au port autonome de Lomé",
  intro: "Au port autonome de Lomé, notre guide nous a demandé si le Togo vend plus qu'il n'achète. Ce compte rendu présente le commerce extérieur du Togo, puis les problèmes qu'il rencontre.",
  support: "La visite du port autonome de Lomé ; la photo du terminal à conteneurs ; les conteneurs qui partent et ceux qui arrivent ; la question du guide ; informations exploitées",
  indConsigne: "Compte rendu : exportations (produits agricoles, miniers, réexportations vers les pays sans littoral) ; importations (alimentaires, manufacturés, pétroliers) ; balance commerciale déficitaire ; partenaires (Burkina Faso premier client, voisins et Sahel, Inde, Union européenne, Chine premier fournisseur) ; problèmes du commerce extérieur",
  dev: ["D'abord, les conteneurs qui partent emportent les exportations du Togo : des produits agricoles (coton, café, cacao, soja, sésame, anacarde) et des produits miniers (phosphates, clinker, ciment). Le port sert aussi aux réexportations vers les pays sans littoral : Burkina Faso, Niger, Mali. Les conteneurs qui arrivent apportent les importations : des produits alimentaires (riz, blé, sucre, huile), des produits manufacturés (véhicules, machines, appareils, tissus) et des produits pétroliers.",
    "Ensuite, la réponse à la question du guide est non : les importations dépassent les exportations, la balance commerciale du Togo est déficitaire. Ses partenaires sont les pays voisins et du Sahel (le Burkina Faso, premier client, le Bénin, le Mali, le Ghana, le Niger), l'Inde, l'Union européenne, avec la France, et la Chine, premier fournisseur.",
    "Enfin, ce commerce rencontre des problèmes : les exportations sont peu variées, surtout des produits bruts ; les produits togolais sont peu compétitifs ; le pays dépend fortement des importations ; il doit respecter les exigences des normes internationales (OMC, AGOA) ; et le port de Lomé subit la concurrence des ports voisins pour le transit."],
  concl: "En définitive, grâce à son port, le Togo commerce avec ses voisins et avec le monde, mais il achète plus qu'il ne vend : il doit vendre davantage de produits transformés.",
  justesse: ["Exportations : coton, café, cacao, soja, sésame, anacarde ; phosphates, clinker, ciment ; réexportations vers le Burkina Faso, le Niger, le Mali. Importations : riz, blé, sucre, huile ; véhicules, machines, appareils, tissus ; produits pétroliers.",
    "Balance commerciale déficitaire ; partenaires : Burkina Faso (premier client), Bénin, Mali, Ghana, Niger, Inde, Union européenne (France), Chine (premier fournisseur).",
    "Problèmes : exportations peu variées et brutes, produits peu compétitifs, dépendance envers les importations, normes internationales (OMC, AGOA), concurrence des ports voisins."],
  concepts: "Commerce extérieur, exportation, importation, réexportation, balance commerciale déficitaire, partenaire commercial, transit."
});
EPREUVES_3E.g3_9.sit.push({
  texte: "La radio de ta ville anime un débat sur le thème « Le commerce, moteur ou maillon faible de l'économie togolaise ? ». Tu es invité à intervenir deux fois. L'animatrice te remet le témoignage d'un transitaire du port (document 1) et celui de deux commerçants (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, montre aux auditeurs l'importance du commerce pour le Togo.",
    "À partir du document 2 et de tes connaissances, présente-leur les problèmes du commerce intérieur et du commerce extérieur togolais."],
  docs: [{ titre: "Document 1 : ce que dit un transitaire du port de Lomé", texte: "« Chaque camion qui part vers Ouagadougou fait travailler des dockers, des chauffeurs, des banquiers et des assureurs. Les taxes que nous payons à la douane remplissent les caisses de l'État. Et c'est grâce au commerce que les produits de nos paysans arrivent jusqu'aux marchés et que les magasins sont remplis. »" },
    { titre: "Document 2 : deux commerçants se plaignent", texte: "Mme Dédé, vendeuse de vivres à Vogan : « Les gens n'ont pas d'argent ; je n'ai pas de magasin pour garder mes produits et, sur la route, on nous arrête sans cesse. » M. Agbéko, exportateur de soja : « Nous vendons surtout des graines brutes ; à l'étranger, on nous impose des normes difficiles, et nos produits coûtent plus cher que ceux des autres. »" }],
  prods: [{
    intro: "Le commerce est-il le moteur de notre économie ? Dans cette première intervention, à partir du témoignage d'un transitaire du port de Lomé, je vais montrer l'importance du commerce pour le Togo.",
    adresse: "Chers auditeurs,",
    support: "Le débat radio ; le témoignage du transitaire (document 1) : camions vers Ouagadougou, dockers, chauffeurs, banquiers, assureurs ; taxes de douane ; produits des paysans jusqu'aux marchés, magasins remplis ; informations exploitées",
    indConsigne: "Intervention 1 : emplois (actifs, familles) ; recettes de l'État (droits de douane, taxes) ; écoulement des produits et approvisionnement ; activité du port, des transports et des banques ; ouverture sur le monde",
    dev: ["D'abord, le commerce occupe beaucoup d'actifs et fait vivre des milliers de familles : commerçantes des marchés, mais aussi, comme le dit le transitaire, dockers, chauffeurs, banquiers et assureurs.",
      "Ensuite, il rapporte à l'État des recettes, grâce aux droits de douane et aux taxes. Il écoule les produits du pays, ceux des paysans par exemple, et il approvisionne la population.",
      "Enfin, il fait travailler le port, les transports et les banques, et il ouvre le Togo sur le monde, comme les camions qui partent chaque jour de Lomé vers Ouagadougou."],
    concl: "En définitive, chers auditeurs, le commerce est bien un moteur de l'économie togolaise : il donne du travail, des recettes à l'État et relie le Togo au monde.",
    justesse: ["Emplois : beaucoup d'actifs, milliers de familles.",
      "Recettes de l'État (droits de douane, taxes) ; écoulement des produits du pays et approvisionnement de la population.",
      "Activité du port, des transports et des banques ; ouverture du Togo sur le monde."],
    concepts: "Commerce, emploi, recette fiscale, droit de douane, approvisionnement, ouverture."
  }, {
    intro: "Le commerce est aussi un maillon fragile. Dans cette seconde intervention, à partir des plaintes de deux commerçants, je vais présenter les problèmes du commerce intérieur, puis ceux du commerce extérieur.",
    adresse: "Chers auditeurs,",
    support: "Les plaintes des commerçants (document 2) : Mme Dédé à Vogan (clients sans argent, pas de magasin, contrôles sur la route) ; M. Agbéko (soja brut, normes étrangères, produits plus chers) ; informations exploitées",
    indConsigne: "Intervention 2 : commerce intérieur (marché étroit, faible pouvoir d'achat, informel, manque de marchés modernes, de magasins et de routes rurales, tracasseries) ; commerce extérieur (exportations peu variées et brutes, produits peu compétitifs, dépendance envers les importations, normes OMC et AGOA, concurrence des ports voisins)",
    dev: ["D'abord, le commerce intérieur souffre d'un marché étroit et d'un faible pouvoir d'achat : comme le dit Mme Dédé, les gens n'ont pas d'argent. Il est surtout informel, et il manque de marchés modernes, de magasins de stockage et de routes rurales ; les commerçants subissent aussi des tracasseries sur les routes.",
      "Ensuite, le commerce extérieur a ses propres faiblesses : les exportations sont peu variées et faites surtout de produits bruts, comme le soja en graines de M. Agbéko ; les produits togolais sont peu compétitifs, car ils coûtent plus cher que ceux des autres.",
      "Enfin, le Togo dépend fortement des importations, il doit respecter les exigences des normes internationales (OMC, AGOA), et le port de Lomé subit la concurrence des ports voisins pour le transit."],
    concl: "En définitive, chers auditeurs, pour que le commerce reste un moteur, il faut moderniser les marchés, transformer nos produits et les rendre compétitifs.",
    justesse: ["Commerce intérieur : marché étroit, faible pouvoir d'achat, informel, manque de marchés modernes, de magasins de stockage et de routes rurales, tracasseries sur les routes.",
      "Commerce extérieur : exportations peu variées, surtout brutes ; produits peu compétitifs.",
      "Forte dépendance envers les importations ; normes internationales (OMC, AGOA) ; concurrence des ports voisins pour le transit."],
    concepts: "Pouvoir d'achat, commerce informel, tracasseries, compétitivité, norme internationale, transit."
  }]
});

EPREUVES_3E.g3_10.sit.push({
  texte: "Ton collège organise un salon de l'orientation. Le conseiller d'orientation veut créer un stand consacré aux métiers de la mer et te confie la rédaction d'une fiche d'information pour les élèves de 3e. Il te remet le plan des stands prévus (document).",
  consigne: "Rédige la fiche d'information : à partir du document et de tes connaissances, présente aux élèves les activités de l'économie bleue au Togo et les métiers qu'elles offrent.",
  doc: { titre: "Document : le plan du stand « Métiers de la mer »", liste: ["Agents de transit et dockers du port de Lomé", "Préfecture maritime (ONAEM)", "Pêcheurs, mareyeuses et pisciculteurs", "Entreprises de la zone franche", "Hôtels d'Agbodrafo et d'Aného", "Club de voile et de surf de Lomé"] },
  titreProd: "Les métiers de la mer : et si ton avenir était bleu ?",
  intro: "Beaucoup d'élèves pensent que la mer ne fait vivre que les pêcheurs. Cette fiche présente les activités de l'économie bleue au Togo et les nombreux métiers qu'elles offrent.",
  support: "Le salon de l'orientation ; le plan du stand (transit et dockers du port, préfecture maritime/ONAEM, pêcheurs, mareyeuses, pisciculteurs, zone franche, hôtels d'Agbodrafo et d'Aného, club de voile et de surf) ; informations exploitées",
  indConsigne: "Fiche : définition de l'économie bleue ; logistique maritime et ses métiers ; surveillance de la mer (préfecture maritime, ONAEM) ; pêche, aquaculture, transformation et vente du poisson ; industries de la zone franche ; tourisme balnéaire et hôtellerie ; sports nautiques",
  dev: ["D'abord, l'économie bleue est l'ensemble des activités économiques liées à la mer, au littoral, aux lacs et aux lagunes, menées en protégeant ces milieux. Sa première activité au Togo est la logistique maritime : le transport des marchandises, le transit et la manutention au port de Lomé. Elle offre de nombreux métiers : agent de transit, consignataire, docker, magasinier, courtier et assureur maritimes, réparateur de conteneurs.",
    "Ensuite, la mer est surveillée par la préfecture maritime, bras opérationnel de l'Organisme national chargé de l'action de l'État en mer (ONAEM). La pêche, en mer et dans les lagunes, l'aquaculture, la transformation et la vente du poisson font vivre pêcheurs, pisciculteurs et mareyeuses. Les entreprises de la zone franche offrent aussi des emplois industriels.",
    "Enfin, le tourisme balnéaire et l'hôtellerie, à Lomé, Agbodrafo et Aného, emploient du personnel d'hôtel et de restaurant, et les sports nautiques (natation, surf, voile, canoë) ont besoin de moniteurs et d'encadreurs."],
  concl: "En définitive, la mer offre au Togo bien plus que la pêche : du port aux hôtels, l'économie bleue propose de nombreux métiers d'avenir.",
  justesse: ["Économie bleue : activités liées à la mer, au littoral, aux lacs et aux lagunes, en protégeant ces milieux ; logistique maritime (transport, transit, manutention) : agent de transit, consignataire, docker, magasinier, courtier et assureur maritimes, réparateur de conteneurs.",
    "Surveillance de la mer : préfecture maritime, bras opérationnel de l'ONAEM ; pêche (mer, lagunes), aquaculture, transformation et vente du poisson ; industries de la zone franche.",
    "Tourisme balnéaire et hôtellerie (Lomé, Agbodrafo, Aného) ; sports nautiques (natation, surf, voile, canoë)."],
  concepts: "Économie bleue, logistique maritime, transit, manutention, aquaculture, tourisme balnéaire, sports nautiques."
});
EPREUVES_3E.g3_10.sit.push({
  texte: "Le club « Mer et littoral » de ton collège prépare une exposition pour la Journée mondiale de l'océan, le 8 juin. Tu es chargé de deux panneaux. Le président du club te remet la photo de pirogues sur une plage du Togo (document 1) et des témoignages recueillis à Lomé et à Agbodrafo (document 2).",
  consignes: ["Rédige le premier panneau : à partir de la photo du document 1 et de tes connaissances, explique ce qu'est l'économie bleue et présente les atouts du Togo dans ce domaine.",
    "Rédige le second panneau : à partir du document 2 et de tes connaissances, montre l'importance de l'économie bleue pour le Togo."],
  docs: [{ titre: "Document 1 : des pirogues de pêche sur une plage du Togo", image: "images/ep5_pirogues_plage.jpg", credit: "Photo : Rtemanou, CC0 — aucun droit réservé (Wikimedia Commons)." },
    { titre: "Document 2 : trois témoignages", texte: "Un docker du port : « Le trafic n'arrête pas d'augmenter : environ 30 millions de tonnes par an aujourd'hui. » Une mareyeuse : « Comme plus de 20 000 personnes, je vis de la pêche. » Un hôtelier d'Agbodrafo : « Nos clients étrangers paient en devises, et nos plages font travailler tout le village. »" }],
  prods: [{
    intro: "La mer est une richesse pour le Togo. Ce premier panneau explique, à partir de la photo de pirogues sur une plage, ce qu'est l'économie bleue et présente les atouts de notre pays dans ce domaine.",
    support: "La Journée mondiale de l'océan ; la photo des pirogues de pêche sur une plage du Togo (document 1) : la pêche, la plage, la mer ; informations exploitées",
    indConsigne: "Panneau 1 : définition de l'économie bleue ; atouts (côte d'environ 55 km, port autonome de Lomé en eau profonde, échanges avec le Sahel, zone franche, lac Togo et lagunes, plages, ressources de pêche)",
    dev: ["D'abord, l'économie bleue est l'ensemble des activités économiques liées à la mer, au littoral, aux lacs et aux lagunes, menées en protégeant ces milieux. La pêche, que montrent les pirogues de la photo, en est un exemple.",
      "Ensuite, le Togo a des atouts : une côte d'environ 55 km sur le golfe de Guinée et le port autonome de Lomé, port en eau profonde, au cœur des échanges avec les pays du Sahel ; une zone franche.",
      "Enfin, il possède le lac Togo et des lagunes, de belles plages, comme celle de la photo, et des ressources de pêche."],
    concl: "En définitive, malgré une côte très courte, le Togo a de vrais atouts pour tirer profit de la mer, à condition de la protéger.",
    justesse: ["Économie bleue : activités liées à la mer, au littoral, aux lacs et aux lagunes, menées en protégeant ces milieux.",
      "Atouts : côte d'environ 55 km sur le golfe de Guinée ; port autonome de Lomé, en eau profonde, au cœur des échanges avec le Sahel ; zone franche.",
      "Lac Togo et lagunes ; plages ; ressources de pêche."],
    concepts: "Économie bleue, littoral, port en eau profonde, zone franche, lagune, ressource halieutique."
  }, {
    intro: "Le docker, la mareyeuse et l'hôtelier vivent tous de la mer. Ce second panneau montre, à partir de leurs témoignages, l'importance de l'économie bleue pour le Togo.",
    support: "Les témoignages (document 2) : le docker (trafic d'environ 30 millions de tonnes par an), la mareyeuse (plus de 20 000 personnes vivent de la pêche), l'hôtelier d'Agbodrafo (devises, plages qui font travailler le village) ; informations exploitées",
    indConsigne: "Panneau 2 : port moteur de l'économie (22,6 Mt en 2019, environ 30 Mt en 2023-2024, environ 2 millions d'EVP, droits de douane) ; pêche (plus de 20 000 personnes, environ 4,5 % du PIB) ; tourisme balnéaire (devises) ; 5 à 7 % du PIB, milliers d'emplois",
    dev: ["D'abord, le port de Lomé est le moteur de l'économie : comme le dit le docker, son trafic augmente, passant de 22,6 millions de tonnes en 2019 à environ 30 millions de tonnes en 2023-2024, avec environ 2 millions de conteneurs (EVP) par an. Les droits de douane qu'il rapporte forment une grande part des recettes de l'État.",
      "Ensuite, la pêche fait vivre plus de 20 000 personnes, comme la mareyeuse, et compterait pour environ 4,5 % du PIB. Le tourisme balnéaire, comme à Agbodrafo, fait entrer des devises.",
      "Enfin, au total, l'économie bleue apporte environ 5 à 7 % du PIB et crée des milliers d'emplois directs et indirects."],
    concl: "En définitive, port, pêche et plages font de la mer une grande richesse pour le Togo : la protéger contre l'érosion et la pollution, c'est protéger notre économie.",
    justesse: ["Port de Lomé, moteur de l'économie : 22,6 millions de tonnes (2019), environ 30 millions (2023-2024), environ 2 millions d'EVP par an ; droits de douane, grande part des recettes de l'État.",
      "Pêche : plus de 20 000 personnes, environ 4,5 % du PIB ; tourisme balnéaire : devises.",
      "Économie bleue : environ 5 à 7 % du PIB ; milliers d'emplois directs et indirects."],
    concepts: "Trafic portuaire, conteneur (EVP), droit de douane, PIB, devise, emploi direct, emploi indirect."
  }]
});

EPREUVES_3E.g3_11.sit.push({
  texte: "Ta grand-mère vit dans un village de la région des Savanes. Elle t'a envoyé un message vocal (document) : elle se demande pourquoi tout le monde parle d'internet et pourquoi elle ne peut pas regarder les vidéos que tu lui envoies. Le blog de ton collège cherche justement un article sur les télécommunications au Togo.",
  consigne: "Rédige l'article du blog, avec un titre : à partir du message de ta grand-mère et de tes connaissances, présente les acteurs et les caractéristiques des télécommunications au Togo, puis leur importance pour le pays.",
  doc: { titre: "Document : le message vocal de grand-mère", texte: "« Mon enfant, ton oncle m'a envoyé de l'argent par le téléphone, c'est arrivé tout de suite, c'est bien. Mais tes vidéos ne s'ouvrent pas : ici, le réseau va et vient. Au bureau de poste, on m'a dit qu'en ville, les gens ont internet à la maison, mais que ça coûte cher. »" },
  titreProd: "Le Togo connecté : jusqu'où ?",
  intro: "Ma grand-mère, dans son village des Savanes, reçoit de l'argent par téléphone, mais ne peut pas ouvrir les vidéos que je lui envoie. Cet article présente les acteurs et les caractéristiques des télécommunications au Togo, puis leur importance.",
  support: "Le message vocal de grand-mère : argent reçu par téléphone tout de suite ; vidéos qui ne s'ouvrent pas, réseau qui va et vient au village ; bureau de poste ; internet à la maison en ville, mais cher ; informations exploitées",
  indConsigne: "Article : acteurs (SPT, Yas et Moov Africa, fournisseurs de fibre optique, station terrienne de Cacaveli) ; caractéristiques (portable partout, 3G et 4G presque nationales ; débit faible à la campagne, internet fixe en ville, coût élevé) ; importance (information, paiements et commerce à distance, administration, emplois et start-up, 7 à 8 % du PIB)",
  dev: ["D'abord, les télécommunications du Togo reposent sur plusieurs acteurs : la Société des postes du Togo (SPT), dont grand-mère connaît le bureau ; deux opérateurs de téléphonie mobile et d'internet, Yas (l'ancien Togocom) et Moov Africa ; des fournisseurs d'internet par fibre optique ; et la station terrienne de Cacaveli.",
    "Ensuite, le téléphone portable est partout et le réseau 3G et 4G couvre presque tout le pays. Mais, comme le constate grand-mère, le débit est plus faible et instable à la campagne ; l'internet fixe se trouve surtout en ville, et son coût est encore élevé.",
    "Enfin, les télécommunications sont très importantes : elles font circuler rapidement l'information ; elles permettent les paiements et le commerce à distance, comme l'argent que l'oncle a envoyé par téléphone ; elles relient l'administration à ses services ; elles créent des emplois et des entreprises, les start-up ; elles apportent environ 7 à 8 % du PIB."],
  concl: "En définitive, le Togo est de plus en plus connecté, mais pas encore partout de la même façon : pour que grand-mère puisse voir mes vidéos, il faudra améliorer le réseau des campagnes et baisser les prix.",
  justesse: ["Acteurs : SPT ; Yas (ancien Togocom) et Moov Africa ; fournisseurs de fibre optique ; station terrienne de Cacaveli.",
    "Caractéristiques : portable partout ; 3G et 4G presque nationales ; débit faible et instable à la campagne ; internet fixe surtout en ville ; coût encore élevé.",
    "Importance : circulation rapide de l'information ; paiements et commerce à distance (argent mobile) ; administration reliée à ses services ; emplois et start-up ; environ 7 à 8 % du PIB."],
  concepts: "Télécommunications, opérateur, réseau mobile, débit, fibre optique, argent mobile, start-up."
});
EPREUVES_3E.g3_11.sit.push({
  texte: "Le conseil régional organise une journée de réflexion sur le thème « Routes et réseaux : le Togo se modernise-t-il ? ». Ton collège y est invité, et le directeur te charge de préparer deux interventions. Il te remet une liste de réalisations récentes (document 1) et des propos entendus à la gare routière (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, présente les efforts de modernisation des transports et des télécommunications au Togo.",
    "À partir du document 2 et de tes connaissances, montre les défis que les transports et les télécommunications doivent encore relever."],
  docs: [{ titre: "Document 1 : quelques réalisations récentes", liste: ["voies de contournement de la faille d'Alédjo et des monts Défalé", "troisième quai et terminal à conteneurs du port de Lomé", "nouvelle aérogare de l'aéroport de Lomé", "câbles sous-marins WACS (2012) et Equiano (2022)", "centre de données (2021)", "Agence Togo Digital (2021)"] },
    { titre: "Document 2 : propos entendus à la gare routière", texte: "Un chauffeur : « Le train ? Les rails de Lomé à Kpalimé sont sous les herbes depuis longtemps ! Et la piste de mon village devient un bourbier à chaque pluie. » Un conducteur de taxi-moto : « Il y a trop d'accidents sur nos routes. » Un étudiant : « Au village, internet est lent et le forfait me coûte trop cher. »" }],
  prods: [{
    intro: "Le Togo a beaucoup investi dans ses routes, son port et ses réseaux numériques. Dans cette première intervention, à partir de la liste des réalisations récentes, je vais présenter les efforts de modernisation des transports et des télécommunications.",
    adresse: "Mesdames et Messieurs les conseillers,",
    support: "La journée de réflexion du conseil régional ; la liste des réalisations (document 1 : contournement de la faille d'Alédjo et des monts Défalé, troisième quai et terminal à conteneurs, nouvelle aérogare, câbles WACS 2012 et Equiano 2022, centre de données 2021, Agence Togo Digital 2021) ; informations exploitées",
    indConsigne: "Intervention 1 : transports (contournements d'Alédjo et des Défalé, bitumage et réhabilitation, route côtière Abidjan-Lagos, troisième quai et terminal à conteneurs, nouvelle aérogare) ; télécommunications (WACS, Equiano, fibre optique, point d'échange et centre de données, 4G puis 5G, Agence nationale de la cybersécurité, Agence Togo Digital)",
    dev: ["D'abord, les transports se modernisent : on a construit des voies de contournement de la faille d'Alédjo et des monts Défalé ; on bitume et on réhabilite les routes, comme la route côtière Abidjan-Lagos.",
      "Ensuite, le port de Lomé a été agrandi, avec un troisième quai et un terminal à conteneurs, et l'aéroport de Lomé a reçu une nouvelle aérogare.",
      "Enfin, les télécommunications progressent : le Togo est relié aux câbles sous-marins WACS (2012) et Equiano (2022) ; la fibre optique arrive jusqu'au domicile ; un point d'échange internet et un centre de données ont été créés en 2021 ; la 4G, puis la 5G, se répandent ; l'Agence nationale de la cybersécurité (2019) et l'Agence Togo Digital (2021) numérisent et protègent les services publics."],
    concl: "En définitive, de la faille d'Alédjo aux câbles sous-marins, le Togo modernise ses routes, son port, son aéroport et ses réseaux : il devient un carrefour régional.",
    justesse: ["Routes : voies de contournement de la faille d'Alédjo et des monts Défalé ; bitumage et réhabilitation (route côtière Abidjan-Lagos).",
      "Port : troisième quai et terminal à conteneurs ; aéroport de Lomé : nouvelle aérogare.",
      "Télécommunications : câbles WACS (2012) et Equiano (2022), fibre optique jusqu'au domicile, point d'échange internet et centre de données (2021), 4G puis 5G, Agence nationale de la cybersécurité (2019), Agence Togo Digital (2021)."],
    concepts: "Modernisation, voie de contournement, terminal à conteneurs, aérogare, câble sous-marin, fibre optique, cybersécurité."
  }, {
    intro: "Malgré ces progrès, les voyageurs de la gare routière se plaignent. Dans cette seconde intervention, à partir de leurs propos, je vais montrer les défis que les transports et les télécommunications doivent encore relever.",
    adresse: "Mesdames et Messieurs les conseillers,",
    support: "Les propos de la gare routière (document 2) : rails de Lomé-Kpalimé sous les herbes, piste du village en bourbier, accidents trop nombreux, internet lent et forfait trop cher au village ; informations exploitées",
    indConsigne: "Intervention 2 : relancer le chemin de fer ; entretenir et étendre les routes et les pistes rurales ; sécurité routière ; compétitivité face aux ports voisins ; coût de l'internet, débit, couverture des campagnes ; cybersécurité",
    dev: ["D'abord, il faut relancer le chemin de fer : les lignes de l'époque coloniale, comme celle de Lomé à Kpalimé dont parle le chauffeur, sont presque abandonnées. Il faut aussi entretenir et étendre les routes, surtout les pistes rurales qui deviennent des bourbiers.",
      "Ensuite, il faut améliorer la sécurité routière, car les accidents sont trop nombreux, et rester compétitif face aux ports voisins.",
      "Enfin, pour les télécommunications, il faut baisser le coût de l'internet, améliorer le débit et couvrir les campagnes, comme le demande l'étudiant, et renforcer la cybersécurité."],
    concl: "En définitive, Mesdames et Messieurs, la modernisation doit atteindre aussi les villages : rail, pistes, sécurité et internet pour tous sont les prochains défis.",
    justesse: ["Relancer le chemin de fer (lignes coloniales presque abandonnées) ; entretenir et étendre les routes, surtout les pistes rurales.",
      "Améliorer la sécurité routière ; rester compétitif face aux ports voisins.",
      "Baisser le coût de l'internet, améliorer le débit, couvrir les campagnes ; renforcer la cybersécurité."],
    concepts: "Défi, chemin de fer, piste rurale, sécurité routière, compétitivité, débit, couverture réseau, cybersécurité."
  }]
});

EPREUVES_3E.g3_12.sit.push({
  texte: "Une agence de voyages de Lomé prépare un guide intitulé « Le Togo, une région à la fois ». Elle organise un concours entre les collèges : chaque classe doit rédiger le texte de présentation des sites touristiques du pays. Pour la couverture, l'agence a choisi la photo ci-dessous.",
  consigne: "Rédige le texte du guide : à partir de la photo et de tes connaissances, explique ce qu'est le tourisme, puis présente les principaux sites touristiques du Togo, région par région.",
  doc: { titre: "Document : une maison takienta du pays tamberma (Koutammakou), au début du XXe siècle", image: "images/ep5_tata_tamberma.jpg", credit: "Photo des frères Hackel, publiée dans Die Sitten der Völker (début du XXe siècle) — domaine public (Wikimedia Commons)." },
  titreProd: "Le Togo, une région à la fois",
  intro: "Une agence de voyages veut faire découvrir le Togo région par région. Ce guide explique d'abord ce qu'est le tourisme, puis présente les principaux sites du pays, de la côte aux Savanes.",
  support: "Le concours de l'agence de voyages ; la photo de couverture : une maison takienta du pays tamberma (Koutammakou), au début du XXe siècle ; informations exploitées",
  indConsigne: "Guide : définition du tourisme ; sites de la Maritime et du Grand Lomé ; des Plateaux ; de la Centrale ; de la Kara (dont le Koutammakou, patrimoine mondial de l'UNESCO) ; des Savanes",
  dev: ["D'abord, le tourisme est le fait de voyager pour son plaisir, pour découvrir des lieux différents de celui où l'on vit : paysages, monuments, cultures. Le Togo offre tout cela. Dans la région Maritime et le Grand Lomé, on découvre les plages, le wharf, les monuments coloniaux, le grand marché et le marché des féticheurs de Lomé ; le lac Togo, avec Togoville et Agbodrafo ; la basse vallée du Mono et la réserve de Togodo, avec ses hippopotames, ses singes et ses antilopes.",
    "Ensuite, la région des Plateaux attire par ses cascades de Kpimé, de Womé et d'Akloa, par le mont Agou, le château Viale à Kpalimé et le monastère de Dzogbégan. Dans la région Centrale, on visite le parc national de Fazao-Malfakassa et l'on admire le tissage des nattes de Tchamba.",
    "Enfin, la région de la Kara offre la faille d'Alédjo, les hauts fourneaux de Nangbani (Bandjéli), les cultures en terrasses et les fêtes d'initiation du pays kabyè, le parc de la Kéran, et surtout le Koutammakou, pays des Batammariba (Tamberma), dont les maisons takienta, comme celle de la couverture, sont inscrites au patrimoine mondial de l'UNESCO. Dans les Savanes, on découvre la plaine de l'Oti, la falaise de Bombouaka, les grottes de Nok, la fosse aux lions et le marché de Dapaong."],
  concl: "En définitive, des plages de Lomé aux grottes de Nok, chaque région du Togo a ses trésors : partez à leur découverte, une région à la fois !",
  justesse: ["Tourisme : voyager pour son plaisir, découvrir des lieux différents (paysages, monuments, cultures). Maritime et Grand Lomé : plages, wharf, monuments coloniaux, grand marché, marché des féticheurs, lac Togo (Togoville, Agbodrafo), basse vallée du Mono, réserve de Togodo.",
    "Plateaux : cascades de Kpimé, Womé, Akloa ; mont Agou ; château Viale ; monastère de Dzogbégan. Centrale : parc de Fazao-Malfakassa ; nattes de Tchamba.",
    "Kara : faille d'Alédjo ; Koutammakou (Batammariba, takienta, patrimoine mondial de l'UNESCO) ; hauts fourneaux de Nangbani ; terrasses et fêtes d'initiation kabyè ; parc de la Kéran. Savanes : plaine de l'Oti, falaise de Bombouaka, grottes de Nok, fosse aux lions, marché de Dapaong."],
  concepts: "Tourisme, site touristique, patrimoine mondial, parc national, réserve, écotourisme."
});
EPREUVES_3E.g3_12.sit.push({
  texte: "Ta sœur aînée fait un stage à l'Office national du tourisme. Sa responsable lui demande un petit rapport sur le tourisme au Togo, et elle te demande de l'aider à rédiger deux parties. Elle te remet le carnet de la réceptionniste d'un hôtel de Lomé (document 1) et un tableau des recettes du tourisme (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, rédige la première partie du rapport : présente les caractéristiques du tourisme au Togo.",
    "À partir du document 2 et de tes connaissances, rédige la seconde partie : montre l'importance du tourisme pour le Togo."],
  docs: [{ titre: "Document 1 : le carnet de la réceptionniste d'un hôtel de Lomé", texte: "« Cette semaine : un groupe d'Ivoiriens venus visiter les cascades de Kpalimé, deux familles burkinabè en vacances à la plage, des Togolais de la diaspora rentrés pour les fêtes, et cent participants à une conférence internationale. Aucun client togolais vivant au pays. Le directeur dit que presque tous les bons hôtels sont à Lomé. »" },
    { titre: "Document 2 : les recettes du tourisme au Togo", tableau: { entetes: ["Année", "Recettes du tourisme"], lignes: [["2019", "environ 53 milliards de FCFA"], ["2020 (COVID-19)", "environ 19 milliards de FCFA"]] } }],
  prods: [{
    intro: "Qui sont les touristes du Togo, et pourquoi viennent-ils ? Cette première partie du rapport présente les caractéristiques du tourisme au Togo, à partir du carnet de la réceptionniste d'un hôtel de Lomé.",
    support: "Le stage à l'Office national du tourisme ; le carnet de la réceptionniste (document 1) : Ivoiriens aux cascades de Kpalimé, familles burkinabè à la plage, diaspora rentrée pour les fêtes, conférence internationale, aucun client togolais du pays, bons hôtels presque tous à Lomé ; informations exploitées",
    indConsigne: "Partie 1 : types de tourisme (découverte de la nature et des cultures, loisirs au bord de la mer, affaires et conférences à Lomé) ; origine des visiteurs (pays voisins, diaspora) ; concentration des hôtels et des services à Lomé et dans le sud ; peu de Togolais visitent leur pays",
    dev: ["D'abord, le tourisme togolais est surtout un tourisme de découverte de la nature et des cultures, comme les Ivoiriens venus voir les cascades de Kpalimé, un tourisme de loisirs au bord de la mer, comme les familles burkinabè, et un tourisme d'affaires, avec les conférences organisées à Lomé.",
      "Ensuite, les visiteurs viennent surtout des pays voisins (Côte d'Ivoire, Burkina Faso, Bénin) et de la diaspora, comme les Togolais rentrés pour les fêtes.",
      "Enfin, les hôtels et les services sont concentrés à Lomé et dans le sud, comme le dit le directeur de l'hôtel, et peu de Togolais visitent leur propre pays : la réceptionniste n'a reçu aucun client togolais vivant au pays."],
    concl: "En définitive, le tourisme au Togo attire surtout des voisins et la diaspora, autour de Lomé ; il reste à le développer dans tout le pays et auprès des Togolais eux-mêmes.",
    justesse: ["Tourisme de découverte (nature, cultures), de loisirs au bord de la mer et d'affaires (conférences à Lomé).",
      "Visiteurs surtout des pays voisins (Côte d'Ivoire, Burkina Faso, Bénin) et de la diaspora.",
      "Hôtels et services concentrés à Lomé et dans le sud ; peu de Togolais visitent leur propre pays."],
    concepts: "Tourisme de découverte, tourisme balnéaire, tourisme d'affaires, diaspora, tourisme intérieur."
  }, {
    intro: "Le tourisme est-il important pour le Togo ? Cette seconde partie du rapport le montre, à l'aide du tableau des recettes du tourisme.",
    support: "Le tableau des recettes (document 2) : environ 53 milliards de FCFA en 2019, environ 19 milliards en 2020 à cause du COVID-19 ; baisse calculée ; informations exploitées",
    indConsigne: "Partie 2 : devises (53 milliards de FCFA en 2019, 19 milliards en 2020, COVID-19) ; emplois (hôtels, restaurants, guides, transports) ; artisanat et arts ; image du Togo et rapprochement des cultures",
    dev: ["D'abord, le tourisme fait entrer des devises : environ 53 milliards de FCFA de recettes en 2019. Le tableau montre aussi sa fragilité : en 2020, à cause du COVID-19, les recettes sont tombées à environ 19 milliards, soit une perte d'environ 34 milliards.",
      "Ensuite, il crée des emplois dans les hôtels, les restaurants, chez les guides et dans les transports, et il fait vivre l'artisanat et les arts.",
      "Enfin, il fait connaître le Togo à l'étranger et rapproche les cultures."],
    concl: "En définitive, le tourisme rapporte des devises, des emplois et une bonne image au Togo, mais il reste fragile : il faut le développer et le diversifier.",
    justesse: ["Devises : environ 53 milliards de FCFA en 2019, environ 19 milliards en 2020 (COVID-19), soit environ 34 milliards de moins.",
      "Emplois (hôtels, restaurants, guides, transports) ; artisanat et arts.",
      "Le tourisme fait connaître le Togo et rapproche les cultures."],
    concepts: "Recette touristique, devise, emploi, artisanat, rayonnement, rapprochement des cultures."
  }]
});

// Situations nouvelles des leçons d'histoire de 3e, leçons 1 à 6 (01/11/2026) : 3 situations par leçon en tout, tirées des traces,
// différentes des situations d'apprentissage, des évaluations, des devoirs, des situations compétence, des intégrations
// et des situations déjà en réserve. Deux consignes au plus ; quand il y en a deux, un document par consigne (docs).
EPREUVES_3E.h3_1.sit.push({
  texte: "En feuilletant un vieux livre d'histoire au CDI, ta camarade Akossiwa découvre la caricature ci-dessous : un Britannique géant, un fusil à l'épaule, pose un pied au sud et l'autre au nord de l'Afrique. Elle s'étonne : « Pourquoi les Européens voulaient-ils tant posséder l'Afrique ? » Le club d'histoire te demande d'écrire la fiche qui accompagnera cette image dans l'exposition du collège.",
  consigne: "Rédige la fiche d'exposition : à partir de la caricature et de tes connaissances, explique ce qu'est l'impérialisme, puis présente ses différentes causes.",
  doc: { titre: "Document : « Le colosse Rhodes », caricature du Britannique Cecil Rhodes, qui rêvait d'une Afrique britannique « du Cap au Caire » (1892)", image: "images/ep3_rhodes_colosse.jpg", credit: "Edward Linley Sambourne, revue Punch, 1892 — domaine public (Wikimedia Commons)." },
  titreProd: "« Le colosse Rhodes » : pourquoi l'Afrique ?",
  intro: "Cette caricature montre un Britannique géant qui enjambe l'Afrique du sud au nord. Elle illustre l'impérialisme : cette fiche explique ce qu'est l'impérialisme, puis pourquoi les Européens voulaient tant dominer l'Afrique.",
  support: "La question d'Akossiwa ; la caricature (le géant Cecil Rhodes, fusil à l'épaule, un pied au Cap, l'autre au Caire : l'Afrique entière sous domination britannique, 1892) ; informations exploitées",
  indConsigne: "Fiche : définition de l'impérialisme (domination de peuples plus faibles, exploitation, autorité et culture imposées ; colonisation, forme la plus visible) ; causes économiques, démographiques, stratégiques et militaires, politiques, scientifiques et « humanitaires » (les « trois C »)",
  dev: ["D'abord, l'impérialisme est la politique d'un État qui cherche à dominer d'autres peuples, plus faibles techniquement et militairement, pour les exploiter et leur imposer son autorité et sa culture. La colonisation en est la forme la plus visible. Le géant de la caricature, qui enjambe tout le continent avec son fusil, en est le symbole : il veut une Afrique britannique du Cap au Caire.",
    "Ensuite, l'impérialisme a d'abord des causes économiques : les pays industrialisés veulent des matières premières pour leurs usines, des débouchés pour vendre leurs produits et placer leurs capitaux, des terres pour les plantations et une main-d'œuvre bon marché. Il a aussi des causes démographiques, installer une partie de la population sur de nouvelles terres, et des causes stratégiques et militaires : contrôler les routes commerciales, installer des bases navales, recruter des soldats.",
    "Enfin, il a des causes politiques, accroître sa puissance et son prestige en construisant un vaste empire, comme le rêve du colosse de la caricature, ainsi que des causes scientifiques et « humanitaires » : explorer les terres inconnues, prétendre « civiliser » et christianiser les peuples et mettre fin à la traite. C'est la théorie des « trois C » : commerce, christianisme, civilisation."],
  concl: "En définitive, derrière le géant de la caricature se cachent des intérêts économiques, politiques et militaires : l'impérialisme a voulu faire de l'Afrique une possession européenne.",
  justesse: ["Impérialisme : politique d'un État qui domine des peuples plus faibles techniquement et militairement pour les exploiter et leur imposer son autorité et sa culture ; colonisation, forme la plus visible.",
    "Causes économiques (matières premières, débouchés, placement des capitaux, terres, main-d'œuvre bon marché) ; démographiques (installer une partie de la population) ; stratégiques et militaires (routes commerciales, bases navales, soldats).",
    "Causes politiques (puissance, prestige, vastes empires) ; scientifiques et « humanitaires » (exploration, « civiliser », christianiser, fin de la traite) : les « trois C »."],
  concepts: "Impérialisme, colonisation, matière première, débouché, capitaux, base navale, prestige, « trois C »."
});
EPREUVES_3E.h3_1.sit.push({
  texte: "Ton club d'histoire prépare un débat intitulé « L'impérialisme, une invention européenne ? ». Ton groupe doit présenter deux exposés. Votre professeur vous remet une petite frise de dominations à travers le temps (document 1) et une gravure de la conférence de Berlin (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, montre dans le premier exposé que l'impérialisme a un caractère universel.",
    "À partir de la gravure du document 2 et de tes connaissances, présente dans le second exposé les moyens politiques et militaires utilisés par les Européens pour conquérir l'Afrique à la fin du XIXe siècle."],
  docs: [{ titre: "Document 1 : des dominations à travers le temps", liste: ["Antiquité : l'Égypte des pharaons domine la Nubie ; Rome conquiert la Grèce, la Gaule et l'Afrique du Nord", "Moyen Âge : le Mali et le Songhaï soumettent leurs voisins", "À partir du XVe siècle : empires portugais, espagnol, puis anglais et français", "Début du XXe siècle : le Japon conquiert la Corée", "1914 : en Afrique, seuls l'Éthiopie et le Liberia restent indépendants"] },
    { titre: "Document 2 : la conférence de Berlin (1884-1885), autour du chancelier Bismarck, devant une grande carte de l'Afrique", image: "images/ep3_conference_berlin.jpg", credit: "Adalbert von Roessler, gravure publiée dans la revue Über Land und Meer, 1884 — domaine public (Wikimedia Commons)." }],
  prods: [{
    intro: "L'impérialisme est-il une invention européenne ? Dans ce premier exposé, à partir de la frise du document 1, je vais montrer qu'il a existé à toutes les époques et sur tous les continents.",
    adresse: "Chers camarades,",
    support: "Le débat du club d'histoire ; la frise du document 1 (Égypte et Nubie, Rome ; Mali et Songhaï ; empires portugais, espagnol, anglais, français ; Japon et Corée ; 1914 : Éthiopie et Liberia seuls indépendants) ; informations exploitées",
    indConsigne: "Exposé 1 : impérialisme de l'Antiquité (Égypte, Rome) ; empires africains (Mali, Songhaï) ; empires européens à partir du XVe siècle ; Japon au XXe siècle ; Afrique de 1914 ; conclusion : caractère universel",
    dev: ["D'abord, l'impérialisme existait déjà dans l'Antiquité : l'Égypte des pharaons a dominé la Nubie, et Rome a conquis la Grèce, la Gaule et l'Afrique du Nord.",
      "Ensuite, des empires africains ont aussi dominé leurs voisins, comme le Mali et le Songhaï. À partir du XVe siècle, les Portugais et les Espagnols, puis les Anglais et les Français, ont fondé des empires en Amérique, en Asie et en Afrique ; au début du XXe siècle, le Japon a conquis la Corée.",
      "Enfin, en 1914, l'Afrique est presque entièrement dominée : seuls l'Éthiopie et le Liberia restent indépendants. L'impérialisme a donc existé à toutes les époques et sur tous les continents : on dit qu'il a un caractère universel."],
    concl: "En définitive, chers camarades, l'impérialisme n'est pas une invention européenne : il est universel, même si les Européens l'ont poussé très loin en Afrique à la fin du XIXe siècle.",
    justesse: ["Antiquité : l'Égypte des pharaons domine la Nubie ; Rome conquiert la Grèce, la Gaule, l'Afrique du Nord.",
      "Mali et Songhaï soumettent leurs voisins ; à partir du XVe siècle, empires portugais, espagnol, puis anglais et français (Amérique, Asie, Afrique) ; Japon et Corée (début du XXe siècle).",
      "En 1914, seuls l'Éthiopie et le Liberia restent indépendants en Afrique ; caractère universel de l'impérialisme."],
    concepts: "Impérialisme, empire, domination, caractère universel."
  }, {
    intro: "À la fin du XIXe siècle, les Européens se partagent l'Afrique. Dans ce second exposé, à partir de la gravure de la conférence de Berlin, je vais présenter les moyens politiques et militaires qu'ils ont utilisés pour la conquérir.",
    adresse: "Chers camarades,",
    support: "La gravure de la conférence de Berlin (document 2) : diplomates européens autour de Bismarck, devant une grande carte de l'Afrique (1884-1885) ; informations du document exploitées",
    indConsigne: "Exposé 2 : hommes politiques favorables à la colonisation (Jules Ferry, Léopold II, Bismarck) ; crédits, expéditions, partage à la conférence de Berlin (1884-1885) ; écrivains (Kipling) ; explorateurs et traités ; armées coloniales et tirailleurs, conquête par les armes",
    dev: ["D'abord, des hommes politiques favorables à la colonisation, comme Jules Ferry en France, le roi Léopold II en Belgique ou Bismarck en Allemagne, votent les crédits et envoient les expéditions. Ils se partagent l'Afrique à la conférence de Berlin, en 1884-1885 : la gravure montre les diplomates européens réunis autour de Bismarck, devant une carte du continent, sans aucun Africain.",
      "Ensuite, des écrivains, comme le Britannique Rudyard Kipling, justifient la colonisation, et les explorateurs signent des traités avec les chefs africains pour préparer la domination.",
      "Enfin, les armées coloniales, avec des soldats africains, les tirailleurs, conquièrent les territoires par les armes et écrasent les résistances."],
    concl: "En définitive, chers camarades, l'Afrique a été partagée autour d'une table à Berlin, puis conquise par les armes : la politique et la force ont marché ensemble.",
    justesse: ["Hommes politiques : Jules Ferry (France), Léopold II (Belgique), Bismarck (Allemagne) ; crédits, expéditions ; partage de l'Afrique à la conférence de Berlin (1884-1885), sans Africains.",
      "Écrivains qui justifient la colonisation (Rudyard Kipling) ; traités signés avec les chefs par les explorateurs.",
      "Armées coloniales et tirailleurs : conquête par les armes, résistances écrasées."],
    concepts: "Conférence de Berlin, partage, expédition, traité, armée coloniale, tirailleur."
  }]
});

EPREUVES_3E.h3_2.sit.push({
  texte: "La préfecture de Bassar inaugure un monument en l'honneur des résistants du nord du Togo. Le préfet a choisi un élève de 3e de ton collège pour prononcer un discours, et c'est toi. Le chef traditionnel t'a confié le récit ci-dessous, transmis par les anciens.",
  consigne: "Rédige le discours d'inauguration : à partir du récit et de tes connaissances, explique pourquoi les peuples du Togo ont résisté à la conquête allemande, puis présente les résistances des peuples du nord.",
  doc: { titre: "Document : le récit des anciens de Bassar", texte: "« En 1897, quand les colonnes allemandes sont arrivées, nos pères bassar, avec leurs voisins konkomba, les ont attaquées et leur ont infligé de lourdes pertes. Ils défendaient leurs terres et leur liberté. Il a fallu une grande expédition, l'année suivante, pour les soumettre. Dans les montagnes de la Kara, nos frères kabyè et lamba ont aussi combattu. » (Récit d'après la tradition)" },
  intro: "Nous inaugurons aujourd'hui un monument en l'honneur des résistants du nord du Togo. Dans ce discours, je vais expliquer pourquoi les peuples du Togo ont résisté à la conquête allemande, puis présenter les résistances des peuples du nord.",
  adresse: "Monsieur le Préfet, honorables chefs traditionnels, chers invités,",
  support: "L'inauguration du monument de Bassar ; le récit des anciens (attaque des colonnes allemandes par les Bassar et les Konkomba en 1897, lourdes pertes ; défense des terres et de la liberté ; grande expédition l'année suivante ; combats des Kabyè et des Lamba dans les montagnes) ; informations exploitées",
  indConsigne: "Discours : causes de la résistance (terres, liberté, autorité des chefs, coutumes ; refus des travaux forcés, impôts, châtiments) ; obstacles naturels ; résistances du nord (Bassar et Konkomba 1897, expédition de von Massow 1898 ; Kabyè, Lamba, Losso, Tcharè, Pessidé, lieutenant Thierry ; Bafilo, Kambolé, Anoufo, Moba)",
  dev: ["D'abord, nos ancêtres ont résisté pour défendre leurs terres et leur liberté, comme le dit le récit, pour garder l'autorité de leurs chefs et leurs coutumes, et pour refuser les abus de la colonisation : les travaux forcés, les impôts et les taxes, les châtiments corporels. La conquête s'est aussi heurtée à des obstacles naturels : le relief, les cours d'eau, les maladies tropicales.",
    "Ensuite, ici, en 1897, les Bassar et les Konkomba ont attaqué les colonnes allemandes et leur ont infligé de lourdes pertes ; il a fallu l'expédition de von Massow, en 1898, pour les soumettre. La même année, les Kabyè, les Lamba et les Losso ont combattu ses troupes depuis leurs montagnes : combats de Tcharè, attaque de Pessidé ; en janvier, les Lamba ont blessé le lieutenant Thierry.",
    "Enfin, en 1897-1898, Bafilo et Kambolé ont résisté à leur tour, et les Anoufo de Mango et les Moba se sont soulevés. Tout le nord du Togo s'est dressé contre l'envahisseur."],
  concl: "En définitive, nos ancêtres ont retardé la conquête par leur courage, même si la supériorité des armes allemandes l'a emporté : que ce monument garde vivante leur mémoire. Je vous remercie.",
  justesse: ["Causes : défense des terres et de la liberté, de l'autorité des chefs et des coutumes ; refus des travaux forcés, des impôts et taxes, des châtiments corporels ; obstacles naturels (relief, cours d'eau, maladies tropicales).",
    "1897 : Bassar et Konkomba attaquent les colonnes allemandes (lourdes pertes) ; 1898 : expédition de von Massow ; Kabyè, Lamba, Losso (Tcharè, Pessidé ; les Lamba blessent le lieutenant Thierry).",
    "1897-1898 : résistance de Bafilo et de Kambolé ; soulèvement des Anoufo de Mango et des Moba."],
  concepts: "Résistance, conquête, colonne, expédition, travaux forcés, répression."
});
EPREUVES_3E.h3_2.sit.push({
  texte: "Pour la Journée de la mémoire, la radio de ta ville prépare une émission sur la conquête allemande du Togo. L'animateur te demande deux chroniques. Il te remet un tableau classant ceux qui ont résisté (document 1) et une chronologie des résistances du sud et de l'ouest (document 2).",
  consignes: ["À partir du tableau du document 1 et de tes connaissances, présente aux auditeurs les deux formes de résistance à la conquête coloniale, avec leurs exemples.",
    "À partir de la chronologie du document 2 et de tes connaissances, présente-leur les résistances des peuples du sud et de l'ouest du Togo et la façon dont elles ont été réprimées."],
  docs: [{ titre: "Document 1 : ceux qui ont résisté", tableau: { entetes: ["Résistance des peuples", "Résistance des souverains"], lignes: [["Kabyè, Bassar, Konkomba", "Na Biéma Asabiè (Mango)"], ["certaines communautés éwé", "Aja Kpoyizoun (Tado)"], ["", "Samori Touré, Béhanzin (ailleurs en Afrique)"]] } },
    { titre: "Document 2 : les résistances du sud et de l'ouest", liste: ["1895 : révolte des habitants de Tové (Agbessia)", "1898 : attaque des Akposso à Agomé-Koutoukpa", "1900 : soulèvement d'Ahépé et de Tchèkpo", "1901 : refus du travail forcé par les Agotimé"] }],
  prods: [{
    intro: "La conquête allemande du Togo ne s'est pas faite sans combat. Dans cette première chronique, à partir du tableau, je vais présenter les deux formes qu'a prises la résistance, avec leurs exemples.",
    adresse: "Chers auditeurs,",
    support: "La Journée de la mémoire ; le tableau du document 1 (résistance des peuples : Kabyè, Bassar, Konkomba, communautés éwé ; résistance des souverains : Na Biéma Asabiè, Aja Kpoyizoun, Samori Touré, Béhanzin) ; informations exploitées",
    indConsigne: "Chronique 1 : résistance des peuples (communautés entières, souvent sans roi : Kabyè, Bassar, Konkomba, communautés éwé) ; résistance des souverains (Na Biéma Asabiè, Aja Kpoyizoun ; Samori Touré, Béhanzin) ; raisons communes",
    dev: ["D'abord, la résistance des peuples : des communautés entières, souvent sans roi, refusent toute domination. C'est le cas, au Togo, des Kabyè, des Bassar, des Konkomba et de certaines communautés éwé.",
      "Ensuite, la résistance des souverains : des rois s'opposent aux colonisateurs. Au Togo, Na Biéma Asabiè, à Mango, a résisté aux Allemands, et Aja Kpoyizoun, à Tado, aux Français ; ailleurs en Afrique, Samori Touré et Béhanzin ont mené de longues luttes.",
      "Enfin, peuples et souverains se battaient pour les mêmes raisons : défendre leurs terres, leur liberté, l'autorité de leurs chefs et leurs coutumes, et refuser les travaux forcés, les impôts et les châtiments corporels."],
    concl: "En définitive, chers auditeurs, qu'elle soit menée par des peuples entiers ou par des rois, la résistance a existé partout au Togo.",
    justesse: ["Résistance des peuples : communautés entières, souvent sans roi (Kabyè, Bassar, Konkomba, certaines communautés éwé).",
      "Résistance des souverains : Na Biéma Asabiè (Mango), Aja Kpoyizoun (Tado) ; ailleurs, Samori Touré, Béhanzin.",
      "Raisons : terres, liberté, autorité des chefs, coutumes ; refus des travaux forcés, impôts, châtiments corporels."],
    concepts: "Résistance des peuples, résistance des souverains, souverain, domination."
  }, {
    intro: "Le sud et l'ouest du Togo ont aussi connu de nombreuses révoltes. Dans cette seconde chronique, à partir de la chronologie, je vais présenter ces résistances et la répression qu'elles ont subie.",
    adresse: "Chers auditeurs,",
    support: "La chronologie du document 2 (Tové 1895 ; Akposso à Agomé-Koutoukpa 1898 ; Ahépé et Tchèkpo 1900 ; Agotimé 1901) ; informations exploitées",
    indConsigne: "Chronique 2 : Tové (Agbessia) 1895 ; Akposso 1898, répression de von Doering (11 morts, trois villages incendiés) ; Ahépé et Tchèkpo 1900 contre le commandant de cercle ; Agotimé 1901, répression du lieutenant Smend (18 morts)",
    dev: ["D'abord, en 1895, les habitants de Tové (Agbessia) se révoltent contre la présence allemande.",
      "Ensuite, en 1898, les Akposso attaquent les Allemands à Agomé-Koutoukpa ; la répression est terrible : von Doering fait tuer 11 Akposso, puis incendier trois villages. En 1900, Ahépé et Tchèkpo se soulèvent contre le commandant de cercle.",
      "Enfin, en 1901, les Agotimé refusent le travail forcé ; la répression du lieutenant Smend fait 18 morts."],
    concl: "En définitive, chers auditeurs, du sud à l'ouest, les peuples du Togo ont refusé la domination allemande, malgré une répression sanglante : souvenons-nous de leur courage.",
    justesse: ["1895 : révolte des habitants de Tové (Agbessia).",
      "1898 : attaque des Akposso à Agomé-Koutoukpa ; von Doering fait tuer 11 Akposso et incendier trois villages ; 1900 : soulèvement d'Ahépé et de Tchèkpo contre le commandant de cercle.",
      "1901 : refus du travail forcé par les Agotimé ; répression du lieutenant Smend : 18 morts."],
    concepts: "Révolte, soulèvement, répression, travail forcé, commandant de cercle."
  }]
});

EPREUVES_3E.h3_3.sit.push({
  texte: "La commune de Tado veut placer une plaque au pied d'une statue du roi Aja Kpoyizoun. Le maire organise un concours entre les collèges de la préfecture pour en rédiger le texte. Ta classe participe et dispose des dates ci-dessous.",
  consigne: "Rédige le texte de la plaque : à partir des dates et de tes connaissances, présente Aja Kpoyizoun, explique sa résistance face aux Français et montre les conséquences de sa défaite.",
  doc: { titre: "Document : quelques dates de la vie d'Aja Kpoyizoun", liste: ["22 juillet 1889 : accord de commerce et d'amitié signé avec le Français d'Albéca", "4 octobre 1894 : traité signé avec le gouverneur Victor Ballot", "1894 : chute du royaume du Dahomey", "octobre 1900 : il se rend aux Français", "1913 : il meurt noyé au Gabon, à Ndjolé"] },
  titreProd: "Aja Kpoyizoun, roi de Tado, héros de la résistance",
  intro: "Cette plaque rend hommage à Aja Kpoyizoun, roi de Tado. Elle présente le roi, explique sa résistance face aux Français, puis les conséquences de sa défaite.",
  support: "Le concours de la commune de Tado ; les dates (accord avec d'Albéca, 22 juillet 1889 ; traité avec Victor Ballot, 4 octobre 1894 ; chute du Dahomey, 1894 ; reddition, octobre 1900 ; mort à Ndjolé, 1913) ; informations exploitées",
  indConsigne: "Plaque : présentation (roi de Tado, anyigbafio, successeur de Togbé-Anyi, bassin du Mono, royaume partagé ; accords de 1889 et 1894) ; résistance (accusation de soutien à Béhanzin, refus de lever des troupes et de destituer les chefs hostiles, biens de Gbaguidi, canne jetée à terre, fuite, Tado incendiée, reddition, Porto-Novo, Ndjolé, 1913) ; conséquences (Dossou, Alokpéto)",
  dev: ["D'abord, Aja Kpoyizoun était roi de Tado et anyigbafio, « roi de la terre », successeur de Togbé-Anyi, dans le bassin du Mono. Son royaume était partagé entre la zone convoitée par l'Allemagne et celle que revendiquait la France. Le 22 juillet 1889, ses représentants signent avec le Français d'Albéca un accord de commerce et d'amitié ; le 4 octobre 1894, un nouveau traité, signé avec le gouverneur Victor Ballot, le place sous l'autorité de la France.",
    "Ensuite, après la chute du royaume du Dahomey, en 1894, les Français l'accusent d'avoir soutenu Béhanzin. Il refuse de lever des troupes pour eux et de destituer les chefs hostiles à la France ; il aurait aussi saisi les biens et les gens de Gbaguidi, roi des Mahi, allié des Français ; il jette même sa canne à terre devant le représentant de la France, une vraie déclaration de guerre. Convoqué, il s'enfuit, et la troupe envoyée contre lui incendie Tado. Pour épargner son peuple, il se rend en octobre 1900 ; interné à Porto-Novo, puis déporté au Gabon, à Ndjolé, il y meurt noyé en 1913.",
    "Enfin, sa défaite a des conséquences : les Français renforcent le pouvoir de Dossou, chef installé à Tohoun, et font de son frère cadet Alokpéto le nouveau roi de Tado."],
  concl: "En définitive, Aja Kpoyizoun a préféré l'exil à la soumission et s'est sacrifié pour épargner son peuple : Tado honore en lui un héros de la résistance togolaise.",
  justesse: ["Roi de Tado, anyigbafio (« roi de la terre »), successeur de Togbé-Anyi, bassin du Mono ; royaume partagé entre zones allemande et française ; accord avec d'Albéca (22 juillet 1889) ; traité avec Victor Ballot (4 octobre 1894).",
    "Accusé d'avoir soutenu Béhanzin après la chute du Dahomey (1894) ; refus de lever des troupes et de destituer les chefs hostiles ; biens de Gbaguidi, roi des Mahi ; canne jetée à terre ; fuite, Tado incendiée ; reddition en octobre 1900 ; Porto-Novo, puis Ndjolé (Gabon), mort noyé en 1913.",
    "Conséquences : pouvoir de Dossou (Tohoun) renforcé ; Alokpéto, son frère cadet, nouveau roi de Tado."],
  concepts: "Souverain, anyigbafio, traité, résistance, déportation, exil."
});
EPREUVES_3E.h3_3.sit.push({
  texte: "La troupe de théâtre de ton collège prépare une pièce en deux actes intitulée « Deux rois debout ». Le metteur en scène te demande d'écrire le texte que lira le narrateur avant chaque acte. Il te remet deux récits : l'un sur un roi du nord (document 1), l'autre sur un roi du sud (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, rédige le texte du narrateur pour le premier acte : présente Na Biéma Asabiè, sa résistance face aux Allemands et les conséquences de sa mort.",
    "À partir du document 2 et de tes connaissances, rédige le texte du narrateur pour le second acte : présente la résistance d'Aja Kpoyizoun face aux Français et ses conséquences."],
  docs: [{ titre: "Document 1 : le récit d'un ancien de Mango", texte: "« Notre fémè avait signé avec les Allemands, mais aussi avec les Français et les Anglais. Quand les officiers allemands n'étaient pas là, il ne faisait plus hisser leur drapeau. Un jour, un lieutenant allemand l'a convoqué ; il n'y est pas allé. Alors on l'a abattu. Ce jour-là, beaucoup des nôtres sont morts, et les Allemands nous ont donné un autre roi. » (Récit d'après la tradition)" },
    { titre: "Document 2 : le récit d'une ancienne de Tado", texte: "« Les Français disaient que notre roi avait aidé Béhanzin. Il a refusé de leur donner des soldats. Devant leur envoyé, il a jeté sa canne à terre. Ils ont brûlé Tado. Pour que son peuple ne souffre plus, il s'est rendu, et on l'a emmené très loin, au Gabon, d'où il n'est jamais revenu. » (Récit d'après la tradition)" }],
  prods: [{
    intro: "Mesdames et Messieurs, le premier acte se passe à Mango, à la fin du XIXe siècle. Avant le lever du rideau, je vais vous présenter le roi Na Biéma Asabiè, sa résistance face aux Allemands et les conséquences de sa mort.",
    adresse: "Mesdames et Messieurs,",
    support: "La pièce « Deux rois debout » ; le récit de l'ancien de Mango (document 1) : traités avec les Allemands, les Français et les Anglais ; drapeau allemand non hissé ; convocation refusée ; roi abattu ; nombreux morts ; nouveau roi imposé ; informations exploitées",
    indConsigne: "Narrateur 1 : présentation (fémè des Anoufo de Sansanné-Mango, bassin de l'Oti, né vers 1835-1840, 8e roi, règne 1894-1897, traité de janvier 1895 avec Gruner et von Carnap, autres traités) ; résistance (drapeau, convocation de Thierry, abattu le 2 novembre 1897, « tragédie de Mango ») ; conséquences (Gamadji, Anoufo tués, Sérikin Yérima, imam Mahamadou, héros national)",
    dev: ["D'abord, Na Biéma Asabiè était le fémè, c'est-à-dire le roi, des Anoufo (Tchokossi) du royaume de Sansanné-Mango, dans le bassin de l'Oti. Né vers 1835-1840, il fut le 8e roi depuis Na Biéma Bonsafo ; son règne fut court, de 1894 à 1897. En janvier 1895, il signa un traité de protectorat avec les Allemands Gruner et von Carnap, mais il en avait aussi signé avec les Français et les Britanniques, comme le rappelle l'ancien.",
      "Ensuite, il refuse de se soumettre : il cesse de hisser le drapeau allemand en l'absence des officiers et ne répond pas à la convocation du lieutenant Gaston Thierry. Celui-ci le fait abattre le 2 novembre 1897 : c'est la « tragédie de Mango ».",
      "Enfin, ses partisans sont vaincus par les gens de Gamadji et des dizaines d'Anoufo sont tués ; les Allemands imposent un nouveau roi, Sérikin Yérima ; l'imam Mahamadou s'enfuit et est remplacé. Aujourd'hui, Asabiè est considéré comme un héros national."],
    concl: "Mesdames et Messieurs, Na Biéma Asabiè a préféré la mort à la soumission. Place au premier acte !",
    justesse: ["Fémè des Anoufo (Tchokossi) de Sansanné-Mango (bassin de l'Oti) ; né vers 1835-1840 ; 8e roi depuis Na Biéma Bonsafo ; règne 1894-1897 ; traité de janvier 1895 (Gruner, von Carnap) ; traités aussi avec les Français et les Britanniques.",
      "Drapeau allemand non hissé en l'absence des officiers ; convocation du lieutenant Gaston Thierry refusée ; abattu le 2 novembre 1897 : « tragédie de Mango ».",
      "Partisans vaincus par les gens de Gamadji, dizaines d'Anoufo tués ; Sérikin Yérima imposé ; fuite et remplacement de l'imam Mahamadou ; héros national."],
    concepts: "Fémè, protectorat, convocation, tragédie de Mango, héros national."
  }, {
    intro: "Mesdames et Messieurs, le second acte nous conduit au sud, à Tado, au bord du Mono. Avant le lever du rideau, je vais vous présenter la résistance du roi Aja Kpoyizoun face aux Français et ses conséquences.",
    adresse: "Mesdames et Messieurs,",
    support: "Le récit de l'ancienne de Tado (document 2) : accusation d'avoir aidé Béhanzin ; soldats refusés ; canne jetée à terre ; Tado brûlée ; reddition pour épargner le peuple ; exil au Gabon sans retour ; informations exploitées",
    indConsigne: "Narrateur 2 : roi de Tado, anyigbafio ; traités de 1889 et 1894 ; accusation de soutien à Béhanzin (1894) ; refus de lever des troupes et de destituer les chefs ; Gbaguidi ; canne jetée ; fuite, Tado incendiée ; reddition en octobre 1900, Porto-Novo, Ndjolé, mort en 1913 ; Dossou et Alokpéto",
    dev: ["D'abord, Aja Kpoyizoun était roi de Tado et anyigbafio, « roi de la terre ». Par les traités de 1889 et du 4 octobre 1894, son royaume était passé sous l'autorité de la France. Mais après la chute du royaume du Dahomey, en 1894, les Français l'accusent d'avoir soutenu Béhanzin, comme le raconte l'ancienne.",
      "Ensuite, il refuse de lever des troupes pour eux et de destituer les chefs hostiles à la France ; il aurait saisi les biens et les gens de Gbaguidi, roi des Mahi, allié des Français ; devant le représentant de la France, il jette sa canne à terre : c'est une déclaration de guerre. Convoqué, il s'enfuit ; la troupe incendie Tado. Pour épargner son peuple, il se rend en octobre 1900 ; interné à Porto-Novo, puis déporté au Gabon, à Ndjolé, il y meurt noyé en 1913.",
      "Enfin, les Français renforcent le pouvoir de Dossou, chef installé à Tohoun, et font de son frère cadet Alokpéto le nouveau roi de Tado."],
    concl: "Mesdames et Messieurs, Aja Kpoyizoun a choisi l'exil plutôt que la soumission. Place au second acte !",
    justesse: ["Roi de Tado, anyigbafio ; sous autorité française par les traités de 1889 et du 4 octobre 1894 ; accusé d'avoir soutenu Béhanzin après la chute du Dahomey (1894).",
      "Refus de lever des troupes et de destituer les chefs hostiles ; biens de Gbaguidi ; canne jetée ; fuite, Tado incendiée ; reddition en octobre 1900 ; Porto-Novo, puis Ndjolé ; mort noyé en 1913.",
      "Pouvoir de Dossou (Tohoun) renforcé ; Alokpéto, frère cadet, nouveau roi."],
    concepts: "Souverain, résistance, déclaration de guerre, reddition, déportation."
  }]
});

EPREUVES_3E.h3_4.sit.push({
  texte: "Pour le magazine d'histoire de ton collège, tu interroges ton arrière-grand-père, qui a connu l'époque coloniale. Il te raconte ses souvenirs (document). La rédaction te demande d'en tirer un article expliquant comment les colonisateurs faisaient payer aux colonies leur propre mise en valeur.",
  consigne: "Rédige l'article, avec un titre : à partir des souvenirs de ton arrière-grand-père et de tes connaissances, explique ce qu'est une colonie, comment la colonisation était justifiée, et quels moyens la métropole utilisait pour mettre ses colonies en valeur.",
  doc: { titre: "Document : les souvenirs de l'arrière-grand-père", texte: "« Chaque année, il fallait payer l'impôt par tête, pour chaque homme et chaque femme. Ceux qui ne pouvaient pas payer partaient sur les chantiers : nous avons construit la route et le pont à la main, sans salaire. Mon oncle, qui était tailleur, payait en plus une taxe pour avoir le droit de coudre. Et le sel, le tissu, tout ce qui arrivait par bateau coûtait cher à cause des droits de la douane. »" },
  titreProd: "Quand les colonies payaient leur propre conquête",
  intro: "Mon arrière-grand-père a connu l'époque coloniale. À partir de ses souvenirs, cet article explique ce qu'est une colonie, comment on justifiait la colonisation, et comment la métropole mettait ses colonies en valeur sans dépenser son argent.",
  support: "L'interview de l'arrière-grand-père : impôt par tête pour chaque homme et chaque femme ; chantiers de la route et du pont sans salaire ; taxe du tailleur ; sel et tissu chers à cause des droits de douane ; informations exploitées",
  indConsigne: "Article : définition de la colonie et de la métropole ; justification (« mission civilisatrice », Jules Ferry, 1885) ; impôts (impôt par tête, impôt de case) ; travaux forcés ; patentes ; droits de douane",
  dev: ["D'abord, une colonie est un territoire occupé, administré et exploité par une puissance étrangère, la métropole. Des hommes politiques, comme Jules Ferry en 1885, justifiaient la colonisation par une prétendue « mission civilisatrice ».",
    "Ensuite, pour mettre les colonies en valeur sans dépenser son argent, la métropole faisait payer les colonisés. Elle levait des impôts : l'impôt par tête dans les colonies françaises, comme celui que payait mon arrière-grand-père, l'impôt de case dans les colonies britanniques. Elle imposait les travaux forcés : les hommes valides construisaient routes, ponts, voies ferrées et bâtiments, et travaillaient dans les plantations, comme sur le chantier de la route et du pont.",
    "Enfin, elle faisait payer des patentes, des taxes pour exercer certains métiers, comme celle de l'oncle tailleur, et des droits de douane sur les marchandises qui entraient dans la colonie ou qui en sortaient, ce qui rendait le sel et le tissu si chers."],
  concl: "En définitive, sous couvert de « mission civilisatrice », ce sont les colonisés eux-mêmes qui, par leur argent et leur travail, ont payé la mise en valeur des colonies.",
  justesse: ["Colonie : territoire occupé, administré et exploité par une puissance étrangère, la métropole ; justification : prétendue « mission civilisatrice » (Jules Ferry, 1885).",
    "Impôts : impôt par tête (colonies françaises), impôt de case (colonies britanniques) ; travaux forcés : routes, ponts, voies ferrées, bâtiments, plantations.",
    "Patentes (taxes pour exercer certains métiers) ; droits de douane sur les marchandises entrant ou sortant."],
  concepts: "Colonie, métropole, mission civilisatrice, mise en valeur, impôt par tête, impôt de case, travaux forcés, patente, droit de douane."
});
EPREUVES_3E.h3_4.sit.push({
  texte: "Le club d'histoire de ton collège prépare une exposition intitulée « Les colonies au service des métropoles ». Ton groupe doit rédiger deux panneaux. Vous disposez du témoignage d'un ancien planteur (document 1) et d'un court texte sur les frontières de l'Afrique (document 2).",
  consignes: ["Rédige le premier panneau : à partir du document 1 et de tes connaissances, présente l'exploitation des colonies dans l'agriculture, l'industrie et le commerce.",
    "Rédige le second panneau : à partir du document 2 et de tes connaissances, montre les aspects négatifs de la colonisation pour l'Afrique."],
  docs: [{ titre: "Document 1 : ce que raconte un ancien planteur", texte: "« Le commandant nous obligeait à planter le cacao et le café ; pour l'igname et le maïs, il ne restait plus beaucoup de temps ni de bonnes terres. Les grandes compagnies achetaient nos sacs pour presque rien et les embarquaient au port. Avec l'argent, on achetait leurs tissus et leurs outils, qui venaient d'Europe et coûtaient cher. »" },
    { titre: "Document 2 : des frontières tracées loin de l'Afrique", texte: "« Les frontières de l'Afrique ont été tracées par les puissances coloniales, souvent à la règle, sur des cartes. Elles ont coupé des peuples en deux et réuni des peuples différents. Aujourd'hui encore, la plupart des pays africains exportent surtout des produits bruts et achètent à l'étranger les produits fabriqués. »" }],
  prods: [{
    intro: "Dans les colonies, tout était organisé au profit de la métropole. Ce premier panneau présente, à partir du témoignage d'un ancien planteur, l'exploitation des colonies dans l'agriculture, l'industrie et le commerce.",
    support: "Le témoignage de l'ancien planteur (document 1) : cacao et café imposés par le commandant, peu de temps et de bonnes terres pour l'igname et le maïs ; sacs achetés pour presque rien par les grandes compagnies et embarqués au port ; tissus et outils d'Europe vendus cher ; informations exploitées",
    indConsigne: "Panneau 1 : économie de traite et pacte colonial ; agriculture (terres confisquées, cultures de rente imposées au détriment des cultures vivrières) ; industrie (surtout extractive, minerais exportés bruts) ; commerce (SCOA, CFAO, UAC ; ports et chemins de fer pour l'exportation)",
    dev: ["D'abord, les colonies vivent sous l'économie de traite : on achète à bas prix aux paysans les produits destinés à l'exportation et on leur vend cher les produits fabriqués en Europe, comme le raconte le planteur. C'est le pacte colonial : la colonie fournit des matières premières à la métropole et n'achète que ses produits fabriqués.",
      "Ensuite, dans l'agriculture, les colonisateurs confisquent les meilleures terres et imposent les cultures de rente (arachide, cacao, café, coton, hévéa) au détriment des cultures vivrières, comme l'igname et le maïs du planteur. Dans l'industrie, ils développent surtout des industries extractives : les minerais partent en Europe sans être transformés.",
      "Enfin, dans le commerce, de grandes compagnies, comme la SCOA, la CFAO ou l'UAC, exportent les matières premières et importent les produits manufacturés ; les ports et les chemins de fer servent d'abord à l'exportation."],
    concl: "En définitive, l'agriculture, l'industrie et le commerce des colonies étaient organisés pour enrichir la métropole, pas pour développer l'Afrique.",
    justesse: ["Économie de traite (acheter bas, vendre cher) ; pacte colonial (matières premières contre produits fabriqués de la métropole).",
      "Agriculture : meilleures terres confisquées, cultures de rente imposées (arachide, cacao, café, coton, hévéa) au détriment des vivrières ; industrie : surtout extractive, minerais exportés sans transformation.",
      "Commerce : grandes compagnies (SCOA, CFAO, UAC) ; ports et chemins de fer d'abord pour l'exportation."],
    concepts: "Économie de traite, pacte colonial, culture de rente, culture vivrière, industrie extractive, compagnie commerciale."
  }, {
    intro: "La colonisation a laissé des traces profondes en Afrique. Ce second panneau montre, à partir du texte sur les frontières africaines, les aspects négatifs de la colonisation.",
    support: "Le texte du document 2 : frontières tracées à la règle par les puissances coloniales, peuples coupés en deux ou réunis ; exportation de produits bruts et achat de produits fabriqués aujourd'hui encore ; informations exploitées",
    indConsigne: "Panneau 2 : pillage des ressources ; travail forcé et violences ; confiscation des terres, recul des cultures vivrières ; pauvreté ; balkanisation ; économie extravertie et dépendante ; détérioration des termes de l'échange ; retard économique",
    dev: ["D'abord, la colonisation a pillé les ressources de l'Afrique ; elle a imposé le travail forcé et la violence, confisqué les terres et fait reculer les cultures vivrières, ce qui a appauvri les populations.",
      "Ensuite, elle a découpé l'Afrique de façon arbitraire : comme le dit le document, les frontières, tracées loin du continent, ont coupé des peuples en deux et réuni des peuples différents. C'est la balkanisation.",
      "Enfin, elle a laissé une économie extravertie et dépendante, tournée vers l'exportation de produits bruts, comme le montre la fin du texte ; les termes de l'échange se sont détériorés et l'Afrique a pris un retard économique dont elle subit encore les effets."],
    concl: "En définitive, au-delà de quelques équipements, la colonisation a laissé à l'Afrique des frontières artificielles et une économie dépendante : un lourd héritage.",
    justesse: ["Pillage des ressources ; travail forcé et violences ; confiscation des terres et recul des cultures vivrières ; pauvreté.",
      "Découpage arbitraire de l'Afrique (balkanisation) : peuples séparés ou réunis.",
      "Économie extravertie et dépendante (exportation de produits bruts) ; détérioration des termes de l'échange ; retard économique."],
    concepts: "Pillage, balkanisation, économie extravertie, dépendance, termes de l'échange, retard économique."
  }]
});

EPREUVES_3E.h3_5.sit.push({
  texte: "Le diocèse de ta ville fête les cent cinquante ans de la première école de la mission. Ton arrière-grand-père, ancien catéchiste, avait gardé quelques souvenirs de son propre grand-père, élève au temps des Allemands (document). Le comité d'organisation te demande un exposé sur ce que les Allemands ont fait au Togo pour la santé et l'enseignement.",
  consigne: "À partir du document et de tes connaissances, rédige un exposé dans lequel tu présentes l'action sociale des Allemands au Togo, dans la santé et dans l'enseignement, en montrant à qui elle profitait.",
  doc: { titre: "Document : les souvenirs transmis dans la famille", texte: "« Mon grand-père a appris à lire à l'école de la mission, dans une Bible écrite en éwé. Il est devenu catéchiste, et son ami, commis du gouvernement. Il racontait que les Allemands vaccinaient les enfants contre la variole et que, dans le nord, ils luttaient contre la maladie du sommeil. Les malades graves allaient à l'hôpital d'Aného ou de Lomé. »" },
  intro: "Le diocèse fête les cent cinquante ans de sa première école. À partir des souvenirs transmis dans ma famille, je vais présenter l'action des Allemands au Togo dans la santé, puis dans l'enseignement, et montrer à qui elle profitait.",
  adresse: "Monseigneur, Mesdames et Messieurs,",
  support: "La fête de l'école de la mission ; les souvenirs familiaux : lecture apprise dans une Bible en éwé, grand-père catéchiste, ami commis ; vaccination contre la variole ; lutte contre la maladie du sommeil ; hôpitaux d'Aného et de Lomé ; informations exploitées",
  indConsigne: "Exposé : santé (hôpital Nachtigal d'Aného, hôpital de Lomé 1909, centre médical de Kpalimé 1907, léproserie de Kagnikopé ; vaccination contre la variole ; maladie du sommeil) ; enseignement (écoles des missions, écoles publiques de Lomé, Aného, Sokodé, école d'agriculture de Nuatja 1904 ; Westermann, Bible en éwé) ; formation des premières élites ; colonie modèle au prix du travail forcé et des impôts",
  dev: ["D'abord, dans la santé, les Allemands construisent des hôpitaux : l'hôpital Nachtigal d'Aného, l'hôpital de Lomé en 1909, le centre médical de Kpalimé en 1907, ainsi qu'une léproserie à Kagnikopé. Ils organisent des campagnes de vaccination contre la variole et luttent contre la maladie du sommeil, comme le racontait notre ancêtre.",
    "Ensuite, dans l'enseignement, les missions catholiques et protestantes ouvrent des écoles ; il existe aussi des écoles publiques à Lomé, à Aného et à Sokodé, et une école d'agriculture à Nuatja, en 1904. Le missionnaire Diedrich Westermann écrit une grammaire de l'éwé, et la Bible est traduite en éwé : c'est dans cette Bible que notre ancêtre a appris à lire.",
    "Enfin, ces écoles forment les premières élites togolaises : instituteurs, commis, catéchistes, comme le grand-père et son ami. Mais elles servaient d'abord la colonie, qui avait besoin d'auxiliaires et de travailleurs en bonne santé ; et cette « colonie modèle » a été bâtie au prix du travail forcé et des lourds impôts imposés aux Togolais."],
  concl: "En définitive, les Allemands ont laissé au Togo des hôpitaux, des écoles et les premières élites lettrées, mais leur action sociale servait avant tout les intérêts de la colonie. Je vous remercie.",
  justesse: ["Santé : hôpital Nachtigal d'Aného, hôpital de Lomé (1909), centre médical de Kpalimé (1907), léproserie de Kagnikopé ; vaccination contre la variole ; lutte contre la maladie du sommeil.",
    "Enseignement : écoles des missions catholiques et protestantes ; écoles publiques (Lomé, Aného, Sokodé) ; école d'agriculture de Nuatja (1904) ; grammaire de l'éwé de Westermann, Bible en éwé.",
    "Premières élites (instituteurs, commis, catéchistes) ; « colonie modèle » au prix du travail forcé et des lourds impôts."],
  concepts: "Action sociale, mission, léproserie, vaccination, élite, colonie modèle."
});
EPREUVES_3E.h3_5.sit.push({
  texte: "Le Togo allemand a été surnommé « colonie modèle ». Pour un débat organisé par le club d'histoire sur ce surnom, ton groupe doit préparer deux interventions. Votre professeur vous remet le récit d'un vieux planteur de Notsé (document 1) et la photo d'un bureau de poste allemand (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, présente l'action des Allemands dans l'agriculture et l'industrie du Togo.",
    "À partir du document 2 et de tes connaissances, présente les voies de communication et le commerce du Togo allemand, puis explique pourquoi on l'a appelé « colonie modèle »."],
  docs: [{ titre: "Document 1 : ce que racontait un vieux planteur de Notsé", texte: "« Mon père a été élève à l'école d'agriculture de Nuatja, où les Allemands apprenaient surtout à cultiver le coton. On le portait ensuite à l'usine d'égrenage. Les Allemands ont aussi planté des tecks, des manguiers et des anacardiers, et ils ont apporté de nouvelles races de volailles et de porcs. »" },
    { titre: "Document 2 : le bureau de poste impérial d'Agomé-Palimé (Kpalimé), au début du XXe siècle", image: "images/ep3_poste_palime.jpg", credit: "Photo publiée par Jakob Spieth dans Die Eweer (1906) — domaine public (Wikimedia Commons)." }],
  prods: [{
    intro: "Pour juger le surnom de « colonie modèle », il faut d'abord savoir ce que les Allemands ont fait dans l'économie. Dans cette première intervention, à partir du récit d'un vieux planteur de Notsé, je vais présenter leur action dans l'agriculture et dans l'industrie.",
    adresse: "Chers camarades,",
    support: "Le récit du planteur de Notsé (document 1) : école d'agriculture de Nuatja, culture du coton, usine d'égrenage, tecks, manguiers, anacardiers, nouvelles races de volailles et de porcs ; informations exploitées",
    indConsigne: "Intervention 1 : agriculture (cultures d'exportation : palmier à huile, cocotier, cacao, café, coton ; école d'agriculture de Nuatja 1904, institut agricole 1912 ; tecks, manguiers, anacardiers ; volailles et porcs) ; industrie faible (géologues ; égrenage à Notsé, coprah à Kpémé, palmistes à Agou)",
    dev: ["D'abord, dans l'agriculture, les Allemands développent les cultures d'exportation : palmier à huile, cocotier, cacao, café et coton. En 1904, ils ouvrent à Nuatja (Notsé) une école d'agriculture, surtout pour répandre le coton, comme le raconte le planteur ; elle devient en 1912 un institut agricole.",
      "Ensuite, ils plantent des tecks, des manguiers et des anacardiers, et introduisent des races améliorées de volailles et de porcs.",
      "Enfin, l'industrie reste faible : des géologues recensent les gisements, et quelques usines sont créées, pour l'égrenage du coton à Notsé, le traitement du coprah à Kpémé et celui des palmistes à Agou."],
    concl: "En définitive, chers camarades, les Allemands ont développé une agriculture d'exportation, mais très peu d'industries : le Togo devait d'abord produire pour l'Allemagne.",
    justesse: ["Cultures d'exportation : palmier à huile, cocotier, cacao, café, coton ; école d'agriculture de Nuatja (1904), institut agricole en 1912.",
      "Tecks, manguiers, anacardiers ; races améliorées de volailles et de porcs.",
      "Industrie faible : géologues ; usines d'égrenage du coton (Notsé), de coprah (Kpémé), de palmistes (Agou)."],
    concepts: "Culture d'exportation, école d'agriculture, égrenage, coprah, palmiste."
  }, {
    intro: "Le surnom de « colonie modèle » vient surtout des grands travaux allemands. Dans cette seconde intervention, à partir de la photo du bureau de poste de Palimé, je vais présenter les voies de communication et le commerce du Togo allemand, puis expliquer ce surnom.",
    adresse: "Chers camarades,",
    support: "La photo du bureau de poste impérial d'Agomé-Palimé (Kpalimé), au début du XXe siècle (document 2) ; informations du document exploitées",
    indConsigne: "Intervention 2 : voies de communication (wharf de Lomé 1900/1904 ; lignes Lomé-Aného 1905, Lomé-Kpalimé 1907, Lomé-Agbonou 1911 ; routes ; postes d'Aného 1888 et de Lomé 1890, télégraphe, station de Kamina 1914) ; commerce (produits exportés, DTG, Swanzy, Vietor) ; budget équilibré à partir de 1906 : « colonie modèle » ; prix payé par les Togolais",
    dev: ["D'abord, les voies de communication sont l'œuvre la plus remarquable des Allemands : le wharf de Lomé (1900, reconstruit en 1904) ; trois lignes de chemin de fer partant de Lomé, Lomé-Aného (44 km, 1905, « ligne du coprah »), Lomé-Kpalimé (119 km, 1907, « ligne du cacao ») et Lomé-Agbonou (167 km, 1911, « ligne du coton »), prolongée vers Atakpamé ; des routes ; des bureaux de poste, comme celui de Palimé que montre la photo, à côté de ceux d'Aného (1888) et de Lomé (1890) ; des lignes télégraphiques et la station radio de Kamina (1914).",
      "Ensuite, le Togo exporte de l'huile et des amandes de palme, du coprah, du cacao, du coton et du café ; des maisons de commerce, comme la DTG, Swanzy ou Vietor, assurent les échanges.",
      "Enfin, à partir de 1906, la colonie équilibre son budget sans aide de l'Allemagne : c'est pourquoi on l'appelle la « colonie modèle » (Musterkolonie). Mais ce modèle a été payé par les Togolais, avec le travail forcé et de lourds impôts."],
    concl: "En définitive, chers camarades, le Togo allemand mérite son surnom par ses réalisations, mais c'était un modèle pour l'Allemagne, bâti sur le travail et l'argent des Togolais.",
    justesse: ["Wharf de Lomé (1900, reconstruit en 1904) ; lignes Lomé-Aného (44 km, 1905, coprah), Lomé-Kpalimé (119 km, 1907, cacao), Lomé-Agbonou (167 km, 1911, coton) ; routes ; postes d'Aného (1888) et de Lomé (1890) ; télégraphe ; station radio de Kamina (1914).",
      "Exportations : huile et amandes de palme, coprah, cacao, coton, café ; maisons de commerce DTG, Swanzy, Vietor.",
      "Budget équilibré sans aide de l'Allemagne à partir de 1906 : « colonie modèle » (Musterkolonie) ; au prix du travail forcé et des lourds impôts."],
    concepts: "Wharf, chemin de fer, télégraphe, maison de commerce, budget, colonie modèle."
  }]
});

EPREUVES_3E.h3_6.sit.push({
  texte: "Pour la journée du patrimoine, la mairie de Lomé installe des panneaux devant les bâtiments anciens de la ville. Devant l'ancien palais des gouverneurs, elle veut un panneau sur l'administration française du Togo. Elle confie la rédaction aux élèves de 3e de ton collège et leur remet le tableau ci-dessous.",
  consigne: "Rédige le texte du panneau : à partir du tableau et de tes connaissances, présente le Togo sous domination française (statuts, territoire) et son organisation administrative, centrale et régionale.",
  doc: { titre: "Document : le Togo français en quelques repères", tableau: { entetes: ["Repère", "Information"], lignes: [["1922", "mandat de la SDN confié à la France"], ["1946", "tutelle de l'ONU"], ["1960", "indépendance"], ["Superficie", "56 600 km²"], ["Premier commissaire", "Auguste Bonnecarrère (1922-1931)"], ["Dernier commissaire", "Georges Spénale (jusqu'en 1960)"]] } },
  titreProd: "Le Togo sous administration française (1922-1960)",
  intro: "Ce panneau rappelle comment le Togo a été administré par la France, de 1922 à 1960 : ses statuts, son territoire, puis son organisation administrative.",
  support: "La journée du patrimoine ; le tableau (mandat de la SDN en 1922, tutelle de l'ONU en 1946, indépendance en 1960, 56 600 km², commissaires Bonnecarrère et Spénale) ; informations exploitées",
  indConsigne: "Panneau : statuts (mandat SDN 1922, tutelle ONU 1946, indépendance 1960) ; territoire et limites ; administration centrale (commissaire de la République, conseil privé, quelques commissaires) ; administration régionale (six cercles, commandants, subdivisions, cantons et chefs, leurs tâches)",
  dev: ["D'abord, après la Première Guerre mondiale, la partie orientale du Togo est confiée à la France, sous mandat de la SDN en 1922, puis sous tutelle de l'ONU en 1946, jusqu'à l'indépendance en 1960. Le Togo français couvre 56 600 km² : c'est le Togo actuel. Il est limité au nord par la Haute-Volta (actuel Burkina Faso), au sud par l'océan Atlantique, à l'est par le Dahomey (actuel Bénin) et à l'ouest par le Togo britannique, rattaché ensuite à la Gold Coast (actuel Ghana).",
    "Ensuite, à la tête du territoire, un commissaire de la République représente le gouvernement français et dirige depuis Lomé, aidé d'un conseil privé formé des chefs des services et de notables nommés. Parmi les commissaires, on retient Auguste Bonnecarrère (1922-1931), Léon Geismar (années 1930), Jean Noutary (1945) et Georges Spénale, le dernier, jusqu'en 1960.",
    "Enfin, le territoire est divisé en six cercles (Lomé, Aného, Klouto, Atakpamé, Sokodé, Mango), dirigés par des commandants de cercle et divisés en subdivisions. À la base, les cantons sont confiés à des chefs, comme Lawson V à Aného, Kalipé à Vogan, Ayéva à Sokodé ou Tchédré Palanga à Lama-Kara, chargés de maintenir l'ordre, de lever les impôts et de recruter la main-d'œuvre."],
  concl: "En définitive, de 1922 à 1960, le Togo a été dirigé depuis Lomé par un commissaire de la République, avec l'appui des commandants de cercle et des chefs de canton, sous le contrôle de la SDN puis de l'ONU.",
  justesse: ["Mandat de la SDN (1922), tutelle de l'ONU (1946), indépendance (1960) ; 56 600 km² ; limites : Haute-Volta, océan Atlantique, Dahomey, Togo britannique (puis Gold Coast).",
    "Commissaire de la République à Lomé, conseil privé (chefs des services, notables nommés) ; Bonnecarrère (1922-1931), Geismar, Noutary (1945), Spénale (jusqu'en 1960).",
    "Six cercles (Lomé, Aného, Klouto, Atakpamé, Sokodé, Mango), commandants, subdivisions ; chefs de canton (Lawson V, Kalipé, Ayéva, Tchédré Palanga) : ordre, impôts, main-d'œuvre."],
  concepts: "Mandat, tutelle, commissaire de la République, conseil privé, cercle, subdivision, canton."
});
EPREUVES_3E.h3_6.sit.push({
  texte: "Ta tante, infirmière à la retraite, a commencé sa carrière juste avant l'indépendance. Pour un exposé sur le Togo français, tu veux présenter ce que la France a fait au Togo. Tu disposes d'une liste de réalisations économiques (document 1) et des souvenirs de ta tante (document 2).",
  consignes: ["À partir du document 1 et de tes connaissances, présente l'action de la France au Togo dans l'agriculture et dans l'industrie.",
    "À partir du document 2 et de tes connaissances, présente l'action sociale de la France au Togo, dans la santé et l'enseignement, puis montre à qui elle profitait d'abord."],
  docs: [{ titre: "Document 1 : quelques réalisations économiques au Togo français", liste: ["Sociétés indigènes de prévoyance (SIP) et coopératives agricoles", "Paysans kabyè et nawdba installés entre Atakpamé et Sokodé", "Usines d'égrenage du coton (Lomé, Atakpamé, Kara…)", "Féculerie de manioc de Ganavé (1951)", "Huilerie d'Alokoegbé (1952)", "Compagnie togolaise des mines du Bénin (CTMB)"] },
    { titre: "Document 2 : les souvenirs de la tante", texte: "« J'ai appris le français à l'école de mon village, puis je suis allée au cours complémentaire de Lomé. En 1954, j'ai vu ouvrir le nouvel hôpital de Lomé. Avant, on partait lutter contre le paludisme et la maladie du sommeil jusque dans les villages. Mais notre chef de service disait qu'il fallait surtout des ouvriers en bonne santé pour les chantiers. »" }],
  prods: [{
    intro: "La France a transformé l'économie du Togo, mais à son profit. Dans cette première partie, à partir de la liste des réalisations, je vais présenter son action dans l'agriculture et dans l'industrie.",
    support: "La liste du document 1 : SIP et coopératives ; paysans kabyè et nawdba entre Atakpamé et Sokodé ; usines d'égrenage (Lomé, Atakpamé, Kara) ; féculerie de Ganavé (1951) ; huilerie d'Alokoegbé (1952) ; CTMB ; informations exploitées",
    indConsigne: "Partie 1 : agriculture (SIP, coopératives, cultures d'exportation surtout au sud : cacao, café, coton, palmistes, kapok, karité, arachide ; paysans kabyè et nawdba) ; industrie (égrenage, Ganavé 1951, Alokoegbé 1952, CTMB) ; économie tournée vers l'exportation de produits bruts",
    dev: ["D'abord, dans l'agriculture, la France crée les Sociétés indigènes de prévoyance (SIP) et des coopératives agricoles, et développe les cultures d'exportation, surtout dans le sud : cacao, café, coton, palmistes, kapok, karité, arachide.",
      "Ensuite, elle installe des paysans kabyè et nawdba entre Atakpamé et Sokodé pour mettre ces terres en valeur.",
      "Enfin, dans l'industrie, elle construit des usines d'égrenage du coton (Lomé, Atakpamé, Kara…), la féculerie de manioc de Ganavé (1951) et l'huilerie d'Alokoegbé (1952), et crée la Compagnie togolaise des mines du Bénin (CTMB) pour exploiter les phosphates. Mais l'économie reste tournée vers l'exportation de produits bruts, au profit de la France."],
    concl: "En définitive, la France a modernisé l'agriculture et créé quelques industries, mais pour fournir des produits bruts à sa propre économie.",
    justesse: ["Agriculture : SIP, coopératives ; cultures d'exportation surtout au sud (cacao, café, coton, palmistes, kapok, karité, arachide).",
      "Paysans kabyè et nawdba installés entre Atakpamé et Sokodé.",
      "Industrie : égrenage du coton (Lomé, Atakpamé, Kara), féculerie de Ganavé (1951), huilerie d'Alokoegbé (1952), CTMB (phosphates) ; économie tournée vers l'exportation de produits bruts."],
    concepts: "Société indigène de prévoyance, coopérative, culture d'exportation, égrenage, féculerie, huilerie."
  }, {
    intro: "Ma tante a été formée à l'école française et a travaillé dans les hôpitaux du Togo français. Dans cette seconde partie, à partir de ses souvenirs, je vais présenter l'action sociale de la France dans la santé et l'enseignement, puis montrer à qui elle profitait d'abord.",
    support: "Les souvenirs de la tante (document 2) : français appris à l'école du village, cours complémentaire de Lomé ; hôpital de Lomé ouvert en 1954 ; lutte contre le paludisme et la maladie du sommeil ; « des ouvriers en bonne santé pour les chantiers » ; informations exploitées",
    indConsigne: "Partie 2 : santé (paludisme, variole, maladie du sommeil ; Pagouda ; Kolowaré et Akata ; polyclinique 1933 ; hôpital de Lomé 1954) ; enseignement (français ; écoles de village, régionales, cours complémentaire ; écoles professionnelles de Sokodé 1922, des cheminots 1923, de Tové ; cours normal d'Atakpamé, ENI 1951, ENI de Togoville) ; au service de la colonie",
    dev: ["D'abord, dans la santé, la France lutte contre les grandes maladies : paludisme, variole, maladie du sommeil, comme s'en souvient ma tante. Elle crée un centre de lutte contre la trypanosomiase à Pagouda, les léproseries de Kolowaré et d'Akata, la polyclinique de Lomé (1933) et l'hôpital de Lomé (1954), l'actuel CHU Sylvanus Olympio.",
      "Ensuite, dans l'enseignement, le français devient la langue de l'école ; on crée des écoles de village, des écoles régionales et le cours complémentaire de Lomé, que ma tante a fréquenté, ainsi que des écoles professionnelles (Sokodé, 1922 ; école des cheminots de Lomé, 1923 ; école d'agriculture de Tové). Les maîtres sont formés au cours normal d'Atakpamé, devenu ENI en 1951, et à l'ENI catholique de Togoville.",
      "Enfin, ces écoles et ces hôpitaux servaient d'abord la colonie : il fallait former et garder en bonne santé les travailleurs utiles, comme le disait le chef de service de ma tante."],
    concl: "En définitive, la France a laissé au Togo des écoles et des hôpitaux, dont nous profitons encore, mais ils étaient d'abord destinés à servir l'économie coloniale.",
    justesse: ["Santé : paludisme, variole, maladie du sommeil ; Pagouda (trypanosomiase) ; léproseries de Kolowaré et d'Akata ; polyclinique de Lomé (1933) ; hôpital de Lomé (1954), actuel CHU Sylvanus Olympio.",
      "Enseignement : français ; écoles de village, régionales, cours complémentaire de Lomé ; écoles professionnelles (Sokodé 1922, cheminots de Lomé 1923, Tové) ; cours normal d'Atakpamé (ENI en 1951), ENI catholique de Togoville.",
      "Action d'abord au service de la colonie : former et garder en bonne santé les travailleurs utiles."],
    concepts: "Action sociale, léproserie, polyclinique, cours complémentaire, école normale, élite."
  }]
});

// Situations nouvelles des leçons d'histoire de 3e, leçons 7 à 11 (01/11/2026) : mêmes règles que src3e_3.js.
EPREUVES_3E.h3_7.sit.push({
  texte: "Ton grand-père a été instituteur dans les dernières années de la colonisation. En rangeant ses affaires, tu trouves ses souvenirs écrits (document). Le journal de ton collège prépare un numéro spécial sur les indépendances africaines et te demande un article montrant que la colonisation a elle-même préparé sa propre fin.",
  consigne: "Rédige l'article, avec un titre : à partir des souvenirs de ton grand-père et de tes connaissances, explique ce qu'est la décolonisation, puis présente les facteurs internes qui l'ont provoquée en Afrique.",
  doc: { titre: "Document : les souvenirs écrits du grand-père", texte: "« C'est à l'école des Blancs que j'ai lu les mots “liberté” et “égalité”. Je me demandais pourquoi ils n'étaient pas pour nous. Autour de moi, les gens se plaignaient de l'impôt et du travail forcé. Avec d'autres maîtres, nous avons adhéré au CUT. Nos frères étudiants en France écrivaient dans leurs journaux qu'il fallait l'indépendance, et les ouvriers faisaient grève. »" },
  titreProd: "Quand la colonisation a préparé sa propre fin",
  intro: "Mon grand-père, instituteur à la fin de la colonisation, a vu naître le désir d'indépendance autour de lui. À partir de ses souvenirs, cet article explique ce qu'est la décolonisation, puis présente les facteurs internes qui l'ont provoquée en Afrique.",
  support: "Les souvenirs du grand-père : « liberté » et « égalité » découvertes à l'école coloniale ; plaintes contre l'impôt et le travail forcé ; adhésion des maîtres au CUT ; étudiants en France qui réclament l'indépendance ; grèves des ouvriers ; informations exploitées",
  indConsigne: "Article : définition de la décolonisation ; contradictions du système colonial (élites formées à l'école coloniale, idées de liberté et d'égalité ; colère contre impôts, travail forcé, injustices) ; partis nationalistes (RDA, IOM, CUT, KANU) ; syndicats (UGTAN, producteurs de cacao de la Gold Coast) ; étudiants (FEANF, WASU)",
  dev: ["D'abord, la décolonisation est le processus par lequel les peuples colonisés se libèrent de la domination étrangère et accèdent à l'indépendance. En Afrique, elle s'accélère après 1945.",
    "Ensuite, la colonisation a créé elle-même les conditions de sa fin : l'école coloniale a formé des élites, instituteurs, médecins, avocats, qui ont découvert les idées de liberté et d'égalité, comme mon grand-père ; les impôts, le travail forcé et les injustices ont provoqué la colère des colonisés.",
    "Enfin, ces élites se sont organisées. Les partis nationalistes réclament des réformes, puis l'indépendance : le RDA de Félix Houphouët-Boigny, les IOM de Léopold Sédar Senghor, le CUT de Sylvanus Olympio, auquel mon grand-père a adhéré, ou la KANU de Jomo Kenyatta. Les syndicats les soutiennent par des grèves, comme l'UGTAN ou les producteurs de cacao de la Gold Coast, et les associations d'étudiants africains en Europe, la FEANF et la WASU, dénoncent la colonisation."],
  concl: "En définitive, en formant des élites et en multipliant les injustices, la colonisation a fait naître elle-même les forces qui allaient la combattre.",
  justesse: ["Décolonisation : processus par lequel les peuples colonisés se libèrent de la domination étrangère et accèdent à l'indépendance.",
    "Contradictions du système colonial : élites formées par l'école coloniale (instituteurs, médecins, avocats), idées de liberté et d'égalité ; colère contre les impôts, le travail forcé, les injustices.",
    "Partis nationalistes (RDA de Houphouët-Boigny, IOM de Senghor, CUT d'Olympio, KANU de Kenyatta) ; syndicats et grèves (UGTAN, producteurs de cacao de la Gold Coast) ; étudiants en Europe (FEANF, WASU)."],
  concepts: "Décolonisation, élite, nationalisme, parti politique, syndicat, grève."
});
EPREUVES_3E.h3_7.sit.push({
  texte: "Pour la Journée de l'Afrique (25 mai), le club d'histoire de ton collège enregistre une émission en deux parties sur « Le monde après 1945 et les indépendances africaines ». Tu es chargé(e) des deux textes. L'animatrice te remet une photographie (document 1) et une courte chronologie (document 2).",
  consignes: ["À partir de la photographie du document 1 et de tes connaissances, montre dans la première partie comment la Seconde Guerre mondiale, les grandes puissances et l'ONU ont favorisé la décolonisation de l'Afrique.",
    "À partir de la chronologie du document 2 et de tes connaissances, présente dans la seconde partie le panafricanisme et la conférence de Bandung, et explique leur rôle dans la décolonisation."],
  docs: [{ titre: "Document 1 : un délégué signe la Charte des Nations unies, à San Francisco, en 1945", image: "images/ep3_charte_onu.jpg", credit: "Frank Forde signe la Charte des Nations unies au nom de l'Australie (San Francisco, 1945). Photo : ministère australien de l'Information — domaine public (Wikimedia Commons)." },
    { titre: "Document 2 : quelques dates", liste: ["1945 : congrès panafricain de Manchester", "18-24 avril 1955 : conférence de Bandung (Indonésie), 29 pays d'Asie et d'Afrique", "6 mars 1957 : indépendance du Ghana", "1960 : indépendance de nombreux pays africains, dont le Togo"] }],
  prods: [{
    intro: "Après 1945, le monde change, et ce changement profite aux peuples colonisés. Dans cette première partie, à partir de la photographie de la signature de la Charte des Nations unies, je vais montrer comment la Seconde Guerre mondiale, les grandes puissances et l'ONU ont favorisé la décolonisation de l'Afrique.",
    adresse: "Chers auditeurs,",
    support: "La photographie du document 1 : un délégué signe la Charte des Nations unies à San Francisco, en 1945 ; informations du document exploitées",
    indConsigne: "Partie 1 : Seconde Guerre mondiale (soldats africains, faiblesses des Européens, égalité ; France et Royaume-Uni affaiblis) ; États-Unis et URSS hostiles aux empires coloniaux ; ONU (1945) : droit des peuples à disposer d'eux-mêmes, tribune, surveillance des territoires sous tutelle comme le Togo",
    dev: ["D'abord, la Seconde Guerre mondiale accélère la décolonisation : les soldats africains qui y ont combattu découvrent les faiblesses des Européens et réclament l'égalité ; la France et le Royaume-Uni sortent affaiblis de la guerre.",
      "Ensuite, les deux nouvelles grandes puissances, les États-Unis et l'URSS, sont hostiles aux empires coloniaux et encouragent les luttes de libération.",
      "Enfin, l'ONU, créée en 1945, dont la photographie montre la signature de la Charte à San Francisco, proclame le droit des peuples à disposer d'eux-mêmes. Elle sert de tribune aux revendications africaines et surveille les territoires sous tutelle, comme le Togo."],
    concl: "En définitive, chers auditeurs, la guerre a affaibli les colonisateurs, et le nouvel ordre mondial, avec l'ONU, a donné aux Africains des alliés et une tribune.",
    justesse: ["Seconde Guerre mondiale : soldats africains qui découvrent les faiblesses des Européens et réclament l'égalité ; France et Royaume-Uni affaiblis.",
      "États-Unis et URSS hostiles aux empires coloniaux, soutien aux luttes de libération.",
      "ONU (1945) : droit des peuples à disposer d'eux-mêmes ; tribune des revendications africaines ; surveillance des territoires sous tutelle (Togo)."],
    concepts: "Décolonisation, grande puissance, ONU, droit des peuples à disposer d'eux-mêmes, tutelle."
  }, {
    intro: "Les colonisés ne sont pas restés seuls : ils se sont unis. Dans cette seconde partie, à partir de la chronologie, je vais présenter le panafricanisme et la conférence de Bandung, et expliquer leur rôle dans la décolonisation.",
    adresse: "Chers auditeurs,",
    support: "La chronologie du document 2 (congrès de Manchester, 1945 ; Bandung, 18-24 avril 1955, 29 pays ; indépendance du Ghana, 6 mars 1957 ; indépendances de 1960) ; informations exploitées",
    indConsigne: "Partie 2 : panafricanisme (né chez les Noirs d'Amérique et des Antilles ; égalité et unité des Noirs ; Manchester 1945) ; Bandung (18-24 avril 1955, 29 pays, condamnation du colonialisme, solidarité, « tiers-monde ») ; Ghana 1957, exemple ; triomphe vers 1960",
    dev: ["D'abord, le panafricanisme est un mouvement politique et culturel né chez les Noirs d'Amérique et des Antilles ; il défend l'égalité et l'unité des Noirs. Au congrès de Manchester, en 1945, il réclame l'indépendance de l'Afrique.",
      "Ensuite, du 18 au 24 avril 1955, 29 pays d'Asie et d'Afrique se réunissent à Bandung, en Indonésie : ils condamnent le colonialisme et affirment la solidarité des peuples colonisés. C'est la naissance du « tiers-monde ».",
      "Enfin, ces encouragements portent leurs fruits : le Ghana, indépendant en 1957, devient un exemple pour tout le continent, et la décolonisation triomphe vers 1960, l'année de l'indépendance de nombreux pays africains, dont le Togo."],
    concl: "En définitive, chers auditeurs, l'union des Noirs et la solidarité des peuples d'Asie et d'Afrique ont donné aux luttes africaines une force nouvelle.",
    justesse: ["Panafricanisme : mouvement politique et culturel né chez les Noirs d'Amérique et des Antilles ; égalité et unité des Noirs ; congrès de Manchester (1945) : indépendance de l'Afrique.",
      "Bandung (Indonésie), 18-24 avril 1955 : 29 pays d'Asie et d'Afrique ; condamnation du colonialisme, solidarité des peuples colonisés ; « tiers-monde ».",
      "Ghana indépendant en 1957, exemple pour le continent ; triomphe de la décolonisation vers 1960."],
    concepts: "Panafricanisme, solidarité, colonialisme, tiers-monde, indépendance."
  }]
});

EPREUVES_3E.h3_8.sit.push({
  texte: "Ta correspondante française, Clara, prépare un exposé sur les indépendances africaines. Elle t'écrit : « Comment le Togo est-il devenu indépendant ? Est-ce qu'il y a eu des élections, des partis, des disputes ? » Pour lui répondre, tu disposes des notes ci-dessous, prises pendant une conférence au CDI.",
  consigne: "Écris à Clara une lettre dans laquelle tu lui racontes les débuts de la vie politique au Togo, puis les principaux événements politiques qui ont conduit le pays de 1950 à l'indépendance.",
  doc: { titre: "Document : les notes prises au CDI", liste: ["11-12 mai 1945 : conférence de Lomé : « Nous sommes Togolais »", "1946 : naissance du CUT et du PTP", "30 août 1956 : République autonome du Togo", "27 avril 1958 : élections sous le contrôle de l'ONU", "27 avril 1960 : indépendance"] },
  intro: "Tu me demandes comment le Togo est devenu indépendant. Dans cette lettre, je vais te raconter les débuts de notre vie politique, puis les principaux événements qui ont conduit mon pays de 1950 à l'indépendance.",
  adresse: "Chère Clara,",
  support: "La lettre de Clara ; les notes du CDI (conférence de Lomé des 11-12 mai 1945 ; naissance du CUT et du PTP en 1946 ; République autonome le 30 août 1956 ; élections du 27 avril 1958 sous le contrôle de l'ONU ; indépendance le 27 avril 1960) ; informations exploitées",
  indConsigne: "Lettre : débuts (conférence de mai 1945, Noutary, Brazzaville 1944, « Nous sommes Togolais » ; CUT et PTP 1946 ; Martin Aku député ; Assemblée représentative, Olympio président) ; événements (Grunitzky 1951 ; progressistes 1951 ; Ajavon, Mama Fousseni ; 1955 ; République autonome 1956 ; référendum, mission King ; élections de 1958, 29 sièges sur 46 ; 27 avril 1960)",
  dev: ["D'abord, notre vie politique commence avec la conférence des 11 et 12 mai 1945, réunie à Lomé par le commissaire Jean Noutary pour appliquer les décisions de la conférence de Brazzaville (1944). Les délégués refusent de devenir Français : « Nous sommes Togolais ». En 1946 naissent deux partis, le CUT et le PTP. Le 10 novembre 1946, Martin Aku, du CUT, est élu député du Togo à l'Assemblée nationale française, et le 8 décembre, le CUT remporte les élections de l'Assemblée représentative, que préside Sylvanus Olympio.",
    "Ensuite, à partir de 1951, les progressistes, proches de la France, prennent l'avantage : le 17 juin 1951, Nicolas Grunitzky, du PTP, remplace Martin Aku comme député, et en décembre, les progressistes gagnent les élections à l'Assemblée territoriale ; en 1952-1953, Robert Ajavon devient conseiller de la République et Mama Fousseni conseiller de l'Union française. En 1955, les nationalistes boycottent les élections.",
    "Enfin, le 30 août 1956, la République autonome du Togo est proclamée, avec Nicolas Grunitzky comme Premier ministre ; mais l'ONU refuse de reconnaître le référendum du 28 octobre 1956 et envoie la mission King (1957). Le 27 avril 1958, les élections, contrôlées par l'ONU, sont gagnées par le CUT et la JUVENTO (29 sièges sur 46) : Sylvanus Olympio devient Premier ministre et proclame l'indépendance du Togo le 27 avril 1960."],
  concl: "En définitive, chère Clara, il y a bien eu des partis, des élections et des disputes : après quinze ans de lutte politique, les nationalistes ont conduit le Togo à l'indépendance. Bonne chance pour ton exposé !",
  signature: "Ton ami(e) togolais(e)",
  justesse: ["Conférence des 11-12 mai 1945 (Noutary, application de Brazzaville 1944) : « Nous sommes Togolais » ; CUT et PTP (1946) ; Martin Aku député (10 novembre 1946) ; victoire du CUT à l'Assemblée représentative (8 décembre), présidée par Olympio.",
    "Grunitzky député (17 juin 1951) ; progressistes vainqueurs à l'Assemblée territoriale (décembre 1951) ; Ajavon et Mama Fousseni (1952-1953) ; boycott des nationalistes (1955).",
    "République autonome (30 août 1956), Grunitzky Premier ministre ; référendum du 28 octobre 1956 non reconnu, mission King (1957) ; élections du 27 avril 1958 (CUT et JUVENTO, 29 sièges sur 46), Olympio Premier ministre ; indépendance le 27 avril 1960."],
  concepts: "Vie politique, parti, député, Assemblée représentative, République autonome, référendum, indépendance."
});
EPREUVES_3E.h3_8.sit.push({
  texte: "Le conseil municipal des jeunes de ta commune prépare une exposition pour l'anniversaire de l'indépendance. Ton équipe est chargée de deux panneaux. Vous avez recueilli le témoignage d'une ancienne commerçante du grand marché de Lomé (document 1) et celui d'un ancien électeur de 1958 (document 2).",
  consignes: ["Rédige le premier panneau : à partir du document 1 et de tes connaissances, présente les acteurs de la lutte anticoloniale au Togo, partis politiques et autres acteurs.",
    "Rédige le second panneau : à partir du document 2 et de tes connaissances, explique le rôle de l'ONU dans la décolonisation du Togo."],
  docs: [{ titre: "Document 1 : le témoignage d'une ancienne commerçante", texte: "« Au marché, nous, les commerçantes, nous soutenions le CUT : nous donnions de l'argent et nous allions aux meetings. Les jeunes de la JUVENTO étaient les plus pressés. D'autres, au PTP ou dans les partis du nord, disaient qu'il fallait rester avec la France encore un peu. Nos chefs de canton, les syndicats et même les élèves s'en mêlaient. »" },
    { titre: "Document 2 : le témoignage d'un ancien électeur", texte: "« Le 27 avril 1958, j'ai voté pour la première fois. Il y avait des observateurs étrangers envoyés par les Nations unies, partout dans les bureaux de vote. On nous disait que, sans eux, l'élection n'aurait pas été honnête. Deux ans plus tard, nous étions indépendants. »" }],
  prods: [{
    intro: "L'indépendance du Togo est le fruit d'une lutte menée par des partis et par toute la population. Ce premier panneau présente, à partir du témoignage d'une ancienne commerçante de Lomé, les acteurs de la lutte anticoloniale.",
    support: "Le témoignage de l'ancienne commerçante (document 1) : soutien des commerçantes au CUT (argent, meetings) ; JUVENTO pressée ; PTP et partis du nord favorables à la France ; chefs de canton, syndicats, élèves ; informations exploitées",
    indConsigne: "Panneau 1 : nationalistes (CUT d'Olympio et Augustino de Souza ; JUVENTO 1951 : Aithson, Abalo, Apaloo) ; progressistes (PTP de Grunitzky et Ajavon ; UCPN de Mama Fousseni et Méatchi) ; autres acteurs (chefs traditionnels, commerçantes de Lomé, syndicats, élèves et étudiants)",
    dev: ["D'abord, les nationalistes veulent une indépendance rapide : le CUT (Comité de l'unité togolaise) de Sylvanus Olympio et d'Augustino de Souza, et la JUVENTO, créée en 1951, avec Messan Aithson, Firmin Abalo et Ben Apaloo, ces jeunes « les plus pressés » dont parle la commerçante.",
      "Ensuite, les progressistes, proches de la France, préfèrent une évolution lente : le PTP (Parti togolais du progrès) de Nicolas Grunitzky et Robert Ajavon, et l'UCPN (Union des chefs et des populations du Nord) de Mama Fousseni et Antoine Méatchi.",
      "Enfin, d'autres acteurs participent à la lutte : les chefs traditionnels, chefs de canton et de village, les commerçantes de Lomé, qui financent les partis et vont aux meetings, les syndicats et les associations d'élèves et d'étudiants."],
    concl: "En définitive, partis nationalistes et progressistes, chefs, commerçantes, syndicats et jeunes : c'est tout un peuple qui a pris part à la marche vers l'indépendance.",
    justesse: ["Nationalistes : CUT (Sylvanus Olympio, Augustino de Souza) ; JUVENTO (1951 : Messan Aithson, Firmin Abalo, Ben Apaloo).",
      "Progressistes : PTP (Nicolas Grunitzky, Robert Ajavon) ; UCPN (Mama Fousseni, Antoine Méatchi).",
      "Autres acteurs : chefs traditionnels (canton, village), commerçantes de Lomé, syndicats, associations d'élèves et d'étudiants."],
    concepts: "Nationaliste, progressiste, parti politique, lutte anticoloniale, syndicat."
  }, {
    intro: "Le Togo n'était pas une colonie comme les autres : c'était un territoire sous tutelle de l'ONU. Ce second panneau explique, à partir du témoignage d'un ancien électeur, le rôle décisif de l'ONU dans sa décolonisation.",
    support: "Le témoignage de l'ancien électeur (document 2) : vote du 27 avril 1958 ; observateurs envoyés par les Nations unies dans les bureaux de vote ; élection honnête ; indépendance deux ans plus tard ; informations exploitées",
    indConsigne: "Panneau 2 : territoire sous tutelle ; surveillance de l'administration française ; pétitions (Olympio à New York dès 1947) ; missions de visite ; plébiscite du Togo britannique (1956) ; référendum de 1956 non reconnu, mission King ; élections supervisées du 27 avril 1958 ; indépendance du 27 avril 1960",
    dev: ["D'abord, le Togo étant un territoire sous tutelle, l'ONU surveille l'administration française et reçoit les pétitions des Togolais : Sylvanus Olympio plaide devant elle, à New York, dès 1947. Elle envoie aussi des missions de visite.",
      "Ensuite, en 1956, elle organise le plébiscite du Togo britannique, qui choisit le rattachement à la Gold Coast. La même année, elle refuse de reconnaître le référendum sur la République autonome et envoie la mission King (1957).",
      "Enfin, elle fait superviser les élections du 27 avril 1958, comme s'en souvient l'ancien électeur ; gagnées par les nationalistes, elles ouvrent la voie à l'indépendance, proclamée le 27 avril 1960."],
    concl: "En définitive, en surveillant la France, en écoutant les Togolais et en garantissant des élections honnêtes, l'ONU a joué un rôle décisif dans notre indépendance.",
    justesse: ["Territoire sous tutelle : surveillance de l'administration française ; pétitions (Olympio à New York dès 1947) ; missions de visite.",
      "Plébiscite du Togo britannique (1956) : rattachement à la Gold Coast ; référendum de 1956 non reconnu ; mission King (1957).",
      "Supervision des élections du 27 avril 1958, victoire des nationalistes ; indépendance le 27 avril 1960."],
    concepts: "Tutelle, pétition, mission de visite, plébiscite, référendum, élection supervisée."
  }]
});

EPREUVES_3E.h3_9.sit.push({
  texte: "Ta classe part en sortie pédagogique vers Atakpamé. En chemin, le car s'arrête au bord de l'Amou, près de Chra, et le guide montre l'endroit où, en 1914, se dressait le pont du chemin de fer, détruit pendant la guerre (document). De retour en classe, chacun doit rédiger la page de son carnet de sortie consacrée à cette halte.",
  consigne: "Rédige la page de ton carnet de sortie : à partir de la photographie et de tes connaissances, explique pourquoi la Première Guerre mondiale a atteint le Togo, puis raconte les étapes de cette guerre.",
  doc: { titre: "Document : le pont du chemin de fer sur l'Amou, près de Chra, détruit en août 1914", image: "images/ep3_pont_chra.jpg", credit: "Pont de chemin de fer détruit près de Chra (Kra), avant le combat d'août 1914 — auteur inconnu, domaine public (Wikimedia Commons)." },
  titreProd: "Carnet de sortie : halte à Chra, au bord de l'Amou",
  intro: "Au bord de l'Amou, près de Chra, le guide nous a montré l'endroit où se dressait le pont du chemin de fer détruit en 1914. Dans cette page, j'explique pourquoi la Première Guerre mondiale a atteint le Togo, puis je raconte les étapes de cette guerre.",
  support: "La halte au bord de l'Amou ; la photographie du pont du chemin de fer détruit près de Chra en août 1914 ; informations du document exploitées",
  indConsigne: "Carnet : causes géographique (colonies alliées autour, océan), politique, économique (« colonie modèle »), stratégique (station de Kamina) ; étapes (Bryant et Maroix, neutralité refusée de von Doering ; 7 août Lomé ; 15 août Agbéluvhoé ; 22 août Chra ; nuit du 24 au 25 août Kamina dynamitée ; 26 août capitulation, première victoire alliée)",
  dev: ["D'abord, la guerre atteint le Togo pour plusieurs raisons. Raison géographique : la colonie allemande est entourée de colonies alliées, la Gold Coast britannique à l'ouest, le Dahomey et les territoires français au nord et à l'est, et bordée par l'océan au sud. Raisons politique et économique : les Alliés, surtout les Britanniques, veulent enlever à l'Allemagne cette « colonie modèle ». Raison stratégique : ils veulent détruire la station radio de Kamina, qui reliait Berlin aux navires allemands de l'Atlantique Sud.",
    "Ensuite, début août 1914, les troupes britanniques de la Gold Coast (Bryant) et françaises du Dahomey (Maroix) menacent le Togo ; le gouverneur par intérim von Doering propose la neutralité de la colonie, mais les Alliés refusent. Le 7 août, les Allemands abandonnent Lomé, que les Britanniques occupent, et se replient vers Kamina. Le 15 août a lieu le combat d'Agbéluvhoé.",
    "Enfin, le 22 août, on se bat ici, à Chra, sur l'Amou, où le pont du chemin de fer a été détruit. Dans la nuit du 24 au 25 août, les Allemands dynamitent eux-mêmes la station de Kamina, et le 26 août, ils capitulent : c'est la première victoire des Alliés dans cette guerre."],
  concl: "En définitive, en moins de trois semaines, les Allemands ont été chassés du Togo : le pont détruit de Chra rappelle cette guerre brève mais lourde de conséquences.",
  justesse: ["Causes : géographique (colonies alliées autour, océan au sud) ; politique (enlever le Togo à l'Allemagne) ; économique (« colonie modèle ») ; stratégique (station radio de Kamina, liaison Berlin-navires de l'Atlantique Sud).",
    "Début août 1914 : Bryant (Gold Coast) et Maroix (Dahomey) ; neutralité proposée par von Doering, refusée ; 7 août : Lomé abandonnée, occupée par les Britanniques ; 15 août : combat d'Agbéluvhoé.",
    "22 août : combat de Chra, sur l'Amou ; nuit du 24 au 25 août : Kamina dynamitée par les Allemands ; 26 août : capitulation, première victoire des Alliés."],
  concepts: "Guerre mondiale, Alliés, neutralité, station radio, capitulation."
});
EPREUVES_3E.h3_9.sit.push({
  texte: "Dans ton quartier, une rumeur partie d'un réseau social accuse les jeunes du quartier voisin d'avoir volé une moto. Des bagarres éclatent (document 1), et un message circule sur les téléphones (document 2). Pour la Journée internationale de la paix (21 septembre), le chef de quartier organise une causerie et te demande d'y intervenir deux fois.",
  consignes: ["À partir du document 1 et de tes connaissances, montre aux jeunes pourquoi il faut refuser la guerre et la violence, puis présente-leur ce qu'est la paix, les valeurs et les conditions d'une culture de la paix.",
    "À partir du document 2 et de tes connaissances, explique-leur comment s'engager contre l'extrémisme violent dans la vie en collectivité, et quelles sont les responsabilités du citoyen."],
  docs: [{ titre: "Document 1 : ce que raconte le chef de quartier", texte: "« Samedi, sans rien vérifier, des jeunes de chez nous sont allés chez nos voisins avec des bâtons. Il y a eu trois blessés, une boutique a été saccagée, et maintenant les enfants des deux quartiers ne vont plus au même terrain de jeu. Le lendemain, on a retrouvé la moto : elle n'avait jamais été volée. »" },
    { titre: "Document 2 : le message qui circule sur les téléphones", texte: "« Ceux d'en face ne sont pas comme nous. Ils ne respectent rien. La police ne fera rien : c'est à nous de leur montrer qui commande. Rendez-vous ce soir, venez nombreux et armés. Partagez ! »" }],
  prods: [{
    intro: "Samedi, une simple rumeur a suffi pour que nos deux quartiers se battent. Dans ma première intervention, à partir du récit de notre chef de quartier, je vais vous montrer pourquoi il faut refuser la violence, puis ce qu'est la paix et comment construire une culture de la paix.",
    adresse: "Monsieur le Chef de quartier, chers jeunes,",
    support: "Le récit du chef de quartier (document 1) : expédition punitive sans vérification ; trois blessés, boutique saccagée ; enfants séparés ; moto jamais volée ; informations exploitées",
    indConsigne: "Intervention 1 : la guerre et la violence détruisent vies et biens ; définition de la paix, paix passive et paix active ; valeurs (vérité, justice, tolérance, écoute, maîtrise de soi, acceptation des différences, égalité filles-garçons, coopération, esprit critique, non-violence) ; modèles ; conditions (éducation, transparence, démocratie, économie honnête, culture de l'autre, dialogue)",
    dev: ["D'abord, la guerre et la violence détruisent des vies et des biens : il faut les refuser. Samedi, la bagarre a fait trois blessés, saccagé une boutique et séparé nos enfants, pour une moto qui n'avait jamais été volée.",
      "Ensuite, la paix est la situation d'un pays ou d'un peuple qui n'est pas en guerre. La paix passive est la simple absence de conflit ; la paix active, ce sont les actions qui rendent la vie meilleure pour tous. Elle repose sur des valeurs : la vérité, la justice, la tolérance, l'écoute, la maîtrise de soi, l'acceptation des différences, l'égalité entre filles et garçons, la coopération, l'esprit critique, qui nous aurait poussés à vérifier la rumeur, et la non-violence, celle de Gandhi, de Martin Luther King, de Nelson Mandela ou de Mère Teresa.",
      "Enfin, une culture de la paix a des conditions : éduquer à la paix, gérer les affaires publiques de façon transparente, construire une vraie démocratie, gérer l'économie de façon honnête, accepter la culture de l'autre et régler les désaccords par le dialogue."],
    concl: "En définitive, chers jeunes, la paix ne tombe pas du ciel : elle se construit chaque jour, en vérifiant, en écoutant et en dialoguant.",
    justesse: ["La guerre et la violence détruisent vies et biens : il faut les refuser.",
      "Paix : situation d'un pays ou d'un peuple qui n'est pas en guerre ; paix passive (absence de conflit) et paix active (actions qui améliorent la vie de tous) ; valeurs (vérité, justice, tolérance, écoute, maîtrise de soi, acceptation des différences, égalité filles-garçons, coopération, esprit critique, non-violence) ; Gandhi, Martin Luther King, Mandela, Mère Teresa.",
      "Conditions : éducation à la paix, transparence des affaires publiques, vraie démocratie, économie honnête, acceptation de la culture de l'autre, dialogue."],
    concepts: "Paix, paix passive, paix active, non-violence, tolérance, culture de la paix."
  }, {
    intro: "Un message circule sur vos téléphones et appelle à la violence. Dans ma seconde intervention, à partir de ce message, je vais vous expliquer comment s'engager contre l'extrémisme violent dans notre vie en collectivité, et quelles sont nos responsabilités de citoyens.",
    adresse: "Chers jeunes,",
    support: "Le message du document 2 : « ils ne sont pas comme nous », mépris de la police, appel à venir « armés », invitation à partager ; informations exploitées",
    indConsigne: "Intervention 2 : vie en collectivité (vivre-ensemble, politesse, civilité, civisme) ; responsabilités du citoyen (respecter la loi et l'opinion des autres, participer à la vie de la communauté et aux élections, refuser la haine et la violence) ; application au message",
    dev: ["D'abord, ce message veut nous diviser en « eux » et « nous » et nous pousser à nous faire justice nous-mêmes, par les armes : c'est le contraire du vivre-ensemble.",
      "Ensuite, dans la vie en collectivité, chacun doit pratiquer le vivre-ensemble, la politesse, la civilité et le civisme : respecter ses voisins, les biens de tous et les règles communes.",
      "Enfin, le citoyen a des responsabilités : respecter la loi, au lieu de « montrer qui commande », et l'opinion des autres ; participer à la vie de sa communauté et aux élections ; refuser la haine et la violence. Ce message, il ne faut ni y répondre ni le partager."],
    concl: "En définitive, chers jeunes, s'engager contre l'extrémisme violent, c'est refuser la haine, respecter la loi et choisir le dialogue : supprimons ce message au lieu de le partager.",
    justesse: ["Le message divise et appelle à la violence et à se faire justice soi-même : contraire au vivre-ensemble.",
      "Vie en collectivité : vivre-ensemble, politesse, civilité, civisme.",
      "Responsabilités du citoyen : respecter la loi et l'opinion des autres, participer à la vie de sa communauté et aux élections, refuser la haine et la violence."],
    concepts: "Extrémisme violent, vivre-ensemble, civilité, civisme, citoyen, responsabilité."
  }]
});

EPREUVES_3E.h3_10.sit.push({
  texte: "Ton collège organise pour la première fois une « simulation de l'ONU » : chaque élève représente un pays. Avant la séance, le professeur d'histoire projette la photographie ci-dessous et te demande de rédiger la page d'accueil du livret remis aux participants.",
  consigne: "Rédige la page d'accueil du livret : à partir de la photographie et de tes connaissances, présente l'ONU (définition, buts, siège), puis explique pourquoi et comment elle a été créée.",
  doc: { titre: "Document : le président américain Roosevelt (à gauche) et le Premier ministre britannique Churchill pendant la conférence qui a donné naissance à la Charte de l'Atlantique (10 août 1941)", image: "images/ep3_charte_atlantique.jpg", credit: "Lieutenant L. C. Priest, photographe officiel de la Royal Navy, 10 août 1941 (Imperial War Museums, A 4817) — domaine public (Wikimedia Commons)." },
  titreProd: "Bienvenue à la simulation de l'ONU",
  intro: "Pendant quelques heures, vous allez représenter un pays à l'ONU. Cette page présente l'organisation, puis explique pourquoi et comment elle a été créée.",
  support: "La simulation de l'ONU ; la photographie de Roosevelt et Churchill pendant la conférence de la Charte de l'Atlantique (10 août 1941) ; informations du document exploitées",
  indConsigne: "Page d'accueil : définition (1945, 193 États ; paix et sécurité, droits humains, coopération ; siège à New York) ; raisons (échec de la SDN, 1919) ; étapes (initiative de Roosevelt ; Charte de l'Atlantique 1941 ; Déclaration des Nations unies 1942 ; Yalta, février 1945 ; San Francisco, 50 États, 26 juin 1945 ; naissance le 24 octobre 1945)",
  dev: ["D'abord, l'Organisation des Nations unies (ONU), créée en 1945, rassemble aujourd'hui 193 États. Elle a pour buts de maintenir la paix et la sécurité, de défendre les droits humains et de développer la coopération entre les pays. Son siège est à New York, aux États-Unis.",
    "Ensuite, elle remplace la Société des Nations (SDN), créée en 1919, qui n'avait pas su empêcher la Seconde Guerre mondiale.",
    "Enfin, pendant la guerre, les Alliés préparent une nouvelle organisation, à l'initiative du président américain Franklin D. Roosevelt, que l'on voit sur la photographie : Charte de l'Atlantique (1941), Déclaration des Nations unies (1942), conférences de Yalta (février 1945) et de San Francisco (avril-juin 1945), où 50 États signent la Charte des Nations unies le 26 juin 1945. L'ONU naît officiellement le 24 octobre 1945."],
  concl: "En définitive, l'ONU est née de la guerre pour garantir la paix : à vous, délégués, de la faire vivre aujourd'hui. Bonne simulation !",
  justesse: ["ONU : créée en 1945, 193 États ; buts : paix et sécurité, droits humains, coopération ; siège à New York.",
    "Échec de la SDN (1919), qui n'a pas empêché la Seconde Guerre mondiale.",
    "Initiative de Roosevelt ; Charte de l'Atlantique (1941) ; Déclaration des Nations unies (1942) ; Yalta (février 1945) ; San Francisco (avril-juin 1945) : 50 États signent la Charte le 26 juin 1945 ; naissance officielle le 24 octobre 1945."],
  concepts: "ONU, SDN, Charte, sécurité collective, droits humains, coopération."
});
EPREUVES_3E.h3_10.sit.push({
  texte: "Le 24 octobre, Journée des Nations unies, le club UNESCO de ton collège tient un stand. Tu dois préparer deux affiches. Le président du club te remet un schéma (document 1) et une revue de presse réalisée par les membres (document 2).",
  consignes: ["À partir du schéma du document 1 et de tes connaissances, réalise la première affiche : présente les organes principaux de l'ONU, son rôle et ses institutions spécialisées.",
    "À partir de la revue de presse du document 2 et de tes connaissances, réalise la seconde affiche : montre les forces et les faiblesses de l'ONU."],
  docs: [{ titre: "Document 1 : les organes principaux de l'ONU", image: "images/epreuves/3e_h3_10.png" },
    { titre: "Document 2 : la revue de presse du club", liste: ["« Casques bleus : la mission en Centrafrique protège les civils »", "« Le Conseil de sécurité bloqué une nouvelle fois par un veto »", "« L'UNICEF et l'OMS lancent une campagne de vaccination »", "« Rwanda, 1994 : le génocide que le monde n'a pas empêché »", "« Faute de moyens, le PAM réduit son aide alimentaire »"] }],
  prods: [{
    titreProd: "L'ONU : qui fait quoi ?",
    intro: "L'ONU est une grande maison qui a plusieurs organes et de nombreuses institutions. Cette affiche, à partir du schéma, présente ses organes principaux, son rôle et ses institutions spécialisées.",
    support: "Le schéma des organes principaux de l'ONU (document 1) ; informations du document exploitées",
    indConsigne: "Affiche 1 : Assemblée générale ; Conseil de sécurité (15 membres, 5 permanents avec veto) ; Secrétariat (secrétaire général élu pour 5 ans, Guterres, Boutros-Ghali, Kofi Annan) ; Cour internationale de justice ; Conseil économique et social ; Conseil de tutelle ; rôle (Casques bleus, protection des civils) ; institutions (UNESCO, OMS, FAO, FMI, Banque mondiale) ; fonds et programmes (UNICEF, HCR, PNUD, PAM)",
    dev: ["D'abord, l'Assemblée générale réunit tous les États membres, avec une voix chacun ; elle discute et vote des résolutions. Le Conseil de sécurité, chargé de la paix, compte 15 membres, dont 5 permanents qui ont le droit de veto : États-Unis, Russie, Chine, France, Royaume-Uni. Le Secrétariat est dirigé par le secrétaire général, élu pour 5 ans (António Guterres depuis 2017) ; deux Africains ont occupé ce poste, Boutros Boutros-Ghali (Égypte) et Kofi Annan (Ghana). La Cour internationale de justice, à La Haye, compte 15 juges qui règlent les différends entre États ; le Conseil économique et social coordonne l'action économique et sociale ; le Conseil de tutelle surveillait les territoires sous tutelle, comme le Togo.",
      "Ensuite, par le Conseil de sécurité et les Casques bleus, l'ONU maintient ou rétablit la paix (missions en Centrafrique, en RD Congo, au Soudan du Sud…), protège les civils et aide les pays qui sortent de la guerre.",
      "Enfin, elle agit grâce à des institutions spécialisées : l'UNESCO (éducation, science, culture), l'OMS (santé), la FAO (alimentation et agriculture), le FMI (monnaie), la Banque mondiale (lutte contre la pauvreté), et grâce à des fonds et des programmes : l'UNICEF (enfants), le HCR (réfugiés), le PNUD (développement), le PAM (aide alimentaire)."],
    concl: "En définitive, avec ses organes et ses institutions, l'ONU agit sur tous les fronts : la paix, la santé, l'éducation, l'alimentation et le développement.",
    justesse: ["Assemblée générale (tous les États, une voix) ; Conseil de sécurité (15 membres, 5 permanents avec veto) ; Secrétariat (secrétaire général, 5 ans ; Guterres ; Boutros-Ghali, Kofi Annan) ; Cour internationale de justice (La Haye, 15 juges) ; Conseil économique et social ; Conseil de tutelle (Togo).",
      "Rôle : Conseil de sécurité et Casques bleus (Centrafrique, RD Congo, Soudan du Sud) ; protection des civils ; aide aux pays sortant de la guerre.",
      "Institutions spécialisées : UNESCO, OMS, FAO, FMI, Banque mondiale ; fonds et programmes : UNICEF, HCR, PNUD, PAM."],
    concepts: "Assemblée générale, Conseil de sécurité, droit de veto, secrétaire général, Casques bleus, institution spécialisée."
  }, {
    titreProd: "L'ONU : des succès et des limites",
    intro: "L'ONU fait beaucoup, mais elle ne peut pas tout. Cette affiche, à partir de la revue de presse du club, montre ses forces, puis ses faiblesses.",
    support: "La revue de presse du document 2 (Casques bleus en Centrafrique ; Conseil de sécurité bloqué par un veto ; campagne de vaccination de l'UNICEF et de l'OMS ; génocide du Rwanda en 1994 ; aide du PAM réduite faute de moyens) ; informations exploitées",
    indConsigne: "Affiche 2 : forces (troisième guerre mondiale évitée, décolonisation accompagnée, diplomatie, sanctions, Casques bleus ; lutte contre la faim, la pauvreté, les maladies, l'analphabétisme) ; faiblesses (veto qui bloque le Conseil de sécurité ; massacres non empêchés : Rwanda 1994, Srebrenica 1995 ; manque de moyens propres ; faim, pauvreté, violations des droits humains persistantes)",
    dev: ["D'abord, l'ONU a de vraies forces : elle a aidé à éviter une troisième guerre mondiale et accompagné la décolonisation ; elle règle des conflits par la diplomatie (médiation, négociations), les sanctions et les Casques bleus, comme en Centrafrique ; elle lutte contre la faim, la pauvreté, les maladies, avec les campagnes de vaccination de l'UNICEF et de l'OMS, et contre l'analphabétisme.",
      "Ensuite, elle a des faiblesses : le droit de veto bloque souvent le Conseil de sécurité, comme le rappelle la presse, et elle n'a pas empêché certains massacres, au Rwanda en 1994 ou à Srebrenica en 1995.",
      "Enfin, elle manque de moyens propres, ce qui oblige par exemple le PAM à réduire son aide, et la faim, la pauvreté et les violations des droits humains persistent dans le monde."],
    concl: "En définitive, l'ONU n'est pas parfaite, mais sans elle le monde serait moins sûr : il faut la renforcer plutôt que l'abandonner.",
    justesse: ["Forces : troisième guerre mondiale évitée ; décolonisation accompagnée ; diplomatie (médiation, négociations), sanctions, Casques bleus ; lutte contre la faim, la pauvreté, les maladies, l'analphabétisme.",
      "Faiblesses : veto qui bloque le Conseil de sécurité ; massacres non empêchés (Rwanda 1994, Srebrenica 1995).",
      "Manque de moyens propres ; faim, pauvreté et violations des droits humains persistantes."],
    concepts: "Diplomatie, médiation, sanction, Casques bleus, droit de veto, génocide."
  }]
});

EPREUVES_3E.h3_11.sit.push({
  texte: "À la radio communautaire de ta préfecture, un bulletin d'information (document) inquiète les auditeurs. Le directeur de la radio invite les élèves de 3e de ton collège à rédiger un texte de sensibilisation qui sera lu à l'antenne chaque soir pendant une semaine.",
  consigne: "Rédige le texte de sensibilisation : à partir du bulletin et de tes connaissances, explique ce qu'est l'extrémisme violent et comment chacun peut s'en protéger, puis propose les alternatives qui permettent de le prévenir.",
  doc: { titre: "Document : extrait du bulletin d'information", texte: "« Dans la région des Savanes, un village a encore été attaqué cette nuit par des hommes armés venus du Sahel. Selon les autorités, ces groupes cherchent à recruter des jeunes sans emploi, en leur promettant de l'argent et une place dans le groupe. Les populations sont appelées à la vigilance. »" },
  titreProd: "Ensemble contre l'extrémisme violent",
  intro: "Chers auditeurs, des groupes armés attaquent nos villages et cherchent à recruter nos jeunes. Ce message explique ce qu'est l'extrémisme violent et comment s'en protéger, puis propose des solutions pour le prévenir.",
  adresse: "Chers auditeurs,",
  support: "Le bulletin d'information : attaque d'un village des Savanes par des hommes armés venus du Sahel ; recrutement de jeunes sans emploi par des promesses d'argent et d'appartenance ; appel à la vigilance ; informations exploitées",
  indConsigne: "Texte de sensibilisation : définition (idées radicales imposées par la violence : attentats, enlèvements, discours de haine) ; attaques dans les Savanes depuis 2021 ; jeunes visés (sans emploi, isolés, exclus) ; refuser la haine, ne pas se laisser embrigader, signaler ; alternatives (éducation et formation, emploi des jeunes, justice et bonne gouvernance, dialogue entre communautés et religions, participation, sport et culture)",
  dev: ["D'abord, l'extrémisme violent consiste à adopter des idées radicales et à vouloir les imposer par la violence : attentats, enlèvements, discours de haine. Depuis 2021, des groupes armés venus du Sahel attaquent des villages de la région des Savanes, comme le rappelle le bulletin.",
    "Ensuite, ces groupes recrutent surtout des jeunes sans emploi, isolés, qui se sentent exclus, en leur promettant de l'argent et une place. Chacun doit donc refuser la haine, ne pas se laisser embrigader et signaler aux autorités les comportements suspects.",
    "Enfin, il faut agir sur les causes : l'éducation et la formation, l'emploi des jeunes, la justice et la bonne gouvernance, le dialogue entre les communautés et entre les religions, la participation de tous à la vie de la nation, et des activités sportives et culturelles pour les jeunes."],
  concl: "En définitive, chers auditeurs, l'extrémisme violent se nourrit de l'isolement et du chômage : soyons vigilants, entourons nos jeunes et donnons-leur un avenir.",
  justesse: ["Extrémisme violent : idées radicales imposées par la violence (attentats, enlèvements, discours de haine) ; attaques de groupes armés venus du Sahel dans les Savanes depuis 2021.",
    "Recrutement de jeunes sans emploi, isolés, exclus ; refuser la haine, ne pas se laisser embrigader, signaler les comportements suspects.",
    "Alternatives : éducation et formation, emploi des jeunes, justice et bonne gouvernance, dialogue entre communautés et religions, participation de tous, activités sportives et culturelles."],
  concepts: "Extrémisme violent, radicalisation, embrigadement, vigilance, prévention, bonne gouvernance."
});
EPREUVES_3E.h3_11.sit.push({
  texte: "Sur le forum en ligne d'un journal, un internaute a écrit un message qui fait réagir (document 1). Ton club de débat décide de lui répondre et, pour la fête de fin d'année, d'organiser une « journée des cultures » au collège ; le programme est déjà prêt (document 2). Tu es chargé(e) de rédiger deux textes.",
  consignes: ["À partir du document 1 et de tes connaissances, rédige la réponse du club à l'internaute : explique ce que sont un peuple, une nation et le peuple togolais, et comment est né le peuple togolais.",
    "À partir du document 2 et de tes connaissances, rédige le mot d'accueil de la journée des cultures : montre aux invités pourquoi et comment promouvoir le vivre-ensemble au Togo."],
  docs: [{ titre: "Document 1 : le message de l'internaute", texte: "« Le Togo, ce n'est pas un peuple : ce sont des ethnies que les Blancs ont mises ensemble. Chacun devrait rester avec les siens. »" },
    { titre: "Document 2 : le programme de la journée des cultures", liste: ["8 h : accueil en tenues traditionnelles de toutes les régions", "9 h : danses traditionnelles des différentes régions, présentées par les élèves", "11 h : sketch « Le voisin d'à côté » contre les préjugés", "13 h : repas partagé : plats de toutes les communautés", "15 h : causerie sur le vivre-ensemble avec les chefs traditionnels"] }],
  prods: [{
    intro: "Votre message affirme que le Togo n'est pas un peuple. Le club de débat de notre collège voudrait vous répondre en expliquant ce que sont un peuple, une nation et le peuple togolais, puis comment est né le peuple togolais.",
    adresse: "Monsieur,",
    support: "Le message de l'internaute (document 1) : « ce n'est pas un peuple », « des ethnies que les Blancs ont mises ensemble », « chacun devrait rester avec les siens » ; informations exploitées",
    indConsigne: "Réponse : définitions du peuple, de la nation et du peuple togolais ; naissance par la colonisation (frontières de 1884) ; rapprochement (administration, chefs supérieurs, écoles, religions, médecine, cultures de rente) ; lutte commune pour l'indépendance ; nation en devenir depuis 1960",
    dev: ["D'abord, un peuple est un ensemble de personnes qui vivent sur un même territoire, ont en commun des coutumes et des institutions et obéissent aux mêmes lois ; une nation est un peuple qui a conscience de former une communauté, unie par une histoire, une culture, parfois une langue, et par la volonté de vivre ensemble. Le peuple togolais est l'ensemble des personnes qui habitent le Togo et sont soumises aux mêmes lois, quelle que soit leur ethnie.",
    "Ensuite, vous avez raison sur un point : le peuple togolais naît de la colonisation, à partir de 1884, quand les colonisateurs, en traçant les frontières, ont réuni des peuples différents dans un même territoire. Mais la colonisation les a aussi rapprochés : même administration, chefs supérieurs, écoles, nouvelles religions, médecine moderne, cultures de rente.",
      "Enfin, la lutte commune pour l'indépendance, avec ses partis et ses associations, a renforcé la conscience d'être Togolais. Depuis 1960, la construction de la nation se poursuit : le Togo est une nation en devenir, que chacun de nous doit bâtir, au lieu de « rester avec les siens »."],
    concl: "En définitive, Monsieur, notre peuple est né de la colonisation, mais il s'est forgé dans une histoire et une lutte communes : il nous reste à achever ensemble la nation togolaise.",
    signature: "Le club de débat du collège",
    justesse: ["Peuple : personnes sur un même territoire, coutumes et institutions communes, mêmes lois ; nation : conscience de former une communauté (histoire, culture, parfois langue, volonté de vivre ensemble) ; peuple togolais : habitants du Togo soumis aux mêmes lois, quelle que soit leur ethnie.",
      "Naissance par la colonisation (à partir de 1884, frontières réunissant des peuples différents) ; rapprochement (administration, chefs supérieurs, écoles, religions, médecine moderne, cultures de rente).",
      "Lutte commune pour l'indépendance (partis, associations) ; depuis 1960, nation en devenir."],
    concepts: "Peuple, nation, ethnie, peuple togolais, nation en devenir."
  }, {
    intro: "Bienvenue à notre journée des cultures. En quelques mots, je voudrais vous dire pourquoi et comment nous devons promouvoir le vivre-ensemble au Togo.",
    adresse: "Monsieur le Directeur, chers parents, chers camarades,",
    support: "Le programme de la journée (document 2) : tenues traditionnelles de toutes les régions ; danses traditionnelles des régions ; sketch contre les préjugés ; repas partagé ; causerie avec les chefs traditionnels ; informations exploitées",
    indConsigne: "Mot d'accueil : une quarantaine de peuples, différences ; renforcer l'entente entre les groupes ethniques ; respecter la culture des autres ; refuser le tribalisme et les préjugés ; travailler et vivre ensemble ; participer aux fêtes des autres communautés ; sensibiliser (causeries, sketches, affiches)",
    dev: ["D'abord, le Togo réunit une quarantaine de peuples : malgré nos différences, nous devons renforcer l'entente entre les groupes ethniques, car c'est elle qui fait la force de la nation.",
      "Ensuite, promouvoir le vivre-ensemble, c'est respecter la culture des autres, refuser le tribalisme et les préjugés, travailler et vivre ensemble, et participer aux fêtes des autres communautés, comme nous le faisons aujourd'hui avec ces tenues, ces danses et ce repas partagé.",
      "Enfin, c'est aussi sensibiliser notre entourage : notre sketch contre les préjugés et la causerie avec les chefs traditionnels, comme les affiches que vous voyez, servent à cela."],
    concl: "En définitive, notre diversité est une richesse quand nous apprenons à la partager : bonne journée des cultures à tous !",
    justesse: ["Une quarantaine de peuples ; renforcer l'entente entre les groupes ethniques malgré les différences.",
      "Respecter la culture des autres ; refuser le tribalisme et les préjugés ; travailler et vivre ensemble ; participer aux fêtes des autres communautés.",
      "Sensibiliser l'entourage : causeries, sketches, affiches."],
    concepts: "Vivre-ensemble, tribalisme, préjugé, tolérance, diversité."
  }]
});
