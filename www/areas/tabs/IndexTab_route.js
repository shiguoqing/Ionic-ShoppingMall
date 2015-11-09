angular.module('APT.indexTab.route', ['APT.indexTab.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      // 首页tab的虚拟路由
      .state('indexTab', {
        url: "/indexTab",
        cache:false,
        abstract: true,
        templateUrl: "areas/tabs/indexTab.html",
        controller: 'IndexTabCtrl'
      });
  });
