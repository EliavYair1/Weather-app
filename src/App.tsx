import React from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './common/Button/Button';
import { IconSun } from './common/Icon';
import Input from './common/Input/Input';
import ToggleButton from './common/toggle';

/*
- Finish up the button Component. Add ghost/link styles. 
- Add disabled state
- Add option for icons
- Try to implmenent a toggle component.
- If you still have time, go to the innput component */

interface Props {}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => {
    return theme.white;
  }};
`;
const App: React.FC = () => {
  return (
    <StyledWrapper>
      <h1>weather app</h1>
      <IconSun />
      <ToggleButton />
      <Button variant="primary">click</Button>
      <Input variant="validation" placeholder="Email Account" />
    </StyledWrapper>
  );
};

export default App;
