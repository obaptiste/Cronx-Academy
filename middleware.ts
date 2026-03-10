import { auth } from '@/auth';

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith('/modules')) {
    return Response.redirect(new URL('/auth', req.url));
  }
});

export const config = {
  matcher: ['/modules/:path*'],
};
