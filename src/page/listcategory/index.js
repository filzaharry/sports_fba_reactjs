import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'
import ListView from './listview'

export default function ListCategories() {
  return (
    <>
    <Header title={"Futsal Fields"} subtitle={"The Futsal field closest to you"}/>
        <div className='m-10 min-h-full'>
            <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-4 border bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Search Field ..."
                />
            
            <div className='flex flex-row pb-8'>

            <div className="bg-gray-800 rounded-md  p-1 mt-4 mr-2 w-24 text-right shadow-lg">
            <p className=' text-sm  text-center font-light text-white'>Filter</p>
            </div>
            <div className="bg-gray-800 rounded-md  p-1 mt-4 mr-2 w-24 text-right shadow-lg">
            <p className=' text-sm  text-center font-light text-white'>Sort</p>
            </div>
            </div>

            <Link to={"/list/detail"}>
            <ListView children={"Diaz Futsal"}/>
            </Link>
            <ListView children={"Diaz Futsal"}/>
            <ListView children={"Diaz Futsal"}/>
            <ListView children={"Diaz Futsal"}/>
            <ListView children={"Diaz Futsal"}/>
            <ListView children={"Diaz Futsal"}/>
        </div>


    <BottomNav/>

</>
  )
}
