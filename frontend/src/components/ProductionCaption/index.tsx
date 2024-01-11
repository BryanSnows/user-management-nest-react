import { Header4 } from '../../styles/typography';
import { Container, HeaderContainer, Legend, Title, Value } from './styles';
import { PropsProductionCaption } from './types';

export function ProductionCaption({
  legend,
  production,
  color,
  direction,
}: PropsProductionCaption) {
  return (
    <Container direction={direction}>
      <HeaderContainer>
        <Legend background={color} />
        <Title>{legend}</Title>
      </HeaderContainer>
      <Value>{production}</Value>
    </Container>
  );
}
