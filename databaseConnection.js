var express = require("express");
var mysql = require("mysql");
var app = express()

var connection = mysql.createConnection({
    //properties
    host :"localhost",
    user : "root",
    password:"kelly",
    database:" "
})

connection.connect(function (error) {
    //callback
    if(!!error){
        console.log("Error")

    }
    else{
        console.log("Conneted");
    }
})
app.get("/",function (req ,resp) {
    connection.query("SELECT * FROM JMDatabase",function (error ,rows,fields) {
          //callback
          if(!!error){
              console.log("Error in the query");
          }
          else{
              console.log("Succesfuly added to database")
          }
    })

})

app.listen(3306);