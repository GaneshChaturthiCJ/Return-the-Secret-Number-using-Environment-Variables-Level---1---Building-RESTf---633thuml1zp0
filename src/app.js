const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();


// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   const num = process.env.NUMBER
    if(num){
        res.status(200).json({
            "number" : num
        })
    } else {
        res.status(404).json({ "err": "Not Found"})
    }
});

module.exports = app;
