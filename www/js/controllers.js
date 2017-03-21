angular.module('app.controllers', [])

//Passing data between controllers :http://stackoverflow.com/questions/36163989/how-to-pass-data-between-pages-in-ionic-app
.value('currentUser', 'The Matrix')

.controller('aCCOUNTDETAILSCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

  //Create a custom HTTP POST request and query the external API
  $http({
    //Type of request - used POST since it is more secure than GET
    method: 'POST',
    //The URL to which call will be made
    url: 'http://localhost:3000/user',
    //The origin of the requeset (Current host)
    origin: 'http://localhost:8100',
    //The type of data being sent
    dataType: "JSON",
    //The data sent with which to query
    //This is not in JSON format so should be investigated for safety
    //Might be posted through url - need to verify
    data : "username=Alan Niemiec&pin=2345" ,
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

.controller('pAYEEDETAILSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('pAYEMENTCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tRANSACTIONSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
