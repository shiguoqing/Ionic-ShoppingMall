/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：分类
 ******************************************************/
angular.module('APT.category.controller', [])
  .controller('CategoryCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.$on('$ionicView.enter', function (e) {
      getCategoryData();
      $scope.getCategoryDetailData(102);
    });
    categoryLeftClick();


    //$scope.$on('$ionicView.loaded', function (e) {
    //  categoryLeftClick();
    //});

    function getCategoryData(){
      $scope.categoryData=[
        {
          name:"热门推荐",
          typeNumber:'101'
        },
        {
          name:"潮流女装",
          typeNumber:'102'
        },
        {
          name:"品牌男装",
          typeNumber:'103'
        },
        {
          name:"内衣配饰",
          typeNumber:'104'
        },
        {
          name:"家用电器",
          typeNumber:'105'
        },
        {
          name:"电脑办公",
          typeNumber:'106'
        },
        {
          name:"手机数码",
          typeNumber:'107'
        },
        {
          name:"母婴频道",
          typeNumber:'108'
        },
        {
          name:"图书",
          typeNumber:'109'
        },
        {
          name:"家居家纺",
          typeNumber:'110'
        },
        {
          name:"居家生活",
          typeNumber:'111'
        },
        {
          name:"家具建材",
          typeNumber:'112'
        },
        {
          name:"热门推荐",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },
        {
          name:"居家生活",
          typeNumber:'101'
        },{
          name:"居家生活",
          typeNumber:'101'
        }
      ];

    };

    // 头部滚动条数据
    $scope.getCategoryDetailData=function(typeNumber){
      $scope.categoryDetailData=[
        {
          name:"毛呢大衣",
          src:"img/category/nz1.jpg",
          typeNumber:'10001'
        },
        {
          name:"羽绒服",
          src:"img/category/nz2.jpg",
          typeNumber:'10002'
        },
        {
          name:"针织衫",
          src:"img/category/nz3.jpg",
          typeNumber:'10003'
        },
        {
          name:"连衣裙",
          src:"img/category/nz4.jpg",
          typeNumber:'10004'
        },
        {
          name:"棉服",
          src:"img/category/nz5.jpg",
          typeNumber:'10005'
        },
        {
          name:"长袖T恤",
          src:"img/category/nz6.jpg",
          typeNumber:'10006'
        },
        {
          name:"羊绒衫",
          src:"img/category/nz7.jpg",
          typeNumber:'10007'
        },
        {
          name:"衬衫",
          src:"img/category/nz8.jpg",
          typeNumber:'10008'
        },
        {
          name:"风衣",
          src:"img/category/nz9.jpg",
          typeNumber:'10009'
        },
        {
          name:"皮衣",
          src:"img/category/nz10.jpg",
          typeNumber:'10010'
        },
        {
          name:"休闲裤",
          src:"img/category/nz11.jpg",
          typeNumber:'10011'
        },
        {
          name:"牛仔裤",
          src:"img/category/nz12.jpg",
          typeNumber:'10012'
        }
      ];

    };

    // 左侧分类单击事件
    function categoryLeftClick(){
      var nav=document.getElementById('nav');
      var oLi=nav.getElementsByTagName('ul')[0].getElementsByTagName('li');
      for(var i=0;i<oLi.length;i++){
        oLi[i].onclick=function(){
          for(var j=0;j<oLi.length;j++){
            oLi[j].className='nav-blur';
          }
          this.className='nav-current';
        }
      }
    }


  }]);
