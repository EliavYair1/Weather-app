import styled from 'styled-components';
import { ButtonVariants } from './types';
import { Theme } from '../../Themes';

interface Props {
  variant?: ButtonVariants;
  theme?: Theme;
}
const getWhiteStyle = (props: Props) => {
  return `
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #444e72;

`;
};
const getGhostStyle = (props: Props) => {
  return `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 92px 0 100px 42px;
  padding: 16px 24px;
  border-radius: 10px;
  border: solid 1px #fff;
  background-color: transparent;
`;
};
const getLinkStyle = (props: Props) => {
  return `
  flex-grow: 0;
  font-family: Overpass;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #222;
`;
};
const getPrimaryStyle = (props: Props) => {
  return `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
    inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to left, #47bfdf, #4a91ff);`;
};
const getDisabledStyle = (props: Props) => {
  return `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  gap: 10px;
  line-height: 1.2;
  border-radius: 10px;
  box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16), inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to left, #47bfdf 100%, #4a91ff 0%);
    `;
};
const Button = styled.button<Props>`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 16px 54px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.buttonDefaultSize};
  font-weight: bold;
  line-height: 1.2;
  color: ${({ theme }) => theme.white};
  ${(props) => {
    switch (props.variant) {
      case 'white':
        return getWhiteStyle(props);
      case 'ghost':
        return getGhostStyle(props);
      case 'link':
        return getLinkStyle(props);
      case 'disabled':
        return getDisabledStyle(props);
      case 'primary':
      default:
        return getPrimaryStyle(props);
    }
  }}
`;
export default Button;
