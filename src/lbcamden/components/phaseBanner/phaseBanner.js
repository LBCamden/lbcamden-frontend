import '/node_modules/govuk-frontend/govuk/components/phase-banner/_phase-banner.scss';
import renderPhaseBanner from '/node_modules/govuk-frontend/govuk/components/phase-banner/template.njk'

/**
 * @param {Object} args
 * @param {string} args.label
 * @param {boolean} [args.primary]
 * @param {string} [args.size="medium"]
 */
export const createPhaseBanner = (args = {}) =>
{
    args.summaryText = args.summaryText;
    args.text = args.text;

    // Setting a `storybookArgs` context variable causes the render() macro to
    // be called automatically 📕✨
    return renderPhaseBanner({
        params: args
    });
};