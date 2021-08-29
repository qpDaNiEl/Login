
import { Users } from "../dataBase/models/userModel";

export const registerControler = async (req, res) => {
    try {
        const { email, name, password } = req.body;

        const newUser = await Users.create({ email, name, password });

        res.send(newUser);
    } catch (error) {
        res.send(error.errors[0].message)
    }

};