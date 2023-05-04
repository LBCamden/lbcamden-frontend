/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  features: {
    storyStoreV7: false,
  },
  stories: ["./stories.js"],
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
  staticDirs: [
    {
      from: '../dist/assets',
      to: '/assets'
    },
    {
      from: '../dist',
      to: '/dist'
    }
  ],
  "webpackFinal": (config) => {
    config.module.rules.push({
        test: /\.njk$/,
        use: [
            {
                loader: require.resolve('./njk-loader.js'),
            }
        ]
    });



    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        path: 'path-webpack'
      }
    }

    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      }
    )

    // Return the altered config
    return config;
  }
};
export default config;
