import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { getSupabasePublicEnv } from '@/lib/supabase/env';

export async function proxy(request: NextRequest) {
  const { url, publishableKey } = getSupabasePublicEnv();
  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        Object.entries(headers).forEach(([name, value]) => response.headers.set(name, value));
      },
    },
  });

  // Run early so refreshed cookies are forwarded before the protected layout renders.
  await supabase.auth.getClaims();
  return response;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/pos/:path*',
    '/transactions/:path*',
    '/products/:path*',
    '/inventory/:path*',
    '/purchases/:path*',
    '/reports/:path*',
    '/settings/:path*',
  ],
};
