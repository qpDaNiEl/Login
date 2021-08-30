import { Users } from "../dataBase/models/userModel"

export const deleteUser = async (req,res) => {
    res.send(Users.destroy({
        where: {
            id: req.body.id
        }
    }))
}