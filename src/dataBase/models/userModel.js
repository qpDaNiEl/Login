
import { Sequelize } from "sequelize";
import { sequelize } from "../dataBase";


export const Users = sequelize.define('Users', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            },
        }
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        unique: { msg: "Email ja cadastrado" },
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            },
        }
    },
    hash:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo nao pode ser vazio"
            },
            len: {
                args: [4 ,20],
                msg: "Senha curta"
            }
        }
    }
});