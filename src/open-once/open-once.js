'use strict';

angular.module('w11k.slides').directive('w11kOpenOnce', ['$window', 'UnloadConfirm', function ($window, UnloadConfirm) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var namedWindow;

      element.bind('click', function (event) {
        var noNamedWindowOpen = namedWindow === undefined || namedWindow === null || namedWindow.closed;
        var linkAttrSet = attrs.href !== undefined && attrs.href !== null && attrs.target !== undefined && attrs.target !== null;
        var openOnceSet = attrs.w11kOpenOnce === 'true';

        if (noNamedWindowOpen && linkAttrSet && openOnceSet) {
          element.removeClass('example-shown');
          UnloadConfirm.increment();
          namedWindow = $window.open(attrs.href, attrs.target);
          event.preventDefault();
        } else if (noNamedWindowOpen === false && openOnceSet) {
          namedWindow.focus();
          element.addClass('example-shown');
          event.preventDefault();
        }
      });
    }
  };
}]);
