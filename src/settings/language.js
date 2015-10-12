(function() {
  'use strict';

  /* @ngInject */
  function initLanguage(Language) {
    Language.init();
  }

  /* @ngInject */
  function Language($rootScope) {
    var states = {
      'de': {
        de: true,
        en: false,
        name: 'de',
        next: 'enOnly'
      },
      'en': {
        de: false,
        en: true,
        name: 'en',
        next: 'de+en'
      },
      'de+en': {
        de: true,
        en: true,
        name: 'de+en',
        next: 'de'
      }
    };

    var currentState = states.de;

    this.toggle = function () {
      this.set(currentState.next);
    }.bind(this);

    this.set = function (state) {
      currentState = states[state];

      $rootScope.$broadcast('lang-de', currentState.de);
      $rootScope.$broadcast('lang-en', currentState.en);
    }.bind(this);

    this.get = function () {
      return currentState.name;
    }.bind(this);

    this.init = function () {
      $rootScope.$on('lang-de-current', function (event, callback) {
        callback(currentState.de);
      });

      $rootScope.$on('lang-en-current', function (event, callback) {
        callback(currentState.en);
      });
    }.bind(this);
  }

  var module = angular.module('w11k.slides');
  module.run(initLanguage);
  module.service('Language', Language);
}());
