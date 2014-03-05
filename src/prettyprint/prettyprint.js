'use strict';

angular.module('w11k.slides').directive('prettyPrint', function ($window) {
  return {
    restrict: 'A',
    link: function () {
      if (angular.isFunction($window.prettyPrint)) {
        $window.prettyPrint();
      }
    }
  };
});
