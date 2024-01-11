import styled from 'styled-components';

export const FormFileUpload = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  max-width: 100%;
  text-align: center;
  position: relative;
`;

export const InputFileUpload = styled.input`
  display: none;
`;

export const LabelFileUpload = styled.label`
  height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border-radius: 16px;
  border: 2px dashed ${({ theme }) => theme.colors.border.main};
  width: 100%;

  .drag-active {
    background-color: ${({ theme }) => theme.colors.background.white};
  }
`;

export const ContentWithoutFile = styled.div`
  display: flex;
  height: 125px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 30px;
  height: 100%;

  & svg {
    color: ${({ theme }) => theme.colors.dark.light};
    height: 25px;
    width: 25px;
  }
`;
export const ContentWithFile = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 40px;

  .folderIcon {
    border-radius: 14px;
    border: 2px solid ${({ theme }) => theme.colors.light.light};
    padding: 10px;
    color: ${({ theme }) => theme.colors.border.main};
    height: 50px;
    width: 50px;
  }

  .closeIcon {
    color: ${({ theme }) => theme.colors.danger.main};
    height: 20px;
    width: 20px;
  }
`;

export const LinkToFile = styled.button`
  color: ${({ theme }) => theme.colors.primary.mediumDark};
  font-size: 1rem;
  font-family: 'Visby Semibold';
  background-color: transparent;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  svg {
    color: ${({ theme }) => theme.colors.danger.main};
    height: 20px;
    width: 20px;
  }
`;

export const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
