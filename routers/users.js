const express = require("express");
const router = express.Router();
const userController = require ("../controllers/users")

router.post("/users/rloginegister", userController.postUser);
router.post("/users/login", userController.loginUser);
router.get("/users/:id", userController.getUserOne);
router.get("/user/:id", userController.getFavoriteArtist);
 
module.exports = router;