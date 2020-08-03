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

const updateBody = (body) => {
  const {
    buyBCH,
    city,
    country,
    paymentMethod,
    currencyType,
    currencySymbol,
    dynamicPricing,
    margin,
    marginAbove,
    marketExchange,
    limitMin,
    limitMax,
    headline,
    tradeTerms,
    openHours,
    closeHours,
    verifiedOnly,
    makerId,
    pause,
  } = body;
  return {
    buyBCH,
    city,
    country,
    payment_method: paymentMethod,
    currency_type: currencyType,
    currency_symbol: currencySymbol,
    dynamic_pricing: dynamicPricing,
    margin,
    margin_above: marginAbove,
    market_exchange: marketExchange,
    limit_min: limitMin,
    limit_max: limitMax,
    headline,
    trade_terms: tradeTerms,
    open_hours: openHours,
    close_hours: closeHours,
    verified_only: verifiedOnly,
    maker_id: makerId,
    pause,
  };
};

module.exports = {
  validateOfferBody,
  updateBody,
};
