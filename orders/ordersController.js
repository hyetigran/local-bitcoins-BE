const ordersModel = require("./ordersModel.js");

const updateBody = (body) => {
  const {} = body;

  return {};
};

exports.createOrder = async (req, res) => {
  const newOrder = updateBody(req.body);
  try {
    const newOrderInfo = await ordersModel.saveOrder(req.body.order);
    const newMessage = await chatModel.saveFirstMessage(
      req.body.initial_message
    );
    if (!newOrderInfo) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your trade request",
      });
    }
    return res.status(201).json(newOrderInfo);
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
};

exports.getMyOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const allMyOrders = await ordersModel.findMyOrders(userId);
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
