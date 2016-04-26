'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('MainCtrl', ['$scope', "$q", function ($scope, $q) {
    $scope.flag = true;
    $scope.handle = function(){
      var deferred = $q.defer();//创建了一个deferred对象
      var promise = deferred.promise;//创建了一个promise对象

      //给promise的then方法传递了两个处理函数，分别处理当promise被执行的时候以及promise被拒绝的时候所要进行的操作。
      promise.then(function(result){
        alert("success:" + result);
      }, function(error){
        alert("fail:" + error);
      });

      if($scope.flag){
        deferred.resolve("you are lucky!");
      }else{
        deferred.reject("sorry, it lost!");
      }
    }
  }]);
