LBCamden Frontend
=====================

![Tests](https://github.com/LBCamden/lbcamden-frontend/actions/workflows/tests.yml/badge.svg?branch=main) ![NPM Version](https://img.shields.io/npm/v/lbcamden-frontend) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://chromatic.com)

LBCamden Frontend contains the code you need to start building a user interface for Camden platforms and services.

It utilises components from the [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend), and extends these with components and customisations developed for Camden specific implementations.

> [!TIP]
> LBCamden Frontend is best used in conjunction with the guidance included in the [LBCamden Design System documentation](https://zeroheight.com/4c170debc).

LBCamden Frontend is currently in Beta while we finish implementing our governance processes for contribution and usage. You can read more about this in our [Before you start](https://zeroheight.com/4c170debc/v/latest/p/22c3a6-before-you-start) design system page.

## Developing applications with LBCamden Frontend
To start implementing LBCamden Frontend in to your project, you can read the [Get started for developers documentation](https://zeroheight.com/4c170debc/p/718aa5-get-started-for-developers) within our Design System documentation. This includes instructions about how to install the LBCamden Frontend package and the suggested routes for integration.

## Extending or customising LBCamden Frontend
To extend or customise LBCamden Frontend, start by cloning this repository to your local machine and reading the sections below, and then run `npm i` to install all dependencies.

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

### How to run linting
`npm run lint`

### How to run test suite
`npm run test`

### How to run visual regression tests
`npm run chromatic`

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