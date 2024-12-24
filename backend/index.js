const express = require('express');
const app = express();
const { connectToDatabase } = require('./Database/database');

connectToDatabase()

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}/`);
});