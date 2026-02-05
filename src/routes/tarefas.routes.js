const express = require('express');
const { listarTodasTarefas, criarTarefa, deleteTarefa, alterarTarefa } = require('../controllers/tarefa.controller');

const router = express.Router();

router.get("/", listarTodasTarefas);
router.post("/", criarTarefa);
router.put("/", alterarTarefa);
router.delete("/:id", deleteTarefa);

module.exports = router;
