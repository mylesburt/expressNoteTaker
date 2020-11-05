const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();

const PORT = process.env.PORT || 4040

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});



//ROUTES....

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "notes.html")
// })

// require("./Develop/routes/htmlRoutes")(app);
//require("./")