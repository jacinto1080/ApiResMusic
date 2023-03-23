const Artist = require("../models/artist");

const postArtist = (req, res) => {
    const newartist = new Artist({
        name: req.body.name,
        description: req.body.description,
    })
    newartist.save(function (err) {
        if (!err) {
            res.send("Artista Creado")
        } else {
            res.send(err)
        }
    })
}
const deleteArtistOne = (req, res) => {
    Artist.deleteOne({_id: req.params.id}, function (err) {
        if (!err) {
            res.send("Artista eliminado correctamente")
        } else {
            res.send(err)
        }
    })
}
const patchArtistOne = (req, res) => {
    Artist.updateOne({_id: req.params.id,}, {
        name: req.body.name,
        description: req.body.description,
    }, function (err) {
        if (!err) {
            res.send("Artista modificado correctamente")
        } else {
            res.send(err)
        }
    })
}
const getArtist = (req, res) => {
    Artist.find(function (error, foundartist) {
        if (foundartist) {
            res.send(foundartist)
        } else {
            res.send("No existen Artistas en la base de datos")
        }
    })
}
module.exports = {
    postArtist,
    deleteArtistOne,
    patchArtistOne,
    getArtist
};