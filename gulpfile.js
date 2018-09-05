var gulp = require('gulp');
var sass = require('gulp-sass');
var mincss = require('gulp-clean-css');
gulp.task('devcss', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', function() {
    return gulp.watch('./src/sass/*.scss', gulp.series('devcss'))
})
gulp.task('dev', gulp.series('devcss', 'watch'));