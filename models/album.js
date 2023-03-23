const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    year:Number,
    artist: {
        type: mongoose.Schema.ObjectId,
        ref:"artist"
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
});
const Album = mongoose.model("album", albumSchema)

module.exports = Album;