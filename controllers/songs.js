const Songs = require("../models/songs")

const postSong = (req, res) => {
    const newSong = new Songs({
        name: req.body.name,
        duration: req.body.duration,
        album: req.body.album,
    })
    newSong.save(function (err) {
        if (!err) {
            res.send("Cancion Creada")
        } else {
            res.send(err)
        }
    })
}
const getAllsongsAlbum = (req, res) => {
    Songs.find({
        album: req.params.id
    }, function (err, foundsongs) {
        if (foundsongs) {
            res.send(foundsongs)
        } else {
            res.send("No existen canciones en ese album")
        }
    }).populate("album")
}
const deleteSongOne = (req, res) => {
    Songs.deleteOne({
        _id: req.params.id,
    }, function (err) {
        if (!err) {
            res.send("Cancion eliminada correctamente")
        } else {
            res.send(err)
        }
    })
}
const getAllSongs = (req,res)=>{
    let page = parseInt(req.params.page);
    if(!page){
        page=1;
    }
    Songs.find((err, foundsongs) => {
        if (foundsongs) {
            res.send(foundsongs)
        } else {
            res.send(err)
        }
    }).paginate(page,2)
}
module.exports = {
    postSong,
    getAllsongsAlbum,
    deleteSongOne,
    getAllSongs
};