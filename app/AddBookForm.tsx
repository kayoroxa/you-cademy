'use client'

import { addNewBook } from './actions'

export default function AddBookForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const title = e.currentTarget.title.value as string
    await addNewBook(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  )
}
