"use client";
import React from "react";
import { useRouter } from "@/i18n/navigation";
import { IconLogin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/hooks/useAuth";

interface LoginLogoutButtonProps {
  variant?: "desktop" | "mobile" | "tablet";
  onItemClick?: () => void;
}

const LoginLogoutButton = ({
  variant = "desktop",
  onItemClick,
}: LoginLogoutButtonProps) => {
  const router = useRouter();
  const t = useTranslations();
  const { user, isLoading, isInitialized, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    onItemClick?.();
  };

  const handleLogin = () => {
    router.push("/login");
    onItemClick?.();
  };

  // Mostrar loading mientras se inicializa
  if (!isInitialized || isLoading) {
    const loadingStyles = {
      desktop:
        "flex items-center space-x-2 bg-gray-200 text-gray-400 px-4 py-2 rounded-lg font-medium opacity-50 cursor-not-allowed text-sm",
      mobile:
        "flex items-center justify-center space-x-3 text-gray-400 bg-gray-100 py-4 px-6 rounded-xl font-medium text-sm opacity-50 cursor-not-allowed",
      tablet:
        "flex items-center justify-center space-x-3 text-gray-400 bg-gray-100 py-3 px-4 rounded-lg font-medium w-full opacity-50 cursor-not-allowed text-sm",
    };

    return (
      <div className={loadingStyles[variant]}>
        <IconLogin size={variant === "mobile" ? 20 : 18} />
        <span>...</span>
      </div>
    );
  }

  if (user) {
    // Estilos para logout según variant
    const logoutStyles = {
      desktop:
        "flex items-center space-x-2 bg-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm",
      mobile:
        "flex items-center justify-center space-x-3 text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 py-4 px-6 rounded-xl font-medium w-full text-sm",
      tablet:
        "flex items-center justify-center space-x-3 text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 py-3 px-4 rounded-lg font-medium w-full text-sm",
    };

    return (
      <button className={logoutStyles[variant]} onClick={handleLogout}>
        <IconLogin size={variant === "mobile" ? 20 : 18} />
        <span>{t("Navigation.logout")}</span>
      </button>
    );
  }

  // Estilos para login según variant
  const loginStyles = {
    desktop:
      "flex items-center space-x-2 bg-dark text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm",
    mobile:
      "flex items-center justify-center space-x-3 text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 py-4 px-6 rounded-xl font-medium text-sm w-full",
    tablet:
      "flex items-center justify-center space-x-3 text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 py-3 px-4 rounded-lg font-medium w-full",
  };

  return (
    <button className={loginStyles[variant]} onClick={handleLogin}>
      <IconLogin size={variant === "mobile" ? 20 : 18} />
      <span className="text-sm">{t("Navigation.login")}</span>
    </button>
  );
};

export default LoginLogoutButton;
