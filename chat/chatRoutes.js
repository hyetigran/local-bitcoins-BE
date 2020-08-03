const express = require("express");
const chatController = require("./chatController");
const checkLoggedIn = require("../middlewares/restrictedMiddleware");

const router = express.Router();

router.get("/:order_id([0-9]+)", checkLoggedIn, chatController.getAllMessages);
router.post("/:order_id([0-9]+)", checkLoggedIn, chatController.createChat);

module.exports = router;
