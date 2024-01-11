import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as Close } from "../../../assets/icons/x.svg";

import { Container } from "./styles";
import { SearchProps } from "./SearchProps";
import { useDebounce } from "../../../context/hooks/useDebounce";
import { useTheme } from "styled-components";
// import { useTranslation } from 'react-i18next';

export function Search({
  inputWidth,
  currenteValue,
  message,
  onSearch,
}: SearchProps) {
  const [value, setValue] = useState("");
  // const { t } = useTranslation();
  const { colors: theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currenteValue && currenteValue.length > 0) {
        setValue(currenteValue);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currenteValue]);

  const debounceChange = useDebounce(onSearch, 400);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    debounceChange(e.target.value);
  }

  return (
    <Container size={inputWidth}>
      <input
        type="text"
        placeholder={message ? message : `${"Pesquisar"}`}
        value={value}
        onChange={handleChange}
      />
      {value ? (
        <button
          type="button"
          onClick={() => {
            setValue("");
            onSearch("");
          }}
        >
          <Close color={theme.light.mediumDark} />
        </button>
      ) : (
        <SearchIcon color={theme.light.mediumDark} />
      )}
    </Container>
  );
}
