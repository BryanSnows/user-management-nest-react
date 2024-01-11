import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { WrapperProps } from './global';

const containerVariants: Variants = {
  hidden: {
    x: 0,
    y: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      bounce: 0.4,
    },
  },
};

export const Overlay = styled.div`
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
  z-index: 1;
`;

export const WrapperModal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  svg {
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const ContainerConfirm = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: 16px;
  min-width: 330px;
  max-width: 430px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px;
  gap: 25px;

  .text-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }

  /* .close-icon {
    color: #737373;
    font-size: 1.2rem;
    border: 0;
    background-color: transparent;
    align-self: flex-end;

    border-radius: 50%;
    width: 10%;
    height: 10%;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ccc;
    }
  } */
`;

export const ContainerLogout = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  background: ${({ theme }) => theme.colors.background.white};
  border-radius: 4px;
  width: 398px;
  height: 280px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2px 26px;

  text-align: center;

  .text-group {
    h1 {
      /* padding-bottom: 22px;
      font-size: 26px; */
    }
  }

  .close-icon {
    color: #737373;
    font-size: 1.2rem;
    border: 0;
    background-color: transparent;
    align-self: flex-end;

    border-radius: 50%;
    width: 10%;
    height: 10%;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ccc;
    }
  }
`;

export const ContainerModal = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  display: flex;
  width: 80%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  gap: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0px 3px 6px #0000001c;
  border-radius: 20px;
  overflow-y: auto;
  padding: 2rem;
`;
