const tarefasRepositorie = require('../repositories/tarefas.repositorie');

exports.listarTodasTarefas = async(request,response)=>{
    const tarefas = await tarefasRepositorie.buscarTodasTarefas();
    response.json(tarefas);
}