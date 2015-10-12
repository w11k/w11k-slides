(function() {
  'use strict';

  /* @ngInject */
  function w11kEventToggle($rootScope) {
    return {
      restrict: 'A',
      link: function (scope, jqElement, attrs) {
        var element = jqElement[0];
        var originalDisplay;
        scope.$on(attrs.w11kEventToggle, function (event, visible) {
          toggle(visible);
        });

        function toggle(visible) {
          if (visible) {
            element.style.display = originalDisplay;
          }
          else {
            originalDisplay = element.style.display;
            element.style.display = 'none';
          }
        }

        $rootScope.$emit(attrs.w11kEventToggle + '-current', function(visible) {
          toggle(visible);
        });
      }
    };
  }

  var module = angular.module('w11k.slides');
  module.directive('w11kEventToggle', w11kEventToggle);
}());
