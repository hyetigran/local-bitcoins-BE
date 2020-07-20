const express = require("express");
const ordersControllers = require("./ordersControllers");

const router = express.Router();

router.post("/create-order");

module.exports = router;
