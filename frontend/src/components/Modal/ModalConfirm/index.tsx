import ReactDOM from 'react-dom';
import {
  Overlay,
  Actions,
  ContainerConfirm,
  WrapperModal,
  WrapperContent,
} from '../../../styles/litlemodal';
import { ModalProps } from './types';
import { AiFillInfoCircle as InfoIcon } from 'react-icons/ai';
import { Body3, Header4 } from '../../../styles/typography';
import { Button } from './styles';
import { useTheme } from 'styled-components';
// import { useTranslation } from 'react-i18next';

export const ModalConfirm = ({
  isModalActive,
  handleCancel,
  handleClose,
  handleSubmit,
  title,
  message,
  loadingMessage,
  isLoading,
}: ModalProps) => {
  const modalRoot = document.getElementById('modal') as HTMLElement;
  const { colors: theme } = useTheme();
  // const { t } = useTranslation();

  if (!isModalActive) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <ContainerConfirm>
        {/* <button className="close-icon" onClick={handleCancel}>
          &#10006;
        </button> */}
        <WrapperModal>
          <InfoIcon />
          <WrapperContent>
            <div className="text-group">
              {title ? <Header4>{title}</Header4> : <Header4>{'Cancelar Cadastro?'}</Header4>}
              {message ? (
                <Body3>{message}</Body3>
              ) : (
                <Body3 fontColor="">
                  {'Você está cancelando cadastro de novo usuário. Deseja continuar?'}
                </Body3>
              )}
            </div>
            <Actions>
              <Button
                fontColor={theme.typography.mediumGray}
                hoverColor={theme.background.fairGray}
                onClick={handleCancel}
              >
                Não
              </Button>
              <Button
                fontColor={theme.secondary.main}
                hoverColor={theme.background.lightGray}
                onClick={() => (handleSubmit ? handleSubmit() : handleClose())}
              >
                {isLoading ? loadingMessage : 'Sim'}
              </Button>
            </Actions>
          </WrapperContent>
        </WrapperModal>
      </ContainerConfirm>
    </Overlay>,
    modalRoot,
  );
};
