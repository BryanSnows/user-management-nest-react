import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Option, SelectProps } from './SelectProps';
import InputLabel from '@mui/material/InputLabel';
import { InputTheme, LabelTheme } from '../StyledGlobal/styles';
import { SelectWrapper } from './styles';

export function Select({
  id,
  width,
  placeholder,
  label,
  _errorLabel,
  values,
  currentValue,
  disabled,
  double,
  text,
  onChangeValue,
  ...rest
}: SelectProps) {
  const useWidth = width;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Option[]>([]);

  useEffect(() => {
    if (open) {
      const array = values ? [...values] : [];
      setOptions(array);
    } else {
      setOptions([]);
    }
  }, [open]);

  return (
    <SelectWrapper>
      <InputLabel sx={LabelTheme()}>{label}</InputLabel>

      <Autocomplete
        fullWidth={true}
        id={id}
        loadingText={null}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={(_e) => {
          setOpen(false);
        }}
        disabled={disabled}
        sx={{
          '&&& .MuiOutlinedInput-root:before': {
            border: 'none',
          },
          '.MuiOutlinedInput-root.Mui-disabled input': {
            fontFamily: 'Visby Medium',
            fontSize: '1rem',
          },
        }}
        isOptionEqualToValue={(option, values) => option.id === values.id}
        getOptionLabel={(option) =>
          double ? `${option.id} - ${option.value}` : `${`${option.value}`}`
        }
        options={options}
        loading={true}
        value={!disabled ? currentValue : { id: undefined, value: 'Selecionar um status' }}
        onChange={(_e, newValue) => {
          onChangeValue && onChangeValue(newValue);
        }}
        style={{ width: useWidth }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            sx={InputTheme()}
            {...rest}
            InputProps={{
              ...params.InputProps,
              endAdornment: <>{params.InputProps.endAdornment}</>,
            }}
          />
        )}
      />
    </SelectWrapper>
  );
}
