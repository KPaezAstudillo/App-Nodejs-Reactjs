'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3900;


//using body-parser to analyze body through URL
app.use(bodyParser.urlencoded({extended: false}));

//turning any request into json format
app.use(bodyParser.json());

//CORS to allow AJAX and HTTP requests from frontend
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(port, ()=>{
    console.log('Lanzando la aplicacion en el puerto ' + port);
})