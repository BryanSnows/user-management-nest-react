import styled from 'styled-components';

interface MuiWrapperProps {
  width?: string;
}

export const MuiWrapper = styled.div<MuiWrapperProps>`
  width: ${({ width }) => (width ? width : '100%')};
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.border.main};
    border-radius: 16px;
    font-size: 1rem;
  }
`;
