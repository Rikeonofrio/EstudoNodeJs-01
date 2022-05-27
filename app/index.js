const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get('/portifolio', function(req, res){
    res.send("Bem vindo ao meu portifolio!")
});

app.get('/ola/:cargo/:nome', function(req, res){

    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seucargo é de:" + req.params.cargo + "</h2>"); //má pratica 
   
});


app.listen(9091, function(){
    console.log(" Servidor Rodando na URL  http://localhost:9091");
});
//localhost:8081