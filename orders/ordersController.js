const ordersModel = require("./ordersModel.js");
const chatModel = require("../chat/chatModel.js");

exports.createOrder = async (req, res) => {
  const { order, initial_message } = req.body;
  try {
    const savedOrder = await ordersModel.saveOrder(order);
    if (!savedOrder) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your trade request",
      });
    }

    const messageBody = {
      order_id: savedOrder.id,
      text: initial_message,
      author_id: savedOrder.taker_id,
    };

    const newMessage = await chatModel.saveMessage(messageBody);
    if (!newMessage) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your trade request",
      });
    }
    return res.status(201).json(savedOrder);
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
};

exports.getMyOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const allMyOrders = await ordersModel.findMyOrders(id);
    if (!allMyOrders) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your trade request",
      });
    }
    return res.status(200).json(allMyOrders);
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
};
