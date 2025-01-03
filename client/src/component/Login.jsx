import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";

import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className='flex flex-col bg-slate-300  justify-center items-center w-screen h-screen'>

            <div className="w-96 h-auto bg-white rounded-lg p-14 shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">Login</h1>


                <form className="flex flex-col space-y-4 w-full">

                    <div className='flex relative items-center'>
                        <MdEmail className='absolute left-3 text-gray-500' />

                        <input
                            type="email"
                            placeholder="email"
                            className='pl-10 py-2 border rounded-md w-full '
                        />
                    </div>

                    <div className='flex relative items-center'>
                        <MdPassword className='absolute left-3 text-gray-500' />

                        <input
                            type="password"
                            placeholder="Password"
                            className='pl-10 py-2 border rounded-md w-full '
                        />
                    </div>

                    <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        Submit
                    </button>
                </form>
                <div className='flex mt-4 space-x-20'>
                    <p className='text-sm'>did not register ? </p>
                    <Link to="/">
                        <p className="text-sm text-blue-600 underline cursor-pointer">Register</p>
                    </Link>               
                 </div>
            </div>


        </div>
    )
}
