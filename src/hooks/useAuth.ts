"use client";

import { useEffect } from 'react';
import { useAuthStore } from '@/stores/auth-store';
import { createClient } from '@/utils/supabase/client';
import { signout } from '@/lib/auth-actions';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export const useAuth = () => {
  const {
    user,
    isLoading,
    isInitialized,
    setUser,
    setLoading,
    setInitialized,
    logout: logoutStore
  } = useAuthStore();

  const t = useTranslations();
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    // Obtener usuario inicial
    const getInitialSession = async () => {
      setLoading(true);
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          // Si es un error de sesión faltante, es normal - no hay usuario logueado
          if (error.message.includes('Auth session missing') || error.message.includes('session_not_found')) {
            console.log('No hay sesión activa, usuario no autenticado');
          } else {
            console.error('Error getting user:', error);
          }
          setUser(null);
        } else {
          setUser(user);
        }
      } catch (error: any) {
        // Manejar errores de sesión como casos normales
        if (error?.message?.includes('Auth session missing') || error?.message?.includes('session_not_found')) {
          console.log('No hay sesión activa, usuario no autenticado');
        } else {
          console.error('Error in getInitialSession:', error);
        }
        setUser(null);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id);
        
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
        
        setLoading(false);
        
        if (!isInitialized) {
          setInitialized(true);
        }
      }
    );

    // Solo obtener sesión inicial si no está inicializado
    if (!isInitialized) {
      getInitialSession();
    }

    return () => {
      subscription.unsubscribe();
    };
  }, [isInitialized, setUser, setLoading, setInitialized]);

  const logout = async () => {
    setLoading(true);
    try {
      const result = await signout();

      if (result?.error) {
        toast.error(t("Auth.logout.error"), {
          position: "bottom-right",
          style: {
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
          },
        });
      } else if (result?.success) {
        toast.success(t("Auth.logout.success"), {
          position: "bottom-right",
          style: {
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
          },
        });
        logoutStore();
        router.push("/");
      }
    } catch (error) {
      console.error('Error during logout:', error);
      toast.error(t("Auth.logout.error"), {
        position: "bottom-right",
        style: {
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isLoading,
    isInitialized,
    isAuthenticated: !!user,
    logout,
  };
}; 