import styled from 'styled-components';

interface Props {}

const ToggleButton = () => {
  return (
    <>
      <StyledLabel>
        <InpButton type="checkbox" />
        <StyledSlider></StyledSlider>
      </StyledLabel>
    </>
  );
};
const StyledLabel = styled.label`
  display: inline-block;
  width: 68px;
  height: 40px;
  position: relative;
`;
const StyledSlider = styled.span`
  position: absolute;
  border: solid 1px #444e72;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 35px;
  &::before {
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
