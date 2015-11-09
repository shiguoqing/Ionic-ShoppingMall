/******************************************************
 创建人：石国庆       创建时间：2015.10.20
 修改人：             修改时间：
 功  能：搜索服务
 ******************************************************/
angular.module('APT.search.service', [])
  .factory('SearchFty', ['$http', '$q','Global','$window', function ($http, $q,Global,$window) {
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
      }
    }
  }]);
