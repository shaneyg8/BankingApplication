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

//Async object used to wait for mongodb callback
var async = require('async');

//Local db object instance
//Databse object
var db;

//Databse collections
var collectionUsers ;
var collectionAccounts;

//User data objects
var currentUser;
var currentUserAccounts = new Map();




//Object for the current users personal data
function userData(username, pin, deviceID, accountsID, payees ){
  //#TODO Add a unique user identifier
  //Username of the current user
  this.username = username;
  //Pin of the currentUser #TODO might be redundant
  this.pin = pin;
  //Used to confirm if current device is registered
  this.deviceID = deviceID;
  //ID's of any accounts owned by the user
  this.accountsID = accountsID;
  //Saved payee info
  this.payees = payees;
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

//Object representation of a transaction
function transaction(date, type, amount, summary){
  //Date of the transaction
  this.date = date;
  //The type of transaction credit or debit
  this.type = type;
  //The amount that has been transferred
  this.amount = amount;
  //A short summary of the transaction
  this.summary = summary;
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
    transaction = createNewTransaction("26/05/2017" , "credit", "25.99", "GAMESTOP");


});

function findOne(collectionName, query, callback){
  db.collection(collectionName).findOne(query, function (err, item){
    if (err){
      callback(err);
    }
    else{
      //Return the data with no errors
      callback(null, item);
    }
  });
}

//Find the data in collection
function getUserData(username){


  //Construct a query
  var query = { "username" : username}

  findOne("Users", query, function (err, item){
    if(err) {
      console.log(err);
      return;
    }

    if(item){
      console.log("acc found \n ");
      console.dir(item);
      currentUser = new userData(item.username, item.pin, item.deviceid, item.accounts, item.payees);
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
        acccountObject = new userAccount(items[k].ownername, items[k].accounttype,
           items[k].accid, items[k].accbalance, items[k].transactions);
        //Insert the account object into the map using the account ID as key
        currentUserAccounts.set(accountNumber, acccountObject);
       }

       //var transact = createNewTransaction("46/02/2016", "credit", "22.30", "Centra Petrol");
       //addTransaction("123456" , transact);
       //console.dir(currentUserAccounts.get(accountNumber));
    }
  });
}

//Add a new transaction to the database
function addTransaction( accountID, newTransaction){
  //Update the transactions

  var account = currentUserAccounts.get(accountID)//.transactions.push(newTransaction);
  console.dir(account);
  account.transactions.push(newTransaction);
  console.dir(account);

  //collectionAccounts.update({"accid" : accountNumber}, {});
  //if(err) throw err;
}

//Create a new transaction
function createNewTransaction(date , type, amount, summary){
    //Create a transaction object
    var newTransaction = new transaction(date, type, amount, summary);
    return newTransaction;
}
