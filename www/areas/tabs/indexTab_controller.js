angular.module('APT.indexTab.controller', [])
  .controller('IndexTabCtrl', ['$scope', '$ionicHistory','$state', function ($scope, $ionicHistory,$state) {

    $scope.$on('$ionicView.enter', function (e) {

    });

    $scope.data={
      badge:45
    }

  }]);
