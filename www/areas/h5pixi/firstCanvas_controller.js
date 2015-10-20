/******************************************************
 创建人：石国庆          创建时间：2015.08.25
 创建人：                修改时间：
 功  能：H5页面
 ******************************************************/
angular.module('APT.firstCanvas.controller', ['APT.firstCanvas.service'])
  // 审批功能虚拟路由控制器
  .controller('FirstCanvasCtrl', ['$scope', '$ionicHistory', function ($scope, $ionicHistory) {

    $scope.$on('$ionicView.enter', function (e) {
    });

    // 返回按钮方法
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
  }]);
