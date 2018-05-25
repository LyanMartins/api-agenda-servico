var mysql = require('mysql');
var con = mysql.createConnection({
    'host':'localhost',
    'user' :'root',
    'password':'',
    'database': 'db_agenda_servico'});
con.connect;
con.query('select * from servico', function(error,result,fields){
    if (error) throw error;
    var obj = JSON.stringify
    console.log(obj);
    console.log(result);
})