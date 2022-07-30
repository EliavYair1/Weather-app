import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import theme from '../src/Themes';
import { LightMode, DarkMode } from '../src/Themes.tsx';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    // Override the default dark theme
    dark: { ...DarkMode.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...LightMode.normal, appBg: 'red' },
  },
};
