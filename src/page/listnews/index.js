import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../../component/bottomnav'
import Header from '../../component/header'
import AllNews from './news'

export default function ListNews() {
  return (
    <>
    <Header title={"News about Fields"}/>
        <div className='m-10 min-h-full'>
            
            <Link to={"/news/detail"}>
                <AllNews/>
            </Link>
            <Link to={"/news/detail"}>
                <AllNews/>
            </Link>
            <Link to={"/news/detail"}>
                <AllNews/>
            </Link>

        </div>


    <BottomNav/>

</>
  )
}
