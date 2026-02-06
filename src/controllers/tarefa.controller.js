const TarefaRepository = require('../repository/tarefas.repository');

exports.listarTodasTarefas = async (req, res) => {
    try {
        const tarefas = await TarefaRepository.buscarTodasTarefas();
        res.json(tarefas);
    } catch (error) {
        console.error('Erro listarTodasTarefas:', error);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};

exports.criarTarefa = async (req, res) => {
    try {
        const { custo, data_limite, nome_tarefa, ordem } = req.body;
        if (!custo || !data_limite || !nome_tarefa ||!ordem) {
            return res.status(400).json({ erro: 'Dados incompletos' });
        }
        await TarefaRepository.criarTarefa(custo, data_limite, nome_tarefa,ordem);
        res.status(200).json({ mensagem: 'Tarefa criada' });
    } catch (error) {
        console.error('Erro criarTarefa:', error);
        if (error.code === "23505") {
            return res.status(409).json({ erro: 'Já existe tarefa com esse nome' });
        }
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};

exports.deleteTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await TarefaRepository.deletarTarefa(id);
        if (resultado === 0) {
            return res.status(404).json({ erro: 'Tarefa não encontrada' });
        }
        res.status(200).json({ mensagem: 'Tarefa deletada' });
    } catch (error) {
        console.error('Erro deleteTarefa:', error);
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};

exports.alterarTarefa = async (req, res) => {
    try {
        const { id, custo, data_limite, nome_tarefa } = req.body;
        if (!id || !custo || !data_limite || !nome_tarefa) {
            return res.status(400).json({ erro: 'Dados incompletos' });
        }
        const resultado = await TarefaRepository.alterarTarefa(id, custo, data_limite, nome_tarefa);
        if (resultado === 0) {
            return res.status(404).json({ erro: 'Tarefa não encontrada' });
        }
        res.status(200).json({ mensagem: 'Tarefa atualizada com sucesso' });
    } catch (error) {
        console.error('Erro alterarTarefa:', error);
        if (error.code === "23505") {
            return res.status(409).json({ erro: 'Já existe tarefa com esse nome' });
        }
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};

exports.alterarOrdem = async (req, res) => {
    try {
        const { id,ordem} = req.body;
        if (!id || !ordem) {
            return res.status(400).json({ erro: 'Dados incompletos' });
        }
        const resultado = await TarefaRepository.alterarOrdem(id,ordem)
        if (resultado === 0) {
            return res.status(404).json({ erro: 'Tarefa não encontrada' });
        }
        res.status(200).json({ mensagem: 'Tarefa atualizada com sucesso' });
    } catch (error) {
        console.error('Erro alterarTarefa:', error);
        if (error.code === "23505") {
            return res.status(409).json({ erro: 'Já existe tarefa com esse nome' });
        }
        res.status(500).json({ erro: 'Erro interno do servidor' });
    }
};