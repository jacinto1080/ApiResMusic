const Album = require("../models/album")

const mongoosepagination = require ('mongoose-pagination')

const postAlbum = (req, res) => {
    const newalbum = new Album({
        name: req.body.name,
        description: req.body.description,
        year: req.body.year,
        artist: req.body.artist,
    })
    newalbum.save(function (err) {
        if (!err) {
            res.send("Album Creado")
        } else {
            res.send(err)
        }
    })
}
const getArtist = (req, res) => {
    Album.findOne({ _id: req.params.id }, (err, foundAlbum) => {
        if (foundAlbum) {
            res.send(foundAlbum)
        } else {
            res.send("err")
        }
    }).populate("artist")
}
const getAllAlbum = (req,res)=>{
    let page = parseInt(req.params.page);
    if(!page){
        page=1;
    }
    Album.find((err, foundalbum) => {
        if (foundalbum) {
            res.send(foundalbum)
        } else {
            res.send(err)
        }
    }).paginate(page,2)
}
const getAlbumyear = (req, res) => {
    Album.find({year: req.params.year}, function (err, foundalbum) {
        if (foundalbum) {
            res.send(foundalbum)
        } else {
            res.send("No existen albumnes de ese año")
        }
    })
}
module.exports = {
    postAlbum,
    getAllAlbum,
    getAlbumyear,
    getArtist
};