// A basic express server for hosting index.html

// Path: index.html

const express = require('express');
const app = express();
const port = 8880;

const http = require('http');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});