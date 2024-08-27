import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='grid grid-flow-col shadow-lg p-2 items-center '>
        <div className='flex items-center col-span-1 gap-5'>
            <GiHamburgerMenu size={30} />
            <img alt="menu" className='h-20' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' />
        </div>
        <div className='col-span-10 px-20'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
            <button className='border border-gray-400 p-2 rounded-r-full'>Search</button>

        </div>
        <div>
        <FaUserCircle size={30} />
        </div>
         
    </div>
  )
}

export default Header