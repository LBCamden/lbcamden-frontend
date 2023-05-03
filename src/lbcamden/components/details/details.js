import '/node_modules/govuk-frontend/govuk/components/details/_details.scss';
import renderDetails from '/node_modules/govuk-frontend/govuk/components/details/template.njk'

/**
 * @param {Object} args
 * @param {string} args.label
 * @param {boolean} [args.primary]
 * @param {string} [args.size="medium"]
 */
export const createDetails = (args = {}) =>
{
    args.summaryText = args.summaryText;
    args.text = args.text;

    // Setting a `storybookArgs` context variable causes the render() macro to
    // be called automatically 📕✨
    return renderDetails({
        params: args
    });
};