"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'




function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const onLogOut = async() => {
      try {
        setLoading(true)
        const response = await axios.get('/api/users/logout')
        alert(response.data.message)
        router.push('/login')
        console.log(response.data)
         
        
      }catch(error: any) {
        console.log(error.message)
      }finally {
        setLoading(false)
      }
  }
  return (
    <div className="font-[Poppins] font-md capitalize text-center flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-[25px]">ProfilePage</h1>
        <p>{loading ? 'logging out now...' : 'you are successfully logged in'}</p>
        <button onClick={onLogOut} className="bg-red-600 p-5 rounded-lg uppercase">logout</button>
    </div>
  )
}

export default ProfilePage