import { DefaultInputProps } from '../DefaultInput/DefaultInputProps';

export interface MaskInputProps extends DefaultInputProps {
  mask: string;
  BeforeMaskedStateChangeStates?: (e: any) => void;
}
