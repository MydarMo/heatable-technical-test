import { ReactNode } from "react";

export interface ToastProps {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    title: string;
    description?: string | ReactNode;
    action?: ReactNode;
  }
  