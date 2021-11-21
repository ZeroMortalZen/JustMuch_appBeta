exports.index = function(req, res) {
  var message = '';
  res.render('index', {message: message})

  if(req.method == "POST") {
   console.log("index.js working");

  }

};



