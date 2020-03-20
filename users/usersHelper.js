require("dotenv").config();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const secret = process.env.JWT_SECRET || "default";

const generateToken = (username, id) => {
  const token = jwt.sign(
    {
      username,
      userId: id
    },
    secret,
    { expiresIn: "24h" }
  );
  return token;
};

const validateUser = [
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .trim(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Please add a password with at least 6 characters long.")
    .trim(),
  check("username")
    .isLength({ min: 2 })
    .withMessage("Please add an username with at least 2 characters long.")
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = {};
      errors.array().forEach(i => {
        errorMessage[i.param] = i.msg;
      });
      res.status(400).json({
        status: 400,
        errorMessage
      });
    } else next();
  }
];

module.exports = {
  generateToken,
  validateUser
};
