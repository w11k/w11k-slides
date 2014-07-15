'use strict';

angular.module('w11k.slides').directive('w11kPrettyPrint', ['$window', '$document', function ($window, $document) {

  var escapeHTML = function (html) {
    if (angular.isUndefined(html)) {
      return;
    }

    return html.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  };

  var containerTemplate = '<div class="w11k-pretty-print"><pre class="prettyprint linenums"></pre></div>';
  var titleTemplate = '<div class="title"></div>';

  return {
    restrict: 'A',
    terminal: true,
    compile: function (tElement, tAttrs) {
      if (angular.isFunction($window.prettyPrintOne)) {
        var html = tElement.html();
        var escapedHtml = escapeHTML(html);
        var prettifiedHtml = $window.prettyPrintOne(escapedHtml, tAttrs.lang, true);

        var container = angular.element(containerTemplate);
        var preElement = container.find('pre');

        preElement.html(prettifiedHtml);

        tElement.replaceWith(container);

        return function (scope, element, attrs) {
          attrs.$observe('title', function (titleText) {
            if (titleText !== undefined && titleText !== '') {
              var titleElement = angular.element(titleTemplate);
              titleElement.html(titleText);
              container.prepend(titleElement);
            }
          });
        };
      }

    }
  };
}]);
