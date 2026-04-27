"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider duration={4000}>
      {toasts.map(({ id, title, description, ...props }) => (
        <Toast
          key={id}
          {...props}
          onOpenChange={(open) => {
            props.onOpenChange?.(open);
            if (!open) dismiss(id);
          }}
        >
          <div className="flex flex-col gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
