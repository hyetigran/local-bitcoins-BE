const express = require("express");
const ordersController = require("./ordersController");
const checkLoggedIn = require("../middlewares/restrictedMiddleware");

const router = express.Router();

router.post("/create-order", checkLoggedIn, ordersController.createOrder);
router.get("/:id([0-9]+)", checkLoggedIn, ordersController.getMyOrders);
router.get(
  "/:userId([0-9]+)/:orderId([0-9]+)",
  checkLoggedIn,
  ordersController.getCurrentOrder
);
router.put("/:orderId([0-9]+)", checkLoggedIn, ordersController.updateOrder);

module.exports = router;
