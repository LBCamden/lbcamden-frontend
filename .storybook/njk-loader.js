const njk = require('nunjucks')
const njkSlim = require.resolve('nunjucks/browser/nunjucks-slim')

const env = new njk.Environment(new njk.NodeResolveLoader());

module.exports = function () {
  const path = require.resolve('path-webpack')
  this.addDependency(njkSlim);
  this.addDependency(path);

  const precompiledTemplates = njk.precompile(this.resourcePath, {
    env: env,
    include: [
      "src/lbcamden"
    ],
  });

	return `
    ${precompiledTemplates}

    const path = require("${path}")
    const njk = require("${njkSlim}");
    const env = new njk.Environment(new njk.PrecompiledLoader());

    // workaround: https://github.com/mozilla/nunjucks/issues/755
    njk.PrecompiledLoader.prototype.resolve = function patchedResolve(from, to) {
      return path.resolve(path.dirname(from), to)
    }

    export default function render(data) {
      return env.render("${this.resourcePath}", Object.assign({}, data))
    }
  `;
}
