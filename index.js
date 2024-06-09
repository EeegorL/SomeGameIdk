const express = require("express");
const app = express();

require("dotenv").config();
const {HOST, PORT} = process.env;

const path = require("path");
app.use(express.static(path.join(__dirname, "/public")))
.set("views", path.join(__dirname, "views"))
.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`${HOST}:${PORT}`);
});