import React from 'react'
import { Link } from 'react-router-dom'
import Category from './category'
import BottomNav from '../../component/bottomnav'
import News from './news'

export default function Home() {
  return (
    <>
    
        <div className="m-10 min-h-full flex flex-row space-x-4 justify-between">
          <div className='w-60'>
              <p className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">Hi, Filza </p>
          </div>
          <div className='flex flex-row space-x-4'>
            <div>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABKElEQVRYhe3XsUrDUBTG8V8Vqoijm0+g0EUQpB1dFF/JwaXoIKhQwUcQ38HZN3DXKrroJCpIW4fcYFBJTbg2FPLBJeFyz/n+OYd7k1BrirWDO/SxXQVAH6Mwbidp3MIJhhmAIY6w8p/Gc+hhkDH+Pj5wgNnY5vO4DCZvOMQamljABs4CwAgXmIkJcBoS32A1Z10HT2HtbizzlqTHr+F+nDYlbXrHcgyAnuSJjgvEnIeYvRgA1yHZeoGYrRBzFQPgJSRbLBCzFGKeYwCkW6yIGr7Oh1xF3SoZpcCNqgD+rBqgBqgBxgF0wvWxRO40pp23KO+gKHr6jdOvXpW3oKweJBVqS9o0CnOFVbYC6UsmW9ZByVyltO/nB2l3kgDNAHEv+Tnphrla06dPElVIaZgsk7wAAAAASUVORK5CYII=" />
            </a>
            </div>
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAOElEQVRIie3TsQkAMAwDwSf7b+XBnCqQ1hC7yR+oFioEkhoEkM2JU7YGBt1yuE+/807SM95JUskGsVVPTkFzAfwAAAAASUVORK5CYII=" />
            </div>
            </div>
        </div>




    <Link to={"/search"}>
    <div className='m-10 min-h-full flex'>
        <input
            id="username"
            name="username"
            type="text"
            required
            className="appearance-none rounded-lg relative block w-full px-3 py-4 border bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder="Search Field ..."
            />
    </div>
    </Link>

    <div className='m-10 min-h-full'>
        <div className=" justify-center appearance-none relative  w-full px-3 py-4  bg-red-500 p-5 rounded-lg text-white">

          <div className='p-1 ml-4'>
          <p className='text-2xl font-bold'>Nagoya Field</p>
          <p className='text-sm font-light'>Waiting For Confirmation</p>
          </div>

          <div className="bg-gray-800 rounded-tl-lg rounded-br-lg  p-1 mt-4  w-36 ml-auto text-right shadow-lg">
            <p className='mr-5 text-sm font-light'>See Details →</p>
          </div>
        </div>
    </div>

    <div className='m-10 min-h-full flex flex-row space-x-4 justify-between'>
      <p className=" font-semibold text-gray-900 dark:text-white">Field Category</p>

      <Link to={"/category"}>
      <p className=" text-sm font-semibold text-red-600 dark:text-white">See Details →</p>
      </Link>
    </div>

    <div className='ml-10 flex flex-row'>

        <Link to={"/category"}>
          <Category children={"Futsal"}/>
        </Link>
        <Link to={"/category"}>
          <Category children={"Badminton"}/>
        </Link>
        <Link to={"/category"}>
          <Category children={"Basket"}/>
        </Link>

    </div>


    <div className='m-10 min-h-full flex flex-row space-x-4 justify-between'>
      <p className=" font-semibold text-gray-900 dark:text-white">Information</p>

      <Link to={"/news"}>
      <p className=" text-sm font-semibold text-red-600 dark:text-white">See Details →</p>
      </Link>
    </div>

    <div className='ml-10'>

        <Link to={"/detailnews"}>
          <News/>
        </Link>
       <News/>
       <News />

    </div>

    <BottomNav/>

</>
  )
}
