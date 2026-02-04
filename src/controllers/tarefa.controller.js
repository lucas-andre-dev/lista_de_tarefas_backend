const TarefaRepository = require('../repository/tarefas.repository');

exports.listarTodasTarefas = async(req,res)=>{
    const tarefas = await TarefaRepository.buscarTodasTarefas();
    res.json(tarefas);
};

exports.criarTarefa = async(req,res)=>{
    try {
        const {custo,data_limite,nome_tarefa} = req.body;
        if(!custo|| !data_limite || !nome_tarefa){
            return res.status(400).json({erro:'Dados incompletos'})
        }
        await TarefaRepository.criarTarefa(custo,data_limite,nome_tarefa);

        res.status(200).json({mensagem:'Tarefa Criada'}); 
    } catch (error) {
        if(error.code==="23505"){
            return res.status(409).json({erro:'já existe tarefa com esse nome'})
        }
        res.status(500).json({})
    }
};

exports.deleteTarefa = async(req,res)=>{
    try {
        const {id} = req.params;
        const resultado = await TarefaRepository.deletarTarefa(id);
        if(resultado===0){
            return res.status(404).json({erro:'tarefa não encontrada 404'})
        };
        return res.status(200).json({mensagem:'Tarefa deletada'})
    } catch (error) {
        res.status(500).json({erro:"erro ao acessar a base de dados"});
    }
    
};

exports.alterarTarefa = async (req, res) => {
    try {
        const { id,custo, data_limite, nome_tarefa } = req.body;

        if (!id || !custo || !data_limite || !nome_tarefa) {
            return res.status(400).json({ erro: 'Dados incompletos' });
        }

        const resultado = await TarefaRepository.alterarTarefa(
            id,
            custo,
            data_limite,
            nome_tarefa
        );

        if (resultado === 0) {
            return res.status(404).json({ erro: 'Tarefa não encontrada' });
        }

        return res.status(200).json({ mensagem: 'Tarefa atualizada com sucesso' });

    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({ erro: 'Já existe tarefa com esse nome' });
        }

        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};

