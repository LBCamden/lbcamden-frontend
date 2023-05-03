/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('node-sass'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  "webpackFinal": (config) => {
    config.module.rules.push({
        test: /\.njk$/,
        use: [
            {
                loader: 'simple-nunjucks-loader',
            }
        ]
    });

    // Return the altered config
    return config;
  }
};
export default config;
