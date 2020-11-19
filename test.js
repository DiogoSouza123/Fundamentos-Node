const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', 'admin', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function (){
    console.log("Conectado com sucesso")
}).catch(function (erro){
    console.log("Deu ruim "+erro)
})