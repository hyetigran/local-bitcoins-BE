const bcrypt = require("bcryptjs");
const faker = require("faker");

const createFakeUser = async () => {
  const hashedPassword = await bcrypt.hash("Pass1234", 12);
  return {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: hashedPassword,
    push_notification: false,
  };
};

exports.seed = function (knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 20;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  return knex("users").insert(fakeUsers);
};
