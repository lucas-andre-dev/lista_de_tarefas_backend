const pool = require('../configs/database');
const tabela = 'tarefa_tb';

exports.buscarTodasTarefas = async () => {
    try {
        const resultado = await pool.query(`SELECT * FROM ${tabela}`);
        return resultado.rows;
    } catch (error) {
        console.error('Erro buscarTodasTarefas:', error);
        throw error; // repassa para o controller tratar
    }
};

exports.criarTarefa = async (custo, data_limite, nome_tarefa,ordem) => {
    try {
        const sql = `INSERT INTO ${tabela}(custo, data_limite, nome_tarefa, ordem) VALUES($1,$2,$3,$4)`;
        const resultado = await pool.query(sql, [custo, data_limite, nome_tarefa]);
        return resultado.rowCount;
    } catch (error) {
        console.error('Erro criarTarefa:', error);
        throw error;
    }
};

exports.deletarTarefa = async (id) => {
    try {
        const resultado = await pool.query(`DELETE FROM ${tabela} WHERE id=$1`, [id]);
        return resultado.rowCount;
    } catch (error) {
        console.error('Erro deletarTarefa:', error);
        throw error;
    }
};

exports.alterarTarefa = async (id, custo, data_limite, nome_tarefa) => {
    try {
        const resultado = await pool.query(
            `UPDATE ${tabela} 
             SET custo=$1, data_limite=$2, nome_tarefa=$3 
             WHERE id=$4`,
            [custo, data_limite, nome_tarefa, id]
        );
        return resultado.rowCount;
    } catch (error) {
        console.error('Erro alterarTarefa:', error);
        throw error;
    }
};
