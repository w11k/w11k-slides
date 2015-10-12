'use strict';

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var merge = require('merge-stream');
var minifyHtml = require('gulp-minify-html');
var header = require('gulp-header');
var less = require('gulp-less');
var compass = require('gulp-compass');
var minifyCss = require('gulp-minify-css');
var path = require('path');
var rename = require("gulp-rename");
var connect = require('gulp-connect');
var bump = require('gulp-bump');
var argv = require('yargs').argv;
var conventionalChangelog = require('gulp-conventional-changelog');

var pkg = require('./package.json');

var paths = {
  scripts: ['src/**/*.js'],
  templates: ['src/**/*.html'],
  less: ['src/**/*.less'],
  sass: ['src/**/*.scss']
};

var banner = [
  '/**',
  ' * <%= pkg.name %>',
  ' *',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('clean', function() {
  return del(['dist', 'temp']);
});

gulp.task('templates', ['clean'], function () {
  var templates = gulp.src(paths.templates)
    .pipe(minifyHtml({ empty: true }))
    .pipe(html2js({
      outputModuleName: 'w11k.slides.template',
      useStrict: true
    }));

  var templatesNonMin = templates
    .pipe(concat('w11k-slides.tpl.js'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('dist'));

  var templatesMin = templates
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('w11k-slides.tpl.min.js'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));

  var templatesCopied = gulp.src(paths.templates).
    pipe(gulp.dest('dist'));

  return merge(templatesCopied, templatesNonMin, templatesMin);
});

gulp.task('sass', ['clean'], function () {
  var sassCompiled = gulp.src('src/w11k-slides.scss')
    .pipe(sourcemaps.init())
    .pipe(compass({
      css: 'temp',
      sass: 'src'
    }))
    .pipe(minifyCss())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('temp'));

  var sassCopied = gulp.src(paths.sass)
    .pipe(gulp.dest('dist'));

  return merge(sassCopied, sassCompiled);
});

gulp.task('less', ['clean'], function styles() {
  var lessCopied = gulp.src(paths.less)
    .pipe(gulp.dest('dist'));

  var lessCompiled = gulp.src('src/w11k-slides.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'src') ],
      compress: false
    }));

  var cssNonMinified = lessCompiled
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));

  var cssMinified = lessCompiled
    .pipe(minifyCss())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));

  return merge(lessCopied, cssNonMinified, cssMinified);
});

gulp.task('styles', ['less', 'sass']);

gulp.task('scripts', ['clean'], function scripts() {
  var source = gulp.src(paths.scripts)
    .pipe(ngAnnotate({
      'single_quotes': true
    }));

  var nonMin = source
    .pipe(sourcemaps.init())
    .pipe(concat('w11k-slides.js'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'));

  var min = source
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('w11k-slides.min.js'))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'));

  return merge(nonMin, min);
});

gulp.task('server', [], function () {
  connect.server({
    root: ['.', './dist', './test'],
    port: 8000,
    livereload: false
  });
});

gulp.task('bump', function(){
  var type = argv.bump;

  gulp.src(['./package.json', './bower.json'])
    .pipe(bump({ type: type }))
    .pipe(gulp.dest('./'));
});

gulp.task('changelog', function () {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['scripts', 'templates', 'styles']);
gulp.task('test', ['build', 'server']);
gulp.task('default', ['build']);
