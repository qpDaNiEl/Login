const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'registros',
    port: 3306,
    username: 'root',
    password: '',
    logging: false
})

