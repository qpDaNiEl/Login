const { Sequelize } = require('sequelize');

//Exemplo

export const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'NomeBdExemplo',
    port: 3306,
    username: 'NomeExemplo',
    password: '',
    logging: true
})

