// TODO: we're using a deprecated API as it allows us to programatically create stories
// this could also be accomplished using the modern API via code-generation using webpack, but this is easier for now

import { storiesOf } from "@storybook/html";
import _ from "lodash";

import {escape} from 'html-escaper';


// force _all_ nunjucks templates to load so that client-side template imports work
requireAll(require.context("../src/lbcamden", true, /\.njk$/));

// force _all_ nunjucks templates to load so that client-side template imports work
requireAll(require.context("./govuk", true, /\.njk$/));

const camdenComponents =  buildComponentStories({
  // Build up a collection of all our component template files
  componentsContext: require.context(
    "../src/lbcamden/components",
    true,
    /template\.njk$/
  ),

  // Build up a collection of all our yaml files specifying examples
  schemaContext: require.context("../src/lbcamden/components", true, /\.yaml$/),
  examples: [
    require.context("../src/lbcamden/components", true, /\.yaml$/)
  ]
});

buildComponentStories({
  componentsContext: require.context("./govuk/components", true, /template\.njk$/),
  schemaContext: require.context("./govuk/components", true, /macro-options\.json$/),

  examples: [
    require.context("./govuk/components", true, /fixtures\.json$/),
    require.context("../src/govuk/examples", true, /examples\.yaml$/)
  ],
  exclude: camdenComponents
});

function requireAll(context) {
  context.keys().forEach((key) => context(key));
}

 function buildComponentStories({
  componentsContext,
  schemaContext,
  examples,
  exclude = []
}) {
  const components = buildSlugMap(componentsContext);
  const schemaMap = buildSlugMap(schemaContext);
  const examplesMap = {}

  for (const examplesContext of examples) {
    const mappedExamples = buildSlugMap(examplesContext);

    for (const [slug, modPath] of Object.entries(mappedExamples)) {
      const componentExamples = examplesMap[slug] ||= []
      let exampleDefs

      if (modPath.endsWith('.yaml')) {
        exampleDefs = examplesContext(modPath).default.examples
      } else {
        exampleDefs = examplesContext(modPath).fixtures
      }

      for (const ex of exampleDefs) {
        if (!ex.hidden) {
          componentExamples.push(ex)
        }
      }
    }
  }

  function getSchema(slug) {
    const schemaPath = schemaMap[slug]
    if (schemaPath.endsWith('.yaml')) {
      return schemaContext(schemaPath).default.params
    } else {
      return schemaContext(schemaPath)
    }
  }

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
    const examples = examplesMap[slug]
    const params = getSchema(slug)

    const story = storiesOf("Components / " + slug, module);
    const argTypes = {};

    for (const param of params) {
      if (param.control === 'image') {
        argTypes[param.name] = {
          control: {
            type: 'file',
            accept: ['.png', '.jpg', '.jpeg', '.webp']
          }
        };

      } else {
        argTypes[param.name] = { type: param.type };
      }
    }

    for (const example of examples) {
      if (example.hidden) {
        continue
      }

      story.add(example.name, (params) => {
        for (const key of Object.keys(params)) {
          if (params[key] instanceof Blob) {
            params[key] = URL.createObjectURL(params[key])
          }
        }

        const html = component({ params }).trim()
        const nunjucks = escape(`
{% from "lbcamden/components/${slug}/macro.njk" import ${slug} %}

${slug}(${JSON.stringify(params, null, 4)})
`.trim())

        if (window.parent) {
          window.parent.postMessage({
            type: 'lbbcamden.story-source',
            nunjucks,
            html: escape(html),
            href: window.location.href
          }, '*')
        }

        return html.trim()
      }, {
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
