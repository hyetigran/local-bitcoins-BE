const express = require("express");
const usersControllers = require("./usersControllers");
const { validateUser } = require("./usersHelper");

const router = express.Router();

router.post("/register", validateUser, usersControllers.signup);

router.post("/login", usersControllers.login);

module.exports = router;
