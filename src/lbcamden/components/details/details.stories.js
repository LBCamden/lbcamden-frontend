import {createDetails} from './details.js';

export default {
    title: 'LBCamden Details',

    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        summaryText: { control: 'text' },
        text: { control: 'text' }
    },
};

const Template = ({ label, ...args }) => {
    return createDetails({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
    summaryText: "This is an example of summary title",
    text: 'This is the body of a summary component',
};