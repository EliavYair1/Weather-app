import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from '../common/Input/Input';

export default {
  title: 'Common/Input',
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof InputComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input = Template.bind({});
Input.args = {
  title: 'error',
  value: '',
  error: '',
  placeholder: 'this is my placeholder',
};
// export const InActive = Template.bind({});
// InActive.args = {
//   input: 'inactive',
//   children: 'focus',
// };
// export const Focus = Template.bind({});
// Focus.args = {
//   input: 'focus',
//   children: 'focus',
// };
// export const Validation = Template.bind({});
// Validation.args = {
//   input: 'validation',
//   children: 'Input',
// };

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
