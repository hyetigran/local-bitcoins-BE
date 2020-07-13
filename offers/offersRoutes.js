const offersController = require("./offersController");
const offersValidator = require("./offersHelper");
const checkLoggedIn = require("../middlewares/restrictedMiddleware");
const express = require("express");

const router = express.Router();

router.post(
  "/",
  offersValidator.validateOfferBody,
  offersController.createOffer
);

router.get("/:id([0-9]+)", checkLoggedIn, offersController.getMyOffers);
module.exports = router;
