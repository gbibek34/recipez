const mongoose = require("mongoose");
const User = require("./userModel");
const Ingredient = require("./ingredientModel");
const Category = require("./categoryModel");

const recipeSchema = mongoose.Schema(
  {
    rname: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    method: { type: String, required: true },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: Ingredient }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: Category },
    author: { type: mongoose.Schema.Types.ObjectId, ref: User },
    image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Ingredient;
