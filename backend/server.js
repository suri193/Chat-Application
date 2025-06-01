const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");


const app = express()
dotenv.config();

app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  
}));
  
app.get("/", (req, res) => {
    res.send("API is runningcsuccs")
});

app.get("/api/chat", (req, res) => {
    res.send(chats)
});

app.get("/api/chat/:id", (req, res) => {
     //  console.log(req.params.id);
    const singlChat = chats.find((c) => c._id === req.params.id);
    res.send(singlChat);
});


const PORT = process.env.PORT || 7000;
app.listen(7000, console.log(`Server Started on PORT ${PORT}`));