const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    console.log('hit')
   res.send('Running on server port 3004\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);