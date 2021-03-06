(function () {
  'use strict';

  /* @ngInject */
  function SlidesService(slidesConfig, $location, $rootScope, $window) {
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

      var slide = slidesMap[slideName];

      if (angular.isDefined(slide)) {
        slide.activate();
      }
    });

    var localStorageModeKey = 'w11k-slides.mode';
    var mode = 'export';

    function mapSlidesConfig() {
      var prefix = slidesConfig.slideTemplatePrefix || 'slides/content/';
      var suffix = slidesConfig.slideTemplateSuffix || '.html';

      slides = slidesConfig.slides.map(function (slide) {
        var slideObject = {
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

    this.getActiveSlide = function() {
      return activeSlide;
    };

    this.getSlides = function() {
      return slides;
    };

    this.navigateTo = function (slideName) {
      $location.path(slideName);
    };

    this.navigateToFirst = function() {
      $location.path(slides[0].name);
    };

    this.navigateToLast = function() {
      $location.path(slides[slides.length - 1].name);
    };

    this.navigateToOverview = function() {
      $location.path(slides[1].name);
    };

    this.navigateToNext = function () {
      var next = this.getActiveSlide().next;
      if (angular.isDefined(next)) {
        this.navigateTo(next.name);
      }
    }.bind(this);

    this.navigateToPrevious = function () {
      var previous = this.getActiveSlide().previous;
      if (angular.isDefined(previous)) {
        this.navigateTo(previous.name);
      }
    }.bind(this);

    this.getMode = function () {
      return mode;
    }.bind(this);

    this.setMode = function (newMode) {
      mode = newMode;

      if (angular.isDefined($window.localStorage)) {
        $window.localStorage[localStorageModeKey] = mode;
      }

      $rootScope.$emit(this.events.modeChanged, mode);
    }.bind(this);

    this.toggleMode = function () {
      var newMode;

      if (mode === 'export') {
        newMode = 'screen';
      }
      else if (mode === 'screen') {
        newMode = 'export';
      }

      this.setMode(newMode);
    }.bind(this);

    this.events = {
      modeChanged: 'w11k-slides.modeChanged'
    };
  }

  /* @ngInject */
  function SlidesCtrl(SlidesService) {
    this.slides = SlidesService.getSlides();
  }

  /* @ngInject */
  function w11kSlideMasterDirective(slidesConfig) {
    var removeChildren = function (node) {
      var last = node.lastChild;
      if (last) {
        do {
          node.removeChild(last);
          last = node.lastChild;
        } while (last);
      }
    };

    return {
      templateUrl: function (element, attrs) {
        var key = attrs.w11kSlideMaster || attrs.master;
        var templateUrl = slidesConfig.masters[key];

        if (angular.isUndefined(templateUrl)) {
          throw new Error('No Mater-Slide found for "' + key + '". Please configure "slidesConfig" properly.');
        }

        return templateUrl;
      },
      restrict: 'EA',
      replace: true,
      transclude: true,
      link: function (scope, iElement, iAttrs, ctrl, transclude) {
        var transclusionScope;

        transclude(function (clone, scope) {

          for (var i = 0; i < clone.length; i++) {
            var part = clone[i];

            if (part !== undefined && angular.isFunction(part.getAttribute)) {
              var partName = part.getAttribute('w11k-slide-part-source');

              if (partName !== undefined && partName !== null) {
                var selector = '[w11k-slide-part-target="' + partName + '"]';
                var container = iElement[0].querySelector(selector);
                if (container !== null) {
                  removeChildren(container);
                  container.appendChild(part, container);
                  container.removeAttribute('w11k-slide-part-target');
                }
              }
            }
          }

          transclusionScope = scope;
        });

        scope.$on('$destroy', function () {
          transclusionScope.$destroy();
        });
      }
    };
  }

  /* @ngInject */
  function w11kSlidesDirective($window, $document, SlidesService, slidesConfig, $injector, $rootScope) {
    return {
      restrict: 'EA',
      templateUrl: slidesConfig.directiveTemplateUrl || 'slides/slides.html',
      replace: true,
      link: function (scope, jqElement) {
        var element = jqElement[0];

        function setMode(mode) {
          if (mode === 'export') {
            element.classList.remove('screen');
            element.classList.add('export');
          }
          else if (mode === 'screen') {
            element.classList.remove('export');
            element.classList.add('screen');
          }
        }

        function toggleMode() {
          SlidesService.toggleMode();
        }

        function toggleOverlay() {
          element.querySelector('div.overlay').classList.toggle('active');
        }

        function runDefaultAction(event) {
          var action;
          var actionType;

          // right or page down
          if (event.keyCode === 39 || event.keyCode === 34) {
            action = SlidesService.navigateToNext;
            actionType = 'navigate';
          }
          // left or page up
          else if (event.keyCode === 37 || event.keyCode === 33) {
            action = SlidesService.navigateToPrevious;
            actionType = 'navigate';
          }
          // pos 1
          else if (event.keyCode === 36) {
            action = SlidesService.navigateToFirst;
            actionType = 'navigate';
          }
          // end
          else if (event.keyCode === 35) {
            action = SlidesService.navigateToLast;
            actionType = 'navigate';
          }
          // o
          else if (event.keyCode === 79) {
            action = SlidesService.navigateToOverview;
            actionType = 'navigate';
          }
          // e
          else if (event.keyCode === 69) {
            action = toggleMode;
          }
          // p or period
          else if (event.keyCode === 80 || event.keyCode === 190) {
            action = toggleOverlay;
          }

          if (action) {
            scope.$apply(function () {
              action();
              if (actionType === 'navigate') {
                $window.scrollTo(0, 0);
              }
            });
          }
        }

        setMode(SlidesService.getMode());

        $rootScope.$on(SlidesService.events.modeChanged, function (event, mode) {
          setMode(mode);
        });

        $document.bind('keydown', function (event) {

          if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
            return;
          }

          var tagName = event.target.tagName;
          if (tagName === 'INPUT' || tagName === 'TEXTAREA' || event.target.contentEditable === 'true') {
            return;
          }

          if (slidesConfig.shortcuts) {
            var customShortcut = slidesConfig.shortcuts[event.keyCode];
            if (angular.isFunction(customShortcut) || angular.isArray(customShortcut)) {
              $injector.invoke(customShortcut, {$event: event});
            }
            else {
              runDefaultAction(event);
            }
          }
          else {
            runDefaultAction(event);
          }
        });
      }
    };
  }

  var module = angular.module('w11k.slides');
  module.service('SlidesService', SlidesService);
  module.controller('SlidesCtrl', SlidesCtrl);
  module.directive('w11kSlideMaster', w11kSlideMasterDirective);
  module.directive('w11kSlides', w11kSlidesDirective);
}());
