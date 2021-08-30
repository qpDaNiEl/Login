import { Users } from "../dataBase/models/userModel";

export const userControler = async (req, res) => {
    try {
        const User = await Users.findAll();
        res.send(User);
    } catch (error) {
        res.send(error);
    }
    
}