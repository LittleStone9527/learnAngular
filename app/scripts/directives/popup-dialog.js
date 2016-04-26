'use strict';

/**
 * @ngdoc directive
 * @name learnAngularApp.directive:popUpDialog
 * @description
 * # popUpDialog
 */
angular.module('learnAngularApp')
  .directive('popUpDialog', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      replace: true,
      //templateUrl: '/views/dialog.html',
      link: function postLink(scope, element, attrs) {
        element.text('this is the popUpDialog directive');
      }
    };
  });
