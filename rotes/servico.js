//const conn = require('../config/connection');
const db = require('../config/db.js');
const mysql = require('mysql');
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

con.end;
