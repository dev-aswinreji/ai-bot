
import express from "express";
import {chatbot, chatbotPost}  from "../controller/chat.js";

const route = express.Router()


route.get('/chat',chatbot)

route.post('/chat',chatbotPost)

export default route