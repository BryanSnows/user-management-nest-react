import { lighten, darken } from "polished";
import styled, { css } from "styled-components";
import { ButtonMainProps } from "./types";

 

export const ButtonCreateContainer = styled.button<ButtonMainProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 16px;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "60px")};
  color: ${({ theme }) => theme.colors.background.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 16px;
  font-size: medium;
  transition: all 0.2s ease;

 

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.mediumDark};
  }

 

  &:active {
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary.main)};
  }

 

  ${({ secondaryStyle }) =>
    secondaryStyle &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary.mediumDark};
      border: 1px solid ${({ theme }) => theme.colors.light.mediumDark};

 

      &:hover {
        background-color: ${({ theme }) => theme.colors.light.mediumLight};
      }

 

      &:active {
        filter: brightness(0.8);
      }
    `}
`;