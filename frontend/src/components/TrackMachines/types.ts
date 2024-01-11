export interface IMachineTrack {
  id: string | number;
  ip: string;
  name: string;
}

export interface TrackMachinesProps {
  machinesIp?: IMachineTrack[];
  navigateLink: string;
  handleClose?: () => void;
  buttonWidth?: string;
  modalTitle: string;
  modalMessage: string;
}
