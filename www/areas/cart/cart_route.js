angular.module('APT.cart.route', ['APT.cart.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'areas/cart/cart.html',
        controller: 'CartCtrl'
      })
    //$stateProvider
    //  .state('indexTab.cart', {
    //    url: '/cart',
    //    views: {
    //      'indexTab-cart': {
    //        templateUrl: 'areas/cart/cart.html',
    //        controller: 'CartCtrl'
    //      }
    //    }
    //  });
  });
