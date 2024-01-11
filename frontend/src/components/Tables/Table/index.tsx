import { forwardRef, useEffect } from 'react';
import { organizeData } from './utils/organizedData';
import {
  Actions,
  ContainerActions,
  ContainerWrapper,
  Empty,
  Progress,
  TableBox,
  Wrapper,
} from './styles';
import { TableProps } from './types';
import { ReactComponent as Eye } from '../../../assets/icons/eye.svg';
import { CircularProgressTable } from '../../Loader/CircularProgressTable';
import { HiOutlinePencil } from 'react-icons/hi';
import { FiRefreshCcw } from 'react-icons/fi';
import { ReactComponent as EmptyTableImg } from '../../../assets/images/no-users.svg';
import { Body1, Header4 } from '../../../styles/typography';
import { useTheme } from 'styled-components';
import { FiDownload as FeatherDownload, FiPlay as PlayIcon } from 'react-icons/fi';
import { FaFilePdf } from 'react-icons/fa6';
import { situationColor } from './utils/situationColor';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import 'moment/locale/pt-br';

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      id,
      data,
      headers,
      enableActions,
      emptyMessage,
      instruction,
      loading,
      otherColor,
      textColor,
      canEdit,
      canDownload,
      canChangeStatus,
      canResetPassword,
      canViewDetail,
      canStart,
      hideLineBottom,
      isPlannigGoal,
      onChangeStatus,
      onResetPassword,
      onEdit,
      onDetail,
      onDownload,
      onStart,
    },
    ref,
  ) => {
    const [organizedData, indexedHeader] = organizeData(data, headers);
    const { colors: theme } = useTheme();

    const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
      <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.arrow}`]: {
        color: '#D9E1E7',
      },
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#D9E1E7',
        fontFamily: 'Visby Medium',
        color: '#06152b',
      },
    }));

    function isItPending(row: any) {
      return !!row?.production_goal_elaborated;
    }

    function isItPlayableToday(row: any) {
      const today = new Date();
      const parsedToday = moment(today).format('DD/MM/YYYY');
      const parsedStartDate = moment(row?.production_goal_start_date, 'DD/MM/YYYY').format(
        'DD/MM/YYYY',
      );
      return parsedStartDate <= parsedToday;
    }

    function isProgrammed(row: any) {
      if (row?.production_goal_situation) {
        return row.production_goal_situation === 'Programado';
      }
      return false;
    }

    function isUnavailableForStart(row: any) {
      if (row?.production_goal_situation) {
        return (
          row.production_goal_situation == 'Vencido' ||
          row.production_goal_situation == 'Concluído' ||
          row.production_goal_situation == 'Incompleto'
        );
      }
      return false;
    }

    function canStartProduction(row: any) {
      if (row?.$original.production_goal_can_start) {
        return row.$original.production_goal_can_start;
      }

      return false;
    }

    function isPositive(item: number) {
      if (item === 0) return '';
      return item > 0 ? theme.success.mediumDark : theme.danger.mediumDark;
    }

    return (
      <>
        {data?.length !== 0 && (
          <Wrapper>
            <ContainerWrapper>
              <TableBox ref={ref} id={id} hideLineBottom={hideLineBottom}>
                <thead>
                  <tr>
                    {headers?.map((header) => (
                      <th
                        key={header.key}
                        style={{
                          paddingLeft: headers.length === 1 ? '3rem' : '',
                          width: header.columnWidth ? header.columnWidth : '',
                          textAlign: header.leftHeader ? 'left' : 'center',
                          backgroundColor: otherColor,
                          color: textColor,
                        }}
                      >
                        {header.value}
                      </th>
                    ))}

                    {enableActions && (
                      <>
                        <th style={{ width: '25%' }}>{'Ações'}</th>
                      </>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {organizedData?.map((row: any, i: number) => {
                    return (
                      <tr key={i}>
                        {Object.keys(row).map((item, index) => {
                          if (item === '$original') {
                            return null;
                          }

                          return (
                            <BootstrapTooltip
                              title={
                                isItPending(row) && item == 'production_goal_elaborated'
                                  ? 'Planejamento sem produções diárias distribuídas.'
                                  : ''
                              }
                            >
                              <td
                                className={
                                  isItPending(row) && item == 'production_goal_elaborated'
                                    ? 'pending-icon'
                                    : ''
                                }
                                key={index}
                                style={{
                                  paddingLeft: headers.length === 1 ? '3rem' : '',
                                  width: indexedHeader[item].columnWidth || '',
                                  textAlign: indexedHeader[item].leftBody ? 'left' : 'center',
                                  color:
                                    item === 'accumulated_production'
                                      ? isPositive(row[item])
                                      : item === 'production_goal_situation' ||
                                        item === 'daily_production_situation'
                                      ? situationColor[row[item]]
                                      : '',
                                }}
                              >
                                {item === 'production_goal_elaborated'
                                  ? row[item] || ''
                                  : row[item] || '-'}
                              </td>
                            </BootstrapTooltip>
                          );
                        })}

                        {enableActions && (
                          <td>
                            <Actions>
                              <ContainerActions>
                                {onDetail && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onDetail && onDetail(row.$original)}
                                    title={'detalhes'}
                                    disabled={!canViewDetail}
                                  >
                                    <Eye />
                                  </button>
                                )}

                                {onDownload && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onDownload && onDownload(row.$original)}
                                    title="download"
                                    disabled={!canDownload}
                                  >
                                    <FaFilePdf size="20px" />
                                  </button>
                                )}

                                {onEdit && (
                                  <button
                                    className="icon-button"
                                    onClick={() => onEdit && onEdit(row.$original)}
                                    title={'editar'}
                                    disabled={
                                      isPlannigGoal ? canEdit && !isProgrammed(row) : !canEdit
                                    }
                                  >
                                    <HiOutlinePencil size="20px" />
                                  </button>
                                )}

                                {onResetPassword && (
                                  <button
                                    className="icon-button"
                                    onClick={() =>
                                      onResetPassword && onResetPassword(row.$original)
                                    }
                                    title={'resetar'}
                                    disabled={!canResetPassword}
                                  >
                                    <FiRefreshCcw size="20px" />
                                  </button>
                                )}

                                {onStart &&
                                  (isUnavailableForStart(row) ||
                                  isItPending(row) ||
                                  !isItPlayableToday(row) ? (
                                    <BootstrapTooltip
                                      title={
                                        isUnavailableForStart(row)
                                          ? 'Não é possível começar uma OP Vencida, Incompleta ou Concluída'
                                          : isItPending(row)
                                          ? 'OP não está elaborada'
                                          : !isItPlayableToday(row)
                                          ? 'OP precisa estar prevista para começar hoje'
                                          : ''
                                      }
                                    >
                                      <span>
                                        <button
                                          className={'icon-button'}
                                          onClick={() => onStart && onStart(row.$original)}
                                          disabled={canStart && !canStartProduction(row)}
                                          // disabled={!isElaborated(row) || !isItPlayableToday(row)}
                                        >
                                          <PlayIcon size="20px" />
                                        </button>
                                      </span>
                                    </BootstrapTooltip>
                                  ) : (
                                    <button
                                      className={'icon-button'}
                                      onClick={() => onStart && onStart(row.$original)}
                                      disabled={canStart && !canStartProduction(row)}
                                    >
                                      <PlayIcon size="20px" />
                                    </button>
                                  ))}
                              </ContainerActions>

                              {onChangeStatus && (
                                <button
                                  className={
                                    !!row.$original.status
                                      ? 'status-button'
                                      : 'status-button active-status'
                                  }
                                  onClick={() => {
                                    if (onChangeStatus) {
                                      onChangeStatus(row.$original);
                                    }
                                  }}
                                  disabled={!canChangeStatus}
                                >
                                  {!!row.$original.status ? 'Desativar' : 'Ativar'}
                                </button>
                              )}
                            </Actions>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </TableBox>

              {loading && (
                <Progress>
                  <CircularProgressTable />
                </Progress>
              )}
            </ContainerWrapper>
          </Wrapper>
        )}

        {data?.length === 0 && (
          <Wrapper>
            <TableBox ref={ref} id={id}>
              <thead>
                <tr></tr>
              </thead>
            </TableBox>
            <Empty>
              <EmptyTableImg />
              <Header4 fontColor={theme.typography.mediumGray}>{emptyMessage}</Header4>
              <Body1 fontColor={theme.typography.gray}>{instruction}</Body1>
            </Empty>
          </Wrapper>
        )}
      </>
    );
  },
);
