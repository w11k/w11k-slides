(function() {
  'use strict';

  /* @ngInject */
  function UnloadConfirm($window) {
    var counter = 0;

    this.increment = function () {
      this.counter++;
    };

    this.decrement = function () {
      this.counter--;
    };

    $window.onbeforeunload = function (event) {
      if (counter > 0) {
        var hint = 'Es wurde mindestens ein Beispiel geöffnet. Wenn die Seite neu geladen wird, müssen beim erneuten Öffnen auch die Beispiele neu geladen werden.';
        event.returnValue = hint;
        return hint;
      } else {
        event.preventDefault();
        return;
      }
    };
  }

  var module = angular.module('w11k.slides');
  module.service('UnloadConfirm', UnloadConfirm);
}());
