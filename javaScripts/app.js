//Object definitions
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').BSON,
    assert = require('assert');

//Local db object instance
var db;
//Object for the current users personal data
function userData(username, pin, deviceID, accountsID ){
  //#TODO Add a unique user identifier
  //Username of the current user
  this.username = username;
  //Pin of the currentUser #TODO might be redundant
  this.pin = pin;
  //Used to confirm if current device is registered
  this.deviceID = deviceID;
  //ID's of any accounts owned by the user
  this.accountsID = accountsID;
}

//Object for the user account data
function userAccount(ownerName, accountType, accID, accBalance, transactions){
  //#TODO Add a unique user identifier
  //Usename of the current user
  this.ownerName = ownerName;
  //The type of the account that this object represents
  this.accountType = accountType;
  //The ID of the account Object
  this.accID = accID;
  //Current balance of the account
  this.accBalance = accBalance;
  //An array of transaction objects made by this account
  this.transactions = transactions;
}

// Connect to the db
//Pooling adapted from
//http://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html#mongoclient-connect
  MongoClient.connect("mongodb://Test:Test@ds139187.mlab.com:39187/heroku_vh3f7203", function(err, database) {
    if(err) throw err;
    db = database;
    getData();
    /**
    .toArray(function(err, items) {
      console.dir("Try to find a single item:");
      console.dir("Users item: " + items);
      //var arr = $.map(items, function(el) { return el });
    });**/

    /**
    //Find the desired username in the collection
    collectionAccounts.find({ "username": "Alan Niemiec"}).toArray(function(err, items) {
      console.log("Collection Accounts items:")
      console.log(items);
      items;
      //console.dir(items);
    });**/

    /** Ready to delete this
    var cursor = collectionAccounts.find({});
    // Fetch the first object off the cursor
      cursor.nextObject(function(err, item) {
        console.log("cursor started");
        //assert.equal(0, item.pin)
        console.log(item.pin);
        // Rewind the cursor, resetting it to point to the start of the query
        cursor.rewind();

        // Grab the first object again
        cursor.nextObject(funcover all the documents for this cursor. As with tion(err, item) {
          assert.equal(0, item.pin)
        });
      });
      **/
/**
  //Else for if the connection fails. show errors
  else {
    console.log("Connection failed");
    console.log(err);
  }**/
  //Close the database connection
});

//Find the data in collection
function getData(){//collection, searchVariable, searchValue, returnType){
  //Find the desired collection
  var collectionUsers = db.collection("Users");
  var collectionAccounts = db.collection("Accounts");
  /**
  if(!err) {
    console.log("Collection found");
  }
  else{
    console.log("Collection not found");
    console.log(err);
  }**/
  //Find the desired username in the collection
  var userDocument = collectionUsers.find({ "username": "Alan Niemiec"}).toArray(function(err, items){
    //This is needed to be able to extract the items from the JSON
    //I am not sure why. Needs to be documented
    for (var k in items){
      console.dir(items[k].username);
      console.dir(items[k].pin);
      console.dir(items[k].deviceid);
      console.dir(items[k].accounts);
    }

    //Temporary
    db.close();
  });
}
