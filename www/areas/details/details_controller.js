/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商品详细页面
 ******************************************************/
angular.module('APT.details.controller', [])
  .controller('DetailsCtrl', ['$scope', '$ionicHistory','$state','$stateParams','IndexdbJs',
    function ($scope, $ionicHistory,$state,$stateParams,IndexdbJs) {

    $scope.$on('$ionicView.enter', function (e) {
    });

    console.log(localStorage["cartCount"]);
    // 获取购物车商品数量
    $scope.obj_cartCount={
      count:localStorage["cartCount"]?localStorage["cartCount"]:null
    }

    // 通过后台获取到的商品详细信息
    $scope.obj_goodsInfo={
      goodsId:"20078KM166",
      description:"若昕 韩版睡衣女冬法兰绒家居服加厚珊瑚绒女人卡通甜美睡衣秋冬套装 66651K 女 M",
      prise:"66",
      picture:[],
      src:"",
      isFork:false
    }

    // 用户选择信息
    $scope.obj_goodsDetailInfo={
      goodsId: $scope.obj_goodsInfo.goodsId,
      isFork:$scope.obj_goodsInfo.isFork,
      description:$scope.obj_goodsInfo.description,
      src:$scope.obj_goodsInfo.src,
      prise:$scope.obj_goodsInfo.prise,
      color:"red",
      size:"s",
      number:1
    }

    /**
     *加入购物车方法
     */
    $scope.func_addToCart=function(){
      IndexdbJs.update("cart",$scope.obj_goodsDetailInfo,function(e){
        // 数据保存成功，购物车数量增加
        if($scope.obj_cartCount.count){
          $scope.obj_cartCount.count++;
          console.log($scope.obj_cartCount.count);
          localStorage["cartCount"]=$scope.obj_cartCount.count;
          $scope.$digest();
        }
        else{
          $scope.obj_cartCount.count=1;
          localStorage["cartCount"]=$scope.obj_cartCount.count;
        }
      },function(e){
        console.log(e);
      })
    }

    // 返回按钮方法
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
  }]);
