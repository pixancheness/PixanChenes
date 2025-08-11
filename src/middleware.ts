import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

// Crear el middleware de next-intl
const intlMiddleware = createMiddleware(routing);

// Middleware principal que combina ambas funcionalidades
export async function middleware(request: NextRequest) {
  // Primero actualizar la sesión de Supabase
  const supabaseResponse = await updateSession(request);
  
  // Si Supabase devolvió una redirección, usarla
  if (supabaseResponse.status === 307 || supabaseResponse.status === 302) {
    return supabaseResponse;
  }
  
  // Luego aplicar el middleware de internacionalización
  const intlResponse = intlMiddleware(request);
  
  // Combinar las cookies de Supabase con la respuesta de internacionalización
  if (intlResponse) {
    supabaseResponse.cookies.getAll().forEach(cookie => {
      intlResponse.cookies.set(cookie.name, cookie.value, cookie);
    });
    return intlResponse;
  }
  
  return supabaseResponse;
}

export const config = {
  // Combinar ambos matchers para cubrir todas las rutas necesarias
  matcher: [
    // Matcher para next-intl (excluye api, trpc, _next, _vercel y archivos con extensión)
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    // Matcher para Supabase (excluye archivos estáticos e imágenes)
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};