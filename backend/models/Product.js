const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salt: { type: String, required: true },
  category: { type: String },
  usage: { type: String },
  duration: { type: String },
  dosage: { type: String },
  sideEffects: { type: String },
  manufacturer: { type: String },
  price: { type: Number },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);