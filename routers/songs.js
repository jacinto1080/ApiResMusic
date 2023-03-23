const express = require("express");
const router = express.Router();
const songsController = require ("../controllers/songs");

router.post("/song", songsController.postSong);
router.get("/songs/:id", songsController.getAllsongsAlbum);
router.delete("/songs/:id", songsController.deleteSongOne);
router.get("/allSongs/:page?", songsController.getAllSongs);

module.exports = router;