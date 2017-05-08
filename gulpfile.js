var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            erroLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({browsers: ['> 1%'], cascade: false}))
        .pipe(gulp.dest('css'))

});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});
