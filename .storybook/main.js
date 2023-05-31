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

    config.module.rules.push({
      test: /\.scss/,
      use: ["style-loader", { loader: "css-loader", options: { url: false } }, "sass-loader"],
    })

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
