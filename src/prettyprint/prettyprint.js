'use strict';

angular.module('w11k.slides').directive('w11kPrettyPrint', ['$window', function ($window) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      if (angular.isFunction($window.prettyPrint)) {
        $window.prettyPrint(angular.noop, element[0]);
      }
    }
  };
}]);
