const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
var http = require('https');

//app var
const app = express();


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

/**
app.post('/quotes', (req, res) => {
  console.log(req.body)
})**/
app.get('/user/:id', getUserData);
app.get('/accounts/:idl', getUserAccounts);

app.listen(3000, function() {
  console.log('listening on 3000')
})


    //MONGO code
//Mongo instance
var db;

//User data objects
var currentUser;
var currentUserAccounts = new Map();

MongoClient.connect("mongodb://Test:Test@ds139187.mlab.com:39187/heroku_vh3f7203", (err, database) => {
  db = database;
})


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
function getUserData(req , res){
  //Construct a query
  var query = { "username" : "Alan Niemiec"};
  //Find one user only in the database
  findOne("Users", query, function (err, item){
    //Log any errors
    if(err) {
      console.log(err);
      return;
    }
    //If user is found create a new user object
    if(item){
      console.log("acc found \n ");
      currentUser = new userData(item.username, item.pin, item.deviceid, item.accounts, item.payees);
      console.log(currentUser);
    }
  });
}
//END OF GETUSERDATA

//Find the data in collection
function getUserAccounts(){
  //Constuct the query
  var query = {"accountnumber" : "123456"};

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
//END OF GETUSERACCOUNTS






















//OBJECT definitions
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
function transaction(date, typeOf, amount, summaryOf){
  //Date of the transaction
  this.date = date;
  //The type of transaction credit or debit
  this.typeOf = typeOf;
  //The amount that has been transferred
  this.amount = amount;
  //A short summary of the transaction
  this.summaryOf = summaryOf;
}
