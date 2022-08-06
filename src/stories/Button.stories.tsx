import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../common/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  variant: 'primary',
  children: 'Button',
};

export const LinkBtn = Template.bind({});
LinkBtn.args = {
  variant: 'link',
  children: 'Link',
};

export const GhostBtn = Template.bind({});
GhostBtn.args = {
  variant: 'ghost',
  children: 'Ghost',
};
export const WhiteBtn = Template.bind({});
WhiteBtn.args = {
  children: 'white',
  variant: 'white',
};
