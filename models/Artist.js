const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
    {
        djName: { type: String, required: false, unique: true },
        genre: { type: String, required: false },
        topHits: { type: String, required: false },
        stagesPlaying: { type: mongoose.Schema.Types.ObjectId, ref: "Stage" },
    },
    { timestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;