const offersController = require("./offersController");
const express = require("express");

const router = express.Router();

router.post("/", offersController.createOffer);

module.exports = router;
