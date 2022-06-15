const sassdoc = require('sassdoc')
const gulp = require('gulp')
const paths = require('../../config/paths.json')

gulp.task('sassdoc', function () {
  return gulp.src([paths.src + '**/**/*.scss', `!${paths.src}/vendor/*`])
    .pipe(sassdoc({
      dest: paths.sassdoc,
      groups: {
        'helpers/colour': 'Helpers / Colour'
      }
    }))
    .resume()
})
