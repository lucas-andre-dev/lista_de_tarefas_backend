const express = require('express');
const { listarTodasTarefas, criarTarefa, deleteTarefa,alterarTarefa } = require('../controllers/tarefa.controller');
const routes = express.Router();
routes.get("/",listarTodasTarefas);
routes.post('/',criarTarefa);
routes.put("/",alterarTarefa);
routes.delete("/:id",deleteTarefa);

module.exports = routes;