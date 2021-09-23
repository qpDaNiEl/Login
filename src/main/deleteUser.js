import { Users } from "../dataBase/models/userModel"

export const deleteUser = async (req, res) => {
    try {
        Users.destroy({
            where: {
                id: req.body.id
            }
        })
        res.send(`User id ${req.body.id} has been successfully removed`);
    } catch (error) {
        res.send(error);
    }
}