import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';
import { Banner, BoxLogin, Container, ContainerLogin, Form, WelcomeText } from './styles';
import banner from '../../assets/images/banner.svg';
import elgin from '../../assets/images/elgin.png';
import { ButtonMain } from '../../components/Button/ButtonMain';
import { useAuthGlobal } from '../../context/AuthProvider/useAuthGlobal';
import { useErrors } from '../../context/hooks/useErrors';
import { FormGroup } from '../../components/FormGroup';
import { DefaultInput } from '../../components/Input/DefaultInput';
import { Body1, BodyBlue, Header1, Header2 } from '../../styles/typography';
import { CodeError, FormatInputType } from '../../common/enums';
import { ToastContext } from '../../context/ToastContext';
import { useTheme } from 'styled-components';
import { HandleInput } from '../../common/utils/format/formatInput';

export function Login() {
  const { colors: theme } = useTheme();

  const [password, setPassoword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const { addToast } = useContext(ToastContext);
  const [useToast, setUseToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const { handleLogin, messageError, errorEmail, errorPassword, setErrorEmail, setErrorPassword } =
    useAuthGlobal();

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();
  const isFormValid = email && password;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassoword(event.target.value.replace(/\s/g, ''));
  }

  useEffect(() => {
    if (errorEmail) {
      setError({
        field: 'errorEmail',
        message: `${'E-mail inválido ou não encontrado!'}`,
      });
    }
    if (errorPassword) {
      setError({
        field: 'errorPassword',
        message: `${'Senha inválida!'}`,
      });
    }
  }, [errorEmail, errorPassword]);

  useEffect(() => {
    if (messageError) {
      if (messageError.code !== CodeError.EXTERNAL_LOGIN_ERROR) {
        addToast({ title: messageError.message, status: 'error' });
        setUseToast(true);
      } else {
        setUseToast(false);
      }
    }
  }, [messageError]);

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await handleLogin(email, password);
    setIsLoading(false);
  }

  return (
    <Container>
      <Banner>
        <Header1>Bem-vindo de volta!</Header1>
        <img src={banner} alt="machine-illustration" />
      </Banner>
      <BoxLogin>
        <ContainerLogin>
          {/* <BoxLanguage>
          <LanguageSwitcher />
        </BoxLanguage> */}
          <img src={elgin} alt="elgin-logo" />

          <WelcomeText>
            <Header2>Olá!</Header2>
            <Body1>Preencha os campos de login para acessar o sistema.</Body1>
          </WelcomeText>

          <Form onSubmit={HandleSubmit}>
            <FormGroup
              error={!useToast && errorEmail ? getErrorMessageByFieldName('errorEmail') : undefined}
              extraErrorMessage={['']}
            >
              <DefaultInput
                error={errorEmail ? 'errorEmail' : ''}
                removeError={(value: string) => {
                  removeError(value);
                  setErrorEmail(false);
                }}
                width="100%"
                height="80px"
                id="email"
                placeholder={'Inserir E-mail'}
                label="Email"
                value={email}
                onChange={(event) =>
                  HandleInput.getInstance().formatWithRegex(
                    event,
                    FormatInputType.USER_EMAIL,
                    setEmail,
                    setError,
                    removeError,
                    'user-email',
                    'E-mail inválido',
                  )
                }
              />
            </FormGroup>

            <FormGroup
              error={
                !useToast && errorPassword ? getErrorMessageByFieldName('errorPassword') : undefined
              }
              extraErrorMessage={['']}
            >
              <DefaultInput
                error={errorPassword ? 'errorPassword' : ''}
                removeError={(value: string) => {
                  removeError(value);
                  setErrorPassword(false);
                }}
                type="password"
                width="100%"
                height="80px"
                placeholder={'Inserir Senha'}
                label="Senha"
                id="password"
                toggleShowPassword={handleShowPassword}
                showPassword={showPassword}
                value={password}
                onChange={handlePassword}
              />
            </FormGroup>

            <ButtonMain
              type="submit"
              label={isLoading ? 'Carregando...' : 'Entrar'}
              height="60px"
              disabled={!isFormValid}
            />
          </Form>
        </ContainerLogin>
      </BoxLogin>
    </Container>
  );
}
