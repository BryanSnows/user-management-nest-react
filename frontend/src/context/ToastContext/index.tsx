import { createContext, useState } from "react";
import {
  IToast,
  IToastContext,
  IToastProviderProps,
  IToastRegister,
} from "./types";
import { v4 as uuid } from "uuid";

export const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider = ({ children }: IToastProviderProps) => {
  const [messages, setMessages] = useState<IToast[]>([]);

  const addToast = ({ title, status }: IToastRegister): void => {
    const toast = {
      title: title,
      status: status,
      id: uuid(),
    };

    setMessages([...messages, toast]);
  };

  const removeToast = (id: string): void => {
    const newMessages = messages.filter((message) => message.id !== id);

    setMessages(newMessages);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
