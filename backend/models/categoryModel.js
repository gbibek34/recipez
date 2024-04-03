const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    cname: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
