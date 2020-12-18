const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/festivals"


mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on("connected", function () {
    console.log("mongodb connected");
});
mongoose.connection.on("disconnected", function () {
    console.log("mongodb disconnected");
});
mongoose.connection.on("error", function (error) {
    console.log("mongodb error!", error);
});

module.exports = {
    Stage: require("./Stage"),
    Artist: require("./Artist"),
};