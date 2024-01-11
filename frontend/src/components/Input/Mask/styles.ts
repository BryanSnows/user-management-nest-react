import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const StyledInputMask = styled(InputMask)`
  font-size: '0.9rem';
  font-family: 'Visby Medium';
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  padding: 16.5px 14px;
  transition: color 0.3s ease-in-out;

  &::placeholder {
    font-family: 'Visby Medium';
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.typography.gray};
  }

  &:hover {
    &::placeholder {
      font-family: 'Visby Medium';
      color: ${({ theme }) => theme.colors.dark.light};
      transition: color 0.3s ease-in-out;
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.light.light};
    color: ${({ theme }) => theme.colors.typography.small};
  }
`;
