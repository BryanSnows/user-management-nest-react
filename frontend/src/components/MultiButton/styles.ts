import styled from 'styled-components';

interface IButtonProps {
  active?: boolean;
}

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: start;

  & h5 {
    flex: 1;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 18px;
  padding: 2px;
  gap: 1px;
`;

export const Button = styled.button<IButtonProps>`
  padding: 8px 24px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary.main : theme.colors.background.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.typography.white : theme.colors.typography.mediumGray};
  border-radius: 16px;
  height: 60px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ active, theme }) => (active ? '' : theme.colors.primary.mediumLight)};
    color: ${({ theme }) => theme.colors.typography.white};
    transition: background-color 0.4s easeout;
  }

  & svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;
