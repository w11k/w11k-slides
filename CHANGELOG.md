
# w11k-slides Changelog

<a name="0.12.3"></a>
## [0.13.0](https://github.com/w11k/w11k-slides/compare/0.12.2...v0.13.0) (2016-03-09)


### Features

* **mode:** expose set and toggle mode (screen and export) via SlidesService ([c49fde8](https://github.com/w11k/w11k-slides/commit/c49fde8))


<a name="0.12.2"></a>
## [0.12.2](https://github.com/w11k/w11k-slides/compare/0.12.1...v0.12.2) (2015-10-12)


### Bug Fixes

* **settings:** remove duplicated source-snippets service ([df6251f](https://github.com/w11k/w11k-slides/commit/df6251f))



<a name="0.12.1"></a>
## [0.12.1](https://github.com/w11k/w11k-slides/compare/0.12.0...v0.12.1) (2015-10-12)


### Bug Fixes

* **templates:** fix path of inlined templates ([754157c](https://github.com/w11k/w11k-slides/commit/754157c))


<a name="0.12.0"></a>
## [0.12.0](https://github.com/w11k/w11k-slides/compare/0.11.0...v0.12.0) (2015-10-12)


### Features

* **settings:** add default implementations for language and code-snippets settings ([d70bd53](https://github.com/w11k/w11k-slides/commit/d70bd53))
* **shortcuts:** prefer custom shortcuts, run default action only if no custom shortcut to allow  ([27db787](https://github.com/w11k/w11k-slides/commit/27db787))
* **templates:** change default file extension for templates from '.tpl.html' to '.html' ([106b4ed](https://github.com/w11k/w11k-slides/commit/106b4ed))


### BREAKING CHANGES

* templates: Default file extension for slides changed from '.tpl.html' to '.html'. Rename your slide files or change back to old extension via slidesConfig.slidesTemplateSuffix


<a name="0.11.0"></a>
## 0.11.0 (2015-07-28)


### Bug Fixes

* **corner-ribbon:** fix horizontal scroll in firefox ([e6355bec](https://github.com/w11k/w11k-slides/commit/e6355bec31f4544e3c4fa0a0b6b2ed358d89d6b0))
* **hotkeys:** do not trigger hotkey action if cursor is in input field ([8e269aed](https://github.com/w11k/w11k-slides/commit/8e269aed3089cf7d92cb3aee32002c87e7187ad1))


### Features

* **dependencies:** update dependency to angular to 1.4.x ([f4dcef34](https://github.com/w11k/w11k-slides/commit/f4dcef3417b40063d356734d8be1519922ca9921))
* **event-toggle:** add w11k-event-toggle directive ([c8b098d0](https://github.com/w11k/w11k-slides/commit/c8b098d09444508f514b0af8c4d7bc81b73c3745))
* **source-snippets:** add source-snippets service to toggle visibility of javascript and typescript examples ([65e46dcb](https://github.com/w11k/w11k-slides/commit/65e46dcb4f21c76db5a9f8a5eb8c779d9e752a3a))


<a name="0.10.3"></a>
## 0.10.3 (2015-05-13)


### Bug Fixes

* **slides:** scroll to top on navigating to other slide ([d61dea94](https://github.com/w11k/w11k-slides/commit/d61dea94363ecebc4016461cbc09d19a4280b402))


<a name="0.10.2"></a>
## 0.10.2 (2015-05-08)


### Bug Fixes

* **pretty-print:** add title to element used in the dom ([906b425e](https://github.com/w11k/w11k-slides/commit/906b425eb2478a91a3959f34d6594d058cecfb51))


<a name="0.10.1"></a>
## 0.10.1 (2015-03-03)


### Bug Fixes

* **config:** fix footer template ([5ae1eef6](https://github.com/w11k/w11k-slides/commit/5ae1eef6d888e217c3160b485376631a0b4714ff))
* **keyboard:** do not apply event if modifier was pressed ([8e2cdea6](https://github.com/w11k/w11k-slides/commit/8e2cdea6539fe85ced8b4c4e9dc4466c1f250c93))


<a name="0.10.0"></a>
## 0.10.0 (2015-03-03)


### Bug Fixes

* **overlay:** do not apply slide styling to overlay ([d353f1a9](https://github.com/w11k/w11k-slides/commit/d353f1a9c4b4084e134dd9db438d20cd858f19de))


### Features

* **build:** add compressed templates.js to dist ([48487568](https://github.com/w11k/w11k-slides/commit/484875689b5a066e91eaf4df037e00ef7333841c))
* **footer:** add w11k-footer directive ([d16095f7](https://github.com/w11k/w11k-slides/commit/d16095f7f6d6b6cb7a76ce25acd6951115bed530))
* **master-slides:** add multi-transclude-directive w11k-slide-master ([00edece1](https://github.com/w11k/w11k-slides/commit/00edece103b865f76dfad8dc25f3f682c099f914))
* **styling:** update bootstrap to 3.3.x ([c34da3d3](https://github.com/w11k/w11k-slides/commit/c34da3d3b36fc43b24b105d708fdf742b910f54d))


<a name="0.9.1"></a>
## 0.9.1 (2015-02-19)


### Bug Fixes

* **overlay:** hide overlay completely if inactive ([c628cc99](https://github.com/w11k/w11k-slides/commit/c628cc990318a5282c2ff3085d32dd70e606f269))


<a name="0.9.0"></a>
## 0.9.0 (2015-02-19)


### Features

* **navigation:** add support for page-up and page-down to navigate forward and backward ([97320ac4](https://github.com/w11k/w11k-slides/commit/97320ac4ec576ec3c9658befaa8bab7188cc51d7))
* **overlay:** add blank-out-overlay (toggle with p or period) ([5a187412](https://github.com/w11k/w11k-slides/commit/5a1874129a8767c9464ba9ab4bef0b963fb5a630))


<a name="0.8.2"></a>
## 0.8.2 (2014-10-27)


### Bug Fixes

* **styling:** use 'background' instead of 'background-color' on title slide ([3871984c](https://github.com/w11k/w11k-slides/commit/3871984cbd0e33ec4c96f5e307a4a04ba1a0ce64))


<a name="0.8.1"></a>
## 0.8.1 (2014-10-24)


### Bug Fixes

* **styling:** remove less output from dist ([b0be0e0b](https://github.com/w11k/w11k-slides/commit/b0be0e0b09c41d4fa6d589bcb343b985b2eabe5f))


<a name="0.8.0"></a>
## 0.8.0 (2014-10-24)


### Features

* **styling:** add less support ([d442e619](https://github.com/w11k/w11k-slides/commit/d442e619d317b2828b7f1102b3836b87ae2d7f2d))


<a name="0.7.1"></a>
## 0.7.1 (2014-09-01)


### Bug Fixes

* **corner-ribbon:** do not overlay hole slide ([c79a46dd](https://github.com/w11k/w11k-slides/commit/c79a46dd59bb921258cfbc3a14bf52da9c62feb8))
* **title slide:** avoid white margins and improve styling ([e386609](https://github.com/w11k/w11k-slides/commit/e3866099e32ec22180dcbcfc5874fbe7d648e2e5))


<a name="0.7.0"></a>
## 0.7.0 (2014-08-27)


### Bug Fixes

* **export:** remove adding url to external links to avoid layout problems ([f71cdb0f](https://github.com/w11k/w11k-slides/commit/f71cdb0f48abfcb725d6c8fa649e2a1111622940))


### Features

* **corner-ribbon:** add basic implementation of corner ribbon (top-right only) ([0b9c13ea](https://github.com/w11k/w11k-slides/commit/0b9c13ea79f708eed5b9614c0c6ed5995718db4c))


### Breaking Changes

* All sass variable names has changed. See variables.scss for new names.
 ([45c64443](https://github.com/w11k/w11k-slides/commit/45c6444349959dc751ed30b19cec6842e69a844a))


<a name="0.6.0"></a>
## 0.6.0 (2014-08-19)


### Features

* **mode:** save mode (export or screen) in local storage ([6279f58d](https://github.com/w11k/w11k-slides/commit/6279f58d03e0570fedf9659f1b8dc9ed70005e82))
* **styling:** add slide types styling for titled and centered ([f2a92dd9](https://github.com/w11k/w11k-slides/commit/f2a92dd9994e26f001ab6d2c0fd3ca52de65bab3))


<a name="0.5.0"></a>
## 0.5.0 (2014-07-15)


### Bug Fixes

* **prettyprint:** fix margin of line numbers if prettyprint is used within a list element ([e3dc93fb](https://github.com/w11k/w11k-slides/commit/e3dc93fbaf9f2bee60e51b2333a5d8c9adc08e05))


### Features

* **prettyprint:** add support for title attribute ([e3dc93fb](https://github.com/w11k/w11k-slides/commit/e3dc93fbaf9f2bee60e51b2333a5d8c9adc08e05))


### Breaking Changes

* There is a new top-level-element: div.w11k-pretty-print. This element contains the pre element and, if present, the title. For better encapsulation all styling is now prefixed with .w11k-pretty-print.
 ([e3dc93fb](https://github.com/w11k/w11k-slides/commit/e3dc93fbaf9f2bee60e51b2333a5d8c9adc08e05))


<a name="0.4.2"></a>
## 0.4.2 (2014-06-15)


### Bug Fixes

* **open-once:** read w11k-open-once attribute instead of open-once ([15b2862f](https://github.com/pburgmer/w11k-slides/commit/15b2862f8029669b8cd2281bca073cac1263b32b))
* **slides:** apply some styling fixes from ionic tutorial ([ff01bb2c](https://github.com/pburgmer/w11k-slides/commit/ff01bb2c71304780915787da10dc860eedd5801f))


<a name="0.4.1"></a>
## 0.4.1 (2014-05-15)


### Bug Fixes

* **prettyprint:** make directive terminal to not evaluate directives and expressions on content ([0bf32566](https://github.com/pburgmer/w11k-slides/commit/0bf32566f7d11fb3870457d2476128f92c9869a4))


<a name="0.4.0"></a>
## 0.4.0 (2014-05-15)


### Features

* **prettyprint:** improve pretty-print directive to work with unescaped html ([e049ea02](https://github.com/pburgmer/w11k-slides/commit/e049ea022b0a5525f94c8b3e8b54efb54fcfe135))


### Breaking Changes

* w11k-pretty-print directive now has to be placed at the element containing the code ([e049ea02](https://github.com/pburgmer/w11k-slides/commit/e049ea022b0a5525f94c8b3e8b54efb54fcfe135))

  Example:
  
  ```
  <pre w11k-pretty-print lang="html">
  <body>
    <div w11k-slides></div>
  </body>
  </pre>
  ```


<a name="0.3.0"></a>
## 0.3.0 (2014-04-28)


### Bug Fixes

* **pretty-print:** prettify code blocks once only ([4f6bbeee](https://github.com/pburgmer/w11k-slides/commit/4f6bbeee7c11bb7597629955b30145e82f374b56))


### Features

* **export:** toggle export and presentation view by pressing e, define export view as default ([43816c3a](https://github.com/pburgmer/w11k-slides/commit/43816c3a9d1241aff663434c0c2e485bb05af64b))


<a name="0.2.1"></a>
## 0.2.1 (2014-03-14)


### Bug Fixes

* **styling:** fixe styling of ordered lists ([39f6cf62](https://github.com/pburgmer/w11k-slides/commit/39f6cf624c8510a367cde8277271658dd8f897cd))


<a name="0.2.0"></a>
## 0.2.0 (2014-03-14)


### Features

* **styling:**
  * removes content specific styling ([7c335d42](https://github.com/pburgmer/w11k-slides/commit/7c335d4213158b42a0f8415ad8009e53ba38f424))
  * back ports generic styling of various slide shows ([a390abcd](https://github.com/pburgmer/w11k-slides/commit/a390abcd29eb02f8660e8c43a590b364afd6fa58))


<a name="0.1.4"></a>
## 0.1.4 (2014-03-06)


### Bug Fixes

* **Dependency Injection:** use array notation to survive code minimization ([4ab4330b](https://github.com/pburgmer/w11k-slides/commit/4ab4330be4bfc1253076fe34ad3c4bedbf179cc7))


<a name="0.1.3"></a>
## 0.1.3 (2014-03-06)


### Bug Fixes

* **slides:** fixes vertical align not working because of missing height ([68d68d9e](https://github.com/pburgmer/w11k-slides/commit/68d68d9ede67da913fd4ca2dce6ca1e68789a098))
* **release:** removes prettypring.scss withoud underscore ([20dfef6](https://github.com/pburgmer/w11k-slides/commit/20dfef6a886cca9e94de4ec0dc8f8c4c7974f3ba))


<a name="0.1.2"></a>
## 0.1.2 (2014-03-05)


### Bug Fixes

* **open-once:** extract styling from slides ([85b49e80](https://github.com/pburgmer/w11k-slides/commit/85b49e805f245250b8c1bfa14417c3f1d52ef204))
* **pretty-print:** strength css selector to be stronger then bootstraps list selectors ([c97a46ae](https://github.com/pburgmer/w11k-slides/commit/c97a46aef00427c609a2ed228a0bde4de9bdccf5))


<a name="0.1.1"></a>
## 0.1.1 (2014-03-05)


### Bug Fixes

* **bower:** add missing dependency to google-code-prettify ([c0845826](https://github.com/pburgmer/w11k-slides/commit/c0845826e3c5590144c8ab4d6dbd245ade06a6ce))
* **build:** include files in subfolders of dist ([1a17c7aa](https://github.com/pburgmer/w11k-slides/commit/1a17c7aabaa1b941e8f1a9e526621fdce455ae81))
* **open-once:** prefix directive with w11k to avoid name collisions ([9415c890](https://github.com/pburgmer/w11k-slides/commit/9415c890df1dbf08f69540e1f3b545f8695f1cdb))
* **pretty-print:** prefix directive with w11k to avoid name collisions ([a6c99a4e](https://github.com/pburgmer/w11k-slides/commit/a6c99a4ebf3f04bf91598be7b79988aaab17ec06))


<a name="0.1.0"></a>
## 0.1.0 (2014-03-05)

### Features

* **prettyprint:** code highlighting with google pretty print
* **open-once:** directive to open links and on further clicks show window instead of open again
* **slides:** directive to include slides into page
* **slides:** navigation via hotkeys:
  * Pos1: first slide
  * End: last slide
  * o: second slide (overview)
  * left: next slide (loops at the end)
  * right: previous slide (loops at the beginning)
* **slides:** configurable service to define slides and their templates via slidesConfig constant
* **export:** stylesheets for screen, print export and screen export
