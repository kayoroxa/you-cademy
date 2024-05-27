import { DataTable } from '@/components/data-table'
import { _prisma } from '@/lib/prisma'
import { Course } from '@prisma/client'
import { Payment, columns } from './columns'

async function getData(courseId: Course['id']): Promise<Payment[]> {
  // Fetch data from your API here.

  const data = _prisma.video.findMany({
    where: {
      courseId: Number(courseId),
    },
  })

  return data
}

export default async function EditCourse({
  params,
}: {
  params: { courseId: string }
}) {
  if (!params.courseId) return <div>Not found</div>
  const data = await getData(Number(params.courseId))

  return (
    <div>
      <div>Edit Course</div>
      {JSON.stringify(data)}
      <main className="p-20">
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  )
}
