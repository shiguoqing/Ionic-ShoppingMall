// Ionic项目路由配置
angular.module('route', [
  'APT.canvas.route','APT.guidePage.route',
  'APT.login.route','APT.indexTab.route',
  'APT.home.route','APT.category.route',
  'APT.cart.route','APT.account.route',
  'APT.goodsList.route','APT.details.route',
  'APT.search.route'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // 如果不是第一次登陆，直接跳转
    if(localStorage["isFirst"]){
      $urlRouterProvider.otherwise('/indexTab/home');
    }
    else{
      $urlRouterProvider.otherwise('/guidePage');
    }

  });
