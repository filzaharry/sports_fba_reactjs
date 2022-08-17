import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'

export default function FieldDetail() {
  return (
    <>
    
    <div className="m-10 min-h-full ">
      <div className='w-60'>
      <p className='text-2xl font-bold'>Nagoya Field Futsal</p>
          <p className='text-sm font-light'>Updated at February 18, 2022</p>
      </div>

      <div className="bg-gray-800 rounded-md mb-4 p-1 mt-4 mr-2 w-36 text-right shadow-lg">
      <p className=' text-sm  text-center text-white'>09.00 - 23.00</p>
      </div>


      <div className='w-96 h-96 rounded-lg bg-gray-800 mb-4'></div>

      <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>


      <Link to="/list/detail/available">
      <button
      type="submit"
      className="mt-10 group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
      text-white 
      underline underline-offset-4 decoration-gray-700
      text-lg decoration-4
      bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
      Open Available Field
      </button></Link>
    </div>



<BottomNav/>

</>
  )
}
