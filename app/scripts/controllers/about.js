'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('AboutCtrl', ["$scope", "$q", function($scope, $q){
    $scope.flag = true;
    $scope.handle = function(){
      var deferred = $q.defer();
      var promise = deferred.promise;

      promise
        .then(function(result){
        result = result + "you have passed the first then()";
        $scope.status = error;
        return result;
      }, function(error){
        error = error + "failed but you have passed the first then()";
        $scope.status = error;
        return error;
      })
        .then(function(result){
          alert("Success:" + result);
        }, function(error){
          alert("Fail:" + error);
        })

      if ($scope.flag){
        deferred.resolve("you are luck!");
      }else{
        deferred.reject("sorry,it lost!");
      }
    };
  }]);
