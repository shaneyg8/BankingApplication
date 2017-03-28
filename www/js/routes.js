angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aCCOUNTDETAILS'
      2) Using $state.go programatically:
        $state.go('tabsController.aCCOUNTDETAILS');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/accountdetails
      /page1/tab1/accountdetails
  */
  .state('tabsController.aCCOUNTDETAILS', {
    url: '/accountdetails',
    views: {
      'tab4': {
        templateUrl: 'templates/aCCOUNTDETAILS.html',
        controller: 'aCCOUNTDETAILSCtrl'
      },
      'tab1': {
        templateUrl: 'templates/aCCOUNTDETAILS.html',
        controller: 'aCCOUNTDETAILSCtrl'
      }
    }
  })

  .state('tabsController.aCCOUNTS', {
    url: '/accounts',
    views: {
      'tab4': {
        templateUrl: 'templates/aCCOUNTS.html',
        controller: 'aCCOUNTSCtrl'
      }
    }
  })

  .state('tabsController.tRANSFERS', {
    url: '/transfers',
    views: {
      'tab2': {
        templateUrl: 'templates/tRANSFERS.html',
        controller: 'tRANSFERSCtrl'
      }
    }
  })

  .state('tabsController.tRANSFERTOANOTHERACCOUNT', {
    url: '/transfertoanotheraccount',
    views: {
      'tab2': {
        templateUrl: 'templates/tRANSFERTOANOTHERACCOUNT.html',
        controller: 'tRANSFERTOANOTHERACCOUNTCtrl'
      }
    }
  })

  .state('pAYEEDETAILS', {
    url: '/payeedetails',
    templateUrl: 'templates/pAYEEDETAILS.html',
    controller: 'pAYEEDETAILSCtrl'
  })

  .state('tabsController.pAYMENT', {
    url: '/payment',
    views: {
      'tab2': {
        templateUrl: 'templates/pAYMENT.html',
        controller: 'pAYMENTCtrl'
      }
    }
  })

  .state('tabsController.tRANSACTIONS', {
    url: '/transactions',
    views: {
      'tab2': {
        templateUrl: 'templates/tRANSACTIONS.html',
        controller: 'tRANSACTIONSCtrl'
      }
    }
  })

  .state('tabsController.mORE', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/mORE.html',
        controller: 'mORECtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/accounts')



});
