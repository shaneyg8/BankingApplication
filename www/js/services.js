angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('userService', [function() {
    //Current user userName
    var userName = "alanniemiec";
    var selectedAccountValue = "654321"

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

}]);
