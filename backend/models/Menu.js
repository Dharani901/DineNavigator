const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true
    },

    itemName: {
      type: String,
      required: true
    },

    description: {
      type: String,
      default: ""
    },

    category: {
      type: String,
      default: ""
    },

    price: {
      type: Number,
      required: true
    },

    image: {
      type: String,
      default: ""
    },

    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Menu",
  menuSchema
);