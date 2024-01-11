import styled, { css } from 'styled-components';
import { IToggleBox } from './types';

export const ToggleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `solid 1.5px ${theme.colors.border.main}`};
  border-radius: 16px;
  max-width: 187px;
`;

export const Toggle = styled.div<IToggleBox>`
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border-radius: 14px;
  margin: 1px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary.main : '')};

  button {
    font-size: 0.8rem;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.typography.white : theme.colors.typography.mediumGray};
    border: none;
    background-color: transparent;
    width: 90px;
    height: 50px;
  }
`;
