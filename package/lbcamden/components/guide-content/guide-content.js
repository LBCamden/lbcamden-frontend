(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend.GuideContent', factory) :
	(global.GOVUKFrontend = global.GOVUKFrontend || {}, global.GOVUKFrontend.GuideContent = factory());
}(this, (function () { 'use strict';

function LBCamdenGuideContent ($module) {
  this.$module = $module;
  this.headingTarget = this.$module && this.$module.dataset.headingTarget;
}

LBCamdenGuideContent.prototype.init = function () {
  if (!this.$module) {
    return
  }

  window.addEventListener('hashchange', this.showActiveGuide.bind(this));
  this.showActiveGuide();
};

LBCamdenGuideContent.prototype.showActiveGuide = function ({ scrollIntoView } = {}) {
  if (!this.$module) {
    return
  }

  if (!window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname + window.location.search);
  }

  const articles = this.getArticles();
  const activeItem = this.getActiveItem();

  for (const item of articles) {
    this.setArticleVisibility(item, item === activeItem);
  }

  if (activeItem) {
    const notFoundContent = this.getNotFoundArticle();
    this.setArticleVisibility(notFoundContent, false);
  } else {
    const notFoundContent = this.getNotFoundArticle();

    this.setArticleVisibility(notFoundContent, true, {
      setContent: DEFAULT_NOT_FOUND_CONTENT,
      setHeading: DEFAULT_NOT_FOUND_HEADING,
      setPagination: { next: articles[0] }
    });
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
};

LBCamdenGuideContent.prototype.setPagination = function ({ next, prev }) {
  const [prevTarget, nextTarget] = this.getPaginationTargets();

  prevTarget.querySelector('.govuk-pagination__link-label').innerText = prev && prev.getAttribute('data-heading');
  nextTarget.querySelector('.govuk-pagination__link-label').innerText = next && next.getAttribute('data-heading');

  prevTarget.querySelector('.govuk-pagination__link').href = prev && `#${prev.id}`;
  nextTarget.querySelector('.govuk-pagination__link').href = next && `#${next.id}`;

  this.$module.classList.toggle('lbcamden-guide-content--prev', !!prev);
  this.$module.classList.toggle('lbcamden-guide-content--next', !!next);
};

LBCamdenGuideContent.prototype.setArticleVisibility = function (article, visible, { setPagination, setContent, setHeading } = {}) {
  const content = article.querySelector('.lbcamden-guide-content__item');

  if (visible) {
    const articles = this.getArticles();
    const headingTarget = this.getHeadingTarget();
    const i = articles.indexOf(article);

    const prev = articles[i - 1];
    const next = articles[i + 1];

    if (headingTarget) {
      headingTarget.innerText = setHeading || article.getAttribute('data-heading');
    }

    if (content && setContent) {
      content.innerHTML = setContent;
    }

    this.setPagination(setPagination || { next, prev });
  }

  if (content) {
    content.hidden = !visible;
  }
};

LBCamdenGuideContent.prototype.getArticles = function () {
  return Array.from(this.$module.querySelectorAll('[data-guide-article][id]'))
};

LBCamdenGuideContent.prototype.getHeadingTarget = function () {
  if (!this.headingTarget) {
    return
  }

  return this.$module.ownerDocument.querySelector(this.headingTarget)
};

LBCamdenGuideContent.prototype.getActiveItem = function () {
  const targets = this.getArticles();
  const id = window.location.hash.substring(1);

  if (!id) {
    return targets[0]
  }

  for (const t of targets) {
    if (t.id === id) {
      return t
    }
  }
};

LBCamdenGuideContent.prototype.getPaginationTargets = function () {
  return [
    this.$module.querySelector('.govuk-pagination__prev'),
    this.$module.querySelector('.govuk-pagination__next')
  ]
};

LBCamdenGuideContent.prototype.getNotFoundArticle = function () {
  return this.$module.querySelector('[data-guide-not-found]')
};

const DEFAULT_NOT_FOUND_HEADING = 'Sorry, this content has been moved or deleted.';
const DEFAULT_NOT_FOUND_CONTENT = '<p>Try navigating the topic or search the site.</p>';

return LBCamdenGuideContent;

})));
