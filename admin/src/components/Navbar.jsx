import React from 'react'
import{assets} from "../assets/admin_assets/assets"

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-[4%] py-2'>
        <img src={assets.logo} className='w-[max(10%,80px)]' />
        <button onClick={(e) => setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar