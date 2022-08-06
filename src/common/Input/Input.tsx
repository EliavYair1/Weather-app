import { InputProps } from './types';
import styled from 'styled-components';
import * as React from 'react';

interface Props {
  error?: string;
  input?: InputProps;
  focus?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <>
      <InputContainer error={error}>
        <InpTitle>{title}</InpTitle>
        <InputLayout
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      </InputContainer>
      {error && <Error>{error}</Error>}
    </>
  );
};

const InputContainer = styled.div<Props>`
  width: 354px;
  height: 77px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border: none;
  &:focus-within {
    border: solid 1px #222222;
    background-color: #ffffff;
  }

  ${(props) =>
    props.error
      ? `
    border: solid 1px #f0274b;
 ${InpTitle}{
  color: #f0274b;
 }`
      : `
    :focus-within {
      border: solid 1px #222;
    }
  `}
`;

const InpTitle = styled.p<Props>`
  margin-left: 24px;
  font-family: inherit;
  color: ${(props) => (props.error ? `#f0274b;` : `#838baa;`)};
  font-size: 1.4rem;
  line-height: 1.25;
  padding-top: 14px;
  margin-bottom: 4px;
`;

const InputLayout = styled.input<Props>`
  all: unset;
  line-height: 1.5;
  color: #222;
  font-size: 1.8rem;
  flex-grow: 0;
  border-radius: 10px;
  padding-left: 24px;
  ::placeholder {
    color: #bebebe;
  }
`;

const Error = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  line-height: 1.25;
  color: #f0274b;
  padding-top: 4px;
  margin: 0;
`;

export default Input;
