import { useTheme } from 'styled-components';

export function InputTheme() {
  const { colors: theme } = useTheme();

  return {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      fontSize: '0.9rem',
      fontFamily: 'Visby Medium',
      '& input': {
        borderRadius: '16px !important',
      },
      '& fieldset': {
        borderWidth: '1px !important',
        borderRadius: '16px !important',
        borderColor: `${theme.border.main} !important`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${theme.border.main} !important`,
      },
      '&.Mui-disabled': {
        fieldset: {
          background: theme.light.light,
        },
        input: {
          color: 'theme.typography.small',
          zIndex: 1,
        },
      },
      '&.Mui-error fieldset': {
        borderColor: `${theme.danger.main} !important`,
      },
      'input::placeholder': {
        fontFamily: 'Visby Medium',
        fontSize: '0.9rem',
        transition: 'color 0.3s ease-in-out',
        color: 'theme.typography.gray',
      },
    },
    '&:hover': {
      fieldset: {
        borderColor: `${theme.border.main} !important`,
      },
      'input::placeholder': {
        transition: 'color 0.3s ease-in-out',
      },
      '.Mui-disabled': {
        fieldset: {
          borderColor: `${theme.border.main} !important`,
        },
      },
    },
  };
}

export function LabelTheme() {
  const { colors: theme } = useTheme();

  return {
    color: theme.typography.blue,
    fontFamily: 'Visby Bold',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
  };
}

export function MultipleInputTheme() {
  const { colors: theme } = useTheme();

  return {
    width: '100%',
    borderRadius: '16px !important',
    borderColor: 'red !important',

    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.border.main} !important`,
      borderWidth: '1px !important',
    },

    '.MuiPaper-root': {
      borderColor: `red !important`,
    },
  };
}
