/******************************************************
 创建人：石国庆          创建时间：2015.10.20
 创建人：                修改时间：
 功  能：indexdb通用功能
 ******************************************************/
angular.module('indexdb', [])
  .factory('IndexdbJs', ['$ionicPopup',function ($ionicPopup) {

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    window.IDBCursor=window.IDBCursor||window.webkitIDBCursor|| window.msIDBCursor;
    var db={
      dbName: 'aptdb',
      dbVersion: 2015, //用小数会四舍五入
      dbInstance: {},

      errorHandler: function (error) {
        console.log(error);
        alert('error: ' + error.target.code);
      },

      open: function (func,fail) {
        var dbContent = window.indexedDB.open(db.dbName, db.dbVersion);
        dbContent.onupgradeneeded = db.upgrade;
        dbContent.onerror = db.errorHandler;
        dbContent.onsuccess = function (e) {
          db.dbInstance = dbContent.result;
          db.dbInstance.onerror = fail;
          func();
        };
      },
      upgrade: function (e) {
        //var _db = e.target.result;
        //  _db.createObjectStore(
        //    name,
        //    {
        //      keyPath: 'goodsId',
        //      autoIncrement:false
        //    });

        var _db = e.target.result,names = _db.objectStoreNames;
        var name = "cart";
        if (!names.contains(name)) {

          _db.createObjectStore(
            name,
            {
              keyPath: 'goodsId',
              autoIncrement:false
            });
        }
      },
      getObjectStore: function (objectStoreName,mode) {
        var txn, store;mode = mode || 'readonly';
        txn = db.dbInstance.transaction([objectStoreName], mode);
        store = txn.objectStore(objectStoreName);
        return store;
      },
      add: function (objectStoreName,data,success,fail) {
        db.open(function () {
          var store, req, mode = 'readwrite';
          store = db.getObjectStore(objectStoreName,mode),
            req = store.add(data);
            req.onsuccess = success;
            req.onerror=fail;
        },fail);
      },
      update: function (objectStoreName,data,success,fail) {
        db.open(function () {
          var store, req, mode = 'readwrite';
          store = db.getObjectStore(objectStoreName,mode),
            req = store.put(data);
          req.onsuccess = success;
          req.onerror=fail;
        },fail);
      },
      getAll: function (objectStoreName,success,fail) {

        db.open(function () {
          var
            store = db.getObjectStore(objectStoreName),
            cursor = store.openCursor(),
            data = [];

          cursor.onsuccess = function (e) {
            var result = e.target.result;
            if (result && result !== null) {
              data.push(result.value);
              result.continue();
            } else {
              success(data);
            }
          };
          cursor.onerror=fail;

        });
      }
    //  get: function (id, callback) {
    //
    //    id = parseInt(id);
    //
    //    db.open(function () {
    //
    //      var
    //        store = db.getObjectStore(),
    //        request = store.get(id);
    //
    //      request.onsuccess = function (e){
    //        callback(e.target.result);
    //      };
    //    });
    //  },
    //  'delete': function (id, callback) {
    //
    //  id = parseInt(id);
    //
    //  db.open(function () {
    //
    //    var
    //      mode = 'readwrite',
    //      store, request;
    //
    //    store = db.getObjectStore(mode);
    //
    //    request = store.delete(id);
    //
    //    request.onsuccess = callback;
    //  });
    //},
    //  deleteAll: function (callback) {
    //
    //    db.open(function () {
    //
    //      var mode, store, request;
    //
    //      mode = 'readwrite';
    //      store = db.getObjectStore(mode);
    //      request = store.clear();
    //
    //      request.onsuccess = callback;
    //    });
    //
    //  }
    };

    return db;
  }]);
