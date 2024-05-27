'use client'

import { signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function LoginAvatar() {
  return (
    // <Avatar onClick={async () => serverLogout()} className="cursor-pointer">
    <Avatar onClick={async () => signOut()} className="cursor-pointer">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
