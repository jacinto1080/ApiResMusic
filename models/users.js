const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteArtist: {
        type: mongoose.Schema.ObjectId,
        ref:"artist"
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
});
const Users = mongoose.model("user", userSchema)

module.exports = Users;