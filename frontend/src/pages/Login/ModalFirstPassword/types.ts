export type ModalProps = {
  isModalActive?: boolean;
  closeModal: () => void;
  firstPassword?: string;
  keyId?: any;
};

export interface ITextColor {
  characters: string;
  minLetter: string;
  minNumber: string;
  minCharactersSpecial: string;
}
