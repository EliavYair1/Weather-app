import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../common/Input/Input';

export default {
  title: 'Common/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PassWordInput = Template.bind({});
PassWordInput.args = {
  type: 'password',
  placeholder: '6 characters and digit numbers',
};
export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  placeholder: 'example@example.com',
};
