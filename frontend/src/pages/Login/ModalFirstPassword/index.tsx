import { ITextColor, ModalProps } from './types';
import ReactDOM from 'react-dom';
import { ModalConfirm } from '../../../components/Modal/ModalConfirm';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Container, Overlay, Text, Form, TextH5, WrapperButton } from './styles';
import { DefaultInput } from '../../../components/Input/DefaultInput';
import { ButtonMain } from '../../../components/Button/ButtonMain';
import Api from '../../../services/Api';
import { Header5 } from '../../../styles/typography';
import { FormGroup } from '../../../components/FormGroup';
import { ToastContext } from '../../../context/ToastContext';
import { useTheme } from 'styled-components';

export function ModalFirstPassword({ isModalActive, closeModal, firstPassword }: ModalProps) {
  const modalRoot = document.getElementById('modal') as HTMLElement;
  const { addToast } = useContext(ToastContext);
  const { colors: theme } = useTheme();

  const [newPassword, setNewPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [textColor, setTextColor] = useState<ITextColor>({
    characters: '',
    minLetter: '',
    minNumber: '',
    minCharactersSpecial: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

  useEffect(() => {
    if (repeatPassword) {
      repeatPassword !== newPassword ? setErrorMessage('Senhas não conferem') : setErrorMessage('');
    } else {
      setErrorMessage('');
    }
  }, [repeatPassword, newPassword]);

  const regexCharactersSpecial = /\W|_/;
  const regexNumber = /\d/;
  const regexLetter = /[A-Za-z]/;

  const isFormValid =
    newPassword === repeatPassword &&
    regexLetter.test(repeatPassword) &&
    regexCharactersSpecial.test(repeatPassword) &&
    regexNumber.test(repeatPassword) &&
    newPassword.length >= 6 &&
    repeatPassword.length >= 6;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  function handleCancelModal() {
    setIsModalConfirmOpen(false);
  }

  function handleCloseModal() {
    closeModal();
    setIsModalConfirmOpen(false);
  }

  if (!isModalActive) {
    return null;
  }

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      current_password: firstPassword,
      new_password: newPassword,
      confirmation_password: repeatPassword,
    };

    await Api.post('auth/first_access', body)
      .then(() => {
        addToast({ status: 'success', title: 'Senha Cadastrada com sucesso' });
        handleCloseModal();
        setNewPassword('');
        setRepeatPassword('');
        setTextColor(() => ({
          characters: '',
          minLetter: '',
          minNumber: '',
          minCharactersSpecial: '',
        }));
        localStorage.removeItem('first_acc');
      })
      .catch(() => {
        setNewPassword('');
        setRepeatPassword('');
        setTextColor(() => ({
          characters: '',
          minLetter: '',
          minNumber: '',
          minCharactersSpecial: '',
        }));
      });
  }

  function handleNewPassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\s/g, '');

    setNewPassword(value);

    if (value.length === 0) {
      setTextColor(() => ({
        characters: '',
        minLetter: '',
        minNumber: '',
        minCharactersSpecial: '',
      }));
    } else if (value.length < 6) {
      setTextColor(() => ({
        characters: theme.danger.main,
        minLetter: theme.danger.main,
        minNumber: theme.danger.main,
        minCharactersSpecial: theme.danger.main,
      }));
    } else if (value.length >= 6) {
      setTextColor((prevState) => ({
        ...prevState,
        characters: theme.success.main,
      }));
    }

    if (regexLetter.test(value)) {
      setTextColor((prevState) => ({
        ...prevState,
        minLetter: theme.success.main,
      }));
    }

    if (regexCharactersSpecial.test(value)) {
      setTextColor((prevState) => ({
        ...prevState,
        minCharactersSpecial: theme.success.main,
      }));
    }

    if (regexNumber.test(value)) {
      setTextColor((prevState) => ({
        ...prevState,
        minNumber: theme.success.main,
      }));
    }
  }

  function handleRepeatPassword(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/\s/g, '');

    setRepeatPassword(value);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalConfirm
        isModalActive={isModalConfirmOpen}
        handleCancel={handleCancelModal}
        handleClose={handleCloseModal}
      />
      <Container>
        <Header5>{'Atualizar Senha'}</Header5>
        <Text>
          <TextH5>{'A sua nova senha deverá possuir:'}</TextH5>
          <TextH5 color={textColor.characters}>{'Mín. 6 e Máx. 12'}</TextH5>
          <TextH5 color={textColor.minLetter}>{'Mín. 1 Letra'}</TextH5>
          <TextH5 color={textColor.minNumber}>{'Mín. 1 Número'}</TextH5>
          <TextH5 color={textColor.minCharactersSpecial}>{'Mín. 1 Caractere Especial'}</TextH5>
        </Text>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <DefaultInput
              width="100%"
              height="90px"
              name="password"
              placeholder="Inserir nova senha"
              label={'Nova Senha'}
              id="NovaSenha"
              autoComplete="off"
              toggleShowPassword={handleShowPassword}
              showPassword={true}
              value={newPassword}
              onChange={handleNewPassword}
              maxLength={12}
            />
          </FormGroup>

          <FormGroup error={errorMessage} extraErrorMessage={['']}>
            <DefaultInput
              width="100%"
              height="78px"
              name="passwordConfirm"
              placeholder="Inserir novamente nova senha"
              label={'Confirmar Senha'}
              id="ConfirmarSenha"
              autoComplete="off"
              toggleShowPassword={handleConfirmPassword}
              showPassword={true}
              value={repeatPassword}
              onChange={handleRepeatPassword}
              maxLength={12}
            />
          </FormGroup>

          <WrapperButton>
            <ButtonMain
              label={'Salvar'}
              type="submit"
              width="50%"
              height="60px"
              disabled={!isFormValid}
            />
          </WrapperButton>
        </Form>
      </Container>
    </Overlay>,
    modalRoot,
  );
}
