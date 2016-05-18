var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('./demo/*.scss')
  .pipe(plumber((function(error) {
    console.log(error.message);
    this.emit('end');
  })))
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'ie 10']
  }))
  .pipe(gulp.dest('./demo/css'));
});

gulp.task('server', ['build'], function() {
  browserSync({
    open: false,
    notify: true,
    server: {
      baseDir: './demo'
    }
  });
});
gulp.task('build', ['sass'], function() {
  
});

gulp.task('default', ['server'], function() {
  gulp.watch(['./roundabout.scss', './demo/**/*.scss'], ['sass', reload]);
  gulp.watch('./demo/*.*', reload);
});
