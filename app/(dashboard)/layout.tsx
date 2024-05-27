import { AlertDialogDemo } from '@/components/alert-dialog'
import ButtonEditPage from '@/components/button-edit-page'
import { LoginAvatar } from '@/components/login-avatar'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getUserData } from '../actions'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  if (!session || !session?.user?.email) {
    redirect('/login')
  }

  const user = await getUserData({ email: session?.user?.email })

  console.log({ user, email: session?.user?.email })
  if (user?.blocked || !user) {
    signOut({ callbackUrl: '/login', redirect: true })
    redirect('/login')
  }

  // const publicRoutes = ['/login', '/signup', '/public']

  // let cookieUserId = cookies().get('logged_user_id')?.value

  // if (!cookieUserId) {
  //   return redirect('/login')
  // }

  // const user = await getUserData({ userId: Number(cookieUserId) })

  // if (!user) {
  //   return redirect('/login')
  // }

  // query pesquisa

  return (
    <div className="h-full">
      <nav className="flex gap-4 bg-blue-800 text-white items-center py-3 px-6">
        <Link href="/">Home</Link>
        <Link href="/test">Test</Link>
        <AlertDialogDemo />
        <ButtonEditPage />
        <div className="ml-auto">
          <LoginAvatar />
        </div>
      </nav>
      {children}
    </div>
  )
}
