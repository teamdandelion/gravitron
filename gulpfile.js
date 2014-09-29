var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function() {
  var tsResult = gulp.src('src/*.ts')
                     .pipe(ts({}));
  tsResult.ts.pipe(gulp.dest('build'))
});
