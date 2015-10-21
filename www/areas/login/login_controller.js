/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：用户登陆
 ******************************************************/
angular.module('APT.login.controller', [])
  .controller('LoginCtrl', ['$scope', '$ionicHistory', function ($scope, $ionicHistory) {

    $scope.$on('$ionicView.enter', function (e) {
      init();
    });

    function init(){

    }

    // 返回按钮方法
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
  }]);
