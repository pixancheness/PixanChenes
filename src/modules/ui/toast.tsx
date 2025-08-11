"use client";

import { toast as sonnerToast } from "sonner";

export const toast = {
  success: (message: string) =>
    sonnerToast.success(message, {
      style: {
        background: "#10b981",
        color: "white",
        border: "1px solid #059669",
      },
      icon: "✅",
    }),
  error: (message: string) =>
    sonnerToast.error(message, {
      style: {
        background: "#ef4444",
        color: "white",
        border: "1px solid #dc2626",
      },
      icon: "❌",
    }),
  info: (message: string) =>
    sonnerToast.info(message, {
      style: {
        background: "#3b82f6",
        color: "white",
        border: "1px solid #2563eb",
      },
      icon: "ℹ️",
    }),
  warning: (message: string) =>
    sonnerToast.warning(message, {
      style: {
        background: "#f59e0b",
        color: "white",
        border: "1px solid #d97706",
      },
      icon: "⚠️",
    }),
};
