
const express = require('express');

const app = express();

app.get("/", function (req, res) {
    // console.log(req);   
    res.send("<h1> Hello world . For more follow raj</h1>");
})

app.get("/contact", function (req, res) {
    res.send("Mail me at " + "<a href=mailto:rajkar921@gmail.com>" + "Raj kar</a>")
})

app.get("/about", function (req, res) {
    res.send("<h3>Hey, I'm Raj - a 19 years old boy, Who love programming to much</h3>")
})

app.listen(3000, function () {
    console.log("3000 server started ..!");
})