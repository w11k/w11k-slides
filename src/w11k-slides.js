(function() {
  'use strict';

  var module = angular.module('w11k.slides', []);

  module.constant('slidesConfig', {
    slides: [],
    slideTemplatePrefix: 'slides/content/',
    slideTemplateSuffix: '.tpl.html',
    masters: {},
    footer: {
      templateUrl: 'footer/footer.tpl.html',
      left: '',
      middle: '',
      right: '$index + 1'
    }
  });
}());
