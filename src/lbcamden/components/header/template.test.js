/**
 * @jest-environment jsdom
 */
/* eslint-env jest */

const axe = require('../../../../lib/axe-helper')

const { render, getExamples } = require('../../../../lib/jest-helpers')

const examples = getExamples('logo')

describe('logo', () => {
  describe('default example', () => {
    it('passes accessibility tests', async () => {
      const $ = render('logo', examples.default)

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('has a role of `banner`', () => {
      const $ = render('logo', examples.default)

      const $component = $('.govuk-logo')
      expect($component.attr('role')).toEqual('banner')
    })
  })

  describe('custom options', () => {
    it('renders attributes correctly', () => {
      const $ = render('logo', examples.attributes)

      const $component = $('.govuk-logo')
      expect($component.attr('data-test-attribute')).toEqual('value')
      expect($component.attr('data-test-attribute-2')).toEqual('value-2')
    })

    it('renders classes', () => {
      const $ = render('logo', examples.classes)

      const $component = $('.govuk-logo')
      expect($component.hasClass('app-logo--custom-modifier')).toBeTruthy()
    })

    it('renders custom container classes', () => {
      const $ = render('logo', examples['full width'])

      const $component = $('.govuk-logo')
      const $container = $component.find('.govuk-logo__container')

      expect($container.hasClass('govuk-logo__container--full-width')).toBeTruthy()
    })

    it('renders custom navigation classes', () => {
      const $ = render('logo', examples['full width with navigation'])

      const $component = $('.govuk-logo')
      const $container = $component.find('.govuk-logo__navigation')

      expect($container.hasClass('govuk-logo__navigation--end')).toBeTruthy()
    })

    it('renders home page URL', () => {
      const $ = render('logo', examples['custom homepage url'])

      const $component = $('.govuk-logo')
      const $homepageLink = $component.find('.govuk-logo__link--homepage')
      expect($homepageLink.attr('href')).toEqual('/')
    })
  })

  describe('with product name', () => {
    it('renders product name', () => {
      const $ = render('logo', examples['with product name'])

      const $component = $('.govuk-logo')
      const $productName = $component.find('.govuk-logo__product-name')
      expect($productName.text().trim()).toEqual('Product Name')
    })
  })

  describe('with service name', () => {
    it('renders service name', () => {
      const $ = render('logo', examples['with service name'])

      const $component = $('.govuk-logo')
      const $serviceName = $component.find('.govuk-logo__service-name')
      expect($serviceName.text().trim()).toEqual('Service Name')
    })

    it('wraps the service name with a link when a url is provided', () => {
      const $ = render('logo', examples['with service name'])

      const $component = $('.govuk-logo')
      const $serviceName = $component.find('.govuk-logo__service-name')
      expect($serviceName.get(0).tagName).toEqual('a')
      expect($serviceName.attr('href')).toEqual('/components/logo')
    })

    it('does not use a link when no service url is provided', () => {
      const $ = render('logo', examples['with service name but no service url'])

      const $component = $('.govuk-logo')
      const $serviceName = $component.find('.govuk-logo__service-name')
      expect($serviceName.get(0).tagName).toEqual('span')
      expect($serviceName.attr('href')).toBeUndefined()
    })
  })

  describe('with navigation', () => {
    it('passes accessibility tests', async () => {
      const $ = render('logo', examples['with navigation'])

      const results = await axe($.html())
      expect(results).toHaveNoViolations()
    })

    it('renders navigation', () => {
      const $ = render('logo', examples['with navigation'])

      const $component = $('.govuk-logo')
      const $list = $component.find('ul.govuk-logo__navigation-list')
      const $items = $list.find('li.govuk-logo__navigation-item')
      const $firstItem = $items.find('a.govuk-logo__link:first-child')
      expect($items.length).toEqual(4)
      expect($firstItem.attr('href')).toEqual('#1')
      expect($firstItem.text()).toContain('Navigation item 1')
    })

    it('renders navigation default label correctly', () => {
      const $ = render('logo', examples['with navigation'])

      const $component = $('.govuk-logo')
      const $nav = $component.find('nav')

      expect($nav.attr('aria-label')).toEqual('Menu')
    })

    it('allows navigation label to be customised', () => {
      const $ = render('logo', examples['with custom navigation label'])

      const $component = $('.govuk-logo')
      const $nav = $component.find('nav')

      expect($nav.attr('aria-label')).toEqual('Custom navigation label')
    })

    it('renders navigation with active item', () => {
      const $ = render('logo', examples['with navigation'])

      const $activeItem = $('a.govuk-logo__navigation-item:first-child')
      expect($activeItem.hasClass('govuk-logo__navigation-item--active'))
    })

    it('allows navigation item text to be passed whilst escaping HTML entities', () => {
      const $ = render('logo', examples['navigation item with html as text'])

      const $navigationLink = $('.govuk-logo__navigation-item a')
      expect($navigationLink.html()).toContain('&lt;em&gt;Navigation item 1&lt;/em&gt;')
    })

    it('allows navigation item HTML to be passed un-escaped', () => {
      const $ = render('logo', examples['navigation item with html'])

      const $navigationLink = $('.govuk-logo__navigation-item a')
      expect($navigationLink.html()).toContain('<em>Navigation item 1</em>')
    })

    it('renders navigation item with text without a link', () => {
      const $ = render('logo', examples['navigation item with text without link'])

      const $navigationItem = $('.govuk-logo__navigation-item')
      expect($navigationItem.html().trim()).toEqual('Navigation item 1')
    })

    it('renders navigation item with html without a link', () => {
      const $ = render('logo', examples['navigation item with html without link'])

      const $navigationItem = $('.govuk-logo__navigation-item')
      expect($navigationItem.html()).toContain('<em>Navigation item 1</em>')
    })

    it('renders navigation item anchor with attributes', () => {
      const $ = render('logo', examples['navigation item with attributes'])

      const $navigationLink = $('.govuk-logo__navigation-item a')
      expect($navigationLink.attr('data-attribute')).toEqual('my-attribute')
      expect($navigationLink.attr('data-attribute-2')).toEqual('my-attribute-2')
    })

    describe('menu button', () => {
      it('has an explicit type="button" so it does not act as a submit button', () => {
        const $ = render('logo', examples['with navigation'])

        const $button = $('.govuk-logo__menu-button')

        expect($button.attr('type')).toEqual('button')
      })
      it('renders default label correctly', () => {
        const $ = render('logo', examples['with navigation'])

        const $button = $('.govuk-logo__menu-button')

        expect($button.attr('aria-label')).toEqual('Show or hide menu')
      })
      it('allows label to be customised', () => {
        const $ = render('logo', examples['with custom menu button label'])

        const $button = $('.govuk-logo__menu-button')

        expect($button.attr('aria-label')).toEqual('Custom button label')
      })
    })
  })

  describe('SVG logo', () => {
    const $ = render('logo', examples.default)
    const $svg = $('.govuk-logo__logotype-crown')

    it('sets focusable="false" so that IE does not treat it as an interactive element', () => {
      expect($svg.attr('focusable')).toEqual('false')
    })

    it('sets aria-hidden="true" so that it is ignored by assistive technologies', () => {
      expect($svg.attr('aria-hidden')).toEqual('true')
    })

    describe('fallback PNG', () => {
      const $fallbackImage = $('.govuk-logo__logotype-crown-fallback-image')

      it('is invisible to modern browsers', () => {
        expect($fallbackImage.length).toEqual(0)
      })
    })
  })
})
