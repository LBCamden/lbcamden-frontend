// TODO: we're using a deprecated API as it allows us to programatically create stories
// this could also be accomplished using the modern API via code-generation using webpack, but this is easier for now
const { storiesOf } = require("@storybook/html");

// force _all_ nunjucks templates to load so that client-side template imports work
requireAll(require.context("../src/lbcamden", true, /\.njk$/));

// force _all_ nunjucks templates to load so that client-side template imports work
requireAll(require.context("./govuk", true, /\.njk$/));

const camdenComponents = buildComponentStories({
  // Build up a collection of all our component template files
  componentsContext: require.context(
    "../src/lbcamden/components",
    true,
    /template\.njk$/
  ),

  // Build up a collection of all our yaml files specifying examples
  yamlContext: require.context("../src/lbcamden/components", true, /\.yaml$/),
});

buildComponentStories({
  // Build up a collection of all our component template files
  componentsContext: require.context("./govuk/components", true, /template\.njk$/),

  // Build up a collection of all our yaml files specifying examples
  fixturesContext: require.context("./govuk/components", true, /fixtures\.json$/),
  optionsContext: require.context("./govuk/components", true, /macro-options\.json$/),
  exclude: camdenComponents
});

function requireAll(context) {
  context.keys().forEach((key) => context(key));
}

function buildComponentStories({
  componentsContext,
  yamlContext,
  fixturesContext,
  optionsContext,
  exclude = []
}) {
  const components = buildSlugMap(componentsContext);
  const fixtures = fixturesContext && buildSlugMap(fixturesContext);
  const schemas = optionsContext && buildSlugMap(optionsContext);
  const fixturesWithSchemas = yamlContext && buildSlugMap(yamlContext);

  console.log({
    components,
    fixtures,
    schemas,
    fixturesWithSchemas
  })

  // iterate over yaml component schemas and generate stories from examples
  //
  // TODO: add a flag to the examples to specify if they should show up here?
  for (const slug of Object.keys(components)) {
    if (exclude.includes(slug)) {
      continue
    }

    if (!components[slug]) {
      continue;
    }

    const component = componentsContext(components[slug]).default;
    let examples, params;

    if (fixturesWithSchemas) {
      const yaml = yamlContext(fixturesWithSchemas[slug]).default;
      params = yaml.params;
      examples = yaml.examples;
    } else {
      params = optionsContext(schemas[slug]);
      examples = fixturesContext(fixtures[slug]).fixtures;
    }

    const story = storiesOf("Components / " + slug, module);
    const argTypes = {};

    for (const param of params) {
      argTypes[param.name] = { type: param.type };
    }

    for (const example of examples) {
      if (example.hidden) {
        continue
      }

      story.add(example.name, (params) => component({ params }), {
        component,
        argTypes,
        args: example.options ?? example.data,
      });
    }
  }

  return Object.keys(components)
}

// map from component slugs to full paths
function buildSlugMap(context) {
  return Object.fromEntries(
    context.keys().map((key) => [getSlug(key), key])
  );
}

// return the component's slug from its path (taken from the directory containing its implementation)
function getSlug(x) {
  const match = /\/([^\/]*)/.exec(x);
  return match && match[1];
}
