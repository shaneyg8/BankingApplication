angular.module('app.controllers', ['app.services','ionic'])


.controller('LoginController', ['$scope', '$stateParams',  'authService' ,
function ($scope, $stateParams, authService) {
  var vm = this;

function doLogin() {
  authService.login();
  //console.log(JSON.stringify(authService.userProfile.email));
}

doLogin();
}])

.controller('aCCOUNTSCtrl', ['$scope', '$stateParams', '$http', 'userService',
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


.controller('aCCOUNTDETAILSCtrl', ['$scope', '$stateParams', '$http', 'userService',
function ($scope, $stateParams, $http, userService) {

      var accs = userService.getAccountDetails();
      for (x in accs){
        if(accs[x].accid == userService.getSelectedAccount()){
          $scope.accountNumber = accs[x].accid;
          $scope.accountBalance = accs[x].balance;
        }
      }


      $http({

        method: 'POST',

        url: 'https://mobilebanking.herokuapp.com/account',

        origin: 'http://localhost:8100',

        dataType: "JSON",

        data : "accid="+userService.getSelectedAccount() ,

        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).success(function(response) {
        $scope.transInfo = response.transactions;

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
          console.log('failure');
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });
}])

.controller('tRANSFERSCtrl', ['$scope', '$stateParams', 'authService' ,
function ($scope, $stateParams) {


}])

.controller('tRANSFERTOANOTHERACCOUNTCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('pAYEEDETAILSCtrl', ['$scope', '$stateParams', '$http','userService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, userService) {

    $scope.submitPayee = function(PayeeName, PayeeAccountNumber){
        console.log("triggered");
        console.log(PayeeName);
        console.log(PayeeAccountNumber);

        //Create a custom HTTP POST request to add a new payee to the logged in user
       $http({
         //Type of request - used POST since it is more secure than GET
         method: 'POST',
         //The URL to which call will be made
         url: 'https://mobilebanking.herokuapp.com/payee',
         //The origin of the requeset (Current host)
         origin: 'http://localhost:8100',
         //The type of data being sent
         dataType: "JSON",

         //The data sent with which to query
         data : "username="+userService.getUserName()+"&name="+PayeeName+"&account="+PayeeAccountNumber,
         //The header for the call being made
         headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
         }).then(function successCallback(response) {
             //Function activated if data is succesfully returned
             console.log('success');
             console.log(response.data);
             $scope.payeeConfirmation = "The payee has been added."


            // console.log($scope.payeeInfoAcc);
           }, function errorCallback(response) {
               console.log('failure');
               $scope.payeeConfirmation = "An error has occured while adding to the database."
               // called asynchronously if an error occurs
               // or server returns response with an error status.
           });
    }
}])

.controller('pAYMENTCtrl', ['$scope', '$stateParams', '$http', 'userService',
function ($scope, $stateParams, $http, userService) {
 $scope.sendTransaction = function(payfrom, payto, amount, message){

   var currentUser = userService.getUserName();
   var accbalance ;

   var accs = userService.getAccountDetails();
   for (x in accs){
     if(accs[x].accid == payfrom){
       accBalance = accs[x].balance;
     }
   }

   var dataString = "username="+currentUser+
                    "&currentbalance="+accBalance+
                    "&accountid="+payfrom+
                    "&amount="+amount+
                    "&summary="+message+
                    "&type="+"credit"+
                    "&date="+"27/04/2017"

  console.log(dataString);
   $http({
     //Type of request - used POST since it is more secure than GET
     method: 'POST',
     //The URL to which call will be made
     url: 'https://mobilebanking.herokuapp.com/transaction',
     //The origin of the requeset (Current host)
     origin: 'http://localhost:8100',
     //The type of data being sent
     dataType: "JSON",

     //The data sent with which to query
     data : dataString,
     //The header for the call being made
     headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
     }).then(function successCallback(response) {
         //Function activated if data is succesfully returned
         console.log('success');

       }, function errorCallback(response) {
           console.log('failure');
           // called asynchronously if an error occurs
           // or server returns response with an error status.
       });
      $scope.paymentStatus = "Transfer complete.";
 }

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

.controller('tRANSACTIONSCtrl', ['$scope', '$stateParams','$http','authService',
function ($scope, $stateParams, $http) {

}])

.controller('mORECtrl', ['$scope', '$stateParams', 'authService' ,
function ($scope, $stateParams) {


}])

.controller('aBOUTUSCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])


.controller('lOCATIONCtrl', ['$scope', '$stateParams','$cordovaGeolocation','authService',
function ($scope, $stateParams, $cordovaGeolocation) {
   var options = {timeout: 10000, enableHighAccuracy: true};

   $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(53.27842930000001, -9.011151100000006);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });
  var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
              'sandstone rock formation in the southern part of the '+
              'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
              'south west of the nearest large town, Alice Springs; 450&#160;km '+
              '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
              'features of the Uluru - Kata Tjuta National Park. Uluru is '+
              'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
              'Aboriginal people of the area. It has many springs, waterholes, '+
              'rock caves and ancient paintings. Uluru is listed as a World '+
              'Heritage Site.</p>'+
              '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '(last visited June 22, 2009).</p>'+
              '</div>'+
              '</div>';

  var infoWindow = new google.maps.InfoWindow({
      content: "<h1>GMIT Bank, Dublin Road</h2>"+
                "<p>Opening Times: </p>"+
                "<p>Monday:     9:00 - 17:00</p>"+
                "<p>Tuesday:    9:00 - 17:00</p>"+
                "<p>Wednesday:  9:00 - 17:00</p>"+
                "<p>Thursday:   9:00 - 17:00</p>"+
                "<p>Friday:     9:00 - 17:00</p>"+
                "<p>Saturday:     Closed</p>"+
                "<p>Sunday:       Closed</p>"
  });

  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
});

  }, function(error){
    console.log("Could not get location");


  });

}])


.controller('menuCtrl', ['$scope', '$stateParams', 'authService',
function ($scope, $stateParams) {


}])
