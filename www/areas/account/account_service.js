angular.module('APT.account.service', [])
  .factory('AccountFty', ['$http', '$q','Global','$window', function ($http, $q,Global,$window) {
    return {
      // 获取待办任务列表数据
      mobileUserUndoTaskList: function (message) {
        var deferred = $q.defer();
        var url = Global.SERVER_PATH+"/WXPlatformServlet?method=mobileUserUndoTaskList&message="+
          message+"&loginName="+$window.localStorage['loginName']+"&platform="+Global.PLATFORM+
          "&module=bill&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data,status, headers, config) {
          deferred.reject(data);
        });
        return deferred.promise;
      }
    }
  }]);
