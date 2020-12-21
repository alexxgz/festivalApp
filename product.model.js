const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stageSchema = Schema(
    {
        name: {
            type: String, required: true
        }
    },
    {
        setTimes: {
            type: Array, required: true
        }
    }
)
;

const stage = mongoose.model("stage", stageSchema, "Product");
module.exports = stage;
