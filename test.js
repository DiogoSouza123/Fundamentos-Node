const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', 'admin', {
    host:"localhost",
    dialect: 'mysql'
})

//funcao para falar se conectou ou não ao banco de dados

/*sequelize.authenticate().then(function (){
    console.log("Conectado com sucesso")
}).catch(function (erro){
    console.log("Deu ruim "+erro)
})*/