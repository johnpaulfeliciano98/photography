import gulp from 'gulp';
import imageResize from 'gulp-image-resize';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import filter from 'gulp-filter';
import path from 'path';
import fs from 'fs';
import del from 'del';

const sass = gulpSass(dartSass);
const cssSourceGlob = './assets/sass/**/*.scss';
const cssOutputDir = './assets/css';
const imageSourceGlob = 'images/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}';
const imageFullsDir = 'images/fulls';
const imageThumbsDir = 'images/thumbs';
const generatedCssFiles = [
    `${cssOutputDir}/custom.min.css`,
    `${cssOutputDir}/main.min.css`,
    `${cssOutputDir}/noscript.min.css`
];

gulp.task('ensure-image-dirs', function (done) {
    fs.mkdirSync(imageFullsDir, { recursive: true });
    fs.mkdirSync(imageThumbsDir, { recursive: true });
    done();
});

gulp.task('resize-fulls', function () {
    return gulp.src(imageSourceGlob, { allowEmpty: true })
        .pipe(imageResize({
            width: 2048,
            upscale: false,
            imageMagick: true
        }))
        .pipe(gulp.dest(imageFullsDir));
});

gulp.task('resize-thumbs', function () {
    return gulp.src(imageSourceGlob, { allowEmpty: true })
        .pipe(imageResize({
            width: 512,
            upscale: false,
            imageMagick: true
        }))
        .pipe(gulp.dest(imageThumbsDir));
});

gulp.task('clean-source-images', function () {
    return del([imageSourceGlob]);
});

// clear previously generated css
gulp.task('clean-css', function () {
    return del(generatedCssFiles);
});

// compile scss to css
gulp.task('sass', gulp.series('clean-css', function compileSass() {
    return gulp.src(cssSourceGlob)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(cssOutputDir));
}));

// watch changes in scss files and run sass task
gulp.task('sass:watch', function () {
    gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
});

// minify js
gulp.task('minify-js', function () {
    return gulp.src('./assets/js/**/*.js')
        .pipe(filter(function (file) {
            const basename = path.basename(file.path, '.js');
            return !basename.endsWith('.min');
        }))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min';
            path.extname = '.js';
        }))
        .pipe(gulp.dest('./assets/js'));
});

// build task
gulp.task('build', gulp.series('sass', 'minify-js'));

// resize root images into fulls/thumbs, then clear the image drop zone
gulp.task('resize', gulp.series('ensure-image-dirs', 'resize-fulls', 'resize-thumbs', 'clean-source-images'));

// default task
gulp.task('default', gulp.series('build', 'resize'));
