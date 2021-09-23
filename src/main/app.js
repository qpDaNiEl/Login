import express from "express";
import "dotenv/config";
import { loginControler } from "./loginControler";
import { userControler } from "./userControler";
import { registerControler } from "./registerControler";
import { sequelize } from "../dataBase/dataBase";
import { searchUser } from "./searchUser";
import { deleteUser } from "./deleteUser";
import { updateName } from "./updateName";


//CRUD: C = CREATE, R = READ, U = UPDATE, D =  DELETE


sequelize.sync()

const server = express();

const PORT = process.env.PORT;

server.use(express.json());

server.get ('/user', userControler);

server.post ('/user', searchUser);

server.post ('/update', updateName);

server.get ('/login', loginControler);

server.post ('/register', registerControler);

server.post ('/delete', deleteUser);


server.listen(PORT, () => {console.log(`Server runing at http://localhost:${PORT}`)})