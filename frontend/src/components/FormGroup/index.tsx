import { Container } from './styles';
import { FormGroupProps } from './types';

export function FormGroup({
  children,
  error,
  errorPasswordNumber,
  errorPasswordCaracter,
  extraErrorMessage,
  isInheritedWidth,
}: FormGroupProps) {
  return (
    <Container isInheritedWidth={isInheritedWidth}>
      {error && <small>{error}</small>}
      {children}
      {errorPasswordNumber && <small>{errorPasswordNumber}</small>}
      {errorPasswordCaracter && <small>{errorPasswordCaracter}</small>}
      {error &&
        extraErrorMessage?.map((item: string, index: number) => <small key={index}>{item}</small>)}
    </Container>
  );
}
