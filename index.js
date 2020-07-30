var express = require("express");
var app = express();

app.listen(8080, () => {
    console.log("App started");
});

app.get("/ping", (req, res, next) => {
    res.send("pong");
});