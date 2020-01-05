const gulp = require('gulp');
// CSS Plugins
let autoprefixer = require('gulp-autoprefixer');
let css = require('gulp-mini-css');
// Img Plugins
let imagemin = require('gulp-imagemin');

// CSS start build
exports.css = () => (
    gulp.src('public/styles/*.css')
        // autoprifixer
        .pipe(autoprefixer({
            cascade: false
        }))
        // minify CSS
        .pipe(css({ext:'-min.css'}))
        .pipe(gulp.dest('dist/styles'))
);

// Images start build
exports.img = () => (
    gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);