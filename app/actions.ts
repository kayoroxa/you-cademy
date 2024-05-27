'use server'

import { _prisma, prisma } from '@/lib/prisma'
import { User, Video } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getUserData({
  userId,
  email,
}: {
  userId?: User['id']
  email?: User['email']
}) {
  if (!userId && !email) {
    redirect('/login')
    return null
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        email,
      },
    })

    return user
  } catch (error) {
    redirect('/login')
    console.error(error)
    return null
  }
}

export async function updateVideo(data: Video) {
  console.log({ data })
  await _prisma.video.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      youtubeId: data.youtubeId,
    },
  })

  revalidatePath('/')
  revalidatePath('/course/[courseId]/edit')
}

export async function serverLogin({ email }: { email: string }) {
  console.log(email)
  if (!email) return false
  const user = await getUserData({ email })

  const hasAuth = user
  if (!hasAuth) {
    cookies().delete('logged_user_id')
    return false
  }

  cookies().set('logged_user_id', String(user.id))

  redirect('/')
}

export async function serverLogout() {
  cookies().delete('logged_user_id')
  redirect('/login')
}

export async function getProfilePicture() {
  return 'https://github.com/shadcn.png'
}

export async function getUserCourses({
  userId,
  email,
}: {
  userId?: User['id']
  email?: User['email']
}) {
  if (!userId && !email) return []
  const userWithCourses = await prisma.user.findUnique({
    where: { id: userId, email: email },
    include: {
      Courses: true,
    },
  })

  return userWithCourses?.Courses || []
}

export async function getLessons({ courseId }: { courseId: User['id'] }) {
  const lessons = await prisma.video.findMany({
    where: {
      courseId,
    },
    // orderBy: {
    //   createdAt: 'desc',
    // },
  })

  return lessons
}

export async function addNewBook(title: string) {
  // function handleSubmit(formData: FormData) {
  //   const title = formData.get('title') as string
  //   addNewBook(title)
  // }

  console.log('oi')

  // await prisma.video.create({
  //   data: {
  //     title: title || 'oi',
  //     user_id: 1,
  //     youtubeId: 'test',
  //   },
  // })

  revalidatePath('/')
}
