(function() {
  'use strict';

  /* @ngInject */
  function SourceSnippets($rootScope) {
    var states = {
      'js': {
        js: true,
        ts: false,
        name: 'js',
        next: 'tsOnly'
      },
      'ts': {
        js: false,
        ts: true,
        name: 'ts',
        next: 'js+ts'
      },
      'js+ts': {
        js: true,
        ts: true,
        name: 'js+ts',
        next: 'js'
      }
    };

    var currentState = states.js;

    $rootScope.$on('src-js-current', function (event, callback) {
      callback(currentState.js);
    });

    $rootScope.$on('src-ts-current', function (event, callback) {
      callback(currentState.ts);
    });

    this.toggle = function () {
      currentState = states[currentState.next];

      $rootScope.$broadcast('src-js', currentState.js);
      $rootScope.$broadcast('src-ts', currentState.ts);
    }.bind(this);

    this.set = function (state) {
      currentState = states[state];

      $rootScope.$broadcast('src-js', currentState.js);
      $rootScope.$broadcast('src-ts', currentState.ts);
    }.bind(this);

    this.get = function () {
      return currentState.name;
    }.bind(this);
  }

  var module = angular.module('w11k.slides');
  module.service('SourceSnippets', SourceSnippets);
}());

