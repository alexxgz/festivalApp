const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema(
    {
        stageName: { type: String, required: false, unique: true },
        setTimes: { type: Array, required: false },
        artists: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
    },
    { timestamps: true }
);

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;