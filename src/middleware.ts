import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { type NextRequest } from 'next/server'

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {

  const intlResponse = intlMiddleware(request);

  
  return intlResponse;
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