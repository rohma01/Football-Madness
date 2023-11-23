const express = require('express');
const ejs = require("ejs");
const PORT = 3000;
const app=express();
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const User=require('./models/users');
mongoose.connect("mongodb://localhost:27017/FootballMadness", {useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/signup", (req,res) => {
    res.render("signup")
});

app.get("/login", (req,res) => {
    res.render("login");
});

app.post("/signup", (req,res) => {
    const userName=req.body.userName;
    const password=req.body.password;

    const newUser = new User({
        userName: userName,
        password: password
    })

    newUser.save((err) => {
        err ? console.log(err) : res.send("Succesfully Created User");
    });
})
app.listen(PORT,() => console.log("Server started on port 3000"));