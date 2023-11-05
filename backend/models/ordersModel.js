const mongoose = require("mongoose");
const ordersSubSchema = mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
});

const ordersSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    order: [[[ordersSubSchema]]],
    total: Number,
    pickupDate: String,
    deliveryDate: String,
    pickupTime: String,
    deliveryTime: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Orders", ordersSchema);
