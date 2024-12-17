import React from 'react'

const GridAssign2 = () => {
  return (
    <div id='assign' className='grid grid-cols-3 grid-rows-[100px_200px_200px_100px] border-2   p-20 gap-5 shadow-md bg-[#383b57]'>
    <div className='py-5 text-center bg-gradient-to-r from-purple-500 to-[#8774e0] col-span-3 border-2  border-black'></div>
    <div className='py-5 text-center bg-gradient-to-r from-[#34c4bb] to-[#7ab6c0] row-span-2  border-2 border-black'></div>
    <div className='py-5 text-center bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500 col-span-2 border-2 border-black '></div>
    
    <div className='py-5 text-center bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500  border-2 border-black'></div>
    <div className='py-5 text-center bg-gradient-to-r from-purple-500 via-blue-500 to-sky-500   border-2 border-black'></div>
    <div className='py-5 text-center bg-gradient-to-r from-purple-500 to-[#8774e0]  col-span-3  border-2 border-black'></div>

   </div>
  )
}

export default GridAssign2