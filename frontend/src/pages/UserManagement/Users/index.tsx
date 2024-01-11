import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ITableHeader } from '../../../components/Tables/Table/types';
import { IUserTableRow } from '../../../interfaces/IGlobal';
import Api from '../../../services/Api';
import { ModalEditUser } from './ModalEdit';
import { ModalConfirm } from '../../../components/Modal/ModalConfirm';
import { ToastContext } from '../../../context/ToastContext';
import { BaseManagement } from '../../../components/BaseManagement';
import { passPage } from '../../../common/utils/global';
import { isAllowedTransaction } from '../../../routes/PrivateRoute';
import { UserTransaction } from '../../../common/transactions-enums/user.transaction';
import { ITableData } from './NewUser/type';
import { Table } from '../../../components/Tables/Table';

export function Users() {
  const { addToast } = useContext(ToastContext);
  const [user, setUser] = useState<IUserTableRow>();
  const [searchParam, setSearchParam] = useState('');
  const [pageParam, setPageParam] = useState(1);
  const [onOff, setOnOff] = useState(true);
  const [modalEditUser, setModalEditUser] = useState(false);
  const [modalActiveUser, setModalActiveUser] = useState(false);
  const [statusMessage, setStatusMessage] = useState<boolean | undefined>(true);
  const canCreateUser = isAllowedTransaction(UserTransaction.CREATE);
  const canEditUser = isAllowedTransaction(UserTransaction.UPDATE);
  const canActivateUser = isAllowedTransaction(UserTransaction.CHANGE_STATUS);

  const { data, isLoading, error, refetch } = useQuery(
    ['user', searchParam, pageParam, onOff],
    () => {
      let params = new URLSearchParams();
      params.append('page', pageParam.toString());
      if (searchParam.length > 0) params.append('search', searchParam);
      params.append('limit', '10');
      params.append('orderBy', 'NAME');
      params.append('sort', 'ASC');
      return Api.get('users', { params });
    },
    {
      onSuccess: (dataOnSuccess) => {
        passPage(dataOnSuccess, pageParam, setPageParam);
      },

      keepPreviousData: true,
      staleTime: 2000,
    },
  );

  const tableData = data?.data?.items.map((item: ITableData) => {
    return {
      user_email: item?.user_email,
      user_name: item?.user_name,
      user_profile: item?.profile_name,
      user_id: item?.user_id,
    };
  });

  const headers: ITableHeader[] = [
    {
      key: 'user_name',
      value: `${'Nome'}`,
      columnWidth: '12%',
      leftBody: true,
      leftHeader: true,
    },

    {
      key: 'user_email',
      value: `${'Email'}`,
      columnWidth: '12%',
      leftBody: true,
      leftHeader: true,
    },
    {
      key: 'user_profile',
      value: `${'Perfil'}`,
      columnWidth: '12%',
      leftBody: true,
      leftHeader: true,
    },
  ];

  function changeStatusRequest() {
    Api.patch(`users/status/${user?.user_id}`)
      .then((res) => {
        addToast({
          status: 'success',
          title: `Usuário ${res.data.user_status ? 'ativado' : 'desativado'} com sucesso.`,
        });
        refetch();
        setModalActiveUser(false);
      })
      .catch((err) => {
        addToast({
          status: 'error',
          title: 'Ocorreu um erro.',
        });
      });
  }

  function handleEdit(user: IUserTableRow) {
    setUser(user);
    setModalEditUser(!modalEditUser);
  }

  useEffect(() => {
    const message = (error as { message?: string })?.message;
    if (error && !isLoading && !data && message) {
      addToast({ status: 'error', title: message });
    }
  }, [error, isLoading, data, addToast]);

  return (
    <>
      <ModalConfirm
        isModalActive={modalActiveUser}
        handleCancel={() => setModalActiveUser(false)}
        handleClose={() => {
          refetch();
          setModalActiveUser(false);
        }}
        handleSubmit={changeStatusRequest}
        title={`${statusMessage ? 'Desativar' : 'Ativar'} usuário?`}
        message={
          statusMessage
            ? 'Usuário será desativado e estará disponível na aba de Inativos. Deseja continuar?'
            : 'Usuário será reativado e estará disponível na aba de Ativos. Deseja continuar?'
        }
      />
      <ModalEditUser
        isModalActive={modalEditUser}
        closeModal={() => {
          refetch();
          setModalEditUser(!modalEditUser);
        }}
        keyId={user?.user_id}
      />
      <BaseManagement
        pageTitle="Usuários"
        buttonText="Novo Usuário"
        buttonPath="/user-management/users/new"
        canCreate={canCreateUser}
        showOnOff={true}
        onOff={onOff}
        setOnOff={setOnOff}
        pageParam={pageParam}
        setPageParam={setPageParam}
        setSearchParam={setSearchParam}
        dataPagination={data?.data?.meta}
      >
        <Table
          headers={headers}
          data={tableData}
          enableActions
          canChangeStatus={canActivateUser}
          onEdit={handleEdit}
          canEdit={canEditUser}
          emptyMessage={'Sem Usuários cadastrados!'}
          instruction={
            <>
              Clique no botão de <strong>“Novo Usuário”</strong> para cadastrar.
            </>
          }
          loading={isLoading}
          currentPage={data?.data.meta.currentPage}
          totalPages={data?.data?.meta.totalPages}
          onPageChanges={(page) => {
            setPageParam(page);
          }}
        />
      </BaseManagement>
    </>
  );
}
