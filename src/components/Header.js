import React from 'react'

const Header = () => {
  return (
    <div className='flex  w-full border justify-between items-center  border-stone-600 shadow-2xl'>
        <h2 className='font-bold p-1 mx-3 text-lg'>nani</h2>
        <ul className='flex p-2 m-4 items-center'>
            <li className='text-blue-700 p-5 text-xl '>home</li>
            <li className='text-blue-700 p-5 text-xl '>about</li>
            <li className='text-blue-700 p-5 text-xl '>contact</li>
        </ul>
      
    </div>
  )
}

export default Header
