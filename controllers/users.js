const Users = require("../models/users")
const bcrypt = require("bcrypt");

const postUser = (req, res) => {
    const newuser = new Users({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        favoriteArtist: req.body.favoriteArtist,
    })
    const encryptPassword = bcrypt.hashSync(newuser.password, 10);
    newuser.password = encryptPassword;
    newuser.save(function (err) {
        if (!err) {
            res.send("Usuario Creado")
        } else {
            res.send(err)
        }
    })
}
const loginUser = (req, res) => {
    if (!(req.body.email && req.body.password)) {
        res.send("faltan datos")
    }
    Users.findOne({ email: req.body.email }, (err, founduser) => {
        if (!founduser) {
            res.send("Este usuario no esta registrado")
        } else {
            const valiPassword = bcrypt.compareSync(req.body.password, founduser.password);
            if (valiPassword) {
                res.send({
                    mensaje: "Validacion correcta",
                    user: {
                        name: founduser.name,
                        email: founduser.email,
                    }
                })
            } else {
                res.send("Contraseña incorrecta")
            }
        }
    })
}
const getUserOne = (req, res) => {
    Users.findOne({_id: req.params.id}, (err, foundusers) => {
        if (foundusers) {
            res.send(foundusers)
        } else {
            res.send("No existe ese Usuario")
        }
    })
}
const getFavoriteArtist = (req, res) => {
    Users.findOne({ _id: req.params.id }, (err, foundUsers) => {
        if (foundUsers) {
            res.send(foundUsers)
        } else {
            res.send("No tiene artista favorito")
        }
    }).populate("favoriteArtist")
}
module.exports = {
    postUser,
    loginUser,
    getUserOne,
    getFavoriteArtist,
};