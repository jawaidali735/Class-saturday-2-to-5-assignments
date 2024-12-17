import React from 'react'

const GridAssign1 = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-[100px_200px_200px_100px] p-20 gap-5'>
    <div className='py-5 text-center bg-yellow-400 row-span-3'>Nav</div>
    <div className='py-5 text-center bg-yellow-400 col-span-3 '>Header</div>
    <div className='py-5 text-center bg-yellow-400 col-span-2 row-span-2'>Artical</div>
    <div className='py-5 text-center bg-yellow-400 row-span-3'>Ads</div>
    <div className='py-5 text-center bg-yellow-400 col-span-3 '>Footer</div>
    

   </div>

  
  )
}

export default GridAssign1
