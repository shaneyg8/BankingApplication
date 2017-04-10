angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider, lockProvider, jwtOptionsProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('tabsController.aCCOUNTDETAILS', {
    url: '/accountdetails',
    views: {
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

  .state('tabsController.login', {
    url: '/login',
    views: {
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      }
    }
    })

  .state('tabsController.tERMSCONDITIONS', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/tERMSCONDITIONS.html',
        controller: 'tERMSCONDITIONSCtrl'
      }
    }
  })

  .state('tabsController.lOCATION', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/lOCATION.html',
        controller: 'lOCATIONCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  // if none of the above states are matched, use this as the fallback
      //$urlRouterProvider.otherwise('/');
      $urlRouterProvider.otherwise('/page1/login');
      //$urlRouterProvider.otherwise('/login');
      lockProvider.init({
        clientID: AUTH0_CLIENT_ID,
        domain: AUTH0_DOMAIN,
        options: {
          auth: {
            redirect: true,
            //http://localhost:8100/#/page1/accounts
            redirectUrl : location.href + '#/page1/accounts',
            sso: false,
            params: {
              scope: 'openid',
              device: 'Mobile device'
            }
          }
        }
      });
    //  console.log("redirectUrl on routes: " + location.href + '#/page1/accounts');

      // Configuration for angular-jwt
      jwtOptionsProvider.config({
        tokenGetter: function() {
          return localStorage.getItem('id_token');
        },
        whiteListedDomains: ['localhost'],
        unauthenticatedRedirectPath: '/login'
      });

});
