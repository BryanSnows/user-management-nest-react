import styled from 'styled-components';

interface IContainer {
  size?: string;
}

export const Container = styled.div<IContainer>`
  width: ${({ size }) => (size ? size : '100%')};
  display: flex;
  padding: 0.9rem 0.5rem;
  border-radius: 16px;
  outline: 1.5px solid ${({ theme }) => theme.colors.border.main};
  transition: all 0.2s ease-in;
  input::placeholder {
    color: ${({ theme }) => theme.colors.light.main};
    font-size: 0.9rem;
  }

  &:hover {
    input::placeholder {
      color: ${({ theme }) => theme.colors.dark.light};
      transition: 'color 0.3s ease-in-out';
    }
  }

  & input {
    flex-grow: 1;
    border: none;
    margin-left: 0.5rem;

    &:focus {
      outline: 0;
    }
  }

  & button {
    background-color: transparent;
  }
`;
