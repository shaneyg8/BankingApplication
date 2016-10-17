angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.currentAccount', {
    url: '/currentaccount',
    views: {
      'tab1': {
        templateUrl: 'templates/currentAccount.html',
        controller: 'currentAccountCtrl'
      }
    }
  })

  .state('tabsController.transfers', {
    url: '/transfers',
    views: {
      'tab2': {
        templateUrl: 'templates/transfers.html',
        controller: 'transfersCtrl'
      }
    }
  })

  .state('tabsController.more', {
    url: '/more',
    views: {
      'tab3': {
        templateUrl: 'templates/more.html',
        controller: 'moreCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/currentaccount')

  

});