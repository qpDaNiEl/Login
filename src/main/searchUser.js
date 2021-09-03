import { Users } from "../dataBase/models/userModel";

export const searchUser = async (req,res) => {
    try {

        const search = await Users.findOne({
            where: {id: req.body.id}
        });
        res.send((search) ? search : "User not found");
        
    } catch (error) {
        res.send(error);
    }
}