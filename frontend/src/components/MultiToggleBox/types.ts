import { Dispatch, SetStateAction } from 'react';

export interface IMultiToggleBox {
  currentValue: any;
  toggles?: IToggleBox[];
}

export interface IToggleBox {
  onChange: (e: any) => void;
  text: string;
  value: any;
}
