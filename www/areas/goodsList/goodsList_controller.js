/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商品列表页面
 ******************************************************/
angular.module('APT.goodsList.controller', ['APT.goodsList.service'])
  .controller('GoodsListCtrl', ['$scope', '$ionicHistory','$state','GoodsListFty','CommonJs', function ($scope, $ionicHistory,$state,GoodsListFty,CommonJs) {

    // 数据对象
    $scope.obj_goodsListData=null;
    // 有更多数据可以加载
    $scope.pms_isMoreItemsAvailable = true;
    // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: "1",
      pageSize: "10",
      sortFlag: "0",
      sortType: "desc"
    };


    $scope.$on('$ionicView.enter', function (e) {
      $scope.func_refreshGoodsList();
    });


    /**
     * 下拉刷新方法
     */
    $scope.func_refreshGoodsList = function () {
      $scope.obj_pagingInfo.pageNum = "1";
      var message = JSON.stringify($scope.obj_pagingInfo);
      // 获取分类信息列表
      var promise = GoodsListFty.refreshGoodsList(message);
      promise.then(
        function (result) {
          //$scope.obj_goodsListData = JSON.parse(result.resultData);
          $scope.obj_goodsListData = result;
          // 加载更多配置3-设置没有更多可以加载
          //$scope.isMoreItemsAvailable = true;
        },
        function (reason) {
          CommonJs.AlertPopup("抱歉,请求数据失败！");
        }
      ).finally(function () {
          // 刷新完毕要广播刷新完毕事件
          $scope.$broadcast('scroll.refreshComplete');
        });
    };

  }]);
