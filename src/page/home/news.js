import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
  return (
    <div className='flex flex-row mt-2'>
    <div className='w-20 h-20 bg-gray-700 rounded-lg'></div>
    <div className='ml-4'>
      <p className='font-bold text-lg'>GOR KS Tubun Tutup</p>
      <p className='font-light text-xs text-gray-400'>Just Now</p>
      
      <p className='mt-2 text-sm text-gray-600'>Lorem Ipsum Dolor  ... 
      <Link to={""}><span className='text-red-700'>Read More</span></Link>
      </p>
    </div>
  </div>
  )
}
