angular.module('app.controllers', ['app.services'])


.controller('aCCOUNTSCtrl', ['$scope', '$stateParams', '$http', 'userService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, userService) {

    //This function listens to changes in the account selection and maps
    //it to a value in the scope for further use
    $scope.chooseAccount = function(accountSelection) {
    //Set the value in the service to the new account value
    userService.setSelectedAccount(accountSelection);
  }

  //HTTP request for the user account data
    $http({

        method: 'POST',

        url: 'https://mobilebanking.herokuapp.com/user',

        origin: 'http://localhost:8100',

        dataType: "JSON",

        data : "username="+userService.getUserName()+"&pin=2345" ,

        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function successCallback(response) {
        //Function activated if data is succesfully returned
        //Set the ionic Scope variables for this page based on
        // the data to display
        // when the response is available
        userService.setAccountDetails(response.data.accounts);
        $scope.accInfo = response.data.accounts;

      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });

}])


.controller('aCCOUNTDETAILSCtrl', ['$scope', '$stateParams', '$http', 'userService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, userService) {



  /**
  //Create a custom HTTP POST request and query the external API
  $http({
    //Type of request - used POST since it is more secure than GET
    method: 'POST',
    //The URL to which call will be made
    url: 'https://mobilebanking.herokuapp.com/user',
    //The origin of the requeset (Current host)
    origin: 'http://localhost:8100',
    //The type of data being sent
    dataType: "JSON",
    //The data sent with which to query
    //This is not in JSON format so should be investigated for safety
    //Might be posted through url - need to verify
    data : "username=alanniemiec&pin=2345" ,
    //The header for the call being made
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(function successCallback(response) {
        //Function activated if data is succesfully returned
        console.log('success');
        console.log(response.data);

        //Set the ionic Scope variables for this page based on
        // the data to display
        $scope.ownerName = response.data.username;
        $scope.accountNumber = response.data.accounts[0].accid;
        $scope.accountBalance = response.data.accounts[0].balance;
        console.log(accountNumber);

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });
**/


      //$scope.ownerName = response.data.username;
      //$scope.accountNumber = response.data.accounts[0].accid;
      //$scope.accountBalance = response.data.accounts[0].balance;
      console.log(userService.getAccountDetails());
      console.log(userService.getSelectedAccount());
      for (account in userService.getAccountDetails()){
        console.log("account : " + account);
      }
      //console.log(userService.getAccountDetails());
      //$scope.transInfo = null;
      $http({

        method: 'POST',

        url: 'https://mobilebanking.herokuapp.com/account',

        origin: 'http://localhost:8100',

        dataType: "JSON",

        data : "accid="+userService.getSelectedAccount() ,

        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).success(function(response) {
        //Function activated if data is succesfully returned
        console.log('success');
        //console.log(respone);

        $scope.transInfo = response.transactions;

        //console.log($scope.transInfo);

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });


}])

.controller('tRANSFERSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('tRANSFERTOANOTHERACCOUNTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('pAYEEDETAILSCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

	 //Create a custom HTTP POST request to add a new payee to the logged in user
  $http({
    //Type of request - used POST since it is more secure than GET
    method: 'POST',
    //The URL to which call will be made
    url: 'https://mobilebanking.herokuapp.com/user',
    //The origin of the requeset (Current host)
    origin: 'http://localhost:8100',
    //The type of data being sent
    dataType: "JSON",

    //The data sent with which to query
    //This is not in JSON format so should be investigated for safety
    //Might be posted through url - need to verify
    data : "username=alanniemiec&pin=2345",
    //The header for the call being made
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(function successCallback(response) {
        //Function activated if data is succesfully returned
        console.log('success');
        console.log(response.data);


       // console.log($scope.payeeInfoAcc);
      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });


}])

.controller('pAYMENTCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

	 //Create a custom HTTP POST request and query the external API
  $http({
    //Type of request - used POST since it is more secure than GET
    method: 'POST',
    //The URL to which call will be made
    url: 'https://mobilebanking.herokuapp.com/user',
    //The origin of the requeset (Current host)
    origin: 'http://localhost:8100',
    //The type of data being sent
    dataType: "JSON",

    //The data sent with which to query
    //This is not in JSON format so should be investigated for safety
    //Might be posted through url - need to verify
    data : "username=alanniemiec&pin=2345",
    //The header for the call being made
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(function successCallback(response) {
        //Function activated if data is succesfully returned
        console.log('success');
        console.log(response.data);
        //select which account you want to transfer money from
        $scope.transferMoney = response.data.accounts;
        //select which existing payee you want to transfer money too
        $scope.selectPayee = response.data.payees;

        console.log($scope.selectPayee);

      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });


}])
.controller('tRANSACTIONSCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

	 //Create a custom HTTP POST request and query the external API
  $http({
    //Type of request - used POST since it is more secure than GET
    method: 'POST',
    //The URL to which call will be made
    url: 'https://mobilebanking.herokuapp.com/account',
    //The origin of the requeset (Current host)
    origin: 'http://localhost:8100',
    //The type of data being sent
    dataType: "JSON",

    //The data sent with which to query
    //This is not in JSON format so should be investigated for safety
    //Might be posted through url - need to verify
    data : "accid=654321",
    //The header for the call being made
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).then(function successCallback(response) {
        //Function activated if data is succesfully returned
        console.log('success');
        console.log(response.data);

        //Set the ionic Scope variables for this page based on
        // the data to display



        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });

}])
.controller('mORECtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
