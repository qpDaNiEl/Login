import { Users } from "../dataBase/models/userModel";

export const updateName = async (req, res) => {
    try {
        const {newName, newEmail, newPassword, id} = req.body;
        const update = await Users.findByPk(id);
        
        //update name
        if (newName != "" || newName == update.name) {
            update.name = newName;
        }
        //update email
        if (newEmail != "" || newEmail == update.email) {
            update.email = newEmail;
        }
        //update password
        if (newPassword != "" || newPassword == update.password) {
            update.password = newPassword;
        }
        
        update.save();
        res.send(update);

    } catch (error) {
        res.send(`Error: ${error}`)
    }
    //[numberOfAffectedRows , affectedRows]
    /*
    const {newName, newEmail, newPassword, id} = req.body;
    const user = await Users.update({
            name: (req.body.name)
        }, {
            where: {id: req.body.id},
            returning: true
        }).then((user) => console.log(user))
        
    */
   /*
        if (affectedRows != 0) {
            res.send("update complited")
        } else {
            res.send("User not found")
        };*/
}