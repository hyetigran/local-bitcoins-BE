const chatModel = require("./chatModel.js");

exports.getAllMessages = async (req, res) => {
  const { id } = req.params;
  try {
    const allMyOrders = await chatModel.findAllByOrderId(id);
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

exports.createChat = async (req, res) => {
  const { id } = req.params;
  try {
    const allMyOrders = await chatModel.saveMessage(id);
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
