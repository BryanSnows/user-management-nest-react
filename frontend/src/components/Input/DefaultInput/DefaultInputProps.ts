import { InputHTMLAttributes } from 'react';

export type DefaultInputProps = {
  label?: string;
  width?: string;
  error?: string;
  removeError?: (e: string) => void;
  line?: string;
  small?: boolean;
  isMultiline?: boolean;
  adornment?: string;
  shrink?: boolean;
  rows?: number;
  type?: string;
  showPassword?: boolean;
  disabled?: boolean;
  toggleShowPassword?: () => void;
  allowLeadingZero?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
