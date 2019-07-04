const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', function(done) {
  gulp
    .src('assets/scss/main.scss') // Leo el archivo scss
    .pipe(sass()) // Convierto el contenido del archivo index.scss a CSS
    .pipe(gulp.dest('assets/css')); // El CSS generado lo guardamos en la carpeta css
  done();
});