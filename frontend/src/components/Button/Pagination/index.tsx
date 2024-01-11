import { ReactComponent as ChevronLeft } from "../../../assets/icons/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronDoubleLeft } from "../../../assets/icons/chevron-double-left.svg";
import { ReactComponent as ChevronDoubleRight } from "../../../assets/icons/chevron-double-right.svg";
import { IPaginationProps } from "./types";
import {
  CurrentPage,
  NavigatorButton,
  PaginationBox,
  PaginationContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
// import { useTranslation } from 'react-i18next';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) {
  const [actualPage, setActualPage] = useState(currentPage);
  const { colors: theme } = useTheme();
  // const { t } = useTranslation();

  useEffect(() => {
    setActualPage(currentPage);
  }, [currentPage]);

  function onNext() {
    setActualPage((prev) => {
      if (prev === totalPages) {
        return prev;
      }
      onPageChange(prev + 1);
      return prev + 1;
    });
  }

  function onPrevious() {
    setActualPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      onPageChange(prev - 1);
      return prev - 1;
    });
  }

  return (
    <PaginationBox>
      <PaginationContainer>
        <NavigatorButton
          onClick={() => {
            setActualPage(1);
            onPageChange(1);
          }}
        >
          <ChevronDoubleLeft color={theme.dark.light} />
        </NavigatorButton>
        <NavigatorButton onClick={onPrevious}>
          <ChevronLeft color={theme.dark.light} />
        </NavigatorButton>

        <CurrentPage>
          {actualPage} de {totalPages}
        </CurrentPage>

        <NavigatorButton onClick={onNext}>
          <ChevronRight color={theme.dark.light} />
        </NavigatorButton>

        <NavigatorButton
          onClick={() => {
            setActualPage(totalPages);
            onPageChange(totalPages);
          }}
        >
          <ChevronDoubleRight color={theme.dark.light} />
        </NavigatorButton>
      </PaginationContainer>
    </PaginationBox>
  );
}
