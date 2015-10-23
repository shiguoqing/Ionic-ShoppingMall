angular.module('APT.indexTab.route', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      // 首页tab的虚拟路由
      .state('indexTab', {
        url: "/indexTab",
        abstract: true,
        templateUrl: "areas/tabs/indexTab.html"
      });

      //.state('indexTab.home', {
      //  url: '/home',
      //  views: {
      //    'indexTab-home': {
      //      templateUrl: 'areas/home/home.html',
      //      controller: 'HomeCtrl'
      //    }
      //  }
      //})
      //.state('indexTab.home', {
      //  url: '/home',
      //  views: {
      //    'indexTab-home': {
      //      templateUrl: 'areas/home/home.html',
      //      controller: 'HomeCtrl'
      //    }
      //  }
      //})
      //.state('indexTab.home', {
      //  url: '/home',
      //  views: {
      //    'indexTab-home': {
      //      templateUrl: 'areas/home/home.html',
      //      controller: 'HomeCtrl'
      //    }
      //  }
      //})
  });
