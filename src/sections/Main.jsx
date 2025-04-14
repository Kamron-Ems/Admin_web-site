import React from 'react'
import Header from '../components/Headers'
import { FaFacebookF , FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import OurChart from '../components/OurChart'

function Main() {
  return (
    <section className='w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center p-4 gap-2 ' >
      <Header/>

      {/* main section starts here */}
      <div id='main-section' 
        className='grid lg:grid-cols-3 gid-cols-1 gap-4 w-full h-screen '  
      >
        <div
          id='left'
          className='col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full'
        >
          {/* three grid layout */}

          <div
            className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mb-4'
          >
            {/* first One */}
            <div 
              className=' w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer ' >
                <div
                  className='w-full flex justify-between items-center'
                >
                  <h1 className='text-md text-black font-semibold'> Facebook </h1>
                  <h1 className='text-green-600 font-semibold ' >+21.75%</h1>
                </div>

                <div className='w-full flex justify-between items-center' >
                  <div className='flex flex-col justify-center items-start gap-1' >
                    <h1 className='text-xl text-black font-semibold' >10,328</h1>
                    <p className='text-slate-700' > Followers </p>
                  </div>
                  <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full ' >
                    <FaFacebookF className='w-[30px] h-[30px] ' />
                  </div>
                </div>
            </div>

            {/* Second One */}

            <div 
              className=' w-full flex flex-col justify-center items-center bg-red-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer ' >
                <div
                  className='w-full flex justify-between items-center'
                >
                  <h1 className='text-md text-black font-semibold'> Instagram </h1>
                  <h1 className='text-red-600 font-semibold ' >+21.75%</h1>
                </div>

                <div className='w-full flex justify-between items-center' >
                  <div className='flex flex-col justify-center items-start gap-1' >
                    <h1 className='text-xl text-black font-semibold' >23,328</h1>
                    <p className='text-slate-700' > Followers </p>
                  </div>
                  <div className='bg-red-400 hover:bg-red-500 cursor-pointer text-black p-3 rounded-full ' >
                    <FaFacebookF className='w-[30px] h-[30px] ' />
                  </div>
                </div>
            </div>

            {/* third One */}

            <div 
              className=' w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer ' >
                <div
                  className='w-full flex justify-between items-center'
                >
                  <h1 className='text-md text-black font-semibold'> Twitter </h1>
                  <h1 className='text-green-600 font-semibold ' >+21.75%</h1>
                </div>

                <div className='w-full flex justify-between items-center' >
                  <div className='flex flex-col justify-center items-start gap-1' >
                    <h1 className='text-xl text-black font-semibold' >34,328</h1>
                    <p className='text-slate-700' > Followers </p>
                  </div>
                  <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full ' >
                    <FaFacebookF className='w-[30px] h-[30px] ' />
                  </div>
                </div>
            </div>

          </div>
      {/* grid layout ends here */}

      <OurChart/>
        </div>
      {/* left section ends here */}

      {/* right section starts from here */}

      <div id="right" 
        className='p-2 flex flex-col justify-center items-center gap-4 h-full ' 
      >
        <div id='top' 
          className='bg-slate-100 p-8 w-full rounded-xl flex flex-col justify-center items-center gap-6 h-fit '
        >
          <div id='image-box' ></div>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Main
