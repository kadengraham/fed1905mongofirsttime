require('./config/config');
const path = require('path');

var { mongoose } = require('./db/mongoose');

const express = require('express');

const publicDirectoryPath = path.join(__dirname, './../public');

var { Tasks } = require('./models/tasks');


var app = express();

app.use(express.static(publicDirectoryPath));

const port = process.env.PORT;

app.get('/tasks', (req, res) => {

    Tasks.find().then((allMyTasks) => {
        res.send(allMyTasks)
    }, (e) =>{
        res.status(400).send(e);
    });
});

app.get('/', (req, res) => {
    res.sendFile(`${publicDirectoryPath}/index.html`);
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});