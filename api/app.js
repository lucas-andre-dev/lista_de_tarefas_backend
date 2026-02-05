const express = require('express');
const router = require('../src/routes/tarefas.routes.js')
const app = express();

app.use(express.json());
app.use('/tarefas',router);


app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})
module.exports = app;