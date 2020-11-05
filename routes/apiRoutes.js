const noteDb = require("../db/db.json");
const router = require("express").Router()
const util = require("util");
const fs = require("fs");


router.get("/notes", function (req, res) {
    res.json(noteDb);
});

router.post("/notes", function (req, res) {
    noteDb.push(req.body);
    res.json(true);
    //write new note to database
    fs.readFileSync("db.json").toString();
});

router.delete("/notes/:id", function (req, res) {
    let id = req.params.id
    //read the database
    //find the id
    //delete that from the array
});

// app.post("/api/clear", function(req, res) {

// })


module.exports = router;
