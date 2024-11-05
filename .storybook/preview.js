import "../src/lbcamden/all.scss"
import { initAll } from "../src/lbcamden/all"

document.body.classList.add("govuk-frontend-supported")
initAll()

/** @type { import('@storybook/html').Preview } */
const preview = {
  tags: ["autodocs"],
  decorators: [
    (story => {
      setTimeout(() => initAll())
      return story()
    })
  ]
};

export default preview;
