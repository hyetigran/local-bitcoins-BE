const db = require("../data/dbConfig");

function findById(id) {
  return db("offers")
    .where("offers.id", "=", id)
    .join("users", "maker_id", "=", "users.id")
    .select("offers.*", "users.username");
}

async function saveOffer(newOffer) {
  const [savedOffer] = await db("offers").insert(newOffer, "*");

  return findById(savedOffer.id);
}

async function fetchMyOffers({ id }) {
  return db("offers").where("maker_id", id);
}

async function fetchAllOffers() {
  return db("offers")
    .join("users", "maker_id", "=", "users.id")
    .select("offers.*", "users.username")
    .orderBy("updated_at", "desc");
}

async function updateOffer(updateOffer, offerId, userId) {
  const [updatedOffer] = await db("offers")
    .where({ id: offerId, maker_id: userId })
    .update(updateOffer, "*");
  return findById(updatedOffer.id);
}

async function deleteOfferById(userId, offerId) {
  return db("offers").where({ id: offerId, maker_id: userId }).del();
}

module.exports = {
  saveOffer,
  findById,
  fetchMyOffers,
  fetchAllOffers,
  updateOffer,
  deleteOfferById,
};
