'use strict';

angular.module('w11k.slides').directive('w11kOpenOnce', function ($window, UnloadConfirm) {
  return {
    restrict: 'A',
    scope: { name: '@' },
    link: function (scope, element, attrs) {
      element.bind('click', function (event) {
        var noNamedWindowOpen = scope.namedWindow === undefined || scope.namedWindow === null || scope.namedWindow.closed;
        var linkAttrSet = attrs.href !== undefined && attrs.href !== null && attrs.target !== undefined && attrs.target !== null;
        var openOnceSet = attrs.openOnce !== undefined && attrs.openOnce !== null && attrs.openOnce === 'true';

        if (noNamedWindowOpen && linkAttrSet && openOnceSet) {
          element.removeClass('example-shown');
          UnloadConfirm.increment();
          scope.namedWindow = $window.open(attrs.href, attrs.target);
          event.preventDefault();
        } else if (noNamedWindowOpen === false && openOnceSet) {
          scope.namedWindow.focus();
          element.addClass('example-shown');
          event.preventDefault();
        }
      });
    }
  };
});
