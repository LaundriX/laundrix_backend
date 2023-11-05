const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Orders = require("../models/ordersModel");
const User = require("../models/userModel");

// @desc get Orders
// @route GET /api/orders
// @access private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Orders.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc set Orders
// @route POST /api/orders
// @access public
const setOrder = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("No data to add!");
  }

  const { order, total, pickupDate, pickupTime, deliveryDate, deliveryTime } =
    req.body;

  const Order = await Orders.create({
    user: req.user._id,
    order,
    total,
    pickupDate,
    deliveryDate,
    pickupTime,
    deliveryTime,
  });

  res.json(Order).status(200);
});

module.exports = {
  getOrders,
  setOrder,
};
