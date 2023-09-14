import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[20vw] bg-white rounded-md fixed h-[10vh]'>
        <ul className='p-6 leading-[50px] '>
            <li><i className="fa-solid fa-house"></i> Dashboard</li> 
           <li><i className="fa-solid fa-user"></i> Employee</li> 
           <li><i className="fa-solid fa-timeline"></i> History</li> 
           <li><i className="fa-solid fa-square-poll-vertical"></i> Result Key</li> 
           <li><i className="fa-solid fa-circle-info"></i> About</li> 
        </ul>
    </div>
  )
}

export default Sidebar