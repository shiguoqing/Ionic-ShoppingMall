// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'route', 'config', 'global', 'commonJs', 'ngCordova'])

.run(function($ionicPlatform,$cordovaToast,$cordovaKeyboard,$ionicHistory,$rootScope, $location, $timeout,CommonJs) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });


    //物理返回按钮控制&双击退出应用
    $ionicPlatform.registerBackButtonAction(function (e) {
      //判断处于哪个页面时双击退出
      if ($location.path() == '/indexTab/home' || $location.path() == '/indexTab/category' || $location.path() == '/indexTab/cart'|| $location.path() == '/indexTab/account') {
        if ($rootScope.backButtonPressedOnceToExit) {
          ionic.Platform.exitApp();
        } else {
          $rootScope.backButtonPressedOnceToExit = true;
          $cordovaToast.showShortBottom('再按一次退出系统');
          setTimeout(function () {
            $rootScope.backButtonPressedOnceToExit = false;
          }, 2000);
        }
      }else if ($cordovaKeyboard.isVisible()) {
        $cordovaKeyboard.close();
      }else if($ionicHistory.backView()){
        $ionicHistory.goBack();
      } else {
        if ($rootScope.backButtonPressedOnceToExit) {
          ionic.Platform.exitApp();
        }else{
          $rootScope.backButtonPressedOnceToExit = true;
          $cordovaToast.showShortBottom('再按一次退出系统');
          setTimeout(function () {
            $rootScope.backButtonPressedOnceToExit = false;
          }, 2000);
        }
      }
      e.preventDefault();
      return false;
    }, 105);


});

