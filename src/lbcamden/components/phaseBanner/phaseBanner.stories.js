import {createPhaseBanner} from './phaseBanner.js';

export default {
    title: 'LBCamden Phase Banner',

    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        summaryText: { control: 'text' },
        text: { control: 'text' }
    },
};

const Template = ({ label, ...args }) => {
    return createPhaseBanner({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
    summaryText: "This is an example of summary title",
    text: 'This is the body of a summary component',
};