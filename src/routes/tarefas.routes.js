const express = require('express');
const { listarTodasTarefas } = require('../controllers/tarefa.controller');
const routes = express.Router();
routes.get("/",listarTodasTarefas);
routes.post('/'  ,(req,res)=>{res.send('POST')});
routes.put("/"   ,(req,res)=>{res.send('PUT')});
routes.delete("/",(req,res)=>{res.send('DELETE')});

module.exports = routes;