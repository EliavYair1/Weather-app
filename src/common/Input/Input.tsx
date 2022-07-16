import { InputVariants } from './types';
import styled from 'styled-components';
interface Props {
  variant?: InputVariants;
}
const getInactiveStyle = (props: Props) => {
  return `
  background-color: #f2f2f2;
  color: #bebebe;
  line-height: 1.5;
`;
};
const getFocusStyle = (props: Props) => {
  return `
  color: #4d4d4d;
  border: solid 1px #222;
  background-color: #fff;

`;
};
const getActiveStyle = (props: Props) => {
  return `
  color: #222;
  background-color: #f2f2f2;

`;
};
const getValidationStyle = (props: Props) => {
  return `
   color: #222;
   border: solid 1px #f0274b;
   background-color: #fff;
   &::placeholder {
    font-size: 14px;
    color: #f0274b;
    line-height: 1.25;
    letter-spacing: normal;
    
}
`;
};

const Input = styled.input<Props>`
  line-height: 1.5;
  text-align: left;
  color: #222;
  font-size: 18px;
  width: 354px;
  flex-grow: 0;
  margin: 90px 0 35px;
  padding: 14px 24px;
  border-radius: 10px;
  ${(props) => {
    switch (props.variant) {
      case 'active':
        return getActiveStyle(props);
      case 'inactive':
        return getInactiveStyle(props);
      case 'focus':
        return getFocusStyle(props);
      case 'validation':
        return getValidationStyle(props);
      default:
        return getActiveStyle(props);
    }
  }}
  ${(props) => {
    switch (props.placeholder) {
      case 'active':
        return getActiveStyle(props);
      case 'inactive':
        return;
      case 'focus':
        return;
      case 'validation':
        return;
      default:
        return;
    }
  }}
`;

export default Input;
