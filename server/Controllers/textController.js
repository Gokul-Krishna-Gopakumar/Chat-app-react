const textModel = require("../Models/textModel");

//API for creating message
const createText = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = new textModel({
    chatId,
    senderId,
    text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//API for getting all the messages of a chat
const getText = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await textModel.find({ chatId });
    res.status(200).json(messages);
  } catch {
    console.log(error);
    res.status(500).json(error);
  }
};

//API for deleting texts

const deleteText = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await textModel.findById(id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    if (message.createdAt < twoMinutesAgo) {
      return res
        .status(403)
        .json({ message: "Cannot delete message older than 2 minutes" });
    }

    await textModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting message", error });
  }
};

module.exports = { createText, getText, deleteText };
