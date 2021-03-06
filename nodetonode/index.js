const express = require('express');
var unirest = require("unirest");

// Constants
const PORT = 3001;
const HOST = '0.0.0.0';

// App
const app = express();

function callApi() {
    var req = unirest("GET", "http://" + process.env.HOST_NAME);

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
        
    });
}
console.log('calling API-->' + process.env.HOST_NAME);
callApi();


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);