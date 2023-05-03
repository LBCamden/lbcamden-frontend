import {createButton} from './button.js';

export default {
    title: 'LBCamden Button',

    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        text: { control: 'text' },
        isStartButton: { control: 'boolean' },
        isLargeButton: { control: 'boolean' }
    },
};

const Template = ({ label, ...args }) => {
    return createButton({ label, ...args }) ;
};

export const Default = Template.bind({});
Default.args = {
    isStartButton: false,
    isLargeButton: false,
    text: 'Hello',
};

export const StartButton = Template.bind({});
StartButton.args = {
    isStartButton: true,
    isLargeButton: false,
    text: 'Hello',
};