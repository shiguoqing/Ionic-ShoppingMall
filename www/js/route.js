// Ionic项目路由配置
angular.module('route', ['APT.canvas.route','APT.guidePage.route','APT.login.route','APT.indexTab.route','APT.home.route','APT.category.route','APT.cart.route','APT.account.route'])
  .config(function ($stateProvider, $urlRouterProvider) {
    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/guidePage');
    $urlRouterProvider.otherwise('/indexTab/home');

  });
