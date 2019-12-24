const gulp = require('gulp');
// const $ = require('gulp-load-plugins');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
// const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
// const concat = require('gulp-concat');

// gulp-jade
gulp.task('jade', function () {
    return gulp.src('./source/**/*.jade')
        .pipe(plumber())
        .pipe(jade({
            // ade: jade,
            pretty: true
        }))
        .pipe(gulp.dest('./public'))
});

// sass
gulp.task('sass', function () {
    var plugins = [
        autoprefixer({ overrideBrowserslist: ['last 3 version'] }),
    ];
    return gulp.src('./source/scss/**/*.scss')
        .pipe(plumber())
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'));
});

// gulp-babel
gulp.task('babel', () =>
    gulp.src('./source/js/**/*.js')
        // .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat('all.js'))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'))
);

//watch
gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./source/**/*.jade', gulp.series('jade'));
    gulp.watch('./source/js/**/*.js', gulp.series('babel'));
});

// default
gulp.task('default', gulp.series('jade', 'sass', 'babel', 'watch'))

gulp.task('build', )