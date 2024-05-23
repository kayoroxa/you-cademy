import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  // Define public routes
  const publicRoutes = ['/login', '/signup', '/public']

  let isLoggedIn = request.cookies.get('logged_in')?.value === 'true'

  // Check if the current route is public
  const isPublicRoute = publicRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  // If user is not logged in and tries to access a protected route, redirect to login page
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If user is logged in and tries to access the login page, redirect to home page
  if (isLoggedIn && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Continue to the requested page if conditions are met
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
