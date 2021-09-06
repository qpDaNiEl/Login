
import { Users } from "../dataBase/models/userModel";
import bcrypt, { hash } from "bcrypt";

export const registerControler = async (req, res) => {
    try {
        const saltRounds = 12;
        const { email, name, password } = req.body;
        const hash = await bcrypt.hash(password, saltRounds);
        const newUser = await Users.create({ email, name, hash });

        res.send(newUser);
    } catch (error) {
        res.send(error.errors[0].message)
    }

};