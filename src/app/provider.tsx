"use client";
import { toast, Toaster } from "sonner";
import React, { ComponentProps, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        let message = error.message;
        if (error instanceof AxiosError) {
          if (error.config?.toastOnError === false) return;
          message = error.response?.data?.message || error.message;
        }
        toast.error(message, {
          style: {
            background: "#e74c3c",
          },
        });
      },
    },
  },
});

type ToastOptions = NonNullable<ComponentProps<typeof Toaster>["toastOptions"]>;
const toastOptions: ToastOptions = {
  //   unstyled: true,
  //   style: {
  //     background: "#009874",
  //     color: "#fff",
  //     padding: "0 16px 18px 16px",
  //     textAlign: "center",
  //     fontWeight: "normal",
  //     borderRadius: 30,
  //   },
};

const icons = {
  error: <></>,
  info: <></>,
  loading: <></>,
  success: <></>,
  warning: <></>,
};

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        icons={icons}
        toastOptions={toastOptions}
        position="top-center"
        expand
      />
    </QueryClientProvider>
  );
};

export default AppProvider;
