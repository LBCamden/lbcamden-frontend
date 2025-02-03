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
To extend or customise LBCamden Frontend, start by cloning this [repository](https://github.com/LBCamden/lbcamden-frontend) to your local machine, and then use `npm i` to install all dependencies.

> [!IMPORTANT] 
> While LBCamden Frontend is publicly available, we are still establishing our contribution process for external changes. See the [contributing section](#contributing) for more information.

### Reviewing the Frontend Library
From version 1.0.0, LBCamden Frontend is entirely [Storybook](https://storybook.js.org/) based, allowing components to be viewed and configured via the web UI. 

> [!WARNING]  
> Previous versions that implemented the GOV.UK Frontend Review app are no longer supported.

To start Storybook on your local machine, use `npm run start` and follow the instructions in your terminal.

Storybook displays both the GOV.UK Frontend components (previously called "Base" components) and LBCamden Frontend components (previously called "Bespoke" components). It also displays examples of common patterns and full page designs.

Each component within Storybook includes instances of that component configured with parameters that are contained within the component's fixtures file. For information about expanding the example instances see the [Adding new examples](#adding-new-examples) section. 

### Component structure
Each component within LBCamden Frontend follows the GOV.UK Frontend component structure.

A valid component has:
- a directory within the `components` directory with a [kebab case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) name
- a file called `macro.njk` which serves as an entry point for the component
- a file called `template.njk` which contains the component's mark up and dynamic functionality via [Nunjucks](https://mozilla.github.io/nunjucks/) code.
- a .scss file named the same as the component's directory
- a .yaml file named the same as the component's directory, which contains information about the component's parameters and example configurations rendered in Storybook
- a file called `template.test.js` which contains the standard component accessibility test and any further functional tests required.

Additionally, components may also have:
- a .js file named the same as the component's directory, which contains additional dynamic functionality relating to the component
- a .test.js file names the same as the component's directory, which contains additional tests that relate to  dynamic functionality defined in the file above
- Additional .scss or .njk files to allow for more modular component structure
- a README.md file with additional information about the component and its usage

> [!IMPORTANT]
> Placing additional files inside a component's directory may cause the build and test processes to fail.

### SASS variables

### Adding new examples [#](#adding-new-examples)

## Testing LBCamden Frontend
While developing new components or amending aspect of LBCamden Frontend, it is suggested you regularly lint and test your code using the tools provided.

### How to run linting
LBCamden Frontend includes linting for both scss files (using [Stylelint](https://stylelint.io/)) and JavaScript (using [Standard](https://standardjs.com/))

To run all linting tools sequentially, use `npm run lint`, or see the 'scripts' section of `package.json` for the commands to run individual linters.

### How to run the test suite
LBCamden Frontend includes a suite of tests for all components (using [Vitest](https://vitest.dev/)). As part of extending or customising LBCamden Frontend it is required that you include additional tests where appropriate. 

As well as component specific tests, each component is tested for WCAG 2.2 AA compliance using a Vitest implementation of [Axe](https://github.com/dequelabs/axe-core).

To run all tests, use `npm run test` and monitor the output. By default, Vitest will run in [watch mode](https://vitest.dev/guide/features#watch-mode). See the 'scripts' section of `package.json` for the commands to run individual tests or single run test suites.

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
LBCamden Frontend is published as a package via [npm](https://www.npmjs.com/). This repository contains scripts to build and release updates. Only authorised internal users can release a new version of the package.

### How to package up for release
To build the package ahead of release, use `npm run build`. This script collects and parses the files required for each component, and bundles up the supporting CSS and JS files. The output of this command is placed in the `/package` directory which is included in the repository.

Once built, use `npm run test:build` to verify the output matches the required format. You should also run the visual regression tests against your changes prior to releasing an update.

### How to release
To publish an update LBCamden package, use `npm run release` when checked into the `main` branch. You will need to be authenticated into npm, and be part of the LBCamden organisation.

Once released, you must update the [Releases section](https://github.com/LBCamden/lbcamden-frontend/releases) of the repository and set the current release to "Latest".

## Example pages and patterns

## Getting updates
We publish breaking changes as part of our [release notes](https://github.com/LBCamden/lbcamden-frontend/releases) for each release.

LBCamden Frontend aims to follow [semantic versioning](https://semver.org/), and implements MAJOR, MINOR and PATCH releases.

If you are implementing LBCamden Frontend into a project, it is recommend that you have functional and visual regression testing as part of your practise. We recommend using [Cypress](https://www.cypress.io/) and [Chromatic](https://www.chromatic.com/) as part of your toolchain.

## Browser support
We aim to follow the GOV.UK Frontend standards for [browser support](https://frontend.design-system.service.gov.uk/browser-support/#browser-support). 

## Accessibility and assistive technology
We aim to meet WCAG 2.2 AA for all components. This does not mean that any project implementing LBCamden Frontend is automatially compliant, and all projects will require futher automated and manual testing to ensure compliance. The LBCamden Design System documentation contains more information in the [Accessibility](https://zeroheight.com/4c170debc/p/69d09b-accessibility) section.

## Security
LBCamden is an advocate of responsible vulnerability disclosure. If you’ve found a vulnerability, we would like to know so we can fix it.

While we are working on our security policy for this work, please [contact the Design System team](#contact) if you have any question. Further information and guidance about disclosing security issues can also be found via the [GOV.UK Frontend Security policy](https://github.com/alphagov/govuk-frontend/security/policy).

## Licence
Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation. The documentation is &copy; Crown copyright and available under the terms of the Open Government 3.0 licence.

## Contributing [#](#contributing)
We are working on our contribution process. If you are interested in implementing or extending LBCamden Frontend while we establish our formal processes, please [contact the Design System team](#contact).

## Contact the team [#](#contact)
To ask questions, inform us about any security issues, or discuss how to implement or extend LBCamden Frontend, please contact the Design System team via [design-system@camden.gov.uk](mailto:design-system@camden.gov.uk)