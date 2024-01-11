import styled from 'styled-components';

type LegendProps = {
  background?: string;
};

type ContainerProps = {
  direction?: string;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ direction }) => (direction === 'row' ? '' : 'center')};
  align-items: ${({ direction }) => (direction === 'row' ? '' : 'flex-start')};
  height: ${({ direction }) => (direction === 'row' ? '100%' : '')};
  width: ${({ direction }) => (direction === 'row' ? '' : '100%')};
  max-height: ${({ direction }) => (direction === 'row' ? '250px' : '45%')};
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: 20px;
  padding: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Legend = styled.div<LegendProps>`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: ${({ background, theme }) =>
    background ? background : theme.colors.border.main};
`;

export const Title = styled.h4`
  font-size: clamp(0.1rem, 0.1rem + 1.8vh, 1.3rem);
  font-family: 'Visby Semibold';
  color: ${({ theme }) => theme.colors.typography.title};
`;

export const Value = styled.p`
  font-size: clamp(0.2rem, 0.3rem + 4vh, 3rem);
  font-family: 'Visby bold';
  color: ${({ theme }) => theme.colors.typography.gray};
`;
