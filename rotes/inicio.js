exports.getIndex = (req,res) =>{
    console.log("entrou aqui");
    var obj = {mensagem:"API Agenda Servico"}
    res.send(JSON.stringify(obj));
    
}