var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    path = require('path');


var paths = {
  sassStyles: './assets/styles/scss/*.scss',
  bowerDir: './bower_components',
  bootstrapPath: './bower_components/bootstrap-sass-official/assets/',
  fontAwesome: './bower_components/fontawesome/scss',
  cssDest: './assets/styles/css'
};

gulp.task('default', ['sass', 'icons', 'animate']);

gulp.task('watch', function() {
  gulp.watch(paths.sassStyles, ['sass']);
});

gulp.task('sass', function (){
  return gulp.src(paths.sassStyles)
    .pipe(sass({
      style: 'compressed',
      loadPath: [
        paths.bootstrapPath + '/stylesheets',
        paths.fontAwesome
      ]
    })).pipe(gulp.dest(paths.cssDest));
});

gulp.task('icons', function (){
  return gulp.src(paths.bowerDir + '/fontawesome/fonts/**.*')
    .pipe(gulp.dest('./assets/styles/fonts'));
});

gulp.task('animate', function () {
  return gulp.src(paths.bowerDir + '/animate.css/animate.min.css')
    .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('js', function (){
  return gulp.src([paths.bootstrapPath + '/javascripts/bootstrap.js', paths.bowerDir + '/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('./assets/js'));
});
