const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/cats', (req, res) => {
    res.send("Meow");
});

app.get('/dogs', (req, res) => {
    res.send("Woof");
});

app.get('/cats(_and_)?dogs', (req, res) => {
    res.send("Living together");
});

app.get('/greet/:name', (req, res) => {
    let firstName = req.params.name;
    res.send(`Hello, ${firstName}!`);
});

app.get('/year', (req, res) => {
    let born = req.param('age');
    let d = new Date();
    let currentYear = d.getFullYear();
    let yearBorn = currentYear - Number(born);
    res.send(`You were born in ${yearBorn}.`);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});