const offersModel = require("./offersModel.js");

const io = require("../socket");
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

exports.getMyOffers = async (req, res) => {
  const maker_id = req.params;
  try {
    const myOffers = await offersModel.fetchMyOffers(maker_id);
    return res.status(200).json(myOffers);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
exports.getAllOffers = async (req, res) => {
  try {
    const allOffers = await offersModel.fetchAllOffers();
    return res.status(200).json(allOffers);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getOffer = async (req, res) => {
  const { id } = req.params;
  try {
    const myOffer = await offersModel.findById(id);
    return res.status(200).json(myOffer);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.createOffer = async (req, res) => {
  const newOffer = updateBody(req.body);

  try {
    const newOfferInfo = await offersModel.saveOffer(newOffer);

    if (!newOfferInfo) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your request",
      });
    }

    io.getIO().emit("offers", { action: "create", offer: newOfferInfo });

    return res.status(201).json(newOfferInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errorMessage: error,
    });
  }
};

exports.updateOffer = async (req, res) => {
  const { userId, offerId } = req.params;
  const updatedOffer = updateBody(req.body);
  try {
    const updateComplete = await offersModel.updateOffer(
      updatedOffer,
      offerId,
      userId
    );

    if (!updateComplete) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your request",
      });
    }
    return res.status(200).json(updateComplete);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.deleteOffer = async (req, res) => {
  const { userId, offerId } = req.params;

  try {
    const result = await offersModel.deleteOfferById(userId, offerId);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
