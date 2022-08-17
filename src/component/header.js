import React from 'react'

export default function Header({title, subtitle}) {
  return (
    <div className="pt-2 pb-1 bg-red-500 rounded-b-3xl inset-x-0 bottom-0">
      <div className='m-10 min-h-full text-white'>

          <p className='text-2xl font-bold'>{title}</p>
          <p className='text-sm font-light'>{subtitle}</p>
      </div>
    </div>
  )
}
