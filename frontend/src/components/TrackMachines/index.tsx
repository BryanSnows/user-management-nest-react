import { useEffect, useState } from 'react';
import { ActionsButton, Container, InformationWrapper } from '../../styles/global';
import {
  ContentWrapper,
  MachineFrame,
  MachineItem,
  MachineList,
  WrapperTextRowCenter,
} from './styles';
import ExternalInterface from '../ExternalInterface';
import { ButtonMain } from '../Button/ButtonMain';
import { useNavigate } from 'react-router-dom';
import { StepIndex } from '../StepIndex';
import { InputLabel } from '@mui/material';
import { LabelTheme } from '../Input/StyledGlobal/styles';
import { TrackMachinesProps } from './types';
import { ModalConfirm } from '../Modal/ModalConfirm';

export function TrackMachines({
  machinesIp,
  navigateLink,
  handleClose,
  buttonWidth,
  modalMessage,
  modalTitle,
}: TrackMachinesProps) {
  const navigate = useNavigate();

  const [machineIpSelected, setMachineIpSelected] = useState<string>('');
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);

  useEffect(() => {
    if (machinesIp?.length) {
      setMachineIpSelected(machinesIp[0].ip);
    }
  }, []);

  return (
    <Container>
      <ModalConfirm
        isModalActive={isModalConfirmOpen}
        handleCancel={() => setIsModalConfirmOpen(!isModalConfirmOpen)}
        handleClose={() => setIsModalConfirmOpen(!isModalConfirmOpen)}
        handleSubmit={() => (handleClose ? handleClose() : navigate(navigateLink))}
        title={modalTitle}
        message={modalMessage}
      />
      <ContentWrapper>
        <InputLabel sx={LabelTheme()}>Máquinas</InputLabel>
        <WrapperTextRowCenter>
          <MachineList>
            <div>
              {machinesIp?.length ? (
                machinesIp?.map((item) => (
                  <MachineItem
                    onClick={() => setMachineIpSelected(item.ip)}
                    key={item.id}
                    selected={machineIpSelected === item.ip}
                  >
                    {item.name}
                  </MachineItem>
                ))
              ) : (
                <MachineItem>Sem máquinas cadastradas</MachineItem>
              )}
            </div>
          </MachineList>
          <MachineFrame>
            <ExternalInterface ip={machineIpSelected} />
          </MachineFrame>
        </WrapperTextRowCenter>
      </ContentWrapper>

      <InformationWrapper>
        <StepIndex step={2} />
      </InformationWrapper>
      <ActionsButton>
        <ButtonMain
          width={'35%'}
          label={'Finalizar'}
          type="button"
          onClick={() => {
            setIsModalConfirmOpen(true);
          }}
        />
      </ActionsButton>
    </Container>
  );
}
