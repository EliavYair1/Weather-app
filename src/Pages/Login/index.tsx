import styled from 'styled-components';
import Button from '../../common/Button/Button';
import { IconFacebookLogo, IconGoogleLogo } from '../../common/Icon';
import Input from '../../common/Input/Input';
import LogoImg from '../../images/Group 33626.svg';
import { LoginTypes } from './Types';
import BGI from '../../images/clouds.svg';
import { useForm, SubmitHandler } from 'react-hook-form';
import customMedia from '../../utiles/mediaQuery';
import { ButtonProps } from '../../common/Button/types';

interface IFormInputs {
  email: string;
  password: string;
  error?: boolean;
  ref?: string | undefined;
}
const Login: React.FC<LoginTypes> = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm<IFormInputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

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
              <StyledInput
                {...register('email', {
                  required: 'invalid email address.Please try again.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address.Please try again.', // JS only: <p>error message</p> TS only support string
                  },
                })}
                title={'Email account'}
                placeholder="example@example.com..."
                error={errors.email?.message}
              />
              <Gapper />
              <Input
                {...register('password', {
                  required: 'Invalid password. Please try again.',
                  minLength: {
                    value: 6,
                    message: '....',
                  },
                })}
                type={'password'}
                title={'Password'}
                error={errors.password?.message}
                placeholder="6 characters and digit numbers..."
              />

              <FormBtn
                onClick={async () => {
                  const output = await trigger(['email', 'password'], {
                    shouldFocus: true,
                  });
                  console.log(output);
                }}
                variant="primary"
              >
                Login
              </FormBtn>
            </InputsWrapper>
            <LoginSubText>Or log in with</LoginSubText>
            <LinksWrapper>
              <ButtonStyled onClick={() => console.log('test')} variant="link">
                <IconFacebookLogo />
                login with facebook
              </ButtonStyled>
              <ButtonStyled onClick={() => console.log('test')} variant="link">
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
interface Props {
  Button?: ButtonProps;
}
const Gapper = styled.p`
  margin-bottom: 32px;
`;
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
  /* gap: 32px; */
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
const FormBtn = styled(Button)<Props>`
  margin-top: 40px;
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
const StyledInput = styled(Input)`
  margin-bottom: 32px;
`;

export default Login;
