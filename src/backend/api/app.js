const cors = require('cors');
const express = require('express');
const { adRouter } = require('../routers/adRouter');

const app = express();
app.use(cors());

/*
  Material consultado sobre bodyParser.json vs bodyParser.urlencoded
  https://stackoverflow.com/questions/55558402/what-is-the-meaning-of-bodyparser-urlencoded-extended-true-and-bodypar
*/
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Server is online');
});

/* Todas as rotas com /ad/<alguma-coisa> entram aqui e vão para o roteador */
app.use('/ad', adRouter);

module.exports = app;