//Sign up page call to database
exports.signup = function (req,res) {
  message="";
  if(req.method == "POST") {
    var post = req.body;
    var email = post.email;
    var user = post.user_name;
    var pass = post.password;

    console.log("Email:"+" "+email);
    console.log("Username : "+" "+ user);
    console.log("Password"+" "+ pass);
    console.log("Has been stored in Database")
    console.log(" ")


  var sql = "INSERT INTO `jmdatabase`.`register` ( `Email`, `Username`, `Password`) VALUES ('"+email+"','"+user+"','"+pass+"')";

    var query = db.query(sql, function (err, result) {

      message = "Successfully! Your account has been created"
      res.render('signup.ejs', {message: message});

    })
  } else {
    res.render('signup')


  }

}
////Main page call to database
 // exports.main = function (req,res,next) {
   // message="";
   // console.log("Loaded: Main Page")


// if (req.method == "POST") {

       // var post = req.body;
       // var name = post.name;
       // var price = post.price;
       // var QTY = post.count;


       // var sql = "INSERT INTO `jmdatabase`.`orders` ( `name`, `price`, `QTY`) VALUES ('" + name + "','" + price + "','" + QTY + "')";

       // var query = db.query(sql, function (err, result) {

         // console.log("items have been added")

       // })
     // } else {


    //  }


//}

/////Login Page Call
exports.login = function(req, res,reject){
  console.log("Error here 6")
  var message = '';
  var sess = req.session;

  if(req.method == "POST") {
    var post = req.body;
    var user = post.user_name;
    var pass = post.password;

    if (user && pass) {
      db.query('SELECT * FROM jmdatabase.register WHERE Username = ? AND Password = ?', [user, pass], function(error, results, fields) {
        if (results.length > 0) {
          console.log("Connected To User Database")

          //Normal Login for Normal user
          if(user != null && user != "Manager"&& user != "Cook"){
            console.log("Main paged has Loaded")
            res.redirect("/Main")
            if (res.statusCode !== 200) {
              console.log(error);

            }

          }
          //Manager Login
          else if(user == "Manager"){
            console.log("Manager Page has Loaded")
            res.redirect("/Manager")
            if (res.statusCode !== 200) {
              console.log(error);
              console.log("An error has occurred")
            }

            console.log("Testing")
          }
          else if(user =="Cook"){
            console.log("Staff Member Page has Loaded")
            res.redirect("/Cook")
            if (res.statusCode !== 200) {
              console.log(error);
              console.log("Error")
            }


          }

        } else {




          console.log('Please enter Username and Password! 2')



        }
        res.end();
      });
    } else {
      console.log('Please enter Username and Password! 1')
      res.end();
    }

  }
};


exports.Main = function(req, res,next){
  console.log("User Page")
    res.render('Main.ejs');
     if (req.method == "POST") {

    var post = req.body;
    var name = post.name;
    var price = post.price;
    var QTY = post.count;


    var sql = "INSERT INTO `jmdatabase`.`orders` ( `name`, `price`, `QTY`) VALUES ('" + name + "','" + price + "','" + QTY + "')";

    var query = db.query(sql, function (err, result) {
      console.log(err);
      console.log("items have been added")

    })
  } else {


  }

};
///Manager
exports.Manager = function (req,res,next) {
  console.log("Rendered Manager Page")


  //Database Connection
  var sql ="SELECT * FROM `jmdatabase`.`orders`";
  db.query(sql,function (err,rows,fields) {
    if(err){
      console.log(err)
      return
    }
    //Check data from database
    console.log("Data from Database")
    console.log(rows);

    for(i=0;i<rows.length;i++){
      var row =rows[i];
      console.log(row.name)
      console.log(row.price)
      console.log(row.QTY)

    }



    res.render("Manager.ejs");
    res.end(JSON.stringify(rows));
    //

  })

  //res.send(200, );

};
exports.Cook = function (req,res,next) {
  console.log("Rendered Staff Member Page")
  res.render("Cook.ejs")


};



