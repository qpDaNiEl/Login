import { Users } from "../dataBase/models/userModel";

export const updateName = async (req, res) => {
    try {
        const [numberOfAffectedRows , affectedRows] = await Users.update({
            name: (req.body.name)
        }, {
            where: {id: req.body.id},
            returning: true,
            plain: true
        })
        if (affectedRows != 0) {
            res.send("update complited")
        } else {
            res.send("User not found")
        };
        

    } catch (error) {
        res.send(error)
    }
}