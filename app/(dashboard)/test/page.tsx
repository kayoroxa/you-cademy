'use client'
import { useState } from 'react'

const classMy = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`

export default function Home() {
  const [nomeDaDiv, setNomeDaDiv] = useState('olá')

  function handleClick() {
    setNomeDaDiv('oi')
  }

  return (
    <div>
      <p>{nomeDaDiv}</p>
      <button className={classMy} onClick={handleClick}>
        Click
      </button>
    </div>
  )
}
