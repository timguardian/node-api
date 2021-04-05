const express = require('express');
const app = express();

const PORT = 8000;
const HOST = '0.0.0.0';

app.get('/health', (req, res) => {
    console.log(`Accessing resource /health`);
    res.json({status: "OK"});
});

app.listen(PORT, HOST);
console.log(`App is listening on port ${PORT}`);
