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
//Databse object
var db;

//Databse collections
var collectionUsers ;
var collectionAccounts;

//User data objects
var currentUser;
var currentUserAccounts = [];
var accCount = 0;




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
    collectionUsers = db.collection("Users");
    if(err) throw err;
    collectionAccounts = db.collection("Accounts");
    if(err) throw err;
    getUserData("Alan Niemiec", 2345);


    //Temporary
    //db.close();
});

//Find the data in collection
function getUserData(username){

  //Find the desired username in the collection
  collectionUsers.find({ "username": username}).toArray(function(err, items){
    if(err) throw err;
    //This is needed to be able to extract the items from the JSON
    //I am not sure why. Needs to be documented
    if(items){
      for (var k in items){

          //TODO implement pin validation
          //Create the user object
          currentUser = new userData(items[k].username, items[k].pin, items[k].deviceid, items[k].accounts);
          for(var acc in currentUser.accountsID){
          getUserAccounts(currentUser.accountsID[acc]);
          }
        }
        console.dir(currentUser);
      }

  });
}


//Find the data in collection
function getUserAccounts(accountNumber){
  //Find the desired username in the collection
    collectionAccounts.find({ "accid": accountNumber}).toArray(function(err, items){
    if(err) throw err;
      if(items){
      //This is needed to be able to extract the items from the JSON
      //I am not sure why. Needs to be documented
      for (var k in items){
        //Create the account object and append to array
        currentUserAccounts.push(new userAccount(items[k].ownername, items[k].accounttype,
           items[k].accid, items[k].accbalance, items[k].transactions));
        console.dir(currentUserAccounts[accCount]);
        accCount = +1;
       }
    }
  });
}
