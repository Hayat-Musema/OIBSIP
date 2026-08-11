import express from "express";
import {
  getPizzas,
  getPizzaById,
  createPizza,
} from "../controllers/PizzaController.js";

const router = express.Router();

router.get("/", getPizzas);
router.get("/:id", getPizzaById);
router.post("/", createPizza);

export default router;