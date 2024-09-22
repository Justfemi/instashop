// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getAuth } from 'firebase/auth';
// import app from './firebase';

// export async function middleware(req: NextRequest) {
//   const auth = getAuth(app);
//   const user = auth.currentUser;
  // if (!user) {
  //   const protectedRoutes = ['/products', '/products/'];

  //   if (protectedRoutes.includes(req.nextUrl.pathname) || /^\/products\/[^/]+$/.test(req.nextUrl.pathname)) {
  //     return NextResponse.redirect(new URL('/get-started', req.url));
  //   }
  // } else {
  //   if (req.nextUrl.pathname === '/get-started') {
  //     return NextResponse.redirect(new URL('/products', req.url));
  //   }
  // }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/products/:path*', '/get-started'],
// };

