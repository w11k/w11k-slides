'use strict';

angular.module('w11k.slides').directive('w11kPrettyPrint', ['$window', '$document', function ($window, $document) {

  var escapeHTML = function (html) {
    if (angular.isUndefined(html)) {
      return;
    }

    return html.replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  };

  return {
    restrict: 'A',
    compile: function (tElement, tAttrs) {
      if (angular.isFunction($window.prettyPrintOne)) {
        var html = tElement.html();
        var escapedHtml = escapeHTML(html);
        var prettifiedHtml = $window.prettyPrintOne(escapedHtml, tAttrs.lang, true);

        var preElement = $document[0].createElement('pre');
        preElement.classList.add('prettyprint');
        preElement.classList.add('linenums');

        preElement.innerHTML = prettifiedHtml;

        tElement.replaceWith(preElement);
      }
    }
  };
}]);
