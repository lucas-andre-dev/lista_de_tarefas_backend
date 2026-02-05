const express = require('express');
const router = require('../src/routes/tarefas.routes.js')
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8080;
app.options('*',cors());
app.use(express.json());
app.use('/tarefas',router);

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})
module.exports = app;