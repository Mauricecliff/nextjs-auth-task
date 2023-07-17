import React from 'react'

function ProfilePage() {
  return (
    <div className="font-[Poppins] font-md capitalize text-center flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-[25px]">ProfilePage</h1>
        <p>you are successfully logged in</p>
        <button className="bg-red-600 p-5 rounded-lg uppercase">logout</button>
    </div>
  )
}

export default ProfilePage