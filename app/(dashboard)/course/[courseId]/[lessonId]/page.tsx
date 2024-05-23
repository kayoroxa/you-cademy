'use client'
import YouTube from 'react-youtube'

export default function Lesson({
  params,
}: {
  params: { courseId: string; lessonId: string }
}) {
  return (
    <div>
      <h1>
        Lesson: {params.courseId} | {params.lessonId}
      </h1>

      <YouTube videoId={params.lessonId} className={'bg-black w-fit'} />
    </div>
  )
}
