'use strict';

angular.module('w11k.slides', []);

angular.module('w11k.slides').constant('slidesConfig', {
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
