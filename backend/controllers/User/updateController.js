const User = require("../../models/userModel");

module.exports = {
    async update(req, res){
        //O código está fazendo a edição destes campos
        const {name, login, password, email} = req.body;

        await User.findOne({_id:req.body._id}).then((user) => {
            user.name = name;
            user.login - login;
            user.password = password;
            user.email = email;

            await user.save().then(() => {
                res.send({status: "Alterado com sucesso"});
                return user;
            }).catch((err) => {
                res.send({erro: `${err}`});
            });
        }).catch((err) => {
            res.send({erro: `${err}`});
        });
    }
}