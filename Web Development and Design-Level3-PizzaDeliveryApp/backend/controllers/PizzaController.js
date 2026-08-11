import Pizza from "../models/Pizza.js";

// @desc    Get all pizzas
// @route   GET /api/pizzas
export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({ available: true });

    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc    Get a single pizza
// @route   GET /api/pizzas/:id
export const getPizzaById = async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);

    if (!pizza) {
      return res.status(404).json({
        message: "Pizza not found.",
      });
    }

    res.status(200).json(pizza);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// @desc    Create a pizza
// @route   POST /api/pizzas
export const createPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body);

    res.status(201).json(pizza);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};