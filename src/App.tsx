import React from 'react';
import styled from 'styled-components/macro';
import Button from './common/Button/Button';
import { IconMoonDark, IconSunDark } from './common/Icon';
import Input from './common/Input/Input';
import ToggleButton from './common/toggle/toggle';
import { useState } from 'react';
import Login from './Login';

interface Props {
  focus?: string;
}

const App: React.FC<Props> = () => {
  const [Checked, setChecked] = useState<Boolean>(true);
  const [Text, setText] = useState('');
  return (
    <Container>
      <Login />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #b7b7b7b7; */
  /* padding: 10px; */
`;

export default App;
