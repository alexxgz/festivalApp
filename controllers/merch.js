const express = require("express");

const router = express.Router();

const db = require("../models");

/* Index */

router.get("/", (req, res) => {
    db.Merch.find({}, (err, allMerch) => {
        if (err) return res.send(err);

        const context = {
            merch: allMerch
        };
        res.render("merch/index", context)

    })

})

module.exports = router;