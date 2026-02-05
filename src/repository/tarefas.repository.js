const pool = require('../configs/database');
const tabela = 'tarefa_tb';
exports.buscarTodasTarefas = async ()=>{
    const resultado = await pool.query(`SELECT * FROM ${tabela}`);
    return resultado.rows;
};
exports.criarTarefa = async(custo,data_limite,nome_tarefa)=>{
    const sql = `INSERT INTO tarefa_tb(custo,data_limite,nome_tarefa)VALUES($1,$2,$3)`;
    const resultado = await pool.query(sql,[custo,data_limite,nome_tarefa]);
    return resultado.rowCount;

};
exports.deletarTarefa = async(id)=>{
    const resultado = await pool.query(`DELETE FROM ${tabela} WHERE id = $1`,[id]);
    return resultado.rowCount;
};
exports.alterarTarefa = async(id,custo,data_limite,nome_tarefa)=>{
const resultado = await pool.query(
    `UPDATE ${tabela} 
    SET custo = $1,
    data_limite = $2,
    nome_tarefa = $3
    WHERE id = $4`,[custo,data_limite,nome_tarefa,id]);
    return resultado.rowCount;
};