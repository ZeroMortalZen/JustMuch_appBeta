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
  var message = '';
  var sess = req.session;

  if(req.method == "POST") {
    var post = req.body;
    var user = post.user_name;
    var pass = post.password;

    if (user && pass) {
      db.query('SELECT * FROM jmdatabase.register WHERE Username = ? AND Password = ?', [user, pass], function(error, results, fields) {
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.username = user;
          //Normal Login for Normal user
          if(user != null && user != "Manager"){
            res.redirect('/home/dashboard');
            if (res.statusCode !== 200) {
              console.log(error);
            }
          }
          //Manager Login
          else if(user == "Manager"){
            if (res.statusCode !== 200) {
              console.log(error);

            }
            console.log("Works here")
            res.redirect('/Manager')
          }

        } else {
          res.send('Incorrect Username and/or Password!');
          console.log('Please enter Username and Password!')
        }
        res.end();
      });
    } else {
      res.send('Please enter Username and Password!');
      console.log('Please enter Username and Password!')
      res.end();
    }

  }
};


exports.dashboard = function(req, res,next){

    res.render('dashboard.ejs');
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
  console.log("Connected Here")
   res.render("Manager.ejs")
    if(req.method =="POST"){
     var post =req.body;
     console.log("Manager Database Responded")
     let choice = post
     var sql ="SELECT * FROM `jmdatabase`.`orders`";
   db.query((sql,function (err,rows,fields) {
       console.log("Manager database has query")
       if(err){
            console.log(err);
          }
          else{
            return console.log(res)
          }

     }))
   }
};

