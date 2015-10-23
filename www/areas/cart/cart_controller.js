/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：购物车
 ******************************************************/
angular.module('APT.cart.controller', [])
  .controller('CartCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.$on('$ionicView.enter', function (e) {
    });

    // 返回按钮方法
    $scope.start = function () {
      $state.go("home");
    };
  }]);
