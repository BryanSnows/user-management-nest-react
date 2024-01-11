import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { FormGroupProps } from './types';

// const containerVariants: Variants = {
//   hidden: {
//     y: 80,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       type: "spring",
//     },
//   },
// };

export const Container = styled.div<FormGroupProps>`
  ${(props) =>
    props.isInheritedWidth
      ? css`
          width: inherit;
        `
      : css`
          width: 100%;
        `}
  position: relative;
  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 14px;
    display: block;
    margin: 3px 0px 0px 3px;
    position: absolute;
    right: 0px;
  }
`;
