const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/festivals"

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(function () {
        console.log("mongodb connected");
    })

    .catch(function (err) {
        console.log("mongodb error");
        console.log(err);
    });

mongoose.connection.on("disconnected", function () {
    console.log("mongodb disconnected");
});


module.exports = {
    Stage: require("./Stage"),
    Artist: require("./Artist"),
    Merch: require("./Merch"),
    Ticket: require("./Ticket"),
};