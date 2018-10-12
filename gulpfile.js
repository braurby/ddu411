let gulp = require('gulp');
let stylus = require('gulp-stylus');
let cleanCSS = require('gulp-clean-css');
let glob = require('glob');
const debug = require('gulp-debug');

gulp.task('compile_stylus', function() {
	return gulp
	.src('css/*.styl')
	.pipe(debug({title: 'input'}))
    .pipe(stylus())
    .pipe(gulp.dest('css/build'))
    .pipe(debug({title: 'output'}))
});

gulp.task('minify-css', () => {
  return gulp.src('css/build/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/build'));
});

gulp.task('glob-test', function () {
  glob('./css/style.styl', {}, function (er, files) {
    console.log(files);
  });
});