import './_button.scss';
import renderButton from './template.njk'

/**
 * @param {Object} args
 * @param {string} args.label
 * @param {boolean} [args.primary]
 * @param {string} [args.size="medium"]
 */
export const createButton = (args = {}) =>
{
    args.size = args.size || "medium";
    args.text = args.text || "hello";
    args.isStartButton = args.isStartButton;
    args.largeButton = args.isLargeButton;

    // Setting a `storybookArgs` context variable causes the render() macro to
    // be called automatically 📕✨
    return renderButton({
        params: args
    });
};