import { getLessons } from '@/app/actions'
import Playlist from '@/components/playlist'

export default async function Course({
  params,
}: {
  params: { courseId: string }
}) {
  const lessons = await getLessons({ courseId: Number(params.courseId) })
  return (
    <div>
      <h1>Course: {params.courseId}</h1>
      <main className="p-6">
        <Playlist lessons={lessons} />
      </main>
    </div>
  )
}
