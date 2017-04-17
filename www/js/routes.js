angular.module('app.routes', ['ionicUIRouter', 'app.services'])

.config(function($stateProvider, $urlRouterProvider, lockProvider, jwtOptionsProvider) {

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



  .state('tabsController.pAYEEDETAILS', {
    url: '/payeedetails',
	views: {
      'tab2': {
    templateUrl: 'templates/pAYEEDETAILS.html',
    controller: 'pAYEEDETAILSCtrl'
	}
	}
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
      'tab5': {
        templateUrl: 'templates/login.html',
      }
    }
    })

/**
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })**/

  .state('tabsController.aBOUTUS', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/aBOUTUS.html',
        controller: 'aBOUTUSCtrl'
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
          closable: false,
          auth: {
            redirect: true,
            //http://localhost:8100/#/page1/accounts
            redirectUrl : location.href + '#/page1/accounts',
            sso: false,
            params: {
              scope: 'openid email user_metadata',
              device: 'Mobile device'
            }
          }
        }
      });

      // Configuration for angular-jwt
      jwtOptionsProvider.config({
        tokenGetter: function() {
          return localStorage.getItem('id_token');
        },
        whiteListedDomains: ['localhost'],
        unauthenticatedRedirectPath: '/login'
      });

});
