//Método classico que como iniciar um servidor http da forma mais pura sem o uso de frameworks

//iniciando modulo do node 'http'
var http = require('http')

//criando servidor 
//funcao createServer possui a função de call back, que vc coloca o conteudo a ser exibido do servidor
//funcao listen fala a porta que o servidor irá roda

//'*** PARA PARAR SERVIDOR PELO CMD APERTE 'CTRL + C'***
//o node não atualiza seu servidor a cada alteração nativamente

http.createServer(function(req,res){
    res.end("ola amigo")
}).listen(8081);
console.log("Servidor rodando")