const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.send("Seja bem vindo ao meu app")
})

app.get("/index", function(req,res){
    res.send("Aprendendo node.js")
})

app.get("/ola/:nome/:sobrenome/:sobre", function(req,res){
    var pessoa = {
        nome: req.params.nome,
        sobrenome: req.params.sobrenome,
        sobre: req.params.sobre
    }
    res.send("Ola "+ pessoa.nome + " " + pessoa.sobrenome + " " + pessoa.sobre)
})


//deve sempre ser a ultima linha do codigo
app.listen(8081, function(){
    console.log("Servidor rodando na url localhost:8081")
})
