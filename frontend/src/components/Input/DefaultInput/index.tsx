import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import ClearIcon from "@mui/icons-material/Clear";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { DefaultInputProps } from "./DefaultInputProps";
import { useEffect, useState } from "react";
import { InputTheme, LabelTheme } from "../StyledGlobal/styles";

export function DefaultInput({
  label,
  placeholder,
  width,
  error,
  removeError,
  // showMessageError,
  isMultiline,
  shrink,
  rows,
  small,
  line,
  adornment,
  type,
  toggleShowPassword,
  showPassword,
  disabled,
  ...rest
}: DefaultInputProps) {
  const useWidth = width;
  const isPassword = showPassword ? "text" : "password";
  const [showError, setShowError] = useState(error ? true : false);

  useEffect(() => {
    setShowError(error ? true : false);
  }, [error]);

  const handleInputChange = () => {
    if (error && removeError) {
      removeError(error);
    }
    setShowError(false);
  };

  const inputProps = {
    ...rest,
  };

  const InputIcon = () => {
    return showPassword ? <Visibility /> : <VisibilityOff />;
  };

  const renderEndAdornment = () => {
    if (type === "password") {
      return (
        <InputAdornment position="end">
          {type !== "password" ? (
            adornment
          ) : (
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              <InputIcon />
            </IconButton>
          )}
        </InputAdornment>
      );
    }
    if (showError) {
      return (
        <InputAdornment position="end">
          <ClearIcon color="error" />
        </InputAdornment>
      );
    }
  };

  return (
    <>
      <InputLabel sx={LabelTheme()}>{label}</InputLabel>
      <TextField
        type={type === "password" ? isPassword : type}
        variant="outlined"
        placeholder={placeholder}
        rows={rows}
        sx={InputTheme()}
        style={{ width: useWidth }}
        error={showError}
        onChange={handleInputChange}
        inputProps={inputProps}
        InputProps={{
          endAdornment: renderEndAdornment(),
        }}
        multiline={isMultiline}
        InputLabelProps={{ shrink }}
        size={small ? "small" : "medium"}
        disabled={disabled ? disabled : false}
      />
    </>
  );
}
