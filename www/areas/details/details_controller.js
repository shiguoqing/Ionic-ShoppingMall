/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商品详细页面
 ******************************************************/
angular.module('APT.details.controller', [])
  .controller('DetailsCtrl', ['$scope', '$ionicHistory','$state','$stateParams', function ($scope, $ionicHistory,$state,$stateParams) {

    $scope.$on('$ionicView.enter', function (e) {

    });

    $scope.obj_cartCount={
      count:localStorage["cartCount"]
    }

    $scope.obj_goodsInfo={
      goodsId:"20078KM138",
      description:"若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise:"",
      picture:[],
      isFork:false
    }


    /**
     *加入购物车方法
     */
    $scope.func_addToCart=function(){
      localStorage["cartCount"]=2;
      $scope.obj_cartCount.count++;
      Todo:加入购物车数量加一
      Todo:h5存储

    }

    // 返回按钮方法
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
  }]);
