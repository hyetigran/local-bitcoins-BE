const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const usersRoutes = require("./users/usersRoutes");
const offersRoutes = require("./offers/offersRoutes");
const ordersRouters = require("./orders/ordersRoutes");

server.use(helmet());
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/auth", usersRoutes);
server.use("/api/offers", offersRoutes);
server.use("/api/orders", ordersRouters);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Local Bitcoin Clone API" });
});

server.all("*", (req, res) => {
  res.status(404).send({
    error: "The resource you are looking for does not exist",
  });
});

const port = process.env.PORT || 8000;

if (process.env.NODE_ENV !== "test") {
  server.listen(port, console.log(`Listening on Port ${port}`));
}
module.exports = server;
