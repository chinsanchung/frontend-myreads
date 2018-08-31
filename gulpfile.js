var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');

gulp.task('default', ['sass', 'lint'], function() {
  gulp.watch('styles/sass/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['lint']);
});

gulp.task('sass', function() {
  gulp.src('styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('lint', function() {
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
