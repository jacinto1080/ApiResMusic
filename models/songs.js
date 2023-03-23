const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: Number,
    create_at: {
        type: Date,
        default: Date.now()
    },
    album: {
        type: mongoose.Schema.ObjectId,
        ref:"album"
    },
});
const Songs = mongoose.model("song", songsSchema)

module.exports = Songs;