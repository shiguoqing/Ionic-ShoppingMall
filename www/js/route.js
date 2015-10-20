// Ionic项目路由配置
angular.module('route', ['APT.firstCanvas.route','APT.guidePage.route'])
  .config(function ($stateProvider, $urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/approvalAnnex/34');
    $urlRouterProvider.otherwise('/guidePage');

  });
