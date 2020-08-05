function mapOrderBody(body) {
  const {
    bchAmount,
    fiatAmount,
    isMakerBuying,
    makerId,
    offerId,
    priceBCH,
    takerId,
    cancelled,
    complete,
    id,
  } = body;
  return {
    maker_id: makerId,
    taker_id: takerId,
    offer_id: offerId,
    price_bch: priceBCH,
    bch_amount: bchAmount,
    fiat_amount: fiatAmount,
    is_maker_buying: isMakerBuying,
    cancelled,
    complete,
    id,
  };
}

module.exports = {
  mapOrderBody,
};
