import React from 'react'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between bg-white px-8 h-16 place-items-center'>
        <div>
            <img src="../../public/logo.png" alt="" className='w-24'/>
        </div>
        <div className='flex flex-row place-items-center'>
            <a href="#">
                <div className='mr-4'><i className="fa-solid fa-envelope text-[#BDBDBD] text-xl hover:text-[#A2A2A2]"></i></div>
            </a>
            <InputSearch placeholder='Search Employee'/>
        </div>
    </div>
  )
}

export default Navbar