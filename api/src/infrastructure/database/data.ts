import { DbMeal } from "./model";

export const meals: DbMeal[] = [
  // 🥩 Catégorie : Viandes
  {
    id: 1,
    name: "Entrecôte grillée",
    description: "Délicieuse entrecôte de bœuf grillée servie avec une sauce au poivre et des pommes de terre sautées.",
    price: 22.5,
    category: "Viandes",
    ingredients: ["Bœuf", "Poivre", "Crème", "Pommes de terre", "Beurre"],
  },
  {
    id: 2,
    name: "Poulet rôti au miel",
    description: "Poulet fermier rôti au miel et aux herbes, accompagné de légumes de saison.",
    price: 18.0,
    category: "Viandes",
    ingredients: ["Poulet", "Miel", "Thym", "Romarin", "Légumes"],
  },
  {
    id: 3,
    name: "Bœuf bourguignon",
    description: "Plat traditionnel français avec du bœuf mijoté dans une sauce au vin rouge, accompagné de carottes et pommes de terre.",
    price: 19.5,
    category: "Viandes",
    ingredients: ["Bœuf", "Vin rouge", "Carottes", "Oignons", "Pommes de terre"],
  },
  {
    id: 4,
    name: "Magret de canard",
    description: "Magret de canard rôti servi avec une sauce aux fruits rouges et une purée de patates douces.",
    price: 24.0,
    category: "Viandes",
    ingredients: ["Canard", "Fruits rouges", "Miel", "Patates douces", "Beurre"],
  },

  // 🐟 Catégorie : Poissons
  {
    id: 5,
    name: "Saumon grillé",
    description: "Filet de saumon grillé à la perfection, servi avec une sauce citronnée et du riz basmati.",
    price: 20.0,
    category: "Poissons",
    ingredients: ["Saumon", "Citron", "Beurre", "Riz basmati", "Aneth"],
  },
  {
    id: 6,
    name: "Cabillaud en croûte d'herbes",
    description: "Dos de cabillaud recouvert d’une chapelure aux herbes fraîches, accompagné d’une purée de patates douces.",
    price: 21.5,
    category: "Poissons",
    ingredients: ["Cabillaud", "Chapelure", "Persil", "Ail", "Patates douces"],
  },
  {
    id: 7,
    name: "Bouillabaisse",
    description: "Soupe de poisson traditionnelle marseillaise servie avec une rouille et des croûtons.",
    price: 23.0,
    category: "Poissons",
    ingredients: ["Poissons variés", "Tomates", "Ail", "Fenouil", "Safran"],
  },
  {
    id: 8,
    name: "Daurade au four",
    description: "Daurade entière rôtie au four avec des légumes du soleil et un filet d'huile d'olive.",
    price: 22.0,
    category: "Poissons",
    ingredients: ["Daurade", "Tomates", "Poivrons", "Ail", "Huile d'olive"],
  },

  // 🥦 Catégorie : Veggie
  {
    id: 9,
    name: "Risotto aux champignons",
    description: "Un risotto crémeux aux champignons des bois et au parmesan.",
    price: 17.0,
    category: "Veggie",
    ingredients: ["Riz arborio", "Champignons", "Parmesan", "Crème", "Ail"],
  },
  {
    id: 10,
    name: "Curry de légumes",
    description: "Un mélange coloré de légumes mijotés dans une sauce coco-curry parfumée.",
    price: 16.0,
    category: "Veggie",
    ingredients: ["Carottes", "Courgettes", "Lait de coco", "Curry", "Riz basmati"],
  },
  {
    id: 11,
    name: "Lasagnes aux légumes",
    description: "Lasagnes faites maison aux légumes grillés et à la béchamel légère.",
    price: 18.5,
    category: "Veggie",
    ingredients: ["Pâtes", "Tomates", "Aubergines", "Courgettes", "Béchamel"],
  },
  {
    id: 12,
    name: "Salade méditerranéenne",
    description: "Salade fraîche composée de pois chiches, tomates cerises, concombres, olives et feta.",
    price: 14.0,
    category: "Veggie",
    ingredients: ["Pois chiches", "Tomates cerises", "Concombre", "Olives", "Feta"],
  },
];