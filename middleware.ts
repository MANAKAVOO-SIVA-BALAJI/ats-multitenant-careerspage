import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host');
  const subdomain = hostname?.split('.')[0];

  // For local development, assume 'localhost' or '127.0.0.1'
  // And manually extract the tenant from a simulated subdomain for testing
  let tenantSlug = 'default';

  if (hostname?.includes('localhost') || hostname?.includes('127.0.0.1')) {
    if (subdomain && subdomain !== 'localhost' && subdomain !== '127') {
      tenantSlug = subdomain;
    } else {
      // Fallback for direct access to localhost without subdomain
      tenantSlug = 'default';
    }
  } else if (subdomain) {
    // For deployed environments, use the actual subdomain
    tenantSlug = subdomain;
  }

  const url = req.nextUrl.clone();
  url.pathname = `/_tenant/${tenantSlug}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logos (tenant logos)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logos).*)',
  ],
};

