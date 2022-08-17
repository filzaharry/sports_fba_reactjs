import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'
import TimeBooking from './time'

export default function Booking() {
  return (
    <>
    <Header title={"Booking Field"} subtitle={"Request Payment"} />

    
        <div className='m-10 min-h-full'>
            <div className='flex flex-row justify-between'>
                <p>Expired At</p>
                <p className='font-bold text-5xl'>00.30.00</p>
            </div>
        </div>

        <div className='m-5 min-h-full shadow-lg rounded-md p-4'>
            <p className='font-bold text-xl mb-4'>Nagoya Field Futsal</p>
            <hr/>


            <div className='my-2'>
                <p>Field 1</p>
                <div className='mt-2 flex flex-row justify-between'>
                    <TimeBooking/>
                    <p className='font-bold'>RP. 200,000,-</p>
                </div>
            </div>
            <div className='my-2'>
            <p>Field 2</p>
                <div className='mt-2 flex flex-row justify-between'>
                    <TimeBooking/>
                    <p className='font-bold'>RP. 200,000,-</p>
                </div>
                <div className='mt-2 flex flex-row justify-between'>
                    <TimeBooking/>
                    <p className='font-bold'>RP. 200,000,-</p>
                </div>
                <div className='mt-2 flex flex-row justify-between'>
                    <TimeBooking/>
                    <p className='font-bold'>RP. 200,000,-</p>
                </div>
            </div>


            <div className='my-2 flex flex-row justify-between'>
                <p>Tax 20%</p>
                <p className='font-bold'>RP. 20,000,-</p>
            </div>
            <hr/>
            <div className='my-2 flex flex-row justify-between'>
                <p className='font-bold'>TOTAL</p>
                <p className='font-bold'>RP. 820,000,-</p>
            </div>
        </div>
         <div className='m-10 min-h-full '>
            <div className='my-10'>
                <Link to="/list/detail/available/booking/payment">
                <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
                text-white 
                underline underline-offset-4 decoration-gray-700
                text-lg decoration-4
                bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                Make Payment Now
                </button></Link></div>
        </div>



    <BottomNav/>

</>

  )
}
