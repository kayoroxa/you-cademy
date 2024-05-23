import Link from 'next/link'
import { getUserCourses } from '../actions'

export default async function Home() {
  const courses = await getUserCourses({ userId: 1 })
  console.log(courses)
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link href={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
