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
////Index page call to database
  exports.index = function (req,res) {
    message="";
    console.log("exports index works")
    if(req.method == "POST") {

      var post = req.body;
      var name = post.name;
      var price = post.price;
      var QTY = post.count;



      var sql = "INSERT INTO `jmdatabase`.`orders` ( `name`, `price`, `QTY`) VALUES ('"+name+"','"+price+"','"+QTY+"')";

      var query = db.query(sql, function (err, result) {

        console.log("items have been added")

      })
    } else {



    }


}


