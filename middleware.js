// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host') || '';
  const subdomain = extractSubdomain(hostname);
  
  const response = NextResponse.next();
  response.headers.set('x-tenant-subdomain', subdomain || '');
  
  return response;
}

function extractSubdomain(hostname) {
  const host = hostname.split(':')[0];
  
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return 'demo';
  }
  
  const parts = host.split('.');
  return parts.length >= 3 ? parts[0] : null;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};