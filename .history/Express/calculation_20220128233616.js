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

    console.log(first);

    res,

});




app.listen(8080, () => {console.log('Server is running.......')});