import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Option, SelectProps } from './types';
import InputLabel from '@mui/material/InputLabel';
import { InputTheme, LabelTheme } from '../StyledGlobal/styles';
import { SelectWrapper } from '.././Select/styles';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function AsynchronousSelect({
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
  noOptionsText,
  onChangeValue,
  isLoading,
  ...rest
}: SelectProps) {
  const useWidth = width;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Option[]>([]);
  const [loadingIconActive, setLoadingIconActive] = useState(true);

  useEffect(() => {
    if (open) {
      setLoadingIconActive(true);
      (async () => {
        await sleep(500);

        const array = values ? [...values] : [];
        setOptions(array);
        setLoadingIconActive(false);
      })();
    } else {
      setLoadingIconActive(false);
      setOptions([]);
    }
  }, [open]);

  return (
    <SelectWrapper>
      <InputLabel sx={LabelTheme()}>{label}</InputLabel>

      <Autocomplete
        fullWidth={true}
        id={id}
        noOptionsText={noOptionsText}
        loadingText={<CircularProgress color="inherit" size={20} />}
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
        loading={loadingIconActive}
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
              endAdornment: (
                <>
                  {loadingIconActive ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </SelectWrapper>
  );
}
