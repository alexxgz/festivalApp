const express = require("express");

const router = express.Router();

const db = require("../models");

router.get("/", function (req, res) {
    db.Ticket.find({}, function (err, allTickets) {
        if (err) return res.send(err);

        const context = {
            ticket: allTickets
        };
        res.render("tickets/index", context)

    })
})

module.exports = router;