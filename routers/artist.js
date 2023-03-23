const express = require("express");
const router = express.Router();
const artistController = require ("../controllers/artist")

router.post("/artist", artistController.postArtist);
router.delete("/artist/:id", artistController.deleteArtistOne);
router.patch("/artist/:id", artistController.patchArtistOne);
router.get("/artist", artistController.getArtist);

module.exports = router;