import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../component/footer'

export default function Login() {
  return (
      <>
        <div className="m-10 min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-red-600">
                    Sports FBA
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Sports Field Booking Application
                </p>
                </div>
                <form action="#" method="POST">

                <div className='my-4'>
                <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-4 border bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                />
                </div>
                <div className='my-4'>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-lg relative block w-full px-3 py-4 border bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
                </div>

                {/* <div className="flex items-center justify-between">

                    <div className="text-sm">
                    <a href="#" className="text-right font-medium text-gray-600 hover:text-red-500">
                        Forgot password?
                    </a>
                    </div>
                </div> */}

                <div className='my-10'>
                    <Link to="/home">
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-4 px-4 pb-5 border border-transparent font-bold rounded-md 
                    text-white 
                    underline underline-offset-4 decoration-gray-700
                    text-lg decoration-4
                    bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                    Login
                    </button></Link>
                </div>
                
                </form>

                    {/* <a href="#" className="mt-2 text-center text-sm text-gray-600">
                        Forgot password?
                    </a> */}

                <p className="mt-2 text-center text-sm text-gray-600">
                    don't have an account yet? <br/> <Link to="/register" ><span className='text-red-600 hover:underline underline-offset-4'>Register </span> </Link> here
                </p>
            </div>

        </div>
        <Footer/>
    </>
  )
}
