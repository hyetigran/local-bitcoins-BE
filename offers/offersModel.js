const db = require("../data/dbConfig");

function findById(id) {
  return db("offers").where({ id }).first();
}

async function saveOffer(newOffer) {
  const [savedOffer] = await db("offers").insert(newOffer, "*");

  return findById(savedOffer.id);
}

async function getMyOffers(maker_id) {
  return db("offers").where("maker_id", maker_id);
}

module.exports = {
  saveOffer,
  findById,
  getMyOffers,
};
