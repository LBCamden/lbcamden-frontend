LBCamden Frontend
=====================

![Tests](https://github.com/LBCamden/lbcamden-frontend/actions/workflows/tests.yml/badge.svg?branch=main) ![NPM Version](https://img.shields.io/npm/v/lbcamden-frontend) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://chromatic.com)

LBCamden Frontend contains the code you need to start building a user interface for Camden platforms and services.

It utilises components from the [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend), and extends these with components and customisations developed for Camden specific implementations.

> [!TIP]
> LBCamden Frontend is best used in conjunction with the guidance included in the [LBCamden Design System documentation](https://zeroheight.com/4c170debc).

LBCamden Frontend is currently in Beta while we finish implementing our governance processes for contribution and usage. You can read more about this in our [Before you start](https://zeroheight.com/4c170debc/v/latest/p/22c3a6-before-you-start) design system page.

## Developing applications with LBCamden Frontend
To start implementing LBCamden Frontend in your project, you can read the [Get started for developers documentation](https://zeroheight.com/4c170debc/p/718aa5-get-started-for-developers) within our Design System documentation. This includes instructions about how to install the LBCamden Frontend package and the suggested routes for integration.

## Extending or customising LBCamden Frontend
To extend or customise LBCamden Frontend, start by cloning this [repository](https://github.com/LBCamden/lbcamden-frontend) to your local machine, and then running `npm i` to install all dependencies.

> [!IMPORTANT] 
> While LBCamden Frontend is publicly available, we are still establishing our contribution process for external changes. See the [contributing section](#contributing) for more information.

### Reviewing the Frontend Library
From version 1.0.0, LBCamden Frontend is entirely [Storybook](https://storybook.js.org/) based, allowing components to be viewed and configured via the web UI. 

> [!WARNING]  
> Previous versions that implemented the GOV.UK Frontend Review app are no longer supported.

To start Storybook on your local machine, run `npm run start` and follow the instructions in your terminal.

Storybook displays both the GOV.UK Frontend components (previously called "Base" components) and LBCamden Frontend components (previously called "Bespoke" components). It also displays examples of common patterns and full page designs.

Each component within Storybook includes instances of that component configured with parameters that are contained within the component's fixtures file. For information about expanding the example instances see the [Adding new examples](#adding-new-examples) section. 

### Component structure

### SASS variables

### Adding new examples [#](#adding-new-examples)

## Testing LBCamden Frontend
While developing new components or amending aspect of LBCamden Frontend, it is suggested you regularly lint and test your code using the tools provided.

### How to run linting
LBCamden Frontend includes linting for both scss files (using [Stylelint](https://stylelint.io/)) and JavaScript (using [Standard](https://standardjs.com/))

To run all linting tools sequentially, run `npm run lint`, or see the 'scripts' section of `package.json` for the commands to run individual linters.

### How to run the test suite
LBCamden Frontend includes a suite of tests for all components (using [Vitest](https://vitest.dev/)). As part of extending or customising LBCamden Frontend it is required that you include additional tests where appropriate. 

As well as component specific tests, each component is tested for WCAG 2.2 AA compliance using a Vitest implementation of [Axe](https://github.com/dequelabs/axe-core).

To run all tests, run `npm run test` and monitor the output. By default, Vitest will run in [watch mode](https://vitest.dev/guide/features#watch-mode). See the 'scripts' section of `package.json` for the commands to run individual tests or single run test suites.

> [!TIP]
> VS Code users may find the [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) useful while developing changes.

### How to run visual regression tests
LBCamden Frontend implement visual regression tests for each component, pattern and full page example using [Chromatic](https://www.chromatic.com/). Visual regression testing is only available to internal Camden users, or via personal Chromatic accounts. You will need to create a Chromatic project and retrieve the project token to be able to run the tests.

Once you have your Chromatic project token, use
`export CHROMATIC_PROJECT_TOKEN=YOUR_CHROMATIC_PROJECT_TOKEN`
and then
`npm run chromatic`
to run build and upload all components to Chromatic for testing. Follow the instruction outputted to the terminal to review changes and re-baseline your project.

## Releasing LBCamden Frontend

### How to package up for release
`npm run build`

### How to release
`npm run release`

## Example pages and patterns

## Getting updates
We'll publish breaking changes in our release notes here.
Follow semantic versioning
Recommend that you implement visual regression testing as part of your practise

## Browser support
We aim to follow the GOV.UK standards for browser support, read here

## Accessibility and assistive technology
We aim to meet WCAG 2.2 AA for all components.

## Security
GDS is an advocate of responsible vulnerability disclosure. If you’ve found a vulnerability, we would like to know so we can fix it.

For full details on how to tell us about vulnerabilities, [see our security policy](https://github.com/alphagov/govuk-frontend/security/policy).

## Licence
Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation. The documentation is &copy; Crown copyright and available under the terms of the Open Government 3.0 licence.

## Contributing [#](#contributing)
We are working on our contribution process

## Contact the team
If you wish to 