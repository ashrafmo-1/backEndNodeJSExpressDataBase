const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 22,
  },
  price: {
    type: Number,
    required: true,
    min: 10
  },
  quantity: {
    type: Number,
    required: true,
    min: 50
  },
  description: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 180,
  },
  category: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 80,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("products", productsSchema);