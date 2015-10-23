angular.module('APT.canvas.route', ['APT.canvas.controller'])
  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      // 审批功能首页面
      .state('canvas', {
        url: '/canvas',
        templateUrl: 'areas/canvas/canvas.html',
        controller: 'CanvasCtrl'
      })

  });
