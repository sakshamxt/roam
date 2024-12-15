const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

//mongodb connection
mongoose.connect(
    process.env.CONNECTION_STRING
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database is connected');
});


app.get('/', (req, res) => {
    res.send("Hello");
    
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})