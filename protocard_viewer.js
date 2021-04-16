var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var pgp = require('pg-promise')();
const Pool = require('pg').Pool;
const dbConfig = new Pool({
    host: "ec2-54-167-152-185.compute-1.amazonaws.com",
    port: "5432",
    database: "d4a3mdi3t849lu",
    user: "qpeynpgjkccpxh",
    password: "f96f5d86cf1892bac455d2d0f1ea6fd71970ffbd8637a37e384150f4a74fa839",
    ssl: {rejectUnauthorized:false}
})
dbConfig.connect()

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/home', function(req,res){
    res.render('home');
});
app.get('/about', function(req,res){
    res.render('about');
});
app.get('/help', function(req,res){
    res.render('help');
});
app.get('/botCommands', function(req,res){
    res.render('botCommands');
});


app.listen(process.env.PORT || 3000);
console.log('Should print all database');