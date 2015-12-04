angular.module('APT.guidePage.route', ['APT.guidePage.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('guidePage', {
        url: '/guidePage',
        templateUrl: 'areas/guidePage/guidePage.html',
        controller: 'GuidePageCtrl'
      })

  });
