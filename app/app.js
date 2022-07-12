const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const { marked } = require('marked')
const util = require('util')
const fs = require('fs')
const path = require('path')

const readdir = util.promisify(fs.readdir)

const helperFunctions = require('../lib/helper-functions')
const fileHelper = require('../lib/file-helper')
const configPaths = require('../config/paths.json')
const pjson = require('../package.json')

// Set up views
const appViews = [
  'node_modules/govuk-frontend/',
  configPaths.layouts,
  configPaths.views,
  configPaths.examples,
  configPaths.fullPageExamples,
  configPaths.components,
  configPaths.src,
  configPaths.govukComponents,
  configPaths.govukSrc,
  configPaths.node_modules
]

module.exports = (options) => {
  const nunjucksOptions = options ? options.nunjucks : {}

  // Configure nunjucks
  const env = nunjucks.configure(appViews, {
    autoescape: true, // output with dangerous characters are escaped automatically
    express: app, // the express app that nunjucks should install to
    noCache: true, // never use a cache and recompile templates each time
    trimBlocks: true, // automatically remove trailing newlines from a block/tag
    lstripBlocks: true, // automatically remove leading whitespace from a block/tag
    watch: true, // reload templates when they are changed. needs chokidar dependency to be installed
    ...nunjucksOptions // merge any additional options and overwrite defaults above.
  })

  // make the function available as a filter for all templates
  env.addFilter('componentNameToMacroName', helperFunctions.componentNameToMacroName)
  env.addFilter('govukComponentNameToMacroName', helperFunctions.govukComponentNameToMacroName)
  env.addGlobal('markdown', marked)

  // Set view engine
  app.set('view engine', 'njk')

  // Disallow search index indexing
  app.use(function (req, res, next) {
    // none - Equivalent to noindex, nofollow
    // noindex - Do not show this page in search results and do not show a
    //   "Cached" link in search results.
    // nofollow - Do not follow the links on this page
    res.setHeader('X-Robots-Tag', 'none')
    next()
  })

  // Ensure robots are still able to crawl the pages.
  //
  // This might seem like a mistake, but it's not. If a page is blocked by
  // robots.txt, the crawler will never see the noindex directive, and so the
  // page can still appear in search results.
  app.get('/robots.txt', function (req, res) {
    res.type('text/plain')
    res.send('User-agent: *\nAllow: /')
  })

  // Set up middleware to serve static assets
  app.use('/public', express.static(configPaths.public))

  app.use('/docs', express.static(configPaths.sassdoc))

  // serve html5-shiv from node modules
  app.use('/vendor/html5-shiv/', express.static('node_modules/html5shiv/dist/'))

  // serve legacy code from node modules
  app.use('/vendor/govuk_template/', express.static('node_modules/govuk_template_jinja/assets/'))
  app.use('/vendor/govuk_frontend_toolkit/assets', express.static('node_modules/govuk_frontend_toolkit/images'))
  app.use('/vendor/govuk_frontend_toolkit/', express.static('node_modules/govuk_frontend_toolkit/javascripts/govuk/'))
  app.use('/vendor/jquery/', express.static('node_modules/jquery/dist'))

  app.use('/assets', express.static(path.join(configPaths.src, 'assets')))

  // Turn form POSTs into data that can be used for validation.
  app.use(bodyParser.urlencoded({ extended: true }))

  // Define middleware for all routes
  app.use('*', function (request, response, next) {
    response.locals.legacy = (request.query.legacy === '1' || request.query.legacy === 'true')
    if (response.locals.legacy) {
      response.locals.legacyQuery = '?legacy=' + request.query.legacy
    } else {
      response.locals.legacyQuery = ''
    }
    response.locals.version = pjson.version
    next()
  })

  // Define routes

  // Index page - render the component list template
  app.get('/', async function (req, res) {
    const components = fileHelper.allComponents
    const govukComponents = fileHelper.allGovukComponents
    const examples = await readdir(path.resolve(configPaths.examples))
    const fullPageExamples = fileHelper.fullPageExamples()

    res.render('index', {
      componentsDirectory: components,
      govukComponentsDirectory: govukComponents,
      examplesDirectory: examples,
      fullPageExamples: fullPageExamples
    })
  })

  // Whenever the route includes a :component parameter, read the component data
  // from its YAML file
  app.param('component', function (req, res, next, componentName) {
    res.locals.componentData = fileHelper.getComponentData(componentName)
    next()
  })

  app.param('govukComponent', function (req, res, next, componentName) {
    const theComponent = JSON.parse(fileHelper.getGovukComponentData(componentName, true))
    // console.log(theComponent.fixtures)
    const examples = theComponent.fixtures.map(x => ({
        name: x.name,
        hidden: x.hidden,
        data: x.options
    }))
    const mappedObject = {
      params: [],
      examples: examples
    }
    res.locals.componentData = mappedObject
    next()
  })

  // All components view
  app.get('/components/all', function (req, res, next) {
    const components = fileHelper.allComponents

    res.locals.componentData = components.map(componentName => {
      const componentData = fileHelper.getComponentData(componentName)
      const defaultExample = componentData.examples.find(
        example => example.name === 'default'
      )
      return {
        componentName,
        examples: [defaultExample]
      }
    })

    // console.log(res.locals.componentData)

    res.render('all-components', function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })

  app.get('/govukComponents/all', function (req, res, next) {
    const govukComponents = fileHelper.allGovukComponents
    // console.log(govukComponents)

    res.locals.govukComponentData = govukComponents.map(componentName => {
      const govukComponentData = fileHelper.getGovukComponentData(componentName)
      const defaultExample = JSON.parse(govukComponentData).fixtures.find(
        example => example.name === 'default'
      )
      return {
        componentName,
        examples: [defaultExample]
      }
    })

    // console.log(res.locals.govukComponentData)

    res.render('all-components', function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })

  // Component 'README' page
  app.get('/components/:component', function (req, res, next) {
    // make variables available to nunjucks template
    res.locals.componentPath = req.params.component
    res.locals.govukComponent = false

    // console.log(res.locals.componentData)

    res.render('component', function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })

  app.get('/govukComponents/:govukComponent', function (req, res, next) {
    // make variables available to nunjucks template
    res.locals.componentPath = req.params.govukComponent
    res.locals.govukComponent = true

    // console.log(res.locals.componentData)

    res.render('component', function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })

  // Component example preview
  app.get('/components/:component/:example*?/preview', function (req, res, next) {
    // Find the data for the specified example (or the default example)
    const componentName = req.params.component
    const requestedExampleName = req.params.example || 'default'

    const previewLayout = res.locals.componentData.previewLayout || 'layout'

    const exampleConfig = res.locals.componentData.examples.find(
      example => example.name.replace(/ /g, '-') === requestedExampleName
    )

    if (!exampleConfig) {
      next()
    }

    // Construct and evaluate the component with the data for this example
    const macroName = helperFunctions.componentNameToMacroName(componentName)
    const macroParameters = JSON.stringify(exampleConfig.data, null, '\t')

    res.locals.componentView = env.renderString(
      `{% from '${componentName}/macro.njk' import ${macroName} %}
      {{ ${macroName}(${macroParameters}) }}`
    )

    let bodyClasses = ''
    if (req.query.iframe) {
      bodyClasses = 'app-iframe-in-component-preview'
    }

    res.render('component-preview', { bodyClasses, previewLayout })
  })

  app.get('/govukComponents/:govukComponent/:example*?/preview', function (req, res, next) {
    // Find the data for the specified example (or the default example)
    const componentName = req.params.govukComponent
    const requestedExampleName = req.params.example || 'default'

    const previewLayout = res.locals.componentData.previewLayout || 'layout'

    const exampleConfig = res.locals.componentData.examples.find(
      example => example.name.replace(/ /g, '-') === requestedExampleName
    )

    if (!exampleConfig) {
      next()
    }

    // Construct and evaluate the component with the data for this example
    const macroName = helperFunctions.govukComponentNameToMacroName(componentName)
    const macroParameters = JSON.stringify(exampleConfig.data, null, '\t')

    res.locals.componentView = env.renderString(
      `{% from '${componentName}/macro.njk' import ${macroName} %}
      {{ ${macroName}(${macroParameters}) }}`
    )

    let bodyClasses = ''
    if (req.query.iframe) {
      bodyClasses = 'app-iframe-in-component-preview'
    }

    res.render('component-preview', { bodyClasses, previewLayout })
  })

  // Example view
  app.get('/examples/:example', function (req, res, next) {
    // Passing a random number used for the links so that they will be unique and not display as "visited"
    const randomPageHash = (Math.random() * 1000000).toFixed()
    res.render(`${req.params.example}/index`, { randomPageHash }, function (error, html) {
      if (error) {
        next(error)
      } else {
        res.send(html)
      }
    })
  })

  // Full page example views
  require('./full-page-examples.js')(app)

  return app
}
