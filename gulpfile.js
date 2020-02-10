sourcemaps = require('gulp-sourcemaps'),

gulp = require('gulp'),
uglify = require('gulp-uglify'),

gulp.task('default', function() {
  gulp
    .src(['./javascripts/custom.js'])
    // .pipe(sourcemaps.init())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/assets/'))
});


gulp.task('watch', function() {
  gulp.watch(['javascripts/**/*.js'], ['default']);
});