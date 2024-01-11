import 'dayjs/locale/pt-br';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateInputProps } from './DateInputProps';
import { MuiWrapper } from './styles';
import { InputTheme, LabelTheme } from '../StyledGlobal/styles';
import moment from 'moment';

export function DateInput({
  width,
  label,
  currentValue,
  disabled,
  maxDate,
  minDate,
  onDateChange,
}: DateInputProps) {
  return (
    <MuiWrapper width={width ? width : '100%'}>
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="pt-br">
        <InputLabel sx={LabelTheme()}>{label}</InputLabel>

        <DatePicker
          sx={InputTheme()}
          value={currentValue ? moment(currentValue) : null}
          disabled={disabled ? true : false}
          onChange={(event: any) => {
            onDateChange && onDateChange(event);
          }}
          slotProps={{
            textField: {
              placeholder: 'Selecione uma data',
              inputProps: {
                style: {
                  fontFamily: 'Visby Medium',
                  fontSize: '0.9rem',
                },
              },
            },
          }}
          maxDate={maxDate ? moment(maxDate) : null}
          minDate={minDate ? moment(minDate) : null}
        />
      </LocalizationProvider>
    </MuiWrapper>
  );
}
