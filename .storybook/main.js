import govukStorybook from "storybook-addon-govuk-fixtures";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  addons: [
    govukStorybook({
      fixtures: [
        {
          storyNamespace: "components/govuk",
          searchPath: "node_modules/govuk-frontend/dist",
          nunjucksPrefix: 'govuk'
        },
        {
          storyNamespace: "components/lbcamden",
          searchPath: "src/lbcamden",
          type: "yaml",
          nunjucksPrefix: 'LBCamden'
        },
      ],
      fullPageExamples: [
        {
          searchPath: "examples/patterns",
          storyNamespace: 'patterns',
        }
      ],
      additionalTemplatePaths: ["examples"],
    }),
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
