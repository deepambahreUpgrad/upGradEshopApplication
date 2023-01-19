const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cetegory: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    // productImage: {type: String, default: "None"},
    // public_id: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
