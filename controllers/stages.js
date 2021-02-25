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

router.get("/", (req, res) => {
    db.Stage.find({}, (err, allStages) => {
        if (err) return res.send(err);

        const context = {
            stages: allStages,
        };
        console.log(allStages)
        res.render("stages/index", context)
    })
})

/* New */

router.get("/new", (req, res) => {

    db.Stage.find({}, (err, foundStages) => {
        if (err) return res.send(err);

        const context = {
            stages: foundStages
        };
        res.render("stages/new", context);
    })
});


/* Show */

router.get("/:id", function (req, res) {
    // db.Stage.findById(req.params.id, (err, foundStage) => {
    //     if (err) return res.send(err);
    //     const context = { stages: foundStage };
    //     res.render("stages/show", context);

    db.Stage
        .findById(req.params.id)
        .populate("artists")
        .exec(function (err, foundStage) {
            if (err) return res.send(err);

            const context = { stages: foundStage };
            return res.render("stages/show", context);


        })
});




/* Create */

router.post("/", function (req, res) {
    db.Stage.create(req.body, function (err, createdStage) {
        if (err) return res.send(err);

        /* db.Artist.findById(createdStage.artistsPlaying).exec((err, foundArtist) => {
            if (err) return res.send(err);

            foundArtist.stage.push(createdStage);
            foundArtist.save();*/

            return res.redirect("/stages")
        }); 

    });
/* }); */

/* Edit */

router.get("/:id/edit", function (req, res) {
    db.Stage.findById(req.params.id, function (err, foundStage) {
        if (err) return res.send(err);

        const context = { stages: foundStage };
        return res.render("stages/edit", context);
    });
});

/* Update */
router.put("/:id", function (req, res) {
    db.Stage.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            }
        },
        { new: true },
        function (err, updatedStage) {
            if (err) return res.send(err);

            return res.redirect(`/stages/${updatedStage._id}`);
        }
    );
});

/* Delete */

router.delete("/:id", function (req, res) {
    db.Stage.findByIdAndDelete(req.params.id, function (err, deletedStage) {
        if (err) return res.send(err);

        db.Artist.remove({ stages: deletedStage._id }, function (err, deletedArtists) {
            if (err) return res.send(err);
            return res.redirect("/stages")
        });


    });
});

/* Export router  */
module.exports = router;