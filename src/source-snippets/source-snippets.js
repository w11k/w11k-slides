(function () {
  'use strict';

  /* @ngInject */
  function configureShortcuts(slidesConfig) {
    slidesConfig.shortcuts = slidesConfig.shortcuts || {};

    slidesConfig.shortcuts['76'] = ['SourceSnippets', function (SourceSnippets) {
      SourceSnippets.toggle();
    }];
  }

  /* @ngInject */
  function initSnippets(SourceSnippets) {
    // just for eager creation
    SourceSnippets.init();
  }

  /* @ngInject */
  function SourceSnippets($rootScope) {
    var states = {
      'jsOnly': {
        js: true,
        ts: false,
        next: 'tsOnly'
      },
      'tsOnly': {
        js: false,
        ts: true,
        next: 'jsAndTs'
      },
      'jsAndTs': {
        js: true,
        ts: true,
        next: 'jsOnly'
      }
    };

    var currentState = states.jsOnly;

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
    };

    this.init = function () {
      // nothing to do here at the moment
    };
  }
  var module = angular.module('w11k.slides');

  module.config(configureShortcuts);
  module.run(initSnippets);
  module.service('SourceSnippets', SourceSnippets);
}());
