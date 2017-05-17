var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/blog", function(req, res){
    res.render("blog");
});

app.listen(process.env.PORT, process.env.IP);