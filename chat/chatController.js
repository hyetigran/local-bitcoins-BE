const chatModel = require("./chatModel.js");
const io = require("../socket");

exports.getAllMessages = async (req, res) => {
  const { order_id } = req.params;
  try {
    const allMyOrders = await chatModel.findAllByOrderId(order_id);
    if (!allMyOrders) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your chat request",
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
  try {
    const savedMessage = await chatModel.saveMessage(req.body);
    if (!savedMessage) {
      return res.status(400).json({
        errorMessage: "Something went wrong with your trade request",
      });
    }
    io.getIO().to(req.body.order_id).emit("newMessage", {
      action: "create",
      message: savedMessage,
    });
    return res
      .status(201)
      .json({ message: "Successfully created new message" });
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
};
