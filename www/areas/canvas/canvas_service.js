/******************************************************
 创建人：石国庆       创建时间：2015.08.25
 修改人：             修改时间：
 功  能：H5画布
 ******************************************************/
angular.module('APT.canvas.service', [])
  .factory('CanvasFty', ['$http', '$q','Global','$window', function ($http, $q,Global,$window) {
    return {
      // 获取待办任务列表数据
      mobileUserUndoTaskList: function (message) {
        var deferred = $q.defer();
        var url = Global.SERVER_PATH+"/WXPlatformServlet?method=mobileUserUndoTaskList&message="+message+"&loginName="+$window.localStorage['loginName']+"&platform="+Global.PLATFORM+"&module=bill&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data,status, headers, config) {
          deferred.reject(data);
        });
        return deferred.promise;
      },
      // 根据单据编号获取单条待办任务数据
      mobileBillView: function (message) {
        var deferred = $q.defer();
        var url = Global.SERVER_PATH+"/WXPlatformServlet?method=mobileBillView&message="+message+"&loginName="+$window.localStorage['loginName']+"&platform="+Global.PLATFORM+"&module=bill&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data,status, headers, config) {
          deferred.reject(data);
        });
        return deferred.promise;
      }
    }
  }]);

