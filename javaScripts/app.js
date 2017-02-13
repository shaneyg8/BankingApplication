// Retrieve
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
// Connect to the db
  MongoClient.connect("mongodb://Test:Test@ds139187.mlab.com:39187/heroku_vh3f7203", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection("Users");

    /**
    //var collection = db.collection('test_insert');

    collection.insert({a:2}, function(err, docs) {
        collection.count(function(err, count) {
          console.log(format("count = %s", count));
        });
      });
    }else{
      throw err;
    }**/

    if(!err) {
      console.log("Collection found");
    }
    else{

      console.log("Collection not found");
      console.log(err);
    }

    collection.find().toArray(function(err, items) {
      console.dir(items);
    });
    /**
    var Data  =  collection.findOne({"_id" : "5819dceadcba0f45f191c5e5"}).toArray(function(err, item)) {});

    if(!err) {
      console.log("Json Data: " + Data);
    }
    else{
      console.log("Data retrieval failed");
      console.log(err);
    }**/
  }
  else {
    console.log("Connection failed");
    console.log(err);
  }
  db.close();
});
