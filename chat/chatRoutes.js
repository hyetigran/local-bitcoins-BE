const express = require("express");
const chatController = require("./chatController");
const checkLoggedIn = require("../middlewares/restrictedMiddleware");

const router = express.Router();

router.get("/:id([0-9]+)", checkLoggedIn, chatController.getAllMessages);
router.post("/:id([0-9]+)", checkLoggedIn, chatController.createChat);

module.exports = router;
