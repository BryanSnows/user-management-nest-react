import Api from '../../../../services/Api';
import { FormEvent, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { BreadCrumbs } from '../../../../components/BreadCrumbs';
import { ButtonMain } from '../../../../components/Button/ButtonMain';
import { FormGroup } from '../../../../components/FormGroup';
import { DefaultInput } from '../../../../components/Input/DefaultInput';
import { ModalConfirm } from '../../../../components/Modal/ModalConfirm';
import { useErrors } from '../../../../context/hooks/useErrors';
import { ActionsButton } from '../../../../styles/global';
import { CreateUserWrapper, CreateUserForm, Container } from './styles';
import { Header2, Information1, Information2 } from '../../../../styles/typography';
import { ToastContext } from '../../../../context/ToastContext';
import { Select } from '../../../../components/Input/Select';
import { ISelectCurrentValue } from '../../../../components/Input/Select/SelectProps';
import { HandleInput } from '../../../../common/utils/format/formatInput';
import { FormatInputType } from '../../../../common/enums';
import { AsynchronousSelect } from '../../../../components/Input/AsynchronousSelect';

export function NewUser() {
  const { addToast } = useContext(ToastContext);
  const [profile, setProfile] = useState<ISelectCurrentValue | null>(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();
  const navigate = useNavigate();

  const isFormValid = errors.length === 0 && userName && userEmail && profile;

  const { data, isLoading: profileLoading } = useQuery(['profile'], () => {
    return Api.get('/profile/profilesTrue', {});
  });

  const profilesList = data?.data?.map((item: { profile_id: number; profile_name: string }) => ({
    id: item.profile_id,
    value: item.profile_name,
  }));

  function handleProfileInputChange(profileObject: ISelectCurrentValue | null) {
    setProfile(profileObject);
  }

  function goToUserList() {
    navigate('/user-management/users');
  }

  async function onSaveFields() {
    const body = {
      user_name: userName,
      user_email: userEmail,
      profile_id: profile?.id,
    };

    await Api.post('user', body)

      .then(async (res) => {
        addToast({
          status: 'success',
          title: 'Usuário Cadastrado com sucesso.',
        });
        goToUserList();
      })
      .catch((error) => {
        // const code = error.response.data.code;
        const object = error.response.data.message;
        addToast({
          status: 'error',
          title: object,
        });
      });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSaveFields();
  }

  return (
    <>
      <Container>
        <ModalConfirm
          isModalActive={isModalConfirmOpen}
          handleCancel={() => setIsModalConfirmOpen(false)}
          handleClose={() => {
            setIsModalConfirmOpen(false);
            goToUserList();
          }}
        />
        <CreateUserForm noValidate autoComplete="off" onSubmit={handleSubmit}>
          <CreateUserWrapper>
            <div>
              <Header2>{'Novo Usuário'}</Header2>
              <BreadCrumbs />
            </div>

            <FormGroup error={getErrorMessageByFieldName('user-name')} extraErrorMessage={['']}>
              <DefaultInput
                error={getErrorMessageByFieldName('user-name')}
                label={'Nome *'}
                id="user-name"
                type="text"
                key={'user-name'}
                value={userName}
                width="100%"
                maxLength={40}
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
                placeholder="Inserir nome"
              />
              <Information1>Mín. 4 Máx. 40</Information1>
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('profile')} extraErrorMessage={['']}>
              <AsynchronousSelect
                error={getErrorMessageByFieldName('profile') ? true : false}
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
                id="email"
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
                placeholder="Inserir E-mail"
              />
            </FormGroup>

            {/* <FormGroup>
              <DefaultInput
                label={'Senha *'}
                id="password"
                value={password}
                width="100%"
                maxLength={12}
                minLength={6}
                disabled={true}
              />
            </FormGroup> */}

            <Information2>(*) Obrigatório</Information2>
          </CreateUserWrapper>

          <ActionsButton>
            <ButtonMain label={'Salvar'} type="submit" width={'270px'} disabled={!isFormValid} />
            <ButtonMain
              secondaryStyle
              label={'Cancelar'}
              type="button"
              onClick={() => setIsModalConfirmOpen(true)}
              width={'270px'}
            />
          </ActionsButton>
        </CreateUserForm>
      </Container>
    </>
  );
}
