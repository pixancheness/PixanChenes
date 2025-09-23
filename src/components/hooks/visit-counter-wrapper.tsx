"use client";

import { useVisitCounter } from "@/components/hooks/use-visit-counter";

interface VisitCounterWrapperProps {
  children?: React.ReactNode;
}

export function VisitCounterWrapper({ children }: VisitCounterWrapperProps) {
  // Este componente solo inicializa el hook para que funcione el conteo
  // No renderiza nada visible, solo maneja la lógica de conteo en el background
  useVisitCounter();

  return <>{children}</>;
}
