const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//Starting application
const app = express();

//Enable JSON as request body
app.use(express.json());

app.use(cors());

//Starting database - "mongodb://ip:port/your_db_collection_name"
mongoose.connect("mongodb://localhost:27017/visitor_book", { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./models');

const Registry = mongoose.model("Registry");

app.use("/api", require("./routes"));

app.listen(3001);



