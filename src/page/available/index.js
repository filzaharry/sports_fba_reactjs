import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import DateAvailable from './date'
import TimeButton from './time'

export default function Available() {
  return (
    <>
    
    <div className="m-10 min-h-full ">
      <div className='w-60 mb-10'>
      <p className='text-2xl font-bold'>Nagoya Field Futsal</p>
          <p className='text-sm font-light'>Updated at February 18, 2022</p>
      </div>
    </div>

    <div className='bg-gray-500'>

        <div className='m-10 flex flex-row py-2'>
        {/* <DateAvailable/> */}
        <div className='w-10 h-10 text-white text-center mr-4'>
            <p className='text-sm font-bold'>1</p>
            <p className='text-xs font-light'>Mon</p>
        </div>
        <div className='w-10 h-10 text-white text-center mr-4'>
            <p className='text-sm font-bold'>1</p>
            <p className='text-xs font-light'>Mon</p>
        </div>
        <div className='z-40 w-10 h-10 bg-red-500 text-white text-center mr-4 rounded-lg'>
            <p className='text-sm font-bold'>1</p>
            <p className='text-xs font-light'>Mon</p>
        </div>
        <div className='w-10 h-10 text-white text-center mr-4'>
            <p className='text-sm font-bold'>1</p>
            <p className='text-xs font-light'>Mon</p>
        </div>
        <div className='w-10 h-10 text-white text-center mr-4'>
            <p className='text-sm font-bold'>1</p>
            <p className='text-xs font-light'>Mon</p>
        </div>
        <div className='w-10 h-10 text-white text-center mr-4'>
            <p className='text-sm font-bold'>1</p>
            <p className='text-xs font-light'>Mon</p>
        </div>
        </div>

    </div>

    <div className="m-10 min-h-full ">
    
      <p className='text-2xl font-bold mb-4'>Field 1</p>
      <div className="grid grid-cols-3 mb-10">
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
      </div>


      <p className='text-2xl font-bold mb-4'>Field 2</p>
      <div className="grid grid-cols-3 mb-10">
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
        <TimeButton/>
      </div>




        


      <Link to="/list/detail/available/booking">
      <button
      type="submit"
      className="mt-10 group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
      text-white 
      underline underline-offset-4 decoration-gray-700
      text-lg decoration-4
      bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
      Booking Now
      </button></Link>
    </div>



<BottomNav/>

</>
  )
}
