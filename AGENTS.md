# Repository Guidelines

## Project Structure & Module Organization

Core library code lives in `src/lbcamden/`. Components are under `src/lbcamden/components/<kebab-case-name>/`; a typical component contains `macro.njk`, `template.njk`, a matching `.scss` file, YAML fixtures, and `template.test.js`. Shared settings, helpers, elements, overrides, fonts, and images sit in neighboring directories. Import component styles through `src/lbcamden/components/_all.scss`.

Storybook configuration is in `.storybook/`, while reusable page and pattern demonstrations live in `examples/`. Build-output validation tests are in `tests/`. Generated distributable artifacts are written to `dist/` and `package/`; do not edit them manually.

## Build, Test, and Development Commands

Use Node `20.10.x` and install dependencies with `npm install`.

- `npm start`: run Storybook locally on port 6006.
- `npm run build`: build both `dist/` and the publishable `package/`.
- `npm run build:storybook`: create a static Storybook build.
- `npm run changeset`: record the version impact and release note for a publishable change.
- `npm test`: run Vitest in watch mode.
- `npm run test:run`: run the complete test suite once (preferred for CI checks).
- `npm run test:build:run`: validate generated package and distribution output.
- `npm run lint`: run StandardJS and Stylelint checks.

## Coding Style & Naming Conventions

Follow `.editorconfig`: use LF endings, final newlines, and two-space indentation for JavaScript, SCSS, Nunjucks, JSON, and YAML. StandardJS formats JavaScript; `stylelint-config-gds` and `stylelint-order` govern SCSS. Use kebab-case component directories and files. Prefix Camden CSS classes with `lbcamden-`; retain `govuk-` for upstream GOV.UK styles. Avoid changing vendored polyfills or upstream component markup unless necessary.

## Testing Guidelines

Tests use Vitest, Testing Library, JSDOM, and `vitest-axe`. Place template coverage in `template.test.js` and JavaScript behavior tests in `<component>.test.js`. Every new or changed component should cover rendered behavior and WCAG 2.2 AA checks. Run `npm run lint && npm run test:run` before submitting; run build validation when component files or packaging changes.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative summaries such as `Build package for 1.0.8` or `Add a fullstop`; include an issue/PR number when applicable. Keep commits focused. Pull requests should explain the user-facing change, link the relevant issue, list test evidence, and include Storybook or Chromatic screenshots for visual changes. Call out accessibility impacts and generated `dist/` or `package/` updates. Discuss external contributions with the Design System team before substantial work.
