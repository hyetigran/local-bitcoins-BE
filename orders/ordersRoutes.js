const express = require("express");
const ordersController = require("./ordersController");
const checkLoggedIn = require("../middlewares/restrictedMiddleware");

const router = express.Router();

router.post("/create-order", checkLoggedIn, ordersController.createOrder);

module.exports = router;
