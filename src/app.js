const express = require('express');
const router = require('./routes/tarefas.routes.js')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/tarefas',router);
app.use(cors({
  origin: '*'
}));
module.exports = app;