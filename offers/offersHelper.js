const { check, validationResult } = require("express-validator");

const validateOfferBody = [
  check("city")
    .matches(/^[a-z\-_\s']+$/i)
    .not()
    .isEmpty()
    .withMessage("City field cannot be empty")
    .trim(),

  check("country")
    .matches(/^[a-z\-_\s']+$/i)
    .not()
    .isEmpty()
    .withMessage("Country field cannot  be empty")
    .trim(),

  check("paymentMethod")
    .matches(/^[a-z\-_\s']+$/i)
    .not()
    .isEmpty()
    .withMessage("Payment method field cannot  be empty")
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = {};
      errors.array().forEach((error) => {
        errorMessage[error.param] = error.msg;
      });
      return res.status(400).json({
        status: 400,
        errorMessage,
      });
    }
    return next();
  },
];

module.exports = {
  validateOfferBody,
};
