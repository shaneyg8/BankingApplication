const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
//var http = require('https');

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

//Get user data, verify by pin
//Test url to access
// http://localhost:3000/user/Alan%20Niemiec/2345
app.post('/user', getUserData);

//Get user account info by account number
//Test url to access
//http://localhost:3000/accounts/123456
app.post('/account', getUserAccounts);

//Add a transaction to the account
//app.post('/accounts/:accountid/:date/:type/:amount:/summary', addTransaction);
//Test url to update database
//http://localhost:3000/account/123456/26-02-2015/credit/25.66/Smyths%20Toys;
app.post('/transaction', addTransaction);

//Add a payee to the user list
app.post('/payee', addPayee);

/**
app.listen(3000, function() {
  console.log('listening on 3000')
})**/


    //MONGO code
//Mongo instance
var db;

//User data objects
var currentUser;
var currentUserAccounts = new Map();

MongoClient.connect("mongodb://Test:Test@ds139187.mlab.com:39187/heroku_vh3f7203", (err, database) => {
  db = database;
  console.log("db connection ready");

  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
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
  console.log("body : ",  req.body);
  console.log(req.body.username, " ", req.body.pin);
  var query = { "username" : req.body.username};
  //Find one user only in the database
  findOne("Users", query, function (err, item){
    //Log any errors
    if(err) {
      console.log(err);
      return;
    }

    //console.log(""+req.body.username+"");
    //console.log(req.body.pin);
    //If user is found create a new user object
    if(item){
      console.log("User has been found");
      //currentUser = new userData(item.username, item.pin, item.deviceid, item.accounts, item.payees);
      //console.log(currentUser);

      if(item.pin == req.body.pin){
        console.log("Pin verified\n");
        res.type('json');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(item);
      }
      else{
        console.log("Pin invalid\n");
        res.status(500).send("Pin Invalid");
      }
    }
    else{
      console.log("User has not been found\n");
      res.status(500).send("User has not been found");
    }
  });
}
//END OF GETUSERDATA





//Return a json with the user accounts
function getUserAccounts(req, res){
  //Constuct the query
  var query = {"accid" : req.body.accid};
  //Find one user only in the database
  findOne("Accounts", query, function (err, item){
    //Log any errors
    if(err) {
      console.log(err);
      return;
    }

    //If result is not empty return the data
    if(item){
      console.log(item);
      console.log("Account has been found");
        res.type('json');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(item);

    }
    else{
      console.log("Account not found\n");
      res.status(500).send("Account has not been found");
    }
  });
}
//END OF GETUSERACCOUNTS

//Add a payee to the given user

function addPayee(req, res, obj){
  console.log(req.body.name +"\n");
  console.log(req.body.account +"\n");

  //Find the correct account and update the transaction subdocument
  db.collection("Users").update(
      {"username" : req.body.username},
      {$push: {"payees":  {"name" : req.body.name, "account" : req.body.account
    }}}
  )
}
//END OF ADDPAYEE




//Add a transaction to the given account
function addTransaction(req, res, obj){
  console.log(req.params.accountid +"\n");
  console.log(req.params.date +"\n");
  console.log(req.params.type +"\n");
  console.log(req.params.amount+ "\n");
  console.log(req.params.summary+ "\n");

  //Find the correct account and update the transaction subdocument
  db.collection("Accounts").update(
      {"accid" : req.body.accountid},
      {$push: {"transactions":  {"date" : req.body.date,
      "type" : req.body.type, "amount" : req.body.amount,"summary" : req.body.summary
    }}}
  )
}
//END OF ADDTRANSACTION
