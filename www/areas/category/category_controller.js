/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：分类
 ******************************************************/
angular.module('APT.category.controller', [])
  .controller('CategoryCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.$on('$ionicView.enter', function (e) {
    });

    // 返回按钮方法
    $scope.start = function () {
      $state.go("home");
    };
  }]);
