"use client";
import React from "react";
import { useUser } from "@/hooks/useUser";

const UserGreetText = () => {
  const { user, isLoading, isInitialized } = useUser();

  // Mostrar loading mientras se inicializa
  if (!isInitialized || isLoading) {
    return (
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Cargando...
      </p>
    );
  }
  if (user) {
    return (
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Hola&nbsp;
        <code className="font-mono font-bold">
          {user.user_metadata?.full_name ?? "usuario"}!
        </code>
      </p>
    );
  }
  return (
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Get started editing&nbsp;
      <code className="font-mono font-bold">app/page.tsx</code>
    </p>
  );
};

export default UserGreetText;
