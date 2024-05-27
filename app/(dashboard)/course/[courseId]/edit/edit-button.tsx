import { updateVideo } from '@/app/actions'
import CourseForm from '@/components/forms/course'
import useAlertDialogStore from '@/store/alert-dialog-store'
import { Row } from '@tanstack/react-table'
import { Payment } from './columns'

export default function EditButton({ row }: { row: Row<Payment> }) {
  const setData = useAlertDialogStore(state => state.setData)

  function handleClick() {
    setData(
      <p>
        <CourseForm row={row} />
      </p>,
      (data: any) => {
        updateVideo(data)
      }
    )
  }

  return (
    <button
      className="hover:bg-zinc-400 px-1 m-auto left-0 right-0 text-center"
      onClick={handleClick}
    >
      Edit
    </button>
  )
}
