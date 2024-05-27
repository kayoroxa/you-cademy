import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { getUserCourses, getUserData } from '../actions'

export default async function Home() {
  const session = await getServerSession()
  if (!session?.user?.email) {
    return <div>Erro no sistema, me chama no whatsapp!</div>
  }

  const user = await getUserData({ email: session?.user?.email })

  const courses = await getUserCourses({ email: session?.user?.email })

  return (
    <div className="p-6">
      <h1>Olá {user?.name}, 🥂</h1>
      <h1>Seus Cursos:</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link
              href={`/course/${course.id}`}
              className="w-56 h-56 shadow-lg bg-blue-200 rounded-md flex justify-center items-center hover:bg-blue-300 transition-all"
            >
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
