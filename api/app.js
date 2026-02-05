const express = require('express');
const router = require('../src/routes/tarefas.routes.js')
const app = express();
const cors = requre('cors');

const port = process.env.PORT || 8080;
const corsOptions = {
  origin: 'http://127.0.0.1:5500', // Libera apenas o seu front específico
  methods: 'GET,POST,PUT,DELETE',  // Métodos permitidos
  optionsSuccessStatus: 200        // Para navegadores legados
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/tarefas',router);


app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})
module.exports = app;