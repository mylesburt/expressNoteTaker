const noteDb = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(noteDb);
    });

    app.post("/api/notes", function (req, res) {
        noteDb.push(req.body);
        res.json(true);
    });

    // app.post("/api/clear", function(req, res) {

    // })


}

