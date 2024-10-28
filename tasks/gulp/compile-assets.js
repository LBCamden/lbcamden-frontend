'use strict'

const { componentNameToJavaScriptModuleName } = require('../../lib/helper-functions')

const path = require('path')

const gulp = require('gulp')
const configPaths = require('../../config/paths.json')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const rollup = require('gulp-better-rollup')
const taskArguments = require('./task-arguments')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const eol = require('gulp-eol')
const glob = require('glob')
const rename = require('gulp-rename')
const cssnano = require('cssnano')
// const postcsspseudoclasses = require('postcss-pseudo-classes')({
//   // Work around a bug in pseudo classes plugin that badly transforms
//   // :not(:whatever) pseudo selectors
//   blacklist: [':not(', ':disabled)', ':first-child)', ':last-child)', ':focus)', ':active)', ':hover)']
// })

// Compile CSS and JS task --------------
// --------------------------------------

// check if destination flag is public (this is the default)
const isPublic = taskArguments.destination === 'public' || false

// check if destination flag is dist
const isDist = taskArguments.destination === 'dist' || false

// Set the destination
const destinationPath = function () {
  // Public & Dist directories do no need namespaced with `lbcamden`
  if (taskArguments.destination === 'dist' || taskArguments.destination === 'public') {
    return taskArguments.destination
  } else {
    return `${taskArguments.destination}/lbcamden/`
  }
}

const errorHandler = function (error) {
  // Log the error to the console
  console.error(error.message)

  // Ensure the task we're running exits with an error code
  this.once('finish', () => process.exit(1))
  this.emit('end')
}

function compileStyles (done) {
  const compileStylesheet = isDist ? configPaths.src + 'all.scss' : configPaths.app + 'assets/scss/app.scss'
  const sassOptions = {
    includePaths: ['node_modules']
  }
  gulp.src(compileStylesheet)
    .pipe(plumber(errorHandler))
    .pipe(sass(sassOptions))
    // minify css add vendor prefixes and normalize to compiled css
    .pipe(gulpif(isDist, postcss([
      autoprefixer,
      cssnano
    ])))
    .pipe(gulpif(!isDist, postcss([
      autoprefixer
      // Auto-generate 'companion' classes for pseudo-selector states - e.g. a
      // :hover class you can use to simulate the hover state in the review app
      // postcsspseudoclasses
    ])))
    .pipe(gulpif(isDist,
      rename({
        basename: 'lbcamden-frontend',
        extname: '.min.css'
      })
    ))
    .pipe(gulp.dest(taskArguments.destination + '/'))

  done()
}

// function compileLegacy (done) {
//   gulp.src(path.join(configPaths.app, 'assets/scss/app-legacy.scss'))
//     .pipe(plumber(errorHandler))
//     .pipe(sass({
//       includePaths: ['node_modules/govuk_frontend_toolkit/stylesheets', 'node_modules']
//     }))
//     .pipe(postcss([
//       autoprefixer,
//       // Auto-generate 'companion' classes for pseudo-selector states - e.g. a
//       // :hover class you can use to simulate the hover state in the review app
//       postcsspseudoclasses
//     ]))
//     .pipe(gulp.dest(taskArguments.destination + '/'))
//
//   done()
// }

function compileFullPageStyles (done) {
  const compileFullPageExampleStylesheets = configPaths.fullPageExamples + '**/styles.scss'

  gulp.src(compileFullPageExampleStylesheets)
    .pipe(plumber(errorHandler))
    .pipe(sass())
    .pipe(rename(function (path) {
      path.basename = path.dirname
      path.dirname = ''
    }))
    .pipe(gulp.dest(taskArguments.destination + '/full-page-examples/'))

  done()
}

gulp.task('scss:compile', function (done) {
  // Default tasks if compiling for dist
  var tasks = gulp.parallel(compileStyles)

  if (isPublic) {
    tasks = gulp.parallel(compileStyles, compileFullPageStyles)
  } else if (!isDist) {
    tasks = gulp.parallel(compileStyles)
  }

  tasks()
  done()
})

// Compile js task for preview ----------
// --------------------------------------
gulp.task('js:compile', (done) => {
  // For dist/ folder we only want compiled 'all.js'
  const fileLookup = isDist ? configPaths.src + 'all.js' : configPaths.src + '**/!(*.test).js'

  // Perform a synchronous search and return an array of matching file names
  const srcFiles = glob.sync(fileLookup)

  srcFiles.forEach(function (file) {
    // This is combined with desinationPath in gulp.dest()
    // so the files are output to the correct folders
    const newDirectoryPath = path.dirname(file).replace('src/lbcamden', '')

    // We only want to give component JavaScript a unique module name
    let moduleName = 'LBCamdenFrontend'
    if (path.dirname(file).includes('/components/')) {
      moduleName = componentNameToJavaScriptModuleName(path.parse(file).name)
    }

    return gulp.src(file)
      .pipe(rollup({
        // Used to set the `window` global and UMD/AMD export name
        // Component JavaScript is given a unique name to aid individual imports, e.g GOVUKFrontend.Accordion
        name: moduleName,
        // UMD allows the published bundle to work in CommonJS and in the browser.
        format: 'umd'
      }))
      .pipe(gulpif(isDist, uglify()))
      .pipe(gulpif(isDist,
        rename({
          basename: 'lbcamden-frontend',
          extname: '.min.js'
        })
      ))
      .pipe(eol())
      .pipe(gulp.dest(destinationPath() + newDirectoryPath))
  })
  done()
})

gulp.task('js:copy-govukfrontend', () => {
  if (isDist) {
    return gulp.src([
      configPaths.node_modules + 'govuk-frontend/govuk/all.js'
    ])
      .pipe(uglify())
      .pipe(
        rename({
          basename: 'govuk-frontend',
          extname: '.min.js'
        })
      )
      .pipe(eol())
      .pipe(gulp.dest(destinationPath()))
  } else {
    return gulp.src([
      configPaths.node_modules + 'govuk-frontend/govuk/all.js'
    ])
      .pipe(
        rename({
          basename: 'govuk-frontend',
          extname: '.js'
        })
      )
      .pipe(eol())
      .pipe(gulp.dest(destinationPath()))
  }
})
