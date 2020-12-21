const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema(
    {
        stageName: { type: String, required: true, unique: true },
        dates: { type: String, },
        artistsPlaying: { type: String, },
        setTime: { type: Date },
    },
    { timestamps: true }
);

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;