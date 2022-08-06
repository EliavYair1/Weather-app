import { Theme } from '../../Themes';
export type ButtonVariants = 'primary' | 'white' | 'ghost' | 'link';
export interface ButtonProps {
  variant?: ButtonVariants;
  children?: React.ReactNode;
  disabled?: boolean;
  theme?: Theme;
  onClick: () => void;
}
export interface Props {
  variant?: ButtonVariants;
  theme?: Theme;
}
