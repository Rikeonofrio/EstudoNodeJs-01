const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'qd^*U1yRF', {
    host: "localhost",
    dialect: 'mysql'
})

const Postagem = sequelize.define('emprego', {
    area: {
        type: Sequelize.STRING   
    },
    funçao: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    area: "Dev jr Java",
    funçao:"desenvolver aplicaçoes Java"
})

const Usuario = sequelize.define('usuario',{
    nome:{
        type:Sequelize.STRING
    },
    sobreNome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
})

Usuario.create({
    nome: "RIKE",
    sobreNome: "Onofrio",
    email: "henriqueonofrio@gmail.com",
    idade: 12
})