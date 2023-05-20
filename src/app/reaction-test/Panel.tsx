'use client'

import { useState } from 'react';

export default function GamePanel() {

  let [count, SetCount] = useState(0)

  function handleClick() {
    SetCount(count => count + 1)
  }

  return(
    <div 
    className="w-full h-4/5 flex flex-col justify-start items-start p-4 mb-4 rounded-3xl bg-[var(--dark-algi)] text-white"
    onClick={handleClick}>
      <h1>Hello from panel</h1>
      <span>{count}</span>
    </div>
  )
}