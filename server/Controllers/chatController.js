const chatModel = require("../Models/chatModel");

// API end point to create chat
const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) return res.status(200).json(chat);

    const newChat = new chatModel({
      members: [firstId, secondId],
    });

    const response = await newChat.save();

    res.status(200).json(response);
  } catch {
    console.log(error);
    res.status(500).json(error);
  }
};

//API for get User Chats
const findUserChats = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await chatModel.find({
      members: { $in: [userId] },
    });

    res.status(200).json(chats);
  } catch {
    console.log(error);
    res.status(500).json(error);
  }
};

//API to finding a particular chat
const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    res.status(200).json(chat);
  } catch {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteChat = async (req, res) => {
  const chatId = req.params.id;

  try {
    const result = await chatModel.findByIdAndDelete(chatId);

    if (!result) {
      return res.status(404).json({ message: "Chat not found" });
    }

    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createChat, findChat, findUserChats, deleteChat };
