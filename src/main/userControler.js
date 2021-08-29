import { Users } from "../dataBase/models/userModel";

export const userControler = async (req, res) => {
    res.send(await Users.findAll());
}