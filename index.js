const servico   = require("./rotes/servico.js")
      inicio    = require("./rotes/inicio.js") ;
const express = require('express');
const bodyParser = require("body-parser");
const url = require("url");
const app = express();

app.use(bodyParser.json());
app.get('/',inicio.getIndex);
app.get('/servico', servico.getServico );
app.post('/insere-servico', servico.insereServico);
app.get('/deleta-servico', servico.deletaServico );
app.post('/atualizar-servico',servico.atualizarServico);

app.listen(3000, ()=>{
    console.log("API RODANDO...");
})