import { Caption, ButtonLayout } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  disabled,
  onClick,
}) => {
  return (
    <>
      <ButtonLayout
        onClick={() => onClick()}
        disabled={disabled}
        variant={variant}
      >
        <Caption>{children}</Caption>
      </ButtonLayout>
    </>
  );
};
export default Button;
