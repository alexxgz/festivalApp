const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/festivals"

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(function() {
    console.log("Mongodb connected");
})
.catch(function(err) {
    console.log("Mongodb error");
    console.log(err);
})

mongoose.connection.on("disconnected", function () {
    console.log("mongodb disconnected");
});


module.exports = {
    Stage: require("./Stage"),
    Artist: require("./Artist"),
};