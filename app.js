import express from "express";
import route from "./route/ai-bot.js";
import bodyParser from 'body-parser'

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())
app.set("view engine", "ejs");


app.use("/", route);

const PORT = 3002;


app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
