const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

require('dotenv').config();

mongoose.connect(
    "mongodb://localhost:27017/dungeon_crawler"
);

const app = express();
const port = process.env.PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/users", (req, res) => {
    UserModel.find({}, (err, result) => {
        res.json(result);
    });
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});