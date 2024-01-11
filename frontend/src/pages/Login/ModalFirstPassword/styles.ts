import styled, { css } from "styled-components";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    x: -200,
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

export const Overlay = styled.div`
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.section`
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Actions = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  gap: 22px;
`;

// export const Title = styled.div`

//   .close-icon {
//     color: #737373;
//     font-size: 1.2rem;
//     border: 0;
//     background-color: transparent;
//     align-self: flex-end;
//     border-radius: 50%;
//     width: 10%;
//     height: 10%;
//     transition: background-color 0.2s ease;

//     &:hover {
//       background-color: #ccc;
//     }
//   }
// `;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & :nth-child(3n) {
    margin-top: 1rem;
  }
`;

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TextH5 = styled.h5`
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const Container = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
}))`
  width: 50%;
  background: ${({ theme }) => theme.colors.background.white};
  border-radius: 20px;
  padding: 25px 35px;
  box-shadow: 0px 1px 4px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerEdit = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
}))`
  width: 100%;
  max-width: 574px;
  height: 100%;
  max-height: 278px;
  background: #ffffff;
  border-radius: 5px;
  padding: 25px 35px;
  box-shadow: 0px 1px 4px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
