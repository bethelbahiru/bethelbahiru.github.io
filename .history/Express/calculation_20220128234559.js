const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/calculation', function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let first = req.query.first;
    let second = req.query.second;
    let operation = req.query.operation;
    let result = 0;
    
    result = (operation === "add")
    console.log();
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Calculator</title>
    </head>
    <body>
        <h1> ${}</h1>
    </body>
    </html>`);

});




app.listen(8080, () => {console.log('Server is running.......')});