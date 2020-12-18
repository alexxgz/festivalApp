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
    db.Stage.find({}, (err, allStages) => {
        if(err) return res.send(err);

        const context = {
            stages: allStages,
        };
        console.log(allStages)
        res.render("stages/index", context)
    })
})

/* Show */

router.get("/:id", (req, res) => {
    const context = {stages: db.Stage};
    res.render("stages/show", context);
   
    
    /* db.Artist
    .findById(req.params.id)
    .populate("stages")
    .exec((err, foundArtist) => {
        if(err) return res.send(err);

        const context = { artists: foundArtist };
        return res.render("artists/show", context)
    }) */
});



/* Export router  */
module.exports = router;