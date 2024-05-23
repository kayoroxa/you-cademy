'use client'

import { serverLogout } from '@/app/actions'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function LoginAvatar() {
  return (
    <Avatar onClick={async () => serverLogout()} className="cursor-pointer">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
