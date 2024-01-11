import { ReactNode } from "react";

export interface IPageProviderProps {
  children: ReactNode;
}

export interface IPageContext {
  actualPage: string;
  setActualPage: React.Dispatch<React.SetStateAction<string>>;
  pathPage: string;
  setPathPage: React.Dispatch<React.SetStateAction<string>>;
  menuSection: string;
  setMenuSection: React.Dispatch<React.SetStateAction<string>>;
}
