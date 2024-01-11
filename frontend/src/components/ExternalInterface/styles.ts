import styled, { css } from 'styled-components';

interface ContainerProps {
  isExpanded: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ isExpanded, theme }) => css`
    /* padding: 1.5rem; */
    /* border: 1px solid ${theme.colors.border.main}; */
    border-radius: 16px;
    width: ${'100%'};
    height: ${isExpanded ? '90vh' : '100%'};
    position: ${'relative'};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  max-height: 95vh;
  overflow-y: auto;
  gap: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0px 3px 6px #0000001c;
  border-radius: 20px;
  overflow-y: auto;
  padding: 2rem;
`;

export const ButtonZoom = styled.button`
  position: absolute;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 10px;
  top: 5px;
  right: 5px;
  z-index: 0;
`;
