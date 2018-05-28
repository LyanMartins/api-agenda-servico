//const conn = require('../config/connection');
const db = require('../config/db.js');
const mysql = require('mysql');
const url = require('url');
const con = mysql.createConnection(db.config);
console.log(db.config);

con.connect;
exports.getServico = (req,res)=>{
    con.query('select * from servico', function(error,result,fields){
        if (error) throw error;
        var obj = JSON.stringify(result);
        console.log(obj);
        console.log(result);
        res.send(obj);
    })
}
exports.insereServico = (req,res) =>{
    var nomeServico = req.body.nomeServico;
    var descricao = req.body.descricao;
    if(!nomeServico){
        var saida = {mensagem:"Nome Vazio!"};
        res.send(JSON.parse(saida));
    }
    if((!nomeServico) && (!descricao)) {
        var saida = {mensagem:"Parametros Vazios"};
        res.send("Parametros Vazios!");
    }
    var sql = "INSERT INTO servico(nomeServico, descricao) VALUES ('"+nomeServico+"','"+descricao+"')"
    console.log(sql);
    con.query(sql, function(error,result,fields){
        if (error){
            console.log(error);
            var saida = {mensagem:"Erro ao inserir"};
            res.send(saida);
        }else{
            var saida = {mensagem:"Sucesso ao inserir"};
            res.send(saida);
        }
    })
}
exports.deletaServico = (req,res) =>{
    console.log(req.url)
    var result = url.parse(req.url,true);
    var param = result.query
    console.log(param.id);
    var sql = "DELETE FROM servico WHERE id = "+param.id+""
    con.query(sql,function(error,result,fields){
        if (error){
            var saida = {mensagem:"Erro ao deletar"};
            res.send(JSON.stringify(saida));
        }else{
            var saida = {mensagem:"Deletado com sucesso"};
            res.send(JSON.stringify(saida));
        }
    })
}
exports.atualizarServico = (req,res) =>{
    try{
        var id = req.body.idServico;
        var nomeServico = req.body.nomeServico;
        var descricao = req.body.descricao;
        console.log(id);
        if (!id){
            console.log("entrou aqui");
            var obj = {mensagem:"Id do servico invalido"}
            res.send(obj);
        }else{  
            var sql = "SELECT COUNT(*) conta from servico s WHERE s.id = "+id
            console.log(sql);
            con.query(sql,function(error,result,fields){
                if (error){
                    var obj = {mensagem:"Erro ao consultar servico"}
                    res.send(obj);
                }
                console.log(result);
                var resultado= JSON.stringify(result);
                var resu = resultado.toString();
                var r = JSON.parse(resu);
                console.log(r.conta);
                res.send(resu);
            })
        }
        var nomeServico = req.body.nomeServico;
        var descricao = req.body.descricao;
        console.log(nomeServico+" "+descricao);
    }catch (erro) {
        console.log("xxx");
        var obj = {mensagem:"Erro ao executar"}
        res.send(obj);
    } 
}
// var sql = "UPDATE servico SET nomeServico=[value-2],descrica`=[value-3] WHERE id = "+param.id+""
con.end;
