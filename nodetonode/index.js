const express = require('express');
var unirest = require("unirest");

// Constants
const PORT = 3001;
const HOST = '10.224.22.206';

// App
const app = express();

function callApi() {
    var req = unirest("GET", "http://10.224.22.206:3004/demo");

    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    });
}
console.log('hello')
callApi();


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);