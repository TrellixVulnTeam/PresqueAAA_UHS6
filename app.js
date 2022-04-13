const request = require('supertest');
const assert = require('assert');
const express = require('express');
const port = 3000;

const app = express();

app.get('/user', function (req, res) {
    res.status(200).json({ name: 'john' });
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//server juste avec ça
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//dossier test séparer
// .test
// const app = require("../src/app")

// Test "User"
request(app)
    .get('/user')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });

// Test "Hello World"
request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect('Content-Length', '12')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
    });