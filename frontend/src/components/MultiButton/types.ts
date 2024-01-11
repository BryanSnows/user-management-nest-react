import { InterpreterModeSharp } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

export interface IMultiButtonsProps {
  onSelectButton: (sectionTransaction: string, id: number) => void;
  selectedTransactionIds: {
    [key: string]: number;
  };
  sections: ISections[];
}

export interface IDataSection {
  id: number;
  name: string;
  icon: JSX.Element;
}

export interface ISections {
  id: string;
  title: string;
  data: IDataSection[];
}

export interface IButton {
  active?: boolean;
  onClick?: () => void;
}
