const express = require('express');
const { listarTodasTarefas, criarTarefa, deleteTarefa, alterarTarefa,alterarOrdem } = require('../controllers/tarefa.controller');

const router = express.Router();

router.get("/", listarTodasTarefas);
router.post("/", criarTarefa);
router.put("/", alterarTarefa);
router.delete("/:id", deleteTarefa);
router.patch("/",alterarOrdem)

module.exports = router;
