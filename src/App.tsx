import React from 'react';
import styled from 'styled-components/macro';
import Button from './common/Button/Button';
import { IconMoonDark, IconSunDark } from './common/Icon';
import Input from './common/Input/Input';
import ToggleButton from './common/toggle/toggle';
import { useState } from 'react';
import Login from './Login';

interface Props {}

const App: React.FC = () => {
  const [Checked, setChecked] = useState<Boolean>(true);
  const [Text, setText] = useState('');
  return (
    <Container>
      <Login />
    </Container>
  );
};

const Container = styled.div`
  background-color: #b7b7b7b7;
  padding: 10px;
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => {
    return theme.night;
  }};
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  background-color: #f2f2f2f2;
`;
export default App;
