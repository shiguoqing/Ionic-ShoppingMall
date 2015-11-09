/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：用户登陆
 ******************************************************/
angular.module('APT.login.controller', [])
  .controller('LoginCtrl', ['$scope', '$ionicHistory','$state', function ($scope, $ionicHistory,$state) {

    $scope.$on('$ionicView.enter', function (e) {

    });

    // 变量定义
    $scope.loginInfo = {
      userName: "",
      password: "",
      loginError: "",
      hasError: false
    };

    // 登录方法
    $scope.login = function () {
      if($scope.loginInfo.userName=="admin"&&$scope.loginInfo.password=="1"){
        $ionicHistory.goBack();
        //$state.go("indexTab.home");
      }
      else{
        $scope.loginInfo.hasError=true;
        $scope.loginInfo.loginError="用户名或密码不正确，请重新输入！";
      }
    };

  }]);
