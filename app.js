const express = require('express')
    , routes = require('./routes')
    , user = require('./routes/users')
    , http = require('http')
    , path = require('path');
//const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const mysql= require('mysql');
let bodyParser=require("body-parser");
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

connection.connect();

global.db = connection;

// all environments
app.set('port', process.env.PORT || 3308);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/public", express.static('./public/'));


// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// development only

app.get('/', routes.index);//call for main index page
app.post('/', user.index);//call for main index post
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post
//app.get('/Login', routes.index);//call for login page
//app.post('/Login', user.Login);//call for login post

//Middleware
app.listen("3308", ()=>{
    console.log("Server Started on port 3308")
})




