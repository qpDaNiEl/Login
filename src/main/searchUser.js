import { Users } from "../dataBase/models/userModel";

export const searchUser = async (req,res) => {
    const search = await Users.findAll({
        where: {id: req.body.id}
    });
    res.send(search);
}