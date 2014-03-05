'use strict';

angular.module("demo", ["w11k.slides", "w11k.slides.template"]);

angular.module("demo").constant('slidesConfig', {
  slides: [
    'title',
    'about',
    'usage',
    'end'
  ],
  slideTemplatePrefix: 'slides/'
});
