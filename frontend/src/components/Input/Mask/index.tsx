import InputLabel from '@mui/material/InputLabel';
import { LabelTheme } from '../StyledGlobal/styles';
import { useEffect, useState } from 'react';
import { StyledInputMask } from './styles';
import { MaskInputProps } from './MaskInputProps';

export function InputMasked({
  mask,
  label,
  placeholder,
  width,
  error,
  removeError,
  disabled,
  onChange,
  value,
  BeforeMaskedStateChangeStates,
  ...rest
}: MaskInputProps) {
  const useWidth = width ? width : '100%';
  const [showError, setShowError] = useState(error ? true : false);

  useEffect(() => {
    setShowError(error ? true : false);
  }, [error]);

  return (
    <>
      <InputLabel sx={LabelTheme()}>{label}</InputLabel>
      <StyledInputMask
        mask={mask}
        placeholder={placeholder}
        style={{ width: useWidth }}
        onChange={onChange}
        disabled={disabled ? disabled : false}
        maskChar={null}
        value={value}
      />
    </>
  );
}
