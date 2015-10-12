(function() {
  'use strict';

  var module = angular.module('w11k.slides');

  module.service('UnloadConfirm', ['$window', function ($window) {
    var service = {
      counter: 0,

      increment: function () {
        this.counter++;
      },

      decrement: function () {
        this.counter--;
      }
    };

    var unloadListener = function (event) {
      if (service.counter > 0) {
        var hint = 'Es wurde mindestens ein Beispiel geöffnet. Wenn die Seite neu geladen wird, müssen beim erneuten Öffnen auch die Beispiele neu geladen werden.';
        event.returnValue = hint;
        return hint;
      } else {
        event.preventDefault();
        return;
      }
    };

    $window.onbeforeunload = unloadListener;

    return service;

  }]);
}());
