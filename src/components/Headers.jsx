import React from 'react'
import { IoSearch } from 'react-icons/io5'
import {IoIosArrowDown} from 'react-icons/io'
import { TbUsers } from "react-icons/tb";
// import client from ''

function Headers() {
  return (
    <section
      className='w-full bg-slate-100 lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4 '
    >
      <div>
        <h1 className='text-2xl font-semibold '> Overview </h1>
      </div>
      <div className='flex justify-between items-center gap-10 ' >
        <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all ' />
        {/* Client Info */}
        <div id='client-info' className=' flex justify-center items-center gap-4 ' >
          <TbUsers className=' rounded-full w-12 h-12 text-teal-400 ' />
          <div className=' flex justify-center flex-col items-start ' >
            <div className='flex justify-center items-center -mb-1 gap-2 ' >
              <h1 className='text-lg font-semibold' > Hi, JAck</h1><IoIosArrowDown/>
            </div>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headers
