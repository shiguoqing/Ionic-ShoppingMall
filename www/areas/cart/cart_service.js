angular.module('APT.cart.service', [])
  .factory('CartFty', ['$http', '$q','$window','IndexdbJs', function ($http, $q,$window,IndexdbJs) {
    return {
      getAllData: function () {
        var deferred = $q.defer();
        IndexdbJs.getAll("cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      get: function (id) {
        var deferred = $q.defer();
        IndexdbJs.get(id,"cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      updateData: function (data) {
        var deferred = $q.defer();
        IndexdbJs.update("cart",data,function(){
          deferred.resolve();
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      },
      delete: function (id) {
        var deferred = $q.defer();
        IndexdbJs.delete(id,"cart",function(data){
          deferred.resolve(data);
        },function(e){
          deferred.reject(e);
        })
        return deferred.promise;
      }
    }
  }]);
