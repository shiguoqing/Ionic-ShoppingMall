/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：我的
 ******************************************************/
angular.module('APT.account.controller', [])
  .controller('AccountCtrl', ['$scope', '$state', function ($scope, $state) {

    $scope.$on('$ionicView.enter', function (e) {
    });


    var b = document.getElementById("123")
    shake(function(){
      b.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+','+
      Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    });
    b.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+','+
    Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

    function shake(fn){
      var x,y,z,endX,endY,endZ,isRun = false,timer;
      if(window.DeviceMotionEvent){
        window.addEventListener('devicemotion',function(e){
          var acc = e.accelerationIncludingGravity;
          x = acc.x;
          y = acc.y;
          z = acc.z;
          if(fn&&!isRun&&Math.abs(x-endX)>20||Math.abs(y-endY)>20||Math.abs(z-endZ)>20){
            fn();
            isRun = true;
            window.clearTimeout(timer);
            timer = window.setTimeout(function(){
              isRun = false;
            },1000)
          }
          endX = x;
          endY = y;
          endZ = z;
        },false)
      }else{
        alert('您的手机不支持摇一摇功能');
      }
    }


    // 返回按钮方法
    $scope.start = function () {
      $state.go("home");
    };
  }]);
