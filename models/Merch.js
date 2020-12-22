mongoose = require("mongoose");

const merchSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        merchType: {type: String},
        merchOf: {type: mongoose.Schema.Types.ObjectId, ref: "Artist"}
    },
    {
        timestamps: true
    }
);

const Merch = mongoose.model("Merch", merchSchema);

module.exports = Merch;