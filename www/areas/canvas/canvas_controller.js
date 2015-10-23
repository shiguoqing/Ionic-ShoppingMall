/******************************************************
 创建人：石国庆          创建时间：2015.08.25
 创建人：                修改时间：
 功  能：H5画布
 ******************************************************/
angular.module('APT.canvas.controller', ['APT.canvas.service'])
  // 审批功能虚拟路由控制器
  .controller('CanvasCtrl', ['$scope', '$ionicHistory', function ($scope, $ionicHistory) {

    $scope.$on('$ionicView.enter', function (e) {
      init();
      sunwukong();

    });


    function sunwukong(){


    }

    function init(){
      clock();
      setInterval(clock,1000); //每一秒钟重新绘制一次
    }

    function clock(){
      var now = new Date();

      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.save();
      ctx.clearRect(0,0,150,150); // 清空给定矩形内的指定像素
      ctx.translate(75,75);  // 重新设置画布的坐标源点
      ctx.scale(0.4,0.4);  // 缩放当前绘图，更大或更小。
      ctx.rotate(-Math.PI/2); // 弧度
      ctx.strokeStyle = "black"; // 要绘制的线条的颜色
      ctx.fillStyle = "white"; // 填充颜色
      ctx.lineWidth = 8; // 线段的宽度
      ctx.lineCap = "round"; //圆形线头

      // 绘制小时刻度
      ctx.save();
      for (var i=0;i<12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
      }
      ctx.restore();

      // 绘制分钟刻度
      ctx.save();
      ctx.lineWidth = 5;
      for (i=0;i<60;i++){
        if (i%5!=0) {
          ctx.beginPath();
          ctx.moveTo(117,0);
          ctx.lineTo(120,0);
          ctx.stroke();
        }
        ctx.rotate(Math.PI/30);
      }
      ctx.restore();

      //获取当前时间的毫秒、秒、分钟、小时数值
      var ms = now.getMilliseconds( );
      var sec = now.getSeconds();
      var min = now.getMinutes();
      var hr  = now.getHours();
      hr = hr>=12 ? hr-12 : hr;

      ctx.fillStyle = "black";

      // 绘制时针
      ctx.save();
      ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
      ctx.lineWidth = 14;
      ctx.beginPath();
      ctx.moveTo(-20,0);
      ctx.lineTo(80,0);
      ctx.stroke();
      ctx.restore();

      // 绘制分针
      ctx.save();
      ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(-28,0);
      ctx.lineTo(112,0);
      ctx.stroke();
      ctx.restore();

      // 绘制秒针
      ctx.save();
      ctx.rotate((sec+ms/1000) * Math.PI/30);
      ctx.strokeStyle = "#D40000";
      ctx.fillStyle = "#D40000";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(-30,0);
      ctx.lineTo(83,0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0,0,10,0,Math.PI*2,true);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(95,0,10,0,Math.PI*2,true);
      ctx.stroke();
      ctx.fillStyle = "#555";
      ctx.arc(0,0,3,0,Math.PI*2,true);
      ctx.fill();
      ctx.restore();

      // 绘制时钟圆形外框
      ctx.beginPath();
      ctx.lineWidth = 14;
      ctx.strokeStyle = '#325FA2';
      ctx.arc(0,0,142,0,Math.PI*2,true);
      ctx.stroke();

      ctx.restore();
    }
    // 返回按钮方法
    $scope.goBack = function () {
      $ionicHistory.goBack();
    };
  }]);
