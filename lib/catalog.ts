export type ProductCategory =
  | "Beurres"
  | "Huiles"
  | "Soins capillaires"
  | "Savons";

export type Product = {
  id: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "beurre-karite",
    name: "Pure beurre de karité",
    shortName: "Beurre de karité",
    category: "Beurres",
    tagline: "Nourriture pure pour une peau lumineuse",
    description:
      "Un beurre de karité brut, non raffiné, récolté et travaillé avec soin. Sa texture riche enveloppe la peau d'une hydratation profonde et d'un éclat naturel.",
    ingredients: ["Beurre de karité 100 % pur", "Non raffiné", "Sans additifs"],
    benefits: [
      "Hydratation intense",
      "Apaise les peaux sèches",
      "Élasticité et souplesse",
    ],
    image: "/products/001-beurre-karite.jpeg",
    featured: true,
  },
  {
    id: "beurre-cacao",
    name: "Pure beurre de cacao",
    shortName: "Beurre de cacao",
    category: "Beurres",
    tagline: "La richesse du cacao pour votre peau",
    description:
      "Extrait de la fève de cacao, ce beurre fond au contact de la peau pour offrir une protection douce, un parfum délicat et une nutrition exceptionnelle.",
    ingredients: ["Beurre de cacao pur", "Origine naturelle", "Sans parfum ajouté"],
    benefits: [
      "Barrière cutanée renforcée",
      "Nutrition profonde",
      "Toucher velouté",
    ],
    image: "/products/002-beurre-cacao.png",
  },
  {
    id: "chantilly-karite",
    name: "Chantilly de beurre de karité",
    shortName: "Chantilly de karité",
    category: "Beurres",
    tagline: "Une caresse aérienne, un soin d'exception",
    description:
      "Le beurre de karité fouetté jusqu'à obtenir une mousse onctueuse. Légère à l'application, riche en bienfaits, elle fond instantanément sur la peau.",
    ingredients: [
      "Beurre de karité fouetté",
      "Huiles végétales",
      "Texture soufflée",
    ],
    benefits: [
      "Absorption rapide",
      "Hydratation longue durée",
      "Sensation de confort",
    ],
    image: "/products/003-chantilly-karite.png",
    featured: true,
  },
  {
    id: "huile-chebe",
    name: "Huile de chébé",
    shortName: "Huile de chébé",
    category: "Huiles",
    tagline: "Le secret ancestral des cheveux longs",
    description:
      "Inspirée de la tradition tchadienne, notre huile de chébé fortifie la fibre, stimule la longueur et sublime la brillance naturelle de vos cheveux.",
    ingredients: [
      "Huile de chébé",
      "Huiles végétales nourrissantes",
      "Formule concentrée",
    ],
    benefits: [
      "Croissance accélérée",
      "Force et résistance",
      "Brillance naturelle",
    ],
      image: "/products/004-huile-chebe.png",
    featured: true,
  },
  {
    id: "creme-capillaire",
    name: "Crème capillaire au beurre de karité, aux huiles et aux herbes",
    shortName: "Crème capillaire",
    category: "Soins capillaires",
    tagline: "Beurre, huiles et herbes pour une chevelure divine",
    description:
      "Une crème riche alliant beurre de karité, huiles précieuses et herbes sélectionnées. Elle définit, nourrit et protège sans alourdir.",
    ingredients: [
      "Beurre de karité",
      "Huiles botaniques",
      "Herbes naturelles",
    ],
    benefits: [
      "Définition des boucles",
      "Nutrition sans résidu",
      "Protection de la fibre",
    ],
    image: "/products/005-creme-capillaire.png",
  },
  {
    id: "spray-capillaire",
    name: "Spray capillaire",
    shortName: "Spray capillaire",
    category: "Soins capillaires",
    tagline: "Fraîcheur et hydratation en un geste",
    description:
      "Un spray léger qui ravive l'hydratation, démêle en douceur et apporte une légèreté sublimante tout au long de la journée.",
    ingredients: [
      "Eau florale",
      "Huiles légères",
      "Actifs hydratants",
    ],
    benefits: [
      "Rafraîchit les boucles",
      "Démêlage facile",
      "Éclat quotidien",
    ],
    image: "/products/006-spray-capillair.png",
  },
  {
    id: "savon-noir",
    name: "Savon noir d'Afrique mélangé aux huiles et aux poudres naturelles",
    shortName: "Savon noir",
    category: "Savons",
    tagline: "Purification authentique, héritage africain",
    description:
      "Savon noir artisanal d'Afrique, reconnu pour purifier en douceur, clarifier le teint et respecter l'équilibre naturel de la peau.",
    ingredients: [
      "Savon noir traditionnel",
      "Cendre de plantes",
      "Huiles végétales",
    ],
    benefits: [
      "Nettoyage en profondeur",
      "Teint unifié",
      "Peau douce et nette",
    ],
    image: "/products/008-savon-noir-enrichi.png",
    featured: true,
  },
  {
    id: "savon-noir-huiles",
    name: "Savon noir mélangé",
    shortName: "Savon noir enrichie aux huiles et aux poudres",
    category: "Savons",
    tagline: "L'alliance du savon noir et de la nature",
    description:
      "Notre savon noir enrichi d'huiles précieuses et de poudres naturelles pour un soin de toilette encore plus nourrissant et sensoriel.",
    ingredients: [
      "Savon noir d'Afrique",
      "Huiles naturelles",
      "Poudres botaniques",
    ],
    benefits: [
      "Purifie et nourrit",
      "Texture sensorielle",
      "Peau confortée",
    ],
    image: "/products/007-savon-enrichi.png",
  },
];

export const categories: ProductCategory[] = [
  "Beurres",
  "Huiles",
  "Soins capillaires",
  "Savons",
];

export const blogPosts = [
  {
    slug: "rituel-karite",
    title: "Le rituel parfait au beurre de karité",
    excerpt:
      "Comment intégrer le beurre de karité pur dans votre routine pour une peau sublimée.",
    image: "/products/001-beurre-karite.jpeg",
    date: "12 juin 2026",
  },
  {
    slug: "secrets-chebe",
    title: "Les secrets millénaires de l'huile de chébé",
    excerpt:
      "Découvrez pourquoi cette huile africaine est l'alliée des cheveux longs et résilients.",
    image: "/products/004-huile-chebe.png",
    date: "28 mai 2026",
  },
  {
    slug: "savon-noir",
    title: "Savon noir : le geste fondateur de beauté",
    excerpt:
      "Origine, bienfaits et mode d'emploi d'un classique incontournable des soins naturels.",
    image: "/products/008-savon-noir-enrichi.png",
    date: "4 mai 2026",
  },
];

export const CONTACT = {
  whatsapp: "14388883343",
  whatsappDisplay: "+1 (438) 888-3343",
};

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(id: string, limit = 3) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((product) => product.id !== id)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}
