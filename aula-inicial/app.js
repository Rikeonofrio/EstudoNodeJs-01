var http  = require('http');

http.createServer(function(req, res){

    res.end("Hellow World, Welcome to my website");

}).listen(8081);

console.log(" o Servidor rodando");