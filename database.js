const express = require('express');
const app = express();
const port = 3000;

let database = [];

app.use(express.json());

// :3000/database
app.get('/database/get', (req, res) => {
    console.log("Incoming Get Request");
    res.json(database);
});

// :3000/database?name=John&pass=123
app.get('/database/add', (req, res) => { // we are gonna do this through get requests so it can be done via the browser
    console.log("Incoming Post Request");
    const name = req.query.user;
    const pass = req.query.pass;
    const user = {
        name: name,
        pass: pass
    };
    database.push(user);
    res.json(database);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});