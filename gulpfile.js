var gulp = require('gulp');
var livereload = require('gulp-livereload');
var shell = require('gulp-shell');

gulp.task('bundle', function() {
  return gulp.src('lib/**/*.js', {read: false})
    .pipe(shell(['jspm bundle lib/app build.js']))
    .pipe(livereload());
});

gulp.task('watch', ['bundle'], function() {
  livereload.listen();
  gulp.watch('lib/**/*.js', ['bundle']);
});

gulp.task('default', ['watch']);
