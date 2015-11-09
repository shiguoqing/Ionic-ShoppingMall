/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商品列表页面
 ******************************************************/
angular.module('APT.goodsList.controller', ['APT.goodsList.service'])
  .controller('GoodsListCtrl', ['$scope', '$ionicHistory','$state','GoodsListFty','CommonJs','$stateParams','$ionicLoading','$timeout',
    function ($scope, $ionicHistory,$state,GoodsListFty,CommonJs,$stateParams,$ionicLoading,$timeout) {

      $scope.$on('$stateChangeSuccess', function(e) {
        $scope.func_refreshGoodsList();
      });

      $scope.$on('$ionicView.enter', function (e) {

      });

      // 数据对象
      $scope.obj_goodsListData=null;
      // 有更多数据可以加载
      $scope.pms_isMoreItemsAvailable =true;
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
        pageNum: 1,
        pageSize: 10,
        sortFlag: "0",
        sortType: "desc",
        typeNumber:""
      };


      /**
       * 下拉刷新方法
       */
      $scope.func_refreshGoodsList = function () {
        $scope.obj_pagingInfo.pageNum = 1;
        $scope.obj_pagingInfo.typeNumber= $stateParams.typeNumber;
        console.log('刷新'+$scope.obj_pagingInfo.pageNum);
        var message = JSON.stringify($scope.obj_pagingInfo);

        var promise = GoodsListFty.refreshGoodsList(message);
        promise.then(
          function (result) {
            $scope.obj_goodsListData = result;
          },
          function (reason) {
            CommonJs.AlertPopup("抱歉,请求数据失败！");
          }
        ).finally(function () {
            // 刷新完毕要广播刷新完毕事件
            $scope.$broadcast('scroll.refreshComplete');
          });
      };

      /**
       * 上拉加载更多方法
       */
      $scope.func_loadMoreGoodsList = function () {
        $ionicLoading.show({
          template: "正在载入数据，请稍后..."
        });

        $scope.obj_pagingInfo.pageNum = $scope.obj_pagingInfo.pageNum + 1;
        $scope.obj_pagingInfo.typeNumber= $stateParams.typeNumber;
        console.log('加载更多'+$scope.obj_pagingInfo.pageNum);
        var message = JSON.stringify($scope.obj_pagingInfo);

        var promise = GoodsListFty.loadMoreGoodsList(message);
        promise.then(
          function (result) {
            if(result!=null){
              $.each(result,function(i,item){
                $scope.obj_goodsListData.push(item);
              });
            }else{
              $scope.pms_isMoreItemsAvailable=false;
            }
          },
          function (reason) {
            CommonJs.AlertPopup("抱歉,请求数据失败！");
          }
        ).finally(function () {
            // 加载更多完毕要广播刷新完毕事件
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $timeout(function(){
              $ionicLoading.hide();
            },2000);
          });
      };

      // 返回按钮方法
      $scope.goBack = function () {
        $ionicHistory.goBack();
      };


    }
  ]);
