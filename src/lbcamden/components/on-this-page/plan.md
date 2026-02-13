## Plan: On-This-Page Component Completion

**TL;DR:** The `on-this-page` component was scaffolded from `video-embed` and only the template + macro are correct — YAML, SCSS, tests, and JS all need replacing. The template already supports server-rendered items via `params.items`, and a new client-side JS file (following the `guide-content` pattern) should be added to **auto-discover headings from the DOM** when items aren't supplied. This hybrid approach is the right call for a **framework-agnostic component library**.

### Why Client-Side Heading Collection Makes Sense

This is a **shared frontend component library** consumed by potentially many different backends (Drupal, static sites, Eleventy, etc.). Having the component scan the DOM for headings client-side means:

1. **Backend-agnostic** — each consumer doesn't need to separately wire up heading extraction in their own templating layer (GraphQL, Eleventy collections, Drupal preprocess hooks, etc.). The component just works wherever it's dropped in.
2. **Single source of truth** — headings already exist in the page HTML. Re-extracting them server-side means maintaining two parallel lists that can drift apart.
3. **Dynamic content** — if any content loads or changes after initial render, client-side scanning reflects the real state.
4. **Library boundary** — this repo (`lbcamden-frontend`) ships as an npm package. It can't assume anything about the consumer's backend. A JS-based fallback is the only portable option.

That said, the template **should still accept `params.items`** for progressive enhancement — so a backend *can* supply them (better for SEO, no layout shift, works without JS). The JS should only kick in when items are empty.

### Steps

1. **Add client-side JS** as `on-this-page.js` — follow the constructor + `init()` pattern from guide-content.js: query all heading elements on the page, filter by a configurable selector (e.g. `data-on-this-page-heading`), generate anchor `id`s if missing, and populate the list. Add `data-module="lbcamden-on-this-page"` to the template's root `<div>`.
2. **Register the module** in all.js alongside the existing `Header`, `Button`, `GuideContent`, and `GuideHeader` modules.
3. **Fix the tests** in template.test.js — test both server-rendered items (params-driven) and the JS-enhanced path (DOM heading scanning), using the `render` and `renderAndInitialise` helpers from jest-helpers.js.

- sluggified ids from wagtail in graphql response
- query for on this page, get every heading block 
- logic which combines on-this-page prefs and heading block prefs, pass to frontend lib
- modify heading component to include sluggfiied id
- double loop? where will this logic sit?


- pass entire page object into wagtail side
- might be hard in nunjucks?
- postprocess with article.content as extra param 
- graphql post processing



- header block in wagtail returns a slugified id, django has a standard sluggify function
- blocks also have a unique id, a short hash?
- block order integer? (not easily available)



### Further Considerations

1. **Heading selector strategy** — should the JS scan *all* `h2`/`h3` elements on the page, or only those with a specific data attribute like `data-on-this-page`? Data-attribute opt-in is safer and more explicit.
2. **Progressive enhancement** — when JS populates the list, should the component be hidden until JS runs (to avoid an empty box flash), or always visible? A CSS class toggled by JS (e.g. `.lbcamden-on-this-page--enhanced`) would handle this.
3. **Smooth scroll** — should clicking an anchor link smooth-scroll to the heading? This is a one-liner (`scroll-behavior: smooth`) but worth deciding upfront.

---
