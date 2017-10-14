var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DES = './src/assets/css';

//Compile SCSS
gulp.task('compile_css', function() {
	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({suffix: '.min'}))
	.pipe(changed(SCSS_DES))
	.pipe(gulp.dest(SCSS_DES));
});

gulp.task('watch_scss', function() {
	gulp.watch(SCSS_SRC, ['compile_css']);
});

gulp.task('default', ['watch_scss']);