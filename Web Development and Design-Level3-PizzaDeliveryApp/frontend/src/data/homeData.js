import pizza1 from "../assets/images/pizzas/pizza1.png";
import pizza2 from "../assets/images/pizzas/pizza2.png";
import pizza3 from "../assets/images/pizzas/pizza3.png";
import sarah from "../assets/images/testimonials/sarah.png";
import mark from "../assets/images/testimonials/mark.png";
import arthur from "../assets/images/testimonials/Arthur.png";

export const categories = ["Signature", "Classic", "Vegan", "Spicy"];

export const featuredPizzas = [
  {
    id: 1,
    title: "Truffle Umami",
    description:
      "Black truffle oil, wild mushrooms, fontina, and fresh thyme on our signature 48-hour sourdough.",
    price: 24,
    rating: 4.9,
    image: pizza1,
  },
  {
    id: 2,
    title: "Spicy Diavola",
    description:
      "Calabrese salami, San Marzano tomato, house-made chili oil, and hot honey drizzle.",
    price: 21,
    rating: 4.8,
    image: pizza2,
  },
  {
    id: 3,
    title: "Garden Vegan",
    description:
      "Heirloom tomatoes, zucchini ribbons, cashew mozzarella, and fresh garden oregano.",
    price: 19,
    rating: 4.7,
    image: pizza3,
  },
];

export const stats = [
  { value: "20 min", label: "Average Delivery" },
  { value: "50k+", label: "Happy Customers" },
  { value: "4.9/5", label: "App Rating" },
];

export const journeySteps = [
  {
    step: "1",
    title: "Order",
    description: "Select from our curated menu of tech-perfected pizzas.",
  },
  {
    step: "2",
    title: "Prepare",
    description:
      "Our chefs and smart ovens coordinate for precision baking.",
  },
  {
    step: "3",
    title: "Delivery",
    description: "Our AI routing ensures your pizza arrives piping hot.",
  },
];

export const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Design Lead",
    image: sarah,
    review:
      "The consistency is what blows me away. Every single order is perfect. The Truffle Umami is basically a food group for me now.",
  },
  {
    name: "Mark Thompson",
    role: "Software Engineer",
    image: mark,
    review:
      "Best delivery app experience. I can track exactly where my pizza is, and it literally arrived in 18 minutes today. Incredible.",
  },
  {
    name: "Arthur Rossi",
    role: "Food Blogger",
    image: arthur,
    review:
      "As a purist, I was skeptical of the tech approach, but the dough is authentic sourdough perfection. They really did perfect it.",
  },
];
