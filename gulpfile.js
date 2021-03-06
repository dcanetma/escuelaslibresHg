const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
var concat        = require('gulp-concat');
var panini        = require('panini');
let cleanCSS      = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

var sassOptions = {
  outputStyle: 'compressed'
};

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass(sassOptions))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('js', function() {
    // return gulp.src([ 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js//dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
    //   .pipe(gulp.dest('src/js'));
    return gulp.src([ 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js//dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/wowjs/dist/wow.min.js', 'node_modules/jquery.scrollto/jquery.scrollTo.min.js', 'src/js/_custom.js'])
      .pipe(concat('app.js'))
      .pipe(gulp.dest('src/js'))
      .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./src"  
    });

    // sass + minifycss
    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch('src/css/*.css', ['minify-css']);

    // Concat js files
    gulp.watch('src/js/*.js', ['js', browserSync.reload]);

    // Generate html with panini + minify-html
    gulp.watch(['src/html/data/*.yml','src/html/**/*.html','src/html/pages/*.html','src/html/layouts/*.html', 'src/html/includes/*.html'], ['html:reset','html']);
    // gulp.watch(['src/html/{layouts,includes,helpers,data}/**/*'], ['html:reset','html', browserSync.reload]);
    gulp.watch('src/*.html', ['minify-html', browserSync.reload]);
});

// Move Fonts to src/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('src/fonts'));
})

// Move Animate + Font Awesome CSS to src/css
gulp.task('css', function() {
  return gulp.src(['node_modules/wowjs/css/libs/animate.css','node_modules/font-awesome/css/font-awesome.min.css'])
    .pipe(gulp.dest('src/css'));
})

// Minify css
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('src/css-min'));
});

// Compile html using panini
gulp.task('html', function() {
  gulp.src('src/html/pages/**/*.html')
    .pipe(panini({
      root: 'src/html/pages/',
      layouts: 'src/html/layouts/',
      partials: 'src/html/includes/',
      helpers: 'src/html/helpers/',
      data: 'src/html/data/'
    }))
    .pipe(gulp.dest('src'))
    .on('finish', browserSync.reload);
});

gulp.task('html:reset', function(done) {
  panini.refresh();
  done();
});

// Minify html
gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('src'));
});

gulp.task('build', ['minify-html', 'html', 'js', 'minify-css', 'css', 'fonts']);
gulp.task('default', ['serve', 'minify-html', 'html', 'js', 'minify-css', 'css', 'fonts']);