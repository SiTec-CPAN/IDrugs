const User = require("../../models/userModel")

module.exports = {
    async delete(req, res) {

        //Coloquei req.params, mas pode ser no body, vamos decidir como vai ser depois. 
        await User.remove({ _id: req.params.id }).then(() => {
            res.send({ Deletado: "Sucesso" });
        }).catch((err) => {
            res.send(500).send({ error: "Não foi posível deletar" })
        })
    }
}