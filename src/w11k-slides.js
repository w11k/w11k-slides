(function() {
  'use strict';

  var module = angular.module('w11k.slides', []);

  module.constant('slidesConfig', {
    slides: [],
    slideTemplatePrefix: 'slides/content/',
    slideTemplateSuffix: '.html',
    masters: {},
    footer: {
      templateUrl: 'footer/footer.html',
      left: '',
      middle: '',
      right: '$index + 1'
    }
  });
}());
