var express = require("express");

var app = express();

// app.get('/', function(req, res) {
//   res.send("Hello world from server.js");
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
    console.log("I received a GET request");

    db.contactlist.find(function(err, docs) {
      console.log(docs);
      res.json(docs);
      console.log(error);
    });

});

app.post("/contactlist", function(req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, docs) {
    res.json(docs);
  });

});

app.delete('/contactlist/:id', function(req, res) {


});

app.listen(3000);
console.log("Server running on port 3000");
