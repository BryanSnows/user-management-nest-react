import styled from 'styled-components';

export interface WrapperProps {
  minHeight?: string;
}

export interface IWrapper {
  gap?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
  flex-grow: 1;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
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

export const PageWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ContainerInlineCenter = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const ActionsTop = styled.div<{ fitContent?: boolean }>`
  display: flex;
  width: ${({ fitContent }) => (fitContent ? 'fit-content' : '100%')};
  max-width: 400px;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionsButton = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormCreate = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  flex-grow: 1;
  gap: 2.5rem;
`;

export const ContenFormtWrapper = styled.div`
  width: 75%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: space-between;
`;

export const InputsFormWrapper = styled.div`
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxTable = styled.div`
  /* min-height: 60vh; */
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  gap: 30px;
`;
export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const WrapperTextRowLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  word-break: break-all;
  text-align: start;
`;

export const WrapperTextRowCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3vw;
  word-break: break-all;
  text-align: start;
`;

export const WrapperTextColumnCenter = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > p {
    position: absolute;
    right: 5px;
    bottom: -1.5rem;
  }
`;

export const WrapperTextColumnLeft = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ gap }) => (gap ? gap : '0px')};
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ModalDivider = styled.div`
  flex: 1;
  height: 0.5px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.light.main};
`;

export const ModalContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1vw;
  justify-items: stretch;
  align-items: flex-start;
  margin-bottom: 35px;
`;

export const ModalItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const BendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-top: 1rem;
`;
