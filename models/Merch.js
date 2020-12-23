const mongoose = require("mongoose");

const merchSchema = new mongoose.Schema(
    {
        product: { type: String, required: true },
        price: { type: String, required: true },
        category: { type: String, required: true },

    },
    { timestamps: true }
);

const Merch = mongoose.model("Merch", merchSchema);

module.exports = Merch;