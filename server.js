let express = require("express");

let app = express();

let PORT = process.env.PORT || 4040

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES....

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "notes.html")
// })

require("./Develop/routes/htmlRoutes")(app);
//require("./")

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});