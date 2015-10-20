// Ionic项目在编译为android和ios的时候会有一些样式不兼容问题，需要在这里配置
angular.module('config', [])
  .config(function ($ionicConfigProvider) {

    //$ionicConfigProvider.platform.ios.tabs.style('standard');
    //$ionicConfigProvider.platform.ios.tabs.position('bottom');
    //$ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    //
    //$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    //
    //$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    //$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    //
    //$ionicConfigProvider.platform.ios.views.transition('ios');
    //$ionicConfigProvider.platform.android.views.transition('android');

  });
