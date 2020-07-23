const ordersModel = require("./ordersModel.js");

const updateBody = (body) => {
  const {} = body;

  return {};
};

exports.createOrder = async (req, res) => {
  const newOrder = updateBody(req.body);
  try {
    const newOrderInfo = await ordersModel.saveOrder(newOrder);
    if (!newOrderInfo) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your trade request",
      });
    }
    return res.status(201).json(newOrderInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errorMessage: error,
    });
  }
};
