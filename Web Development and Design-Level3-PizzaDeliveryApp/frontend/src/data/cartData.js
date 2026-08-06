import { pizzas } from "./pizzaData";

export const cartItems = [
  {
    pizza: pizzas.find((pizza) => pizza.id === "truffle-umami"),
    quantity: 1,
    size: "Large",
  },
  {
    pizza: pizzas.find((pizza) => pizza.id === "spicy-diavola"),
    quantity: 2,
    size: "Medium",
  },
  {
    pizza: pizzas.find((pizza) => pizza.id === "garden-vegan"),
    quantity: 1,
    size: "Large",
  },
].filter((item) => item.pizza);
