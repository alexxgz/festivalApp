//External Modules
const express = require("express");
const methodOverride = require("method-override");

//Internal Modules
const controllers = require("./controllers");

//Instanced Modules
const app = express();

//Configuration
const PORT = 4000;
app.set("view engine", "ejs");


app.use(function (request, resonse, next) {
    console.log(request.url, request.method);
    next();


    //Middleware

    // server public as static files
    // express.static(directory location absolute)
    app.use(express.static(__dirname + '/public'));

    // body data middleware
    app.use(express.urlencoded({ extended: true }));
    // method override middleware
    app.use(methodOverride("_method"));





    //Home 
    app.get("/", function (req, res) {
        res.render("home");
    });


    //404 error
    app.get(function (request, response) {
        response.send("404 -This does not exist in the universe you are in-")
    });


    //Server listner
    app.listen(PORT, function () {
        console.log(`Festival is live at http://localhost:${PORT}/`)
    });