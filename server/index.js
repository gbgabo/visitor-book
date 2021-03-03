const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//Starting application
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

//Enable JSON as request body
app.use(express.json());

app.use(cors());

//Starting database - "mongodb://ip:port/your_db_collection_name"
mongoose.connect("mongodb://localhost:27017/visitor_book", { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./models');

const Registry = mongoose.model("Registry");

app.use("/api", require("./routes"));

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen on the port defined by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));



