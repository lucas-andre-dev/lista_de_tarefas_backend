const express = require('express');
const routes = require('./routes/tarefas.routes.js')

const app = express();

app.use(express.json());
app.use('/tarefas',routes);

module.exports = app;