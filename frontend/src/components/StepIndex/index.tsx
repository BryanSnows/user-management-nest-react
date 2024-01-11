import { ContainerIndex, Circle1, Circle2, Line } from './styles';
import { StepIndexProps } from './types';

export function StepIndex({ step }: StepIndexProps) {
  return (
    <ContainerIndex>
      <Circle1 step={step}>
        <p>1</p>
      </Circle1>
      <Line step={step} />
      <Circle2 step={step}>
        <p>2</p>
      </Circle2>
    </ContainerIndex>
  );
}
