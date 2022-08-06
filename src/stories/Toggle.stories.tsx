import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from '../common/toggle/toggle';
import { IconMoonDark, IconSunDark } from '../common/Icon';

export default {
  title: 'Common/ToggleButton',
  component: ToggleButton,
  argTypes: {},
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Toggle = Template.bind({});
Toggle.args = {
  id: 'my id',
  left: <IconMoonDark />,
  right: <IconSunDark />,
  value: true,
};

export const Degrees = Template.bind({});
Degrees.args = {
  id: 'degrees-id',
  right: 'C',
  left: 'F',
};
