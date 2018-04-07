var express = require("express");
var bodyParser = require("body-parser");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser())


app.post("/api/submit", function(req, res){
 console.log(req.body)
   var data = req.body;
  console.log("user: " + JSON.stringify(data))
   db.Profile.create(data)
   .then(function(dbPost) {
     res.json(dbPost);
   });
})

app.get("/api/submit", function(req, res){
  console.log("hi")
  res.send("hi")
})

// listen on port 3000
var port = process.env.PORT || 3001;
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("Listening on port " + port)
  });
});
