export interface Theme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  buttonDefaultSize: string;
}

// const baseTheme = {
//   black: '#222222',
//   white: '#ffffff',
//   primary: '#48bae4',
//   secondary: '#444e72',
//   fadeText: '#838BAA',
//   gray: '#bebebe',
//   grayBg: '#f2f2f2',
//   errorRed: '#f0274b',
//   sunColor: '#ffd130',
//   buttonDefaultSize: '1.8rem',
// };

const lightMode = {
  black: '#222222',
  white: '#ffffff',
  primary: '#48bae4',
  secondary: '#444e72',
  buttonDefaultSize: '1.8rem',
};

const darkMode = {
  primary: '#1a2b55',
  secondary: '#444e72',
};

const darkModeTheme = { ...lightMode, ...darkMode };

export default darkModeTheme;
