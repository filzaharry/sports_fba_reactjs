import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'
import AllCategory from './category'

export default function Categories() {
  return (
    <>
    <Header title={"Category"}/>
         <div className='m-10 min-h-full'>
          <div className="grid grid-cols-3 gap-2 mb-10">
            <Link to={"/list"}>
              <AllCategory children={"Futsal"}/>
            </Link>
            
            <Link to={"/list"}>
              <AllCategory children={"Badminton"}/>
            </Link>
            <Link to={"/list"}>
              <AllCategory children={"Volley"}/>
            </Link>
            <Link to={"/list"}>
              <AllCategory children={"Basket"}/>
            </Link>
          </div>

          <Link to="/home">
          <button
          type="submit"
          className="mt-10 group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
          text-white 
          underline underline-offset-4 decoration-gray-700
          text-lg decoration-4
          bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
          Back To Home
          </button></Link>
        </div>




    <BottomNav/>

</>
  )
}
