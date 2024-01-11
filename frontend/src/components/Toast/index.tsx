import { GlassContainer } from "./style";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { useContext, useEffect } from "react";
import toast, { Toaster, useToaster } from "react-hot-toast";
import { ToastContext } from "../../context/ToastContext";

export function Toast({ children }: { children: ReactNode }) {
  const { messages, removeToast } = useContext(ToastContext);
  const { toasts } = useToaster();
  const { colors: theme } = useTheme();

  useEffect(() => {
    messages?.forEach((e) => {
      if (e.status === "error") {
        toast.error(e.title, {
          id: e.id,
          duration: 3000,
        });
      } else if (e.status === "success") {
        toast.success(e.title, {
          id: e.id,
          duration: 3000,
        });
      }
    });
  }, [messages]);

  useEffect(() => {
    toasts.forEach((e) => {
      if (e.visible === false) {
        toast.remove(e.id);
        removeToast(e.id);
      }
    });
  }, [toasts, removeToast]);

  if (!messages.length) return <> {children}</>;

  return (
    <>
      <GlassContainer>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: theme.success.mediumLight,
                color: theme.typography.body,
                width: "90%",
                maxWidth: "440px",
                zIndex: 9999,
              },
            },
            error: {
              style: {
                background: theme.danger.mediumLight,
                color: theme.typography.body,
                width: "90%",
                maxWidth: "440px",
                zIndex: 9999,
              },
            },
          }}
          containerStyle={{
            top: 50,
          }}
          position="top-center"
          reverseOrder={false}
        />
      </GlassContainer>
      {children}
    </>
  );
}
