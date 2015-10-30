/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商城首页
 ******************************************************/
angular.module('APT.home.controller', [])
  .controller('HomeCtrl', ['$scope', '$state','$ionicSlideBoxDelegate', function ($scope, $state,$ionicSlideBoxDelegate) {

    $scope.$on('$ionicView.enter', function (e) {
      getHeaderSlideData();
    });

    initHeaderSlide();
    headerChangeColor();

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

    }

    // 初始化头部滚动条
    function initHeaderSlide(){
      var mySwiper = new Swiper('#headerSlider', {
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

    // 改变头部颜色
    function headerChangeColor(){
      var bg=window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<.85){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }


  }]);
