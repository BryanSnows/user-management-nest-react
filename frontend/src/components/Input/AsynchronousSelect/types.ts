import { TextFieldProps } from '@mui/material';

export type Option = {
  id: number;
  value: string;
};

export interface ISelectCurrentValue {
  id?: number;
  value?: string;
}

export type SelectProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  width?: string;
  _errorLabel?: boolean;
  disabled?: boolean;
  values?: Array<{
    id: number;
    value: string;
  }>;
  double?: boolean;
  currentValue?: ISelectCurrentValue | null;
  isLoading?: boolean;
  text?: string;
  noOptionsText?: string;
  onChangeValue?: (newValue: ISelectCurrentValue | null) => void;
} & TextFieldProps;
