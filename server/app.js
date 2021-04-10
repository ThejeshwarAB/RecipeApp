const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const cors = require('cors');
const bodyParser = require("body-parser");

const PORT = process.env.Port || 8000;
const app = express();
app.use(cors());

app.use(bodyParser.json());
var recipeData = require('./recipes.json');
var ingredientData = require('./ingredients.json');
// console.log(jsonData);
const session = require("express-session");
const Data = require('./schema');

// const dbURI = "mongodb://localhost:27017/Data";
const dbURI = "mongodb+srv://admin:HtD389L6yyKlQXsU@cluster0.jstcs.mongodb.net/mernsw?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => { 
        console.log("Server is running and DB is connected");
        allRecords();
        console.log("SESSION STATUS:",session.validation);
        }))
    .catch((err) => console.log(err));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

var check = "false";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'ssshhhhh'}));

app.post('/login', function (req, res) {
    console.log("DATA GIVEN IS:", req.body.loginUser, req.body.loginPass);
    var resend = "FINAL"
    //login in data schema
    Data.findOne({ user: req.body.loginUser, pass: req.body.loginPass }, function (error, data) {
        if (error)
            console.log(error)
        else {
            console.log("LOGIN DONE");
            if (data != null) {
                resend = "LOGGED IN";
                session.validation = true;
                check = "true";
                res.send(resend)
            }
            else {
                resend = "NOT LOGGED IN";
                session.validation = false;
                res.send(resend)
            }
        }
    }).then(console.log("LOGIN DONE"));
});

app.post('/register', function (req, res) {
    console.log("DATA GIVEN IS:", req.body.registerUser, req.body.registerPass);
    //register in data schema
    Data.findOne({ user: req.body.registerUser, pass: req.body.registerPass }, function (error, data) {
        if (error)
            console.log(error)
        else {
            console.log("REGISTRATION DONE");
            if (data != null) {
                const newData = new Data({
                    user: req.body.registerUser,
                    pass: req.body.registerPass,
                })
                newData.save(function (error, document) {
                    if (error)
                        console.log(error)
                    res.send("REGISTERED")
                })
            }
            else {
                res.send("NOT REGISTERED")
            }
        }
    })
});

app.post('/recipe', function (req, res) {
    res.send(recipeData)
})

app.post('/ingredients', function (req, res) {
    res.send(ingredientData)
})

app.post('/check', function (req, res) {
    res.send(session.validation.toString())
})

app.post('/logout', function (req, res) {
    session.validation = false
    req.session.destroy()
    res.send("LOGGED OUT")
})

async function allRecords(){
    await console.log("ALL RECORDS:")
    Data.find()
    .then((result)=>{
        console.log(result);
    })
}