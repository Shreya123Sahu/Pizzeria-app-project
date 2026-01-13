const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  id: Number,
  iname: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
