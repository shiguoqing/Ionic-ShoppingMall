angular.module('APT.home.route', ['APT.home.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('indexTab.home', {
        url: '/home',
        views: {
          'indexTab-home': {
            templateUrl: 'areas/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      });
  });
