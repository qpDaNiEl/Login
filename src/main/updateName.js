import { Users } from "../dataBase/models/userModel";
import bcrypt, { hash } from "bcrypt";

export const updateName = async (req, res) => {
    try {
        const { newName, newEmail, newPassword, id } = req.body;
        const update = await Users.findByPk(id);

        //update name
        if (newName != "" && newName != update.name) {
            update.name = newName;
        }
        //update email
        if (newEmail != "" && newEmail != update.email) {
            update.email = newEmail;
        }
        //update password
        await bcrypt.compare(newPassword, update.hash).then(async (result) => {
            const newHash = await bcrypt.hash(newPassword, 12);
            if (newPassword != "" && !result) {
                update.hash = newHash;
            }
            update.save();
        });

        res.send(update);

    } catch (error) {
        res.send(`Error: ${error}`)
    }
}
