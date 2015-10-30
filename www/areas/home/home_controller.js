/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：商城首页
 ******************************************************/
angular.module('APT.home.controller', [])
  .controller('HomeCtrl', ['$scope', '$state','$ionicSlideBoxDelegate','$window', function ($scope, $state,$ionicSlideBoxDelegate,$window) {

    $scope.$on('$ionicView.enter', function (e) {
      getHeaderSlideData();
    });

    headerChangeColor();
    initHeaderSlide();
    initToutiaoSlide();
    countdown();



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


    // 改变头部颜色
    function headerChangeColor(){
      var bg=$window.document.getElementById('home-content');
      var nowOpacity=0;
      bg.onscroll=function(event){
        if(this.scrollTop/250<.85){
          nowOpacity=this.scrollTop/250;
        }
        document.getElementById("headerBar-bg").style.opacity=nowOpacity;
      }
    }


    // 初始化头部滚动条
    function initHeaderSlide(){
      var headerSwiper = new Swiper('#headerSlider', {
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

    // 初始化头部滚动条
    function initToutiaoSlide(){
      var toutiaoSwiper = new Swiper('#toutiaoSlider', {
        direction:'vertical',
        autoplay: 2000,
        loop: true
      });
    }

    // 秒杀计时器
    function countdown(){
      // 倒计时
      var timeObj={
        h:1,
        m:37,
        s:13
      };
      var timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      var timeList=document.getElementsByClassName('time-text');
      for(var i=0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
      function toDouble(num){
        if(num<10){
          return '0'+num;
        }else{
          return ''+num;
        }
      }
      var timer=null;
      timer=setInterval(function(){
        timeObj.s--;
        if(timeObj.s==-1){
          timeObj.m--;
          timeObj.s=59;
        }
        if(timeObj.m==-1){
          timeObj.h--;
          timeObj.m=59;
        }
        if(timeObj.h==-1){
          timeObj.h=0;
          timeObj.m=0;
          timeObj.s=0;
          clearInterval(timer);
        }
        timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
        for(var i=0;i<timeList.length;i++){
          timeList[i].innerHTML=timeStr[i];
        }
      },1000)
    }

  }]);
