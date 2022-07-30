import styled from 'styled-components';
import { Theme } from '../../Themes';
import { ButtonVariants } from './types';

interface Props {
  variant?: ButtonVariants;
  theme?: Theme;
}

const getWhiteStyle = (props: Props) => {
  return `
    box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    color: #444e72;
}
  `;
};

const getPrimaryStyle = (props: Props) => {
  return `
  
  padding: 16px 151px;
    box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
    inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(to left, #47bfdf, #4a91ff);
  `;
};

const getLinkStyle = (props: Props) => {
  return `
  color: #222;
  text-decoration: underline;
  font-weight: 500;
  font-family:overpass;
  `;
};

const getGhostStyle = (props: Props) => {
  return `
  border: solid 1px #fff;
  color: #fff;
  `;
};
export const Caption = styled.p``;
export const ButtonLayout = styled.button<Props>`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: 10px;
  font-weight: bold;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.buttonDefaultSize};
  color: ${({ theme }) => theme.white};

  ${(props) => {
    switch (props.variant) {
      case 'white':
        return getWhiteStyle(props);
      case 'ghost':
        return getGhostStyle(props);
      case 'link':
        return getLinkStyle(props);
      case 'primary':
      default:
        return getPrimaryStyle(props);
    }
  }}
  &:disabled ${Caption} {
    opacity: 0.4;
  }
`;

export default ButtonLayout;
