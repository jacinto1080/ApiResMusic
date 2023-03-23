const express = require("express");
const router = express.Router();
const albumController = require ("../controllers/album")

router.post("/album", albumController.postAlbum);
router.get("/albumArtista/:id", albumController.getArtist);
router.get("/album/:page?", albumController.getAllAlbum);
router.get("/albumnes/:year", albumController.getAlbumyear);

module.exports = router;