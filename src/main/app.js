import express from "express";
import "dotenv/config";
import { loginControler } from "./loginControler";
import { userControler } from "./userControler";
import { registerControler } from "./registerControler";
import { sequelize } from "../dataBase/dataBase";

sequelize.sync()

const server = express();

const PORT = process.env.PORT;

server.use(express.json());

server.get ('/user', userControler);

server.get ('/login', loginControler);

server.post ('/register', registerControler);



server.listen(PORT, () => {console.log(`Server runing at http://localhost:${PORT}`)})