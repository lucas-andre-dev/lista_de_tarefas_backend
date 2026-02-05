const express = require('express');
const routes = require('./routes/tarefas.routes.js')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/tarefas',routes);
app.use(cors({
  origin: '*'
}));
module.exports = app;