const offersModel = require("./offersModel.js");

exports.createOffer = async (req, res) => {
  const {
    buyBCH,
    city,
    country,
    paymentMethod,
    currencyType,
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
  } = req.body;
  const newOffer = {
    buyBCH,
    city,
    country,
    payment_method: paymentMethod,
    currency_type: currencyType,
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
  };

  try {
    console.log("newOffer", newOffer);
    const newOfferInfo = await offersModel.saveOffer(newOffer);

    if (!newOfferInfo) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your request",
      });
    }
    return res.status(201).json(newOfferInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errorMessage: error,
    });
  }
};
