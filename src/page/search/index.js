import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'
import ListViewSearch from './listview'

export default function SearchField() {
  return (
    <>
    <Header title={"Nearest Field"} subtitle={"The Field closest to you"}/>
        <div className='m-10 min-h-full'>
            <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-4 mb-10 border bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Search Field ..."
                />
            


            <Link to={"/list/detail"}>
            <ListViewSearch children={"Diaz Futsal"}/>
            </Link>
            <ListViewSearch children={"Diaz Badminton"}/>
            <ListViewSearch children={"Diaz Basket"}/>
            <ListViewSearch children={"Diaz Volley"}/>
        </div>


    <BottomNav/>

</>
  )
}
