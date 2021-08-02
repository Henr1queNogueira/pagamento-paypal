const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
   
app.use('/', require('./routes'));

app.listen(4000, () => 
    console.log("Rodando na porta: 4000"));