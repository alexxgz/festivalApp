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
    db.Artist.find({}, (err, allArtists) => {
        if (err) return res.send(err);

        const context = {
            artists: allArtists,
        };

        res.render("artists/index", context)
    })
})

/* New */

router.get("/new", (req, res) => {
    db.Artist.find({}, (err, foundArtists) => {
        if (err) return res.send(err);

        const context = {
            artists: foundArtists,
        };
        res.render("artists/new", context)
    })
})

/* Request */
router.get("/requests", (req, res) => {
    db.Artist.find({}, (err, foundArtists) => {
        if (err) return res.send(err);

        const context = {
            artists: foundArtists
        };
        res.render("artists/requests", context)
    })
})

/* Request Show */
router.get("/requests/:id", (req, res) => {
    db.Artist.findById(req.params.id, (err, foundArtist) => {
        if (err) return res.send(err);
        const context = { artists: foundArtist };
        res.render("artists/show", context);
    });


    /* db.Artist
    .findById(req.params.id)
    .populate("stages")
    .exec((err, foundArtist) => {
        if(err) return res.send(err);

        const context = { artist: foundArtist };
        return res.render("artists/show", context)
    }) */
});


/* Show */

router.get("/:id", (req, res) => {
    db.Artist.findById(req.params.id, (err, foundArtist) => {
        if (err) return res.send(err);
        const context = { artists: foundArtist };
        res.render("artists/show", context);
    });


    /* db.Artist
    .findById(req.params.id)
    .populate("stages")
    .exec((err, foundArtist) => {
        if(err) return res.send(err);

        const context = { artist: foundArtist };
        return res.render("artists/show", context)
    }) */
});

/* Create */

router.post("/", (req, res) => {
    db.Artist.create(req.body, (err, createdArtist) => {
        if (err) return res.send(err);

        return res.redirect("/artists")
    });
});

/* Edit */

router.get("/:id/edit", (req, res) => {
    db.Artist.findById(req.params.id, (err, foundArtist) => {
        if (err) return res.send(err);

        const context = { artists: foundArtist };
        return res.render("artists/edit", context)
    })
})

/* Update */
router.put("/:id", (req, res) => {
    db.Artist.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                ...req.body,
            },
        },
        { new: true },
        function (err, updatedArtist) {
            if (err) return res.send(err);

            return res.redirect(`/artists/${updatedArtist._id}`);
        }
    );
});

/* Delete */

router.delete("/:id", (req, res) => {
    db.Artist.findByIdAndDelete(req.params.id, (err, deletedArtist) => {
        if (err) return res.send(err);

        return res.redirect("/artists")
    });
});

/* Export router  */
module.exports = router;