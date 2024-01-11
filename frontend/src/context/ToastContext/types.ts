import { ReactNode } from 'react';

export interface IToastProviderProps {
  children: ReactNode;
}

export interface IToast {
  title: string;
  status: 'error' | 'success';
  id: string;
}

export type IToastRegister = Omit<IToast, 'id'>;

export interface IToastContext {
  addToast: (data: IToastRegister) => void;
  removeToast: (id: string) => void;
  messages: IToast[];
}
