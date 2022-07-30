import styled from 'styled-components';
import { ToggleProps } from './types';

const ToggleButton: React.FC<ToggleProps> = ({ id, left, right, onChange }) => {
  return (
    <>
      <StyledLabel>
        <InpButton
          type="checkbox"
          id={id}
          onChange={() => {
            onChange();
          }}
        />
        <StyledSlider>
          <StyledLeftIcon>{left}</StyledLeftIcon>
          <StyledRightIcon>{right}</StyledRightIcon>
        </StyledSlider>
      </StyledLabel>
    </>
  );
};
const StyledRightIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  margin-left: auto;
  align-self: flex-end;
`;
const StyledLeftIcon = styled.div`
  position: absolute;
  left: 8px;
  right: 41px;
  bottom: 8px;
  top: 8px;
`;
const StyledLabel = styled.label`
  width: 68px;
  height: 40px;
  display: inline-block;
  position: relative;
`;
const StyledSlider = styled.span`
  display: flex;
  justify-content: space-between;

  position: absolute;
  border: solid 1px #444e72;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 35px;
  &::before {
    z-index: 2;
    position: absolute;
    content: '';
    background-color: #838baa;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    left: 4px;
    right: 4px;
    top: 4px;
    transition: 0.5s;
  }
`;
const InpButton = styled.input`
  opacity: 0;
  &:checked + span::before {
    transform: translateX(26px);
  }
  &:checked + span {
    border: solid 1px #444e72;
    background-color: #fff;
  }
`;
export default ToggleButton;
