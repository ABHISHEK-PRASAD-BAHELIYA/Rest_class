const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname,"value"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "Bansalcollege",
        content : "I love coding!",
    },
    {
        username: "Ahishek singh",
        content: "Hardwork is important to achieve success",
    },
    {
        username: "Atul kumar",
        content: "I got selected for my first 1st intenship!",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.listen(port, () => {
    console.log("listening to port: 8080");
});