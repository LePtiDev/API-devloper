/*
    @author Quentin Guerrier
 */



// ES6 module for the old navigator
require('babel-register');

// express module to the app
const express = require('express');
const app = express();

// Node module required
const bodyParser = require('body-parser'); // can access to the body of the request
const mysql = require('mysql'); // can use sql access to the server;
const morgan = require('morgan'); // can transform the a response to a json response

// config
const config = require('./config.json')

// my module



// Connection to the database
const db = mysql.createConnection({
    host     : config.Server.host,
    database : config.Server.database,
    user     : config.Server.user,
    password : config.Server.password,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

/*
---------------------------------------------------------------------------------------------------
------------------------------- Begin of the source code of the API -------------------------------
---------------------------------------------------------------------------------------------------
*/

db.connect(function(err) {
    if (err) {
        console.log("Oh shit, something wrong : " + err.message);
    } else {
        console.log("database is connected")
    }
});



app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(config.Server.port, () => console.log("started on " + config.Server.port))