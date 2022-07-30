import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from '../common/toggle/toggle';
import { IconMoonDark, IconSunDark } from '../common/Icon';

export default {
  title: 'Common/ToggleButton',
  component: ToggleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ToggleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Toggle = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Toggle.args = {
  id: 'my id',
  left: <IconMoonDark />,
  right: <IconSunDark />,
  value: true,
};

// export const White = Template.bind({});
// White.args = {
//   children: 'white',
//   variant: 'white',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
