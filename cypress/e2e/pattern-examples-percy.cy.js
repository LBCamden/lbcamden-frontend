// import * as urls from '../../_site/urls.js'

const urls = [
  '/examples/button-groups',
  '/examples/buttons',
  '/examples/card-grid',
  '/examples/cards',
  '/examples/conditional-reveals',
  '/examples/details-polyfill',
  '/examples/error-messages',
  '/examples/error-summary',
  '/examples/error-summary-with-messages',
  '/examples/error-summary-with-one-thing-per-page',
  '/examples/form-controls-states',
  '/examples/form-elements',
  '/examples/grid',
  '/examples/labels-legends-and-headings',
  '/examples/links',
  '/examples/multiple-radio-groups',
  '/examples/rows',
  '/examples/scoped-initialisation',
  '/examples/small-form-controls',
  '/examples/tags',
  '/examples/template-custom',
  '/examples/template-default',
  '/examples/text-alignment',
  '/examples/typography'
];
// const excludePagesBreadcrumb = ['/404.html', '/', '/typography/', '/typography-alt/', '/typography-alt-1/', '/accessibility/'];
// const excludePagesCGULinkInPhaseBanner = ['/404.html', '/', '/typography/', '/typography-alt/', '/typography-alt-1/', '/accessibility/', '/cookies/'];
const viewports = ['macbook-13']

describe('Full Page examples visual regression test', () => {

  urls.forEach(url => {
    viewports.forEach(viewport => {
  
        describe(`url: ${url} (${viewport})`, () => {
    
            it(`Should display breadcrumb, should have well formed internal urls ${url}`, () => {
              //uses the URL alias above
              cy.viewport(viewport);
              cy.visit('http://localhost:3000' + url);
              
              cy.percySnapshot(url, { widths: [320, 576, 768, 1200] });

            });
        });
    })
  });
});