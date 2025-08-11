"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  useAuth();

  return <>{children}</>;
};
