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