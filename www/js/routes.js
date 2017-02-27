angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.aCCOUNTDETAILS', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/aCCOUNTDETAILS.html',
        controller: 'aCCOUNTDETAILSCtrl'
      }
    }
  })

  .state('tabsController.tRANSFERS', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/tRANSFERS.html',
        controller: 'tRANSFERSCtrl'
      }
    }
  })

  .state('tabsController.tRANSFERTOANOTHERACCOUNT', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/tRANSFERTOANOTHERACCOUNT.html',
        controller: 'tRANSFERTOANOTHERACCOUNTCtrl'
      }
    }
  })

  .state('tabsController.pAYEEDETAILS', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/pAYEEDETAILS.html',
        controller: 'pAYEEDETAILSCtrl'
      }
    }
  })

  .state('tabsController.pAYEMENT', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/pAYEMENT.html',
        controller: 'pAYEMENTCtrl'
      }
    }
  })

  .state('tabsController.tRANSACTIONS', {
    url: '/page3',
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

$urlRouterProvider.otherwise('/page1/page2')

  

});