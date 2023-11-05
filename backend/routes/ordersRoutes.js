const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { getOrders, setOrder } = require("../controllers/ordersController");

router.route("/").get(protect, getOrders).post(protect, setOrder);

module.exports = router;
