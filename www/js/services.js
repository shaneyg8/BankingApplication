angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('userService', [function() {
    //Current user userName
    var userName = "alanniemiec";
    var selectedAccountValue ;
    var accountDetails;

    //Return the userName
    this.getUserName = function() {
      return userName;
    }

    //Set the userName
    this.setUserName = function(userName){
      this.userName = userName;
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
      console.log(this.accountDetails);
    }

    //Get the account details
    this.getAccountDetails = function(){
      return accountDetails;
    }

}]);
