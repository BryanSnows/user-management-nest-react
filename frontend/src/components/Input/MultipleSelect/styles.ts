import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Chip = styled.span`
  background-color: ${({ theme }) => theme.colors.background.mediumGray};
  padding: 0 0.3rem;
  border-radius: 6px;
`;

export const Placeholder = styled.span`
  color: rgb(200, 200, 208);
  font-size: 1rem;
  font-weight: 200;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgb(212, 218, 222);
    transition: color 0.3s ease-in-out;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  padding: 0.3rem 0.8rem;
`;

export const ClearButton = styled.button`
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  right: 40px;
  top: calc(50% - 15px);
  z-index: 100000000;
  padding: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.fairGray};
    border-radius: 16px;
  }
`;
