import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Chip, ClearButton, LoadingContainer, Placeholder, SelectWrapper } from './styles';
import { LabelTheme, MultipleInputTheme } from '../StyledGlobal/styles';
import { useTheme } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { ISelectCurrentValueMultiple, MultipleSelectProps } from './types';
import { FiX } from 'react-icons/fi';

export default function MultipleSelect({
  id,
  width,
  placeholder,
  label,
  values,
  currentValue,
  disabled,
  MessageWithoutData,
  setChangeValue,
  handleClose,
}: MultipleSelectProps) {
  const { colors: theme } = useTheme();
  const [options, setOptions] = useState<(ISelectCurrentValueMultiple | undefined)[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: '300px',
        boxShadow: '0px 1px 3px -1px rgba(0,0,0,0.57)',
      },
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setOptions(values ? values : []);
      setLoading(false);
    }, 200);
  }, [open]);

  function getStyles(id: string) {
    if (currentValue.find((item) => item?.id === id)) {
      return {
        fontFamily: 'Visby Semibold',
        background: theme.background.mediumGray,
      };
    } else {
      return {
        fontFamily: 'Visby Medium',
      };
    }
  }

  const handleChange = (item: ISelectCurrentValueMultiple) => {
    const index = currentValue.findIndex((e) => e?.id === item.id);
    if (currentValue) {
      if (options.length === 0) {
        return;
      }
      if (index === -1) {
        setChangeValue([...currentValue, item]);
      } else {
        const newArray = [...currentValue];
        newArray.splice(index, 1);
        setChangeValue(newArray);
      }
    }
  };

  return (
    <SelectWrapper>
      <InputLabel sx={LabelTheme()} id={`${id}-label`}>
        {label}
      </InputLabel>
      <Select
        endAdornment={
          (currentValue.length && open) || (currentValue.length && isHovered) ? (
            <ClearButton
              onClick={(event) => {
                event.preventDefault();
                setChangeValue([]);
              }}
            >
              <FiX color={theme.dark.mediumLight} size={20} />
            </ClearButton>
          ) : null
        }
        id={id}
        multiple
        displayEmpty={placeholder ? true : false}
        value={currentValue}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onOpen={() => {
          setOpen(true);
          setLoading(true);
        }}
        onClose={() => {
          setOpen(false);
          setIsHovered(false);
          handleClose && handleClose();
        }}
        onChange={(_e, newValue: any) => {
          handleChange({ id: newValue.props.value, value: newValue.props.children });
        }}
        style={{ width: width || '100%' }}
        sx={MultipleInputTheme()}
        input={<OutlinedInput id={`${id}-select`} />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <Placeholder>{placeholder}</Placeholder>;
          }
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} key="box-itens">
              {selected.map((item) => {
                if (item) return <Chip key={item.id}>{item.value}</Chip>;
              })}
            </Box>
          );
        }}
        MenuProps={MenuProps}
        disabled={disabled}
      >
        {loading ? (
          <LoadingContainer>
            <CircularProgress color="inherit" size={20} />
          </LoadingContainer>
        ) : options?.length ? (
          options.map((item) => {
            if (item) {
              return (
                <MenuItem key={item.id} value={item.id} style={getStyles(item.id)}>
                  {item.value}
                </MenuItem>
              );
            }
          })
        ) : (
          <LoadingContainer>
            <span>{MessageWithoutData}</span>
          </LoadingContainer>
        )}
      </Select>
    </SelectWrapper>
  );
}
