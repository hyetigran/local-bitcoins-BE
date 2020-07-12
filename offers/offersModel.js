const db = require("../data/dbConfig");

function findById(id) {
  return db("offers").where({ id }).first();
}

async function saveOffer(newOffer) {
  const [savedOffer] = await db("offers").insert(newOffer, "*");

  return findById(savedOffer.id);
}

module.exports = {
  saveOffer,
  findById,
};
