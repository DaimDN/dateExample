const express = require('express');
const app = express();
const port = 3000;
const parser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({extended: true}));


app.get('/', function(req, res){
var date = new Date();
var newdate = date.getDay();  // output from 0 till 6 
var day = "";

switch (newdate) {
  case 6:
    day = "Satuday";
    break;

  case 0:
  day = "Sunday";
  break;

  case 1:
  day = "Monday"
  break;

  case 2:
  day = "Tuesday";
  break;

  case 3:
  day = "Wednesday";
  break;

  case 4:
  day = "Thursday";
  break;
  case 5:
  day = "Friday";
  break;


  default: res.send("No cases are available");

}
res.send("<h1>Today is " + day );


})



app.listen(port, function(req, res){
  console.log("server is up and running on port " + port);
})
