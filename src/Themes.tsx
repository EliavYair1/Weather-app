export interface Theme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  buttonDefaultSize: string;
}

const lightMode = {
  black: '#222222',
  white: '#ffffff',
  primary: '#48bae4',
  secondary: '#444e72',
  buttonDefaultSize: '1.8rem',
};

const darkMode = {
  black: '#222222',
  white: '#ffffff',
  primary: '#48bae4',
  secondary: '#444e72',
  night: '#444e72',
  buttonDefaultSize: '1.8rem',
};

const Themes = { ...lightMode, ...darkMode };

export default Themes;
