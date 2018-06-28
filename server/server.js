const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes')
const path = require('path');


const CLIENT_PATH = path.join(__dirname, '../client/index.html');

let app = express();
app.use(express.static(CLIENT_PATH));

app.use(cors()) // THIS IS A MIDDLEWARE// 
app.use(express.json()); // THIS IS THE SAME AS BODY PARSER// // PARSE THE JSON CONTENT//
app.use('/api', apiRouter); // ALLOWS US TO USE THE   MIDDLE API ROUTER//

app.listen(3000 ,()=> console.log('Port is listening'));