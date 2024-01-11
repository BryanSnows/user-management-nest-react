import { Dispatch, SetStateAction } from 'react';

export interface ISelectCurrentValueMultiple {
  id: string;
  value: string;
}

export interface MultipleSelectProps {
  id?: string;
  label?: string;
  placeholder?: string;
  width?: string;
  disabled?: boolean;
  MessageWithoutData?: string;
  values: (ISelectCurrentValueMultiple | undefined)[];
  currentValue: (ISelectCurrentValueMultiple | undefined)[];
  setChangeValue: Dispatch<SetStateAction<(ISelectCurrentValueMultiple | undefined)[]>>;
  handleClose?: () => void;
}
