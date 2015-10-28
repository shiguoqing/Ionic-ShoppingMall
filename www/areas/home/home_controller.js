/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商城首页
 ******************************************************/
angular.module('APT.home.controller', [])
  .controller('HomeCtrl', ['$scope', '$state','$ionicSlideBoxDelegate', function ($scope, $state,$ionicSlideBoxDelegate) {

    $scope.$on('$ionicView.enter', function (e) {
      homeInit();
    });

    function homeInit(){
      getHeaderSlideData();
    }

    // 头部滚动条数据
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"双十一预热主场会",
          src:"img/home/home-headerSlide-1.jpg"
        },
        {
          alt:"11月11天家电低价不停歇",
          src:"img/home/home-headerSlide-2.jpg"
        },
        {
          alt:"家具盛典 好货提前抢",
          src:"img/home/home-headerSlide-3.jpg"
        },
        {
          alt:"IT抢券节",
          src:"img/home/home-headerSlide-4.jpg"
        },
        {
          alt:"潮流数码 双11爽购攻略",
          src:"img/home/home-headerSlide-5.jpg"
        }
      ];

      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 改变自动更新
        observer:true,
        observeParents:true
      });



    }

    $scope.onSlideChange=function(){
      if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
        setTimeout(function(){
          $ionicSlideBoxDelegate.slide(0,1000);
        },2000);
      }
    }

  }]);
