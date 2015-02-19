'use strict';

angular.module('w11k.slides').constant('slidesConfig', {
  slides: []
});

angular.module('w11k.slides').factory('SlidesService', ['slidesConfig', '$location', '$rootScope', function (slidesConfig, $location, $rootScope) {
  var activeSlide;

  function activateFirstSlide() {
    if (angular.isDefined(activeSlide)) {
      activeSlide.active = false;
    }
    activeSlide = slides[0];
    activeSlide.active = true;
  }

  var slides;
  var slidesMap = {};

  $rootScope.$on('$locationChangeSuccess', function () {
    var slideName = $location.path();

    if (slideName.substring(0, 1) === '/') {
      slideName = slideName.substring(1, slideName.length);
    }

    var slide =  slidesMap[slideName];

    if (angular.isDefined(slide)) {
      slide.activate();
    }
  });

  function mapSlidesConfig() {
    var prefix = slidesConfig.slideTemplatePrefix || 'slides/content/';
    var suffix = slidesConfig.slideTemplateSuffix || '.tpl.html';

    slides = slidesConfig.slides.map(function (slide) {
      var slideObject =  {
        name: slide,
        template: prefix + slide + suffix,
        active: false
      };

      slideObject.activate = function () {
        activeSlide.active = false;
        activeSlide = this;

        slideObject.active = true;
      };

      return slideObject;
    });

    for (var i = 0; i < slides.length; i++) {
      var element = slides[i];
      var previous;
      if (i > 0) {
        previous = slides[i - 1];
      }
      else {
        previous = slides[slides.length - 1];
      }

      var next;
      if (i + 1 < slides.length) {
        next = slides[i + 1];
      }
      else {
        next = slides[0];
      }

      element.previous = previous;
      element.next = next;

      slidesMap[element.name] = element;
    }
  }

  mapSlidesConfig();
  activateFirstSlide();

  return {
    getActiveSlide: function () { return activeSlide; },
    getSlides: function () { return slides; },
    navigateTo: function (slideName) {
      $location.path(slideName);
    },
    navigateToFirst: function () {
      $location.path(slides[0].name);
    },
    navigateToLast: function () {
      $location.path(slides[slides.length - 1].name);
    },
    navigateToOverview: function () {
      $location.path(slides[1].name);
    }
  };
}]);

angular.module('w11k.slides').controller('SlidesCtrl', ['$scope', 'SlidesService', function ($scope, SlidesService) {
  $scope.slides = SlidesService.getSlides();
}]);

angular.module('w11k.slides').directive('w11kSlides', [
  '$location', '$window', '$document', 'SlidesService', '$rootScope', 'slidesConfig',
  function ($location, $window, $document, SlidesService, $rootScope, slidesConfig) {
    return {
      restrict: 'EA',
      templateUrl: slidesConfig.directiveTemplateUrl || 'slides/slides.tpl.html',
      replace: true,
      link: function (scope, element) {

        var goToNext = function () {
          var next = SlidesService.getActiveSlide().next;
          if (angular.isDefined(next)) {
            SlidesService.navigateTo(next.name);
          }
        };

        var goToPrevious = function () {
          var previous = SlidesService.getActiveSlide().previous;
          if (angular.isDefined(previous)) {
            SlidesService.navigateTo(previous.name);
          }
        };

        var localStorageModeKey = 'w11k-slides.mode';
        var mode = 'export';

        function toggleMode() {
          if (mode === 'export') {
            mode = 'screen';
          }
          else if (mode === 'screen') {
            mode = 'export';
          }

          setMode(mode);

          if (angular.isDefined($window.localStorage)) {
            $window.localStorage[localStorageModeKey] = mode;
          }
        }

        function setMode(mode) {
          if (mode === 'export') {
            element.removeClass('screen');
            element.addClass('export');
          }
          else if (mode === 'screen') {
            element.removeClass('export');
            element.addClass('screen');
          }
        }

        if (angular.isDefined($window.localStorage)) {
          if (angular.isDefined($window.localStorage[localStorageModeKey])) {
            mode = $window.localStorage[localStorageModeKey];
            setMode(mode);
          }
        }

        $document.bind('keydown', function (event) {
          var action;

          // right or page down
          if (event.keyCode === 39 || event.keyCode === 34) {
            action = goToNext;
          }
          // left or page up
          else if (event.keyCode === 37 || event.keyCode === 33) {
            action = goToPrevious;
          }
          // pos 1
          else if (event.keyCode === 36) {
            action = SlidesService.navigateToFirst;
          }
          // end
          else if (event.keyCode === 35) {
            action = SlidesService.navigateToLast;
          }
          // o
          else if (event.keyCode === 79) {
            action = SlidesService.navigateToOverview;
          }
          // e
          else if (event.keyCode === 69) {
            action = toggleMode;
          }

          if (action) {
            $rootScope.$apply(function () {
              action();
            });
          }
        });
      }
    };
  }
]);
