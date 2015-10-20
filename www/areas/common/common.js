/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：通用功能
 ******************************************************/
angular.module('commonJs', [])
  .factory('CommonJs', ['$ionicPopup',function ($ionicPopup) {
    return {
      // 弹出提示框
      AlertPopup:function(message){
        var alertPopup = $ionicPopup.alert({
          title: '提示',
          template: message
        });
        alertPopup.then(function(res) {
          console.log('');
        });
      }
    }
  }]);
