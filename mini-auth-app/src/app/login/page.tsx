"use client";
import Link from 'next/link';
import React from 'react';



function LoginPage() {
  return (
    <div className="font-[Poppins] font-md capitalize text-center flex flex-col justify-center items-center min-h-screen">
         <h1 className="text-[25px]">loggin here ..</h1>
         <form>
            <div className='py-2'>
                <label htmlFor='username'>email</label>
            </div>
            <div className='py-2'>
                <input type="email" className="p-3 rounded-lg text-black" placeholder='@email' />
            </div>
            <div className='py-2'>
                <label htmlFor='username py-2'>password</label>
            </div>
            <div className='py-2'>
                <input type="password" className="p-3 rounded-lg text-black" placeholder='password' />
            </div>
            <div className='py-2'>
                <button className="bg-teal-500 p-3 px-20 rounded-lg capitalize ">loggin</button>
            </div>
         </form>
         <div className='py-2'>
                <Link href="/signup">sign up here..</Link>
         </div>
    </div>
  )
}

export default LoginPage;