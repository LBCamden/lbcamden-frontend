const { documents } = require('./data.json')

module.exports = (app) => {
  app.get(
    '/full-page-examples/search',
    (request, response) => {
      const total = '128124'

      // Make the total more readable
      const formattedTotal = total.substring(0, 3) + ',' + total.substring(3)

      response.render('./full-page-examples/search/index', {
        total: formattedTotal,
        documents,
        values: request.query // In production this should sanitized.
      })
    }
  )
}
