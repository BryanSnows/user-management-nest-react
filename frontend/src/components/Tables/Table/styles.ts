import styled from 'styled-components';

interface ITableStyle {
  hideLineBottom?: boolean;
}

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 56px;
  /* overflow-y: auto; */
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TableBox = styled.table<ITableStyle>`
  width: 100%;
  border-collapse: collapse;
  thead th {
    position: sticky;
    top: 0;
    border: none;
    background-color: ${({ theme }) => theme.colors.background.white};
  }

  thead {
    tr th {
      position: relative;
      color: ${({ theme }) => theme.colors.typography.gray};
      font-size: 1rem !important;
      text-align: left;
      padding: 18px 15px;
      font-size: 0.8em;
      text-transform: capitalize;
      letter-spacing: 0.75px;

      &.center {
        text-align: center;
      }
    }

    & button {
      position: absolute;
      top: calc(50% - 0.5rem);
      right: 0;
      height: 1rem;
      width: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.background.white};
      background-color: ${({ theme }) => theme.colors.typography.gray};
      border-radius: 10px;
    }
  }

  tbody {
    tr {
      .pending-icon {
        position: relative;
        overflow-x: visible;

        svg {
          color: ${({ theme }) => theme.colors.danger.main};
          width: 20px;
          height: 20px;
        }
      }
    }

    td {
      max-width: 100px;
      height: 100%;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.typography.body};
      padding: 15px;
      border-bottom: ${({ theme, hideLineBottom }) =>
        hideLineBottom ? 'none' : `1px solid  ${theme.colors.border.main}`};

      :last-child {
        max-width: none;
        height: 100%;
      }
      /* :first-child {
        } */
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 30px;
  }

  .icon-button {
    width: 45px;
    background-color: ${({ theme }) => theme.colors.background.white};
    box-shadow: 1px 4px 7px #00000026;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.typography.mediumGray};

    &:disabled {
      background-color: ${({ theme }) => theme.colors.background.white};

      & svg {
        color: ${({ theme }) => theme.colors.typography.lightGray};
      }
    }
  }

  /* .start-button-tooltip {
    position: relative;
    overflow-x: visible;
    width: 45px;
    background-color: ${({ theme }) => theme.colors.background.white};
    box-shadow: 1px 4px 7px #00000026;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.typography.mediumGray};

    p {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      visibility: hidden;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.typography.blueGray};
      color: ${({ theme }) => theme.colors.typography.body};
      padding: 5px 10px;
      z-index: 999;
      top: 0;
      left: 100%;
      font-size: 0.8rem;

      :after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 9%;
        margin-left: -6px;
        width: 0;
        height: 0;
        border-bottom: 6px solid ${({ theme }) => theme.colors.typography.blueGray};
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
      }
    }

    &:hover p {
      visibility: visible;
      opacity: 0.9;
      top: 40px;
      left: 0px;
    }
  } */

  .status-button {
    background-color: ${({ theme }) => theme.colors.danger.mediumDark};
    color: ${({ theme }) => theme.colors.typography.white};
    min-width: 120px;
    border-radius: 10px;
    letter-spacing: 0.75px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.danger.mediumLight};
      transition: background-color 0.3s ease-in-out;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.light.mediumDark};
    }
  }

  .active-status {
    background-color: ${({ theme }) => theme.colors.success.mediumDark};

    &:hover {
      background-color: ${({ theme }) => theme.colors.success.light};
    }
  }
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  & svg {
    width: inherit;
    height: 40vh;
  }

  strong {
    font-weight: 600;
  }
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0px;
`;
