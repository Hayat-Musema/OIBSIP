import pizza1 from "../assets/images/pizzas/pizza1.png";
import pizza2 from "../assets/images/pizzas/pizza2.png";
import pizza3 from "../assets/images/pizzas/pizza3.png";
import pizza4 from "../assets/images/pizzas/pizza4.png";
import pizza5 from "../assets/images/pizzas/pizza5.png";
import pizza6 from "../assets/images/pizzas/pizza6.png";
import pizza7 from "../assets/images/pizzas/pizza7.png";
import pizza8 from "../assets/images/pizzas/pizza8.png";
import pizza9 from "../assets/images/pizzas/pizza9.png";
import pizza10 from "../assets/images/pizzas/pizza10.png";
import pizza11 from "../assets/images/pizzas/pizza11.png";
import pizza12 from "../assets/images/pizzas/pizza12.png";

export const pizzaCategories = ["All", "Signature", "Classic", "Vegan", "Spicy"];

export const pizzas = [
  {
    id: "truffle-umami",
    title: "Truffle Umami",
    category: "Signature",
    description:
      "Black truffle oil, wild mushrooms, fontina, and fresh thyme on our signature 48-hour sourdough.",
    ingredients: ["Black truffle oil", "Wild mushrooms", "Fontina", "Fresh thyme"],
    price: 24,
    rating: 4.9,
    reviews: 328,
    image: pizza1,
    tags: ["48h sourdough", "Chef pick"],
    spiceLevel: "Mild",
    prepTime: "18 min",
  },
  {
    id: "spicy-diavola",
    title: "Spicy Diavola",
    category: "Spicy",
    description:
      "Calabrese salami, San Marzano tomato, house-made chili oil, and hot honey drizzle.",
    ingredients: ["Calabrese salami", "San Marzano tomato", "Chili oil", "Hot honey"],
    price: 21,
    rating: 4.8,
    reviews: 284,
    image: pizza2,
    tags: ["Hot honey", "Bold"],
    spiceLevel: "Hot",
    prepTime: "17 min",
  },
  {
    id: "garden-vegan",
    title: "Garden Vegan",
    category: "Vegan",
    description:
      "Heirloom tomatoes, zucchini ribbons, cashew mozzarella, and fresh garden oregano.",
    ingredients: ["Heirloom tomato", "Zucchini", "Cashew mozzarella", "Oregano"],
    price: 19,
    rating: 4.7,
    reviews: 206,
    image: pizza3,
    tags: ["Plant-based", "Fresh"],
    spiceLevel: "Mild",
    prepTime: "16 min",
  },
  {
    id: "margherita-prime",
    title: "Margherita Prime",
    category: "Classic",
    description:
      "San Marzano tomato, fior di latte, basil, and extra virgin olive oil.",
    ingredients: ["San Marzano tomato", "Fior di latte", "Basil", "Olive oil"],
    price: 17,
    rating: 4.8,
    reviews: 412,
    image: pizza4,
    tags: ["Classic", "Fresh basil"],
    spiceLevel: "None",
    prepTime: "15 min",
  },
  {
    id: "pepperoni-orbit",
    title: "Pepperoni Orbit",
    category: "Classic",
    description:
      "Crisped pepperoni cups, mozzarella, roasted tomato sauce, and parmesan dust.",
    ingredients: ["Pepperoni", "Mozzarella", "Roasted tomato", "Parmesan"],
    price: 20,
    rating: 4.6,
    reviews: 238,
    image: pizza5,
    tags: ["Crispy edge", "Favorite"],
    spiceLevel: "Medium",
    prepTime: "16 min",
  },
  {
    id: "smoked-bbq-meteor",
    title: "Smoked BBQ Meteor",
    category: "Signature",
    description:
      "Smoked chicken, charred onion, BBQ glaze, mozzarella, and cilantro.",
    ingredients: ["Smoked chicken", "Charred onion", "BBQ glaze", "Cilantro"],
    price: 23,
    rating: 4.7,
    reviews: 191,
    image: pizza6,
    tags: ["Smoky", "Saucy"],
    spiceLevel: "Medium",
    prepTime: "19 min",
  },
  {
    id: "jalapeno-nova",
    title: "Jalapeno Nova",
    category: "Spicy",
    description:
      "Jalapeno, spicy marinara, red onion, mozzarella, and cooling lime crema.",
    ingredients: ["Jalapeno", "Spicy marinara", "Red onion", "Lime crema"],
    price: 18,
    rating: 4.5,
    reviews: 156,
    image: pizza7,
    tags: ["Vegetarian", "Bright heat"],
    spiceLevel: "Hot",
    prepTime: "15 min",
  },
  {
    id: "forest-funghi",
    title: "Forest Funghi",
    category: "Signature",
    description:
      "Roasted mushrooms, garlic cream, smoked mozzarella, and cracked pepper.",
    ingredients: ["Roasted mushrooms", "Garlic cream", "Smoked mozzarella", "Pepper"],
    price: 22,
    rating: 4.8,
    reviews: 221,
    image: pizza8,
    tags: ["Earthy", "Cream base"],
    spiceLevel: "Mild",
    prepTime: "18 min",
  },
  {
    id: "vegan-pesto-solar",
    title: "Vegan Pesto Solar",
    category: "Vegan",
    description:
      "Basil pesto, artichoke, roasted peppers, pine nuts, and almond ricotta.",
    ingredients: ["Basil pesto", "Artichoke", "Roasted peppers", "Almond ricotta"],
    price: 20,
    rating: 4.6,
    reviews: 174,
    image: pizza9,
    tags: ["Plant-based", "Herby"],
    spiceLevel: "None",
    prepTime: "17 min",
  },
  {
    id: "four-cheese-cosmo",
    title: "Four Cheese Cosmo",
    category: "Classic",
    description:
      "Mozzarella, fontina, gorgonzola, parmesan, and roasted garlic oil.",
    ingredients: ["Mozzarella", "Fontina", "Gorgonzola", "Parmesan"],
    price: 21,
    rating: 4.7,
    reviews: 267,
    image: pizza10,
    tags: ["Rich", "Garlic oil"],
    spiceLevel: "None",
    prepTime: "16 min",
  },
  {
    id: "inferno-comet",
    title: "Inferno Comet",
    category: "Spicy",
    description:
      "Nduja, chili flakes, fire-roasted peppers, mozzarella, and basil.",
    ingredients: ["Nduja", "Chili flakes", "Roasted peppers", "Basil"],
    price: 22,
    rating: 4.6,
    reviews: 149,
    image: pizza11,
    tags: ["Very spicy", "Nduja"],
    spiceLevel: "Very hot",
    prepTime: "18 min",
  },
  {
    id: "vegan-marinara",
    title: "Vegan Marinara",
    category: "Vegan",
    description:
      "Slow tomato sauce, garlic, oregano, basil, olive oil, and crisp sourdough.",
    ingredients: ["Tomato sauce", "Garlic", "Oregano", "Basil"],
    price: 16,
    rating: 4.5,
    reviews: 132,
    image: pizza12,
    tags: ["No cheese", "Minimal"],
    spiceLevel: "Mild",
    prepTime: "14 min",
  },
];
