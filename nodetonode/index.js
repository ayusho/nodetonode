const express = require('express');
var unirest = require("unirest");

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();

function callApi() {
    var req = unirest("GET", "http://172.16.19.43:8080/demo");

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    });
}
console.log('calling API-->');
callApi();


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);