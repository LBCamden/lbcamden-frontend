// TODO: we're using a deprecated API as it allows us to programatically create stories
// this could also be accomplished using the modern API via code-generation using webpack, but this is easier for now
const {storiesOf} = require('@storybook/html')

// Build up a collection of all our component template files
const componentsContext = require.context(
  '../src/lbcamden/components',
  true,
  /template\.njk$/,
)

// Build up a collection of all our yaml files specifying examples
const yamlContext = require.context(
  '../src/lbcamden/components',
  true,
  /\.yaml$/,
)

// force _all_ nunjucks templates to load so that client-side template imports work
const allTemplates = require.context(
  "../src/lbcamden",
  true,
  /\.njk$/
)
allTemplates.keys().forEach(allTemplates)

// return the component's slug from its path (taken from the directory containing its implementation)
const getSlug = (x) => {
  const match = /\/([^\/]*)/.exec(x)
  return match && match[1]
}

// map from component slugs to full paths
const components = Object.fromEntries(
  componentsContext.keys().map(key => [getSlug(key), key])
)

// iterate over yaml component schemas and generate stories from examples
//
// TODO: add a flag to the examples to specify if they should show up here?
for (const key of yamlContext.keys()) {
  const slug = getSlug(key)

  if (!components[slug]) {
    continue
  }

  const component = componentsContext(components[slug]).default
  const yaml = yamlContext(key).default

  const story = storiesOf('Components / ' + slug, module)
  const argTypes = {}

  for (const param of yaml.params) {
    argTypes[param.name] = { type: param.type }
  }

  for (const example of yaml.examples) {
    story.add(
      example.name,
      (params) => component({ params }),
      {
        component,
        argTypes,
        args: example.data
      }
    )
  }
}
