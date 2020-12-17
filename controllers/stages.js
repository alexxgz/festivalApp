/* Require express */
const express = require("express");

/* Set up router */
const router = express.Router();

/* Internal Modules */
const db = require("../models")

/* 
    Index - GET - "/" - Presentational - respond with all authors
    New - GET - "/new" - Presentational Form - page with a form to create new author
    Show - GET - "/:id" - Presentational - respond with all specific author by ID
    Create - POST - "/" - Functional - receive data from new route to create an author
    Edit - GET - "/:id/edit" - Presentational Form - respond iwth a form prefilled with author data
    Update - PUT - "/:id" - PresentaFunctionaltional - receive data from edit to update a specific author
    Delete - DELETE - "/:id" - Functional - Deletes author by id form request
*/

/* Index */

router.get("/", (req,res) => {
    db.Stage.find({}, () => {
        if(err) return res.send(err);

        const context = {
            stages: foundStages,
        };

        res.render("/stages/index", context);
    });
});

/* New */

router.get("/new", (req, res) => {
    db.Stage.find({}, (err, foundStages) => {
        if(err) return res.send(err);
        const context = {
            stages: foundStages,
        };
        res.render("stages/new", context);
    });
});


/* Show */

router.get("/", (req, res) => {
    db.Stage
    .findById(req.param.id)
    .populate("author")
    .exec((err, foundStage) => {
        if(err) return res.send(err);
        const context = {stage: foundStage};
        res.render("stages/show", context);
    })
});



/* Export router  */
module.exports = router;