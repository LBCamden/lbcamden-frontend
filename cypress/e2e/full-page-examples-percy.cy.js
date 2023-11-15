// import * as urls from '../../_site/urls.js'

const urls = [
  '/full-page-examples/services',
  '/full-page-examples/directory-single',
  '/full-page-examples/directory-multi',
  '/full-page-examples/article',
  '/full-page-examples/category-page',
  '/full-page-examples/category-page-housing',
  '/full-page-examples/check-your-answers',
  '/full-page-examples/cookie-consent-page',
  '/full-page-examples/home-page',
  '/full-page-examples/home-page-engagement',
  '/full-page-examples/search',
  '/full-page-examples/super-header-page',
  '/full-page-examples/guide-page'
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