const express = require('express');

// Constants
const PORT = 3004;
const HOST = '10.224.22.206';

// App
const app = express();
app.get('/demo', (req, res) => {
    console.log('hit')
   res.send('Running on server port 3004\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);