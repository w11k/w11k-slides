# w11k-slides - AngularJS slide show module

w11k-slides is an AngularJS module to create simple slide shows / presentations.

Features:

* code highlighting with google pretty print
* directive to open links and on further clicks show window instead of open again
* directive to include slides into page
* navigation via hotkeys:
  * Pos1: first slide
  * End: last slide
  * o: second slide (overview)
  * left: next slide (loops at the end)
  * right: previous slide (loops at the beginning)
* configurable service to define slides and their templates via slidesConfig constant
* stylesheets for screen, print export and screen export

## Attention

w11k-slides basically works with AngularJS 1.3. But it has a known bug: Exporting a PDF with pdfcrowd.com does not work at the moment (see [#1](https://github.com/w11k/w11k-slides/issues/1)).


## Getting Started

### Installation

* Install via Bower (w11k-slides) or download manually from our release repository (https://github.com/w11k/w11k-slides-bower)
* Include scripts into your application (w11k-slides and dependencies):
  * AngularJS
  * Google Code Prettify
  * w11k-slides
* Add dependency to w11k-select to your angular module
* Include stylesheets (css or sass): w11k-slides and bootstrap (optional but recommended)

### Usage

Add something like the following to your main html file. Important: add class ```screen``` to container and use directive ```w11k-slides```

    <div class="screen">
      <div w11k-slides></div>
    </div>
    
Define your slides and the location of their templates via ```slideConfig``` constant in your angular module. ```slideTemplatePrefix``` + slide name + ```slideTemplateSuffix``` has to yield the path to the template reachable for the browser.
    
    angular.module("demo").constant('slidesConfig', {
      slides: [
        'title',
        'about',
        'end'
      ],
      slideTemplatePrefix: 'slides/',
      slideTemplateSuffix: '.tpl.html'
    });
    

### Demo

To run the included demo install bower components via ```bower install```, run ```grunt demo``` and open ```localhost:9000/demo/``` with your browser.


## Roadmap

see milestones and issues at https://github.com/w11k/w11k-slides/issues


## License

MIT - see LICENSE file
