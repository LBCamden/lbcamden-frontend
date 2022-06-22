LBCamden Frontend ·
[![Build Status](https://github.com/benwatsonuk/lbcamden-frontend/workflows/Tests/badge.svg)](https://github.com/benwatsonuk/lbcamden-frontend/actions?query=workflow%3ATests+branch%3Amain)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
=====================

LBCamden Frontend contains the code you need to start building a user interface
for government platforms and services.

It is built on top of the amazing [GOV.UK Frontend
System](https://frontend.design-system.service.gov.uk/). The aim of the project is to follow conventions set out in GOV.UK Frontend and incorporate updates and releases in that project.

This documentation should be updated soon - at time of writing (v0.0.1) only basic files are present and are being used to validate a number of assumptions. 

See live examples of GOV.UK Frontend components, and guidance on when to use
them in your service, in the [GOV.UK Design
System](https://design-system.service.gov.uk/).

## Contact the team

TBC

## Quick start

The set-up process should mirror that of GOV.UK Frontend exactly: There are 2 ways to start using GOV.UK Frontend in your app.

Once installed, you will be able to use the code from the examples in the
[GOV.UK Design System](https://design-system.service.gov.uk/)
in your service.

### 1. Install with npm (recommended)

We recommend [installing GOV.UK Frontend using node package manager
(npm)](https://frontend.design-system.service.gov.uk/installing-with-npm/).

### 2. Install using compiled files

You can also install GOV.UK Frontend by [copying our CSS, JavaScript and asset
files into your project](https://frontend.design-system.service.gov.uk/install-using-precompiled-files/).

## Browser and assistive technology support

GOV.UK Frontend supports:

- [recommended browsers](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in)
- [recommended assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#which-assistive-technologies-to-test-with)
- Internet Explorer 8, 9 and 10, although components may not look perfect
- your users overriding colours in Windows, Firefox and Chrome

## Accessibility

The GOV.UK Design System team works hard to ensure that GOV.UK Frontend is accessible.

Using Frontend will help your service meet [level AA of WCAG 2.1](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag). But you must still [check that your service meets accessibility requirements](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction), especially if you extend or modify components.

You should also use:

- [the JavaScript from GOV.UK Frontend](https://frontend.design-system.service.gov.uk/importing-css-assets-and-javascript/#javascript)
- [a separate stylesheet](https://frontend.design-system.service.gov.uk/supporting-ie8/) if you support Internet Explorer 8

Your service will not meet level AA of WCAG 2.1 if you use [compatibility mode](https://frontend.design-system.service.gov.uk/compatibility-mode/) to use GOV.UK Frontend with old frameworks or the old colour palette.

You can also read the [accessibility statement for the GOV.UK Design System](https://design-system.service.gov.uk/accessibility/).

### Accessibility warnings

If you get a warning from a linter or accessibility checker, check our list of [issues you should not need to fix](https://github.com/alphagov/govuk-frontend/issues/1280#issuecomment-509588851).

## Getting updates

To be notified when there’s a new release, you can either:

- [watch the govuk-frontend Github repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)
- join the [#govuk-design-system channel on cross-government Slack](https://ukgovernmentdigital.slack.com/app_redirect?channel=govuk-design-system)

Find out how to [update with npm](https://frontend.design-system.service.gov.uk/updating-with-npm/).

### Security

GDS is an advocate of responsible vulnerability disclosure. If you’ve found a vulnerability, we would like to know so we can fix it.

For full details on how to tell us about vulnerabilities, [see our security policy](https://github.com/alphagov/govuk-frontend/security/policy).

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This
covers both the codebase and any sample code in the documentation. The
documentation is &copy; Crown copyright and available under the terms of the
Open Government 3.0 licence.

## Contributing

TBC