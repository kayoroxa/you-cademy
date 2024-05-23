'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function serverLogin({ email }: { email: string }) {
  console.log(email)
  if (!email) return false
  const data = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  console.log(data)
  const hasAuth = data
  if (!hasAuth) {
    cookies().delete('logged_in')
    return false
  }
  const oneDay = 24 * 60 * 60 * 1000

  cookies().set('logged_in', 'true')

  redirect('/')
}

export async function serverLogout() {
  cookies().set('logged_in', 'false')
  redirect('/login')
}

export async function getProfilePicture() {
  return 'https://github.com/shadcn.png'
}

export async function getBooks() {
  const data = await prisma.video.findMany({
    where: {
      user_id: 1,
    },
  })

  return data
}

export async function addNewBook(title: string) {
  // function handleSubmit(formData: FormData) {
  //   const title = formData.get('title') as string
  //   addNewBook(title)
  // }

  console.log('oi')

  await prisma.video.create({
    data: {
      title: title || 'oi',
      user_id: 1,
      youtubeId: 'test',
    },
  })

  revalidatePath('/')
}
