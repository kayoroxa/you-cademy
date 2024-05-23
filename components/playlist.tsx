'use client'
import { Video } from '@prisma/client'
import { useState } from 'react'
import YouTube from 'react-youtube'

export default function Playlist({ lessons }: { lessons: Video[] }) {
  const [videoId, setVideoId] = useState(lessons[0].youtubeId)

  return (
    <div className="flex w-full gap-4">
      {/* <h1>Lesson</h1> */}
      <YouTube videoId={videoId} className={'bg-black w-fit'} />
      <ul className="w-1/2 flex flex-col gap-4">
        {lessons.map(lesson => (
          <li
            key={lesson.id}
            onClick={() => setVideoId(lesson.youtubeId)}
            className="cursor-pointer hover:text-blue-400 p-4 bg-blue-100 rounded-md w-full"
          >
            {lesson.title} | {lesson.youtubeId}
          </li>
        ))}
      </ul>
    </div>
  )
}
