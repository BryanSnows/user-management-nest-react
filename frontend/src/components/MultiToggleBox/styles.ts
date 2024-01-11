import styled from 'styled-components';

interface ToggleButtonProps {
  isActive: boolean;
}

export const ToggleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `solid 1.5px ${theme.colors.border.main}`};
  border-radius: 16px;
  width: fit-content;
  padding: 1px;
`;

export const Toggle = styled.div<ToggleButtonProps>`
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
