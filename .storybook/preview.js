<<<<<<< HEAD
import 'iframe-resizer/js/iframeResizer.contentWindow'

=======
>>>>>>> 9f6162f3 (Implement storybook, generating stories from yaml files (#54))
/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (story) => {
      document.body.classList.add('js-enabled')

      setTimeout(() => {
        GOVUKFrontend.initAll()
        LBCamdenFrontend.initAll()
      })

      return story()
    }
  ]
};

export default preview;
