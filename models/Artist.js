const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
    {
        djName: { type: String, required: true, unique: true },
        genre: { type: String, required: true },
        topHits: { type: String, required: true },
        date: { type: Date },
        stage: { type: mongoose.Schema.Types.ObjectId, ref: "Stage" },
    },
    { timestamps: true }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;