import React from 'react';
import styled from 'styled-components/macro';

import Login from './Pages/Login';

interface Props {
  focus?: string;
}

const App: React.FC<Props> = () => {
  // const [Checked, setChecked] = useState<Boolean>(true);
  // const [Text, setText] = useState('');
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
