const db = require("../data/dbConfig");

function findById(id) {
  return db("offers").where({ id }).first();
}

async function saveOffer(newOffer) {
  const [savedOffer] = await db("offers").insert(newOffer, "*");

  return findById(savedOffer.id);
}

async function fetchMyOffers({ id }) {
  return db("offers").where("maker_id", id);
}

async function fetchMyOffers({ id }) {
  return db("offers").where("id", id);
}

async function updateOffer(updateOffer, offerId, userId) {
  console.log("inside the model", updateOffer);
  const [updatedOffer] = await db("offers")
    .where({ id: offerId, maker_id: userId })
    .update(updateOffer, "*");
  console.log("uO", updatedOffer);
  return findById(updatedOffer.id);
}

module.exports = {
  saveOffer,
  findById,
  fetchMyOffers,
  updateOffer,
};
