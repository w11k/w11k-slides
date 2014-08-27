# w11k-slides Changelog

<a name="0.7.0"></a>
## 0.7.0 (2014-08-27)


#### Bug Fixes

* **export:** remove adding url to external links to avoid layout problems ([f71cdb0f](https://github.com/w11k/w11k-slides/commit/f71cdb0f48abfcb725d6c8fa649e2a1111622940))


#### Features

* **corner-ribbon:** add basic implementation of corner ribbon (top-right only) ([0b9c13ea](https://github.com/w11k/w11k-slides/commit/0b9c13ea79f708eed5b9614c0c6ed5995718db4c))


#### Breaking Changes

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
