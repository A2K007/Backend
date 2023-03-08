const connectToMongo = require("./db");
const express = require("express");
const { json} = require("express");
const cors=require('cors');
const port = process.env.PORT || 80;
const app = express();
app.use(cors());
app.use(express.json());
connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/auth',require('./routes/auth'));
app.use('/notes',require('./routes/notes'));       // Routes Using express Router 
app.listen(port, () => {});
