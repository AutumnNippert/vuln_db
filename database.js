const express = require('express');
const app = express();
const port = 3000;

let database = [];

app.use(express.json());

// :3000/database
app.get('/get', (req, res) => {
    console.log("Incoming Get Request");
    res.json(database);
});

// :3000/database?name=John&pass=123
app.get('/post', (req, res) => { // we are gonna do this through get requests so it can be done via the browser
    console.log("Incoming Post Request");
    const data = req.query;
    if (data) {
        database.push(data);
        res.status(200).json({ message: `Received data: ${data}` });
    } else {
        res.status(400).json({ error: 'Data parameter missing in the query.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});