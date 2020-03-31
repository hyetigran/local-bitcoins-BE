const offersController = require("./offersController");
const offersValidator = require("./offersHelper");
const express = require("express");

const router = express.Router();

router.post(
  "/",
  offersValidator.validateOfferBody,
  offersController.createOffer
);

module.exports = router;
