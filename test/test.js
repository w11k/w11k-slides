'use strict';

angular.module('demo', ['w11k.slides', 'w11k.slides.template']);

angular.module('demo').config(function (slidesConfig) {
  slidesConfig.slides = [
    'title',
    'about',
    'usage',
    'end'
  ];
  slidesConfig.masters = {
    'regular': 'master/regular.html'
  };
  slidesConfig.slideTemplatePrefix = 'slides/';
});
