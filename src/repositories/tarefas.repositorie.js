const pool = require('../configs/database');

exports.buscarTodasTarefas = async ()=>{
    const result = await pool.query('SELECT * FROM tarefa_tb');
    return result.rows;
}

exports.criarTarefa = async(id,custo,data,nome)=>{
    const sql = `INSER INTO tarefa_tb(id,custo,data_limite,nome_tarefa)value($1,$2,$3,$4)`;

    const result = await pool.query(sql,[id,custo,data,nome]);

    return result.rowCount;

}