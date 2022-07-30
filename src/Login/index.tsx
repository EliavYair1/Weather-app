import styled from 'styled-components';
import Button from '../common/Button/styles';
import { IconFacebookLogo, IconGoogleLogo } from '../common/Icon';
import { useState } from 'react';
import Input from '../common/Input/Input';
import LogoImg from '../images/Group 33626.svg';
import { LoginTypes } from './Types';
import BGI from '../images/clouds.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import customMedia from '../utiles/mediaQuery';

interface IFormInputs {
  email: string;
  password: string;
}
const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
const Login: React.FC<LoginTypes> = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({ defaultValues: { email: '', password: '' } });

  return (
    <>
      <LoginContainer>
        <LoginHeader>
          <Logo src={LogoImg} />
        </LoginHeader>
        <BackGroundImage>
          <LoginCard>
            <CardHeader>Log in</CardHeader>
            <InputsWrapper onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register('email', { required: 'email is required' })}
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                title={'Email account'}
                // error={'invalid email address.Please try again.'}
                placeholder="example@example.com..."
              />
              <ErrMsg>
                {errors.email && 'invalid email address.Please try again.'}
              </ErrMsg>
              <Input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Min length is 6 characters',
                  },
                })}
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                title={'Password'}
                // error={'this is an error'}
                type="password"
                placeholder="6 characters and digit numbers..."
              />
              <ErrMsg>
                {errors.password && 'invalid password. Please try again.'}
              </ErrMsg>
            </InputsWrapper>
            <Button variant="primary" disabled>
              Login
            </Button>
            <LoginSubText>Or log in with</LoginSubText>
            <LinksWrapper>
              <ButtonStyled variant="link">
                <IconFacebookLogo />
                login with facebook
              </ButtonStyled>
              <ButtonStyled variant="link">
                <IconGoogleLogo />
                login with Goggle
              </ButtonStyled>
            </LinksWrapper>
          </LoginCard>
        </BackGroundImage>
      </LoginContainer>
    </>
  );
};
interface Props {}

const LoginContainer = styled.div`
  background-image: linear-gradient(238deg, #47bfdf 100%, #4a91ff 0%),
    linear-gradient(to bottom, #fff, #fff);
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 1080px;
  ${customMedia.lessThan('tablet')`
height:800px
`}
  ${customMedia.lessThan('mobile')`
   width: 414px;
   height:712px;
`}
`;
const LoginHeader = styled.header`
  display: flex;
`;
const BackGroundImage = styled.div`
  background-image: url(${BGI});
  object-fit: contain;
  background-repeat: no-repeat;
  display: flex;
  height: 100vh;
`;
const Logo = styled.img`
  margin-left: 74px;
  margin-top: 20px;
  ${customMedia.lessThan('tablet')`
margin-left:50px;
margin-top: 22px
`}
  ${customMedia.lessThan('mobile')`
margin: 0 auto;
margin-bottom:31px;
`}
`;
const LoginCard = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  width: 732px;
  height: 649px;
  background-color: #fff;
  border-radius: 30px;
  ${customMedia.lessThan('tablet')`
   width:508px;

  `}
  ${customMedia.lessThan('mobile')`

`}
`;
const InputsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
  margin-bottom: 40px;
`;

const CardHeader = styled.h1`
  color: #444e72;
  align-self: center;
  margin: 0 135px 24px;
  padding-top: 54px;
  font-family: Overpass;
  font-size: 50px;
  font-weight: 900;
  flex-grow: 0;
  margin-bottom: 24px;
  ${customMedia.lessThan('tablet')`
margin-bottom:24px;
  `}
  ${customMedia.lessThan('mobile')`
 height: 40px;
 font-family: Overpass;
  font-size: 32px;
  margin: 0 130px 40px 130px;
  line-height: 1.25;
`}
`;

const LoginSubText = styled.span`
  margin: 48px;
  flex-grow: 0;
  font-family: Overpass;
  font-size: 14px;
  line-height: 1.25;
  color: #444e72;
  ${customMedia.lessThan('tablet')`
margin:32px;
  `}
`;
const LinksWrapper = styled.div`
  display: flex;
  gap: 16px;
  ${customMedia.lessThan('mobile')`
flex-direction:column;
gap:0;
`}
`;
const ButtonStyled = styled(Button)<Props>`
  color: #222;
  text-decoration: underline;
  font-weight: 500;
  font-family: overpass;
  margin-bottom: 54px;
  ${customMedia.lessThan('tablet')`
margin-bottom:44px;
  `}
`;
const ErrMsg = styled.p`
  font-family: Overpass;
  font-size: 14px;
  margin-top: 2px;
  color: #f0274b;
`;
export default Login;
