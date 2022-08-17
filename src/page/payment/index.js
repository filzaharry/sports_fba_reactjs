import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'

export default function Payment() {
  return (
    <>
    <Header title={"Make Payment"} subtitle={"1 more step your field is ready to use"} />

         <div className='m-10 min-h-full '>

             <p className='text-xl font-bold text-gray-800 pb-4'>Nomor Rekening</p>

             <p className='text-md text-gray-800 pt-4'>Bank Mandiri</p>
             <div className='flex flex-row justify-between'>
                 <p className='font-bold text-md'>123123-123123-123123</p>
                 <p className='font-bold text-md text-blue-700'>Copy</p>
             </div>

             <p className='text-md text-gray-800 pt-4'>Owner ( Atas Nama Pemilik )</p>
             <div className='flex flex-row justify-between'>
                <p className='font-bold text-md'>Filza Harry Prayogo</p>
                <p className='font-bold text-md text-blue-700'>Show Qris</p>
             </div>



            <div className='mt-4 w-70 h-80 rounded-lg bg-gray-800 mb-4'>
                <p className='text-white text-center pt-40'>Upload Photo</p>
            </div>


            <div className='my-10'>
                <Link to="/list/detail/available/booking/payment/finish">
                <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
                text-white 
                underline underline-offset-4 decoration-gray-700
                text-lg decoration-4
                bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                Send Struct Photo
                </button></Link></div>
        </div>



    <BottomNav/>

</>
  )
}
