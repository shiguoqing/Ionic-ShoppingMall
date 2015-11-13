/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：搜索页面
 ******************************************************/
angular.module('APT.search.controller', [])
  .controller('SearchCtrl', ['$scope', '$ionicHistory','$state','$ionicModal', function ($scope, $ionicHistory,$state,$ionicModal) {

    $scope.$on('$ionicView.enter', function (e) {

    });


    $scope.func_openModal = function(templeHtml) {

      // 筛选条件modal窗口
      $ionicModal.fromTemplateUrl(templeHtml, {
        scope: $scope,
        animation: "slide-in-up"
      }).then(function(modal) {
        modal.show();
        $scope.modal = modal;
      });


      $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
      };

      //Cleanup the modal when we are done with it!
      $scope.$on("$destroy", function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on("modal.hidden", function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on("modal.removed", function() {
        // Execute action
      });

    };








  }]);
