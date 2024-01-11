import { Dispatch, SetStateAction } from 'react';

export interface DragAndDropProps {
  setFile: Dispatch<SetStateAction<File | string>>;
  hideLabel?: boolean;
  path?: string;
  setPath?: Dispatch<SetStateAction<string>>;
  acceptedFileSize: boolean;
  setAcceptedFileSize: Dispatch<SetStateAction<boolean>>;
  acceptedFileType: boolean;
  setAcceptedFileType: Dispatch<SetStateAction<boolean>>;
  defaultFileSize: number;
  mandatoryField: boolean;
  fileType: string;
}
