const User = require("../../models/userModel");

module.exports = {
    async create(req, res){
        const {name, email, login, password} = req.body;

        const user = await User.create({
            name, email, login, password
        }).then(() => {
            res.send({Cadastro: "Sucesso"});
        }).catch((err) => {
            res.send({Cadastro: `${err}`});
        });
    }
}