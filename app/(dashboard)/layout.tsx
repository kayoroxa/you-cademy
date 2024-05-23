import { LoginAvatar } from '@/components/login-avatar'
import Link from 'next/link'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-full">
      <nav className="flex gap-4 bg-blue-800 text-white items-center py-3 px-6">
        <Link href="/">Home</Link>
        <Link href="/test">Test</Link>
        <div className="ml-auto">
          <LoginAvatar />
        </div>
      </nav>
      {children}
    </div>
  )
}
