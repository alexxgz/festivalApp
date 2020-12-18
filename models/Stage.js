
const mongoose = require("mongoose");

module.exports = [
{
    name: "Kinetic Garden",
    dates: ["1", "2", "3"],
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
    setTimes: ["12PM", "1PM", "2PM", "3PM"]
},

{
    name: "Neon Field",
    dates: ["1", "2", "3"],
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
    setTimes: ["5PM", "6PM", "7PM", "8PM"]
}

]