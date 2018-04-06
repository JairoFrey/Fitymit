// Solution 2: Customer Relations
// ===========================================

// Step 1: Created a Customer model in ./models/customer.js
// Step 2: Updated the Burger model to have a hasOne(models.Customer) relation
// Step 3: Updated the handlebars to display a customers name if there's a 'Customers' property on the Burger
// Step 4: Updated queries in burgerController for updating a burger to add the CustomerId
// Step 5: Updated findAll query  in burger_controller for burgers to "include" the customer
// Step 6: Updated findAll query in burger_controller to order returned burgers by burger_name.


var express = require("express");
var bodyParser = require("body-parser");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));


app.post("/api/submit", function(req, res){
  console.log("hi")
  console.log(req.body)
})

app.get("/api/submit", function(req, res){
  console.log("hi")
  res.send("hi")
})

// listen on port 3000
var port = process.env.PORT || 3001;
db.sequelize.sync({force:true}).then(function() {
  app.listen(port);
});
