
import { Sequelize } from "sequelize";
import { sequelize } from "../config";


export const Users = sequelize.define('Users', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
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
    password:{
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