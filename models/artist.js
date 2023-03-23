const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    create_at: {
        type: Date,
        default: Date.now()
    }
});
const Artist = mongoose.model("artist", artistSchema)

module.exports = Artist;