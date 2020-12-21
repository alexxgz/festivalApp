const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema(
    {
        stageName: { type: String, required: true, unique: true },
        artistsPlaying: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
        setTime: { type: Date },
    },
    { timestamps: true }
);

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;