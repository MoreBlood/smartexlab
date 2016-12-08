var gulp = require('gulp'),
	clean = require('gulp-clean'), //clean before build
	htmlreplace = require('gulp-html-replace'), //delete unused scripts
    concat = require('gulp-concat'); //unite files


gulp.task('default', ['clean'], function() {

   gulp.src(['./js/*.js', '!./js/angular.min.js', '!./js/angular.sanitize.min.js']) //unite all scripts except libs
        .pipe(concat('list.js')) 
        .pipe(gulp.dest('build/js'));

   gulp.src(['./js/angular.min.js', './js/angular.sanitize.min.js']) // copy libs
      .pipe(gulp.dest('build/js'));

   gulp.src(['./css/*.css', '!./css/bootstrap.min.css']) // unite css
      .pipe(concat('style.css'))
      .pipe(gulp.dest('build/css'));

   gulp.src('./css/bootstrap.min.css') // copy bootstrap
      .pipe(gulp.dest('build/css'));

   gulp.src('./*.html') //copy all html files
      .pipe(gulp.dest('build/'));

   gulp.src('./index.html') // edit index.html
    .pipe(htmlreplace({
        'css': 'css/style.css',
        'js': 'js/list.js'
    }))
    .pipe(gulp.dest('build/'));

});


gulp.task('clean', function () { //perform clean
    return gulp.src('build', {read: true})
        .pipe(clean());
});



