angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('userService', [function() {
    //Current user userName
    var userName ;
    var selectedAccountValue ;
    var accountDetails;

    //Return the userName
    this.getUserName = function() {
      return userName;
    }

    //Set the userName
    this.setUserName = function(user){
      userName = user;
    }

    //Get the currently selected account for /Accounts page
    this.getSelectedAccount = function() {
      return this.selectedAccountValue;
    }

    //Set the currently selected account for /Accounts page
    this.setSelectedAccount = function(selectedAccountValue){
      this.selectedAccountValue = selectedAccountValue;
    }

    //Set the account details
    this.setAccountDetails = function(accountDetails){
      this.accountDetails = accountDetails;
    }

    //Get the account details
    this.getAccountDetails = function(){
      return this.accountDetails;
    }

    //GetAccountBalance
    this.getAccountBalance = function(currentAcc){
      for (x in accountDetails){
        if(accountDetails[x].accid == currentAcc){
          return accountDetails[x].balance;
        }
      }
    }

}]);
