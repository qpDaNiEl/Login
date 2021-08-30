import { Users } from "../dataBase/models/userModel";

export const searchUser = async (req,res) => {
    res.send(await Users.findAll({
        where: {id: req.body.id}
    }));
}