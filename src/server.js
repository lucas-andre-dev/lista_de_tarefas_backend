require('dotenv').config();
const app = require('./app');

const porta = process.env.SERVER_PORT;

app.listen(porta,()=>{
    console.log('Servidor ativo na url: http://localhost:'+porta)
})