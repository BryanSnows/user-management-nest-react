import { ChangeEvent } from 'react';
import { FormatInputType } from '../../enums';
import { formatToOnlyNumbers, formatToOnlyNumbersWithNoLeadingZero } from './formatToOnlyNumber';
import { formatToOnlyLetters } from './formatToOnlyLetters';
import { formatToAlphaNumeric } from './formatToAlphaNumeric';

export class HandleInput {
  private static instance: HandleInput;
  public static getInstance(): HandleInput {
    if (!HandleInput.instance) {
      HandleInput.instance = new HandleInput();
    }
    return HandleInput.instance;
  }

  formatWithRegex(
    event: ChangeEvent<HTMLInputElement>,
    valid: string,
    setState: (newValue: any) => void,
    setError: (newValue: { field: string; message: string }) => void,
    removeError: (newValue: string) => void,
    keyError: string,
    message?: string,
  ): void {
    if (valid === FormatInputType.PIPE_CODE) {
      const inputValue = formatToOnlyNumbers(event.target.value.trimStart());
      setState(inputValue);

      if (inputValue.length !== 12) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.USER_NAME) {
      const inputValue = formatToOnlyLetters(event.target.value.trimStart());
      setState(inputValue);

      if (!inputValue || inputValue.length < 4 || inputValue.length > 40) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_NAME || valid === FormatInputType.PROFILE_NAME) {
      const inputValue = formatToAlphaNumeric(event.target.value.trimStart());
      setState(inputValue);

      if (!inputValue || inputValue.length < 5 || inputValue.length > 40) {
        setError({
          field: keyError,
          message: message || 'o campo deve ter entre 5 e 40 caracteres',
        });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_LENGTH) {
      const inputValue = formatToOnlyNumbersWithNoLeadingZero(event.target.value.trim());

      setState(inputValue);

      if (!inputValue || +inputValue <= 0 || inputValue.length > 5) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_TOP) {
      const inputValue = formatToOnlyNumbersWithNoLeadingZero(event.target.value.trim());

      setState(inputValue);

      if (!inputValue || +inputValue <= 0 || inputValue.length > 5) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_BOTTOM) {
      const inputValue = formatToOnlyNumbersWithNoLeadingZero(event.target.value.trim());

      setState(inputValue);

      if (!inputValue || +inputValue <= 0 || inputValue.length > 5) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_REFERENCE) {
      const inputValue = formatToOnlyNumbersWithNoLeadingZero(event.target.value.trim());

      setState(inputValue);

      if (!inputValue || +inputValue <= 0 || inputValue.length > 5) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_DIAMETER) {
      let inputValue = event.target.value;
      setState(inputValue);

      // const regex = /^\d((\/\d{1,2})?|(\s\d\/\d))$/g;

      const regex = /^[1-9]\d*(((\/\d{1,2})?|\s\d\/\d)|[1-9])$/g;

      if (!regex.test(inputValue)) {
        setError({
          field: keyError,
          message: message || 'Insira um valor permitido. Ex: "1", "1/2", "5/16" ou "1 1/2"',
        });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PIPE_BENDS) {
      const inputValue = formatToOnlyNumbersWithNoLeadingZero(event.target.value.trim());

      setState(inputValue);

      if (!inputValue || +inputValue <= 0) {
        setError({ field: keyError, message: message || '' });
      } else if (+inputValue > 50) {
        setError({ field: keyError, message: 'Máximo 50 dobras' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.USER_EMAIL) {
      const inputValue = event.target.value.trim();
      setState(inputValue);

      const regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!inputValue || !regex_email.test(inputValue)) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.MACHINE_IP) {
      const inputValue = event.target.value.trim();
      setState(inputValue);

      const regex_ip = /^(?!.*\.\.)(?!^\.)\d{1,3}(\.\d{1,3}){3}$/;

      if (inputValue && inputValue !== '' && !regex_ip.test(inputValue)) {
        setError({
          field: keyError,
          message: message || 'Insira um IP válido',
        });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.MACHINE_NAME) {
      const inputValue = formatToAlphaNumeric(event.target.value.trimStart());
      setState(inputValue);

      if (!inputValue || inputValue.length < 5 || inputValue.length > 40) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PRODUCTION_GOAL_ORDER) {
      const inputValue = formatToOnlyNumbers(event.target.value.trimStart());
      setState(inputValue.toString());

      if (!inputValue || inputValue.length < 7 || inputValue.length > 8) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.PRODUCTION_GOAL_EXPECTED) {
      const inputValue = formatToOnlyNumbersWithNoLeadingZero(event.target.value.trimStart());

      setState(inputValue);

      if (!inputValue || !(+inputValue > 0)) {
        setError({ field: keyError, message: message || '' });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.DAILY_PRODUCTION_GOAL) {
      const inputValue = formatToOnlyNumbers(event.target.value.trimStart());

      if (!inputValue) {
        setState(0);
      }

      setState(inputValue);
    }
  }
}
