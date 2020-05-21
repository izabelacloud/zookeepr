const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require("express");
const {animals} = require("./data/animals.json")
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

//initiating the server
const app = express();

//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));



//add listen method so that the server listens
app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
})