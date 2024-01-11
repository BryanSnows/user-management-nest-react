import styled, { css } from 'styled-components';
import { StepIndexProps } from './types';

export const ContainerIndex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Circle1 = styled.div<StepIndexProps>`
  ${(props) =>
    props.step == 2
      ? css`
          color: ${({ theme }) => theme.colors.primary.mediumLight};
          border-color: ${({ theme }) => theme.colors.primary.mediumLight};
        `
      : css`
          color: ${({ theme }) => theme.colors.primary.main};
          border-color: ${({ theme }) => theme.colors.primary.main};
        `}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  border-style: solid;
  border-width: 1px;
  font-family: 'Visby Medium', sans-serif;
  font-size: 18px;
`;

export const Line = styled.div<StepIndexProps>`
  ${(props) =>
    props.step == 2
      ? css`
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary.mediumLight};
        `
      : css`
          border-bottom: 1px solid ${({ theme }) => theme.colors.light.main};
        `}

  height: 15px;
  width: 25px;

  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
`;

export const Circle2 = styled.div<StepIndexProps>`
  ${(props) =>
    props.step == 2
      ? css`
          color: ${({ theme }) => theme.colors.primary.main};
          border-color: ${({ theme }) => theme.colors.primary.main};
        `
      : css`
          color: ${({ theme }) => theme.colors.light.main};
          border-color: ${({ theme }) => theme.colors.light.main};
        `}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  border-style: solid;
  border-width: 1px;
  font-family: 'Visby Medium', sans-serif;
  font-size: 18px;
`;
