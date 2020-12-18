const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        setTimes: { type: Array, required: true },
        artists: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
    },
    { timestamps: true }
);

const Stage = mongoose.model("Stage", stageSchema);

module.exports = Stage;