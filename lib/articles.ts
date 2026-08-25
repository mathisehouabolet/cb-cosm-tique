export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  note?: string;
};

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  date: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "rituel-karite",
    title: "Beurre de karité",
    subtitle: "Le trésor naturel pour cheveux et peau",
    excerpt:
      "Découvrez les propriétés nourrissantes du beurre de karité pur et les meilleures façons de l'intégrer à vos rituels beauté.",
    image: "/products/01-beurre-karite.jpeg",
    date: "12 juin 2026",
    sections: [
      {
        heading: "Pourquoi le beurre de karité est-il si précieux ?",
        paragraphs: [
          "Le beurre de karité est l'un des ingrédients cosmétiques les plus polyvalents et nourrissants que la nature nous offre. Issu des noix de l'arbre Butyrospermum parkii en Afrique, ce beurre végétal brut est utilisé depuis des siècles pour ses propriétés exceptionnelles sur la peau et les cheveux.",
          "Une composition riche en actifs bienfaisants",
        ],
        bullets: [
          "Vitamines A, D, E et F : antioxydantes et réparatrices",
          "Acides gras essentiels (oléique, stéarique) : nourrissants et protecteurs",
          "Insaponifiables : composés uniques qui pénètrent en profondeur pour restructurer la fibre capillaire et la peau",
        ],
        note:
          "Ces actifs font du karité un soin ultra-nourrissant, protecteur et régénérant, idéal pour les cheveux secs, abîmés, cassants ou crépus, ainsi que pour les peaux déshydratées.",
      },
      {
        heading: "Les bienfaits du beurre de karité pour les cheveux",
        paragraphs: [
          "1. Nutrition intense en profondeur — Le beurre de karité pénètre la fibre capillaire pour la nourrir de l'intérieur, redonnant souplesse et brillance aux cheveux ternes et secs.",
          "2. Réparation des pointes abîmées — Riche en vitamines et acides gras, il aide à réparer les fourches et les pointes cassantes, limitant ainsi la casse lors du brossage.",
          "3. Protection des colorations — Le karité forme un film protecteur autour du cheveu, prolongeant la tenue des colorations et protégeant la fibre des agressions extérieures : chaleur, pollution et UV.",
          "4. Définition des boucles et cheveux afro — Pour les cheveux bouclés, frisés ou afro, le beurre de karité aide à définir les boucles, réduire les frisottis et apporter une brillance naturelle sans alourdir.",
        ],
      },
      {
        heading: "Comment utiliser le beurre de karité sur les cheveux ?",
        paragraphs: [
          "En masque avant shampoing (soin profond) — Fréquence : 1 à 2 fois par semaine",
        ],
        steps: [
          "Prélevez une noisette de beurre de karité : une demi-cuillère à café pour des cheveux mi-longs, une cuillère pour des cheveux longs et épais.",
          "Faites-le fondre entre vos paumes pour l'assouplir.",
          "Appliquez sur les longueurs et les pointes, en évitant les racines si vos cheveux regraissent vite.",
          "Laissez agir 30 minutes à 1 heure, ou toute la nuit sous une serviette chaude pour un soin intensif.",
          "Rincez avec deux shampoings doux pour éliminer tout résidu gras.",
        ],
        note: "Résultat : des cheveux plus doux, souples et brillants, avec moins de casse.",
      },
      {
        heading: "Sur cheveux humides, après shampoing",
        steps: [
          "Après le lavage, essorez délicatement vos cheveux.",
          "Prélevez une très petite quantité de karité, juste une trace entre les doigts.",
          "Répartissez mèche par mèche sur les pointes et les longueurs.",
          "Laissez sécher naturellement ou coiffez comme d'habitude.",
        ],
        note:
          "Astuce : ne jamais appliquer une trop grande quantité sur cheveux secs, au risque d'un effet gras.",
      },
      {
        heading: "En bain d'huile pour cheveux très secs ou afro",
        paragraphs: [
          "Mélangez 2 cuillères à soupe de beurre de karité fondu, 1 cuillère à soupe d'huile végétale (coco, argan ou jojoba) et quelques gouttes d'huile essentielle de lavande ou de romarin.",
          "Appliquez sur cheveux secs, massez, enveloppez d'une serviette chaude et laissez agir toute la nuit avant le shampoing.",
        ],
      },
      {
        heading: "Le beurre de karité pour la peau",
        paragraphs: [
          "Le karité ne se limite pas aux cheveux. C'est un soin complet pour le visage, le corps et les zones qui ont besoin de confort.",
        ],
        bullets: [
          "Visage : crème de nuit nourrissante, en très petite quantité",
          "Corps : zones sèches comme les coudes, les genoux et les talons",
          "Mains et cuticules : répare les mains abîmées et les ongles cassants",
          "Lèvres : baume protecteur contre le froid et le dessèchement",
          "Prévention des vergetures : appliqué régulièrement sur le ventre, les cuisses et les seins",
        ],
      },
      {
        heading: "Karité brut ou raffiné : lequel choisir ?",
        bullets: [
          "Karité brut non raffiné : couleur beige ou ivoire, odeur naturelle de noisette, riche en insaponifiables. Idéal pour les soins intensifs, les cheveux très secs et les peaux abîmées.",
          "Karité raffiné ou désodorisé : blanc, sans odeur, texture plus légère. Adapté au visage, aux peaux sensibles et à l'utilisation quotidienne.",
        ],
        note:
          "Conseil d'expert : privilégiez toujours un beurre de karité bio, non raffiné et issu du commerce équitable pour bénéficier de tous ses actifs et soutenir les productrices africaines.",
      },
      {
        heading: "Recettes maison faciles",
        paragraphs: [
          "Chantilly de karité — Faites fondre 100 g de beurre de karité et 2 cuillères à soupe d'huile de coco au bain-marie. Laissez refroidir au réfrigérateur pendant 1 heure, puis fouettez au batteur électrique. Ajoutez 10 gouttes d'huile essentielle de votre choix et conservez dans un pot hermétique. Appliquez sur peau humide après la douche ou en masque capillaire.",
          "Baume réparateur pour pointes sèches — Faites fondre 50 g de beurre de karité avec 1 cuillère à soupe d'huile d'argan et 5 gouttes de vitamine E. Mélangez et appliquez une noisette sur les pointes après chaque shampoing.",
        ],
      },
      {
        heading: "Les erreurs à éviter",
        bullets: [
          "En mettre trop : une petite quantité suffit, sinon l'effet gras est garanti",
          "Appliquer sur les racines, sauf en cas de cuir chevelu très sec : privilégiez les longueurs et les pointes",
          "Oublier de bien rincer : deux shampoings sont parfois nécessaires",
          "Choisir un karité de mauvaise qualité : vérifiez les mentions « 100 % pur », « bio » et « non raffiné »",
        ],
      },
      {
        heading: "Notre verdict",
        paragraphs: [
          "Le beurre de karité est un indispensable dans toute routine capillaire et cosmétique naturelle. Polyvalent, économique et ultra-efficace, il convient à tous les types de cheveux, surtout les plus secs, abîmés ou texturés.",
          "Le petit plus : un seul pot peut servir pour les cheveux, le visage, le corps et les lèvres !",
          "Conseil pro : pour maximiser ses bienfaits, associez le karité à d'autres huiles végétales comme la coco, l'argan ou le jojoba, ainsi qu'à des actifs comme l'aloe vera ou les protéines hydrolysées pour des soins sur mesure.",
        ],
      },
    ],
  },
  {
    slug: "secrets-chebe",
    title: "Huile de chébé",
    subtitle: "Le secret ancestral des femmes du Tchad pour une chevelure longue et épaisse",
    excerpt:
      "Découvrez l'histoire du chébé, ses bienfaits pour la rétention de longueur et les gestes essentiels pour l'intégrer à votre routine capillaire.",
    image: "/products/04-huile-chebe.jpg",
    date: "28 mai 2026",
    sections: [
      {
        heading: "Qu'est-ce que le chébé ?",
        paragraphs: [
          "L'huile de chébé est un trésor capillaire méconnu qui fait ses preuves depuis des siècles. Originaire du Tchad, plus précisément de la région du Wadai, cette huile traditionnelle est utilisée depuis plus de 500 ans par les femmes Basara Arab pour obtenir des chevelures exceptionnellement longues, épaisses et résistantes.",
          "Le chébé, parfois orthographié « chewe » ou « shebe », est une poudre rougeâtre obtenue à partir d'un mélange de graines et de résines soigneusement sélectionnées et torréfiées.",
          "Ces ingrédients sont rôtis ensemble, puis broyés pour former une poudre fine et parfumée. La poudre est ensuite mélangée à une huile végétale de base, généralement de ricin, de sésame ou d'olive, pour créer l'huile de chébé.",
        ],
        bullets: [
          "Graines de Croton zambesicus, aussi appelé lavande croton",
          "Noyaux de cerises Mahllaba Soubiane",
          "Clous de girofle",
          "Résine de samour",
          "Pierre parfumée à la lavande",
        ],
      },
      {
        heading: "Les bienfaits de l'huile de chébé pour les cheveux",
        paragraphs: [
          "1. Favorise la rétention de longueur — Contrairement aux huiles qui promettent une pousse miraculeuse, le chébé agit principalement en limitant la casse et en protégeant la fibre capillaire. Les cheveux se cassent moins, donc la longueur acquise est conservée.",
          "2. Renforce la fibre capillaire — Les graines de Croton zambesicus et les clous de girofle sont riches en antioxydants et en composés qui renforcent la structure du cheveu, le rendant plus résistant au brossage, au coiffage et aux agressions environnementales.",
          "3. Nourrit intensément le cuir chevelu — L'huile de chébé nourrit le cuir chevelu, réduit la sécheresse et apaise les démangeaisons. Un cuir chevelu sain est la base d'une chevelure forte.",
          "4. Apporte brillance et douceur — Grâce à sa texture riche et à ses actifs nourrissants, elle laisse les cheveux plus brillants, plus doux et plus faciles à démêler.",
          "5. Protège les pointes sèches — En application sur les longueurs et les pointes, elle forme un film protecteur qui limite la déshydratation et prévient l'apparition des fourches.",
        ],
      },
      {
        heading: "Comment utiliser l'huile de chébé ?",
        paragraphs: [
          "En masque avant shampoing (soin profond) — Fréquence : 1 à 2 fois par semaine.",
        ],
        steps: [
          "Chauffez légèrement l'huile entre vos paumes. Évitez le micro-ondes, qui peut dégrader les acides gras.",
          "Séparez vos cheveux en quatre sections pour une application homogène.",
          "Appliquez d'abord sur le cuir chevelu du bout des doigts, en insistant sur les zones sèches ou clairsemées.",
          "Massez en mouvements circulaires pendant 5 à 10 minutes.",
          "Étirez le reste de l'huile sur les longueurs et les pointes.",
          "Enveloppez vos cheveux dans une serviette chaude ou une charlotte pour améliorer la pénétration.",
          "Laissez agir au minimum 30 minutes, idéalement 2 heures, ou toute la nuit pour un soin intensif.",
          "Rincez avec un shampoing doux, appliqué deux fois si nécessaire pour éliminer les résidus huileux.",
        ],
        note:
          "Résultat attendu : après 4 à 8 semaines d'utilisation régulière, les cheveux sont plus forts, plus brillants et la casse est nettement réduite.",
      },
      {
        heading: "En application sur les pointes, sans rinçage",
        paragraphs: [
          "Pour les cheveux très secs ou crépus, prélevez 2 à 3 gouttes d'huile de chébé, frottez-les entre vos paumes, puis effleurez uniquement les pointes et les longueurs très sèches. N'appliquez pas d'huile sur les racines pour éviter l'effet gras.",
          "Fréquence : 2 à 3 fois par semaine selon les besoins.",
        ],
      },
      {
        heading: "En mélange avec d'autres huiles",
        paragraphs: [
          "Pour potentialiser les effets, vous pouvez mélanger l'huile de chébé avec de l'huile de ricin pour renforcer et épaissir, de l'huile de coco pour une pénétration plus profonde, de l'huile d'argan pour la brillance et la nutrition, ou quelques gouttes d'huile essentielle de romarin pour stimuler la microcirculation du cuir chevelu.",
          "Recette maison : mélangez 2 cuillères à soupe d'huile de chébé, 1 cuillère à soupe d'huile de ricin et 5 gouttes d'huile essentielle de romarin. Appliquez en masque 1 à 2 fois par semaine.",
        ],
      },
      {
        heading: "Pour qui l'huile de chébé est-elle indiquée ?",
        bullets: [
          "Cheveux secs et déshydratés",
          "Cheveux cassants et abîmés",
          "Cheveux crépus, afro et texturés",
          "Cheveux longs sujets à la casse",
          "Cuir chevelu sec ou qui démange",
          "Pointes fourchues et abîmées",
        ],
        note:
          "Précautions : évitez l'huile de chébé si vous avez un cuir chevelu très gras. Faites un test allergique avant la première utilisation en appliquant une goutte dans le pli du coude et en attendant 24 heures. N'utilisez pas l'huile sur cheveux mouillés, car elle pénètre moins bien.",
      },
      {
        heading: "Chébé et autres huiles capillaires",
        bullets: [
          "Chébé — Rétention de longueur et renforcement. Texture épaisse et riche, idéale pour les cheveux secs, crépus et longs.",
          "Ricin — Épaississement et fortification. Texture très épaisse et collante, adaptée au cuir chevelu, aux cils et aux sourcils.",
          "Coco — Nutrition profonde et pénétration. Texture fluide et légère, adaptée à tous les types de cheveux.",
          "Argan — Brillance, souplesse et action anti-frisottis. Texture fluide et soyeuse, idéale pour les cheveux ternes.",
          "Jojoba — Régulation du sébum et hydratation. Texture très légère, adaptée au cuir chevelu gras et aux cheveux fins.",
        ],
      },
      {
        heading: "Le vrai chébé : comment le reconnaître ?",
        paragraphs: [
          "Le chébé authentique provient du Tchad, plus précisément de la région du Guera. Certains produits vendus comme chébé ne contiennent que de la poudre de girofle ou des colorants artificiels. Privilégiez les fournisseurs éthiques qui travaillent directement avec les coopératives tchadiennes.",
        ],
        bullets: [
          "Couleur rougeâtre ou brune, et non noire ou beige clair",
          "Odeur caractéristique de girofle et de résine",
          "Texture légèrement granuleuse, comme une poudre broyée artisanalement",
          "Mention « 100 % naturel » et « originaire du Tchad »",
          "Liste complète des ingrédients : Croton zambesicus, Mahllaba Soubiane, girofle et résine de samour",
        ],
      },
      {
        heading: "Témoignages et résultats attendus",
        bullets: [
          "Après 2 semaines : cheveux plus doux, plus brillants et moins de casse au brossage",
          "Après 1 mois : réduction visible de la chute et pointes moins abîmées",
          "Après 2 à 3 mois : cheveux visiblement plus longs grâce à la rétention de longueur, plus épais et plus résistants",
        ],
        note:
          "Le chébé ne fait pas pousser les cheveux plus vite : la pousse moyenne reste de 1 à 1,5 cm par mois. Il permet surtout de conserver la longueur acquise en limitant la casse.",
      },
      {
        heading: "Recette maison d'huile de chébé",
        paragraphs: [
          "Si vous trouvez de la poudre de chébé authentique, vous pouvez préparer votre propre huile avec 2 cuillères à soupe de poudre de chébé, 100 ml d'huile végétale de ricin, d'olive ou de sésame, et 1 cuillère à café de clous de girofle entiers, en option.",
        ],
        steps: [
          "Dans un bocal en verre stérilisé, versez la poudre de chébé.",
          "Ajoutez l'huile végétale de votre choix.",
          "Fermez hermétiquement et secouez vigoureusement.",
          "Laissez macérer 2 à 4 semaines dans un endroit frais, à l'abri de la lumière, en secouant le bocal tous les 2 ou 3 jours.",
          "Filtrez avec un tissu fin ou un filtre à café.",
          "Transvasez dans un flacon propre et conservez au réfrigérateur pendant 6 mois maximum.",
        ],
        note: "Utilisation : appliquez en masque capillaire 1 à 2 fois par semaine.",
      },
      {
        heading: "Les erreurs à éviter",
        bullets: [
          "En mettre trop : une petite quantité suffit, soit 1 à 2 cuillères à soupe pour un masque complet",
          "Négliger le double shampoing : l'huile de ricin contenue dans le chébé est très tenace",
          "Appliquer sur cheveux mouillés : l'huile pénètre moins bien",
          "Attendre des résultats miracles en une semaine : la rétention de longueur demande au moins 4 à 8 semaines",
          "Oublier de protéger ses vêtements : l'huile de chébé peut tacher, utilisez une vieille serviette",
        ],
      },
      {
        heading: "Notre verdict",
        paragraphs: [
          "L'huile de chébé est un soin capillaire ancestral qui tient ses promesses : des cheveux plus forts, plus longs grâce à la réduction de la casse, et plus brillants. Son efficacité repose sur une formulation traditionnelle éprouvée depuis des siècles par les femmes du Tchad.",
          "Le saviez-vous ? Les femmes Basara Arab du Tchad, qui utilisent le chébé depuis des générations, ont des chevelures pouvant atteindre plus d'un mètre de longueur grâce à cette routine traditionnelle.",
        ],
        bullets: [
          "Ingrédients 100 % naturels et traditionnels",
          "Efficace sur les cheveux secs, crépus et abîmés",
          "Réduit significativement la casse",
          "Apporte brillance et douceur",
          "Favorise la rétention de longueur",
          "Texture épaisse pouvant alourdir les cheveux fins",
          "Double shampoing nécessaire pour bien rincer",
          "Résultats visibles après plusieurs semaines d'utilisation régulière",
        ],
        note:
          "Conseil pro : associez l'huile de chébé à une alimentation équilibrée, une bonne hydratation et des soins doux. La patience et la régularité sont les clés du succès.",
      },
    ],
  },
  {
    slug: "savon-noir",
    title: "Savon noir",
    subtitle: "Le trésor multi-usage du hammam pour peau et cheveux",
    excerpt:
      "Découvrez le savon noir cosmétique, ses bienfaits purifiants et les gestes traditionnels du hammam pour la peau et les cheveux.",
    image: "/products/07-savon-noir.png",
    date: "4 mai 2026",
    sections: [
      {
        heading: "Qu'est-ce que le savon noir ?",
        paragraphs: [
          "Le savon noir est un produit cosmétique ancestral originaire du Maroc et de l'Afrique de l'Ouest. Utilisé depuis des siècles dans les rituels du hammam, ce savon naturel à la texture pâteuse et à la couleur sombre est devenu un incontournable de la beauté naturelle pour ses multiples bienfaits sur la peau et les cheveux.",
          "Le savon noir traditionnel est fabriqué à partir d'ingrédients 100 % naturels, selon des méthodes artisanales transmises de génération en génération.",
        ],
        bullets: [
          "Olives noires macérées : base nettoyante naturelle qui élimine les impuretés en douceur",
          "Huile d'olive biologique : agent hydratant et adoucissant qui nourrit sans agresser le film cutané",
          "Potasse végétale : agent saponifiant naturel qui donne la texture pâteuse caractéristique",
          "Eau : support de la pâte pour faciliter l'application sur peau humide",
          "Huiles essentielles, selon les versions : parfum naturel aux notes apaisantes comme l'eucalyptus ou la lavande",
        ],
        note:
          "Il existe deux formes principales : le savon noir mou, traditionnel et utilisé au hammam, et le savon noir liquide, plus pratique pour un usage quotidien. Attention : le savon noir de ménage, destiné aux sols et aux surfaces, ne doit jamais être utilisé sur la peau. Privilégiez toujours un savon noir cosmétique.",
      },
      {
        heading: "Les bienfaits du savon noir pour la peau",
        paragraphs: [
          "1. Nettoyage profond et purifiant — Le savon noir élimine efficacement les impuretés, l'excès de sébum et les résidus de pollution sans agresser la peau. Sa formule douce respecte le film hydrolipidique naturel.",
          "2. Exfoliation douce — Grâce à sa texture légèrement granuleuse et à sa richesse en glycérine naturelle, il aide à éliminer les cellules mortes et révèle une peau plus lisse et plus lumineuse.",
          "3. Hydratation intense — Sa teneur en vitamine E et en huile d'olive offre à l'épiderme une fine couche protectrice qui prévient la déshydratation et laisse la peau douce et souple.",
          "4. Préparation au gommage — Le savon noir ramollit la peau et ouvre les pores, ce qui permet une exfoliation plus efficace et plus douce avec un gant de Kessa.",
          "5. Apaisement des peaux sensibles — Naturellement riche en antioxydants, il calme les irritations, réduit les rougeurs et apaise les peaux réactives.",
          "6. Action sur les imperfections — Son pouvoir purifiant aide à réduire les boutons, les points noirs et les petites imperfections, notamment sur le dos et les épaules.",
          "7. Unification du teint — Utilisé régulièrement, il contribue à atténuer les taches pigmentaires et à unifier le teint.",
        ],
      },
      {
        heading: "Les bienfaits du savon noir pour les cheveux",
        paragraphs: [
          "1. Nettoyage profond du cuir chevelu — Le savon noir élimine l'excès de sébum, les résidus de produits coiffants et les impuretés accumulées.",
          "2. Stimulation de la microcirculation — Le massage du cuir chevelu active la circulation sanguine et favorise la vitalité des follicules pileux.",
          "3. Douceur et brillance — Les cheveux sont plus doux, plus brillants et plus faciles à démêler grâce à la glycérine naturelle.",
          "4. Réduction des pellicules — Son action purifiante et apaisante aide à lutter contre les pellicules sèches et grasses.",
        ],
      },
      {
        heading: "Comment utiliser le savon noir sur le visage ?",
        paragraphs: [
          "Fréquence : 2 à 3 fois par semaine pour commencer, puis quotidiennement si la peau le tolère bien.",
        ],
        steps: [
          "Démaquillez-vous d'abord avec un démaquillant doux.",
          "Humidifiez votre visage à l'eau tiède, jamais brûlante.",
          "Prélevez une petite noisette de savon noir, l'équivalent d'un pois chiche.",
          "Émulsionnez avec un peu d'eau dans vos paumes pour créer une mousse légère.",
          "Appliquez la mousse sur le visage en mouvements circulaires doux, en évitant le contour des yeux.",
          "Insistez sur les zones à excès de sébum : front, nez et menton.",
          "Massez pendant 30 secondes maximum au début.",
          "Rincez abondamment à l'eau claire, puis terminez par un rinçage frais.",
          "Appliquez immédiatement votre crème hydratante.",
        ],
        note:
          "Précautions : n'appliquez jamais le savon noir pur directement sur le visage. Émulsionnez-le toujours avec de l'eau, limitez le temps de contact et réduisez la fréquence si la peau tiraille.",
      },
      {
        heading: "Sur le corps : douche ou hammam",
        paragraphs: [
          "Fréquence : quotidiennement ou 2 à 3 fois par semaine selon votre type de peau.",
          "Le rituel traditionnel du hammam commence par une humidification généreuse de la peau à l'eau tiède. Prélevez ensuite une noix de savon noir, environ 1 à 2 cuillères à soupe, puis appliquez-la sur la peau humide ou avec un gant de Kessa humidifié.",
        ],
        steps: [
          "Massez tout le corps par mouvements circulaires, en insistant sur les coudes, les genoux et les talons.",
          "Laissez poser 2 à 5 minutes pour optimiser l'action purifiante et exfoliante.",
          "Rincez abondamment à l'eau claire.",
          "Pour un gommage plus intense, utilisez ensuite un gant de Kessa ou une brosse exfoliante.",
          "Terminez toujours par une hydratation au beurre de karité, à l'huile d'argan ou avec un lait corporel.",
        ],
        note:
          "En gel douche quotidien, faites mousser une petite noisette entre vos mains humides, appliquez sur tout le corps, rincez abondamment et hydratez après la douche.",
      },
      {
        heading: "Sur les cheveux : shampoing purifiant",
        paragraphs: [
          "Fréquence : une fois par semaine ou tous les quinze jours, selon la sécheresse de vos cheveux.",
        ],
        steps: [
          "Appliquez le savon noir sur cheveux secs ou légèrement humidifiés.",
          "Prélevez une à deux cuillères à soupe selon la longueur et l'épaisseur des cheveux.",
          "Massez énergiquement le cuir chevelu du bout des doigts pendant 2 à 3 minutes.",
          "Étirez la mousse sur les longueurs sans frotter pour éviter d'emmêler les cheveux.",
          "Laissez agir 15 à 20 minutes sous une serviette chaude ou une charlotte.",
          "Rincez minutieusement à l'eau tiède jusqu'à ce que l'eau soit claire.",
          "Appliquez un après-shampoing ou un masque hydratant sur les longueurs.",
        ],
        note:
          "Astuce : pour les cheveux très secs, mélangez le savon noir avec un peu d'huile d'argan ou de jojoba avant l'application.",
      },
      {
        heading: "Recettes maison",
        paragraphs: [
          "Gommage visage : mélangez 1 cuillère à soupe de savon noir, 1 cuillère à café de sucre fin ou de poudre d'amande et 1 cuillère à café de miel. Appliquez sur visage humide, massez doucement puis rincez. À faire une fois par semaine.",
          "Masque purifiant corps : mélangez 2 cuillères à soupe de savon noir, 1 cuillère à soupe d'argile verte et quelques gouttes d'huile essentielle de tea tree, en option. Appliquez sur le corps, laissez poser 10 minutes puis rincez.",
          "Shampoing clarifiant : mélangez 1 cuillère à soupe de savon noir et 1 cuillère à soupe de vinaigre de cidre. Appliquez sur cheveux humides, massez puis rincez abondamment.",
        ],
      },
      {
        heading: "Pour qui le savon noir est-il indiqué ?",
        bullets: [
          "Peaux normales à grasses",
          "Peaux mixtes avec zones grasses",
          "Peaux à imperfections : boutons et points noirs",
          "Peaux ternes et teint brouillé",
          "Peaux sensibles, avec une utilisation modérée",
          "Cuir chevelu gras ou pelliculaire",
          "Corps avec zones rugueuses comme les coudes et les genoux",
        ],
        note:
          "Précautions : les peaux très sèches doivent l'utiliser avec parcimonie et toujours hydrater après. En cas de peau atopique, d'eczéma sévère, de plaies ouvertes ou de peau irritée, testez d'abord sur une petite zone ou évitez l'utilisation. Ne l'appliquez pas autour des yeux et faites toujours un test allergique dans le pli du coude pendant 24 heures.",
      },
      {
        heading: "Savon noir et autres nettoyants",
        bullets: [
          "Savon noir — Nettoyage, exfoliation et hydratation. Texture pâteuse ou mousseuse, idéale pour tous les types de peau et le rituel du hammam.",
          "Savon d'Alep — Nettoyage doux et apaisant. Texture solide, adapté aux peaux sensibles.",
          "Savon de Marseille — Nettoyage purifiant. Texture solide, adapté aux peaux normales à grasses.",
          "Gel douche classique — Nettoyage basique. Texture liquide et moussante, pratique au quotidien.",
          "Huile démaquillante — Nettoyage et démaquillage. Texture huileuse, idéale pour les peaux sèches.",
        ],
      },
      {
        heading: "Comment choisir un bon savon noir ?",
        paragraphs: [
          "Privilégiez un savon noir portant la mention « cosmétique » ou « pour le corps », et non un produit ménager. Choisissez de préférence une fabrication artisanale traditionnelle du Maroc ou de l'Afrique de l'Ouest.",
        ],
        bullets: [
          "Ingrédients 100 % naturels, biologiques de préférence",
          "Sans parabènes, sans sulfates agressifs et sans colorants artificiels",
          "Texture homogène et couleur brun foncé à noire",
          "Odeur naturelle d'olive et d'huiles essentielles, sans parfum chimique",
          "Olives noires, huile d'olive biologique et potasse végétale dans la composition",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
