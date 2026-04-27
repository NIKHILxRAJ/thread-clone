const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");


const router = require("./routes"); 

const app = express();
connectDB();


app.use(express.json());

app.use("/api", router); 

const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is listening on Port :${port}`);
});