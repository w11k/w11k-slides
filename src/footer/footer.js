(function() {
  'use strict';

  var module = angular.module('w11k.slides');

  module.directive('w11kFooter', ['slidesConfig', function (slidesConfig) {
    return {
      restrict: 'EA',
      templateUrl: slidesConfig.footer.templateUrl || 'footer/footer.tpl.html',
      replace: true,
      link: function (scope, element, attrs) {
        var left = element[0].querySelector('.footer-left');
        var middle = element[0].querySelector('.footer-middle');
        var right = element[0].querySelector('.footer-right');

        function setContent(element, expression) {
          var content = scope.$eval(expression);
          if (angular.isDefined(content)) {
            element.innerHTML = content;
          }
        }

        setContent(left, attrs.left || slidesConfig.footer.left);
        setContent(middle, attrs.middle || slidesConfig.footer.middle);
        setContent(right, attrs.right || slidesConfig.footer.right);
      }
    };
  }]);
}());
