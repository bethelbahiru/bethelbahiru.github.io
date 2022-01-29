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

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Calculator</title>
    </head>
    <body>
        <form action= "http://localhost:8080/calculation" style="border: 5px solid black; margin: auto; width: 700px; padding: 10px;">
            <label>First Number: </label> <input type="number" name = "first"/>
            <br>
            <br>
            <label>Second Number: </label> <input type="number" name = "second"/>
            <br>
            <br>
            <label>Operation: </label> <select name= "operation">
                <option value= "+">Addition</option>
                <option value= "-">Subtraction</option>
                <option value= "*">Multiplication</option>
                <option value= "/">Division</option>
            </select>
            <br>
            <br>
            <input type="submit" name= "add" />
        </form>
    </body>
    </html>`)

});




app.listen(8080, () => {console.log('Server is running.......')});