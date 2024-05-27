import { NextRequest, NextResponse } from 'next/server'

async function checkAuth() {
  try {
    const response = await fetch('http://localhost:3000/api/auth') // Altere para a URL correta da sua API
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      return data
    } else {
      console.error('Erro ao buscar dados do usuário')
    }
  } catch (error) {
    console.error(error)
  }
}

async function main(request: NextRequest) {
  // const user = await getUserData({ userId: 1, email: 'x' })
  const userId = request.cookies.get('logged_user_id')?.value
  // const { auth } = await checkAuth()
  // console.log({ auth })

  const publicRoutes = ['/login', '/signup', '/public']

  let isLoggedIn = request.cookies.get('logged_user_id')?.value === '1'

  const isPublicRoute = publicRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoggedIn && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export default function middleware(request: NextRequest) {
  main(request)
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
