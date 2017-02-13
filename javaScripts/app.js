// Retrieve
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

//Object definitions

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
  for (s of transactions){
    console.log(s);
    console.log(s);
  }
}
// Connect to the db
  MongoClient.connect("mongodb://Test:Test@ds139187.mlab.com:39187/heroku_vh3f7203", function(err, db) {
  if(!err) {
    console.log("We are connected");


    //Find the desired collection
    var collectionUsers = db.collection("Users");
    var collectionAccounts = db.collection("Accounts");
    if(!err) {
      console.log("Collection found");
    }
    else{
      console.log("Collection not found");
      console.log(err);
    }

    //Find the desired username in the collection
    collectionUsers.find({ "username": "Alan Niemiec"}).toArray(function(err, items) {
      console.dir(items);
    });

    //Find the desired username in the collection
    collectionAccounts.find().toArray(function(err, items) {
      items;
      console.dir(items);
    });

  }
  //Else for if the connection fails. show errors
  else {
    console.log("Connection failed");
    console.log(err);
  }
  //Close the database connection
  db.close();
});

//Find the data in collection
function getData(collection, searchVariable, searchValue, returnType){

}
