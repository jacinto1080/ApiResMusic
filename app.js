const express = require("express");
const bodyParser = require("body-parser");
const connection = require ("./database/conection")

const userRouter = require("./routers/users")
const artistRouter = require("./routers/artist")
const albumRouter = require("./routers/album");
const SongsRouter = require("./routers/songs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(artistRouter);
app.use(albumRouter);
app.use(SongsRouter);

connection()

app.listen(port, function () {
    console.log(`Servidor iniciado en el puerto ${port}`);
});