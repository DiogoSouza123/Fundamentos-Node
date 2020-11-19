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

//criacao de models para criar tabelas do banco

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

//metodo para criar tabela, cuidade para nao executar 2x pode duplicar
//Usuario.sync({force: true})

//metodo para fazer insert into **nodemon em execução duplica entradas
Postagem.create({
    titulo: "Bla",
    conteudo:"Bleaaaaaaaa"
})


