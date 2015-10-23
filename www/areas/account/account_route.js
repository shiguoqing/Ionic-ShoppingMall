angular.module('APT.account.route', ['APT.account.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('indexTab.account', {
        url: '/account',
        views: {
          'indexTab-account': {
            templateUrl: 'areas/account/account.html',
            controller: 'AccountCtrl'
          }
        }
      });
  });
