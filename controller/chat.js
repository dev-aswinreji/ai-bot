import { chatbotFunc, trainManager } from "../train-bot/train-bot.js";

export const chatbot = async (req, res) => {
  res.render("ai-bot");
};

export const chatbotPost = async (req, res) => {
  const body = req.body.chat;

  await trainManager();
  const response = await chatbotFunc(body);

  res.json({response:response})
};
