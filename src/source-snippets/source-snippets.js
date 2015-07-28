'use strict';

angular.module('w11k.slides').config(function (slidesConfig) {
  slidesConfig.shortcuts = slidesConfig.shortcuts || {};

  slidesConfig.shortcuts['76'] = ['SourceSnippets', function (SourceSnippets) {
    SourceSnippets.toggle();
  }];
});

angular.module('w11k.slides').run(function (SourceSnippets) {
  // just for eager creation
  SourceSnippets.init();
});

angular.module('w11k.slides').service('SourceSnippets', function ($rootScope) {
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
});
