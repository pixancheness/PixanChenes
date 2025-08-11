import { useAuthStore } from '@/stores/auth-store';

/**
 * Hook simple para acceder a la información del usuario
 * sin incluir funciones de autenticación
 */
export const useUser = () => {
  const { user, isLoading, isInitialized } = useAuthStore();
  
  return {
    user,
    isLoading,
    isInitialized,
    isAuthenticated: !!user,
  };
}; 