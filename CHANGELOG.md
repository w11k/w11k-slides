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
