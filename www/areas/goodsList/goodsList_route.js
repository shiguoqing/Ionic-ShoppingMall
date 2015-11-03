angular.module('APT.goodsList.route', ['APT.goodsList.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('goodsList', {
        url: '/goodsList/:typeNumber',
        templateUrl: 'areas/goodsList/goodsList.html',
        controller: 'GoodsListCtrl'
      })
  });
