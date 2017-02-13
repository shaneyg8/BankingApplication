// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
  MongoClient.connect("mongodb://Test:Test@ds139187.mlab.com:39187/heroku_vh3f7203", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection("Users");
    if(!err) {
      console.log("Collection found");
    }
    else{

      console.log("Collection not found");
      console.log(err);
    }

    collection.find().toArray(function(err, items) {});

    var Data  = collection.findOne({"pin":"2345"}, function(err, item) {});
    if(!err) {
      console.log("Json Data: " + Data);
    }
    else{
      console.log("Data retrieval failed");
      console.log(err);
    }
  }
  else {
    console.log("Connection failed");
    console.log(err);
  }
});
