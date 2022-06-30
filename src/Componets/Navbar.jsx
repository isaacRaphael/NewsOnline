import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-primary w-full h-16 sticky top-0 shadow-lg'>
        <div className='w-[80%] mx-auto h-[100%] flex justify-start items-center'>
            <h1 className='text-white text-[24px]'>NewsOnline</h1>
        </div>      
    </nav>
  )
}

export default Navbar