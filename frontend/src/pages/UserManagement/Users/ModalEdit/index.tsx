import { ModalProps } from '../../../Login/ModalFirstPassword/types';
import ReactDOM from 'react-dom';
import { ModalConfirm } from '../../../../components/Modal/ModalConfirm';
import { DefaultInput } from '../../../../components/Input/DefaultInput';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useErrors } from '../../../../context/hooks/useErrors';
import { ButtonMain } from '../../../../components/Button/ButtonMain';
import { useQuery } from 'react-query';
import { FormGroup } from '../../../../components/FormGroup';
import Api from '../../../../services/Api';
import { BoxName } from '../NewUser/styles';
import { ActionsButton, Form, Wrapper } from '../../../../styles/global';
import { Overlay } from '../../../../styles/litlemodal';
import { getUser } from '../../../../services/GlobalServices/userServices';
import { Header3, Information1, Information2 } from '../../../../styles/typography';
import { ToastContext } from '../../../../context/ToastContext';
import { IProfileObject } from '../NewUser/type';
import { HandleInput } from '../../../../common/utils/format/formatInput';
import { FormatInputType } from '../../../../common/enums';
import { useNavigate } from 'react-router-dom';
import { AsynchronousSelect } from '../../../../components/Input/AsynchronousSelect';

export function ModalEditUser({ isModalActive, closeModal, keyId }: ModalProps) {
  const { addToast } = useContext(ToastContext);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [profile, setProfile] = useState<IProfileObject | null>(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [id, setId] = useState<number | undefined>(0);
  const [isOutsideClick, setIsOutsideClick] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalRoot = document.getElementById('modal') as HTMLElement;
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: any) {
      const isSelectClick =
        event.target.getAttribute('role') === 'option' || // Para opções de Autocomplete
        event.target.getAttribute('role') === 'presentation'; // Para a lista de opções de Autocomplete

      if (modalRef.current && !modalRef.current.contains(event.target as Node) && !isSelectClick) {
        setIsOutsideClick(true);
      }
    }

    function handleEscapeKey(event: any) {
      if (isModalActive && event.key === 'Escape') {
        setIsOutsideClick(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [modalRef, isModalActive]);

  useEffect(() => {
    if (isModalActive && isOutsideClick) {
      setIsOutsideClick(false);
      setIsModalConfirmOpen(true);
    }
  }, [isOutsideClick, isModalActive]);
  const { data, refetch } = useQuery(['keyId', id, isModalActive], () => getUser(id), {
    onSuccess: (dataOnSuccess) => {
      if (isModalActive) {
        setUserName(dataOnSuccess?.user_name);
        setUserEmail(dataOnSuccess?.user_email);
        setProfile({
          id: dataOnSuccess?.profile?.profile_id,
          value: dataOnSuccess?.profile?.profile_name,
        });
      }
    },

    keepPreviousData: false,
  });

  useEffect(() => {
    setId(keyId);
  }, [id, keyId]);

  const isFormValid =
    errors.length === 0 &&
    (userName?.toUpperCase() !== data?.user_name ||
      userEmail !== data?.user_email ||
      profile?.id !== data?.profile?.profile_id);

  const { data: profileData, isLoading: profileLoading } = useQuery(['profile'], () => {
    return Api.get('/profile/profilesTrue', {});
  });

  const profilesList = profileData?.data?.map(
    (item: { profile_id: number; profile_name: string }) => ({
      id: item.profile_id,
      value: item.profile_name,
    }),
  );

  function handleProfileInputChange(profileObject: IProfileObject | null) {
    setProfile(profileObject);
  }

  function handleCancelModal() {
    setIsModalConfirmOpen(false);
  }

  function handleCloseModal() {
    setUserName('');
    setUserEmail('');
    setProfile(null);
    closeModal();
    navigate('/user-management/users');
    setIsModalConfirmOpen(false);
    removeError('user-name');
    removeError('profile');
    removeError('email');
  }

  async function onEditUser() {
    const payload = {
      user_name: userName,
      user_email: userEmail,
      profile_id: profile?.id,
    };

    try {
      await Api.put(`users/${keyId}`, payload);
      addToast({
        status: 'success',
        title: 'Dados salvos com sucesso.',
      });
      refetch();
    } catch (error) {
      const customError = error as {
        response: {
          data: {
            message: string;
          };
        };
      };

      const object = customError.response?.data?.message;
      addToast({
        status: 'error',
        title: object,
      });
      throw error;
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await onEditUser();
      handleCloseModal();
      refetch();
    } catch (error) {}
  }

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ModalConfirm
        isModalActive={isModalConfirmOpen}
        handleCancel={handleCancelModal}
        handleClose={handleCloseModal}
        title="Cancelar Edição?"
        message="Você está cancelando a edição de usuário. Deseja continuar?"
      />
      <Wrapper ref={modalRef}>
        <Header3>{'Editar Usuário'}</Header3>
        <Form onSubmit={handleSubmit} noValidate autoComplete="off">
          <BoxName>
            <FormGroup error={getErrorMessageByFieldName('user-name')} extraErrorMessage={['']}>
              <DefaultInput
                error={getErrorMessageByFieldName('user-name')}
                label={'Nome *'}
                id="user-name"
                type="text"
                key={'user-name'}
                placeholder={'Inserir nome'}
                value={userName}
                width="100%"
                maxLength={40}
                minLength={4}
                onChange={(event) =>
                  HandleInput.getInstance().formatWithRegex(
                    event,
                    FormatInputType.USER_NAME,
                    setUserName,
                    setError,
                    removeError,
                    'user-name',
                  )
                }
              />
              <Information1>Mín. 4 Máx. 40</Information1>
            </FormGroup>

            <FormGroup extraErrorMessage={['']}>
              <AsynchronousSelect
                width="100%"
                id="profile"
                label={'Perfil *'}
                placeholder={'Selecione o perfil'}
                values={profilesList}
                currentValue={profile}
                onChangeValue={handleProfileInputChange}
                noOptionsText={'Perfil não encontrado'}
                isLoading={profileLoading}
              />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('user-email')} extraErrorMessage={['']}>
              <DefaultInput
                label={'E-mail *'}
                disabled={true}
                id="email"
                placeholder={'Inserir E-mail'}
                value={userEmail}
                width="100%"
                onChange={(event) =>
                  HandleInput.getInstance().formatWithRegex(
                    event,
                    FormatInputType.USER_EMAIL,
                    setUserEmail,
                    setError,
                    removeError,
                    'user-email',
                    'E-mail inválido',
                  )
                }
              />
            </FormGroup>
            <Information2>(*) Obrigatório</Information2>
          </BoxName>
          <ActionsButton>
            <ButtonMain label={'Salvar'} type="submit" disabled={!isFormValid} />
            <ButtonMain
              secondaryStyle
              label={'Cancelar'}
              type="button"
              onClick={() => setIsModalConfirmOpen(true)}
            />
          </ActionsButton>
        </Form>
      </Wrapper>
    </Overlay>,
    modalRoot,
  );
}
