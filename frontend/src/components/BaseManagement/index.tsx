import { useNavigate } from 'react-router-dom';
import {
  ActionsTop,
  ContainerTitle,
  Container,
  ContentWrapper,
  BoxTable,
  PaginationWrapper,
} from '../../styles/global';
import { Header3 } from '../../styles/typography';
import { ToggleBox } from '../ToggleBox';
import { ButtonMain } from '../Button/ButtonMain';
import { Search } from '../Input/Search';
import { Pagination } from '../Button/Pagination';
import { BaseProps } from './types';
import { BreadCrumbs } from '../BreadCrumbs';
import { Select } from '../Input/Select';
import { MultiToggleBox } from '../MultiToggleBox';

export function BaseManagement({
  dataPagination,
  showOnOff,
  onOff,
  actualPage,
  multiToggles,
  setOnOff,
  showSelect,
  selectLabel,
  selectPlaceholder,
  selectOptions,
  selectCurrentOption,
  handleSelectOptions,
  selectIsDisabled,
  pageParam,
  setPageParam,
  setSearchParam,
  pageTitle,
  buttonText,
  buttonPath,
  canCreate,
  children,
}: BaseProps) {
  const navigate = useNavigate();

  const currentPage =
    dataPagination?.itemCount === 0 && dataPagination?.currentPage > dataPagination?.totalPages;

  if (currentPage && pageParam !== 1) {
    setPageParam(pageParam - 1);
  }

  return (
    <Container>
      <ContentWrapper>
        <ContainerTitle>
          <ActionsTop fitContent={true}>
            <div>
              <Header3>{pageTitle}</Header3>
              <BreadCrumbs />
            </div>
            {showOnOff ? (
              <ToggleBox
                onOff={onOff}
                onChangeInactive={() => {
                  setOnOff && setOnOff(false);
                  setPageParam(1);
                }}
                onChangeActive={() => {
                  setOnOff && setOnOff(true);
                  setPageParam(1);
                }}
              />
            ) : (
              <MultiToggleBox currentValue={actualPage} toggles={multiToggles} />
            )}
            {showSelect && (
              <Select
                disabled={selectIsDisabled}
                width="100%"
                label={selectLabel}
                placeholder={selectPlaceholder}
                values={selectOptions}
                currentValue={selectCurrentOption}
                onChangeValue={handleSelectOptions}
              />
            )}
          </ActionsTop>
          <ActionsTop>
            <ButtonMain
              height="50px"
              label={buttonText}
              onClick={() => navigate(buttonPath)}
              disabled={!canCreate}
            />
            <Search
              onSearch={(value) => {
                setSearchParam(value);
                setPageParam(1);
              }}
            />
          </ActionsTop>
        </ContainerTitle>

        <BoxTable>{children}</BoxTable>
      </ContentWrapper>

      {!!dataPagination?.totalItems && (
        <PaginationWrapper>
          <Pagination
            currentPage={dataPagination.currentPage}
            totalPages={dataPagination.totalPages}
            onPageChange={(page: number) => {
              setPageParam(page);
            }}
          />
        </PaginationWrapper>
      )}
    </Container>
  );
}
