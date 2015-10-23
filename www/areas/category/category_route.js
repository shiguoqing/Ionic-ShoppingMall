angular.module('APT.category.route', ['APT.category.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('indexTab.category', {
        url: '/category',
        views: {
          'indexTab-category': {
            templateUrl: 'areas/category/category.html',
            controller: 'CategoryCtrl'
          }
        }
      });
  });
