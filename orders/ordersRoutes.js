const express = require("express");
const ordersController = require("./ordersController");
const checkLoggedIn = require("../middlewares/restrictedMiddleware");

const router = express.Router();

router.post("/create-order", checkLoggedIn, ordersController.createOrder);
router.get("/:id([0-9]+)", checkLoggedIn, ordersController.getMyOrders);

module.exports = router;
